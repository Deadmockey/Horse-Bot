const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sourcecode')
        .setDescription('Replys with a link to the source code'),
    async execute(interaction) {
        await interaction.reply({
            content: 'Here is my soruce code \nhttps://github.com/Deadmockey/Horse-Bot!',
            flags: MessageFlags.Ephemeral,
        });
    },
};
