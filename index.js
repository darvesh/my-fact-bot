const Telegraf = require("telegraf");
const axios = require("axios");
const config = require("./config");

const fetcher = require("./fetcher");

const bot = new Telegraf(config.BOT_TOKEN);

bot.command("math", ctx => fetcher.math(axios, ctx));
bot.command("date", ctx => fetcher.date(axios, ctx));

bot.launch();
