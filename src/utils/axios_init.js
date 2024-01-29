'use client';

import axios from 'axios'
import ss from "@/utils/ls"
import qs from 'qs'
import 'dotenv/config'

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
        // switch (error.response.status) {
        //     case 400:
        //         console.error('400 bad request', error.response.data.error.message)
        //         break
        //     case 401:
        //         unauthorized(error.response.data)
        //         break
        //     case 403:
        //         console.error('403 forbidden', error.response.data.error.message)
        //         break
        //     case 404:
        //         console.error('404 not found', error.response.data.error.message)
        //         break
        //     case 422:
        //         console.error('422 entity', error.response.data.error.message)
        //         break
        //     case 500:
        //         console.error('500 internal server error', error.response.data.error.message)
        //         break
        //     case 502:
        //         console.error('502 getaway', error.response.data.error.message)
        //         break
        //     default:
        //         break
        // }
    }
}

export default {
    request(method, url, params, data) {
        console.log('call api: ', url)
        console.log('BASE URL: ', baseUrl)
        const config = {
            baseURL: baseUrl || 'https://jsonplaceholder.typicode.com',
            timeout: 120000,
            url: url,
            method: method
        }
        if (ss.g('token')) {
            config.headers = {
                Authorization: 'Bearer ' + ss.g('token'),
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