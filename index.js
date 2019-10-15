const Telegraf = require("telegraf");
const { Extra } = require("telegraf");
const axios = require("axios");
const config = require("./config");
const constants = require("./constants");
const fetcher = require("./fetcher");

const bot = new Telegraf(config.BOT_TOKEN);

bot.command("start", ctx =>
	ctx.replyWithHTML(constants.help(), Extra.webPreview(false))
);
bot.command("math", ctx => fetcher.math(axios, ctx));
bot.command("date", ctx => fetcher.date(axios, ctx));
bot.command("year", ctx => fetcher.year(axios, ctx));
bot.command("trivia", ctx => fetcher.trivia(axios, ctx));
bot.command("cat", ctx => fetcher.cat(axios, ctx));
bot.command("dog", ctx => fetcher.dog(axios, ctx));

bot.launch();
