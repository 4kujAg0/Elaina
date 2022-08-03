
"use strict";
require("../../../../../ACTION/OPTIONS/settings.js")
const {
default: _makeWASocket,
BufferJSON,
Browsers,
initInMemoryKeyStore,
DisconnectReason,
AnyMessageContent,
makeInMemoryStore,
useSingleFileAuthState,
fetchLatestBaileysVersion,
delay,
jidDecode,
generateForwardMessageContent, 
prepareWAMessageMedia, 
generateWAMessageFromContent, 
generateMessageID, 
downloadContentFromMessage, 
WAProto,
proto,
connectOptions,
areJidsSameUser 
} = require("../../../../../ACTION/STORAGE/X-FUNC/WOKER/@adiwajshing/baileys")
const figlet = require("figlet");
const fs = require("fs");
const moment = require("moment-timezone")
const chalk = require('chalk')
const logg = require('pino')
const clui = require('clui')
const simple = require('../../../../../ACTION/STORAGE/X-FUNC/simple') 
const { Boom } = require('@hapi/boom')
const { Spinner } = clui
const { color} = require("../../../../../ACTION/STORAGE/X-FUNC/color");
const FileType = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const {getBuffer,sleep, smsg} = require("../../../../../ACTION/STORAGE/X-FUNC/myfunc");
const { start, success,getRandom, getGroupAdmins,close} = require("../../../../../ACTION/STORAGE/X-FUNC/functions");
const time = moment.tz('Asia/Jakarta').format('DD/MM')
let session = `./ACTION/CONNECTION/${sessionName}.json`
const { state, saveState } = useSingleFileAuthState(session)
const randomserver = ['Chrome','Safari','Firefox','Opera','ubuntu','EDGE','Desktop']
const randomserverku = randomserver[Math.floor(Math.random() * (randomserver.length))]
const { exec, spawn } = require("child_process");
if(runWith.includes("eplit")){
const {app} = require("../../../../../keepalive.js") 
}





const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })




//store.readFromFile("baileys_store_multi.json")
// saves the state to a file every 10s
//setInterval(() => {
  //  store.writeToFile("baileys_store_multi.json")
//}, 10_000)




const connectToWhatsApp = async () => {
	
const { version, isLatest } = await fetchLatestBaileysVersion()
//console.log(color(`using WA v${version.join('.')}, isLatest: ${isLatest}`))


const connectionOptions = {
  printQRInTerminal: true,
  logger: logg({ level: 'fatal' }),
  auth: state,
  browser: ['AraKawai', `${randomserverku}`, '3.0'], 
}
global.conn = simple.makeWASocket(connectionOptions)

  
conn.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update       

if (connection === 'close') {
console.log(color(lastDisconnect.error));

let reason = new Boom(lastDisconnect?.error)?.output.statusCode

if (reason === DisconnectReason.badSession) { console.log(color(`Bad Session File, Please Delete Session and Scan Again`)); exec(`cd && node index`) }
else if (reason === DisconnectReason.connectionClosed) { 
console.log(color("[SYSTEM]", "white"), color('Connection closed, reconnecting...', 'deeppink')); 
conn.sendMessage(nomerOwner+"@s.whatsapp.net", JSON.stringify(eval(process.exit())))
}
else if (reason === DisconnectReason.connectionLost) { 
conn.sendMessage(nomerOwner+"@s.whatsapp.net", JSON.stringify(eval(process.exit())))
console.log(color("[SYSTEM]", "white"), color('Connection lost, trying to reconnect', 'deeppink'));
conn.sendMessage(nomerOwner+"@s.whatsapp.net", {text: `Unknown DisconnectReason: ${reason}|${connection}`})
exec(`cd && node index`)
}
else if (reason === DisconnectReason.connectionReplaced) { console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First")); conn.logout(); 
} else if (reason === DisconnectReason.loggedOut) { console.log(color(`Device Logged Out, Please Scan Again And Run.`)); conn.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log(color("Restart Required, Restarting...")); 
await connectToWhatsApp(); 
//await sleep(1000)
//await exec(`cd && node index`)
//await conn.sendMessage(nomerOwner+"@s.whatsapp.net", {text: "Bot berhasil tersambung" })
}
else if (reason === DisconnectReason.timedOut) { console.log(color("Connection TimedOut, Reconnecting...")); connectToWhatsApp(); }
else {
await conn.sendMessage(nomerOwner+"@s.whatsapp.net", {text: `Unknown DisconnectReason: ${reason}|${connection}`})
await exec(`cd && ACTION/STORAGE/X-FUNC/WOKER/keyword/index.js`)
//conn.sendMessage(nomerOwner+"@s.whatsapp.net", JSON.stringify(eval(process.exit()))) 
}

} else if (connection === 'connecting') {
start(`1`,`Connecting...`)
} else if (connection === 'open') {
success(`1`,`Tersambung`) 
//await conn.sendMessage(`6285156137901@s.whatsapp.net`, {text: "Bot berhasil tersambung" })
}

}) 
 

  
store.bind(conn.ev)
conn.waVersion = version

conn.ev.on('messages.upsert', async chatUpdate => {
try{
if (!chatUpdate.messages) return;
var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m.message) return
if (m.key && m.key.remoteJid === 'status@broadcast') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = simple.smsg(conn, m, store)
require('../../../../../ACTION/STORAGE/X-FUNC/WOKER/@adiwajshing/index.js')(conn, m, chatUpdate,store)
}catch (err){
console.log(err)
}
})

conn.ev.on('group-participants.update', async (anu) => {
require('../../../../../ACTION/STORAGE/X-DEV/group.js')(conn, anu)
});  

conn.ev.on('contacts.update', update => {
for (let contact of update) {
let id = conn.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})
    
     
const toFirstCase = (str) =>{
 let first = str.split(" ")              // Memenggal nama menggunakan spasi
.map(nama => 
nama.charAt(0).toUpperCase() + 
nama.slice(1))                 // Ganti huruf besar kata-kata pertama
.join(" ");

return first
 }


 const removeObject = function(arr, attr, value){
 var i = arr.length;
 while(i--){
 if( arr[i] 
 && arr[i].hasOwnProperty(attr) 
 && (arguments.length > 2 && arr[i][attr] === value ) ){ 
arr.splice(i,1);
}
}
return arr;
} 

global.removeObject = removeObject
global.toFirstCase = toFirstCase

conn.ev.on('creds.update', () => saveState)
return conn
 }
    
connectToWhatsApp()
    
    


    
    
    
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(chalk.redBright(`Update ${__filename}`))
        delete require.cache[file]
        require(file)
    })
    