import { createContext, useContext, useReducer, useRef } from "react";
import { manageState } from "../reducers/createroute-reducer";

const CreateRouteContext = createContext();

export const CreateRouteProvider = ({ children }) => {
  const initialState = {
    route: {
      routeName: "",
      direction: "Up",
      routeId: "",
      status: "Active",
      stops: [],
    },
    error: {
      routeName: "",
      routeDirection: "",
      stops: [],
    },
  };
  const [createRoute, dispatch] = useReducer(manageState, initialState);
  const dragStartRef = useRef(null);
  const dragEnterRef = useRef(null);
  const addStops = () => {
    dispatch({ type: "ADD_NEW_STOP" });
  };

  return (
    <CreateRouteContext.Provider
      value={{ createRoute, dispatch, addStops, dragStartRef, dragEnterRef }}
    >
      {children}
    </CreateRouteContext.Provider>
  );
};

export const useCreateRoute = () => useContext(CreateRouteContext);
