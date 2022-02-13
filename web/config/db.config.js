module.exports = {
	HOST: process.env.MYSQL_HOST,
	USER: process.env.MYSQL_USER,
	PASS: process.env.MYSQL_PASSWORD,
	DB: process.env.MYSQL_DATABASE,
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
}

// module.exports = {
// 	HOST: 'localhost',
// 	USER: 'root',
// 	PASS: 'password',
// 	DB: 'kumparan_test',
// 	dialect: "mysql",
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		acquire: 30000,
// 		idle: 10000
// 	}
// }