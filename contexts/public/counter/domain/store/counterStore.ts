import { CounterEntity } from "../entities";

interface CounterStore {

    // State
    counter: CounterEntity | undefined;
    isLoading: boolean;
    isUpdating: boolean;

    // Actions
    loadInitialCounter: () => Promise<CounterEntity>;
    setCounter: (counter: CounterEntity) => void;
    updateCounter: (counter: CounterEntity) => Promise<CounterEntity> | undefined;

}

export type { CounterStore };