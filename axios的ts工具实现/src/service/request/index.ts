import axios from "axios"
import type { AxiosInstance } from "axios"
import type { ZHRequest } from "./type"

//1.每一个instance都添加拦截器
//2.针对某一个实例进行拦截追加
//3.针对某一个实例的请求进行追加拦截


class ZhRequest {
    instance: AxiosInstance
    constructor(config: ZHRequest) {
        this.instance = axios.create(config)

        this.instance.interceptors.request.use((config) => {

            console.log('全局请求成功')
            return config
        }, err => {
            console.log('全局请求失败')
            return err
        })
        this.instance.interceptors.response.use(res => {
            console.log("全局响应成功");
            return res.data
        }, err => {
            console.log(err);
            return err
        })

        //2.针对某一个实例进行拦截追加
        this.instance.interceptors.request.use(config.interceptors?.requestSuccessFn, config.interceptors?.requestFailureFn)
        this.instance.interceptors.response.use(config.interceptors?.responseSuccessFn, config.interceptors?.responseFailureFn)
    }
    //泛型参数传入
    request<T = any>(config: ZHRequest<T>) {
        //3.针对某一个实例的请求进行追加拦截
        if (config.interceptors?.requestSuccessFn) {
            config = config.interceptors.requestSuccessFn(config)
        }
        //返回T数据类型设置
        return new Promise<T>((resolve, reject) => {
            this.instance.request<any, T>(config).then((res) => {
                //3.针对某一个实例的请求进行追加拦截
                if (config.interceptors?.responseSuccessFn) {
                    res = config.interceptors.responseSuccessFn(res)
                }
                resolve(res)
            }).catch((err) => {
                reject(err);
            })
        })
    }

    get<T = any>(config: ZHRequest<T>) {
        return this.request({ ...config, method: "GET" })
    }
    post<T = any>(config: ZHRequest<T>) {
        return this.request({ ...config, method: "POST" })
    }
    delete<T = any>(config: ZHRequest<T>) {
        return this.request({ ...config, method: "DELETE" })
    }
    patch<T = any>(config: ZHRequest<T>) {
        return this.request({ ...config, method: "PATCH" })
    }
}

export default ZhRequest