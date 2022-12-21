
export default class ValidarCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    gerarNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidarCPF.gerarDigito(cpfSemDigitos);
        const digito2 = ValidarCPF.gerarDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static gerarDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    éSequencia() {
        return this.cpfLimpo.charAt(0).replace(11) === this.cpfLimpo;
    }

    valida() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.éSequencia()) return false;
        this.gerarNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }

}

let validaCPF = new ValidarCPF('140.279.197-69');
validaCPF.valida()