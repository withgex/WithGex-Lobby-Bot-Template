const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'variantes',
  description: 'Equipa un skin pero con variantes.',
  category: 'cosmetic',
  aliases: ['v', 'variant'],
  usage: '<cid> <channel> <variant>',
  example: 'CID_029_Athena_Commando_F_Halloween Material Mat3',

  run: async (client, bot, message, args, getCosmetic) => {
    const [cid, channel, variant] = args;
    if (!cid || !channel || !variant) return error2('Uso incorrecto.\nUso Correcto: `variantes <cid> <channel> <variant>`\nEjemplo: `variantes CID_029_Athena_Commando_F_Halloween Material Mat3`', message);

    bot.party.me.setOutfit(cid, [{ channel: channel, variant: variant}]);
    success3(`Equipado **${cid}** con variante **${channel}**, **${variant}**`, message);
  }
}