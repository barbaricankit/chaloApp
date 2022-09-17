import { Link } from "react-router-dom";
import style from "../../styles/homepage.module.css";

const RemoveRoute = () => {
  return (
    <Link to="/removeroute">
      <button
        className={`${style.remove_route_btn} border_none m_1 btn_pd br_4`}
      >
        Remove Route
      </button>
    </Link>
  );
};
export default RemoveRoute;
