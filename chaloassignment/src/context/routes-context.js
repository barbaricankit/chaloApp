import { createContext, useContext, useEffect, useState } from "react";
import { routesDB } from "../indexedDB/createDB";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);
  const [searchedBusText, setSearchedBusText] = useState("");

  useEffect(() => {
    (async () => {
      const result = await routesDB();
      setRoutes(result);
    })();
  }, []);

  const addRoute = (route, stops) => {
    setRoutes((routes) => [...routes, { ...route, stops }]);
    (async () => {
      await routesDB({ value: { ...route, stops }, add: true });
    })();
  };

  const searchedBus = (e) => {
    setSearchedBusText(e.target.value);
  };
  const removeRoute = (route) => {
    setRoutes((routes) =>
      routes.filter(({ routeId }) => routeId !== route.routeId)
    );
  };
  const filteredBuses = routes.filter((route) =>
    route.routeName.includes(searchedBusText)
  );
  return (
    <RouteContext.Provider
      value={{
        routes,
        setRoutes,
        addRoute,
        searchedBusText,
        setSearchedBusText,
        searchedBus,
        filteredBuses,
        removeRoute,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
