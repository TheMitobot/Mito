import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class extends Command {

	public constructor() {
		super('copypasta', {
			aliases: ['copypasta'],
			category: 'fun',
			description: {
				content: 'copy pastes copypastas',
				usage: '',
				example: []
			}
		});
	}

	public async exec(message: Message) {
		const replies: Array<string> = [
			"Fresh off the boat, from reddit, kid? heh I remember when I was just like you. Braindead. Lemme give you a tip so you can make it in this cyber sanctuary: never make jokes like that. You got no reputation here, you got no name, you got jackshit here. It's survival of the fittest and you ain't gonna survive long on 4chan by saying stupid jokes that your little hugbox cuntsucking reddit friends would upboat. None of that here. You don't upboat. You don't downboat. This ain't reddit, kid. This is 4chan. We have REAL intellectual discussion, something I don't think you're all that familiar with. You don't like it, you can hit the bricks on over to imgur, you daily show watching son of a bitch. I hope you don't tho. I hope you stay here and learn our ways. Things are different here, unlike any other place that the light of internet pop culture reaches. You can be anything here. Me ? heh, I'm a judge.. this place.... this place has a lot to offer... heh you'll see, kid . . . that is if you can handle it.",
  "I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I'm fucking retarded but I don't care, I'm beautiful. I'm having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me 'Apache' and respect my right to kill from above and kill needlessly. If you can't accept me you're a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.",
  ":ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes: good shit go౦ԁ sHit:ok_hand: thats :heavy_check_mark: some good:ok_hand::ok_hand:shit right:ok_hand::ok_hand:there:ok_hand::ok_hand::ok_hand: right:heavy_check_mark:there :heavy_check_mark::heavy_check_mark:if i do ƽaү so my self :100: i say so :100: thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ:100: :ok_hand::ok_hand: :ok_hand:НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ:ok_hand: :ok_hand::ok_hand: :ok_hand: :100: :ok_hand: :eyes: :eyes: :eyes: :ok_hand::ok_hand:Good shit",
  ":revolving_hearts:Daddy:revolving_hearts: be nimble:walking::skin-tone-1: Daddy be quick:runner::skin-tone-1::dash: Daddy has a rock:moyai: hard dick :eggplant::heart_eyes:! 1 cummy:sweat_drops: 2 cummy:sweat_drops::sweat_drops: 3 cummy:sweat_drops::sweat_drops::sweat_drops: 4 :sweat_drops::sweat_drops::sweat_drops::sweat_drops:! Daddy cums:sweat_drops: so much he can't cum any more:see_no_evil::hear_no_evil::speak_no_evil:! Ghost cummy:ghost::sweat_drops: Ghost cummy:ghost::sweat_drops: don't be scared:x::confounded::x:! There's always more cummies:sweat_drops::tongue: that can be shared:two_men_holding_hands:! Daddy makes me :cloud:️squishy:cloud:️ Daddy makes me :droplet:wet:droplet:Daddy treats me like his little pet:cat2::poodle::dog2:! Send this to 69 :100:TRUE:100: Daddy's or else you'll :no_entry_sign:never:no_entry_sign: get any cummies:sweat_drops::sweat_drops::sweat_drops: again :frowning::flushed::sunglasses::bangbang:",
  ":syringe::knife: :syringe::knife::syringe::knife:edgy shit edgY sHit :knife:thats :gun:some edgy:syringe::syringe: shit right :knife:th:knife: ere:syringe::syringe::syringe: right there :smoking::smoking:if i do ƽaү so my selｆ :gun:i say so :gun: thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ:gun: :knife::knife::knife:НO0ОଠＯOOＯOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ:knife::knife::knife: :gun: :syringe::syringe: :knife::knife: Edgy shit",
  "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo."
		];
		const reply: string = replies[Math.floor(Math.random() * replies.length)];

		return message.util?.send(`${reply}`);

	}

}
