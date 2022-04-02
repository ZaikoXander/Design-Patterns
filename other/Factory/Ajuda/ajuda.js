import licao from './ajudas/licao.js';
import louca from './ajudas/louca.js';
import tirarFoto from './ajudas/tirarfoto.js';

/* function createAjuda() {
    let object = {};
    object.licao = licao;
    object.louca = louca;
    object.tirarfoto = tirarFoto;
    return object;
} */

class createAjuda {
    constructor() {
        this.licao = licao;
        this.louca = louca;
        this.tirarfoto = tirarFoto;
    }
}

export default createAjuda;