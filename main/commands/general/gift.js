const { error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'pavos',
  description: ':money_with_wings:  Que te crees que te voy a regalar algo? No seas tonto xd',
  category: 'general',
 aliases: ['gift', 'regalo', 'vbucks', 'regalos', 'regalar'],
  usage: '<cosmetic>',
  example: 'pavos',

  run: async (client, bot, message, args, getCosmetic) => {
    const item = args.slice(0).join(' ');
    if (!item) return error2(':money_with_wings:  Que te crees que te voy a regalar algo? No seas tonto xd.', message);

    await bot.party.me.clearEmote();
    await bot.party.me.setEmote('EID_NeverGonna');

    message.channel.send(':money_with_wings:  Que te crees que te voy a regalar algo? No seas tonto xd');
  }
}