export const manageState=(state,action)=>{

    switch(action.type){
        case "ENTER_ROUTE_NAME":
            return {...state,routeName:action.payload.value}
        default :
        return state
    }
}