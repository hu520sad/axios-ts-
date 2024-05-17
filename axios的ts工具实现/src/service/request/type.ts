import type { AxiosRequestConfig, AxiosResponse } from "axios"

interface ZHInterceptors<T = AxiosResponse> {
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig,
    requestFailureFn?: (err: any) => any,
    responseSuccessFn?: (res: T) => T,
    responseFailureFn?: (err: any) => any
}

export interface ZHRequest<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: ZHInterceptors<T>
}
