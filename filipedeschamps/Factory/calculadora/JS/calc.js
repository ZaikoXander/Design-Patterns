import createSomar from './operacoes/somar.js';
import createSubtrair from './operacoes/subtrair.js';
import createMultiplicar from './operacoes/multiplicar.js';
import createDividir from './operacoes/dividir.js';

function createCalc(configurations = {}) {
    const somar = configurations.somar || createSomar;
    const subtrair = configurations.subtrair || createSubtrair;
    const multiplicar =  configurations.multiplicar || createMultiplicar;
    const dividir = configurations.dividir || createDividir;

    return {
        somar,
        subtrair,
        multiplicar,
        dividir
    }
}

export default createCalc;