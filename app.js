const express = require('express');
const path = require('path');
const app = express();

const CONTACTS = [
	{
		id: 1,
		name: 'Vasja',
		value: '+7-921-180-169',
		marked: false
	}
];

//GET
app.get('http: //localhost:3000/api/contacts', (req, res) => {
	res.status(200).json(CONTACTS);
});




app.use(express.static(path.resolve(__dirname, 'client')));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(5200, () => {
	console.log('Server has been started on port 3000...');
});