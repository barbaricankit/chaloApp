import { Link } from "react-router-dom";
import style from "../../styles/homepage.module.css";

const ViewRoute = () => {
  return (
    <Link to="/routes">
      <button className={`${style.view_route_btn} border_none m_1 btn_pd br_4`}>
        View Routes
      </button>
    </Link>
  );
};
export default ViewRoute;
