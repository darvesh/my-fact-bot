const Telegraf = require("telegraf");
const axios = require("axios");
const config = require("./config");
const constants = require("./constants");
const fetcher = require("./fetcher");

const bot = new Telegraf(config.BOT_TOKEN);

bot.start(ctx => ctx.replyWithHTML(constants.help));
bot.command("math", ctx => fetcher.math(axios, ctx));
bot.command("date", ctx => fetcher.date(axios, ctx));
bot.command("year", ctx => fetcher.year(axios, ctx));
bot.command("trivia", ctx => fetcher.trivia(axios, ctx));

bot.launch();
