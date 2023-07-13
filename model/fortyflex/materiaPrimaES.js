const dbAccess = require('../dbAccess/dbAccess');
const options = require('../../config/firebirdConf');
const db = options.fortyflex;

async function getEntradaSaida(dt1, dt2) {
    try {
        r = await dbAccess(`
        SELECT r.CODI, r.FIL, r.MV, r.ST, r.CODIALMO, a.DES, a.GRU1, r.CODILOTE, r.CODILOCA, r.DTMOV,
        r.DTDOC, r.NRPED, r.CODIPEDITE, r.CODINFENT, r.CODINFSAI, r.CODIAJU,
        r.CODIMPREQ, r.SERIE, r.NRDOC, r.CODIFOR, r.CODICLI, r.QT, r.VLR, r.VIPI,
        r.VICM, r.CODIPPOPFAB, r.UNI, r.CODIPAPEDITEKIT, r.CODIFTNFITEKIT, r.CODIOB,
        r.CODIOBMATENV, r.VCUSTO, r.TPES, r.HR, r.USU, r.PROGRAMA, r.CODIFTOBMATRET,
        r.VACREINV, r.VCUSMED, r.VCUSMEDUNI, r.CODIPEDVARITE, r.SALDOUNI1,
        r.CODIPAPEDVARITEKIT, r.CODIMPINVEITE, r.SALDOLOTEUNI1, r.CUSTO, r.CUSTOUNI,
        r.CODIFTNFITENT_PROD
        FROM MPKARDEX r
        inner join MPALMO a on (a.CODI = r.CODIALMO)
        where a.GRU1 = 14 and (r.DTMOV >= '${dt1}' and r.DTMOV <= '${dt2}')
        order by r.DTMOV desc
        `, db);
        return r;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = { getEntradaSaida };