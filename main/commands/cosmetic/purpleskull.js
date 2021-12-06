const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'calavera_morada',
  description: 'Equips the purple glow variant of Skull Trooper',
  category: 'skins',
  aliases: ['calavera', 'morada', 'skull','Skull Trooper'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_030_Athena_Commando_M_Halloween', [{ channel: 'ClothingColor', variant: 'Mat1' }]);
    success3('✅│ Equipped **Skull Trooper** with **Purple Glow** variant.', message);
  }
}