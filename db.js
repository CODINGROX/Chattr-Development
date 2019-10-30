require('dotenv').config();
const crypto = require('crypto');
const SALT = process.env.SALT;
const mongoClient = require('mongodb').MongoClient;
const uri = process.env.TOKEN;
const client = new mongoClient(uri, {
	useNewUrlParser: true
});

var userExsists = 'false';
var onlinestatus = 0;
var sessionExsists = 0;

module.exports.hash = function (pwd) {
    var hash = crypto.createHmac('sha512', SALT); /** Hashing algorithm sha512 */
    hash.update(pwd);
    return hash.digest('hex');
}

module.exports.compareCookie = function(cookie, callback) {
	client.connect(err => {
		const collection1 = client.db('CLD').collection('ChattrDatabase');
		collection1.findOne({
			token: cookie
		}).then(function(item) {
			console.log(item);
			if (item) {
                if ('adminLevel' in item) {
                    level = item['adminLevel'];
                } else {
                    level = 0;
                }
				callback(true, level);
			} else {
				callback(false, 0);
			}
		});
	}, {
			useUnifiedTopology: true
		});
}

module.exports.checkData = function (name, password, token, callback) {
    let pwdhash = module.exports.hash(password);
	let info = {
		name: name,
		password: pwdhash
	};
	let create = {
		name: name,
		password: pwdhash,
		online: onlinestatus
	};
	client.connect(err => {
		const collection = client.db('CLD').collection('ChattrDatabase');
		console.log('connected!');
		collection.updateOne({
			name: name
		}, {
				$set: {
					online: 1
				}
			});

		collection.countDocuments(info).then(function(numItems) {
			console.log('Num users = ' + numItems); // Use this to debug
			if (numItems >= 1) {
				console.log('User exsists');

				collection.updateOne({
					name: name
				}, {
						$set: {
							token: token
						}
					});

				callback(true);
			} else {
				console.log('User does not exsist');
				onlinestatus = 0;
				callback(false);
			}
		});
	}, {
			useUnifiedTopology: true
		});
}

module.exports.get_cookies = function (request) {
	try {
		let cookies = { 'session': '' };
		request.headers && request.headers.cookie.split(';').forEach(function(cookie) {
			let parts = cookie.match(/(.*?)=(.*)$/);
			cookies[parts[1].trim()] = (parts[2] || '').trim();
		});
		return cookies;
	} catch (err) {
		console.log('Cookie is unavalible');
		return { 'session': '' };
	}
}

// checkLogin() function
module.exports.checkLogin = function (req, res, doNotRedirect) {
	return new Promise((resolve, reject) => {
		let cookie = module.exports.get_cookies(req)['session'];
		// Check if user is logged in, if false, send them to the login page
		module.exports.compareCookie(cookie, function(loggedIn, level) {
            console.log(loggedIn, level);
			if (loggedIn) {
				console.log('User is logged in! ')
				resolve(level);
			} else {
				console.log('user is not logged in. ');
				if (!doNotRedirect) {
					res.redirect('/');
				}
				reject();
			}
		});
	});
}

module.exports.createData = function (name, password, email, token, callback) {
	//Check to see if user exsists//
	client.connect(err => {
		const collection = client.db('CLD').collection('ChattrDatabase');
        let pwdhash = module.exports.hash(password);
		let create = { name: name, password: pwdhash, email: email, online: 1, admin: 0, adminlevel: 0, token: token }
		let info = { name: name }
		collection.countDocuments(info).then(function(numItems) {
			console.log('User exsists: ' + numItems);
			if (numItems >= 1 || name == "") {
				callback(false);
			} else if (numItems <= 0) {
				collection.insertOne(create, function(err, res) {
					console.log('User created');
					callback(true);
				});
			}
		})

	})
}

module.exports.createApplication = function (first, last, email, field, resume, coverletter) {
	let create = { firstname: first, lastname: last, email: email, field: field, resume: resume, letter: coverletter }

	client.connect(err => {
		const collection = client.db('Applications').collection('ApplicationsDB');
		collection.insertOne(create, function(err, res) {
			console.log('Application created');
		});

	}, {
			useUnifiedTopology: true
		})
}

module.exports.createDevCookies = function (callback) {
	client.connect(err => {
		const collection = client.db('Applications').collection('ApplicationsDB');
		let i = collection.countDocuments().then(function(numItems) {
			callback(numItems);

		});
	}, {
			useUnifiedTopology: true
		})
}
