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
      <div className={style.meta_data}>
        <p>
          <span className="bold">Bus Number:</span> {route?.routeName}
        </p>
        <p>
          <span className="bold">Bus Direction:</span> {route?.direction}
        </p>
        <p>
          <span className="bold">Bus Status:</span> {route?.status}
        </p>
      </div>
      <div className={`bold ${style.stop_detail} ${style.table_header}`}>
        <p className={style.column_header}>Location Name</p>
        <p className={style.column_header}>Latitude</p>
        <p className={style.column_header}>Longitude</p>
      </div>
      <div>
        {route?.stops?.map((stop) => (
          <div
            className={`${style.stop_detail} ${style.table_data}`}
            key={stop.stopId}
          >
            <p className={style.column_data}>{stop.stopName}</p>
            <p className={style.column_data}>{stop.latitude}</p>
            <p className={style.column_data}>{stop.longitude}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleRoute;
