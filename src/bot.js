import { Bot } from 'grammy';
// Create a bot object
const bot = new Bot("7293795154:AAH4Xdf5bZEfaLefV1WTI97g5KdRI2pViVo"); // <-- place your bot token in this string

bot.command("start", async (ctx) => {
    await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
        // Make Telegram clients automatically show a reply interface to the user.
        reply_markup: { force_reply: true },
    });
});

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));



// Register listeners to handle messages
bot.on("message:text", (ctx) => ctx.reply("Echo: " + ctx.message.text));

// Start the bot (using long polling)
bot.start();