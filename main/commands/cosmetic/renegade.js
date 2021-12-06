const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'renegade_raider',
  description: 'Equipa la skin **Renegada**',
  category: 'skins',
  aliases: ['renegada', 'renegadaa', 'renegade','renegade raider'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_028_Athena_Commando_F', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('✅│ Equipada **Renegade Raider**.', message);
  }
}