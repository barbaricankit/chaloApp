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
        stops: [
          ...state.stops,
          {
            stopId: uuid(),
            stopName: "",
            latitude: "",
            longitude: "",
          },
        ],
      };

    case "ENTER_STOP_NAME":
      return {
        ...state,
        stops: state.stops.map((stop) =>
          stop.stopId !== action.payload.stopId
            ? stop
            : { ...stop, stopName: action.payload.stopName }
        ),
      };
    case "ENTER_LATITUDE":
      return {
        ...state,
        stops: state.stops.map((stop, index) =>
          stop.stopId !== action.payload.stopId
            ? stop
            : { ...stop, latitude: action.payload.latitude }
        ),
      };
    case "ENTER_LONGITUDE":
      return {
        ...state,
        stops: state.stops.map((stop, index) =>
          stop.stopId !== action.payload.stopId
            ? stop
            : { ...stop, longitude: action.payload.longitude }
        ),
      };
    case "SET_ERROR_MESSAGES":
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
