const dbAccess = require('../dbAccess/dbAccess');
const options = require('../../config/firebirdConf');
const db = options.brysaflex;

async function getClientes(date) {
    try {
        r = await dbAccess(`select r.CODIGO, r.CONTABIL, r.NOME, r.FANTASIA, r.PESSOA, r.CNPJCPF, r.CPFSEQ, r.IEIP, r.RG, r.DTCADASTRO, r.ENDERECO, r.NR, r.COMP, r.BAIRRO, r.MUN, r.CEP, r.UF, r.CP, r.PAIS, r.COBEND, r.COBNR, r.COBCOMP, r.COBBAI, r.COBMUN, r.COBCEP, r.COBUF, r.COBCP, r.COBCNPJ, r.COBIE, r.HOMEPAGE, r.OBS, r.CODIB, r.CODIP, r.CODIN, r.CODIMNF, r.SUFRAMA, r.SITU, r.LIMCRED, r.ST, r.DIAPAG, r.FLUXOCAIXA, r.DTUC, r.VUC, r.DTPC, r.VPC, r.DTMC, r.VMC, r.ZF, r.DTALTERACAO, r.PCOMI, r.ATU, r.ATRADIAS, r.ATRAVLR, r.DESCCONDICIONAL, r.TIPOFRETE, r.CODIR, r.CODIVI, r.CODIT, r.GRU1, r.GRU2, r.GRU3, r.DTANI, r.CODIP1, r.CODIP2, r.ICM, r.RURAL, r.COD_TEMP, r.OBSFAT, r.DIA1, r.DIA2, r.DIA3, r.FORMAPAG, r.TPICM, r.PRODUTOR, r.IP, r.SER_PISALI, r.SER_COFIALI, r.SER_CSALI, r.SER_ISSALI, r.SER_GATILHO, r.SER_IRNAO, r.SER_INSSNAO, r.SER_ISS, r.CCM, r.CODIGRUREC, r.PRIORI, r.SUMPARCONT, r.OPTSIMP, r.CODITBLDESC, r.COBPESSOA, r.SUMPARCONT_NFRPS, r.PERCDESCOMER, r.COBEMAIL, r.TPLIMCRED, r.PDESINC, r.CODINSTR1, r.CODINSTR2, r.ALTERN, r.STATENDSERV, r.OBSATENDSERV, r.VLRTITABERT, r.QTTITABERTOS, r.QTTITABERTVEN, r.QTTITABERTAVEN, r.MEDATRASO, r.MAIORATRASO, r.TPENVCOB, r.CLASSE, r.INSTR1, r.INSTR2, r.INSTR3, r.INSTR4, r.INSTR5, r.RESP_NOME, r.RESP_CPF, r.RESP_RG, r.CODIINDICACAO, r.CTRECAB, r.SALDODISPO, r.CODIVE, r.COMIVE, r.SER_COFINS, r.SER_COFINSRET, r.SER_INSS, r.SER_INSSALI, r.SER_INSSDEDU, r.SER_VINSSDEDU, r.SER_INSSRET, r.SER_CSLL, r.SER_CSLLRET, r.SER_IR, r.SER_IRALI, r.SER_IRRET, r.SER_ISSDEDU, r.SER_ISSRET, r.SER_VISSDEDU, r.SER_PIS, r.SER_PISRET, r.DIASEMANA, r.FIADOR_NOME, r.FIADOR_CNPJ_CPF, r.FIADOR_PESSOA, r.CONHE_ICM_COMPOE_BASE, r.ENVSERASA, r.SER_REG_ESPE, r.VLRPEDABERT, r.QTPEDABERTOS, r.ISENIPI, r.CNAE, r.PCARGAMEDIA, r.CALCREV, r.CODIGRUCLIROTA, r.PRIORIDADE_ALOROMAN, r.REENTREGA_ALOROMAN, r.PERCATEND_ALOROMAN, r.VALMINIMA_ALOROMAN, r.CODIGRUCLITRIB, r.DATAHORA, r.BLOQEXPAUT, r.SER_RETPISALI, r.SER_RETCOFINSALI, r.CONCEITO, r.CODIGRUESTDIFAL, 'BRYSAFLEX' as FILIAL from gcliente as r where dtcadastro > '${date}'`, db);
        return r;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

async function getClientesLenth() {
    try {
        let len = await dbAccess(`select count(*) from gcliente`, db);
        return len[0].COUNT;
    }
    catch (e) {
        console.log(e);
        return false;
    }

}
async function getClientesLenthDate(date) {
    try {
        let len = await dbAccess(`select count(*) from gcliente where dtcadastro > '${date}'`, db);
        return len[0].COUNT;
    }
    catch (e) {
        return false;
    }
}


module.exports = { getClientes, getClientesLenth, getClientesLenthDate };