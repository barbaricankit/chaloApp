import { useCreateRoute } from "../../context/createroute-context";
import { useRoute } from "../../context/routes-context";
import style from "../../styles/createroute.module.css";

const SubmitBtn = () => {
  const {
    createRoute: { route, stops },
    createRoute,
    dispatch,
  } = useCreateRoute();
  const { routes, addRoute } = useRoute();

  const submit = () => {
    const errorObj = {};
    let flag = false;
    if (!route.routeName) {
      errorObj.routeName = "Please enter the bus number";
      flag = true;
    } else {
      const isRoutePresent = routes.find(
        (rout) => rout.routeId === route.routeId
      );
      if (isRoutePresent) {
        if (isRoutePresent.direction === route.direction) {
          errorObj.routeDirection = "The bus detail is already present";
        }
        flag = true;
      }
    }
    if (stops.length < 2) {
      errorObj.stop = "Please enter atleast 2 stops for the route";
      flag = true;
    }
    if (stops.length > 0) {
      errorObj.stops = stops.map((stop) => {
        const obj = {};
        obj.stopId = stop.stopId;
        if (!stop.stopName) {
          flag = true;
          obj.stopName = "Please enter the stopName";
        }
        if (!stop.latitude) {
          flag = true;
          obj.latitude = "Please enter the latitude";
        }
        if (!stop.longitude) {
          flag = true;
          obj.longitude = "Please enter the longitude";
        }
        return obj;
      });
    }
    if (flag) {
      dispatch({ type: "SET_ERROR_MESSAGES", payload: { error: errorObj } });
    } else {
      addRoute(route, stops);
    }
  };
  return (
    <div className={style.submit} onClick={submit}>
      <button className={`${style.submit_btn} border_none btn_pd m_1 br_4`}>
        Submit
      </button>
    </div>
  );
};

export default SubmitBtn;
