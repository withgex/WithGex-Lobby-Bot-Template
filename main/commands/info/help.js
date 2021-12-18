const config = require('../../config.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Muestra una lista de comandos disponibles.',
  category: 'info',
  aliases: ['h'],
  usage: '[Comandos]',
  example: 'skin',

  run: async (client, bot, message, args, getCosmetic) => {
    const prefix = config.discord.prefix;

    const commands = {
      client: client.commands.filter(x => x.category === 'client'),
      party: client.commands.filter(x => x.category === 'party'),
      cosmetic: client.commands.filter(x => x.category === 'cosmetic'),
      general: client.commands.filter(x => x.category === 'general'),
      info: client.commands.filter(x => x.category === 'info')
    }

    let command = client.commands.get(args[0]);
    if (!command) command = client.commands.get(client.aliases.get(args[0]));

    if (command) {
      const cmdEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('Comandos')
      .setDescription(`
       Nombre ➟ **${command.name}**
       Descripción ➟ **${command.description}**
       Categoria ➟ **${command.category}**
       Alias ➟ **${command.aliases ? command.aliases.map(x => x).join(', ') : 'None'}**
       Uso ➟ **${command.usage ? command.usage : 'None'}**
       Ejemplo ➟ **${prefix}${command.name} ${command.example}**
       [Join our support Server](https://dsc.gg/gex)`)
       .setFooter(`Gex Lobby Bot Template | ${client.commands.size} Commands`, 'https://cdn.discordapp.com/attachments/870706096560562297/887764879774191696/gex_lobby.png');
       message.channel.send(cmdEmbed);
    } else {
    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Comandos')
    .setDescription(`> - Aquí hay una lista de comandos disponibles, usa \`${prefix}help <commando>\` para ver más sobre un comando.
    > - Here is a list of available commands, use \`${prefix}help <command>\` to see more about a command.\n[🔗 Unete a nuestro Servidor - Join our Server](https://dsc.gg/gex)`)
    .addField(`‣  Cliente - Client  [${commands.client.size}]`, commands.client.map(x => `\`${x.name}\``).join(', '))
    .addField(`‣  Sala - Lobby - Salon [${commands.party.size}]`, commands.party.map(x => `\`${x.name}\``).join(', '))
    .addField(`‣  Cosmeticos - Cosmetics - Cosmétique [${commands.cosmetic.size}]`, commands.cosmetic.map(x => `\`${x.name}\``).join(', '))
    .addField(`‣  General - Générale [${commands.general.size}]`, commands.general.map(x => `\`${x.name}\``).join(', '))
    .addField(`‣  Info [${commands.info.size}]`, commands.info.map(x => `\`${x.name}\``)
    .join(', '))
    .setFooter(`Gex Lobby Bot Template - dsc.gg/gex`, 'https://cdn.discordapp.com/attachments/870706096560562297/887764879774191696/gex_lobby.png');
    message.channel.send(embed);
    }
  }
}
