import {
    get,
    post,
    patch,
    postFormData,
    deleteMethod
} from '@/request/baseRequest'

// 00
export const test = data => get('/video/timeline/recommend', data)

//post