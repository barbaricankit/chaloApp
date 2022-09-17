import { useCreateRoute } from "../../context/createroute-context";

const RouteStatus = () => {
    const { createRoute: { route: { status } }, dispatch } = useCreateRoute();
    const enterRouteNumber = (e) => {
        dispatch({ type: "ENTER_ROUTE_NAME", payload: { value: e.target.value } })
    }
    return <div>
        <select value={status} onChange={enterRouteNumber}>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
        </select>
    </div>
}

export default RouteStatus