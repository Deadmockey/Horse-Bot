const { Events } = require('discord.js');

const colors = [
    // Red
    '\u001b[0;31mLETTER\u001b[0;0m',

    // Yellon
    '\u001b[0;33mLETTER\u001b[0;0m',

    // Green
    '\u001b[0;32mLETTER\u001b[0;0m',

    // Blue
    '\u001b[0;34mLETTER\u001b[0;0m',

    // Cyan
    '\u001b[0;36mLETTER\u001b[0;0m',

    // Pink
    '\u001b[0;35mLETTER\u001b[0;0m',
];

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isMessageContextMenuCommand()) return;
        const message = interaction.targetMessage.cleanContent;
        let newMessage = '';
        for (let i = 0; i < message.length; i++) {
            const letter = colors[i % 6].replace('LETTER', message[i]);
            newMessage = newMessage + letter;
        }
        newMessage = '```Ansi\n' + newMessage + '```';
        interaction.reply(newMessage);
    },
};