import { Link } from "react-router-dom";
import style from "../../styles/homepage.module.css";

const AddRoute = () => {
  return (
    <Link to="/createroute">
      <button className={`${style.add_route_btn} border_none m_1 btn_pd br_4`}>
        Add New Route
      </button>
    </Link>
  );
};

export default AddRoute;
