import { decrement } from "../../domain/models";
import { UpdateCounterStore, updateCounterUseCase } from "./updateCounterUseCase";

const decrementCounterUseCase = (store: UpdateCounterStore) => {
     return updateCounterUseCase(store, decrement )
}

export { decrementCounterUseCase };