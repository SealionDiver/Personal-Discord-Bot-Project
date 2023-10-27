const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roller')
        .setDescription('Returns a value between a given range')
        .addIntegerOption(option =>
            option.setName('Lower')
                .setDescription('The lower bound')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('Upper')
                .setDescription('The upper bound')
                .setRequired(true)),
    async execute(interaction) {
        let num;

        
        
        num = Math.floor(Math.random() * 6);

        await interaction.reply('You rolled a: ' + num.toString());
    }

}