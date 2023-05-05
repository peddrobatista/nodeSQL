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
    var nome = "Bruna";
    var endereco = "Fortaleza";
    // Inserindo dados 
    var sql = `INSERT INTO clientes (nome, endereco) VALUES ('${nome}', '${endereco}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Um registro inserido!");
    });
});