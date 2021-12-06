const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'hatlessrecon',
  description: 'Equipa la variante sin sombrero de Recon Expert',
  category: 'cosmetic',
  aliases: ['nohatrecon', 'Recon Expert', 'Experta en Reconcimiento', 'ReconExpert', 'recon expert'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_022_Athena_Commando_F', [{ channel: 'Parts', variant: 'Stage2' }]);
    success3('Equipado Recon Expert sin variante de sombrero.', message);
  }
}