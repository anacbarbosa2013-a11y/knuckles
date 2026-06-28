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
    .toJSON(),

  new SlashCommandBuilder()
    .setName('idk')
    .setDescription('O conselho não faz a menor ideia.')
    .toJSON(),

  new SlashCommandBuilder()
    .setName('council')
    .setDescription('Consulte a infinita sabedoria do Conselho.')
    .toJSON()
];
const KNUCKLES_RANDOM = [
  {
    text: "💥 O CONSELHO APROVA!! ✔️",
    image: "https://m.media-amazon.com/images/M/MV5BMjIzMjExMmUtYzU4Yy00MDBkLTg0NDgtNGQ0NzA0MGNiMTZkXkEyXkFqcGc@._V1_.jpg"
  },
  {
    text: "🚫 O CONSELHO DISSE NÃO!! 💀",
    image: "https://i.ytimg.com/vi/VsAytZh-AdA/maxresdefault.jpg"
  },
  {
    text: "👊 QUE TAL DAR UNS SOCOS NESSA PERGUNTA? ISSO RESOLVE?.",
    image: "https://pbs.twimg.com/media/FX1-ZU6XoAAgRzF.jpg"
  },
  {
    text: "🤷 O CONSELHO NÃO FAZ A MENOR IDEIA!",
    image: "https://pbs.twimg.com/media/HL1FXwRXYAAxkqX.jpg"
  },
  {
    text: "🕶️ EU ESTOU SEMPRE CERTO. EXCETO QUANDO NÃO ESTOU.",
    image: "https://pbs.twimg.com/media/FVMSJa3WAAEYvbj.jpg"
  },
  {
    text: "🦇 UH. . . O CONSELHO ESTÁ UM POUCO OCUPADO AGORA. TENTE DEPOIS?",
    image: "https://pbs.twimg.com/media/FXr9VvyUcAEIefr.jpg"
  },
  {
    text: "❓ O CONSELHO NÃO TEM IDEIA DO QUE ESTÁ FAZENDO!",
    image: "https://pbs.twimg.com/media/FXr8VkjVEAUitz8.jpg"
  },
  {
    text: "💼 OBJEÇÃO! OU ALGUM OUTRO TERMO DE ADVOGADOS. . .",
    image: "https://pbs.twimg.com/media/FXr8U4AUEAEMFH9.jpg"
  },
  {
    text: "🐺 O CONSELHO ESTÁ FAZENDO SEU MELHOR PRA APRENDER A DINÂMICA ABO, MAS NÃO PARECE FÁCIL.",
    image: "https://pbs.twimg.com/media/FXeVnWIWYAEnkuc.jpg"
  },
  {
    text: "💤 O CONSELHO PRECISA DE UMA SONECA",
    image: "https://pbs.twimg.com/media/FXJ2NKcXgAIbAVs.jpg"
  },
  {
    text: "📚 O CONSELHO NÃO TEM CERTEZA SE ISSO ESTÁ CERTO. . .",
    image: "https://pbs.twimg.com/media/FVlm0ALXsAA_6iz.jpg"
  },
  {
    text: "🍼 ESSA NÃO! O BEBÊ ESTÁ EM PERIGO!",
    image: "https://pbs.twimg.com/media/FVMR-_TWYAMVIC-.jpg",
    rarity: "legendary"
  },
  {
    text: "❔ UH. . . EU JÁ ESQUECI A PERGUNTA?",
    image: "https://pbs.twimg.com/media/FV1peV7WIAA0IJ7.jpg"
  },
  {
    text: "🍦 O CONSELHO ESTÁ NA PAUSA DO SORVETE. (NÃO) TENTE MAIS TARDE!",
    image: "https://pbs.twimg.com/media/FXJ2KMMXwAAd2TR.jpg"
  },
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
      embeds: [{
        image: {
          url: "https://m.media-amazon.com/images/M/MV5BMjIzMjExMmUtYzU4Yy00MDBkLTg0NDgtNGQ0NzA0MGNiMTZkXkEyXkFqcGc@._V1_.jpg"
        }
      }]
    });
  }

  if (interaction.commandName === 'rejected') {
    await interaction.reply({
      content: "🚫 O CONSELHO DISSE NÃO!! 💀",
      embeds: [{
        image: {
          url: "https://i.ytimg.com/vi/VsAytZh-AdA/maxresdefault.jpg"
        }
      }]
    });
  }

  if (interaction.commandName === 'idk') {
    await interaction.reply({
      content: "🤷 O CONSELHO NÃO FAZ A MENOR IDEIA!!",
      embeds: [{
        image: {
          url: "https://pbs.twimg.com/media/HL1FXwRXYAAxkqX.jpg"
        }
      }]
    });
  }

  if (interaction.commandName === 'council') {

    const response =
        KNUCKLES_RANDOM[Math.floor(Math.random() * KNUCKLES_RANDOM.length)];

    await interaction.reply({
        content: response.text,
        embeds: [{
            image: {
                url: response.image
            }
        }]
    });
}
  });

client.login(process.env.TOKEN);
