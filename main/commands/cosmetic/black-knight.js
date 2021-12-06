const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'black_knight',
  description: 'Equipa la variante rosa de Ghoul Trooper',
  category: 'skins',
  aliases: ['black knight', 'caballero', 'caballero negro','Caballero Negro'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_035_Athena_Commando_M_Medieval', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('✅│ Equipado **Caballero Negro**.', message);
  }
}