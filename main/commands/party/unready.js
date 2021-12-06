const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'nopreparado',
  description: 'Sets the readiness of the client.',
  category: 'party',
  aliases: ['unready', 'nopreparado'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setReadiness(false);
    success3('✅│ ¡No preparado!', message);
  }
}