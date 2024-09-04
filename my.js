    // Código para a Classe Retangulo
class Retangulo {
    constructor(largura = 0, altura = 0) {
        this.largura = largura;
        this.altura = altura;
        this.atualizarTela();
    }

    setAltura(altura) {
        this.altura = altura;
        this.atualizarTela();
    }

    setLargura(largura) {
        this.largura = largura;
        this.atualizarTela();
    }

    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }

    calcularArea() {
        return this.largura * this.altura;
    }

    ehQuadrado() {
        return this.largura === this.altura;
    }

    atualizarTela() {
        document.getElementById('perimetro').textContent = `Perímetro: ${this.calcularPerimetro()}`;
        document.getElementById('area').textContent = `Área: ${this.calcularArea()}`;
        document.getElementById('eh-quadrado').textContent = `É um quadrado? ${this.ehQuadrado() ? 'Sim' : 'Não'}`;
    }
}

// Instância global do Retangulo
const retangulo = new Retangulo();

// Função para atualizar o retângulo com base na entrada do usuário
function atualizarRetangulo() {
    const largura = parseFloat(document.getElementById('input-largura').value) || 0;
    const altura = parseFloat(document.getElementById('input-altura').value) || 0;
    retangulo.setLargura(largura);
    retangulo.setAltura(altura);
}

// Código para a Classe Calculadora
class Calculadora {
    constructor() {
        this.resultado = 0;
        this.operacoes = [];
        this.atualizarTela();
    }

    soma(valor) {
        this.operacao((a, b) => a + b, valor);
    }

    subtracao(valor) {
        this.operacao((a, b) => a - b, valor);
    }

    multiplicacao(valor) {
        this.operacao((a, b) => a * b, valor);
    }

    divisao(valor) {
        if (valor === 0) {
            console.error('Divisão por zero não permitida');
            return;
        }
        this.operacao((a, b) => a / b, valor);
    }

    potencia(valor) {
        this.operacao((a, b) => Math.pow(a, b), valor);
    }

    porcentagem(valor) {
        this.operacao((a, b) => a * (b / 100), valor);
    }

    raizQuadrada() {
        this.resultado = Math.sqrt(this.resultado);
        this.operacoes.push(this.resultado);
        this.atualizarTela();
    }

    zerar() {
        this.resultado = 0;
        this.operacoes = [];
        this.atualizarTela();
    }

    desfazer() {
        if (this.operacoes.length > 0) {
            this.resultado = this.operacoes.pop();
            this.atualizarTela();
        }
    }

    operacao(funcao, valor) {
        this.operacoes.push(this.resultado);
        this.resultado = funcao(this.resultado, valor);
        this.atualizarTela();
    }

    obterResultado() {
        return this.resultado;
    }

    atualizarTela() {
        document.getElementById('resultado').textContent = `Resultado: ${this.obterResultado()}`;
    }
}

// Instância global da Calculadora
const calculadora = new Calculadora();

// Função para realizar uma operação com base na entrada do usuário
function operar(operacao) {
    const valor = parseFloat(document.getElementById('input-valor').value) || 0;
    switch (operacao) {
        case 'soma':
            calculadora.soma(valor);
            break;
        case 'subtracao':
            calculadora.subtracao(valor);
            break;
        case 'multiplicacao':
            calculadora.multiplicacao(valor);
            break;
        case 'divisao':
            calculadora.divisao(valor);
            break;
        case 'potencia':
            calculadora.potencia(valor);
            break;
        case 'porcentagem':
            calculadora.porcentagem(valor);
            break;
    }
}

// Funções para operações adicionais
function raizQuadrada() {
    calculadora.raizQuadrada();
}

function zerar() {
    calculadora.zerar();
}

function desfazer() {
    calculadora.desfazer();
}
