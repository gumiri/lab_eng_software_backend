const firebird = require('node-firebird');
const options = require('../../config/firebirdConf');

function gCliente(timestamp, timelimit, callback) {
    firebird.attach(options.brysaflex, function (err, db) {
        if (err) {
            callback(err, []);
        }
        else {
            db.query(`
                select r.*, 'BRYSAFLEX' AS FILIAL from GCLIENTE r
                where dtcadastro > ' ` + timestamp + `' and dtcadastro < '`+ timelimit +`'
            `,
                function (err, result) {
                    db.detach();

                    if(err){
                        callback(err,[]);
                    }
                    else{
                        callback(undefined,result);
                    }
                });
        }
    });
}


module.exports = gCliente;