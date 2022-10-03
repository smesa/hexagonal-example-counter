import { CounterEntity } from "../../domain/entities";
import * as actionTypes from "./counterActionTypes";
 
const setCounterAction = (counter: CounterEntity) => (dispatch: any) => {
    dispatch({
        type: actionTypes.SET_COUNTER,
        counter,
    })
}


const getCounterAction = () => (dispatch: any) => {
    dispatch({
        type: actionTypes.GET_COUNTER,
    })

    //TODO: Get counter from API
    return {
        value : 0 
    } 
}


