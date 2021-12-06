const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'wildcat',
  description: '',
  category: 'skins',
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_757_Athena_Commando_F_WildCat', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('✅│ Equipado **Wildcat**', message);
  }
}