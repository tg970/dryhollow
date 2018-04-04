const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 1122;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.use(cors());

app.get('/:whatever', (req, res) => res.redirect('/'));

app.listen(PORT, () => {
	console.log('Server OK: ' + PORT);
});
