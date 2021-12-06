const { success2, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'pico_id',
  description: 'Equipa cualquier pico por ID usando parámetros.',
  category: 'cosmetic',
  aliases: ['pid', 'pickaxe_id'],
  usage: '<pickaxe_id>',
  example: 'BID_004_BlackKnight',

  run: async (client, bot, message, args, getCosmetic) => {
    const cosmetic = args[0];
    if (!cosmetic || cosmetic.length < 4) return error2('❌│ Proporcione un ID de pico.', message);

    bot.party.me.setPickaxe(cosmetic);
    success2(cosmetic, message);
  }
}