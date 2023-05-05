import fetch from'node-fetch';


export async function getArticles(keyword) {
    try {
        const apiKey = process.env.APIKEY
        response = await fetch(`https://gnews.io/api/v4/search?q=${keyword}&apikey=${apiKey}`)
        return response
    }
    catch (e){
        throw e
    }
}