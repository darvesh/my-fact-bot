const Telegraf = require("telegraf");
const axios = require("axios");
const config = require("./config");

const fetcher = require("./fetcher");

const bot = new Telegraf(config.BOT_TOKEN);

bot.start(ctx =>
	ctx.replyWithHTML(`
<b>Commands Available:</b>
<code>
/math &lt;number&gt;
/date &lt;month&gt; &lt;day&gt;
/year &lt;year&gt;
/trivia &lt;number&gt;
</code>
To get random reply, just send /command without any additional message.

Source code: https://github.com/solooo7/number-fact-bot
`)
);
bot.command("math", ctx => fetcher.math(axios, ctx));
bot.command("date", ctx => fetcher.date(axios, ctx));
bot.command("year", ctx => fetcher.year(axios, ctx));
bot.command("trivia", ctx => fetcher.trivia(axios, ctx));

bot.launch();
