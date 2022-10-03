import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "../../../../public/counter/infrastructure/store";


const rootReducers = combineReducers({
    counter: counterReducer,
});

const appStoreImplementation = createStore(rootReducers, applyMiddleware(thunk));

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation }
export type { AppRootState };
