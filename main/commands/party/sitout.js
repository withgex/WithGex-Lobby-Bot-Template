const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'sentar',
  description: 'Hace que el cliente se sienta.',
  category: 'party',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setSittingOut(true);
    success3('✅│ ¡Sentado!', message);
  }
}