const { success3 } = require('../../utils/functions.js');
const config = require('../../config.js');

module.exports = {
  name: 'predet',
  description: 'Equipa el conjunto provisto en la configuración.',
  category: 'cosmetic',
  aliases: ['ds', 'defaultset', 'predeterminado'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {
    bot.party.me.setOutfit(config.fortnite.cid);
    bot.party.me.setBackpack(config.fortnite.bid);
    bot.party.me.setEmote(config.fortnite.eid);
    bot.party.me.setPickaxe(config.fortnite.pickaxe_id);
    success3('✅│ ¡Se ha equipado el conjunto predeterminado!', message);
  }
}