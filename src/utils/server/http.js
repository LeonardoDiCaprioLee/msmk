import axios from 'axios';
// import Vue from 'vue'
// import loading from "@/components"
// Vue.use(loading)
import {Guid} from './guid'
const server = axios.create({
    baseURL: "http://120.53.31.103:84",
    timeout: 10000 // 请求超时的时间
})

// 请求拦截
server.interceptors.request.use(config => {
    config.headers = {
        deviceType: "H5"
    }
    // Vue.$loading.show();
    let ID = Guid.NewGuid().ToString('D')
    window.sessionStorage.setItem('DeviceID',ID)
    if (localStorage.getItem('token')) {
        config.headers = {
            DeviceType: 'H5',
            DeviceID: window.sessionStorage.getItem('DeviceID',ID),
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    }
<<<<<<< HEAD


=======
>>>>>>> 904a058faea04abca01c7d88706bf7cd3f67419b
    return config
}, err => {
    console.log(err);
})

// 响应拦截
// res 服务器返回的数据信息
server.interceptors.response.use(res => {
    if (res.data == '无效token') {
        alert('token无效，请重新登录')
        // Vue.$loading.hide()
    } else {
        // Vue.$loading.hide()
        return res
    }
}, err => {
    // 只是作为参考的例子 具体情况要看服务器真实的返回数据
    // console.log(err);

    switch (err.code) {
        case 500: console.log('服务器错误'); break;
        case 404: console.log('页面找不到了'); break;
        default:
            return Promise.reject(err)
            break;
    }
})

export default server;