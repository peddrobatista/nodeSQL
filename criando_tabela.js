var mysql = require('mysql');

// Criando uma conexão

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "CREATE TABLE clientes (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Tabela criada!");
    });
});