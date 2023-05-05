import { getArticles } from '../services/articleService.js'

export async function getArticlesController(req,res) {
    try {
        const keyword = req.query.q
        const response = await getArticles(keyword)
        const data = await response.json()
        return res.send({ "status": response.status, "response": data});
    }
    catch (e) {
        return res.send({
            "status": e.statusCode ?? 400,
            "message": e.message
        })
    }
}