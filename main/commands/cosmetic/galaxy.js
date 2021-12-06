const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'galaxy',
  description: 'Equipa la variante rosa de Ghoul Trooper',
  category: 'skins',
  aliases: ['galaxia', 'Galaxy'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_175_Athena_Commando_M_Celestial', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('✅│ Equipado **Galaxy**', message);
  }
}