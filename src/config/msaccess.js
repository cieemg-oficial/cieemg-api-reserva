require('dotenv/config')
const adodb = require('node-adodb')

const msaccess = adodb.open(process.env.db_msacces);

module.exports = msaccess;