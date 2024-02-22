import axios from 'axios'
import qs from 'qs'
import 'dotenv/config'
import Cookies from 'js-cookie';
// import { cookies } from 'next/headers';

const baseUrl = process.env.NEXT_BASE_URL
function unauthorized(msg) {
    console.error('unauthorized', msg)
}


export default {
    request(method, url, params, data) {
        const config = {
            baseURL: 'https://api-uzit.kebyo.me/api/v1',
            timeout: 120000,
            url: url,
            method: method
        }
        // const token =cookies().get('token')
        
        // console.log(token)
        if (true) {
            config.headers = {
                Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4NzAxNDE3LCJpYXQiOjE3MDg2MTUwMTcsImp0aSI6IjA0MzkzYzcwZWU0NzQwMTZhMGVmYThjOTM5ZDM5N2E5IiwidXNlcl9pZCI6M30.z85uVBm0YmE-RQ3MyaZdXafD_IVrZD_zQoYiBVU9i4M",
            }
        }
        if (data) config.data = data

        if (params) {
            config.params = params
            config.paramsSerializer = function(params) {
                return qs.stringify(params, { encodeValuesOnly: true })
            }
        }

        const result = axios(config)

        return new Promise((resolve, reject) => {
            result
                .then((res) => {
                    resolve(res.data)
                })
                .catch((error) => {
                    ErrorHandler(error)
                    reject(error)
                })
        })

    },
    get(url, params) {
        return this.request('GET', url, params, undefined)
    },
    post(url, data, params) {
        return this.request('POST', url, params, data)
    },
    patch(url, data, params) {
        return this.request('PATCH', url, params, data)
    },
    put(url, data, params) {
        return this.request('PUT', url, params, data)
    },
    remove(url, params) {
        return this.request('DELETE', url, params, undefined)
    },
}