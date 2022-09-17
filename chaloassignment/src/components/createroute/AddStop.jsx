import { IoMdAddCircleOutline } from "react-icons/io";
import { useCreateRoute } from "../../context/createroute-context";
import style from "../../styles/createroute.module.css";

const AddStop = () => {
    const { addStops } = useCreateRoute();
    return <div className={style.add_stop_btn} onClick={addStops}>
        <IoMdAddCircleOutline alt="Add Icon" />
        <span>Add Stops</span>
    </div>
}

export default AddStop