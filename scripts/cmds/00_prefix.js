module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
Yo, my prefix is [ 𓆩 _ 𓆪 ]\n
━━━━━━━━━━━━━━━━━━━━━━━━━
██╗░░░██╗░█████╗░███████╗
╚██╗░██╔╝██╔══██╗╚════██║
░╚████╔╝░███████║░░███╔═╝
░░╚██╔╝░░██╔══██║██╔══╝░░
░░░██║░░░██║░░██║███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝
━━━━━━━━━━━━━━━━━━━━━━━━━

𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:
➥ _help [number of page] -> see commands
➥ _sim [message] -> talk to bot
➥ _callad [message] -> report any problem encountered
➥ _help [command] -> information and usage of command\n\nHave fun using it enjoy!❤️\nBot Developer: https://www.facebook.com/profile.php?id=100074772216830 `,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/5OgGEyv.gif")
 });
 }
 }
}