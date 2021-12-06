const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'Travis_Scott',
  description: 'Aspecto **Doll** es un aspecto modificado',
  category: 'skins',
  aliases: ['travis','Trvis','travieso'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_703_Athena_Commando_M_Cyclone');

    success3('✅│ ¡Skin **Travis Scott** equipada!', message);
  }
}