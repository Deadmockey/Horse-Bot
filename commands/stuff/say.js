const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('repeats what you typed')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to say back')
                .setRequired(true)
                .setMinLength(1)),
    async execute(interaction) {
        await interaction.deferReply();
        await interaction.deleteReply();
        await interaction.channel.send(interaction.options.getString('input'));
    },
};