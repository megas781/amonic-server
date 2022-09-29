const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '185.231.154.107',
  user: 'root',
  password: 'yE98tR72y2M3Ek8P',
  database: 'session5_xx'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()