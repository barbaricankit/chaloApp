export const manageState=(state,action)=>{

    switch(action.type){
        case "ENTER_ROUTE_NAME":
            return {...state,route:{...state.route,routeName:action.payload.value}};
        case "ADD_NEW_STOP":
            return {...state,stops:[...state.stops,{
                stopId:"",
                stopName:"",
                latitude:"",
                longitude:""
            }]}
        default :
        return state
    }
}