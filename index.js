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

  new SlashCommandBuilder()
    .setName('idk')
    .setDescription('O conselho não faz a menor ideia.')
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

        if (interaction.commandName === 'idk') {
    await interaction.reply({
        content: "🤷 O CONSELHO NÃO FAZ A MENOR IDEIA!!",
        embeds: [
            {
                image: {
                    url: "https://resizing.flixster.com/8AAomsShvrwMKbzf_RkEWpEL3cc=/375x210/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11921844_e_h10_ab.jpg"
                }
            }
        ]
    });
        }
      ]
    });
  }
});

client.login(process.env.TOKEN);
