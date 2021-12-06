const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'doombot',
  description: 'Aspecto **Doll** es un aspecto modificado',
  category: 'skins',
  aliases: ['piedra','dom','d'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_NPC_Athena_Commando_M_Apparition_Grunt');

    success3('✅│ ¡Skin **Doombot** equipada!', message);
  }
}