import axios from 'axios' // 引入axios


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const ip = "120.78.184.116"
const port = "312"
    // const baseURL = `http://${ip}:${port}/v1`
const baseURL = `http://192.168.43.214:3000`
const URL = `http://${ip}:${port}`
const wsURL = `${ip}:${port}`

const service = axios.create({
    baseURL,
    timeout: 5000
})

export {
    baseURL,
    URL,
    wsURL
}

service.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = localStorage.getItem('UserToken');
        // if (token) {
        //     config.headers.token = token;
        //     console.log(config.headers.token)
        // } else {
        //     console.log('当前没有token，应该获取token')
        // }
        return config
    },
    error => {
        return Promise.error(error)
    }
)

service.interceptors.response.use(
    response => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    err => {
        if (err.response.status === 401) {
            // router.replace('/home')
            console.log(router.history)
            if (router.history) {}
            // localStorage.setItem('bannerlogin', 0)
            // localStorage.setItem('userToken', '')
            // localStorage.setItem('userState', false)
            // localStorage.setItem('userInformation', JSON.stringify({ data: '无' }))
            // localStorage.setItem('role', '')
            // router.go(0)
        }
        console.log(err.response === null ? err : err.response)
        return Promise.reject(err.response === null ? err : err.response)
    }
)

export function get(url, params) {
    return new Promise((resolve, reject) => {
        service
            .get(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => reject(err))
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        service
            .post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function patch(url, params) {
    return new Promise((resolve, reject) => {
        service
            .patch(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export function deleteMethod(url, params) {
    return new Promise((resolve, reject) => {
        service
            .delete(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function postFormData(url, params) {
    return new Promise((resolve, reject) => {
        service({
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                transform: [
                    function(data) {
                        const formData = new FormData()
                        Object.keys(data).forEach(key => {
                            formData.append(key, data[key])
                        })
                        return formData
                    }
                ],
                url,
                method: 'post',
                params
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
}