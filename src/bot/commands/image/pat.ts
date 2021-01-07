import { Command } from 'discord-akairo';
import { Message, TextChannel, MessageEmbed, MessageAttachment } from 'discord.js';
import fetch from 'node-fetch';

export default class extends Command {

	public constructor() {
		super('pat', {
			aliases: ['pat'],
			category: 'image',
			description: {
				content: 'Pat someone',
				example: '',
				usage: []
			}
		});
	}

	public async exec(message: Message) {


		

        const data = await fetch(encodeURI('https://nekos.life/api/v2/img/pat')).then(d => d.json());
        const user = message.mentions.users.first() || message.author;
        const kissed = message.author.id === user.id ? "themselves" : user.username;
        const embed = new MessageEmbed()
        .setTitle(`🖐️ ${message.author.username} Patted ${kissed}`)
        .setImage(`${data.url}`)
        .setColor('#ffa053')
        message.util?.send(embed)
		

	}

}
