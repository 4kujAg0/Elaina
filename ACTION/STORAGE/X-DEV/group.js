
const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../../../ACTION/STORAGE/X-FUNC/color");
const { getBuffer, getRandom, getGroupAdmins, reSize} = require("../../../ACTION/STORAGE/X-FUNC/myfunc");
const chalk = require('chalk')
const bg = "https://tinyurl.com/y23xrfhu"
//require("../../../settings.js")

module.exports = async(client, anu) => {
try{
//
if(anu.action == "remove" && anu.participants[0].split("@")[0].includes(client.user.id.split(":")[0]) ) return
let type1 = setwelcome == "type1"
let type2 = setwelcome == "type2"
let type3 = setwelcome == "type3"
const from = anu.id
const botNumber = client.user.id 
const groupMet = await client.groupMetadata(from)
const forward = { forwardingScore: 10000000, isForwarded: true, sendEphemeral: true}
const groupName = groupMet.subject  
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);                
const pushname =  await client.getName(mem)
  
  
const Add = anu.action == "add" 
const Remove = anu.action == "remove"
const OneMem = anu.participants.length === 1
const NotMe = !mem.includes(botNumber) 

try {
if(mem.includes(botNumber)) { return }
var pp_user = await client.profilePictureUrl(mem, 'image')
} catch (e) {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}    

let ppUser = await getBuffer(pp_user)
let Ppuser = await reSize(pp_user, 300, 300)

let options =
{ forward,
externalAdReply: {
title: ``, 
body: ``,
description: '',
mediaType: 2,
thumbnail: ppUser,
mediaUrl: "https://youtu.be/v4kWLu4Eb1Y",
sourceUrl: "https://www.youtube.com/watch?v=JJwLesqqcmM"
}
}

const butIn = [
{ urlButton: { displayText: `OWNER`, url : `https://wa.me/${nomerOwner}` } },
{ quickReplyButton: { displayText: `Bully Yuk`, id: `.bullyukk` } },
{ quickReplyButton: { displayText: `Ok Siap`, id: `.welcome` } }
]
const butOut = [
{ urlButton: { displayText: `OWNER`, url : `https://wa.me/${nomerOwner}` } },
{ quickReplyButton: { displayText: `Nitip Gorengan`, id: `.nitip` } },
{ quickReplyButton: { displayText: `Bye Beban`, id: `.bye` } }
]


let Inbut = [
{"buttonId": `.bullyukk`,"buttonText": {"displayText": `Bully Yuk`},"type": "RESPONSE"},
{"buttonId": `.welcome`,"buttonText": {"displayText": `Ok Siap`},"type": "RESPONSE"}]
let Outbut = [
{"buttonId": `.nitip`,"buttonText": {"displayText": `Nitip Gorengan`},"type": "RESPONSE"},
{"buttonId": `.bye`,"buttonText": {"displayText": `Bye Beban`},"type": "RESPONSE"}]




//Group Update Console
if (Remove && OneMem){
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
} else  if (Add && OneMem){ 
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
}


//Welcome Type
if(Add && OneMem && NotMe){ 
if(type1){
client.send5ButLoc(from, setintro, fake, Ppuser, butIn)
} else if(type2){
client.send5ButImg(from, setintro, fake, ppUser, butIn)
} else if(type3){client.sendButDoc(from, setintro, fake, ppUser, Inbut, options) }
} else if(Remove && NotMe){      
if(type1){
client.send5ButLoc(from, setoutro, fake, Ppuser, butOut)
} else if(type2){
client.send5ButImg(from, setoutro, fake, ppUser, butOut)
} else if(type3){client.sendButDoc(from, setoutro, fake, ppUser, Outbut, options) }
}


  
} catch (err) {
console.log(err)
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('GROUP : %s', 'white'), color(e, 'green'))
}   
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})








