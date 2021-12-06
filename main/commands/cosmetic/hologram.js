const { success3 } = require('../../utils/functions.js');

module.exports = {
  name: 'holograma',
  description: 'Equipa el aspecto del holograma del evento Star Wars ..',
  category: 'cosmetic',
  aliases: ['holo','hologram'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit('CID_VIP_Athena_Commando_M_GalileoGondola_SG');

    success3('✅│ ¡Equipado con la máscara de holograma del evento Star Wars!', message);
  }
}