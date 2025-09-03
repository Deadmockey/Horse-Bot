const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Make it gay')
        .setType(ApplicationCommandType.Message),
    async execute(interaction) {
        interaction.reply('test');

    },
};