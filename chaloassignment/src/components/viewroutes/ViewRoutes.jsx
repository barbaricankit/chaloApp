import RouteDetail from "./RouteDetail";
import NavHeader from "../navheader/NavHeader";
import style from "../../styles/routes.module.css";
import SearchBus from "./SearchBus";
import { useRoute } from "../../context/routes-context";

const ViewRoutes = () => {
  const { filteredBuses } = useRoute();
  return (
    <>
      <NavHeader />
      <div className={style.routes}>
        <SearchBus />

        <div className={style.routes_list_header}>
          <div className={style.routes_list_detail_header}>
            <p>Bus Number</p>
            <p>Direction</p>
            <p>Status</p>
          </div>
          <div className={style.routes_list_btn_header}>
            <p className={style.edit_btn}>Edit</p>
            <p className={style.edit_btn}>Remove</p>
          </div>
        </div>

        {filteredBuses.map((route, index) => (
          <RouteDetail
            key={route.routeId}
            route={route}
            remove={true}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default ViewRoutes;
