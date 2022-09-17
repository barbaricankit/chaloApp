import { createContext, useContext, useEffect, useState } from "react";
import { routesDB } from "../indexedDB/createDB";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);

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

  return (
    <RouteContext.Provider value={{ routes, setRoutes, addRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
