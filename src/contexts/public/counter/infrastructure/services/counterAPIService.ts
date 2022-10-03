import { CounterEntity } from "../../domain/entities";
import httpClient from '../../../../shared/infrastructure/services/api/httpClient';
import { create } from "../../domain";

const BASE_URL = 'http://localhost:3000';

const getCounter = (): Promise<CounterEntity> => httpClient.get<number>(BASE_URL).then((response) => create(response.data))
const updateCounter = (counter: CounterEntity): Promise<CounterEntity> => httpClient.put<number>(BASE_URL, { counter: counter.value }).then((response) => create(response.data))

export { getCounter, updateCounter }