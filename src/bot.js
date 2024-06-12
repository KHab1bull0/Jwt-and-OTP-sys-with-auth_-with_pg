import { Bot, session, Keyboard } from 'grammy';
import { config } from 'dotenv';
config();



const bot = new Bot("7293795154:AAGZvKlCNHT1d8KQeUMoSCYHpIPa5Wl93h8"); // <-- place your bot token in this string


function initial() {
    return { pizzaCount: 0, lastButtons: "mainButtons", currentButtons: "mainButtons" }
}

bot.use(session({ initial }));

await bot.api.setMyCommands([
    { command: "start", description: "Start" },
    { command: "aloqa", description: "Aloqa" }
]);



const mainButtons = new Keyboard().text('🛠️ Xizmatlar').row().text('📱 Aloqa');
const xizmatButtons = new Keyboard().text("💎 Plyonka").text("🧽 Palirovka").row().text('🧼 Ximchistka').text("🔨 Shumka").row().text('⬅️ Back');
const tanirovkaButtons = new Keyboard().text('🥷 Tanirovka').text('💎 Sonsa zashita').text('🛡 Broni plyonka').row().text("⬅️ Back");

bot.command('aloqa', async (msg) => {
    // try {
    //     const first_name = 'Jons'
    //     await ctx.api.sendContact(ctx.chat.id,
    //         {
    //             phone_number: '+998990973044',
    //         },
    //         'Azizbek'
    //     );

    //     console.log('Contact sent successfully');
    // } catch (error) {
    //     console.error('Error sending contact:', error);
    // }
    msg.reply("Hozircha telefon raqami yo'q");
});


bot.command('start', async (ctx) => {
    await ctx.reply(`Botga xush kelibsiz `, { reply_markup: mainButtons });
});


bot.command('hunger', async (ctx) => {
    const count = ctx.session.pizzaCount;
    const menu = ctx.session.currentMenu;
    await ctx.reply(`Your hunger level is ${count} ${menu}`);
})

bot.command("courses", async (ctx) => {
    const count = ctx.session.pizzaCount;
    ctx.session.currentMenu = 'courseMenu';
    await ctx.reply(`Your hunger level is ${count}`);
});


bot.hears("📱 Aloqa", async (ctx) => {
    try {
        await ctx.api.sendContact(ctx.chat.id,
            {
                phone_number: '+998909157860',
            },
            'Habibullo',
        );

        console.log("Contact jo'natildi...");
    } catch (error) {
        console.log("Contact jo'natishda xatolik");
    }
});


bot.hears("🛠️ Xizmatlar", (ctx) => {
    session.lastButtons = '🛠️ Xizmatlar'
    ctx.reply("🛠️ Xizmatlar", { reply_markup: xizmatButtons })
});


bot.hears("Tanirovka", (ctx) => {
    session.lastButtons = '💎 Plyonka'
    ctx.reply("Tanirovka", { reply_markup: tanirovkaButtons })
});

bot.hears("💎 Plyonka", async (ctx) => {
    session.lastButtons = '💎 Plyonka'
    ctx.reply('Plyonka', { reply_markup: tanirovkaButtons });


})

bot.hears("⬅️ Back", (ctx) => {
    console.log(session.lastButtons)
    
    
    if (['🛠️ Xizmatlar', '📱 Aloqa'].includes(session.lastButtons)) {
        ctx.reply("Bosh menu", { reply_markup: mainButtons });
    }

    if (['💎 Plyonka', '🧽 Palirovka', '🧼 Ximchistika', '🔨 Shumka'].includes(session.lastButtons)) {
        session.lastButtons = '🛠️ Xizmatlar'
        ctx.reply('Xizmatlar', { reply_markup: xizmatButtons });
    }

    if (["🥷 Tanirovka", '💎 Sonsa zashita', '🛡 Broni plyonka'].includes(session.lastButtons)) {
        session.lastButtons = '🥷 Tanirovka'
        ctx.reply('Plonka', { reply_markup: tanirovkaButtons });
    }

   
})




bot.start();