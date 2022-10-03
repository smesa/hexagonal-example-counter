import { CounterStore } from "../../domain/store"

type GetCounterStore = Pick<CounterStore, 'loadInitialCounter'>;

const getCounterUseCase = (store: GetCounterStore) => {
    store.loadInitialCounter();
}

export {getCounterUseCase};