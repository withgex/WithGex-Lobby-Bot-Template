const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'enviar',
  description: 'Envía un mensaje al chat de la grupo.',
  category: 'party',
  aliases: ['say', 'send'],
  usage: '<content>',
  example: 'Hola! soy un bot, creado por WithGex!',

  run: async (client, bot, message, args, getCosmetic) => {
    const content = args.slice(0).join(' ');
    if (!content) return error2('❌│ Proporcione contenido para enviar.', message);

    bot.party.sendMessage(content);
    success3('✅│ ¡Mensaje enviado con éxito!', message);
  }
}