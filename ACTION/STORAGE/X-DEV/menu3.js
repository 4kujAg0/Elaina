const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../../../ACTION/STORAGE/X-FUNC/color')
const {weton,week,calender,dateIslamic} = require('../../../ACTION/STORAGE/X-FUNC/functions')
const {kyun} = require("../../../ACTION/STORAGE/X-FUNC/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");



var XM1 = '╔─═─═⊱'
var XM2 = '─═─═'
var XM3 = '┗━━━━━━━━━━━━━━━━━━'
var XP1 = '「'
var XP2 = '」'
var XR1 = '│'
var XR2 = '║'
var XB1 = '┏⊱'
var XB2 = '┗⊱'
var XOP = '⿻'
var XBC = '⬣'



//Total fitur
const totalFitur = () =>{
var mytext = fs.readFileSync("./ACTION/STORAGE/X-FUNC/WOKER/@adiwajshing/index.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)



let yes = "*「 _Error_ 」* ❌"
let no = ""

const feat = (q) => {
    let status = false
    Object.keys(JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/listerror.json'))).forEach((i) => {
        if (JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/listerror.json'))[i].cmd === q) {
            status = true
        }
    })
    return status
}



exports.menu3 =  (senderNumber, user, thisHit, publik, sender, prefix, isDevoloper, pushname, ucapanWaktu) => {
return `*hallo kak👋 ${pushname} ${ucapanWaktu}*
▬▭▬▭ 「 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 」▭▬▭▬
❏ Nama : ${pushname} 
❏ Status : ${isDevoloper ? '🎫 Premium':'User'}
❏ Prefix : 「 ${prefix} 」
❏ NamaBot : ${botName} - MD Beta
❏ Library : *Baileys-MD*.
❏ Mode : ${publik ? "Public" : "Self"}
❏ Total Feature : ${totalFitur()}
❏ Total Error : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/listerror.json')).length}
❏ Total User : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/user.json')).length.toLocaleString()}
❏ User Banned : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/banned.json')).length}
❏ User Blocked : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/userblocked.json')).length.toLocaleString()}
❏ Cmd Blocked : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/blockcmd.json')).length} 
▬▭▬▭ 「 𝕋𝕀𝕄𝔼 𝕀ℕ𝔽𝕆 」 ▭▬▭▬
❏ Runtime : ${kyun(process.uptime())}
❏ Time : ${timeWib} WIB 
❏ Time : ${timeWit} WIT 
❏ Time : ${timeWita} WITA
❏ Day : ${week}, ${calender}
❏ Islamic : ${dateIslamic}
❏ Hit Today : ${thisHit.toLocaleString()} 
`
 }

exports.fitur3 = (prefix) => {
return`${XM1} ${XP1} OWNER MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}join ${feat("join")? yes :no}
${XR1}${XOP} ${prefix}bc ${feat("bc")? yes :no}
${XR2}${XOP} ${prefix}bcgc ${feat("bcgc")? yes :no}   
${XR1}${XOP} ${prefix}getcaze ${feat("getcaze")? yes :no}
${XR2}${XOP} ${prefix}getsesi ${feat("getsesi")? yes :no} 
${XR1}${XOP} ${prefix}leave ${feat("leave")? yes :no} 
${XR2}${XOP} ${prefix}block ${feat("block")? yes :no}
${XR1}${XOP} ${prefix}unblock ${feat("unblock")? yes :no}
${XR2}${XOP} ${prefix}blockcmd ${feat("blockcmd")? yes :no}   
${XR1}${XOP} ${prefix}unblockcmd ${feat("unblockcmd")? yes :no} 
${XR2}${XOP} ${prefix}autolevel ${feat("autolevel")? yes :no} 
${XR1}${XOP} ${prefix}autorespon ${feat("autorespon")? yes :no} 
${XR2}${XOP} ${prefix}autosticker ${feat("autosticker")? yes :no}   
${XR1}${XOP} ${prefix}autovn ${feat("autovn")? yes :no}               
${XR2}${XOP} ${prefix}addlimit ${feat("addlimit")? yes :no}
${XR1}${XOP} ${prefix}culik ${feat("culik")? yes :no}
${XR2}${XOP} ${prefix}shutdown ${feat("shutdown")? yes :no}
${XR1}${XOP} ${prefix}restart ${feat("restart")? yes :no}
${XR2}${XOP} ${prefix}setprefix ${feat("setprefix")? yes :no}
${XR1}${XOP} ${prefix}setmenu ${feat("setmenu")? yes :no}
${XR2}${XOP} ${prefix}settextmenu ${feat("settextmenu")? yes :no}
${XR1}${XOP} ${prefix}settextfitur ${feat("settextfitur")? yes :no}
${XR2}${XOP} ${prefix}setreply ${feat("setreply")? yes :no}
${XR1}${XOP} ${prefix}setquoted ${feat("setquoted")? yes :no}
${XR2}${XOP} ${prefix}setnamebot ${feat("setnamebot")? yes :no}
${XR1}${XOP} ${prefix}setppbot ${feat("setppbot")? yes :no}
${XR2}${XOP} ${prefix}setbio ${feat("setbio")? yes :no}
${XR1}${XOP} ${prefix}setgif ${feat("setgif")? yes :no}
${XR2}${XOP} ${prefix}setexif ${feat("setexif")? yes :no}
${XR1}${XOP} ${prefix}console ${feat("console")? yes :no}
${XR2}${XOP} ${prefix}public ${feat("public")? yes :no}
${XR1}${XOP} ${prefix}self ${feat("self")? yes :no}
${XR2}${XOP} ${prefix}setwelcome ${feat("setwelcome")? yes :no}
${XR1}${XOP} ${prefix}setwelcomeintro ${feat("setwelcomeintro")? yes :no}
${XR2}${XOP} ${prefix}setwelcomeout ${feat("setwelcomeout")? yes :no}
${XR1}${XOP} ${prefix}setfake ${feat("setfake")? yes :no}
${XR2}${XOP} ${prefix}setnamaowner ${feat("setnamaowner")? yes :no}
${XR1}${XOP} ${prefix}settextreply ${feat("settextreply")? yes :no}
${XR2}${XOP} ${prefix}setnamabot ${feat("setnamabot")? yes :no}
${XR1}${XOP} ${prefix}setdocument ${feat("setdocument")? yes :no}
${XR2}${XOP} ${prefix}setnomerowner ${feat("setnomerowne")? yes :no}
${XR1}${XOP} ${prefix}orquoted ${feat("orquoted")? yes :no}
${XR2}${XOP} ${prefix}autobutton ${feat("autobutton")? yes :no}
${XR2}${XB2}
${XM3}${XBC}
   
${XM1} ${XP1} GROUP MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}antilink ${feat("antilink")? yes :no}
${XR1}${XOP} ${prefix}antilinkgc ${feat("antilinkgc")? yes :no}
${XR2}${XOP} ${prefix}antivirtex ${feat("antivirtex")? yes :no}
${XR1}${XOP} ${prefix}antiasing ${feat("antiasing")? yes :no}
${XR2}${XOP} ${prefix}infogc ${feat("infogx")? yes :no}
${XR1}${XOP} ${prefix}linkgc ${feat("linkgc")? yes :no}
${XR2}${XOP} ${prefix}setppgc ${feat("setppgc")? yes :no}
${XR1}${XOP} ${prefix}setnamegc ${feat("setnamegc")? yes :no}
${XR2}${XOP} ${prefix}setdesc ${feat("setdesc")? yes :no}
${XR1}${XOP} ${prefix}gc ${feat("gc")? yes :no}
${XR2}${XOP} ${prefix}revoke ${feat("revoke")? yes :no}
${XR1}${XOP} ${prefix}hidetag ${feat("hidetag")? yes :no}
${XR2}${XOP} ${prefix}tagall ${feat("tagall")? yes :no}
${XR1}${XOP} ${prefix}kick ${feat("kick")? yes :no}
${XR2}${XOP} ${prefix}add ${feat("add")? yes :no}
${XR1}${XOP} ${prefix}opentime ${feat("opentime")? yes :no}
${XR2}${XOP} ${prefix}closetime ${feat("closetime")? yes :no}
${XR1}${XOP} ${prefix}demote ${feat("demote")? yes :no}
${XR2}${XOP} ${prefix}promote ${feat("promote")? yes :no}
${XR1}${XOP} ${prefix}kickme ${feat("kickme")? yes :no}
${XR2}${XOP} ${prefix}banchat ${feat("banchat")? yes :no}
${XR1}${XOP} ${prefix}unbanchat ${feat("unbanchat")? yes :no}
${XR2}${XOP} ${prefix}ban ${feat("ban")? yes :no}
${XR1}${XOP} ${prefix}unban ${feat("unban")? yes :no}  
${XR2}${XOP} ${prefix}getppgc ${feat("getppgc")? yes :no}
${XR1}${XOP} ${prefix}getpp ${feat("getpp")? yes :no}
${XR2}${XOP} ${prefix}listonline ${feat("lostoneline")? yes :no}
${XR1}${XOP} ${prefix}getname ${feat("getname")? yes :no}
${XR2}${XOP} ${prefix}antihidetag ${feat("antihidetag")? yes :no}
${XR2}${XB2}
${XM3}${XBC}

${XM1} ${XP1} MAIN MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}menu ${feat("menu")? yes :no}
${XR1}${XOP} ${prefix}del ${feat("del")? yes :no}
${XR2}${XOP} ${prefix}react ${feat("react")? yes :no}   
${XR1}${XOP} ${prefix}info ${feat("info")? yes :no}
${XR2}${XOP} ${prefix}dashboard ${feat("dashboard")? yes :no}
${XR1}${XOP} ${prefix}sewa ${feat("sewa")? yes :no}
${XR2}${XOP} ${prefix}status ${feat("status")? yes :no}
${XR1}${XOP} ${prefix}ping ${feat("ping")? yes :no}
${XR2}${XOP} ${prefix}owner ${feat("owner")? yes :no}
${XR1}${XOP} ${prefix}readmore ${feat("readmore")? yes :no}
${XR2}${XOP} ${prefix}infobotz ${feat("infobotz")? yes :no}
${XR1}${XOP} ${prefix}runtime ${feat("runtime")? yes :no}
${XR2}${XOP} ${prefix}speed ${feat("speed")? yes :no}
${XR1}${XOP} ${prefix}ss ${feat("ss")? yes :no}  
${XR2}${XOP} ${prefix}chat ${feat("chat")? yes :no}
${XR1}${XOP} ${prefix}rules ${feat("rules")? yes :no}
${XR2}${XOP} ${prefix}kalkulator ${feat("kalkulator")? yes :no}  
${XR1}${XOP} ${prefix}listpc ${feat("listpc")? yes :no}
${XR2}${XOP} ${prefix}listgc ${feat("listgc")? yes :no}
${XR1}${XOP} ${prefix}inspect ${feat("listgc")? yes :no}
${XR2}${XOP} ${prefix}resize ${feat("listgc")? yes :no}
${XR1}${XOP} ${prefix}kontak ${feat("kontak")? yes :no}
${XR2}${XOP} ${prefix}cariteman ${feat("cariteman")? yes :no}
${XR1}${XB2}
${XM3}${XBC}
  
${XM1} ${XP1} FUN MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}cekbapak ${feat("cekbapak")? yes :no}
${XR1}${XOP} ${prefix}bucin ${feat("bucin")? yes :no}
${XR2}${XOP} ${prefix}katailham ${feat("katailham")? yes :no}
${XR1}${XOP} ${prefix}truth ${feat("truth")? yes :no}
${XR2}${XOP} ${prefix}dare ${feat("dare")? yes :no}
${XR1}${XOP} ${prefix}bisakah ${feat("bisakah")? yes :no}
${XR2}${XOP} ${prefix}kapankah ${feat("kapankah")? yes :no}
${XR1}${XOP} ${prefix}apakah ${feat("apakah")? yes :no}
${XR2}${XOP} ${prefix}bagaimanakah ${feat("bagaimanakah")? yes :no}
${XR1}${XOP} ${prefix}goblokcek ${feat("goblokcek")? yes :no} 
${XR2}${XOP} ${prefix}jelekcek ${feat("jelekcek")? yes :no} 
${XR1}${XOP} ${prefix}gaycek ${feat("gaycek")? yes :no}
${XR2}${XOP} ${prefix}rate ${feat("rate")? yes :no}
${XR1}${XOP} ${prefix}lesbicek ${feat("lesbicek")? yes :no}
${XR2}${XOP} ${prefix}gantengcek ${feat("gantengcek")? yes :no}
${XR1}${XOP} ${prefix}cantikcek ${feat("cantikcek")? yes :no}
${XR2}${XOP} ${prefix}begocek ${feat("begocek")? yes :no}
${XR1}${XOP} ${prefix}suhucek ${feat("suhucek")? yes :no}
${XR2}${XOP} ${prefix}pintercek ${feat("pintercek")? yes :no}
${XR1}${XOP} ${prefix}jagocek ${feat("jagocek")? yes :no}
${XR2}${XOP} ${prefix}nolepcek ${feat("nolepcek")? yes :no}
${XR1}${XOP} ${prefix}babicek ${feat("babicek")? yes :no}
${XR2}${XOP} ${prefix}bebancek ${feat("bebancek")? yes :no}
${XR1}${XOP} ${prefix}baikcek ${feat("baikcek")? yes :no}
${XR2}${XOP} ${prefix}jahatcek ${feat("jahatcek")? yes :no}
${XR1}${XOP} ${prefix}anjingcek ${feat("anjingcek")? yes :no}
${XR2}${XOP} ${prefix}haramcek ${feat("haramcek")? yes :no}
${XR1}${XOP} ${prefix}pakboycek ${feat("pakboycek")? yes :no}
${XR2}${XOP} ${prefix}pakgirlcek ${feat("pakgirlcek")? yes :no}
${XR1}${XOP} ${prefix}sangecek ${feat("sangecek")? yes :no}
${XR2}${XOP} ${prefix}bapercek ${feat("bapercek")? yes :no}
${XR1}${XOP} ${prefix}fakboycek ${feat("fakboycek")? yes :no}
${XR2}${XOP} ${prefix}alimcek ${feat("alimcek")? yes :no}
${XR1}${XOP} ${prefix}suhucek ${feat("suhucek")? yes :no}
${XR2}${XOP} ${prefix}fakgirlcek ${feat("fakgirlcek")? yes :no}
${XR1}${XOP} ${prefix}kerencek ${feat("kerencek")? yes :no}
${XR2}${XOP} ${prefix}wibucek ${feat("wibucek")? yes :no}
${XR1}${XOP} ${prefix}pasarkascek ${feat("pasarkascek")? yes :no}
${XR2}${XOP} ${prefix}watakcek ${feat("watakcek")? yes :no}
${XR1}${XOP} ${prefix}hobbycek ${feat("hobbycek")? yes :no}
${XR2}${XB2}
${XM3}${XBC}
  
${XM1} ${XP1} PRIMBON MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}nomerhoki ${feat("nomerhoki")? yes :no}
${XR1}${XOP} ${prefix}artimimpi ${feat("artimimpi")? yes :no}
${XR2}${XOP} ${prefix}ramaljodoh ${feat("ramaljodoh")? yes :no}
${XR1}${XOP} ${prefix}ramaljodohbali ${feat("ramaljodohbali")? yes :no}
${XR2}${XOP} ${prefix}suamiistri ${feat("suamiistri")? yes :no}
${XR1}${XOP} ${prefix}ramalcinta ${feat("ramalcinta")? yes :no}
${XR2}${XOP} ${prefix}artinama ${feat("artinama")? yes :no}
${XR1}${XOP} ${prefix}cocoknama ${feat("cocoknama")? yes :no}
${XR2}${XOP} ${prefix}cocokpasangan ${feat("cocokpasangan")? yes :no}
${XR1}${XOP} ${prefix}jadiannikah ${feat("jadiannikah")? yes :no}
${XR2}${XOP} ${prefix}sifatusaha ${feat("sifatusaha")? yes :no}
${XR1}${XOP} ${prefix}rezeki ${feat("rezeki")? yes :no}
${XR2}${XOP} ${prefix}pekerjaan ${feat("pekerjaan")? yes :no}
${XR1}${XOP} ${prefix}ramalnasib ${feat("ramalnasib")? yes :no}
${XR2}${XOP} ${prefix}penyakit ${feat("penyakit")? yes :no}
${XR1}${XOP} ${prefix}artitarot ${feat("artitarot")? yes :no}
${XR2}${XOP} ${prefix}fengshui ${feat("fengshui")? yes :no}
${XR1}${XOP} ${prefix}haribaik ${feat("haribaik")? yes :no}
${XR2}${XOP} ${prefix}harisangar ${feat("harisangar")? yes :no}
${XR1}${XOP} ${prefix}harisial ${feat("harisial")? yes :no}
${XR2}${XOP} ${prefix}harinaga ${feat("harinaga")? yes :no}
${XR1}${XOP} ${prefix}arahrejeki ${feat("arahrejeki")? yes :no}
${XR2}${XOP} ${prefix}peruntungan ${feat("peruntungan")? yes :no}
${XR1}${XOP} ${prefix}wetonjawa ${feat("wetonjawa")? yes :no}
${XR2}${XOP} ${prefix}karakter ${feat("karakter")? yes :no}
${XR1}${XOP} ${prefix}keberuntungan ${feat("keberuntungan")? yes :no}
${XR2}${XOP} ${prefix}memancing ${feat("memancing")? yes :no}
${XR1}${XOP} ${prefix}masasubur ${feat("masasubur")? yes :no}
${XR2}${XOP} ${prefix}zodiak ${feat("zodiak")? yes :no}
${XR1}${XOP} ${prefix}shio ${feat("shio")? yes :no}
${XR2}${XB2}
${XM3}${XBC}  
  
${XM1} ${XP1} RANDOM MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}cecan ${feat("cecan")? yes :no}
${XR1}${XOP} ${prefix}cogan ${feat("cogan")? yes :no}
${XR2}${XOP} ${prefix}anime ${feat("anime")? yes :no}
${XR1}${XOP} ${prefix}bokep ${feat("bokep")? yes :no}
${XR2}${XOP} ${prefix}loli ${feat("loli")? yes :no}
${XR1}${XOP} ${prefix}milf ${feat("milf")? yes :no}
${XR2}${XOP} ${prefix}husbu ${feat("hubu")? yes :no}
${XR1}${XOP} ${prefix}cosplay ${feat("cosplay")? yes :no}
${XR2}${XOP} ${prefix}wallml ${feat("wallml")? yes :no}
${XR1}${XOP} ${prefix}wallpapers ${feat("wallpapers")? yes :no}
${XR2}${XOP} ${prefix}wallpapermobile ${feat("wallpapermobile")? yes :no}
${XR1}${XOP} ${prefix}neko ${feat("neko")? yes :no}
${XR2}${XOP} ${prefix}neko2 ${feat("neko2")? yes :no}
${XR1}${XOP} ${prefix}waifu ${feat("waifu")? yes :no}
${XR2}${XOP} ${prefix}trap ${feat("trap")? yes :no}
${XR1}${XOP} ${prefix}blowjob ${feat("blowjob")? yes :no}
${XR2}${XOP} ${prefix}shinobu ${feat("shinobu")? yes :no}
${XR1}${XOP} ${prefix}megumin ${feat("megumin")? yes :no}
${XR2}${XOP} ${prefix}bully ${feat("bully")? yes :no}
${XR1}${XOP} ${prefix}cuddle ${feat("cuddle")? yes :no}
${XR2}${XOP} ${prefix}cry ${feat("cry")? yes :no}
${XR1}${XOP} ${prefix}hug ${feat("hug")? yes :no}
${XR2}${XOP} ${prefix}awoo ${feat("awoo")? yes :no}
${XR1}${XOP} ${prefix}kiss ${feat("kiss")? yes :no}
${XR2}${XOP} ${prefix}lick ${feat("lick")? yes :no}
${XR1}${XOP} ${prefix}pat ${feat("pat")? yes :no}
${XR2}${XOP} ${prefix}smug ${feat("smug")? yes :no}
${XR1}${XOP} ${prefix}bonk ${feat("bonk")? yes :no}
${XR2}${XOP} ${prefix}yeet ${feat("yeet")? yes :no}
${XR1}${XOP} ${prefix}blush ${feat("blush")? yes :no}
${XR2}${XOP} ${prefix}smile ${feat("smile")? yes :no}
${XR1}${XOP} ${prefix}wave ${feat("wave")? yes :no}
${XR2}${XOP} ${prefix}highfive ${feat("highfive")? yes :no}
${XR1}${XOP} ${prefix}handhold ${feat("handhold")? yes :no}
${XR2}${XOP} ${prefix}nom ${feat("nom")? yes :no}
${XR1}${XOP} ${prefix}bite ${feat("bite")? yes :no}
${XR2}${XOP} ${prefix}glomp ${feat("glomp")? yes :no}
${XR1}${XOP} ${prefix}slap ${feat("slap")? yes :no}
${XR2}${XOP} ${prefix}kill ${feat("kill")? yes :no}
${XR1}${XOP} ${prefix}happy ${feat("happy")? yes :no}
${XR2}${XOP} ${prefix}wink ${feat("wink")? yes :no}
${XR1}${XOP} ${prefix}waifunime ${feat("waifunime")? yes :no}
${XR2}${XOP} ${prefix}hug2 ${feat("hug2")? yes :no}
${XR1}${XB2}
${XM3}${XBC}
  
${XM1} ${XP1} CONVERTER ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}toimg ${feat("toimg")? yes :no}
${XR1}${XOP} ${prefix}tomp3 ${feat("tomp3")? yes :no}
${XR2}${XOP} ${prefix}tomp4 ${feat("tomp4")? yes :no}
${XR1}${XOP} ${prefix}toptt ${feat("toptt")? yes :no}
${XR2}${XOP} ${prefix}togif ${feat("togif")? yes :no}
${XR1}${XOP} ${prefix}volume ${feat("volume")? yes :no}
${XR2}${XOP} ${prefix}hode ${feat("hode")? yes :no}
${XR1}${XOP} ${prefix}ghost ${feat("ghost")? yes :no}
${XR2}${XOP} ${prefix}nightcore ${feat("nightcore")? yes :no}
${XR1}${XOP} ${prefix}tupai ${feat("tupai")? yes :no}
${XR2}${XOP} ${prefix}imut ${feat("imut")? yes :no}
${XR1}${XB2}
${XM3}${XBC}

${XM1} ${XP1} EMOJI ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}emojiap ${feat("emojiap")? yes :no}
${XR1}${XOP} ${prefix}emojigo ${feat("emojigo")? yes :no}
${XR2}${XOP} ${prefix}emojisa ${feat("emojisa")? yes :no}
${XR1}${XOP} ${prefix}emojims ${feat("emojims")? yes :no}
${XR2}${XOP} ${prefix}emojiwa ${feat("emojiwa")? yes :no}
${XR1}${XOP} ${prefix}emojitw ${feat("emojitw")? yes :no}
${XR2}${XOP} ${prefix}emojifb ${feat("emojifb")? yes :no}
${XR1}${XOP} ${prefix}emojijp ${feat("emojijp")? yes :no}
${XR2}${XOP} ${prefix}emojiom ${feat("emojiom")? yes :no}
${XR1}${XOP} ${prefix}emojied ${feat("emojied")? yes :no}
${XR2}${XOP} ${prefix}emojimes ${feat("emojimes")? yes :no}
${XR1}${XOP} ${prefix}emojilt ${feat("emojilt")? yes :no}
${XR2}${XOP} ${prefix}emojimo ${feat("emojimo")? yes :no}
${XR1}${XOP} ${prefix}emojimix ${feat("emojimix")? yes :no}
${XR2}${XB2}
${XM3}${XBC}

${XM1} ${XP1} STICKER ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}sticker ${feat("s")? yes :no}
${XR1}${XOP} ${prefix}attp ${feat("attp")? yes :no}
${XR2}${XOP} ${prefix}smeme ${feat("smeme")? yes :no}
${XR1}${XOP} ${prefix}triggered ${feat("triggered")? yes :no}
${XR2}${XOP} ${prefix}wasted ${feat("wasted")? yes :no}
${XR1}${XOP} ${prefix}comrade ${feat("comrade")? yes :no}
${XR2}${XOP} ${prefix}horny ${feat("horny")? yes :no}
${XR1}${XOP} ${prefix}blur ${feat("blur")? yes :no}
${XR2}${XOP} ${prefix}pixelate ${feat("pixelate")? yes :no}
${XR1}${XOP} ${prefix}simpcard ${feat("simpcard")? yes :no}
${XR2}${XOP} ${prefix}lolice ${feat("lolice")? yes :no}
${XR1}${XOP} ${prefix}glass ${feat("glass")? yes :no}
${XR2}${XOP} ${prefix}take ${feat("take")? yes :no}
${XR1}${XOP} ${prefix}patrick ${feat("patrick")? yes :no}
${XR2}${XOP} ${prefix}gura ${feat("gura")? yes :no}
${XR1}${XOP} ${prefix}doge ${feat("doge")? yes :no}
${XR2}${XB2}
${XM3}${XBC}

${XM1} ${XP1} DOWNLOAD ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}play ${feat("play")? yes :no}
${XR1}${XOP} ${prefix}playmusic ${feat("playmusic")? yes :no}
${XR2}${XOP} ${prefix}ig ${feat("ig")? yes :no}
${XR1}${XOP} ${prefix}gimage ${feat("gimage")? yes :no}
${XR2}${XOP} ${prefix}tiktok ${feat("tiktok")? yes :no}
${XR1}${XOP} ${prefix}tiktokmusic ${feat("tiktokmusik")? yes :no}
${XR2}${XOP} ${prefix}tiktoknowm ${feat("tiktoknowm")? yes :no}
${XR1}${XOP} ${prefix}pinterest ${feat("pinterest")? yes :no}
${XR2}${XOP} ${prefix}spotify ${feat("spotify")? yes :no}
${XR1}${XOP} ${prefix}ytmp4 ${feat("ytmp4")? yes :no}
${XR2}${XOP} ${prefix}ytmp3 ${feat("ytmp3")? yes :no}
${XR1}${XOP} ${prefix}mediafire ${feat("mediafire")? yes :no}
${XR2}${XOP} ${prefix}githubdl ${feat("githubdl")? yes :no}
${XR1}${XOP} ${prefix}gitclone ${feat("gitclone")? yes :no}
${XR2}${XOP} ${prefix}igstory ${feat("igstory")? yes :no}
${XR1}${XB2}
${XM3}${XBC}
  
${XM1} ${XP1} SOUND MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}sound1 ${feat("sound1")? yes :no}
${XR1}${XOP} ${prefix}sound2 ${feat("sound2")? yes :no}
${XR2}${XOP} ${prefix}sound3 ${feat("sound3")? yes :no}
${XR1}${XOP} ${prefix}sound4 ${feat("sound4")? yes :no}
${XR2}${XOP} ${prefix}sound5 ${feat("sound5")? yes :no}
${XR1}${XOP} ${prefix}sound6 ${feat("sound6")? yes :no}
${XR2}${XOP} ${prefix}sound7 ${feat("sound7")? yes :no}
${XR1}${XOP} ${prefix}sound8 ${feat("sound8")? yes :no}
${XR2}${XOP} ${prefix}sound9 ${feat("sound9")? yes :no}
${XR1}${XOP} ${prefix}sound10 ${feat("sound10")? yes :no}
${XR2}${XOP} ${prefix}sound11 ${feat("sound11")? yes :no}
${XR1}${XOP} ${prefix}sound12 ${feat("sound12")? yes :no}
${XR2}${XOP} ${prefix}sound13 ${feat("sound13")? yes :no}
${XR1}${XOP} ${prefix}sound14 ${feat("sound14")? yes :no}
${XR2}${XOP} ${prefix}sound15 ${feat("sound15")? yes :no}
${XR1}${XOP} ${prefix}sound16 ${feat("sound16")? yes :no}
${XR2}${XOP} ${prefix}sound17 ${feat("sound17")? yes :no}
${XR1}${XOP} ${prefix}sound18 ${feat("sound18")? yes :no}
${XR2}${XOP} ${prefix}sound19 ${feat("sound19")? yes :no}
${XR1}${XOP} ${prefix}sound20 ${feat("sound20")? yes :no}
${XR2}${XOP} ${prefix}sound21 ${feat("sound21")? yes :no}
${XR1}${XOP} ${prefix}sound22 ${feat("sound22")? yes :no}
${XR2}${XOP} ${prefix}sound23 ${feat("sound23")? yes :no}
${XR1}${XOP} ${prefix}sound24 ${feat("sound24")? yes :no}
${XR2}${XOP} ${prefix}sound25 ${feat("sound25")? yes :no}
${XR1}${XOP} ${prefix}sound26 ${feat("sound26")? yes :no}
${XR2}${XOP} ${prefix}sound27 ${feat("sound27")? yes :no}
${XR1}${XOP} ${prefix}sound28 ${feat("sound28")? yes :no}
${XR2}${XOP} ${prefix}sound29 ${feat("sound29")? yes :no}
${XR1}${XOP} ${prefix}sound30 ${feat("sound30")? yes :no}
${XR2}${XOP} ${prefix}sound31 ${feat("sound31")? yes :no}
${XR1}${XOP} ${prefix}sound32 ${feat("sound32")? yes :no}
${XR2}${XOP} ${prefix}sound33 ${feat("sound33")? yes :no}
${XR1}${XOP} ${prefix}sound34 ${feat("sound34")? yes :no}
${XR2}${XOP} ${prefix}sound35 ${feat("sound35")? yes :no}
${XR1}${XOP} ${prefix}sound36 ${feat("sound36")? yes :no}
${XR2}${XOP} ${prefix}sound37 ${feat("sound37")? yes :no}
${XR1}${XOP} ${prefix}sound38 ${feat("sound38")? yes :no}
${XR2}${XOP} ${prefix}sound39 ${feat("sound39")? yes :no}
${XR1}${XOP} ${prefix}sound40 ${feat("sound40")? yes :no}
${XR2}${XOP} ${prefix}sound41 ${feat("sound41")? yes :no}
${XR1}${XOP} ${prefix}sound42 ${feat("sound42")? yes :no}
${XR2}${XOP} ${prefix}sound43 ${feat("sound43")? yes :no}
${XR1}${XOP} ${prefix}sound44 ${feat("sound44")? yes :no}
${XR2}${XOP} ${prefix}sound45 ${feat("sound45")? yes :no}
${XR1}${XOP} ${prefix}sound46 ${feat("sound46")? yes :no}
${XR2}${XOP} ${prefix}sound47 ${feat("sound47")? yes :no}
${XR1}${XOP} ${prefix}sound48 ${feat("sound48")? yes :no}
${XR2}${XOP} ${prefix}sound49 ${feat("sound49")? yes :no}
${XR1}${XOP} ${prefix}sound50 ${feat("sound50")? yes :no}
${XR2}${XOP} ${prefix}sound51 ${feat("sound51")? yes :no}
${XR1}${XOP} ${prefix}sound52 ${feat("sound52")? yes :no}
${XR2}${XOP} ${prefix}sound53 ${feat("sound53")? yes :no}
${XR1}${XOP} ${prefix}sound54 ${feat("sound54")? yes :no}
${XR2}${XOP} ${prefix}sound55 ${feat("sound55")? yes :no}
${XR1}${XOP} ${prefix}sound56 ${feat("sound56")? yes :no}
${XR2}${XOP} ${prefix}sound57 ${feat("sound57")? yes :no}
${XR1}${XOP} ${prefix}sound58 ${feat("sound58")? yes :no}
${XR2}${XOP} ${prefix}sound59 ${feat("sound59")? yes :no}
${XR1}${XOP} ${prefix}sound60 ${feat("sound60")? yes :no}
${XR2}${XOP} ${prefix}sound61 ${feat("sound61")? yes :no}
${XR1}${XOP} ${prefix}sound62 ${feat("sound62")? yes :no}
${XR2}${XOP} ${prefix}sound63 ${feat("sound63")? yes :no}
${XR1}${XOP} ${prefix}sound64 ${feat("sound64")? yes :no}
${XR2}${XOP} ${prefix}sound65 ${feat("sound65")? yes :no}
${XR1}${XOP} ${prefix}sound66 ${feat("sound66")? yes :no}
${XR2}${XOP} ${prefix}sound67 ${feat("sound67")? yes :no}
${XR1}${XOP} ${prefix}sound68 ${feat("sound68")? yes :no}
${XR2}${XOP} ${prefix}sound69 ${feat("sound69")? yes :no}
${XR1}${XOP} ${prefix}sound70 ${feat("sound70")? yes :no}
${XR2}${XOP} ${prefix}sound71 ${feat("sound71")? yes :no}
${XR1}${XOP} ${prefix}sound72 ${feat("sound72")? yes :no}
${XR2}${XOP} ${prefix}sound73 ${feat("sound73")? yes :no}
${XR1}${XOP} ${prefix}sound74 ${feat("sound74")? yes :no}
${XR2}${XOP} ${prefix}sound75 ${feat("sound75")? yes :no}
${XR1}${XOP} ${prefix}sound76 ${feat("sound76")? yes :no}
${XR2}${XOP} ${prefix}sound77 ${feat("sound77")? yes :no}
${XR1}${XOP} ${prefix}sound78 ${feat("sound78")? yes :no}
${XR2}${XOP} ${prefix}sound79 ${feat("sound79")? yes :no}
${XR1}${XOP} ${prefix}sound80 ${feat("sound80")? yes :no}
${XR2}${XOP} ${prefix}sound81 ${feat("sound81")? yes :no}
${XR1}${XOP} ${prefix}sound82 ${feat("sound82")? yes :no}
${XR2}${XOP} ${prefix}sound83 ${feat("sound83")? yes :no}
${XR1}${XOP} ${prefix}sound84 ${feat("sound84")? yes :no}
${XR2}${XOP} ${prefix}sound85 ${feat("sound85")? yes :no}
${XR1}${XOP} ${prefix}sound86 ${feat("sound86")? yes :no}
${XR2}${XOP} ${prefix}sound87 ${feat("sound87")? yes :no}
${XR1}${XOP} ${prefix}sound88 ${feat("sound88")? yes :no}
${XR2}${XOP} ${prefix}sound89 ${feat("sound89")? yes :no}
${XR1}${XOP} ${prefix}sound90 ${feat("sound90")? yes :no}
${XR2}${XOP} ${prefix}sound91 ${feat("sound91")? yes :no}
${XR1}${XOP} ${prefix}sound92 ${feat("sound92")? yes :no}
${XR2}${XOP} ${prefix}sound93 ${feat("sound93")? yes :no}
${XR1}${XOP} ${prefix}sound94 ${feat("sound94")? yes :no}
${XR2}${XOP} ${prefix}sound95 ${feat("sound95")? yes :no}
${XR1}${XOP} ${prefix}sound96 ${feat("sound96")? yes :no}
${XR2}${XOP} ${prefix}sound97 ${feat("sound97")? yes :no}
${XR1}${XOP} ${prefix}sound98 ${feat("sound98")? yes :no}
${XR2}${XOP} ${prefix}sound99 ${feat("sound99")? yes :no}
${XR1}${XOP} ${prefix}sound100 ${feat("sound100")? yes :no}
${XR2}${XOP} ${prefix}sound101 ${feat("sound101")? yes :no}
${XR1}${XOP} ${prefix}sound102 ${feat("sound102")? yes :no}
${XR2}${XOP} ${prefix}sound103 ${feat("sound103")? yes :no}
${XR1}${XOP} ${prefix}sound104 ${feat("sound104")? yes :no}
${XR2}${XOP} ${prefix}sound105 ${feat("sound105")? yes :no}
${XR1}${XOP} ${prefix}sound106 ${feat("sound106")? yes :no}
${XR2}${XOP} ${prefix}sound107 ${feat("sound107")? yes :no}
${XR1}${XOP} ${prefix}sound108 ${feat("sound108")? yes :no}
${XR2}${XOP} ${prefix}sound109 ${feat("sound109")? yes :no}
${XR1}${XOP} ${prefix}sound110 ${feat("sound110")? yes :no}
${XR2}${XOP} ${prefix}sound111 ${feat("sound111")? yes :no}
${XR1}${XOP} ${prefix}sound112 ${feat("sound112")? yes :no}
${XR2}${XOP} ${prefix}sound113 ${feat("sound113")? yes :no}
${XR1}${XOP} ${prefix}sound114 ${feat("sound114")? yes :no}
${XR2}${XOP} ${prefix}sound115 ${feat("sound115")? yes :no}
${XR1}${XOP} ${prefix}sound116 ${feat("sound116")? yes :no}
${XR2}${XOP} ${prefix}sound117 ${feat("sound117")? yes :no}
${XR1}${XOP} ${prefix}sound118 ${feat("sound118")? yes :no}
${XR2}${XOP} ${prefix}sound119 ${feat("sound119")? yes :no}
${XR1}${XOP} ${prefix}sound120 ${feat("sound120")? yes :no}
${XR2}${XOP} ${prefix}sound121 ${feat("sound121")? yes :no}
${XR1}${XOP} ${prefix}sound122 ${feat("sound122")? yes :no}
${XR2}${XOP} ${prefix}sound123 ${feat("sound123")? yes :no}
${XR1}${XOP} ${prefix}sound124 ${feat("sound124")? yes :no}
${XR2}${XOP} ${prefix}sound125 ${feat("sound125")? yes :no}
${XR1}${XOP} ${prefix}sound126 ${feat("sound126")? yes :no}
${XR2}${XOP} ${prefix}sound127 ${feat("sound127")? yes :no}
${XR1}${XOP} ${prefix}sound128 ${feat("sound128")? yes :no}
${XR2}${XOP} ${prefix}sound129 ${feat("sound129")? yes :no}
${XR1}${XOP} ${prefix}sound130 ${feat("sound130")? yes :no}
${XR2}${XOP} ${prefix}sound131 ${feat("sound131")? yes :no}
${XR1}${XOP} ${prefix}sound132 ${feat("sound132")? yes :no}
${XR2}${XOP} ${prefix}sound133 ${feat("sound133")? yes :no}
${XR1}${XOP} ${prefix}sound134 ${feat("sound134")? yes :no}
${XR2}${XOP} ${prefix}sound135 ${feat("sound135")? yes :no}
${XR1}${XOP} ${prefix}sound136 ${feat("sound136")? yes :no}
${XR2}${XOP} ${prefix}sound137 ${feat("sound137")? yes :no}
${XR1}${XOP} ${prefix}sound138 ${feat("sound138")? yes :no}
${XR2}${XOP} ${prefix}sound139 ${feat("sound139")? yes :no}
${XR1}${XOP} ${prefix}sound140 ${feat("sound140")? yes :no}
${XR2}${XOP} ${prefix}sound141 ${feat("sound141")? yes :no}
${XR1}${XOP} ${prefix}sound142 ${feat("sound142")? yes :no}
${XR2}${XOP} ${prefix}sound143 ${feat("sound143")? yes :no}
${XR1}${XOP} ${prefix}sound144 ${feat("sound144")? yes :no}
${XR2}${XOP} ${prefix}sound145 ${feat("sound145")? yes :no}
${XR1}${XOP} ${prefix}sound146 ${feat("sound146")? yes :no}
${XR2}${XOP} ${prefix}sound147 ${feat("sound147")? yes :no}
${XR1}${XOP} ${prefix}sound148 ${feat("sound148")? yes :no}
${XR2}${XOP} ${prefix}sound149 ${feat("sound149")? yes :no}
${XR1}${XOP} ${prefix}sound150 ${feat("sound150")? yes :no}
${XR2}${XOP} ${prefix}sound151 ${feat("sound151")? yes :no}
${XR1}${XOP} ${prefix}sound152 ${feat("sound152")? yes :no}
${XR2}${XOP} ${prefix}sound153 ${feat("sound153")? yes :no}
${XR1}${XOP} ${prefix}sound154 ${feat("sound154")? yes :no}
${XR2}${XOP} ${prefix}sound155 ${feat("sound155")? yes :no}
${XR1}${XOP} ${prefix}sound156 ${feat("sound156")? yes :no}
${XR2}${XOP} ${prefix}sound157 ${feat("sound157")? yes :no}
${XR1}${XOP} ${prefix}sound158 ${feat("sound158")? yes :no}
${XR2}${XOP} ${prefix}sound159 ${feat("sound159")? yes :no}
${XR1}${XOP} ${prefix}sound160 ${feat("sound160")? yes :no}
${XR2}${XOP} ${prefix}sound161 ${feat("sound161")? yes :no}
${XR1}${XB2}
${XM3}${XBC}
    
${XM1} ${XP1} TEXT PRO ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}blackping ${feat("blackping")? yes :no}
${XR1}${XOP} ${prefix}glitch ${feat("glitch")? yes :no}
${XR2}${XOP} ${prefix}glitch2 ${feat("glitch2")? yes :no}
${XR1}${XOP} ${prefix}glitch3 ${feat("glitch3")? yes :no}
${XR2}${XOP} ${prefix}lion ${feat("lion")? yes :no}  
${XR1}${XOP} ${prefix}3dneon ${feat("3dneon")? yes :no}
${XR2}${XOP} ${prefix}3dspace ${feat("3dspace")? yes :no}
${XR1}${XOP} ${prefix}neon ${feat("neon")? yes :no}
${XR2}${XOP} ${prefix}greenneon ${feat("greenneon")? yes :no}
${XR1}${XOP} ${prefix}bokeh ${feat("bokeh")? yes :no}
${XR2}${XOP} ${prefix}hollographic ${feat("hollographic")? yes :no}
${XR1}${XOP} ${prefix}bear ${feat("bear")? yes :no}
${XR2}${XOP} ${prefix}wolf ${feat("wolf")? yes :no}
${XR1}${XOP} ${prefix}joker ${feat("joker")? yes :no}
${XR2}${XOP} ${prefix}dropwater ${feat("dropwater")? yes :no}
${XR1}${XOP} ${prefix}neonlight ${feat("neonlight")? yes :no}
${XR2}${XOP} ${prefix}thewall ${feat("thewall")? yes :no}
${XR1}${XOP} ${prefix}natural ${feat("natural")? yes :no}
${XR2}${XOP} ${prefix}carbon ${feat("carbon")? yes :no}
${XR1}${XOP} ${prefix}pencil ${feat("pencil")? yes :no}
${XR2}${XOP} ${prefix}luxury ${feat("luxury")? yes :no}
${XR1}${XOP} ${prefix}whitegold ${feat("whitegold")? yes :no}
${XR2}${XOP} ${prefix}lightglow ${feat("lightglow")? yes :no}
${XR1}${XOP} ${prefix}arcane ${feat("arcane")? yes :no}
${XR2}${XOP} ${prefix}neonlight ${feat("neonlight")? yes :no}
${XR1}${XOP} ${prefix}valentine ${feat("valentine")? yes :no}
${XR2}${XOP} ${prefix}glowingneon ${feat("glowingneon")? yes :no}
${XR1}${XOP} ${prefix}colorled ${feat("colorled")? yes :no}
${XR2}${XOP} ${prefix}3dretro ${feat("3dretro")? yes :no}
${XR1}${XB2}
${XM3}${XBC}
  
${XM1} ${XP1} IMAGE MAKER ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}wanted ${feat("wanted")? yes :no}
${XR1}${XOP} ${prefix}utatoo ${feat("utatoo")? yes :no}
${XR2}${XOP} ${prefix}unsharpen ${feat("unsharpen")? yes :no}
${XR1}${XOP} ${prefix}thanos ${feat("thanos")? yes :no}
${XR2}${XOP} ${prefix}sniper ${feat("sniper")? yes :no}
${XR1}${XOP} ${prefix}sharpen ${feat("sharpen")? yes :no}
${XR2}${XOP} ${prefix}sepia ${feat("sepia")? yes :no}
${XR1}${XOP} ${prefix}scary ${feat("scary")? yes :no}
${XR2}${XOP} ${prefix}rip ${feat("rip")? yes :no}
${XR1}${XOP} ${prefix}redple ${feat("redple")? yes :no}
${XR2}${XOP} ${prefix}rejected ${feat("rejected")? yes :no}
${XR1}${XOP} ${prefix}posterize ${feat("posterize")? yes :no}
${XR2}${XOP} ${prefix}ps4 ${feat("ps4")? yes :no}
${XR1}${XOP} ${prefix}pixelize ${feat("pixelize")? yes :no}
${XR2}${XOP} ${prefix}missionpassed ${feat("missionpassed")? yes :no}
${XR1}${XOP} ${prefix}moustache ${feat("moustache")? yes :no}
${XR2}${XOP} ${prefix}lookwhatkarenhave ${feat("lookwhatkarenhave")? yes :no}
${XR1}${XOP} ${prefix}jail ${feat("jail")? yes :no}
${XR2}${XOP} ${prefix}invert ${feat("invert")? yes :no}
${XR1}${XOP} ${prefix}greyscale ${feat("greyscale")? yes :no}
${XR2}${XOP} ${prefix}glitch ${feat("glitch")? yes :no}
${XR1}${XOP} ${prefix}gay ${feat("gay")? yes :no}
${XR2}${XOP} ${prefix}frame ${feat("frame")? yes :no}
${XR1}${XOP} ${prefix}fire ${feat("fire")? yes :no}
${XR2}${XOP} ${prefix}distort ${feat("distort")? yes :no}
${XR1}${XOP} ${prefix}dictator ${feat("dictator")? yes :no}
${XR2}${XOP} ${prefix}deepfry ${feat("deepfry")? yes :no}
${XR1}${XOP} ${prefix}ddungeon ${feat("ddungeon")? yes :no}
${XR2}${XOP} ${prefix}circle ${feat("circle")? yes :no}
${XR1}${XOP} ${prefix}challenger ${feat("challenger")? yes :no}
${XR2}${XOP} ${prefix}burn ${feat("burn")? yes :no}
${XR1}${XOP} ${prefix}brazzers ${feat("beautiful")? yes :no}
${XR2}${XOP} ${prefix}beautiful ${feat("beautiful")? yes :no}
${XR1}${XOP} ${prefix}approved ${feat("approved")? yes :no}
${XR2}${XOP} ${prefix}3000years ${feat("3000years")? yes :no}
${XR1}${XB2}
${XM3}${XBC}

${XM1} ${XP1} CERPEN MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}cerpen-anak ${feat("cerpen-anak")? yes :no}
${XR1}${XOP} ${prefix}cerpen-bahasadaerah ${feat("cerpen-bahasadaerah")? yes :no}
${XR2}${XOP} ${prefix}cerpen-bahasainggris ${feat("cerpen-bahasainggris")? yes :no}
${XR1}${XOP} ${prefix}cerpen-bahasajawa ${feat("cerpen-bahasajawa")? yes :no}
${XR2}${XOP} ${prefix}cerpen-bahasasunda ${feat("cerpen-bahasasunda")? yes :no}
${XR1}${XOP} ${prefix}cerpen-budaya ${feat("cerpen-budaya")? yes :no}
${XR2}${XOP} ${prefix}cerpen-cinta ${feat("cerpen-cinta")? yes :no}
${XR1}${XOP} ${prefix}cerpen-cintaislami ${feat("cerpen-cintaislami")? yes :no}
${XR2}${XOP} ${prefix}cerpen-cintapertama ${feat("cerpen-cintapertama")? yes :no}
${XR1}${XOP} ${prefix}cerpen-cintaromantis ${feat("cerpen-cintaromantis")? yes :no}
${XR2}${XOP} ${prefix}cerpen-cintasedih ${feat("cerpen-cintasedih")? yes :no}
${XR1}${XOP} ${prefix}cerpen-cintasegitiga ${feat("cerpen-cintasegitiga")? yes :no}
${XR2}${XOP} ${prefix}cerpen-cintasejati ${feat("cerpen-cintasejati")? yes :no}
${XR1}${XOP} ${prefix}cerpen-galau ${feat("cerpen-galau")? yes :no}
${XR2}${XOP} ${prefix}cerpen-gokil ${feat("cerpen-gokil")? yes :no}
${XR1}${XOP} ${prefix}cerpen-inspiratif ${feat("cerpen-inspiratif")? yes :no}
${XR2}${XOP} ${prefix}cerpen-jepang ${feat("cerpen-jepang")? yes :no}
${XR1}${XOP} ${prefix}cerpen-kehidupan ${feat("cerpen-kehidupan")? yes :no}
${XR2}${XOP} ${prefix}cerpen-keluarga ${feat("cerpen-keluarga")? yes :no}
${XR1}${XOP} ${prefix}cerpen-kisahnyata ${feat("cerpen-kisahnyata")? yes :no}
${XR2}${XOP} ${prefix}cerpen-korea ${feat("cerpen-korea")? yes :no}
${XR1}${XOP} ${prefix}cerpen-kristen ${feat("cerpen-kristen")? yes :no}
${XR2}${XOP} ${prefix}cerpen-liburan ${feat("cerpen-liburan")? yes :no}
${XR1}${XOP} ${prefix}cerpen-malaysia ${feat("cerpen-malaysia")? yes :no}
${XR2}${XOP} ${prefix}cerpen-mengharukan ${feat("cerpen-mengharukan")? yes :no}
${XR1}${XOP} ${prefix}cerpen-misteri ${feat("cerpen-misteri")? yes :no}
${XR2}${XOP} ${prefix}cerpen-motivasi ${feat("cerpen-motivasi")? yes :no}
${XR1}${XOP} ${prefix}cerpen-nasihat ${feat("cerpen-nasihat")? yes :no}
${XR2}${XOP} ${prefix}cerpen-nasionalisme ${feat("cerpen-nasionalisme")? yes :no}
${XR1}${XOP} ${prefix}cerpen-olahraga ${feat("cerpen-olahraga")? yes :no}
${XR2}${XOP} ${prefix}cerpen-patahhati ${feat("cerpen-patahhati")? yes :no}
${XR1}${XOP} ${prefix}cerpen-penantian ${feat("cerpen-penantian")? yes :no}
${XR2}${XOP} ${prefix}cerpen-pendidikan ${feat("cerpen-pendidikan")? yes :no}
${XR1}${XOP} ${prefix}cerpen-pengalaman ${feat("cerpen-pengalaman")? yes :no}
${XR2}${XOP} ${prefix}cerpen-pengorbanan ${feat("cerpen-pengorbanan")? yes :no}
${XR1}${XOP} ${prefix}cerpen-penyesalan ${feat("cerpen-penyesalan")? yes :no}
${XR2}${XOP} ${prefix}cerpen-perjuangan ${feat("cerpen-perjuangan")? yes :no}
${XR1}${XOP} ${prefix}cerpen-perpisahan ${feat("cerpen-perpisahan")? yes :no}
${XR2}${XOP} ${prefix}cerpen-persahabatan ${feat("cerpen-persahabatan")? yes :no}
${XR1}${XOP} ${prefix}cerpen-petualangan ${feat("cerpen-petualangan")? yes :no}
${XR2}${XOP} ${prefix}cerpen-ramadhan ${feat("cerpen-ramadhan")? yes :no}
${XR1}${XOP} ${prefix}cerpen-remaja ${feat("cerpen-remaja")? yes :no}
${XR2}${XOP} ${prefix}cerpen-rindu ${feat("cerpen-rindu")? yes :no}
${XR1}${XOP} ${prefix}cerpen-rohani ${feat("cerpen-rohani")? yes :no}
${XR2}${XOP} ${prefix}cerpen-romantis ${feat("cerpen-romantis")? yes :no}
${XR1}${XOP} ${prefix}cerpen-sastra ${feat("cerpen-sastra")? yes :no}
${XR2}${XOP} ${prefix}cerpen-sedih ${feat("cerpen-sedih")? yes :no}
${XR1}${XOP} ${prefix}cerpen-sejarah ${feat("cerpen-sejarah")? yes :no}
${XR2}${XB2}
${XM3}${XBC}
  
${XM1} ${XP1} SEARCH MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}scsearch ${feat("scsearch")? yes :no}
${XR1}${XOP} ${prefix}ghstalk ${feat("ghstalk")? yes :no}
${XR2}${XOP} ${prefix}lirik ${feat("lirik")? yes :no}
${XR1}${XOP} ${prefix}grupwa ${feat("grupwa")? yes :no}
${XR2}${XOP} ${prefix}yts ${feat("yts")? yes :no}
${XR1}${XOP} ${prefix}whatmusic ${feat("whatmusic")? yes :no}
${XR2}${XOP} ${prefix}whatanime ${feat("whatanime")? yes :no}
${XR1}${XOP} ${prefix}google ${feat("google")? yes :no}
${XR2}${XOP} ${prefix}kbbi ${feat("kbbi")? yes :no}
${XR1}${XOP} ${prefix}weather ${feat("weather")? yes :no}
${XR2}${XOP} ${prefix}kodepos ${feat("kodepos")? yes :no}
${XR1}${XOP} ${prefix}kodebahasa ${feat("kodebahasa")? yes :no}
${XR2}${XOP} ${prefix}brainly ${feat("brainly")? yes :no}
${XR1}${XOP} ${prefix}wallpaper ${feat("wallpaper")? yes :no}
${XR2}${XB2}
${XM3}${XBC}
  
${XM1} ${XP1} SHORT URL ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}tinyurl ${feat("tinyurl")? yes :no}
${XR1}${XOP} ${prefix}bitly ${feat("bitly")? yes :no}
${XR2}${XOP} ${prefix}tourl ${feat("tourl")? yes :no}
${XR1}${XB2}
${XM3}${XBC}

${XM1} ${XP1} STORAGE ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}adderror ${feat("adderror")? yes :no}
${XR1}${XOP} ${prefix}addstik ${feat("addstik")? yes :no}
${XR2}${XOP} ${prefix}addvn ${feat("addvn")? yes :no}
${XR1}${XOP} ${prefix}addowner ${feat("addowner")? yes :no}
${XR2}${XOP} ${prefix}addprem ${feat("addprem")? yes :no}
${XR1}${XOP} ${prefix}delprem ${feat("delprem")? yes :no}
${XR2}${XOP} ${prefix}delerror ${feat("delerror")? yes :no}
${XR1}${XOP} ${prefix}delvn ${feat("delvn")? yes :no}
${XR2}${XOP} ${prefix}delowner ${feat("delowner")? yes :no}
${XR1}${XOP} ${prefix}delstik ${feat("delstik")? yes :no}
${XR2}${XOP} ${prefix}delvn ${feat("delvn")? yes :no}
${XR1}${XOP} ${prefix}listerror ${feat("listerror")? yes :no}
${XR2}${XOP} ${prefix}liststik ${feat("liststik")? yes :no}   
${XR1}${XOP} ${prefix}listvn ${feat("listvn")? yes :no}
${XR2}${XOP} ${prefix}listowner ${feat("listowner")? yes :no}
${XR1}${XOP} ${prefix}listprem ${feat("listprem")? yes :no}
${XR2}${XOP} ${prefix}clearallprem ${feat("clearallprem")? yes :no}
${XR1}${XOP} ${prefix}listban ${feat("listban")? yes :no}   
${XR2}${XOP} ${prefix}listblockcmd ${feat("listblockcmd")? yes :no}
${XR1}${XOP} ${prefix}clearallerror ${feat("clearallerror")? yes :no}
${XR2}${XOP} ${prefix}clearallban ${feat("clearallban")? yes :no}
${XR1}${XOP} ${prefix}clearallblock ${feat("clearallblock")? yes :no}
${XR2}${XOP} ${prefix}clearallUser ${feat("clearallUser")? yes :no}
${XR1}${XOP} ${prefix}clearallowner ${feat("clearallowner")? yes :no}
${XR2}${XB2}
${XM3}${XBC}
   
${XM1} ${XP1} ISLAMI MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}hadis ${feat("clearallUser")? yes :no}
${XR1}${XOP} ${prefix}alquran ${feat("clearallUser")? yes :no}
${XR2}${XOP} ${prefix}tafsirsurah ${feat("clearallUser")? yes :no}
${XR1}${XB2}
${XM3}${XBC}
   
${XM1} ${XP1} GAME MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}math ${feat("math")? yes :no}
${XR1}${XOP} ${prefix}asahotak ${feat("asahotak")? yes :no}
${XR2}${XOP} ${prefix}tebakkalimat ${feat("tebakkalimat")? yes :no}
${XR1}${XOP} ${prefix}susunkata ${feat("susunkata")? yes :no}
${XR2}${XOP} ${prefix}caklontong ${feat("caklontong")? yes :no}
${XR1}${XOP} ${prefix}tebakanime ${feat("tebakanime")? yes :no}
${XR2}${XOP} ${prefix}tebakbendera ${feat("tebakbendera")? yes :no}
${XR1}${XOP} ${prefix}tebakkimia ${feat("tebakkimia")? yes :no}
${XR2}${XOP} ${prefix}tekateki ${feat("tekateki")? yes :no}
${XR1}${XOP} ${prefix}tebakkabupaten ${feat("tebakkabupaten")? yes :no}
${XR2}${XB2}
${XM3}${XBC}
   
${XM1} ${XP1} RPG MENU ${XP2} ${XM2}${XBC}
${XR1}
${XR2}${XOP} ${prefix}berburu ${feat("berburu")? yes :no}
${XR1}${XOP} ${prefix}mining ${feat("mining")? yes :no}
${XR2}${XOP} ${prefix}leaderboard ${feat("leaderboard")? yes :no}
${XR1}${XOP} ${prefix}heal ${feat("heal")? yes :no}
${XR2}${XOP} ${prefix}inventori ${feat("inventori")? yes :no}
${XR1}${XOP} ${prefix}mancing ${feat("mancing")? yes :no}
${XR2}${XOP} ${prefix}darah ${feat("darah")? yes :no}
${XR1}${XOP} ${prefix}buy ${feat("buy")? yes :no}
${XR2}${XB2}
${XM3}${XBC}
   
${XM1} ${XP1} BUG MENU ${XP2} ${XM2}${XBC}
${XR1}${XB1}
${XR2}${XOP} ${prefix}spambugv1 ${feat("spambugv1")? yes :no}
${XR1}${XOP} ${prefix}spambugv2 ${feat("spambugv2")? yes :no}
${XR1}${XOP} ${prefix}spambugv3 ${feat("spambugv3")? yes :no}
${XR1}${XOP} ${prefix}sendbugv1 ${feat("sendbugv1")? yes :no}
${XR2}${XOP} ${prefix}sendbugv2 ${feat("sendbugv2")? yes :no}
${XR1}${XOP} ${prefix}sendbugv3 ${feat("sendbugv3")? yes :no}
${XR2}${XOP} ${prefix}sendbugv4 ${feat("sendbugv4")? yes :no}
${XR1}${XOP} ${prefix}sendbugv5 ${feat("sendbugv5")? yes :no}
${XR2}${XOP} ${prefix}bugv1 ${feat("bugv1")? yes :no}
${XR1}${XOP} ${prefix}bugv2 ${feat("bugv2")? yes :no}
${XR2}${XOP} ${prefix}bugv3 ${feat("bugv3")? yes :no}
${XR1}${XOP} ${prefix}bugv4 ${feat("bugv4")? yes :no}
${XR2}${XOP} ${prefix}bugv5 ${feat("bugv5")? yes :no}
${XR1}${XOP} ${prefix}bugv6 ${feat("bugv6")? yes :no}
${XR2}${XOP} ${prefix}bugv7 ${feat("bugv7")? yes :no}
${XR1}${XOP} ${prefix}bugv8 ${feat("bugv8")? yes :no}
${XR2}${XOP} ${prefix}bugv9 ${feat("bugv9")? yes :no}
${XR1}${XOP} ${prefix}bugv10 ${feat("bugv10")? yes :no}
${XR2}${XOP} ${prefix}bugv11 ${feat("bugv11")? yes :no}
${XR1}${XOP} ${prefix}bugv12 ${feat("bugv12")? yes :no}
${XR2}${XOP} ${prefix}bugv13 ${feat("bugv13")? yes :no}
${XR1}${XOP} ${prefix}bugv14 ${feat("bugv14")? yes :no}
${XR2}${XOP} ${prefix}bugv15 ${feat("bugv15")? yes :no}
${XR1}${XOP} ${prefix}bugv16 ${feat("bugv16")? yes :no}
${XR2}${XOP} ${prefix}buggifv1 ${feat("buggifv1")? yes :no}
${XR1}${XOP} ${prefix}buggifv2 ${feat("buggifv2")? yes :no}
${XR2}${XOP} ${prefix}buggifv3 ${feat("buggifv3")? yes :no}
${XR1}${XOP} ${prefix}buggifv4 ${feat("buggifv4")? yes :no}
${XR2}${XOP} ${prefix}buggifv5 ${feat("buggifv5")? yes :no}
${XR1}${XOP} ${prefix}virgamv1 ${feat("virgamv1")? yes :no}
${XR2}${XOP} ${prefix}virgamv2 ${feat("virgamv2")? yes :no}
${XR1}${XOP} ${prefix}virgamv3 ${feat("virgamv3")? yes :no}
${XR2}${XOP} ${prefix}virgamv4 ${feat("virgamv4")? yes :no}
${XR1}${XOP} ${prefix}virgamv5 ${feat("virgamv5")? yes :no}   
${XR2}${XOP} ${prefix}bugvnv1 ${feat("bugvnv1")? yes :no}
${XR1}${XOP} ${prefix}bugvnv2 ${feat("bugvnv2")? yes :no}
${XR2}${XOP} ${prefix}bugvnv3 ${feat("bugvnv3")? yes :no}
${XR1}${XOP} ${prefix}bugvnv4 ${feat("bugvnv4")? yes :no}
${XR2}${XOP} ${prefix}bugvnv5 ${feat("bugvnv5")? yes :no}
${XR1}${XOP} ${prefix}bugstickv1 ${feat("bugstickv1")? yes :no}
${XR2}${XOP} ${prefix}bugstickv2 ${feat("bugstickv2")? yes :no}
${XR1}${XOP} ${prefix}bugstickv3 ${feat("bugstickv3")? yes :no}
${XR2}${XOP} ${prefix}bugstickv4 ${feat("bugstickv4")? yes :no}
${XR1}${XOP} ${prefix}bugstickv5 ${feat("bugstickv5")? yes :no}
${XR2}${XOP} ${prefix}bugkatalogv1 ${feat("bugkatalogv1")? yes :no}
${XR1}${XOP} ${prefix}bugkatalogv2 ${feat("bugkatalogv2")? yes :no}
${XR2}${XOP} ${prefix}bugkatalogv3 ${feat("bugkatalogv3")? yes :no}
${XR1}${XOP} ${prefix}bugkatalogv4 ${feat("bugkatalogv4")? yes :no}
${XR2}${XOP} ${prefix}bugvk ${feat("bugvk")? yes :no}
${XR1}${XOP} ${prefix}bugzip ${feat("bugzip")? yes :no}
${XR2}${XOP} ${prefix}buggas ${feat("buggas")? yes :no}
${XR1}${XOP} ${prefix}bugpdf ${feat("bugpdf")? yes :no}
${XR2}${XOP} ${prefix}bugxlsx ${feat("bugxlsx")? yes :no}
${XR1}${XOP} ${prefix}bugpptx ${feat("bugpptx")? yes :no}
${XR2}${XOP} ${prefix}bugdocx ${feat("bugdocx")? yes :no}
${XR1}${XOP} ${prefix}bugsilver ${feat("bugsilver")? yes :no}
${XR2}${XOP} ${prefix}bugcleitin ${feat("bugcleitin")? yes :no}
${XR1}${XOP} ${prefix}bugsunshine ${feat("bugsunshine")? yes :no}
${XR2}${XOP} ${prefix}bugmamaco ${feat("bugmamaco")? yes :no}
${XR1}${XOP} ${prefix}bugvideov1 ${feat("bugvideov1")? yes :no}
${XR2}${XOP} ${prefix}bugvideov2 ${feat("bugvideov2")? yes :no}
${XR1}${XOP} ${prefix}bugvideov3 ${feat("bugvideov3")? yes :no}
${XR2}${XOP} ${prefix}bugvideov4 ${feat("bugvideov4")? yes :no}
${XR1}${XOP} ${prefix}bugvideov5 ${feat("bugvideov5")? yes :no}
${XR2}${XOP} ${prefix}bugbuttonv1 ${feat("bugbuttonv1")? yes :no}
${XR1}${XOP} ${prefix}bugbuttonv2 ${feat("bugbuttonv2")? yes :no}
${XR2}${XOP} ${prefix}bugbuttonv3 ${feat("bugbuttonv3")? yes :no}
${XR1}${XOP} ${prefix}jadibugstick ${feat("jadibugstick")? yes :no}
${XR2}${XOP} ${prefix}bugpc ${feat("bugpc")? yes :no}
${XR1}${XOP} ${prefix}buggc ${feat("buggc")? yes :no}
${XR2}${XOP} ${prefix}bugfc ${feat("bugfc")? yes :no}
${XR2}${XB2}
${XM3}${XBC}
   
┏━━⬣  Thanks To 〽️
┃
┃ 🔥 Irfan Hariyanto
┃ 🔥 AtakBotz
┃ 🔥 Dittaz
┃ 🔥 Nina Kawai
┃ 🔥 Resta Gamteng :v
┃ 🔥 Zeeone Ofc
┃ 🔥 Yudha Perdana
┃ 🔥 Yogi PW
┃ 🔥 Decode Denpa
┃ 🔥 Fernazer
┃ 🔥 X - Dev Team
┃ 🔥 XChillDs & Yuzu
┃ 🔥 Dika Ardnt
┃
┗━━⬣  ⿻ *Powered by Nodejs* ⿻️`
}
  


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
