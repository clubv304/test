const mysql = require('mysql2/promise');

const connection = mysql.createPool({
     host: 'mysql5049.site4now.net',
     user: 'aa740b_testde',
     password: 'Abhi@12345',
     database: 'db_aa740b_testde'
});
   // "start": "pm2 start src/server.js"

export default connection;