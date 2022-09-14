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
        source:{
            locationName:"",
            locationId:"",
            lat:"",
            long:"",

        },
        destination:{
            locationName:"",
            locationId:"",
            lat:"",
            long:"",
            
        },
        stops:[]
    }
    const [createRoute,dispatch]=useReducer(manageState,initialState)
    return <CreateFormContext.Provider value={{createRoute,dispatch}}>
        {children}
    </CreateFormContext.Provider>
}

export const useCreateForm=()=>useContext(CreateFormContext);