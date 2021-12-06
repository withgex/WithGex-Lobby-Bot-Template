const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'ikonik',
  description: 'Exclusive skin for Android',
  category: 'skins',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_313_Athena_Commando_M_KpopFashion', [{ channel: 'ClothingColor', variant: 'Mat1' }]);
    success3('✅│ Equipped **Ikonik**.', message);
  }
}