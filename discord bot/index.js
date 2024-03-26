import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {       //for normal messeges
    if (message.author.bot) return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating short id for" + url,
        })
    }
    console.log(message.content);
    message.reply({
        content: "Hello from bot"
    })
});

client.on("interactionCreate", (interaction) => {          //for interactions (/ commands)
    console.log(interaction)
    interaction.reply("pong!!");
})

client.login("token")
