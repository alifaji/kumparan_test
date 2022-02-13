const db = require('../../models')
const _data_article = db._data_article
const Op = db.Sequelize.Op
const redisClient = require('../../redis')



exports.create = async (req, res) => {
	let response = { code: 500, message: 'Internal server error!', data: [], status: false }

	let param = {
		author: req.body.author,
		title: req.body.title,
		body: req.body.body,
		created: new Date()
	}

	_data_article.create(param).then(result => {
		if(result == null){
			return res.status(500).send(response)
		}

		redisClients.setAsync(JSON.stringify({title: req.body.title, body: req.body.body}), JSON.stringify(param))

		response.message = "Success Created Article"
		response.code = 200
		response.status = true

		res.status(200).send(response)
	})
}
