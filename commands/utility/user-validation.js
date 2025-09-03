const { SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uservalidation')
        .setDescription('Create server rules that user must agree to in order to obtain default role')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('myModal')
            .setTitle('My Modal');

        const rulesInput = new TextInputBuilder()
            .setCustomId('rulesInput')
            .setLabel('Enter server rules')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true);

        const firstActionRow = new ActionRowBuilder().addComponents(rulesInput);

        modal.addComponents(firstActionRow);

        await interaction.showModal(modal);
    },
};