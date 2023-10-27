const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roller')
        .setDescription('Returns a value between a given range')
        .addIntegerOption(option =>
            option
                .setName('lower')
                .setDescription('The lower bound')
                .setRequired(true))
        .addIntegerOption(option =>
            option
                .setName('upper')
                .setDescription('The upper bound')
                .setRequired(true)),

    async execute(interaction) {
        let num;

        const low = interaction.options.getInteger('lower');
        const high = interaction.options.getInteger('upper');

        num = Math.floor(Math.random() * high) + low;

        await interaction.reply('You rolled a: ' + num.toString());
    }

}