const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'storm',
  description: 'Aspecto **Storm** es un aspecto modificado',
  category: 'skins',
  aliases: ['stormz','tormenta'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_NPC_Athena_Commando_M_Fallback');

    success3('✅│ ¡Skin **Storm** equipada!', message);
  }
}