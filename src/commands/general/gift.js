const { error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'gift',
  description: 'Gift someone something? :flushed:',
  category: 'general',
  usage: '<cosmetic>',
  example: 'V-Bucks',

  run: async (client, bot, message, args, getCosmetic) => {
    const item = args.slice(0).join(' ');
    if (!item) return error2('No item was provided.', message);

    await bot.party.me.clearEmote();
    await bot.party.me.setEmote('EID_NeverGonna');

    message.channel.send('Que? , ¿*realmente* crees que los bots regalamos V-Bucks?');
  }
}