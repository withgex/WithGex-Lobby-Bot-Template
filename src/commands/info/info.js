const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'info',
  description: 'Shows information of the client.',
  category: 'info',
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
    .setAuthor('Info')
    .addField('Client', `Name ➟ ${bot.user.displayName}`, true)
    .addField('Friends', `Total ➟ ${bot.friends.size}\nIncoming Friend Requests ➟ ${friends.incoming.size}\nOutgoing Friend Requests ➟ ${friends.outgoing.size}\nBlocked ➟ ${friends.blocked.size}`, true)
    .addField('Party', `Leader ➟ ${party.leader.displayName}\nMembers ➟ ${party.members.size}`, true)
    .addField('Party Members', bot.party.members.map(x => `${x.displayName}`).join('\n'), true)
    .addField('Items', `Outfit ➟ ${items.skin}\nBackpack ➟ ${items.backpack}\nEmote ➟ ${items.emote ? items.emote : 'None'}\nPickaxe ➟ ${items.pickaxe}`, true)
    .setFooter('Gex Lobby Bot', 'https://cdn.discordapp.com/attachments/870706096560562297/887764879774191696/gex_lobby.png');
    message.channel.send(embed);
  }
}