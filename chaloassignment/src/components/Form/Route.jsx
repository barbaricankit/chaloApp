import { useCreateForm } from "../../context/createform-context";

const Route=()=>{
    const {createRoute:{route:{routeName}},dispatch}=useCreateForm();
    const enterRouteNumber=(e)=>{
        dispatch({type:"ENTER_ROUTE_NAME",payload:{value:e.target.value}})
    }
    return <div>
        <input type="text" placeholder="Enter Route/Bus Number" value={routeName} onChange={enterRouteNumber}/>
    </div>
}

export default Route