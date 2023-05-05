import fetch from'node-fetch';
import { apiKey } from '../../config.js';


export async function getArticles(params) {
    try {
        const url = "https://gnews.io/api/v4/search"
        const query = `q=${encodeURI(params.q)}&apikey=${apiKey}&country=${params.country}&lang=${params.lang}&max=${params.max}&in=${params.in}`
        const response = await fetch(`${url}?${query}`)
        
        return response
    }
    catch (e){
        throw e
    }
}