import createCalc from "./calc.js";

function createMock() {
    function start() {
        console.log('[mock] ...')
    }

    function stop() {
        console.log('[mock] ...')
    }

    return {
        start,
        stop
    }
}

/* const somarMock = createMock();
const subtrairMock = createMock();

const calc = createCalc({
    somar: somarMock,
    subtrair: subtrairMock
});

try {
    console.log(calc.somar(5, 6));
} catch (error) {
    console.log(calc.dividir(1000, 10));
} */