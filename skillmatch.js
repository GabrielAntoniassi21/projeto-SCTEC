class Candidato {
    constructor(nome, area, habilidades, experienciaMeses) {
        this.nome = nome;
        this.area = area;
        this.habilidades = habilidades;
        this.experienciaMeses = experienciaMeses;
    }
}

class Vaga {
    constructor(id, empresa, cargo, requisitos, salario) {
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
    }
}

class VagaFrontEndJunior extends Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modalidade) {
        super(id, empresa, cargo, requisitos, salario);
        this.modalidade = modalidade;
    }
}

const candidato1 = new Candidato("João Silva", "Front-End", ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"], 3);

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

function calcularMatch(candidato, vaga) {
    const habilidadesCandidato = new Set(candidato.habilidades);
    const requisitosVaga = vaga.requisitos;

    let matches = 0;
    let faltantes = [];

    for (const requisito of requisitosVaga) {

        if (habilidadesCandidato.has(requisito)) {
            matches++;
        } else {
            faltantes.push(requisito);
        }
    }

    const percentual = (matches / requisitosVaga.length) * 100;

    let classificacao;

    if (percentual >= 80) {
        classificacao = "Alta";
    } else if (percentual >= 50) {
        classificacao = "Média";
    } else {
        classificacao = "Baixa";
    }

    return {
        percentual: percentual,
        matches: matches,
        faltantes: faltantes,
        classificacao: classificacao
    };
}

function MelhoresVagas(candidato, vagas) {

    const vagasComMatch = vagas.map(vaga => {

        const resultado = calcularMatch(candidato, vaga);

        return {
            empresa: vaga.empresa,
            cargo: vaga.cargo,
            modalidade: vaga.modalidade,
            percentual: resultado.percentual,
            classificacao: resultado.classificacao,
            faltantes: resultado.faltantes
        };
    });

    return vagasComMatch.sort((a, b) => b.percentual - a.percentual);
}
const recomendacoesEstudo = {
    "JavaScript": "Praticar funções, arrays e objetos.",
    "GitHub": "Aprender versionamento, commits e branches.",
    "Kanban": "Estudar metodologias ágeis e organização de tarefas.",
    "Lógica de Programação": "Resolver exercícios de lógica e algoritmos.",
    "Arrays": "Praticar métodos como map, filter e reduce.",
    "Objetos": "Treinar criação e manipulação de objetos em JavaScript.",
    "Funções": "Estudar funções normais, arrow functions e callbacks."
};

const vagasOrdenadas = MelhoresVagas(candidato1, vagas);

    console.log("===== Vagas Compatíveis =====");

    vagasOrdenadas.forEach((vaga, index) => {

       console.log(`
        ${index + 1}° Lugar - ${vaga.empresa}
        Cargo: ${vaga.cargo}
        Modalidade: ${vaga.modalidade}
        Compatibilidade: ${vaga.percentual.toFixed(2)}%
        Classificação: ${vaga.classificacao}
        Habilidades faltantes: ${
            vaga.faltantes.length > 0
                ? vaga.faltantes.join(", ")
                : "Nenhuma"
            }
        Recomendação de estudos: ${vaga.faltantes.length > 0
                ? vaga.faltantes.map(habilidade => recomendacoesEstudo[habilidade]).join("\n        ")
                : "Nenhuma"
            }
    `);
});