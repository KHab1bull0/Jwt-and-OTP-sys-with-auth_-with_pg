import { Bot, session, Keyboard } from 'grammy';
import { conversations, createConversation } from "@grammyjs/conversations";
import { insertMany } from './src/services/universal.service.js';
import dotenv from 'dotenv';

dotenv.config();



const bot = new Bot(process.env.BOT_TOKEN); 

function initial() {
    return { pizzaCount: 0, lastButtons: "mainButtons", currentButtons: "mainButtons" }
}

bot.use(session({ initial }));
bot.use(conversations());
bot.use(createConversation(register));

await bot.api.setMyCommands([
    { command: "start", description: "Start" },
    { command: "register", description: "Ro'yhatdan o'tish" },
    { command: "login", description: "Login qilish" },
    { command: "codeni_tasdiqlash", description: "Sizga yuborilgan codeni tasdiqlash" },
]);



bot.command("register", async (msg) => {
    await msg.conversation.enter("register");

});



async function register(conversation, msg) {
   try {
     await msg.reply("Emailingizni kiriting: ");
     const email = await conversation.wait();
     await msg.reply(`Password kiriting: `);
     const password = await conversation.wait();
 
 
     console.log(email.message.text, password.message.text);
     await msg.reply(`console`);
 
     const body = {
         email: email.message.text,
         password: password.message.text
     }
 
     const res = await insertMany('users', ['email', 'password'], [body.email, body.password]);
     await msg.reply(`"${res[0]}"`);

     
   } catch (error) {
        await msg.reply('Xatolik')
        console.log(error);
   }
};



bot.command('start', async (msg) => {
    await msg.reply(`Botga xush kelibsiz 👐`);
});

bot.catch(err => {
    console.error('Error:', err);
  });

bot.start();

