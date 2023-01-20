var mysql = require('mysql');

// Criando uma conexão

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");
    // Criando banco de dados
    con.query("CREATE DATABASE nodedb", function (err, result) {
        if (err) throw err;
        console.log("Banco de dados criado!");
    });
});