export const checkErrorMessages = ({ route, routes, edit }) => {
  const errorObj = {};
  let flag = false;
  if (!route.routeName) {
    errorObj.routeName = "Please enter the bus number";
    flag = true;
  } else {
    const sameRoutes = routes.filter(
      (rout) => rout.routeName === route.routeName
    );
    if (sameRoutes.length > 0) {
      const isRouteAlreadyPresent = sameRoutes.find(
        (sameRoute) => sameRoute.direction === route.direction
      );
      if (!edit && isRouteAlreadyPresent) {
        errorObj.routeDirection = "The bus detail is already present";
        flag = true;
      }
      if (edit) {
        const isRouteAlreadyPresent = sameRoutes.find(
          (sameRoute) =>
            sameRoute.direction === route.direction &&
            sameRoute.routeId !== route.routeId
        );
        if (isRouteAlreadyPresent) {
          errorObj.routeDirection = "There is a bus detail already present";
          flag = true;
        }
      }
    }
  }
  if (route?.stops.length < 2) {
    errorObj.stop = "Please enter atleast 2 stops for the route";
    flag = true;
  }
  if (route?.stops.length > 0) {
    errorObj.stops = route?.stops.map((stop) => {
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
  return { errorObj, flag };
};
