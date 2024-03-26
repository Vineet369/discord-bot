import { REST, Routes } from 'discord.js';

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

const rest = new REST({ version: '10' }).setToken("MTIyMjA0NzM0NzY0MzUxNDkxMg.GUGjP_.d6XODpe3EN1aUpgwg5S5Tv04e_Mz2hXFqgWJlY");

try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1222047347643514912"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
