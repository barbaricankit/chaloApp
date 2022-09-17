import AddStop from "./AddStop";
import Route from "./Route";
import RouteDirection from "./RouteDirection";
import RouteStatus from "./RouteStatus";

const CreateForm=()=>{

    return <div>
        <Route />
        <RouteDirection />
        <RouteStatus />
        <AddStop />
    </div>
}

export default CreateForm