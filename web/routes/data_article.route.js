const command = require('../controllers/article/command')
const query = require('../controllers/article/query')

module.exports = function(app) {

	app.post('/articles', command.create)
	app.get('/article', query.get)

}