import AddStop from "./AddStop";
import Route from "./Route";
import RouteDirection from "./RouteDirection";
import RouteStatus from "./RouteStatus";
import NavHeader from "../navheader/NavHeader";
import StopDetails from "./StopDetails";
import style from "../../styles/createroute.module.css";
import { useCreateRoute } from "../../context/createroute-context";

const CreateRoute = () => {
  const {
    createRoute: { stops },
  } = useCreateRoute();
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
        </div>
      </div>
    </>
  );
};

export default CreateRoute;
