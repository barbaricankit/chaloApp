import RemoveIcon from "../removeroute/RemoveIcon";
import EditIcon from "../editroute/EditIcon";
import style from "../../styles/routes.module.css";
import { Link } from "react-router-dom";

const RouteDetail = ({ route, index }) => {
  return (
    <div
      className={`${style.route_detail} ${
        index % 2 == 0 ? style.even_list_data : style.odd_list_data
      }`}
    >
      <Link to={`/route/${route.routeId}`} className={style.route_link}>
        <div className={style.route_info}>
          <p>{route.routeName}</p>
          <p>{route.direction}</p>
          <p className={style.route_status}>{route.status}</p>
        </div>
      </Link>
      <div className={style.edit_remove_btns}>
        <EditIcon route={route} />
        <RemoveIcon route={route} />
      </div>
    </div>
  );
};

export default RouteDetail;
