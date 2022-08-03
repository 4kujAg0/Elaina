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



var XM1 = '┌──'
var XM2 = '└────────────'
var XP1 = '「'
var XP2 = '」'
var XBC = '⭓'
var XOP = '⭔'
var XTC = '│'

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



exports.menu2 =  (senderNumber, user, thisHit, publik, sender, prefix, isDevoloper, pushname) => {
return `╭─⭓「 ${botName} - MD Beta 」
│• Nama : ${pushname} 
│• Status : ${isDevoloper ? '🎫 Premium':'User'}
│• Prefix : 「 ${prefix} 」
│• Library : *Baileys-MD*.
│• Mode : ${publik ? "Public" : "Self"}
│• Total Feature : ${totalFitur()}
│• Total Error : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/listerror.json')).length}
│• Total User : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/user.json')).length.toLocaleString()}
│• User Banned : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/banned.json')).length}
│• User Blocked : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/userblocked.json')).length.toLocaleString()}
│• Cmd Blocked : ${JSON.parse(fs.readFileSync('./ACTION/STORAGE/X-DATA/blockcmd.json')).length} 
├───⭓「 Waktu 」
│ ⫹⫺ Runtime : ${kyun(process.uptime())}
│ ⫹⫺ Time : ${timeWib} WIB 
│ ⫹⫺ Time : ${timeWit} WIT 
│ ⫹⫺ Time : ${timeWita} WITA
│ ⫹⫺ Day : ${week}, ${calender}
│ ⫹⫺ Islamic : ${dateIslamic}
│ ⫹⫺ Hit Today : ${thisHit.toLocaleString()} 
╰──────⭓`
 }

exports.fitur2 = (prefix) => {
return`${XM1}${XBC}${XP1} OWNER MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}join✓ ${feat("join")? yes :no}
${XTC}${XOP} ${prefix}bc✓ ${feat("bc")? yes :no}
${XTC}${XOP} ${prefix}bcgc✓ ${feat("bcgc")? yes :no}   
${XTC}${XOP} ${prefix}getcaze✓ ${feat("getcaze")? yes :no}
${XTC}${XOP} ${prefix}getsesi✓ ${feat("getsesi")? yes :no} 
${XTC}${XOP} ${prefix}leave✓ ${feat("leave")? yes :no} 
${XTC}${XOP} ${prefix}block✓ ${feat("block")? yes :no}
${XTC}${XOP} ${prefix}unblock✓ ${feat("unblock")? yes :no}
${XTC}${XOP} ${prefix}blockcmd✓ ${feat("blockcmd")? yes :no}   
${XTC}${XOP} ${prefix}unblockcmd✓ ${feat("unblockcmd")? yes :no} 
${XTC}${XOP} ${prefix}autolevel✓ ${feat("autolevel")? yes :no} 
${XTC}${XOP} ${prefix}autorespon✓ ${feat("autorespon")? yes :no} 
${XTC}${XOP} ${prefix}autosticker✓ ${feat("autosticker")? yes :no}   
${XTC}${XOP} ${prefix}autovn✓ ${feat("autovn")? yes :no}               
${XTC}${XOP} ${prefix}addlimit✓ ${feat("addlimit")? yes :no}
${XTC}${XOP} ${prefix}culik✓ ${feat("culik")? yes :no}
${XTC}${XOP} ${prefix}shutdown✓ ${feat("shutdown")? yes :no}
${XTC}${XOP} ${prefix}restart✓ ${feat("restart")? yes :no}
${XTC}${XOP} ${prefix}setprefix✓ ${feat("setprefix")? yes :no}
${XTC}${XOP} ${prefix}setmenu✓ ${feat("setmenu")? yes :no}
${XTC}${XOP} ${prefix}settextmenu✓ ${feat("settextmenu")? yes :no}
${XTC}${XOP} ${prefix}settextfitur✓ ${feat("settextfitur")? yes :no}
${XTC}${XOP} ${prefix}setreply✓ ${feat("setreply")? yes :no}
${XTC}${XOP} ${prefix}setquoted✓ ${feat("setquoted")? yes :no}
${XTC}${XOP} ${prefix}setnamebot✓ ${feat("setnamebot")? yes :no}
${XTC}${XOP} ${prefix}setppbot✓ ${feat("setppbot")? yes :no}
${XTC}${XOP} ${prefix}setbio✓ ${feat("setbio")? yes :no}
${XTC}${XOP} ${prefix}setgif✓ ${feat("setgif")? yes :no}
${XTC}${XOP} ${prefix}setexif✓ ${feat("setexif")? yes :no}
${XTC}${XOP} ${prefix}console✓ ${feat("console")? yes :no}
${XTC}${XOP} ${prefix}public✓ ${feat("public")? yes :no}
${XTC}${XOP} ${prefix}self✓ ${feat("self")? yes :no}
${XTC}${XOP} ${prefix}setwelcome✓ ${feat("setwelcome")? yes :no}
${XTC}${XOP} ${prefix}setwelcomeintro✓ ${feat("setwelcomeintro")? yes :no}
${XTC}${XOP} ${prefix}setwelcomeout✓ ${feat("setwelcomeout")? yes :no}
${XTC}${XOP} ${prefix}setfake✓ ${feat("setfake")? yes :no}
${XTC}${XOP} ${prefix}setnamaowner✓ ${feat("setnamaowner")? yes :no}
${XTC}${XOP} ${prefix}settextreply✓ ${feat("settextreply")? yes :no}
${XTC}${XOP} ${prefix}setnamabot✓ ${feat("setnamabot")? yes :no}
${XTC}${XOP} ${prefix}setdocument✓ ${feat("setdocument")? yes :no}
${XTC}${XOP} ${prefix}setnomerowner✓ ${feat("setnomerowne")? yes :no}
${XTC}${XOP} ${prefix}orquoted✓ ${feat("orquoted")? yes :no}
${XTC}${XOP} ${prefix}autobutton✓ ${feat("autobutton")? yes :no}
${XTC}
${XM2}${XBC}
   
${XM1}${XBC}${XP1} GROUP MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}antilink✓ ${feat("antilink")? yes :no}
${XTC}${XOP} ${prefix}antilinkgc✓ ${feat("antilinkgc")? yes :no}
${XTC}${XOP} ${prefix}antivirtex✓ ${feat("antivirtex")? yes :no}
${XTC}${XOP} ${prefix}antiasing✓ ${feat("antiasing")? yes :no}
${XTC}${XOP} ${prefix}infogc✓ ${feat("infogx")? yes :no}
${XTC}${XOP} ${prefix}linkgc✓ ${feat("linkgc")? yes :no}
${XTC}${XOP} ${prefix}setppgc✓ ${feat("setppgc")? yes :no}
${XTC}${XOP} ${prefix}setnamegc✓ ${feat("setnamegc")? yes :no}
${XTC}${XOP} ${prefix}setdesc✓ ${feat("setdesc")? yes :no}
${XTC}${XOP} ${prefix}gc ${feat("gc")? yes :no}
${XTC}${XOP} ${prefix}revoke✓ ${feat("revoke")? yes :no}
${XTC}${XOP} ${prefix}hidetag✓ ${feat("hidetag")? yes :no}
${XTC}${XOP} ${prefix}tagall✓ ${feat("tagall")? yes :no}
${XTC}${XOP} ${prefix}kick✓ ${feat("kick")? yes :no}
${XTC}${XOP} ${prefix}add✓ ${feat("add")? yes :no}
${XTC}${XOP} ${prefix}opentime✓ ${feat("opentime")? yes :no}
${XTC}${XOP} ${prefix}closetime✓ ${feat("closetime")? yes :no}
${XTC}${XOP} ${prefix}demote✓ ${feat("demote")? yes :no}
${XTC}${XOP} ${prefix}promote✓ ${feat("promote")? yes :no}
${XTC}${XOP} ${prefix}kickme✓ ${feat("kickme")? yes :no}
${XTC}${XOP} ${prefix}banchat✓ ${feat("banchat")? yes :no}
${XTC}${XOP} ${prefix}unbanchat✓ ${feat("unbanchat")? yes :no}
${XTC}${XOP} ${prefix}ban✓ ${feat("ban")? yes :no}
${XTC}${XOP} ${prefix}unban✓ ${feat("unban")? yes :no}  
${XTC}${XOP} ${prefix}getppgc✓ ${feat("getppgc")? yes :no}
${XTC}${XOP} ${prefix}getpp✓ ${feat("getpp")? yes :no}
${XTC}${XOP} ${prefix}listonline✓ ${feat("lostoneline")? yes :no}
${XTC}${XOP} ${prefix}getname✓ ${feat("getname")? yes :no}
${XTC}${XOP} ${prefix}antihidetag✓ ${feat("antihidetag")? yes :no}
${XTC}
${XM2}${XBC}

${XM1}${XBC}${XP1} MAIN MENU ${XP2}
${XTC}  
${XTC}${XOP} ${prefix}menu✓ ${feat("menu")? yes :no}
${XTC}${XOP} ${prefix}del✓ ${feat("del")? yes :no}
${XTC}${XOP} ${prefix}react✓ ${feat("react")? yes :no}   
${XTC}${XOP} ${prefix}info✓ ${feat("info")? yes :no}
${XTC}${XOP} ${prefix}dashboard✓ ${feat("dashboard")? yes :no}
${XTC}${XOP} ${prefix}sewa✓ ${feat("sewa")? yes :no}
${XTC}${XOP} ${prefix}status✓ ${feat("status")? yes :no}
${XTC}${XOP} ${prefix}ping✓ ${feat("ping")? yes :no}
${XTC}${XOP} ${prefix}owner✓ ${feat("owner")? yes :no}
${XTC}${XOP} ${prefix}readmore✓ ${feat("readmore")? yes :no}
${XTC}${XOP} ${prefix}infobotz✓ ${feat("infobotz")? yes :no}
${XTC}${XOP} ${prefix}runtime✓ ${feat("runtime")? yes :no}
${XTC}${XOP} ${prefix}speed✓ ${feat("speed")? yes :no}
${XTC}${XOP} ${prefix}ss✓ ${feat("ss")? yes :no}  
${XTC}${XOP} ${prefix}chat✓ ${feat("chat")? yes :no}
${XTC}${XOP} ${prefix}rules✓ ${feat("rules")? yes :no}
${XTC}${XOP} ${prefix}kalkulator✓ ${feat("kalkulator")? yes :no}  
${XTC}${XOP} ${prefix}listpc✓ ${feat("listpc")? yes :no}
${XTC}${XOP} ${prefix}listgc✓ ${feat("listgc")? yes :no}
${XTC}${XOP} ${prefix}inspect✓ ${feat("listgc")? yes :no}
${XTC}${XOP} ${prefix}resize✓ ${feat("listgc")? yes :no}
${XTC}${XOP} ${prefix}kontak✓ ${feat("kontak")? yes :no}
${XTC}${XOP} ${prefix}cariteman✓ ${feat("cariteman")? yes :no}
${XTC}
${XM2}${XBC}
  
${XM1}${XBC}${XP1} FUN MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}cekbapak✓ ${feat("cekbapak")? yes :no}
${XTC}${XOP} ${prefix}bucin✓ ${feat("bucin")? yes :no}
${XTC}${XOP} ${prefix}katailham✓ ${feat("katailham")? yes :no}
${XTC}${XOP} ${prefix}truth✓ ${feat("truth")? yes :no}
${XTC}${XOP} ${prefix}dare✓ ${feat("dare")? yes :no}
${XTC}${XOP} ${prefix}bisakah✓ ${feat("bisakah")? yes :no}
${XTC}${XOP} ${prefix}kapankah✓ ${feat("kapankah")? yes :no}
${XTC}${XOP} ${prefix}apakah✓ ${feat("apakah")? yes :no}
${XTC}${XOP} ${prefix}bagaimanakah✓ ${feat("bagaimanakah")? yes :no}
${XTC}${XOP} ${prefix}goblokcek✓ ${feat("goblokcek")? yes :no} 
${XTC}${XOP} ${prefix}jelekcek✓ ${feat("jelekcek")? yes :no} 
${XTC}${XOP} ${prefix}gaycek✓ ${feat("gaycek")? yes :no}
${XTC}${XOP} ${prefix}rate✓ ${feat("rate")? yes :no}
${XTC}${XOP} ${prefix}lesbicek✓ ${feat("lesbicek")? yes :no}
${XTC}${XOP} ${prefix}gantengcek✓ ${feat("gantengcek")? yes :no}
${XTC}${XOP} ${prefix}cantikcek✓ ${feat("cantikcek")? yes :no}
${XTC}${XOP} ${prefix}begocek✓ ${feat("begocek")? yes :no}
${XTC}${XOP} ${prefix}suhucek✓ ${feat("suhucek")? yes :no}
${XTC}${XOP} ${prefix}pintercek✓ ${feat("pintercek")? yes :no}
${XTC}${XOP} ${prefix}jagocek✓ ${feat("jagocek")? yes :no}
${XTC}${XOP} ${prefix}nolepcek✓ ${feat("nolepcek")? yes :no}
${XTC}${XOP} ${prefix}babicek✓ ${feat("babicek")? yes :no}
${XTC}${XOP} ${prefix}bebancek✓ ${feat("bebancek")? yes :no}
${XTC}${XOP} ${prefix}baikcek✓ ${feat("baikcek")? yes :no}
${XTC}${XOP} ${prefix}jahatcek✓ ${feat("jahatcek")? yes :no}
${XTC}${XOP} ${prefix}anjingcek✓ ${feat("anjingcek")? yes :no}
${XTC}${XOP} ${prefix}haramcek✓ ${feat("haramcek")? yes :no}
${XTC}${XOP} ${prefix}pakboycek✓ ${feat("pakboycek")? yes :no}
${XTC}${XOP} ${prefix}pakgirlcek✓ ${feat("pakgirlcek")? yes :no}
${XTC}${XOP} ${prefix}sangecek✓ ${feat("sangecek")? yes :no}
${XTC}${XOP} ${prefix}bapercek✓ ${feat("bapercek")? yes :no}
${XTC}${XOP} ${prefix}fakboycek✓ ${feat("fakboycek")? yes :no}
${XTC}${XOP} ${prefix}alimcek✓ ${feat("alimcek")? yes :no}
${XTC}${XOP} ${prefix}suhucek✓ ${feat("suhucek")? yes :no}
${XTC}${XOP} ${prefix}fakgirlcek✓ ${feat("fakgirlcek")? yes :no}
${XTC}${XOP} ${prefix}kerencek✓ ${feat("kerencek")? yes :no}
${XTC}${XOP} ${prefix}wibucek✓ ${feat("wibucek")? yes :no}
${XTC}${XOP} ${prefix}pasarkascek✓ ${feat("pasarkascek")? yes :no}
${XTC}${XOP} ${prefix}watakcek✓ ${feat("watakcek")? yes :no}
${XTC}${XOP} ${prefix}hobbycek✓ ${feat("hobbycek")? yes :no}
${XTC}
${XM2}${XBC}

${XM1}${XBC}${XP1} PRIMBON MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}nomerhoki✓ ${feat("nomerhoki")? yes :no}
${XTC}${XOP} ${prefix}artimimpi✓ ${feat("artimimpi")? yes :no}
${XTC}${XOP} ${prefix}ramaljodoh✓ ${feat("ramaljodoh")? yes :no}
${XTC}${XOP} ${prefix}ramaljodohbali✓ ${feat("ramaljodohbali")? yes :no}
${XTC}${XOP} ${prefix}suamiistri✓ ${feat("suamiistri")? yes :no}
${XTC}${XOP} ${prefix}ramalcinta✓ ${feat("ramalcinta")? yes :no}
${XTC}${XOP} ${prefix}artinama✓ ${feat("artinama")? yes :no}
${XTC}${XOP} ${prefix}cocoknama✓ ${feat("cocoknama")? yes :no}
${XTC}${XOP} ${prefix}cocokpasangan✓ ${feat("cocokpasangan")? yes :no}
${XTC}${XOP} ${prefix}jadiannikah✓ ${feat("jadiannikah")? yes :no}
${XTC}${XOP} ${prefix}sifatusaha✓ ${feat("sifatusaha")? yes :no}
${XTC}${XOP} ${prefix}rezeki✓ ${feat("rezeki")? yes :no}
${XTC}${XOP} ${prefix}pekerjaan✓ ${feat("pekerjaan")? yes :no}
${XTC}${XOP} ${prefix}ramalnasib✓ ${feat("ramalnasib")? yes :no}
${XTC}${XOP} ${prefix}penyakit✓ ${feat("penyakit")? yes :no}
${XTC}${XOP} ${prefix}artitarot✓ ${feat("artitarot")? yes :no}
${XTC}${XOP} ${prefix}fengshui✓ ${feat("fengshui")? yes :no}
${XTC}${XOP} ${prefix}haribaik✓ ${feat("haribaik")? yes :no}
${XTC}${XOP} ${prefix}harisangar✓ ${feat("harisangar")? yes :no}
${XTC}${XOP} ${prefix}harisial✓ ${feat("harisial")? yes :no}
${XTC}${XOP} ${prefix}harinaga✓ ${feat("harinaga")? yes :no}
${XTC}${XOP} ${prefix}arahrejeki✓ ${feat("arahrejeki")? yes :no}
${XTC}${XOP} ${prefix}peruntungan✓ ${feat("peruntungan")? yes :no}
${XTC}${XOP} ${prefix}wetonjawa✓ ${feat("wetonjawa")? yes :no}
${XTC}${XOP} ${prefix}karakter✓ ${feat("karakter")? yes :no}
${XTC}${XOP} ${prefix}keberuntungan✓ ${feat("keberuntungan")? yes :no}
${XTC}${XOP} ${prefix}memancing✓ ${feat("memancing")? yes :no}
${XTC}${XOP} ${prefix}masasubur✓ ${feat("masasubur")? yes :no}
${XTC}${XOP} ${prefix}zodiak✓ ${feat("zodiak")? yes :no}
${XTC}${XOP} ${prefix}shio✓ ${feat("shio")? yes :no}
${XTC}
${XM2}${XBC}
            
${XM1}${XBC}${XP1} RANDOM MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}cecan✓ ${feat("cecan")? yes :no}
${XTC}${XOP} ${prefix}cogan✓ ${feat("cogan")? yes :no}
${XTC}${XOP} ${prefix}anime✓ ${feat("anime")? yes :no}
${XTC}${XOP} ${prefix}bokep✓ ${feat("bokep")? yes :no}
${XTC}${XOP} ${prefix}loli✓ ${feat("loli")? yes :no}
${XTC}${XOP} ${prefix}milf✓ ${feat("milf")? yes :no}
${XTC}${XOP} ${prefix}husbu✓ ${feat("hubu")? yes :no}
${XTC}${XOP} ${prefix}cosplay✓ ${feat("cosplay")? yes :no}
${XTC}${XOP} ${prefix}wallml✓ ${feat("wallml")? yes :no}
${XTC}${XOP} ${prefix}wallpapers✓ ${feat("wallpapers")? yes :no}
${XTC}${XOP} ${prefix}wallpapermobile✓ ${feat("wallpapermobile")? yes :no}
${XTC}${XOP} ${prefix}neko✓ ${feat("neko")? yes :no}
${XTC}${XOP} ${prefix}neko2✓ ${feat("neko2")? yes :no}
${XTC}${XOP} ${prefix}waifu✓ ${feat("waifu")? yes :no}
${XTC}${XOP} ${prefix}trap✓ ${feat("trap")? yes :no}
${XTC}${XOP} ${prefix}blowjob✓ ${feat("blowjob")? yes :no}
${XTC}${XOP} ${prefix}shinobu✓ ${feat("shinobu")? yes :no}
${XTC}${XOP} ${prefix}megumin✓ ${feat("megumin")? yes :no}
${XTC}${XOP} ${prefix}bully✓ ${feat("bully")? yes :no}
${XTC}${XOP} ${prefix}cuddle✓ ${feat("cuddle")? yes :no}
${XTC}${XOP} ${prefix}cry✓ ${feat("cry")? yes :no}
${XTC}${XOP} ${prefix}hug✓ ${feat("hug")? yes :no}
${XTC}${XOP} ${prefix}awoo✓ ${feat("awoo")? yes :no}
${XTC}${XOP} ${prefix}kiss✓ ${feat("kiss")? yes :no}
${XTC}${XOP} ${prefix}lick✓ ${feat("lick")? yes :no}
${XTC}${XOP} ${prefix}pat✓ ${feat("pat")? yes :no}
${XTC}${XOP} ${prefix}smug✓ ${feat("smug")? yes :no}
${XTC}${XOP} ${prefix}bonk✓ ${feat("bonk")? yes :no}
${XTC}${XOP} ${prefix}yeet✓ ${feat("yeet")? yes :no}
${XTC}${XOP} ${prefix}blush✓ ${feat("blush")? yes :no}
${XTC}${XOP} ${prefix}smile✓ ${feat("smile")? yes :no}
${XTC}${XOP} ${prefix}wave✓ ${feat("wave")? yes :no}
${XTC}${XOP} ${prefix}highfive✓ ${feat("highfive")? yes :no}
${XTC}${XOP} ${prefix}handhold✓ ${feat("handhold")? yes :no}
${XTC}${XOP} ${prefix}nom✓ ${feat("nom")? yes :no}
${XTC}${XOP} ${prefix}bite✓ ${feat("bite")? yes :no}
${XTC}${XOP} ${prefix}glomp✓ ${feat("glomp")? yes :no}
${XTC}${XOP} ${prefix}slap✓ ${feat("slap")? yes :no}
${XTC}${XOP} ${prefix}kill✓ ${feat("kill")? yes :no}
${XTC}${XOP} ${prefix}happy✓ ${feat("happy")? yes :no}
${XTC}${XOP} ${prefix}wink✓ ${feat("wink")? yes :no}
${XTC}${XOP} ${prefix}waifunime✓ ${feat("waifunime")? yes :no}
${XTC}${XOP} ${prefix}hug2✓ ${feat("hug2")? yes :no}
${XTC}
${XM2}${XBC}
  
${XM1}${XBC}${XP1} CONVERTER ${XP2}
${XTC}
${XTC}${XOP} ${prefix}toimg✓ ${feat("toimg")? yes :no}
${XTC}${XOP} ${prefix}tomp3✓ ${feat("tomp3")? yes :no}
${XTC}${XOP} ${prefix}tomp4✓ ${feat("tomp4")? yes :no}
${XTC}${XOP} ${prefix}toptt✓ ${feat("toptt")? yes :no}
${XTC}${XOP} ${prefix}togif✓ ${feat("togif")? yes :no}
${XTC}${XOP} ${prefix}volume✓ ${feat("volume")? yes :no}
${XTC}${XOP} ${prefix}hode✓ ${feat("hode")? yes :no}
${XTC}${XOP} ${prefix}ghost✓ ${feat("ghost")? yes :no}
${XTC}${XOP} ${prefix}nightcore✓ ${feat("nightcore")? yes :no}
${XTC}${XOP} ${prefix}tupai✓ ${feat("tupai")? yes :no}
${XTC}${XOP} ${prefix}imut✓ ${feat("imut")? yes :no}
${XTC}
${XM2}${XBC}

${XM1}${XBC}${XP1} EMOJI ${XP2}
${XTC}
${XTC}${XOP} ${prefix}emojiap✓ ${feat("emojiap")? yes :no}
${XTC}${XOP} ${prefix}emojigo✓ ${feat("emojigo")? yes :no}
${XTC}${XOP} ${prefix}emojisa✓ ${feat("emojisa")? yes :no}
${XTC}${XOP} ${prefix}emojims✓ ${feat("emojims")? yes :no}
${XTC}${XOP} ${prefix}emojiwa✓ ${feat("emojiwa")? yes :no}
${XTC}${XOP} ${prefix}emojitw✓ ${feat("emojitw")? yes :no}
${XTC}${XOP} ${prefix}emojifb✓ ${feat("emojifb")? yes :no}
${XTC}${XOP} ${prefix}emojijp✓ ${feat("emojijp")? yes :no}
${XTC}${XOP} ${prefix}emojiom✓ ${feat("emojiom")? yes :no}
${XTC}${XOP} ${prefix}emojied✓ ${feat("emojied")? yes :no}
${XTC}${XOP} ${prefix}emojimes✓ ${feat("emojimes")? yes :no}
${XTC}${XOP} ${prefix}emojilt✓ ${feat("emojilt")? yes :no}
${XTC}${XOP} ${prefix}emojimo✓ ${feat("emojimo")? yes :no}
${XTC}${XOP} ${prefix}emojimix✓ ${feat("emojimix")? yes :no}
${XTC}
${XM2}${XBC}

${XM1}${XBC}${XP1} STICKER ${XP2}
${XTC}
${XTC}${XOP} ${prefix}sticker✓ ${feat("s")? yes :no}
${XTC}${XOP} ${prefix}attp✓ ${feat("attp")? yes :no}
${XTC}${XOP} ${prefix}smeme✓ ${feat("smeme")? yes :no}
${XTC}${XOP} ${prefix}triggered✓ ${feat("triggered")? yes :no}
${XTC}${XOP} ${prefix}wasted✓ ${feat("wasted")? yes :no}
${XTC}${XOP} ${prefix}comrade✓ ${feat("comrade")? yes :no}
${XTC}${XOP} ${prefix}horny✓ ${feat("horny")? yes :no}
${XTC}${XOP} ${prefix}blur✓ ${feat("blur")? yes :no}
${XTC}${XOP} ${prefix}pixelate✓ ${feat("pixelate")? yes :no}
${XTC}${XOP} ${prefix}simpcard✓ ${feat("simpcard")? yes :no}
${XTC}${XOP} ${prefix}lolice✓ ${feat("lolice")? yes :no}
${XTC}${XOP} ${prefix}glass✓ ${feat("glass")? yes :no}
${XTC}${XOP} ${prefix}take✓ ${feat("take")? yes :no}
${XTC}${XOP} ${prefix}patrick✓ ${feat("patrick")? yes :no}
${XTC}${XOP} ${prefix}gura✓ ${feat("gura")? yes :no}
${XTC}${XOP} ${prefix}doge✓ ${feat("doge")? yes :no}
${XTC}
${XM2}${XBC}

${XM1}${XBC}${XP1} DOWNLOAD ${XP2}
${XTC}
${XTC}${XOP} ${prefix}play✓ ${feat("play")? yes :no}
${XTC}${XOP} ${prefix}playmusic✓ ${feat("playmusic")? yes :no}
${XTC}${XOP} ${prefix}ig✓ ${feat("ig")? yes :no}
${XTC}${XOP} ${prefix}gimage✓ ${feat("gimage")? yes :no}
${XTC}${XOP} ${prefix}tiktok✓ ${feat("tiktok")? yes :no}
${XTC}${XOP} ${prefix}tiktokmusic✓ ${feat("tiktokmusik")? yes :no}
${XTC}${XOP} ${prefix}tiktoknowm✓ ${feat("tiktoknowm")? yes :no}
${XTC}${XOP} ${prefix}pinterest✓ ${feat("pinterest")? yes :no}
${XTC}${XOP} ${prefix}spotify✓ ${feat("spotify")? yes :no}
${XTC}${XOP} ${prefix}ytmp4✓ ${feat("ytmp4")? yes :no}
${XTC}${XOP} ${prefix}ytmp3✓ ${feat("ytmp3")? yes :no}
${XTC}${XOP} ${prefix}mediafire✓ ${feat("mediafire")? yes :no}
${XTC}${XOP} ${prefix}githubdl✓ ${feat("githubdl")? yes :no}
${XTC}${XOP} ${prefix}gitclone ✓ ${feat("gitclone")? yes :no}
${XTC}${XOP} ${prefix}igstory ${feat("igstory")? yes :no}
${XTC}
${XM2}${XBC}
  
${XM1}${XBC}${XP1} SOUND MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}sound1✓ ${feat("sound1")? yes :no}
${XTC}${XOP} ${prefix}sound2✓ ${feat("sound2")? yes :no}
${XTC}${XOP} ${prefix}sound3✓ ${feat("sound3")? yes :no}
${XTC}${XOP} ${prefix}sound4✓ ${feat("sound4")? yes :no}
${XTC}${XOP} ${prefix}sound5✓ ${feat("sound5")? yes :no}
${XTC}${XOP} ${prefix}sound6✓ ${feat("sound6")? yes :no}
${XTC}${XOP} ${prefix}sound7✓ ${feat("sound7")? yes :no}
${XTC}${XOP} ${prefix}sound8✓ ${feat("sound8")? yes :no}
${XTC}${XOP} ${prefix}sound9✓ ${feat("sound9")? yes :no}
${XTC}${XOP} ${prefix}sound10✓ ${feat("sound10")? yes :no}
${XTC}${XOP} ${prefix}sound11✓ ${feat("sound11")? yes :no}
${XTC}${XOP} ${prefix}sound12✓ ${feat("sound12")? yes :no}
${XTC}${XOP} ${prefix}sound13✓ ${feat("sound13")? yes :no}
${XTC}${XOP} ${prefix}sound14✓ ${feat("sound14")? yes :no}
${XTC}${XOP} ${prefix}sound15✓ ${feat("sound15")? yes :no}
${XTC}${XOP} ${prefix}sound16✓ ${feat("sound16")? yes :no}
${XTC}${XOP} ${prefix}sound17✓ ${feat("sound17")? yes :no}
${XTC}${XOP} ${prefix}sound18✓ ${feat("sound18")? yes :no}
${XTC}${XOP} ${prefix}sound19✓ ${feat("sound19")? yes :no}
${XTC}${XOP} ${prefix}sound20✓ ${feat("sound20")? yes :no}
${XTC}${XOP} ${prefix}sound21✓ ${feat("sound21")? yes :no}
${XTC}${XOP} ${prefix}sound22✓ ${feat("sound22")? yes :no}
${XTC}${XOP} ${prefix}sound23✓ ${feat("sound23")? yes :no}
${XTC}${XOP} ${prefix}sound24✓ ${feat("sound24")? yes :no}
${XTC}${XOP} ${prefix}sound25✓ ${feat("sound25")? yes :no}
${XTC}${XOP} ${prefix}sound26✓ ${feat("sound26")? yes :no}
${XTC}${XOP} ${prefix}sound27✓ ${feat("sound27")? yes :no}
${XTC}${XOP} ${prefix}sound28✓ ${feat("sound28")? yes :no}
${XTC}${XOP} ${prefix}sound29✓ ${feat("sound29")? yes :no}
${XTC}${XOP} ${prefix}sound30✓ ${feat("sound30")? yes :no}
${XTC}${XOP} ${prefix}sound31✓ ${feat("sound31")? yes :no}
${XTC}${XOP} ${prefix}sound32✓ ${feat("sound32")? yes :no}
${XTC}${XOP} ${prefix}sound33✓ ${feat("sound33")? yes :no}
${XTC}${XOP} ${prefix}sound34✓ ${feat("sound34")? yes :no}
${XTC}${XOP} ${prefix}sound35✓ ${feat("sound35")? yes :no}
${XTC}${XOP} ${prefix}sound36✓ ${feat("sound36")? yes :no}
${XTC}${XOP} ${prefix}sound37✓ ${feat("sound37")? yes :no}
${XTC}${XOP} ${prefix}sound38✓ ${feat("sound38")? yes :no}
${XTC}${XOP} ${prefix}sound39✓ ${feat("sound39")? yes :no}
${XTC}${XOP} ${prefix}sound40✓ ${feat("sound40")? yes :no}
${XTC}${XOP} ${prefix}sound41✓ ${feat("sound41")? yes :no}
${XTC}${XOP} ${prefix}sound42✓ ${feat("sound42")? yes :no}
${XTC}${XOP} ${prefix}sound43✓ ${feat("sound43")? yes :no}
${XTC}${XOP} ${prefix}sound44✓ ${feat("sound44")? yes :no}
${XTC}${XOP} ${prefix}sound45✓ ${feat("sound45")? yes :no}
${XTC}${XOP} ${prefix}sound46✓ ${feat("sound46")? yes :no}
${XTC}${XOP} ${prefix}sound47✓ ${feat("sound47")? yes :no}
${XTC}${XOP} ${prefix}sound48✓ ${feat("sound48")? yes :no}
${XTC}${XOP} ${prefix}sound49✓ ${feat("sound49")? yes :no}
${XTC}${XOP} ${prefix}sound50✓ ${feat("sound50")? yes :no}
${XTC}${XOP} ${prefix}sound51✓ ${feat("sound51")? yes :no}
${XTC}${XOP} ${prefix}sound52✓ ${feat("sound52")? yes :no}
${XTC}${XOP} ${prefix}sound53✓ ${feat("sound53")? yes :no}
${XTC}${XOP} ${prefix}sound54✓ ${feat("sound54")? yes :no}
${XTC}${XOP} ${prefix}sound55✓ ${feat("sound55")? yes :no}
${XTC}${XOP} ${prefix}sound56✓ ${feat("sound56")? yes :no}
${XTC}${XOP} ${prefix}sound57✓ ${feat("sound57")? yes :no}
${XTC}${XOP} ${prefix}sound58✓ ${feat("sound58")? yes :no}
${XTC}${XOP} ${prefix}sound59✓ ${feat("sound59")? yes :no}
${XTC}${XOP} ${prefix}sound60✓ ${feat("sound60")? yes :no}
${XTC}${XOP} ${prefix}sound61✓ ${feat("sound61")? yes :no}
${XTC}${XOP} ${prefix}sound62✓ ${feat("sound62")? yes :no}
${XTC}${XOP} ${prefix}sound63✓ ${feat("sound63")? yes :no}
${XTC}${XOP} ${prefix}sound64✓ ${feat("sound64")? yes :no}
${XTC}${XOP} ${prefix}sound65✓ ${feat("sound65")? yes :no}
${XTC}${XOP} ${prefix}sound66✓ ${feat("sound66")? yes :no}
${XTC}${XOP} ${prefix}sound67✓ ${feat("sound67")? yes :no}
${XTC}${XOP} ${prefix}sound68✓ ${feat("sound68")? yes :no}
${XTC}${XOP} ${prefix}sound69✓ ${feat("sound69")? yes :no}
${XTC}${XOP} ${prefix}sound70✓ ${feat("sound70")? yes :no}
${XTC}${XOP} ${prefix}sound71✓ ${feat("sound71")? yes :no}
${XTC}${XOP} ${prefix}sound72✓ ${feat("sound72")? yes :no}
${XTC}${XOP} ${prefix}sound73✓ ${feat("sound73")? yes :no}
${XTC}${XOP} ${prefix}sound74✓ ${feat("sound74")? yes :no}
${XTC}${XOP} ${prefix}sound75✓ ${feat("sound75")? yes :no}
${XTC}${XOP} ${prefix}sound76✓ ${feat("sound76")? yes :no}
${XTC}${XOP} ${prefix}sound77✓ ${feat("sound77")? yes :no}
${XTC}${XOP} ${prefix}sound78✓ ${feat("sound78")? yes :no}
${XTC}${XOP} ${prefix}sound79✓ ${feat("sound79")? yes :no}
${XTC}${XOP} ${prefix}sound80✓ ${feat("sound80")? yes :no}
${XTC}${XOP} ${prefix}sound81✓ ${feat("sound81")? yes :no}
${XTC}${XOP} ${prefix}sound82✓ ${feat("sound82")? yes :no}
${XTC}${XOP} ${prefix}sound83✓ ${feat("sound83")? yes :no}
${XTC}${XOP} ${prefix}sound84✓ ${feat("sound84")? yes :no}
${XTC}${XOP} ${prefix}sound85✓ ${feat("sound85")? yes :no}
${XTC}${XOP} ${prefix}sound86✓ ${feat("sound86")? yes :no}
${XTC}${XOP} ${prefix}sound87✓ ${feat("sound87")? yes :no}
${XTC}${XOP} ${prefix}sound88✓ ${feat("sound88")? yes :no}
${XTC}${XOP} ${prefix}sound89✓ ${feat("sound89")? yes :no}
${XTC}${XOP} ${prefix}sound90✓ ${feat("sound90")? yes :no}
${XTC}${XOP} ${prefix}sound91✓ ${feat("sound91")? yes :no}
${XTC}${XOP} ${prefix}sound92✓ ${feat("sound92")? yes :no}
${XTC}${XOP} ${prefix}sound93✓ ${feat("sound93")? yes :no}
${XTC}${XOP} ${prefix}sound94✓ ${feat("sound94")? yes :no}
${XTC}${XOP} ${prefix}sound95✓ ${feat("sound95")? yes :no}
${XTC}${XOP} ${prefix}sound96✓ ${feat("sound96")? yes :no}
${XTC}${XOP} ${prefix}sound97✓ ${feat("sound97")? yes :no}
${XTC}${XOP} ${prefix}sound98✓ ${feat("sound98")? yes :no}
${XTC}${XOP} ${prefix}sound99✓ ${feat("sound99")? yes :no}
${XTC}${XOP} ${prefix}sound100✓ ${feat("sound100")? yes :no}
${XTC}${XOP} ${prefix}sound101✓ ${feat("sound101")? yes :no}
${XTC}${XOP} ${prefix}sound102✓ ${feat("sound102")? yes :no}
${XTC}${XOP} ${prefix}sound103✓ ${feat("sound103")? yes :no}
${XTC}${XOP} ${prefix}sound104✓ ${feat("sound104")? yes :no}
${XTC}${XOP} ${prefix}sound105✓ ${feat("sound105")? yes :no}
${XTC}${XOP} ${prefix}sound106✓ ${feat("sound106")? yes :no}
${XTC}${XOP} ${prefix}sound107✓ ${feat("sound107")? yes :no}
${XTC}${XOP} ${prefix}sound108✓ ${feat("sound108")? yes :no}
${XTC}${XOP} ${prefix}sound109✓ ${feat("sound109")? yes :no}
${XTC}${XOP} ${prefix}sound110✓ ${feat("sound110")? yes :no}
${XTC}${XOP} ${prefix}sound111✓ ${feat("sound111")? yes :no}
${XTC}${XOP} ${prefix}sound112✓ ${feat("sound112")? yes :no}
${XTC}${XOP} ${prefix}sound113✓ ${feat("sound113")? yes :no}
${XTC}${XOP} ${prefix}sound114✓ ${feat("sound114")? yes :no}
${XTC}${XOP} ${prefix}sound115✓ ${feat("sound115")? yes :no}
${XTC}${XOP} ${prefix}sound116✓ ${feat("sound116")? yes :no}
${XTC}${XOP} ${prefix}sound117✓ ${feat("sound117")? yes :no}
${XTC}${XOP} ${prefix}sound118✓ ${feat("sound118")? yes :no}
${XTC}${XOP} ${prefix}sound119✓ ${feat("sound119")? yes :no}
${XTC}${XOP} ${prefix}sound120✓ ${feat("sound120")? yes :no}
${XTC}${XOP} ${prefix}sound121✓ ${feat("sound121")? yes :no}
${XTC}${XOP} ${prefix}sound122✓ ${feat("sound122")? yes :no}
${XTC}${XOP} ${prefix}sound123✓ ${feat("sound123")? yes :no}
${XTC}${XOP} ${prefix}sound124✓ ${feat("sound124")? yes :no}
${XTC}${XOP} ${prefix}sound125✓ ${feat("sound125")? yes :no}
${XTC}${XOP} ${prefix}sound126✓ ${feat("sound126")? yes :no}
${XTC}${XOP} ${prefix}sound127✓ ${feat("sound127")? yes :no}
${XTC}${XOP} ${prefix}sound128✓ ${feat("sound128")? yes :no}
${XTC}${XOP} ${prefix}sound129✓ ${feat("sound129")? yes :no}
${XTC}${XOP} ${prefix}sound130✓ ${feat("sound130")? yes :no}
${XTC}${XOP} ${prefix}sound131✓ ${feat("sound131")? yes :no}
${XTC}${XOP} ${prefix}sound132✓ ${feat("sound132")? yes :no}
${XTC}${XOP} ${prefix}sound133✓ ${feat("sound133")? yes :no}
${XTC}${XOP} ${prefix}sound134✓ ${feat("sound134")? yes :no}
${XTC}${XOP} ${prefix}sound135✓ ${feat("sound135")? yes :no}
${XTC}${XOP} ${prefix}sound136✓ ${feat("sound136")? yes :no}
${XTC}${XOP} ${prefix}sound137✓ ${feat("sound137")? yes :no}
${XTC}${XOP} ${prefix}sound138✓ ${feat("sound138")? yes :no}
${XTC}${XOP} ${prefix}sound139✓ ${feat("sound139")? yes :no}
${XTC}${XOP} ${prefix}sound140✓ ${feat("sound140")? yes :no}
${XTC}${XOP} ${prefix}sound141✓ ${feat("sound141")? yes :no}
${XTC}${XOP} ${prefix}sound142✓ ${feat("sound142")? yes :no}
${XTC}${XOP} ${prefix}sound143✓ ${feat("sound143")? yes :no}
${XTC}${XOP} ${prefix}sound144✓ ${feat("sound144")? yes :no}
${XTC}${XOP} ${prefix}sound145✓ ${feat("sound145")? yes :no}
${XTC}${XOP} ${prefix}sound146✓ ${feat("sound146")? yes :no}
${XTC}${XOP} ${prefix}sound147✓ ${feat("sound147")? yes :no}
${XTC}${XOP} ${prefix}sound148✓ ${feat("sound148")? yes :no}
${XTC}${XOP} ${prefix}sound149✓ ${feat("sound149")? yes :no}
${XTC}${XOP} ${prefix}sound150✓ ${feat("sound150")? yes :no}
${XTC}${XOP} ${prefix}sound151✓ ${feat("sound151")? yes :no}
${XTC}${XOP} ${prefix}sound152✓ ${feat("sound152")? yes :no}
${XTC}${XOP} ${prefix}sound153✓ ${feat("sound153")? yes :no}
${XTC}${XOP} ${prefix}sound154✓ ${feat("sound154")? yes :no}
${XTC}${XOP} ${prefix}sound155✓ ${feat("sound155")? yes :no}
${XTC}${XOP} ${prefix}sound156✓ ${feat("sound156")? yes :no}
${XTC}${XOP} ${prefix}sound157✓ ${feat("sound157")? yes :no}
${XTC}${XOP} ${prefix}sound158✓ ${feat("sound158")? yes :no}
${XTC}${XOP} ${prefix}sound159✓ ${feat("sound159")? yes :no}
${XTC}${XOP} ${prefix}sound160✓ ${feat("sound160")? yes :no}
${XTC}${XOP} ${prefix}sound161✓ ${feat("sound161")? yes :no}
${XTC}
${XM2}${XBC}
    
${XM1}${XBC}${XP1} TEXT PRO ${XP2}
${XTC}
${XTC}${XOP} ${prefix}blackping✓ ${feat("blackping")? yes :no}
${XTC}${XOP} ${prefix}glitch✓ ${feat("glitch")? yes :no}
${XTC}${XOP} ${prefix}glitch2✓ ${feat("glitch2")? yes :no}
${XTC}${XOP} ${prefix}glitch3✓ ${feat("glitch3")? yes :no}
${XTC}${XOP} ${prefix}lion✓ ${feat("lion")? yes :no}  
${XTC}${XOP} ${prefix}3dneon✓ ${feat("3dneon")? yes :no}
${XTC}${XOP} ${prefix}3dspace✓ ${feat("3dspace")? yes :no}
${XTC}${XOP} ${prefix}neon✓ ${feat("neon")? yes :no}
${XTC}${XOP} ${prefix}greenneon✓ ${feat("greenneon")? yes :no}
${XTC}${XOP} ${prefix}bokeh✓ ${feat("bokeh")? yes :no}
${XTC}${XOP} ${prefix}hollographic✓ ${feat("hollographic")? yes :no}
${XTC}${XOP} ${prefix}bear✓ ${feat("bear")? yes :no}
${XTC}${XOP} ${prefix}wolf✓ ${feat("wolf")? yes :no}
${XTC}${XOP} ${prefix}joker✓ ${feat("joker")? yes :no}
${XTC}${XOP} ${prefix}dropwater✓ ${feat("dropwater")? yes :no}
${XTC}${XOP} ${prefix}neonlight✓ ${feat("neonlight")? yes :no}
${XTC}${XOP} ${prefix}thewall✓ ${feat("thewall")? yes :no}
${XTC}${XOP} ${prefix}natural✓ ${feat("natural")? yes :no}
${XTC}${XOP} ${prefix}carbon✓ ${feat("carbon")? yes :no}
${XTC}${XOP} ${prefix}pencil✓ ${feat("pencil")? yes :no}
${XTC}${XOP} ${prefix}luxury✓ ${feat("luxury")? yes :no}
${XTC}${XOP} ${prefix}whitegold✓ ${feat("whitegold")? yes :no}
${XTC}${XOP} ${prefix}lightglow✓ ${feat("lightglow")? yes :no}
${XTC}${XOP} ${prefix}arcane✓ ${feat("arcane")? yes :no}
${XTC}${XOP} ${prefix}neonlight✓ ${feat("neonlight")? yes :no}
${XTC}${XOP} ${prefix}valentine✓ ${feat("valentine")? yes :no}
${XTC}${XOP} ${prefix}glowingneon✓ ${feat("glowingneon")? yes :no}
${XTC}${XOP} ${prefix}colorled✓ ${feat("colorled")? yes :no}
${XTC}${XOP} ${prefix}3dretro✓ ${feat("3dretro")? yes :no}
${XTC}
${XM2}${XBC}
  
${XM1}${XBC}${XP1} IMAGE MAKER ${XP2}
${XTC}
${XTC}${XOP} ${prefix}wanted✓ ${feat("wanted")? yes :no}
${XTC}${XOP} ${prefix}utatoo✓ ${feat("utatoo")? yes :no}
${XTC}${XOP} ${prefix}unsharpen✓ ${feat("unsharpen")? yes :no}
${XTC}${XOP} ${prefix}thanos✓ ${feat("thanos")? yes :no}
${XTC}${XOP} ${prefix}sniper✓ ${feat("sniper")? yes :no}
${XTC}${XOP} ${prefix}sharpen✓ ${feat("sharpen")? yes :no}
${XTC}${XOP} ${prefix}sepia✓ ${feat("sepia")? yes :no}
${XTC}${XOP} ${prefix}scary✓ ${feat("scary")? yes :no}
${XTC}${XOP} ${prefix}rip✓ ${feat("rip")? yes :no}
${XTC}${XOP} ${prefix}redple✓ ${feat("redple")? yes :no}
${XTC}${XOP} ${prefix}rejected✓ ${feat("rejected")? yes :no}
${XTC}${XOP} ${prefix}posterize✓ ${feat("posterize")? yes :no}
${XTC}${XOP} ${prefix}ps4✓ ${feat("ps4")? yes :no}
${XTC}${XOP} ${prefix}pixelize✓ ${feat("pixelize")? yes :no}
${XTC}${XOP} ${prefix}missionpassed✓ ${feat("missionpassed")? yes :no}
${XTC}${XOP} ${prefix}moustache✓ ${feat("moustache")? yes :no}
${XTC}${XOP} ${prefix}lookwhatkarenhave✓ ${feat("lookwhatkarenhave")? yes :no}
${XTC}${XOP} ${prefix}jail✓ ${feat("jail")? yes :no}
${XTC}${XOP} ${prefix}invert✓ ${feat("invert")? yes :no}
${XTC}${XOP} ${prefix}greyscale✓ ${feat("greyscale")? yes :no}
${XTC}${XOP} ${prefix}glitch✓ ${feat("glitch")? yes :no}
${XTC}${XOP} ${prefix}gay✓ ${feat("gay")? yes :no}
${XTC}${XOP} ${prefix}frame✓ ${feat("frame")? yes :no}
${XTC}${XOP} ${prefix}fire✓ ${feat("fire")? yes :no}
${XTC}${XOP} ${prefix}distort✓ ${feat("distort")? yes :no}
${XTC}${XOP} ${prefix}dictator✓ ${feat("dictator")? yes :no}
${XTC}${XOP} ${prefix}deepfry✓ ${feat("deepfry")? yes :no}
${XTC}${XOP} ${prefix}ddungeon✓ ${feat("ddungeon")? yes :no}
${XTC}${XOP} ${prefix}circle✓ ${feat("circle")? yes :no}
${XTC}${XOP} ${prefix}challenger✓ ${feat("challenger")? yes :no}
${XTC}${XOP} ${prefix}burn✓ ${feat("burn")? yes :no}
${XTC}${XOP} ${prefix}brazzers✓ ${feat("beautiful")? yes :no}
${XTC}${XOP} ${prefix}beautiful✓ ${feat("beautiful")? yes :no}
${XTC}${XOP} ${prefix}approved✓ ${feat("approved")? yes :no}
${XTC}${XOP} ${prefix}3000years✓ ${feat("3000years")? yes :no}
${XTC}
${XM2}${XBC}

${XM1}${XBC}${XP1} CERPEN MENU ${XM1}${XBC}${XP1} 
${XTC}
${XTC}${XOP} ${prefix}cerpen-anak✓ ${feat("cerpen-anak")? yes :no}
${XTC}${XOP} ${prefix}cerpen-bahasadaerah✓ ${feat("cerpen-bahasadaerah")? yes :no}
${XTC}${XOP} ${prefix}cerpen-bahasainggris✓ ${feat("cerpen-bahasainggris")? yes :no}
${XTC}${XOP} ${prefix}cerpen-bahasajawa✓ ${feat("cerpen-bahasajawa")? yes :no}
${XTC}${XOP} ${prefix}cerpen-bahasasunda✓ ${feat("cerpen-bahasasunda")? yes :no}
${XTC}${XOP} ${prefix}cerpen-budaya✓ ${feat("cerpen-budaya")? yes :no}
${XTC}${XOP} ${prefix}cerpen-cinta✓ ${feat("cerpen-cinta")? yes :no}
${XTC}${XOP} ${prefix}cerpen-cintaislami✓ ${feat("cerpen-cintaislami")? yes :no}
${XTC}${XOP} ${prefix}cerpen-cintapertama✓ ${feat("cerpen-cintapertama")? yes :no}
${XTC}${XOP} ${prefix}cerpen-cintaromantis✓ ${feat("cerpen-cintaromantis")? yes :no}
${XTC}${XOP} ${prefix}cerpen-cintasedih✓ ${feat("cerpen-cintasedih")? yes :no}
${XTC}${XOP} ${prefix}cerpen-cintasegitiga✓ ${feat("cerpen-cintasegitiga")? yes :no}
${XTC}${XOP} ${prefix}cerpen-cintasejati✓ ${feat("cerpen-cintasejati")? yes :no}
${XTC}${XOP} ${prefix}cerpen-galau✓ ${feat("cerpen-galau")? yes :no}
${XTC}${XOP} ${prefix}cerpen-gokil✓ ${feat("cerpen-gokil")? yes :no}
${XTC}${XOP} ${prefix}cerpen-inspiratif✓ ${feat("cerpen-inspiratif")? yes :no}
${XTC}${XOP} ${prefix}cerpen-jepang✓ ${feat("cerpen-jepang")? yes :no}
${XTC}${XOP} ${prefix}cerpen-kehidupan✓ ${feat("cerpen-kehidupan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-keluarga✓ ${feat("cerpen-keluarga")? yes :no}
${XTC}${XOP} ${prefix}cerpen-kisahnyata✓ ${feat("cerpen-kisahnyata")? yes :no}
${XTC}${XOP} ${prefix}cerpen-korea✓ ${feat("cerpen-korea")? yes :no}
${XTC}${XOP} ${prefix}cerpen-kristen✓ ${feat("cerpen-kristen")? yes :no}
${XTC}${XOP} ${prefix}cerpen-liburan✓ ${feat("cerpen-liburan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-malaysia✓ ${feat("cerpen-malaysia")? yes :no}
${XTC}${XOP} ${prefix}cerpen-mengharukan✓ ${feat("cerpen-mengharukan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-misteri✓ ${feat("cerpen-misteri")? yes :no}
${XTC}${XOP} ${prefix}cerpen-motivasi✓ ${feat("cerpen-motivasi")? yes :no}
${XTC}${XOP} ${prefix}cerpen-nasihat✓ ${feat("cerpen-nasihat")? yes :no}
${XTC}${XOP} ${prefix}cerpen-nasionalisme✓ ${feat("cerpen-nasionalisme")? yes :no}
${XTC}${XOP} ${prefix}cerpen-olahraga✓ ${feat("cerpen-olahraga")? yes :no}
${XTC}${XOP} ${prefix}cerpen-patahhati✓ ${feat("cerpen-patahhati")? yes :no}
${XTC}${XOP} ${prefix}cerpen-penantian✓ ${feat("cerpen-penantian")? yes :no}
${XTC}${XOP} ${prefix}cerpen-pendidikan✓ ${feat("cerpen-pendidikan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-pengalaman✓ ${feat("cerpen-pengalaman")? yes :no}
${XTC}${XOP} ${prefix}cerpen-pengorbanan✓ ${feat("cerpen-pengorbanan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-penyesalan✓ ${feat("cerpen-penyesalan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-perjuangan✓ ${feat("cerpen-perjuangan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-perpisahan✓ ${feat("cerpen-perpisahan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-persahabatan✓ ${feat("cerpen-persahabatan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-petualangan✓ ${feat("cerpen-petualangan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-ramadhan✓ ${feat("cerpen-ramadhan")? yes :no}
${XTC}${XOP} ${prefix}cerpen-remaja✓ ${feat("cerpen-remaja")? yes :no}
${XTC}${XOP} ${prefix}cerpen-rindu✓ ${feat("cerpen-rindu")? yes :no}
${XTC}${XOP} ${prefix}cerpen-rohani✓ ${feat("cerpen-rohani")? yes :no}
${XTC}${XOP} ${prefix}cerpen-romantis✓ ${feat("cerpen-romantis")? yes :no}
${XTC}${XOP} ${prefix}cerpen-sastra✓ ${feat("cerpen-sastra")? yes :no}
${XTC}${XOP} ${prefix}cerpen-sedih✓ ${feat("cerpen-sedih")? yes :no}
${XTC}${XOP} ${prefix}cerpen-sejarah✓ ${feat("cerpen-sejarah")? yes :no}
${XTC}
${XM2}${XBC}

${XM1}${XBC}${XP1} SEARCH MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}scsearch✓ ${feat("scsearch")? yes :no}
${XTC}${XOP} ${prefix}ghstalk✓ ${feat("ghstalk")? yes :no}
${XTC}${XOP} ${prefix}lirik✓ ${feat("lirik")? yes :no}
${XTC}${XOP} ${prefix}grupwa✓ ${feat("grupwa")? yes :no}
${XTC}${XOP} ${prefix}yts✓ ${feat("yts")? yes :no}
${XTC}${XOP} ${prefix}whatmusic✓ ${feat("whatmusic")? yes :no}
${XTC}${XOP} ${prefix}whatanime✓ ${feat("whatanime")? yes :no}
${XTC}${XOP} ${prefix}google✓ ${feat("google")? yes :no}
${XTC}${XOP} ${prefix}kbbi✓ ${feat("kbbi")? yes :no}
${XTC}${XOP} ${prefix}weather✓ ${feat("weather")? yes :no}
${XTC}${XOP} ${prefix}kodepos✓ ${feat("kodepos")? yes :no}
${XTC}${XOP} ${prefix}kodebahasa✓ ${feat("kodebahasa")? yes :no}
${XTC}${XOP} ${prefix}brainly✓ ${feat("brainly")? yes :no}
${XTC}${XOP} ${prefix}wallpaper✓ ${feat("wallpaper")? yes :no}
${XTC}
${XM2}${XBC}
  
${XM1}${XBC}${XP1} SHORT URL ${XP2}
${XTC}
${XTC}${XOP} ${prefix}tinyurl✓ ${feat("tinyurl")? yes :no}
${XTC}${XOP} ${prefix}bitly✓ ${feat("bitly")? yes :no}
${XTC}${XOP} ${prefix}tourl ✓ ${feat("tourl")? yes :no}
${XTC}
${XM2}${XBC}

${XM1}${XBC}${XP1} STORAGE ${XP2}
${XTC}
${XTC}${XOP} ${prefix}adderror✓ ${feat("adderror")? yes :no}
${XTC}${XOP} ${prefix}addstik✓ ${feat("addstik")? yes :no}
${XTC}${XOP} ${prefix}addvn✓ ${feat("addvn")? yes :no}
${XTC}${XOP} ${prefix}addowner✓ ${feat("addowner")? yes :no}
${XTC}${XOP} ${prefix}addprem✓ ${feat("addprem")? yes :no}
${XTC}${XOP} ${prefix}delprem✓ ${feat("delprem")? yes :no}
${XTC}${XOP} ${prefix}delerror✓ ${feat("delerror")? yes :no}
${XTC}${XOP} ${prefix}delvn✓ ${feat("delvn")? yes :no}
${XTC}${XOP} ${prefix}delowner✓ ${feat("delowner")? yes :no}
${XTC}${XOP} ${prefix}delstik✓ ${feat("delstik")? yes :no}
${XTC}${XOP} ${prefix}delvn✓ ${feat("delvn")? yes :no}
${XTC}${XOP} ${prefix}listerror✓ ${feat("listerror")? yes :no}
${XTC}${XOP} ${prefix}liststik✓ ${feat("liststik")? yes :no}   
${XTC}${XOP} ${prefix}listvn✓ ${feat("listvn")? yes :no}
${XTC}${XOP} ${prefix}listowner✓ ${feat("listowner")? yes :no}
${XTC}${XOP} ${prefix}listprem✓ ${feat("listprem")? yes :no}
${XTC}${XOP} ${prefix}clearallprem✓ ${feat("clearallprem")? yes :no}
${XTC}${XOP} ${prefix}listban✓ ${feat("listban")? yes :no}   
${XTC}${XOP} ${prefix}listblockcmd✓ ${feat("listblockcmd")? yes :no}
${XTC}${XOP} ${prefix}clearallerror✓ ${feat("clearallerror")? yes :no}
${XTC}${XOP} ${prefix}clearallban✓ ${feat("clearallban")? yes :no}
${XTC}${XOP} ${prefix}clearallblock✓ ${feat("clearallblock")? yes :no}
${XTC}${XOP} ${prefix}clearallUser✓ ${feat("clearallUser")? yes :no}
${XTC}${XOP} ${prefix}clearallowner✓ ${feat("clearallowner")? yes :no}
${XTC}
${XM2}${XBC}
   
${XM1}${XBC}${XP1} ISLAMI MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}hadis✓ ${feat("clearallUser")? yes :no}
${XTC}${XOP} ${prefix}alquran✓ ${feat("clearallUser")? yes :no}
${XTC}${XOP} ${prefix}tafsirsurah✓ ${feat("clearallUser")? yes :no}
${XTC}
${XM2}${XBC}
   
${XM1}${XBC}${XP1} GAME MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}math✓ ${feat("math")? yes :no}
${XTC}${XOP} ${prefix}asahotak✓ ${feat("asahotak")? yes :no}
${XTC}${XOP} ${prefix}tebakkalimat✓ ${feat("tebakkalimat")? yes :no}
${XTC}${XOP} ${prefix}susunkata✓ ${feat("susunkata")? yes :no}
${XTC}${XOP} ${prefix}caklontong✓ ${feat("caklontong")? yes :no}
${XTC}${XOP} ${prefix}tebakanime✓ ${feat("tebakanime")? yes :no}
${XTC}${XOP} ${prefix}tebakbendera✓ ${feat("tebakbendera")? yes :no}
${XTC}${XOP} ${prefix}tebakkimia✓ ${feat("tebakkimia")? yes :no}
${XTC}${XOP} ${prefix}tekateki✓ ${feat("tekateki")? yes :no}
${XTC}${XOP} ${prefix}tebakkabupaten✓ ${feat("tebakkabupaten")? yes :no}
${XTC}
${XM2}${XBC}
   
${XM1}${XBC}${XP1} RPG MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}berburu✓ ${feat("berburu")? yes :no}
${XTC}${XOP} ${prefix}mining✓ ${feat("mining")? yes :no}
${XTC}${XOP} ${prefix}leaderboard✓ ${feat("leaderboard")? yes :no}
${XTC}${XOP} ${prefix}heal✓ ${feat("heal")? yes :no}
${XTC}${XOP} ${prefix}inventori✓ ${feat("inventori")? yes :no}
${XTC}${XOP} ${prefix}mancing✓ ${feat("mancing")? yes :no}
${XTC}${XOP} ${prefix}darah✓ ${feat("darah")? yes :no}
${XTC}${XOP} ${prefix}buy✓ ${feat("buy")? yes :no}
${XTC}
${XM2}${XBC}
   
${XM1}${XBC}${XP1} BUG MENU ${XP2}
${XTC}
${XTC}${XOP} ${prefix}spambugv1✓ ${feat("spambugv1")? yes :no}
${XTC}${XOP} ${prefix}spambugv2✓ ${feat("spambugv2")? yes :no}
${XTC}${XOP} ${prefix}spambugv3✓ ${feat("spambugv3")? yes :no}
${XTC}${XOP} ${prefix}sendbugv1✓ ${feat("sendbugv1")? yes :no}
${XTC}${XOP} ${prefix}sendbugv2✓ ${feat("sendbugv2")? yes :no}
${XTC}${XOP} ${prefix}sendbugv3✓ ${feat("sendbugv3")? yes :no}
${XTC}${XOP} ${prefix}sendbugv4✓ ${feat("sendbugv4")? yes :no}
${XTC}${XOP} ${prefix}sendbugv5✓ ${feat("sendbugv5")? yes :no}
${XTC}${XOP} ${prefix}bugv1✓ ${feat("bugv1")? yes :no}
${XTC}${XOP} ${prefix}bugv2✓ ${feat("bugv2")? yes :no}
${XTC}${XOP} ${prefix}bugv3✓ ${feat("bugv3")? yes :no}
${XTC}${XOP} ${prefix}bugv4✓ ${feat("bugv4")? yes :no}
${XTC}${XOP} ${prefix}bugv5✓ ${feat("bugv5")? yes :no}
${XTC}${XOP} ${prefix}bugv6✓ ${feat("bugv6")? yes :no}
${XTC}${XOP} ${prefix}bugv7✓ ${feat("bugv7")? yes :no}
${XTC}${XOP} ${prefix}bugv8✓ ${feat("bugv8")? yes :no}
${XTC}${XOP} ${prefix}bugv9✓ ${feat("bugv9")? yes :no}
${XTC}${XOP} ${prefix}bugv10✓ ${feat("bugv10")? yes :no}
${XTC}${XOP} ${prefix}bugv11✓ ${feat("bugv11")? yes :no}
${XTC}${XOP} ${prefix}bugv12✓ ${feat("bugv12")? yes :no}
${XTC}${XOP} ${prefix}bugv13✓ ${feat("bugv13")? yes :no}
${XTC}${XOP} ${prefix}bugv14✓ ${feat("bugv14")? yes :no}
${XTC}${XOP} ${prefix}bugv15✓ ${feat("bugv15")? yes :no}
${XTC}${XOP} ${prefix}bugv16✓ ${feat("bugv16")? yes :no}
${XTC}${XOP} ${prefix}buggifv1✓ ${feat("buggifv1")? yes :no}
${XTC}${XOP} ${prefix}buggifv2✓ ${feat("buggifv2")? yes :no}
${XTC}${XOP} ${prefix}buggifv3✓ ${feat("buggifv3")? yes :no}
${XTC}${XOP} ${prefix}buggifv4✓ ${feat("buggifv4")? yes :no}
${XTC}${XOP} ${prefix}buggifv5✓ ${feat("buggifv5")? yes :no}
${XTC}${XOP} ${prefix}virgamv1✓ ${feat("virgamv1")? yes :no}
${XTC}${XOP} ${prefix}virgamv2✓ ${feat("virgamv2")? yes :no}
${XTC}${XOP} ${prefix}virgamv3✓ ${feat("virgamv3")? yes :no}
${XTC}${XOP} ${prefix}virgamv4✓ ${feat("virgamv4")? yes :no}
${XTC}${XOP} ${prefix}virgamv5✓ ${feat("virgamv5")? yes :no}   
${XTC}${XOP} ${prefix}bugvnv1✓ ${feat("bugvnv1")? yes :no}
${XTC}${XOP} ${prefix}bugvnv2✓ ${feat("bugvnv2")? yes :no}
${XTC}${XOP} ${prefix}bugvnv3✓ ${feat("bugvnv3")? yes :no}
${XTC}${XOP} ${prefix}bugvnv4✓ ${feat("bugvnv4")? yes :no}
${XTC}${XOP} ${prefix}bugvnv5✓ ${feat("bugvnv5")? yes :no}
${XTC}${XOP} ${prefix}bugstickv1✓ ${feat("bugstickv1")? yes :no}
${XTC}${XOP} ${prefix}bugstickv2✓ ${feat("bugstickv2")? yes :no}
${XTC}${XOP} ${prefix}bugstickv3✓ ${feat("bugstickv3")? yes :no}
${XTC}${XOP} ${prefix}bugstickv4✓ ${feat("bugstickv4")? yes :no}
${XTC}${XOP} ${prefix}bugstickv5✓ ${feat("bugstickv5")? yes :no}
${XTC}${XOP} ${prefix}bugkatalogv1✓ ${feat("bugkatalogv1")? yes :no}
${XTC}${XOP} ${prefix}bugkatalogv2✓ ${feat("bugkatalogv2")? yes :no}
${XTC}${XOP} ${prefix}bugkatalogv3✓ ${feat("bugkatalogv3")? yes :no}
${XTC}${XOP} ${prefix}bugkatalogv4✓ ${feat("bugkatalogv4")? yes :no}
${XTC}${XOP} ${prefix}bugvk✓ ${feat("bugvk")? yes :no}
${XTC}${XOP} ${prefix}bugzip✓ ${feat("bugzip")? yes :no}
${XTC}${XOP} ${prefix}buggas✓ ${feat("buggas")? yes :no}
${XTC}${XOP} ${prefix}bugpdf✓ ${feat("bugpdf")? yes :no}
${XTC}${XOP} ${prefix}bugxlsx✓ ${feat("bugxlsx")? yes :no}
${XTC}${XOP} ${prefix}bugpptx✓ ${feat("bugpptx")? yes :no}
${XTC}${XOP} ${prefix}bugdocx✓ ${feat("bugdocx")? yes :no}
${XTC}${XOP} ${prefix}bugsilver✓ ${feat("bugsilver")? yes :no}
${XTC}${XOP} ${prefix}bugcleitin✓ ${feat("bugcleitin")? yes :no}
${XTC}${XOP} ${prefix}bugsunshine✓ ${feat("bugsunshine")? yes :no}
${XTC}${XOP} ${prefix}bugmamaco✓ ${feat("bugmamaco")? yes :no}
${XTC}${XOP} ${prefix}bugvideov1✓ ${feat("bugvideov1")? yes :no}
${XTC}${XOP} ${prefix}bugvideov2✓ ${feat("bugvideov2")? yes :no}
${XTC}${XOP} ${prefix}bugvideov3✓ ${feat("bugvideov3")? yes :no}
${XTC}${XOP} ${prefix}bugvideov4✓ ${feat("bugvideov4")? yes :no}
${XTC}${XOP} ${prefix}bugvideov5✓ ${feat("bugvideov5")? yes :no}
${XTC}${XOP} ${prefix}bugbuttonv1✓ ${feat("bugbuttonv1")? yes :no}
${XTC}${XOP} ${prefix}bugbuttonv2✓ ${feat("bugbuttonv2")? yes :no}
${XTC}${XOP} ${prefix}bugbuttonv3✓ ${feat("bugbuttonv3")? yes :no}
${XTC}${XOP} ${prefix}jadibugstick✓ ${feat("jadibugstick")? yes :no}
${XTC}${XOP} ${prefix}bugpc✓ ${feat("bugpc")? yes :no}
${XTC}${XOP} ${prefix}buggc✓ ${feat("buggc")? yes :no}
${XTC}${XOP} ${prefix}bugfc✓ ${feat("bugfc")? yes :no}
${XTC}
${XM2}${XBC}
   
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
