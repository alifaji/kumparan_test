module.exports = (sequelize, Sequelize) => {
	const _data_article = sequelize.define("_data_article", {

        id:{
            type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
        },
        author:{
        	type: Sequelize.TEXT,
			defaultValue: null,
			allowNull: true
        },
        title: {
        	type: Sequelize.TEXT,
        	defaultValue: null,
        	allowNull:null
        },
        body: {
        	type: Sequelize.TEXT,
        	defaultValue:null,
        	allowNull:null
        },
        created: {
        	type: Sequelize.DATE,
        	defaultValue:null, 
        	allowNull:null
        },

    })
    
    return _data_article;
}