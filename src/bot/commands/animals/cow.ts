import { Command } from 'discord-akairo';
import fetch from 'node-fetch';
import { Message, MessageEmbed } from 'discord.js';

class MemeCommand extends Command {

	public constructor() {
		super('cow', {
			aliases: ['cow'],
			category: 'animals',
			description: {
				content: 'Sends random cow image from the best sub-reddits!',
				usage: '',
				example: []
			}
		});
	}

	public async exec(message: Message) {
		const data = await fetch('https://www.reddit.com/r/cow/random/.json').then(res => res.json());
		const children = data[0].data.children[0];

		const embed: MessageEmbed = this.client.util.embed()
			.setColor('ORANGE')
			.setTitle(children.data.title)
			.setURL(`https://reddit.com${children.data.permalink}`)
			.setImage(children.data.url)
			.setFooter(`👍 ${children.data.ups} | 💬 ${children.data.num_comments}`);

		return message.util?.send(embed);
	}

}

export default MemeCommand;
