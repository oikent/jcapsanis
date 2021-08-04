// const express = require('express');
// const app = express();
// const path = require('path');

// const port = process.env.PORT;
// app.set('views', path.join(__dirname, '/views'));

// app.get('/', (req, res) => {
// 	res.sendFile('index.html');
// });

// app.listen(port, () => {
// 	console.log(`Serving on port ${port}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/views'));
// app.get('/', function (req, res) {
// 	res.render(path.join(__dirname, 'views/index'));
// });

app.listen(port, () => {
	console.log('Server started at http://localhost:' + port);
});
