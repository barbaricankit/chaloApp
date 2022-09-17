import { createContext, useContext, useReducer } from "react";
import { manageState } from "../reducers/createform-reducer";

const CreateFormContext=createContext();

export const CreateFormProvider =({children})=>{
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
    
    return <CreateFormContext.Provider value={{createRoute,dispatch,addStops}}>
        {children}
    </CreateFormContext.Provider>
}

export const useCreateForm=()=>useContext(CreateFormContext);