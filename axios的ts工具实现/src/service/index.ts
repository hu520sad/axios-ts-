
import { BASE_URL, TIME_OUT } from "./config";
import ZhRequest from "./request";


const zhRequest = new ZhRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestSuccessFn: (config) => {
            console.log('单独添加的请求成功拦截');
            return config
        },
        requestFailureFn: (err) => {
            console.log('单独添加的请求失败拦截');
            return err
        },
        responseSuccessFn: (config) => {
            console.log('单独添加的响应成功拦截');
            return config
        },
        responseFailureFn: (err) => {
            console.log('单独添加的响应失败拦截');
            return err
        }
    }
})

export default zhRequest