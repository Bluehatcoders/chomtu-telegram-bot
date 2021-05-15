import express from 'express';
import startChomtu from '../src/app.js';

const app = express();

// // Root route
// app.get("/", (req, res) => {
// 	res.render('<h1>Bot Is Online!</h1>');
// });

// Run the bot 
// app.listen(3000, () => {
// 	startChomtu();
// });


export default function(req, res) {
	startChomtu();
	res.send("<h1>Bot is online!</h1>")
}