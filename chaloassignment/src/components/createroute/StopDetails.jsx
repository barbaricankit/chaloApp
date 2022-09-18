import { useCreateRoute } from "../../context/createroute-context";
import { BsFillTrashFill } from "react-icons/bs";
import style from "../../styles/createroute.module.css";
import Error from "../Error";
import { useRef } from "react";
const StopDetails = ({ stop, stopId, position }) => {
  const {
    createRoute: { error, route },
    dragStartRef,
    dragEnterRef,
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

  const err = error?.stops?.find((stop) => stop.stopId === stopId);
  const dragStart = () => {
    dragStartRef.current = position;
  };
  const dragEnter = () => {
    console.log(position);
    dragEnterRef.current = position;
  };
  console.log(dragEnterRef.current, position);
  const dragEnd = () => {
    console.log(dragEnterRef.current);
    const stopsList = [...route.stops];
    const draggableStop = stopsList[dragStartRef.current];
    stopsList.splice(dragStartRef.current, 1);
    stopsList.splice(dragEnterRef.current, 0, draggableStop);
    dispatch({ type: "UPDATE_STOP_ORDER", payload: { stops: stopsList } });
    dragStartRef.current = null;
    dragEnterRef.current = null;
  };
  return (
    <div
      className={style.stop_details}
      draggable
      onDragStart={() => dragStart(position)}
      onDragEnter={() => dragEnter(position)}
      onDragEnd={dragEnd}
    >
      <div className={`${style.stop_name} m_0_5`}>
        <input
          type="text"
          placeholder="Stop Name"
          className={`${style.stop_name_input}`}
          value={stop.stopName}
          onChange={enterStopName}
        />
        <Error message={err?.stopName} />
      </div>
      <div className={`${style.lat} m_0_5`}>
        <input
          type="text"
          placeholder="Latitude"
          className={`${style.lat_input}`}
          value={stop.latitude}
          onChange={enterLatitude}
        />
        <Error message={err?.latitude} />
      </div>
      <div className={`${style.long} m_0_5`}>
        <input
          type="text"
          placeholder="Longitude"
          className={`${style.long_input}`}
          value={stop.longitude}
          onChange={enterLongitude}
        />
        <Error message={err?.longitude} />
      </div>
      <span
        className={style.trash_icon}
        onClick={() => dispatch({ type: "DELETE_STOP", payload: { stopId } })}
      >
        <BsFillTrashFill />
      </span>
    </div>
  );
};

export default StopDetails;
