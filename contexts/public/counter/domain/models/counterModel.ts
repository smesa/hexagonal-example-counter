import { CounterEntity } from "../entities"

const create = (count: CounterEntity['value']) => (
    { value: count }
)

const increment = (counter: CounterEntity) => (
    { value: counter.value + 1 }
)

const decrement = (counter: CounterEntity) => (
    { value: Math.max(counter.value -1, 0) }
)

export { create, increment, decrement }