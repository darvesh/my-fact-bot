module.exports.math = async (axios, ctx) => {
	const message = ctx.message.text.slice(6).replace(/\s+/, " ");
	const number = message.split(" ")[0];
	const url = number === "" ? `random/math` : `${number}/math`;
	const response = await axios(encodeURI(`http://numbersapi.com/${url}`));
	ctx.reply(response.data);
};

module.exports.date = async (axios, ctx) => {
	const dates = ctx.message.text
		.slice(6)
		.replace(/\s+/, " ")
		.split(" ")
		.filter(Boolean)
		.map(Number);
	if ((dates.length === 1 && dates[0] > 31) || dates[0] < 1)
		return ctx.reply(
			"Please send a number greater than 0 and less than or equal 31"
		);
	if (
		dates.length >= 2 &&
		(dates[0] < 1 || dates[0] > 12 || dates[1] < 0 || dates[1] > 31)
	)
		return ctx.reply(`Please send month followed by date`);
	const url =
		dates.length === 0
			? `random/date`
			: dates.length >= 2
			? `${dates[0]}/${dates[1]}/date`
			: `${dates[0]}/date`;
	const response = await axios(encodeURI(`http://numbersapi.com/${url}`));
	ctx.reply(response.data);
};

module.exports.year = async (axios, ctx) => {
	const message = ctx.message.text.slice(6).replace(/\s+/, " ");
	const number = message.split(" ")[0];
	const url = number === "" ? `random/year` : `${number}/year`;
	const response = await axios(encodeURI(`http://numbersapi.com/${url}`));
	ctx.reply(response.data);
};

module.exports.trivia = async (axios, ctx) => {
	const message = ctx.message.text.slice(8).replace(/\s+/, " ");
	const number = message.split(" ")[0];
	const url = number === "" ? `random/trivia` : `${number}/trivia`;
	const response = await axios(encodeURI(`http://numbersapi.com/${url}`));
	ctx.reply(response.data);
};

module.exports.cat = async (axios, ctx) => {
	const response = await axios(
		encodeURI(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat`)
	);
	ctx.reply(response.data.text);
};

module.exports.dog = async (axios, ctx) => {
	const response = await axios(
		encodeURI(`https://cat-fact.herokuapp.com/facts/random?animal_type=dog`)
	);
	ctx.reply(response.data.text);
};
