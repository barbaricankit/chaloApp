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

  const addRoute = (route) => {
    setRoutes((routes) => [...routes, { ...route }]);
    (async () => {
      await routesDB({ value: { ...route }, add: true });
    })();
  };
  const editRoute = (route) => {
    setRoutes((routes) =>
      routes.map((rout) => (rout.routeId === route.routeId ? route : rout))
    );
    (async () => {
      await routesDB({ value: route, edit: true });
    })();
  };
  const searchedBus = (e) => {
    setSearchedBusText(e.target.value);
  };
  const removeRoute = (route) => {
    setRoutes((routes) =>
      routes.filter(({ routeId }) => routeId !== route.routeId)
    );
    (async () => {
      await routesDB({ value: route, remove: true });
    })();
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
        editRoute,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
