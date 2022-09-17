import { useCreateRoute } from "../../context/createroute-context";
import style from "../../styles/createroute.module.css";
const StopDetails = ({ stop, stopId }) => {
  const {
    createRoute: { stops },
    dispatch,
  } = useCreateRoute();

  const enterStopName = (e) => {
    dispatch({
      type: "ENTER_STOP_NAME",
      payload: { stopId, stopName: e.target.value },
    });
  };
  const enterLatitude = (e) => {
    dispatch({
      type: "ENTER_LATITUDE",
      payload: { stopId, latitude: e.target.value },
    });
  };
  const enterLongitude = (e) => {
    dispatch({
      type: "ENTER_LONGITUDE",
      payload: { stopId, longitude: e.target.value },
    });
  };
  return (
    <div className={style.stop_details}>
      <input
        type="text"
        placeholder="Stop Name"
        className={`${style.stop_name} m_0_5`}
        value={stop.stopName}
        onChange={enterStopName}
      />
      <input
        type="text"
        placeholder="Latitude"
        className={`${style.lat} m_0_5`}
        value={stop.latitude}
        onChange={enterLatitude}
      />
      <input
        type="text"
        placeholder="Longitude"
        className={`${style.long} m_0_5`}
        value={stop.longitude}
        onChange={enterLongitude}
      />
    </div>
  );
};

export default StopDetails;
