import RouteDetail from "./RouteDetail";
import NavHeader from "../navheader/NavHeader";
import style from "../../styles/viewroutes.module.css";
import { useRoute } from "../../context/routes-context";

const ViewRoutes = () => {
  const { routes } = useRoute();
  return (
    <>
      <NavHeader />
      <div className={style.routes}>
        {routes.map((route) => (
          <RouteDetail route={route} />
        ))}
      </div>
    </>
  );
};

export default ViewRoutes;
