import { read, utils, writeFile } from "xlsx";
import { v4 as uuid } from "uuid";
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

export const handleImport = (e, setRoutes) => {
  const files = e.target.files;
  if (files?.length) {
    for (let file of files) {
      // files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const wb = read(e.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const busRoute = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          const stopDetails = utils.sheet_to_json(wb.Sheets[sheets[1]]);
          const routeDetails = busRoute.map((route) => {
            const stops = stopDetails.filter(
              (stop) => stop["Bus Id"] === route["Bus Id"]
            );

            return {
              routeName: route["Bus Number"].toString(),
              direction: route["Bus Direction"].toString(),
              routeId: uuid(),
              status: route["Bus Status"].toString(),
              stops: stops.map((stop) => ({
                stopId: uuid(),
                stopName: stop["Stop Name"],
                latitude: stop["Latitude"],
                longitude: stop["Longitude"],
              })),
            };
          });
          setRoutes(routeDetails);
        }
      };
      reader.readAsArrayBuffer(file);
    }
    return files.length > 1 ? `${files.length} files selected` : files[0].name;
  }
};

export const handleExport = (routes) => {
  try {
    const sheet1_headings = [
      ["Bus Id", "Bus Number", "Bus Direction", "Bus Status"],
    ];
    const sheet2_headings = [["Bus Id", "Stop Name", "Latitude", "Longitude"]];
    const wb = utils.book_new();
    const ws1 = utils.json_to_sheet([]);
    const ws2 = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws1, sheet1_headings);
    utils.sheet_add_aoa(ws2, sheet2_headings);
    const routeDetail = routes.map((route, index) => ({
      "Bus Id": index + 1,
      "Bus Number": route.routeName,
      "Bus Direction": route.direction,
      "Bus Status": route.status,
    }));
    const stopDetail = [];
    routes.forEach((route) => {
      const getBusDetail = routeDetail.find(
        (detail) =>
          detail["Bus Number"] === route.routeName &&
          detail["Bus Direction"] === route.direction
      );
      route.stops.map((stop) =>
        stopDetail.push({
          "Bus Id": getBusDetail["Bus Id"],
          "Stop Name": stop.stopName,
          Latitude: stop.latitude,
          Longitude: stop.longitude,
        })
      );
    });

    utils.sheet_add_json(ws1, routeDetail, { origin: "A2", skipHeader: true });
    utils.sheet_add_json(ws2, stopDetail, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws1, "Bus Details");
    utils.book_append_sheet(wb, ws2, "Stop Details");
    writeFile(wb, `Bus_Data_${new Date().toISOString()}.xlsx`);
    return "File Downloaded Successfully";
  } catch (err) {
    console.error(err);
    return `There was an issue downloading the file`;
  }
};
