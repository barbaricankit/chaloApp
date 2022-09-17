import { IoMdAddCircleOutline } from "react-icons/io";
import style from "../../styles/createroute.module.css";

const AddStop = () => {

    return <div className={style.add_stop_btn} >
        <IoMdAddCircleOutline alt="Add Icon" />
        <span>Add Stops</span>
    </div>
}

export default AddStop