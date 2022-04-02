from operacoes.somar import createSomar
from operacoes.subtrair import createSubtrair
from operacoes.multiplicar import createMultiplicar
from operacoes.dividir import createDividir

def createCalc():
    return {
        'somar': createSomar,
        'subtrair': createSubtrair,
        'multiplicar': createMultiplicar,
        'dividir': createDividir
    }
