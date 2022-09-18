import { v4 as uuid } from "uuid";

export const manageState = (state, action) => {
  switch (action.type) {
    case "SET_ROUTE_ID":
      return {
        ...state,
        route: { ...state.route, routeId: uuid() },
      };
    case "ENTER_ROUTE_NAME":
      return {
        ...state,
        route: { ...state.route, routeName: action.payload.value },
      };
    case "ENTER_ROUTE_DIRECTION":
      return {
        ...state,
        route: { ...state.route, direction: action.payload.value },
      };
    case "ENTER_ROUTE_STATUS":
      return {
        ...state,
        route: { ...state.route, status: action.payload.value },
      };
    case "ADD_NEW_STOP":
      return {
        ...state,
        route: {
          ...state.route,
          stops: [
            ...state.route.stops,
            {
              stopId: uuid(),
              stopName: "",
              latitude: "",
              longitude: "",
            },
          ],
        },
      };
    case "DELETE_STOP":
      return {
        ...state,
        route: {
          ...state.route,
          stops: state.route.stops.filter(
            ({ stopId }) => stopId !== action.payload.stopId
          ),
        },
      };
    case "ENTER_STOP_NAME":
      return {
        ...state,
        route: {
          ...state.route,
          stops: state.route.stops.map((stop) =>
            stop.stopId !== action.payload.stopId
              ? stop
              : { ...stop, stopName: action.payload.stopName }
          ),
        },
      };
    case "ENTER_LATITUDE":
      return {
        ...state,
        route: {
          ...state.route,
          stops: state.route.stops.map((stop, index) =>
            stop.stopId !== action.payload.stopId
              ? stop
              : { ...stop, latitude: action.payload.latitude }
          ),
        },
      };
    case "ENTER_LONGITUDE":
      return {
        ...state,
        route: {
          ...state.route,
          stops: state.route.stops.map((stop, index) =>
            stop.stopId !== action.payload.stopId
              ? stop
              : { ...stop, longitude: action.payload.longitude }
          ),
        },
      };
    case "SET_ERROR_MESSAGES":
      return {
        ...state,
        error: action.payload.error,
      };
    case "RESET_ERROR_MESSAGES":
      return {
        ...state,
        error: {
          routeName: "",
          routeDirection: "",
          stops: [],
        },
      };
    case "SET_ROUTE_DETAILS":
      return {
        ...state,
        route: action.payload.route,
      };
    case "RESET_STATE":
      return {
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
    default:
      return state;
  }
};
