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
    var nome = "Daniel";
    var endereco = "Fortaleza";
    // Inserindo dados 
    var sql = `UPDATE clientes SET nome = '${nome}', endereco = '${endereco}' WHERE `;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Um registro atualizado!");
    });
});