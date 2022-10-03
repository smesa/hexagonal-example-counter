import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../../../../shared";
import { CounterStore } from "../../domain";
import { CounterStoreState } from "./counterReducer";


const counterSelector = (state: AppRootState) => state.counter;


const useCounterStoreImplementation = (): CounterStore => { 

    const dispatch = useDispatch();
    
    const { counter, isLoading, isUpdating } = useSelector<
        AppRootState,
        CounterStoreState
    >(counterSelector);
    
    const loadInitialCounter = React.useCallback(() => { 
        
    }) 


}



export { useCounterStoreImplementation };