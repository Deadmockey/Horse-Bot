const { Events, MessageFlags } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		} else if (interaction.isButton()) {
			if (interaction.customId.includes('agreeButton')) {
				const roleId = interaction.customId.substring(12);
				if (interaction.member.roles.cache.has(roleId)) {
					await interaction.reply({
						content: 'You already have the role',
						flags: MessageFlags.Ephemeral,
					});
				} else {
					interaction.member.roles.add(roleId);
					await interaction.reply({
						content: 'Role was given to you',
						flags: MessageFlags.Ephemeral,
					});
				}
			}
		}
	},
};