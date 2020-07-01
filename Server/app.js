const math = require('./math');
const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const { response } = require('express');


const app = express();


app.use(bp())

// good habit to start now, setting up config files in the root of the repo
const configz = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
const PORT = configz.PORT;


app.get('/api/dateFact/:one/:two', (req, res) => {
	if (req.params.one && req.params.two) {
		console.log(`request recieved, printing params now...`);
		math.dateFact(req.params.one, req.params.two)
			.then(data => {
				res.status(200).send(data);
			})
			.catch(err => {
				res.status(200).send({ message: 'oof' });
			});
	} else {
		res.status(500).send({ message: 'Error: was expecting message body'});
	}
});

app.get('/api/numberFact/:num', (req, res) => {
	if (req.params.num) {
		console.log(`request recieved, printing params now...`);
		math.numberFact(req.params.num)
			.then(data => {
				res.status(200).send(data);
			})
			.catch(err => {
				res.status(200).send({ message: 'oof' });
			});
	} else {
		res.status(500).send({ message: 'Error: was expecting message body'});
	}
});

app.get('/api/randomFact/:min/:max', (req, res) => {
	if (req.params.min && req.params.max) {
		console.log(`request recieved, printing params now...`);
		math.randomFact(req.params.min, req.params.max)
			.then(data => {
				res.status(200).send(data);
			})
			.catch(err => {
				res.status(200).send({ message: 'oof' });
			});
	} else {
		res.status(500).send({ message: 'Error: was expecting message body'});
	}
});

app.get('/api/triviaFact/:num', (req, res) => {
	if (req.params.num) {
		console.log(`request recieved, printing params now...`);
		math.triviaFact(req.params.num)
			.then(data => {
				res.status(200).send(data);
			})
			.catch(err => {
				res.status(200).send({ message: 'oof' });
			});
	} else {
		res.status(500).send({ message: 'Error: was expecting message body'});
	}
});

app.get('/api/yearFact/:year', (req, res) => {
	if (req.params.year) {
		console.log(`request recieved, printing params now...`);
		math.yearFact(req.params.year)
			.then(data => {
				res.status(200).send(data);
			})
			.catch(err => {
				res.status(200).send({ message: 'oof' });
			});
	} else {
		res.status(500).send({ message: 'Error: was expecting message body'});
	}
});

app.listen(PORT, () => console.log(`server is up at port ${PORT}`))