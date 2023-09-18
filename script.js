function calcular(acao, valor) {
    var visor = document.getElementById('resultado');

    if (acao === 'acao') {
        if (valor === 'c') {
            visor.value = '';
        } else if (valor === '=') {
            try {
                visor.value = eval(visor.value);
            } catch (error) {
                visor.value = 'Erro';
            }
        } else {

            visor.value += valor;
        }
    }
}



