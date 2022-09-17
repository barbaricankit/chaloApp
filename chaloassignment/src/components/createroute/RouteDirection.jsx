import { useCreateRoute } from "../../context/createform-context";

const RouteDirection = () => {
    const { createRoute: { route: { direction } }, dispatch } = useCreateRoute();
    const enterRouteNumber = (e) => {
        dispatch({ type: "ENTER_ROUTE_NAME", payload: { value: e.target.value } })
    }
    return <div>
        <select value={direction} onChange={enterRouteNumber}>
            <option value="UP">Up</option>
            <option value="DOWN">Down</option>
        </select>
    </div>
}

export default RouteDirection