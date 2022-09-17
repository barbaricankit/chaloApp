import { useParams } from "react-router";
import { useRoute } from "../../context/routes-context";
import NavHeader from "../navheader/NavHeader";

const SingleRoute = () => {
  const { routes } = useRoute();
  const { routeId } = useParams();
  const route = routes.find((route) => route.routeId === routeId);

  return (
    <>
      <NavHeader />
      <p>{route.routeName}</p>
      <p>{route.direction}</p>
      <p>{route.status}</p>
      <div>
        {route.stops.map((stop) => (
          <>
            <span>{stop.stopName}</span>
            <span>{stop.latitude}</span>
            <span>{stop.longitude}</span>
          </>
        ))}
      </div>
    </>
  );
};

export default SingleRoute;
