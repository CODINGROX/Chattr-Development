const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const http = require('http');
const db = require('./db');
const router = require('./routes').router;

require('dotenv').config();


// var cookie;
const app = express();
app.use('/', router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('public'));


app.get('/', function(req, res) {
	try {
		// true so that we don't auto redirect to login
		db.checkLogin(req, res, true).then(function() {
			console.log('sending home')
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
	db.checkLogin(req, res, true).then(function() {
		console.log('checklogin cb, redirecting to /home')
		res.redirect('/home');
	}).catch((err) => {
		console.log('sending login');
		res.send(renderLoginPage(''));
	});
});



app.post('/login', (req, res) => {
	let path = req.protocol + '://' + req.get('host') + req.originalUrl;
	let params = req.body;
	let token = randID();
	console.log(path, params);

	db.checkData(params.name, params.password, token, function(data) {
		if (data) {
			res.cookie('session', token);
			res.redirect('/home');
		} else {
			res.send(renderLoginPage("Please verify your credentials. "));
		}
	});
});

app.get('/jobs', (req, res) => {
	res.sendFile(__dirname + '/public/pages/jobs.html');
});

app.get('/developer', (req, res) => {
	db.checkLogin(req, res).then(function(priv_level) {
        if (priv_level == 3 || priv_level == 2 || priv_level == 1) {
            res.sendFile(__dirname + '/public/pages/developmentpages/developer.html');
        } else {
            res.redirect('/home');
        }
		console.log(data);
	});
});

app.get('/managment', (req, res) => {
	db.checkLogin(req, res).then(function(priv_level) {
        if (priv_level == 3 || priv_level == 2 || priv_level == 1) {
            db.createDevCookies(function(cookies) {
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
	db.checkLogin(req, res).then(function(priv_level) {
        if (priv_level == 3 || priv_level == 2 || priv_level == 1) {
            res.sendFile(__dirname + '/public/pages/developmentpages/security.html');
        } else {
            res.redirect('/')
        }
		console.log(data);
	});
});

app.get('/tasks', (req, res) => {
	db.checkLogin(req, res).then(function(priv_level) {
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
		db.createApplication(params.firstname, params.lastname, params.email, params.field, params.resumeattatch, params.letterattatch);
		res.sendFile(__dirname + '/public/pages/apply.html');
		res.redirect('/apply');
	};

})

app.post('/register', (req, res) => {
	let path = req.protocol + '://' + req.get('host') + req.originalUrl;
	let params = req.body;
	let token = randID();
	console.log(path, params);

	db.createData(params.registerName, params.registerPassword, params.registerEmail, token, function(data) {
		if (data) {
			console.log('Client -> Home');
			res.cookie('session', token);
			res.sendFile(__dirname + '/public/pages/home.html');
		} else {
			console.log('Client -> Index');
			res.redirect('/');
		}
	});
});

function randID() {
	return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
}

function renderLoginPage(error) {
	let html = fs.readFileSync(__dirname + '/public/pages/login.html').toString();
	html = html.replace(/{{ error }}/gm, error);
	return html;
}

app.listen(3000, () => console.log('server started on port: ' + 3001));
