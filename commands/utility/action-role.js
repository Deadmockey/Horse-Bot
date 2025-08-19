const { SlashCommandBuilder, ContainerBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Testing some shit'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents('component');

        await interaction.reply({ components: [row] });
    },
};