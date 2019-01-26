const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
	dbConnectionConfig = require('./dbConnectionConfig');

const todoRoute = require('./routes/todo.route');	
	
	mongoose.Promise = global.Promise;
	mongoose.connect(dbConnectionConfig.DB, {useNewUrlParser: true})
			.then(
				() => { console.log('Database is connected!') },
				err=> { console.log('Can not connect to database ' + err)}
			);
	
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	app.use('/todo', todoRoute);
    
	const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });
	
	module.exports=server