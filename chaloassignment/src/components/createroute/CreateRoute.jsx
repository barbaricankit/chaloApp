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

const CreateRoute = () => {
  const {
    createRoute: { route, stops, error },
    dispatch,
  } = useCreateRoute();
  useEffect(() => {
    if (!route.routeId) {
      dispatch({ type: "SET_ROUTE_ID" });
    }
  }, []);
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
          {stops.map((stop) => (
            <StopDetails key={stop.stopId} stop={stop} stopId={stop.stopId} />
          ))}
          <div className={style.stop_error}>
            <Error message={error.stop} />
          </div>
        </div>
      </div>
      {stops.length > 0 && <SubmitBtn />}
    </>
  );
};

export default CreateRoute;
