import { useParams } from "react-router";
import { useRoute } from "../../context/routes-context";
import Maps from "../map/Map";
import NavHeader from "../navheader/NavHeader";
import style from "../../styles/singleroute.module.css";
const SingleRoute = () => {
  const { routes } = useRoute();
  const { routeId } = useParams();
  const route = routes.find((route) => route.routeId === routeId);

  return (
    <>
      <NavHeader />
      {route?.stops[0].latitude && <Maps stops={route?.stops} />}
      <p>
        <span className="bold">Bus Number:</span> {route?.routeName}
      </p>
      <p>
        <span className="bold">Bus Direction:</span> {route?.direction}
      </p>
      <p>
        <span className="bold">Bus Status:</span> {route?.status}
      </p>
      <div className={`bold ${style.stop_detail}`}>
        <p>Location Name</p>
        <p>Latitude</p>
        <p>Longitude</p>
      </div>
      <div>
        {route?.stops?.map((stop) => (
          <div className={style.stop_detail}>
            <p>{stop.stopName}</p>
            <p>{stop.latitude}</p>
            <p>{stop.longitude}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleRoute;
