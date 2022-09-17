import { useCreateRoute } from "../../context/createroute-context";
import Error from "../Error";

const RouteDirection = () => {
  const {
    createRoute: {
      route: { direction },
      error,
    },
    dispatch,
  } = useCreateRoute();
  const enterRouteNumber = (e) => {
    dispatch({
      type: "ENTER_ROUTE_DIRECTION",
      payload: { value: e.target.value },
    });
  };
  return (
    <div>
      <select value={direction} onChange={enterRouteNumber}>
        <option value="UP">Up</option>
        <option value="DOWN">Down</option>
      </select>
      <Error message={error.routeDirection} />
    </div>
  );
};

export default RouteDirection;
