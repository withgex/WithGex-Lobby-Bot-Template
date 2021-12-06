const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'lista',
  description: 'Change the party\'s playlist.',
  category: 'party',
  aliases: ['playlist', 'lista', 'list'],
  usage: '<playlist_id>',
  example: 'playlist_argon_duos_sp',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!bot.party.me.isLeader) return error2('❌│ Debo ser el líder del grupo para poder cambiar la lista de reproducción.', message);

    const newPlaylist = args[0];
    if (!newPlaylist) return error2('❌│ Proporcione una lista de reproducción.', message);

    bot.party.setPlaylist(newPlaylist).catch(err => { return error2('✅│ Se produjo un error al intentar cambiar la lista de reproducción.', message);});
    success3(`Cambié la lista de reproducción a ${newPlaylist}.`, message);
  }
}