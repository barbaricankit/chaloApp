import AddStop from "./AddStop";
import Route from "./Route";
import RouteDirection from "./RouteDirection";
import RouteStatus from "./RouteStatus";
import style from "../../styles/createroute.module.css"
import NavHeader from "../navheader/NavHeader";

const CreateRoute = () => {

    return <>
        <NavHeader />
        <div className={style.create_form}>
            <div className={style.route_details}>
                <Route />
                <div className={style.route_dir_status}>
                    <RouteDirection />
                    <RouteStatus />
                </div>
                <AddStop />
            </div>
        </div>
    </>
}

export default CreateRoute