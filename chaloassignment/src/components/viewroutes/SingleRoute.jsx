import { useParams } from "react-router";
import { useRoute } from "../../context/routes-context";

const SingleRoute = () => {
  const { routes } = useRoute();
  const { routeId } = useParams();
  const route = routes.find((route) => route.routeId === routeId);
  return (
    <>
      <p>{route.routeName}</p>
      <p>{route.direction}</p>
      <p>{route.status}</p>
      <ul>
        {route.stops.map((stop) => (
          <li>{stop}</li>
        ))}
      </ul>
    </>
  );
};

export default SingleRoute;
