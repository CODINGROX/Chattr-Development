const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const crypto = require('crypto');
var http = require('http');
require('dotenv').config();

const SALT = process.env.SALT
var userExsists = 'false';
var onlinestatus = 0;
var sessionExsists = 0;
// var cookie;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('public'));

app.get('/', function(req, res) {
	try {
		// true so that we don't auto redirect to login
		checkLogin(req, res, true).then(function() {
			console.log('sending home')
			//res.sendFile(__dirname + '/public/pages/home.html');
			res.redirect('/home');
		}).catch((err) => { // if they aren't logged in
			console.log('sending index');
			res.sendFile(__dirname + '/public/pages/index.html');
		});
	} catch (err) {
		console.log('sending index on error')
		res.sendFile(__dirname + '/public/pages/index.html');
	}
});

app.get('/login', (req, res) => {
	checkLogin(req, res, true).then(function() {
		console.log('checklogin cb, redirecting to /home')
		res.redirect('/home');
	}).catch((err) => {
		console.log('sending login');
		res.send(renderLoginPage(''));
	});
});

app.get('/home', (req, res) => {
	checkLogin(req, res).then(function() {
		res.sendFile(__dirname + '/public/pages/home.html');
	});
});


app.get('/friends', (req, res) => {
	checkLogin(req, res).then(function() {
		res.sendFile(__dirname + '/public/pages/friends.html');
	});
});

app.get('/create', (req, res) => {
	checkLogin(req, res).then(function() {
		res.sendFile(__dirname + '/public/pages/create.html');
	});
});

app.get('/games', (req, res) => {
	checkLogin(req, res).then(function() {
		res.sendFile(__dirname + '/public/pages/games.html');
	});
});

app.get('/profile', (req, res) => {
	checkLogin(req, res).then(function() {
		res.sendFile(__dirname + '/public/pages/profile.html');
	});
});

app.get('/settings', (req, res) => {
	checkLogin(req, res).then(function() {
		res.sendFile(__dirname + '/public/pages/settings.html');
	});
});

app.post('/login', (req, res) => {
	let path = req.protocol + '://' + req.get('host') + req.originalUrl;
	let params = req.body;
	let token = randID();
	console.log(path, params);

	checkData(params.name, params.password, token, function(data) {
		if (data) {
			//console.log('Client -> Home');
			res.cookie('session', token);
			//res.sendFile(__dirname + '/public/pages/home.html');
			res.redirect('/home');
		} else {
			//console.log('Client -> Index');
			// res.sendFile(__dirname + '/public/pages/index.html');
			//res.redirect('/');
			res.send(renderLoginPage("Please verify your credentials. "));
		}
	});
});

app.get('/jobs', (req, res) => {
	res.sendFile(__dirname + '/public/pages/jobs.html');
});

app.get('/developer', (req, res) => {
	checkLogin(req, res).then(function(priv_level) {
        if (priv_level == 3 || priv_level == 2 || priv_level == 1) {
            res.sendFile(__dirname + '/public/pages/developmentpages/developer.html');
        } else {
            res.redirect('/home');
        }
		console.log(data);
	});
});

app.get('/managment', (req, res) => {
	checkLogin(req, res).then(function(priv_level) {
        if (priv_level == 3 || priv_level == 2 || priv_level == 1) {
            createDevCookies(function(cookies) {
                namesvalue = names;

                /*for(i = 0; i<=cookies; i++){
                    if(i >= 1){
                        res.cookie('Numb' + i, names);
                    }
                }*/
                res.sendFile(__dirname + '/public/pages/developmentpages/managment.html');
            });
        } else {
            res.redirect('/home');
        }
		console.log(data);
	});
});

app.get('/security', (req, res) => {
	checkLogin(req, res).then(function(priv_level) {
        if (priv_level == 3 || priv_level == 2 || priv_level == 1) {
            res.sendFile(__dirname + '/public/pages/developmentpages/security.html');
        } else {
            res.redirect('/')
        }
		console.log(data);
	});
});

app.get('/tasks', (req, res) => {
	checkLogin(req, res).then(function(priv_level) {
        if (priv_level == 3 || priv_level == 2 || priv_level == 1) {
            res.sendFile(__dirname + '/public/pages/developmentpages/tasks.html');
        } else {
            res.redirect('/')
        }
		console.log(data);
	});
});

app.get('/apply', (req, res) => {
	res.sendFile(__dirname + '/public/pages/apply.html');
});

app.post('/reseme', (req, res) => {
	let path = req.protocol + '://' + req.get('host') + req.originalUrl;
	let params = req.body;
	console.log('Application recieved');
	if (params.firstname != '' && params.lastname != '' && params.email != '') {
		createApplication(params.firstname, params.lastname, params.email, params.field, params.resumeattatch, params.letterattatch);
		res.sendFile(__dirname + '/public/pages/apply.html');
		res.redirect('/apply');
	};

})

app.post('/register', (req, res) => {
	let path = req.protocol + '://' + req.get('host') + req.originalUrl;
	let params = req.body;
	let token = randID();
	console.log(path, params);

	createData(params.registerName, params.registerPassword, params.registerEmail, token, function(data) {
		if (data) {
			console.log('Client -> Home');
			res.cookie('session', token);
			res.sendFile(__dirname + '/public/pages/home.html');

			// res.redirect('/home');
		} else {
			console.log('Client -> Index');
			// res.sendFile(__dirname + '/public/pages/index.html');
			res.redirect('/');
		}
	});
});
app.listen(5500, () => console.log('server started on port: ' + 5500));

const mongoClient = require('mongodb').MongoClient;
const uri = process.env.TOKEN;
const client = new mongoClient(uri, {
	useNewUrlParser: true
});

function compareCookie(cookie, callback) {
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

function checkData(name, password, token, callback) {
    let pwdhash = hash(password);
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

function randID() {
	return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
}

function get_cookies(request) {
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

function renderLoginPage(error) {
	let html = fs.readFileSync(__dirname + '/public/pages/login.html').toString();
	html = html.replace(/{{ error }}/gm, error);
	return html;
}

function hash(pwd) {
    var hash = crypto.createHmac('sha512', SALT); /** Hashing algorithm sha512 */
    hash.update(pwd);
    return hash.digest('hex');
}

function checkLogin(req, res, doNotRedirect) {
	return new Promise((resolve, reject) => {
		let cookie = get_cookies(req)['session'];
		// Check if user is logged in, if false, send them to the login page
		compareCookie(cookie, function(loggedIn, level) {
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

function createData(name, password, email, token, callback) {
	//Check to see if user exsists//
	client.connect(err => {
		const collection = client.db('CLD').collection('ChattrDatabase');
        let pwdhash = hash(password);
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

function createApplication(first, last, email, field, resume, coverletter) {
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

function createDevCookies(callback) {
	client.connect(err => {
		const collection = client.db('Applications').collection('ApplicationsDB');
		let i = collection.countDocuments().then(function(numItems) {
			callback(numItems);

		});
	}, {
			useUnifiedTopology: true
		})
}

// function getNames(callback){
//   client.connect(err => {
//     const collection = client.db('Applications').collection('ApplicationsDB');
//     let name = collection.distinct('firstname').then(function(names){
//       console.log(names);
//       callback(names);
//     })
//   })
// }