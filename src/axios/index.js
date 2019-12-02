/*
  Explain
    post:
        url:请求地址  必填
        data:请求参数  必填
        jsonStr:是否需要转JSON.stringify 可选
*/
import axios from 'axios'
import qs from 'qs'
import router from '../router'

let root = process.env.API_ROOT;
axios.defaults.timeout = 60000;
// axios.defaults.baseURL = root;
axios.defaults.baseURL = window.globalUrl.baseURL;

axios.interceptors.request.use(config => {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr) {
        // console.log('token有值')
        config.headers.token = tokenStr;
    }
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {

    return response
}, error => {
    if (error.response.data.code == 'SYS_10032') {
        router.push('/login');
    }
    return Promise.resolve(error)
})

function checkStatus(response) {
    // 如果状态码正常就直接返回数据,这里的状态码是htttp响应状态码有400，500等
    if (response && ((response.status === 200 || response.status === 304 || response.status === 400))) {

        if (response.data.code == 'SYS_10032' || response.data.code == 'LYM_10005') {
            router.push('/login');
            response.data.message = 'token失效'
            return response.data;
        } else {
            return response.data // 直接返回http response响应的data
        }

    }
    else {
        return { // 自定义网络异常对象
            code: '404',
            message: '网络异常',
            success: false
        }
    }

}

function checkCode(res) {
    // 如果状态码正常就直接返回数据
    // console.log(res)
    if (res.code === '404') {
        alert(res.message)
        return {
            code: '',
            message: '网络错误'
        }
    } else {
        return res
    }
}

export default {
    post(url, data = {}) {
        // let jsonData = jsonStr ? qs.stringify(data) : data;
        return axios({
            method: 'post',
            url: url,
            data: qs.stringify(data), //qs.stringify(data)
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
        }).then((res) => {
            return checkStatus(res);
        }).then(
            (res) => {
                return checkCode(res);
            }
        )
    },

    get(url, params = {}) {
        return axios({
            method: 'get',
            url,
            params,
            headers: {
                'content-type': 'application/json'
            }
        }).then(
            (response) => {
                return checkStatus(response);
            }
        ).then(
            (res) => {
                return checkCode(res);
            }
        )
    },

    _post(url, data, jsonStr) {
        let jsonData = jsonStr ? qs.stringify(data) : data;
        return axios({
            method: 'post',
            url: url,
            data: jsonData, //qs.stringify(data)
            headers: {
                'content-type': 'application/json'
            },
        }).then((res) => {
            return checkStatus(res);
        }).then(
            (res) => {
                return checkCode(res);
            }
        )
    }
}
