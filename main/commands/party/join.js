const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'unirse',
  description: 'Join\'s a public party.',
  aliases: ['join', 'unirse'],
  category: 'party',
  usage: '<user>',
  example: 'Gex',

  run: async (client, bot, message, args, getCosmetic) => {
    const friend = bot.friends.find(x => x.displayName === args.slice(0).join(' '));
    if (!friend) return error2('❌│ Porfavor, proporcione su ID de Fortnite', message);

    try {
      await friend.joinParty();
      success3(`✅│ Me he unido al grupo ${friend.displayName}`, message);
    } catch {
      error2(`❌│ Invita a alguien al grupo. Se produjo un error al intentar unirse al grupo de: ${friend.displayName}.`, message);
    }
  }
}