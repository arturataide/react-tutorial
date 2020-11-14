import axios, {AxiosResponse} from 'axios';
import {Constructor, SimpleGenericSerializer} from '../Utils/SimpleGenericSerializer.utils';
import {QueryParamsUtils} from '../Utils/QueryParams.utils';
import {Info} from '../Entities/Info.entity';

export interface IBaseRequestPayload {
    endpoint: string;
    queryParams?: any;
}

export interface IGetRequestPayload extends IBaseRequestPayload {
    id: string;
}

interface IMultiResults<T> {
    info: Info;
    results: Array<T>
}


export class BaseHttpService {
    private readonly URL = 'https://rickandmortyapi.com/api';

    public getOne<T>(payload: IGetRequestPayload, destinationConstructor: Constructor<T>): Promise<T> {
        return axios.get(this.fetchUrl(payload.endpoint, payload.queryParams, payload.id)).then(
            ({data}: AxiosResponse<T>) => SimpleGenericSerializer.fromJson<T>(data, destinationConstructor));

    }

    public getMulti<T>(payload: IBaseRequestPayload, destinationConstructor: Constructor<T>): Promise<Array<T>> {
        return axios.get(this.fetchUrl(payload.endpoint, payload.queryParams)).then(
            ({data}: AxiosResponse<IMultiResults<T>>) => SimpleGenericSerializer.fromJsonArray<T>(data.results, destinationConstructor));

    }

    private fetchUrl<TParams>(
        endpoint: string,
        queryParams: TParams,
        id?: string
    ): string {
        const _id = id ? `/${id}` : '';
        return queryParams
            ? `${this.URL}/${endpoint}${_id}?${QueryParamsUtils.fetchQueryParams<TParams>(
                queryParams,
            )}`
            : `${this.URL}/${endpoint}`;
    }
}
