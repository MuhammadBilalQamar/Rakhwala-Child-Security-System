const mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 100, //important
  host: "localhost",
  user: "root",
  password: "",
  database: "rakhwala",
  debug: false
});


let sql = {
  insertQuery: (tableName, values, cb) => {
    let iQ = `INSERT into ${tableName} (${Object.keys(values)}) VALUES (${Object.values(values).map(val => { return "'" + val + "'" })}) `;
    pool.query(iQ, (e, result) => {
      cb(result)
    })
  },
  updateQuery: (tableName, id, values, cb) => {
    let uQ = `
    UPDATE ${tableName} SET ${Object.keys(values).map((key, i) => { return key + "=" + "'" + Object.values(values)[i] + "'" })}  
    WHERE(id='${id}') `;
    pool.query(uQ, (e, res) => {
      if (e) { console.log(e) }
      // console.log(res)
      cb(res);
    })
  },
  deleteQuery: (tableName, id, cb) => {
    let dQ = `DELETE from ${tableName}  WHERE(id='${id}')`;
    pool.query(dQ, (e, res) => {
      if (e) { console.log(e) }
      cb(res)
    })
  },
  selectQuery: (tableName, obj, cb) => {
    // console.log(obj)
    let sQ = `Select * from ${tableName}  WHERE(email='${obj.email}' AND password='${obj.password}' )`;
    pool.query(sQ, (e, res, field) => {
      if (e) { console.log(e) }
      cb(res)
    })
  },
  selectByEmail: (tableName, email, cb) => {
    // console.log(obj)
    let sQ = `Select * from ${tableName}  WHERE(email='${email}' )`;
    pool.query(sQ, (e, res, field) => {
      if (e) { console.log(e) }
      cb(res)
    })
  },
  selectByWatchKey: (tableName, watchKey, cb) => {
    // console.log(obj)
    let sQ = `Select * from ${tableName}  WHERE(watchKey='${watchKey}' )`;
    pool.query(sQ, (e, res, field) => {
      if (e) { console.log(e) }
      cb(res)
    })
  },
  updateByWatchKey: (tableName, watchKey, values, cb) => {
    let uQ = `
    UPDATE ${tableName} SET ${Object.keys(values).map((key, i) => { return key + "=" + "'" + Object.values(values)[i] + "'" })}  
    WHERE(watchKey='${watchKey}') `;
    pool.query(uQ, (e, res) => {
      if (e) { console.log(e) }
      // console.log(res)
      cb(res);
    })
  },


}


module.exports = { sql };

// DELIMITER $$
// CREATE PROCEDURE insertUser(IN userName NVARCHAR(50), IN userEmail NVARCHAR(100))
// BEGIN
// INSERT INTO users (userName,userEmail) VALUES(userName,userEmail);
// END$$


// const connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-02.cleardb.net",
//   user: "b72aa3e9a07e1a",
//   password: "4978fe37",
//   database: "heroku_6ad762131da1812"
// });


// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "rakhwala"
// });








