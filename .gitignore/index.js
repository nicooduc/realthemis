const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login(process.env.TOKEN)

bot.on('ready', () =>{
    bot.user.setPresence({ game: {name: 'attendre vos réponses'}})
    console.log('Le BOT est pret')
})
 
bot.on('message', message => {
    if (message.content === "/help") {
        message.delete()
        message.channel.sendMessage("__**Commandes du BOT :**__\n      /help  pour afficher les commandes;\n      /rep  pour répondre au quiz")
        console.error
    }

    if (message.content.startsWith('/rep')) {
        args = message.content.split(' ')
        args.shift()
        message.delete()
        bot.channels.get("436865762662154240").send('**Réponse envoyé par : **' + args.join(' '))
        bot.channels.get("463606091410964481").send('Réponse envoyé')
        console.error
    }
}) 
