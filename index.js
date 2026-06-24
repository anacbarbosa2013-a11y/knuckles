const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const commands = [
  new SlashCommandBuilder()
    .setName('approved')
    .setDescription('O conselho aprova!')
    .toJSON(),

  new SlashCommandBuilder()
    .setName('rejected')
    .setDescription('O conselho disse não!')
    .toJSON()
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

client.once('ready', async () => {
  console.log(`Bot online como ${client.user.tag}`);

  await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    { body: commands }
  );
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'approved') {
    await interaction.reply({
      content: "💥 O CONSELHO APROVA!! ✔️",
embeds: [
  {
    image: {
url: "https://m.media-amazon.com/images/M/MV5BMjIzMjExMmUtYzU4Yy00MDBkLTg0NDgtNGQ0NzA0MGNiMTZkXkEyXkFqcGc@._V1_.jpg"    }
  }
]
    });
  }

  if (interaction.commandName === 'rejected') {
    await interaction.reply({
      content: "🚫 O CONSELHO DISSE NÃO!! 💀",
      embeds: [
        {
          image: {
            url: "https://i.ytimg.com/vi/VsAytZh-AdA/maxresdefault.jpg"
          }
        }
      ]
    });
  }
});

client.login(process.env.TOKEN);