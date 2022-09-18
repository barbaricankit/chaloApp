import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import style from "../../styles/routes.module.css";

const EditIcon = ({ route }) => {
  return (
    <Link to={`/editroute/${route.routeId}`}>
      <span className={style.edit_btn}>
        <MdModeEdit />
      </span>
    </Link>
  );
};
export default EditIcon;
