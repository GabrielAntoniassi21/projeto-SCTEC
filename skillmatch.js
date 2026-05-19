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

const candidato = {
    nome: "João Silva",
    area: "Front-End",
    habilidades: ["JavaScroipt", "GitHub", "Logica de Programação", "KanBan"],
    experienciaMeses: 3
};

vagas = [
    {
        id: 1,
        empresa: "Tech Start",
        cargo: "Desenvolvedor Front-End Junior",
        requisitos: ["JavaScript", "GitHub", "Logica de Programação"],
        salario: 2800,
        modalidade: "Remoto"
    },
    {
        id: 2,
        empresa: "CodeLab",
        cargo: "Estagiário Front-End",
        requisitos: ["JavaScript", "Kanban", "GitHub"],
        salario: 1800,
        modalidade: "Hibrido"
    },
    {
        id: 3,
        empresa: "WebSolutions",
        cargo: "Programador JavaScript Junior",
        requisitos: ["JavaScript", "Arrays", "Objetos", "Funções"],
        salario: 3000,
        modalidade: "Presencial"}

];