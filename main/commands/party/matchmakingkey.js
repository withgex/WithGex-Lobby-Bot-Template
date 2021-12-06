const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'emparejamiento',
  description: 'Establece la clave de emparejamiento personalizada.',
  category: 'party',
  aliases: ['mmkey', 'smm', 'matchmakingkey'],
  usage: '<key>',
  example: 'abc123',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!bot.party.me.isLeader) return error2('❌│ Debo ser el líder del grupo para cambiar la clave de emparejamiento', true);
    const key = args.slice(0).join(' ');
    if (!key) return error2('❌│ Proporcione una clave de emparejamiento.', message);

    try {
      await bot.party.setCustomMatchmakingKey(key);
      success3(`✅│ La clave de emparejamiento se ha establecido en ${key}.`, message);
    } catch {
      error2(`❌│ Se produjo un error al intentar establecer la clave de emparejamiento en ${key}.`);
    }
  }
}