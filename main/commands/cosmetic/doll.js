const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'doll',
  description: 'Aspecto **Doll** es un aspecto modificado',
  category: 'skins',
  aliases: ['muñeco','dummy'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_Creative_Mannequin_M_Default');

    success3('✅│ ¡Skin **Doll** equipada!', message);
  }
}