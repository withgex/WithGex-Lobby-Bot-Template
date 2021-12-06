const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'levitate',
  description: 'Equips the dance scenario',
  category: 'bailes',
  aliases: ['levit','levitar'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setEmote('EID_Davinci', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('Equips the dance **Levitate**.', message);
  }
}