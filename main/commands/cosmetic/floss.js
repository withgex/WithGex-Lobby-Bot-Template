const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'floss',
  description: 'Equips the dance scenario',
  category: 'bailes',
  aliases: ['hilo','hilo dental'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setEmote('EID_Floss', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('Equips the dance **Floss**.', message);
  }
}