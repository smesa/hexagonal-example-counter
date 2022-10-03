import { increment } from "../../domain/models";
import { UpdateCounterStore, updateCounterUseCase } from "./updateCounterUseCase";

const incrementCounterUseCase = (store: UpdateCounterStore) => {
     return updateCounterUseCase(store, increment )
}

export { incrementCounterUseCase };