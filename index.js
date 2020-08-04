var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();
router.get('/',(req, res)=>{
	res.json({ message: 'hooray! welcome to our API!'});
});

router.get('/hello',(req, res)=>{
	res.json({ message: 'Hello World!'});
});

router.get('/goodbye/:name',(req, res)=>{
	res.json({ message: 'Goodbye ' + req.params.name});
});

router.post('/sum',(req, res)=>{
	var sum = req.body.NUM1 + req.body.NUM2;
	res.json({message:'The sum is ' +sum});
});

app.use('/api', router);

app.listen(port);
console.log('Magic happen on port ' + port);