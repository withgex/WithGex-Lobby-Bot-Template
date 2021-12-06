const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'scenario',
  description: 'Equips the dance scenario',
  category: 'bailes',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setEmote('eid_kpopdance03', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('Equips the dance **Scenario**.', message);
  }
}