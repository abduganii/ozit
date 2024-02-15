import axios from 'axios'
import qs from 'qs'
import 'dotenv/config'
import Cookies from 'js-cookie';

const baseUrl = process.env.NEXT_BASE_URL
function unauthorized(msg) {
    console.error('unauthorized', msg)
}

function ErrorHandler(error) {
    if (error.message.startsWith('timeout')) {
        console.error('timeout to server')
    }
    if (error.message.startsWith('Network Error')) {
        console.error('Network Error')
    }
    if (error.response) {
        console.log('error.response', error.response)
    }
}

export default {
    request(method, url, params, data) {
        const config = {
            baseURL: 'http://137.184.229.211:8000/api/v1',
            timeout: 120000,
            url: url,
            method: method
        }
        const token = Cookies.get('token')
        if (token) {
            config.headers = {
                Authorization: 'Bearer ' + token,
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