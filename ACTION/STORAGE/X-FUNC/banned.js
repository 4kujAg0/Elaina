const fs = require('fs')



/**
 * Add user to bannedList database
 * @param {String} userId
 * @param {String} expired
 * @param {Object} _data
 */
 const addBanned = (pushname, calender, input, _data) => {
    let success = false

    const obj = { name: pushname, id: input, date: calender }
    
    _data.push(obj)
    fs.writeFileSync('./ACTION/STORAGE/X-DATA/banned.json', JSON.stringify(_data))
}
/**
 * Unbanned someone.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
 const unBanned = (input, _data) => {
    let position = null
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === input) {
            position = i
        }
    })
    if (position !== null) {
        _data.splice(position, 1)
        fs.writeFileSync('./ACTION/STORAGE/X-DATA/banned.json', JSON.stringify(_data))
    }
    return true
}


const cekBannedUser = (sender) => {
let ban = fs.readFileSync('./ACTION/STORAGE/X-DATA/banned.json')
let status = false
Object.keys(ban).forEach((i) => {
if (ban[i].id === sender) {
status = true
}
})
return status
}



/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
 

const clearAllBan = (_dir) => {
    Object.keys(_dir).forEach((i) => {
        _dir.splice(_dir[i], 1)
        fs.writeFileSync('./ACTION/STORAGE/X-DATA/banned.json', JSON.stringify(_dir))
    })
console.log("Sukses clear all ban")
}

module.exports = {
    addBanned,
    unBanned,
    cekBannedUser,
    clearAllBan
    
}