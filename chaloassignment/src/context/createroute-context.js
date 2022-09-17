import { createContext, useContext, useReducer } from "react";
import { manageState } from "../reducers/createroute-reducer";

const CreateRouteContext=createContext();

export const CreateRouteProvider =({children})=>{
    const initialState={
        route:{
            routeName:"",
            direction:"",
            routeId:"",
            status:"Active",

        },
        stops:[]
    }
    const [createRoute,dispatch]=useReducer(manageState,initialState);

    const addStops=()=>{
        dispatch({type:"ADD_NEW_STOP"})
    }
    
    return <CreateRouteContext.Provider value={{createRoute,dispatch,addStops}}>
        {children}
    </CreateRouteContext.Provider>
}

export const useCreateRoute=()=>useContext(CreateRouteContext);