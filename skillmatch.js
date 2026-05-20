// Criação da classe do candidato, com todos os parâmetros do constructor que irão receber valores posteriormente quando o objeto for criado
class Candidato {
    constructor(nome, area, habilidades, experienciaMeses) {
        this.nome = nome;
        this.area = area;
        this.habilidades = habilidades;
        this.experienciaMeses = experienciaMeses;
    }

    // Método de classe responsável por calcular a porcentagem
    // de compatibilidade entre as habilidades do candidato e os requisitos da vaga.
    calcularCompatibilidade(vaga) {
        const habilidadesComuns = this.habilidades.filter(
            habilidade => vaga.requisitos.includes(habilidade)
        );

        return {
            compatibilidade:
                (habilidadesComuns.length / vaga.requisitos.length) * 100,

            habilidadesEncontradas: habilidadesComuns,

            habilidadesFaltantes:
                vaga.requisitos.filter(
                    requisito =>
                        !this.habilidades.includes(requisito)
                )
        };
    }
    // Método responsável por exibir um resumo das características do candidato.
    exibirResumo() {
    return `${this.nome} possui ${this.experienciaMeses} meses de experiência na área ${this.area}.`;
}
}
// Classe base responsável por armazenar os atributos comuns de todas as futuras extensões de vaga.
class Vaga {
    constructor(id, empresa, cargo, requisitos, salario) {
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
    }
}
// Classe que estende a classe Vaga, adicionando a característica de modalidade da vaga.
class VagaFrontEndJunior extends Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modalidade) {
        super(id, empresa, cargo, requisitos, salario);
        this.modalidade = modalidade;
    }
}
const candidato1 = new Candidato(
    "João Silva",
    "Front-End",
    ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
    3
);
const vagas = [
    new VagaFrontEndJunior(
        1,
        "Tech Start",
        "Desenvolvedor Front-End Junior",
        ["JavaScript", "GitHub", "Lógica de Programação"],
        2800,
        "Remoto"
    ),
    new VagaFrontEndJunior(
        2,
        "CodeLab",
        "Estagiário Front-End",
        ["JavaScript", "Kanban", "GitHub"],
        1800,
        "Híbrido"
    ),
    new VagaFrontEndJunior(
        3,
        "WebSolutions",
        "Programador JavaScript Junior",
        ["JavaScript", "Arrays", "Objetos", "Funções"],
        3000,
        "Presencial"
    )
];
// Closure utilizada para manter um contador privado da numeração das vagas analisadas.
function criarContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    };
}
const proximaVaga = criarContador();
// Promise responsável por simular o tempo de organização das vagas.
function organizarVagas() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve();
        }, 2000);
    });
}
// Função assíncrona responsável por exibir o ranking das vagas após o tempo de organização.
async function mostrarRanking() {
    console.log(
        "Organizando vagas por compatibilidade..."
    );
    await organizarVagas();
    console.log(
        "Vagas organizadas!"
    );
    console.log(candidato1.exibirResumo());
    console.log(`Compatibilidade do candidato ${candidato1.nome} com as vagas:
--------------------------------------------------`);
    // Percorre todas as vagas disponíveis para análise
    vagas.forEach(vaga => {
        console.log(
            `Análise da vaga #${proximaVaga()}`
        );
        const resultado =
            candidato1.calcularCompatibilidade(vaga);
        console.log(`Vaga: ${vaga.cargo}`);
        // Mostra a porcentagem obtida na vaga
        console.log(
            `Compatibilidade: ${resultado.compatibilidade.toFixed(2)}%`
        );
        // Verifica se o candidato atende todos os requisitos da vaga
        if (
            vaga.requisitos.every(requisito =>
                candidato1.habilidades.includes(requisito)
            )
        ) {
            console.log(
                "Você cumpre todos os requisitos da vaga."
            );
        } else {
            console.log(
                `Habilidades faltantes: ${resultado.habilidadesFaltantes.join(", ")}`
            );
        }
        // Serão mostradas as habilidades encontradas
        console.log(
            `Habilidades encontradas: ${resultado.habilidadesEncontradas.join(", ")}`
        );
        // Método utilizado para formatar o salário no padrão monetário brasileiro (Real - BRL)
        console.log(
            `Salário: ${
                vaga.salario.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })
            }`
        );
        console.log(`Modalidade: ${vaga.modalidade}`);
        console.log(`Empresa: ${vaga.empresa}`);
        // Classificação da compatibilidade
        if (resultado.compatibilidade >= 80) {
            console.log(
                "Classificação: Alta Compatibilidade"
            );
        } else if (resultado.compatibilidade >= 50) {
            console.log(
                "Classificação: Média Compatibilidade"
            );
        } else {
            console.log(
                "Classificação: Baixa Compatibilidade"
            );
        }
        console.log(
            "--------------------------------------------------"
        );
    });
    // Método reduce utilizado para encontrar a vaga com maior compatibilidade.
    const melhorVaga = vagas.reduce((melhor, atual) => {
        const compatibilidadeAtual =
            candidato1.calcularCompatibilidade(atual)
                .compatibilidade;
        const compatibilidadeMelhor =
            candidato1.calcularCompatibilidade(melhor)
                .compatibilidade;
        if (compatibilidadeAtual > compatibilidadeMelhor) {
            return atual;
        }
        return melhor;
    });
    console.log("Melhor vaga encontrada:");
    console.log(
     `Compatibilidade: ${
        candidato1.calcularCompatibilidade(melhorVaga)
        .compatibilidade.toFixed(2)
     }%`
    );
    console.log(`Empresa: ${melhorVaga.empresa}`);
}
mostrarRanking();