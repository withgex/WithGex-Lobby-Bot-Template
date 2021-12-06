const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'preparado',
  description: 'Establece la preparación del cliente.',
  category: 'party',
  aliases: ['ready', 'preparado'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setReadiness(true);
    success3('✅│ Preparado!', message);
  }
}