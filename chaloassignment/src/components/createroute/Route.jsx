import { useCreateRoute } from "../../context/createroute-context";
import style from "../../styles/createroute.module.css"

const Route = () => {
    const { createRoute: { route: { routeName } }, dispatch } = useCreateRoute();
    const enterRouteNumber = (e) => {
        dispatch({ type: "ENTER_ROUTE_NAME", payload: { value: e.target.value } })
    }
    return <div className={style.route}>
        <input className={style.route_name} type="text" placeholder="Enter Route/Bus Number" value={routeName} onChange={enterRouteNumber} />
    </div>
}

export default Route