const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());  
app.use(bodyParser.json());

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root', 
  password: 'KiranM786@#', 
  database: 'club_hub',
  port: '3306' 
});



app.listen(5050, () => {
  console.log('Server is running on port 5050');
});
