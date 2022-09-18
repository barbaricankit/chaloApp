import AddStop from "./AddStop";
import Route from "./Route";
import RouteDirection from "./RouteDirection";
import RouteStatus from "./RouteStatus";
import NavHeader from "../navheader/NavHeader";
import StopDetails from "./StopDetails";
import style from "../../styles/createroute.module.css";
import SubmitBtn from "./SubmitBtn";
import Error from "../Error";
import { useCreateRoute } from "../../context/createroute-context";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useRoute } from "../../context/routes-context";

const CreateRoute = () => {
  const { routeId } = useParams();
  const { routes } = useRoute();
  const {
    createRoute: { route, error },
    dispatch,
  } = useCreateRoute();
  useEffect(() => {
    if (routeId && routes?.length > 0) {
      dispatch({
        type: "SET_ROUTE_DETAILS",
        payload: { route: routes.find((route) => route.routeId === routeId) },
      });
    } else if (!route.routeId) {
      dispatch({ type: "SET_ROUTE_ID" });
    }
    return () => {
      dispatch({ type: "RESET_STATE" });
    };
  }, [routes]);
  console.log(routeId, routes);
  return (
    <>
      <NavHeader />
      <div className={style.create_form}>
        <div className={style.route_details}>
          <Route />
          <div className={style.route_dir_status}>
            <RouteDirection />
            <RouteStatus />
            <AddStop />
          </div>
          {route?.stops.map((stop) => (
            <StopDetails key={stop.stopId} stop={stop} stopId={stop.stopId} />
          ))}
          <div className={style.stop_error}>
            <Error message={error.stop} />
          </div>
        </div>
      </div>
      {route?.stops.length > 0 && <SubmitBtn edit={routeId ? true : false} />}
    </>
  );
};

export default CreateRoute;
