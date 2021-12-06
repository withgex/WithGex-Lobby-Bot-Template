const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'demonio_rosa',
  description: 'Equipa la variante rosa de Ghoul Trooper',
  category: 'skins',
  aliases: ['ghoul', 'pinkghoul', 'demonio','rosa'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_029_Athena_Commando_F_Halloween', [{ channel: 'Material', variant: 'Mat3' }]);
    success3('✅│ Equipado **Ghoul Trooper** con variante rosa.', message);
  }
}