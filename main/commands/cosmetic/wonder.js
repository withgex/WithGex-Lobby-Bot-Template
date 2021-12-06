const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'wonder',
  description: 'Equipa la variante rosa de Ghoul Trooper',
  category: 'skins',
  aliases: ['maravilla'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_434_Athena_Commando_F_StealthHonor', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('✅│ Equipado **Wonder**', message);
  }
}