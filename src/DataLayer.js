//setup data layer
// keep track of data of basket

import { createContext, useContext, useReducer } from "react";

//this is data layer
export const DataLayerContext = createContext();

// build a provider
export const DataLayer = ({reducer, initialState, children}) =>(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)} >
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue =()=> useContext(DataLayerContext);
