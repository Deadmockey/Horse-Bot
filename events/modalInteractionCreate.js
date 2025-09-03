const { Events, RoleSelectMenuBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId == 'myModal') {
            const roleSelectMenu = new RoleSelectMenuBuilder()
                .setCustomId('roleSelectMenu')
                .setPlaceholder('Select an Option')
                .setMinValues(1);

            const rulesInput = interaction.fields.getTextInputValue('rulesInput');
            await interaction.channel.send(rulesInput);


            const actionRow = new ActionRowBuilder()
                .setComponents(roleSelectMenu);

            response = await interaction.reply({
                content: 'Select a role to assign',
                components: [actionRow],
                flags: MessageFlags.Ephemeral,
                withResponse: true,
            });

            const collectorFilter = i => i.user.id === interaction.user.id;

            try {
                const confirmation = await response.resource.message.awaitMessageComponent({ filter: collectorFilter, time: 300_000 });

                if (confirmation.customId == 'roleSelectMenu') {
                    const roleId = confirmation.roles.at(0).id;
                    const agreeButton = new ButtonBuilder()
                        .setCustomId(`agreeButton-${roleId}`)
                        .setLabel('Agree to rules')
                        .setStyle(ButtonStyle.Success);

                    const row = new ActionRowBuilder()
                        .addComponents(agreeButton);

                    await interaction.channel.send({
                        content: 'Press button below to gain access to the server',
                        components: [row],
                    });

                    await confirmation.update({ content: 'Button was succesfully created', components: [] });
                }
            } catch {
                await interaction.editReply({ content: 'Confirmation not received within 5 minutes, cancelling', components: [] });
            }
        }
    },
};