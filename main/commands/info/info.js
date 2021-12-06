const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'info',
  description: 'Muestra información del cliente.',
  category: '‣  Info',
  aliases: ['i'],
  usage: ' ',
  example: ' ',

  run: async (client, bot, message, args, getCosmetic) => {

    const friends = {
      incoming: bot.pendingFriends.filter(x => x.direction === 'INCOMING'),
      outgoing: bot.pendingFriends.filter(x => x.direction === 'OUTGOING'),
      blocked: bot.blockedFriends
    }

    const items = {
      skin: bot.party.me.outfit,
      backpack: bot.party.me.backpack,
      emote: bot.party.me.emote,
      pickaxe: bot.party.me.pickaxe
    }

    const party = {
      leader: bot.party.leader,
      members: bot.party.members
    }

    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('información')
    .addField('Cliente', `Nombre ➟ ${bot.user.displayName}`, true)
    .addField('Amigos', `Total ➟ ${bot.friends.size}\nSolicitudes de amigos Entrantes ➟ ${friends.incoming.size}\nSolicitudes de amigos salientes ➟ ${friends.outgoing.size}\nBloqueado ➟ ${friends.blocked.size}`, true)
    .addField('Partida', `Lider ➟ ${party.leader.displayName}\nMiembros ➟ ${party.members.size}`, true)
    .addField('Miembros en Sala', bot.party.members.map(x => `${x.displayName}`).join('\n'), true)
    .addField('Items', `Skin ➟ ${items.skin}\nMochila ➟ ${items.backpack}\nBaile ➟ ${items.emote ? items.emote : 'None'}\nPico ➟ ${items.pickaxe}`, true)
    .setFooter('Gex Lobby Bot', 'https://cdn.discordapp.com/attachments/870706096560562297/887764879774191696/gex_lobby.png');
    message.channel.send(embed);
  }
}