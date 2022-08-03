global.nomerOwner = "6289508391733"
global.ownerName = "AraChans"
global.botName = "Elaina"
global.sessionName ="session" 
global.runWith = "Heroku"
global.setmenu ="location2"
global.docType = "docx"
global.Qoted = "dev"
global.textMenu = "menu2"
global.textFitur = "fitur2"
global.baileysMd = true
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = "."
global.fake = "404-Elaina" 
global.publik = true
global.Console = false
global.textreply = "𝑯𝒚%20𝑲𝒂𝒌,%20𝑺𝒚𝒂%20𝑴𝒂𝒖%20𝑵𝒈𝒐𝒎𝒐𝒏𝒈%20𝑲𝒂𝒍𝒐%20𝑺𝒂𝒚𝒂%20𝑳𝒂𝒈𝒊%20𝑮𝒂𝒚"
global.On = "On"
global.Off ="Off"
global.setwelcome = "type3"
global.setintro = "Welcome Kak Jangan Lupa Intro \nDan Baca Rules Group"
global.setoutro = "Asik beban grup keluar \nKena mental dia :v"
global.packName = "Elaina"
global.authorName = "404"
global.replyType = "web2"
global.lolkey = "Atakbotz"
global.autoblockcmd = false
global.autoblockcmd = false
global.autoReport = false
global.autoLevel = false
global.autoSticker = false
global.autovn = true
global.orquoted = false
global.autobutton = true
global.chatBot = false
global.autorespon = false
global.antiSpam = true
global.gamewaktu = 60
global.waktu = 60000,
global.monayawal = 1000,
global.limitawal = 20,
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}






const fs = require("fs");
const { color } = require("../../ACTION/STORAGE/X-FUNC/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






