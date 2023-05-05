import express from 'express';
const router = express.Router()
import { getArticlesController } from "../news/controller/articlesController.js"
/**
 *@openapi
 * paths: 
 *    /articles:
 *       get:
 *          tags:
 *             - NewsAPI
 *       summary: Get all articles
 *       parameters:
 *          - in: query
 *            name: q
 *            description: searchstring keyword, words with special chars must be enclosed in quotes
 *            required: false
 *            schema:
 *             type: string
 *          - in: query
 *            name: in
 *            description: searches keyword in title,description 
 *            schema:
 *             type: string
 *          - in: query
 *            name: country
 *            description: country 
 *            schema:
 *             type: string
 *          - in: query
 *            name: lang
 *            description: language 
 *            schema:
 *             type: string
 *          - in: query
 *            name: max
 *            description: maximum number of records to return
 *            schema:
 *             type: integer
 *       responses:
 *          200:
 *             description: Modified
 *          400:
 *             description: Bad Request
 *          403:
 *             description: Forbidden
 *          429:
 *             description: Too many requests
 *          500:
 *             description: Internal Server Error
 *          503:
 *             description: Service Unavailable
 */
    router.get('/articles', getArticlesController)

    export default router