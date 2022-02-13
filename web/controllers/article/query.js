const db = require('../../models')
const redisClient = require('../../redis')
const _data_article = db._data_article
const Op = db.Sequelize.Op

exports.get = async (req, res) => {
	let response = { code: 404, message: 'Data not found!', data: [], status: false }

	let searchTitle = req.query.title 
	let searchBody = req.query.body
	let filterAuthor = req.query.author
	
	let options = {
		order:[['updatedAt','DESC']],
		where: {}
	}

	if(searchTitle) {
		options.where.title = searchTitle
	}

	if(searchBody) {
		options.where.body = searchBody
	}

	if(filterAuthor) {
		options.where.author = filterAuthor
	}

	const cache = await redisClient.getAsync(JSON.stringify(req.query || 'getAll'))

	if(cache) {
		response.message = "Data retrieved from redis"
		response.code = 200
		response.status = true
		response.data = JSON.parse(cache)

		return res.status(200).send(response)
	} else {

		const article = await _data_article.findAll(options)

		console.log(options)

		if(article.length <= 0 ){
			return res.status(401).send(response)
		}
		
		redisClient.setAsync(JSON.stringify(req.query),JSON.stringify(article))

		response.message = "Data retrieved from database"
		response.code = 200
		response.status = true
		response.data = article

		res.status(200).send(response)
	}


}