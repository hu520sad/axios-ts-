import zhRequest from "..";



zhRequest.get({
    url: "/home/multidata",
    interceptors: {
        requestSuccessFn: (config) => {
            console.log("单次实例的单独请求成功拦截");
            return config
        },
        responseSuccessFn: (res) => {
            console.log("单次实例单独响应成功拦截");
            return res
        }
    }
}).then(res => {
    console.log(res.data);
})