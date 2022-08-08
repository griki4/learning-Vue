/*需要将网络请求进行抽离的原因：
*   1.大量的组件都需要进行网络请求，不做抽离代码大量重复
*   2.如果后续需要更换框架，工作量极大，代码相当不利于维护
*
*
* 使用创建实例的方式进行请求的原因
*   1.服务器可能是分布式的，意味着不同组件的baseURL可能不尽相同，因此不能将全局配置写死*/

import axios from "axios";

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    //2.axios拦截器的使用
    //请求拦截器
    /*需要拦截请求的原因
    *   1.config中包含了某些不符合服务器要求的信息
    *   2.发送网络请求的时候需要向用户展示一些加载中的图标
    *   3.网站需要登录才能请求资源，也就是需要token才能请求资源*/
    instance.interceptors.request.use(config => {
        console.log(config)
        return config//拦截器里一定要记得将拦截的结果处理后返回，否则无法进行数据获取
    }, err => {
        console.log(err)
    })
    //响应拦截器
    instance.interceptors.response.use(res => {
        console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })

    //3.发送网络请求
    //axios实例本身返回的就是Promise对象，直接调用即可
    return instance(config)
}


//回调函数的形式
/*export function request(config, success, failure) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    //2.发送网络请求
    instance(config)
        .then(res => {
            success(res)
        })
        .catch(err => {
            failure(err)
        })
}*/

//promise形式
/*
export function request(config) {
    return new Promise((resolve, reject) => {
        //1.创建axios实例
        const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/hy66',
            timeout: 5000
        })

        //2.发送网络请求
        instance(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}*/
