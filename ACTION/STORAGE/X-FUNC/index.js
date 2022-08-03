const fs = require('fs');

const tebakkimia = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/tebakkimia.json');
const asahotak = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/asahotak.json');
const susunkata = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/susunkata.json');
const tebakkalimat = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/tebakkalimat.json');
const tekateki = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/tekateki.json');
const caklontong = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/caklontong.json');
const tebakbendera = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/tebakbendera.json');
const tebakanime = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/tebakanime.json');
const tebakkabupaten = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/tebakkabupaten.json');
const tebaklagu = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/tebaklagu.json');
const tebaklirik = fs.readFileSync('./ACTION/STORAGE/X-DATA/RESULTS/tebaklirik.json');
module.exports = { tebakkimia, asahotak, susunkata, tebakkalimat, tekateki, caklontong, tebakbendera, tebakanime, tebakkabupaten, tebaklagu, tebaklirik }
