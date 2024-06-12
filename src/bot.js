import { Bot, session, Keyboard } from 'grammy';
import { config } from 'dotenv';
config();



const bot = new Bot("7293795154:AAGZvKlCNHT1d8KQeUMoSCYHpIPa5Wl93h8"); // <-- place your bot token in this string


bot.command('register', async (ctx) => {
    await ctx.reply('Please enter your username and password in the following format: username password', {
        reply_markup: {
            force_reply: true,
            input_field_placeholder: ' username  password '
        }
    });

    const handler = async (ctx) => {
        const [username, password] = ctx.message.text.split(' ');

        if (!username || !password) {
            await ctx.reply('Noto‘g‘ri format. Iltimos, quyidagi formatda yuboring: username parol');
        } else {
            try {
                await saveUser(ctx.chat.id, username, password); // Foydalanuvchini saqlash funksiyasi
                await ctx.reply('Ro‘yxatdan o‘tish muvaffaqiyatli! Endi /signin qilishingiz mumkin.');
            } catch (err) {
                await ctx.reply('Ro‘yxatdan o‘tish muvaffaqiyatsiz. Username band bo‘lishi mumkin.');
            }
        }

        bot.off('message:text', handler);
    };

    bot.on('message:text', handler);
});


function initial() {
    return { pizzaCount: 0, lastButtons: "mainButtons", currentButtons: "mainButtons" }
}

bot.use(session({ initial }));

await bot.api.setMyCommands([
    { command: "start", description: "Start" },
    { command: "register", description: "Ro'yhatdan o'tish" },
    { command: "login", description: "Login qilish" },
    { command: "codeni_tasdiqlash", description: "Sizga yuborilgan codeni tasdiqlash" },
]);



const mainButtons = new Keyboard().text('🛠️ Xizmatlar');


bot.command('start', async (msg) => {
    await msg.reply(`Botga xush kelibsiz 👐`, { reply_markup: mainButtons });
});



bot.start();