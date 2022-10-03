import React from "react";
import { CounterStore } from "../../domain";
import { decrementCounterUseCase, getCounterUseCase, incrementCounterUseCase } from "../usecases";

function useCounterViewModel(store: CounterStore) { 

    const getCounter = React.useCallback(() => { 
        getCounterUseCase({
            loadInitialCounter: store.loadInitialCounter,
        })
    }, [store.loadInitialCounter]);
    
    const incrementCounter = React.useCallback(() => {
        incrementCounterUseCase({
            counter: store.counter,
            updateCounter: store.updateCounter,
            setCounter: store.setCounter,
        });
    }, [store.counter, store.updateCounter, store.setCounter]);


    const decrementCounter = React.useCallback(() => {
        decrementCounterUseCase({
            counter: store.counter,
            updateCounter: store.updateCounter,
            setCounter: store.setCounter,
        });
    }, [store.counter, store.updateCounter, store.setCounter]);

    return {
        count: store.counter?.value,
        isLoading: typeof store.counter === "undefined" || store.isLoading,
        cantDecrement: store.counter?.value === 0,
        getCounter,
        incrementCounter,
        decrementCounter,
    };

}


export { useCounterViewModel };