class candidato {
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

const candidato1 = new candidato("João Silva", "Front-End", ["JavaScript", "GitHub", "Logica de Programação", "KanBan"], 3);

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

    for (const requisito of requisitosVaga) {
        if (habilidadesCandidato.has(requisito)) {
            matches++;
        }
    }

    return (matches / requisitosVaga.length) * 100;
}

function MelhoresVagas(candidato, vagas) {
    const vagasComMatch = vagas.map(vaga => {
        return {
            vaga: vaga,
            match: calcularMatch(candidato, vaga)
        };
    });
    return vagasComMatch.sort((a, b) => b.match - a.match);
}

const vagasOrdenadas = MelhoresVagas(candidato1, vagas);
console.log("Vagas ordenadas por match:");
vagasOrdenadas.forEach(v => {
    console.log(`Empresa: ${v.vaga.empresa}, Cargo: ${v.vaga.cargo}, Match: ${v.match.toFixed(2)}%`);
});