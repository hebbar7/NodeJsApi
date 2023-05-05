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
 *          summary: Get all articles
 *          responses:
 *             '200':
 *                description: Modified
 *                content:
 *                   application/json:
 *                      schema: 
 *                         type: object
 *                         properties: 
 *                            status:
 *                               type: integer
 *                               example: 200
 *                            response:
 *                               type: object
 *                               properties:
 *                                  totalArticles: 
 *                                     type: integer
 *                                     example: 200
 *                                  articles: 
 *                                     type: array
 *                                     example: [
 *                                        {
 *                                           "title": "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
 *                                           "description": "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
 *                                           "content": "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones",
 *                                           "url": "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
 *                                           "image": "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
 *                                           "publishedAt": "2022-09-28T08:14:24Z",
 *                                           "source": {
 *                                              "name": "PhoneArena",
 *                                              "url": "https://www.phonearena.com"
 *                                           }
 *                                        }
 *                                     ]
 * 
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
 */
    router.get('/articles', getArticlesController)

    export default router