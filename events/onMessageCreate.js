const { Events } = require('discord.js');

randomMessages = [
    'I want to play silksong',
    'neigh',
    'I see you',
    'https://tenor.com/view/horse-you-have-alerted-the-horse-alert-alert-horse-horse-alert-gif-10675569724654458517',
    'https://tenor.com/view/005861-gif-13926462904635032157',
    'https://tenor.com/view/horsepiv-gif-24660548',
];

module.exports = {
    name: Events.MessageCreate,
    async execute(userMessage) {
        if (!userMessage.content.includes('<@1404485870823805030>')) return;
        const i = Math.floor(Math.random() * randomMessages.length);
        await userMessage.channel.send(randomMessages[i]);
    },
};