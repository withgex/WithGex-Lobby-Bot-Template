const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'líder',
  description: 'Asciende a alguien del grupo a líder.',
  category: 'party',
  aliases: ['promote', 'líder'],
  usage: '<user>',
  example: 'Gexito.',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!bot.party.me.isLeader) return error2('❌│ Debo ser líder del grupo para promover a la gente.', message);
    const member = bot.party.members.find(x => x.displayName === args.slice(0).join(' '));
    if (!member) return error2('Proporcione un miembro del grupo para promocionar.', message);

    try {
      await member.promote();
      success3(`✅│ ${member.displayName} Ha sido promovido a líder del partido.`, message);
    } catch {
      error2(`❌│ Se produjo un error al intentar promocionar ${member.displayName}.`, message);
    }
  }
}