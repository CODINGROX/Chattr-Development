const express = require('express');
const bodyParser = require('body-parser');
var http =  require('http');

require('dotenv').config();
var userExsists = 'false';
var onlinestatus = 0;
var cookieSession = require('cookie-session');
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
		let cookie = get_cookies(req)['session'];
		// Check if user is logged in, if false, send them to the login page
		compareCookie(cookie, function(data) {
			if (sessionExsists == 1) {
				res.redirect('/home');
			} else {
				res.sendFile(__dirname + '/public/pages/index.html');
			}
		});
	} catch (err) {
		res.sendFile(__dirname + '/public/pages/index.html');
	}
});


app.get('/home', (req, res) => {
  try {
		let cookie = get_cookies(req)['session'];
		// Check if user is logged in, if false, send them to the login page
		compareCookie(cookie, function(data) {
			if (sessionExsists == 1) {
				res.sendFile(__dirname + '/public/pages/home.html');
			} else {
				res.sendFile(__dirname + '/public/pages/index.html');
			}
		});
	} catch (err) {
		res.sendFile(__dirname + '/public/pages/index.html');
	}
});


app.get('/friends', (req, res) => {
  try {
		let cookie = get_cookies(req)['session'];
		// Check if user is logged in, if false, send them to the login page
		compareCookie(cookie, function(data) {
			if (sessionExsists == 1) {
				res.sendFile(__dirname + '/public/pages/friends.html');
			} else {
				res.sendFile(__dirname + '/public/pages/index.html');
			}
		});
	} catch (err) {
		res.sendFile(__dirname + '/public/pages/index.html');
	}
});

app.get('/chat', (req, res) => {
  try {
		let cookie = get_cookies(req)['session'];
		// Check if user is logged in, if false, send them to the login page
		compareCookie(cookie, function(data) {
			if (sessionExsists == 1) {
				res.sendFile(__dirname + '/public/pages/chat.html');
			} else {
				res.sendFile(__dirname + '/public/pages/index.html');
			}
		});
	} catch (err) {
		res.sendFile(__dirname + '/public/pages/index.html');
	}
});

app.get('/content', (req, res) => {
  try {
		let cookie = get_cookies(req)['session'];
		// Check if user is logged in, if false, send them to the login page
		compareCookie(cookie, function(data) {
			if (sessionExsists == 1) {
				res.sendFile(__dirname + '/public/pages/content.html');
			} else {
				res.sendFile(__dirname + '/public/pages/content.html');
			}
		});
	} catch (err) {
		res.sendFile(__dirname + '/public/pages/index.html');
	}
});

app.get('/profile', (req, res) => {
  try {
		let cookie = get_cookies(req)['session'];
		// Check if user is logged in, if false, send them to the login page
		compareCookie(cookie, function(data) {
			if (sessionExsists == 1) {
				res.sendFile(__dirname + '/public/pages/profile.html');
			} else {
				res.sendFile(__dirname + '/public/pages/index.html');
			}
		});
	} catch (err) {
		res.sendFile(__dirname + '/public/pages/index.html');
	}
});

app.get('/settings', (req, res) => {
  try {
		let cookie = get_cookies(req)['session'];
		// Check if user is logged in, if false, send them to the login page
		compareCookie(cookie, function(data) {
			if (sessionExsists == 1) {
				res.sendFile(__dirname + '/public/pages/settings.html');
			} else {
				res.sendFile(__dirname + '/public/pages/index.html');
			}
		});
	} catch (err) {
		res.sendFile(__dirname + '/public/pages/index.html');
	}
});

app.post('/home', (req, res) => {
	let path = req.protocol + '://' + req.get('host') + req.originalUrl;
	let params = req.body;
	let token = randID();
	console.log(path, params);

	checkData(params.name, params.password, token, function(data) {
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

app.get('/jobs', (req, res) => {
	res.sendFile(__dirname + '/public/pages/jobs.html');
});

app.get('/developer', (req, res) => {
  let cookie = get_cookies(req)['session'];
	// Check if user is logged in, if false, send them to the login page
	compareCookie(cookie, function(data) {
		if (sessionExsists == 1) {
      let name = get_cookies(req)['username'];
      runDevAnalysis(name, function(priv_level){
        if(priv_level == 3 || priv_level == 2 || priv_level == 1){
          res.sendFile(__dirname + '/public/pages/developmentpages/developer.html');

        } else {
          res.redirect('/')
        }
      });
      console.log(data);
		} else {
      res.redirect('/');
		}
	});
});

app.get('/managment', (req, res) => {
  let cookie = get_cookies(req)['session'];
	// Check if user is logged in, if false, send them to the login page
	compareCookie(cookie, function(data) {
		if (sessionExsists == 1) {
      let name = get_cookies(req)['username'];
      runDevAnalysis(name, function(priv_level){
        if(priv_level == 3 || priv_level == 2 || priv_level == 1){
          createDevCookies(function(cookies){
            namesvalue = names;

          /*for(i = 0; i<=cookies; i++){
            if(i >= 1){
              res.cookie('Numb' + i, names);
            }
          }*/
          res.sendFile(__dirname + '/public/pages/developmentpages/managment.html');
        });
        } else {
          res.redirect('/');
        }
      });
      console.log(data);
		} else {
      res.redirect('/');
		}
	});
});

app.get('/security', (req, res) => {
  let cookie = get_cookies(req)['session'];
	// Check if user is logged in, if false, send them to the login page
	compareCookie(cookie, function(data) {
		if (sessionExsists == 1) {
      let name = get_cookies(req)['username'];
      runDevAnalysis(name, function(priv_level){
        if(priv_level == 3 || priv_level == 2 || priv_level == 1){
          res.sendFile(__dirname + '/public/pages/developmentpages/security.html');
        } else {
          res.redirect('/')
        }
      });
      console.log(data);
		} else {
      res.redirect('/');
		}
	});
});

app.get('/tasks', (req, res) => {
  let cookie = get_cookies(req)['session'];
	// Check if user is logged in, if false, send them to the login page
	compareCookie(cookie, function(data) {
		if (sessionExsists == 1) {
      let name = get_cookies(req)['username'];
      runDevAnalysis(name, function(priv_level){
        if(priv_level == 3 || priv_level == 2 || priv_level == 1){
          res.sendFile(__dirname + '/public/pages/developmentpages/tasks.html');
        } else {
          res.redirect('/')
        }
      });
      console.log(data);
		} else {
      res.redirect('/');
		}
	});
});

app.get('/apply', (req, res) => {
	res.sendFile(__dirname + '/public/pages/apply.html');
});

app.get('/help', (req, res) => {
	res.sendFile(__dirname + '/public/pages/help.html');
});

app.post('/reseme', (req, res) => {
  let path = req.protocol + '://' + req.get('host') + req.originalUrl;
	let params = req.body;
  console.log('Application recieved');
  if(params.firstname != '' && params.lastname != '' && params.email != ''){
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


app.listen(3000, () => console.log('server started on port: ' + 3000));

const mongoClient = require('mongodb').MongoClient;
const uri = process.env.TOKEN;
const client = new mongoClient(uri, {
	useNewUrlParser: true
});

function compareCookie(cookie, callback) {
	client.connect(err => {
		const collection1 = client.db('CLD').collection('ChattrDatabase');
		collection1.countDocuments({
			token: cookie
		}).then(function(numItems) {
			console.log(numItems);
			sessionExsists = numItems;
			if (numItems >= 1) {
				callback(true);
				console.log('client -> home');
			} else if (numItems <= 0) {
				callback(false);
				console.log('client -> index');
			}
		});
	}, {
			useUnifiedTopology: true
		});
}

function checkData(name, password, token, callback) {
	let info = {
		name: name,
		password: password
	};
	let create = {
		name: name,
		password: password,
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
				userExsists = 'true';

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
				userExsists = 'false';
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
		let cookies = {};
		request.headers && request.headers.cookie.split(';').forEach(function(cookie) {
			let parts = cookie.match(/(.*?)=(.*)$/);
			cookies[parts[1].trim()] = (parts[2] || '').trim();
		});
		return cookies;
	} catch (err) {
		console.log('Cookie is unavalible');
	}
}

function createData(name, password, email, token, callback) {
	//Check to see if user exsists//
	client.connect(err => {
		const collection = client.db('CLD').collection('ChattrDatabase');
		let create = { name: name, password: password, email: email, online: 1, admin: 0, adminlevel: 0, token: token }
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

function createApplication(first, last, email, field, resume, coverletter){
  let create = {firstname: first, lastname: last, email: email, field: field, resume: resume, letter: coverletter}

  client.connect(err => {
		const collection = client.db('Applications').collection('ApplicationsDB');
      collection.insertOne(create, function(err, res) {
        console.log('Application created');
      });
      
  }, {
			useUnifiedTopology: true
		})
}

function runDevAnalysis(name, callback){
  client.connect(err => {
	const collection = client.db('CLD').collection('ChattrDatabase');
	console.log('connected!');

  collection.countDocuments({name: name, admin: 1, adminlevel: 3}).then(function(numItems){
    if(numItems == 1){
			callback('3');
    }
  });

  collection.countDocuments({name: name, admin: 1, adminlevel: 2}).then(function(numItems){
    if(numItems == 1){
      callback('2');
    }
  });

  collection.countDocuments({name: name, admin: 1, adminlevel: 1}).then(function(numItems){
    if(numItems == 1){
      callback('1');
    }
  });

  collection.countDocuments({name: name, admin: 0, adminlevel: 0}).then(function(numItems){
    if(numItems == 1){
      callback('0');
    }
  });

  }, {
			useUnifiedTopology: true
	})
}

function createDevCookies(callback){
  client.connect(err => {
		const collection = client.db('Applications').collection('ApplicationsDB');
    let i = collection.countDocuments().then(function(numItems){
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