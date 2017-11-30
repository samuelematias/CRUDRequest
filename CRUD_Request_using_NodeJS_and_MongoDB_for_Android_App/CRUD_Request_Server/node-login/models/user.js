'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({ 

	name 			: String,
	email			: String, 
	hashed_password	: String,
	created_at		: String,
	temp_password	: String,
	temp_password_time: String
	
});

mongoose.Promise = global.Promise;
//localhost
//mongoose.connect('mongodb://localhost:27017/node-login');
//mLab *Cloud
mongoose.connect('mongodb://mataraso:sm127@ds249415.mlab.com:49415/node-login');
//mongodb://<dbuser>:<dbpassword>@ds249415.mlab.com:49415/node-login
module.exports = mongoose.model('user', userSchema);        