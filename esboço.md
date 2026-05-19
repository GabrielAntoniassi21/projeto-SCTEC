1. Planejar estrutura dos dados
2. Criar classe Candidato
3. Criar classe Vaga
4. Criar herança (VagaFrontEndJunior)
5. Criar candidato e 3 vagas
6. Fazer cálculo de compatibilidade
7. Fazer classificação
8. Aplicar métodos de array
9. Adicionar callback
10. Adicionar closure
11. Adicionar Promise + async/await
12. Organizar console.log e saída
13. README e GitHub


const candiadto = {
    nome: "João Silva",
    area: "Front-End",
    habilidades: ["JavaScript", "GitHub", "ógica de Programação", "KanBan"],
    experienciaMeses: 3
}

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
        salario: 1800
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


compatibilidade = quantidade de requisitos atendidos / quantidade total de requisitos da vaga * 100 (80% a 100% = alta compatibilidade, 50% a 79% = média compatibilidade, abaixo de 50% = baixa compatibilidade)

2. classe Candidato {
    constructor(nome, area, habilidades, experienciaMeses) {
        this.nome = nome;
        this.area = area;
        this.habilidades = habilidades;
        this.experienciaMeses = experienciaMeses;
    }
}

3. classe Vaga {
    constructor(id, empresa, cargo, requisitos, salario) {
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
    }
}

4. classe VagaFrontEndJunior extends Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modalidade) {
        super(id, empresa, cargo, requisitos, salario);
        this.modalidade = modalidade;
    }
}

criar objetos

5. novoCandidato = new Candidato("João Silva", "Front-End", ["JavaScroipt", "GitHub", "Logica de Programação", "KanBan"], 3);

5. nova Vaga1 = new VagaFrontEndJunior(1, "Tech Start", "Desenvolvedor Front-End Junior", ["JavaScript", "GitHub", "Logica de Programação"], 2800, "Remoto");
5. nova Vaga2 = new VagaFrontEndJunior(2, "CodeLab", "Estagiário Front-End", ["JavaScript", "Kanban", "GitHub"], 1800, "Hibrido");
5. nova Vaga3 = new VagaFrontEndJunior(3, "WebSolutions", "Programador JavaScript Junior", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial");

6. fazer compatibilidade

para cada vaga = 1 verificar quais habilidades do candidato existem nos requisitos
2 contar matches
3 calcular percentual de compatibilidade
4 listrar habilidades faltantes
5 classificar compatibilidade

ex:
cadidato:
HTML, CSS, JS

vaga: 
HTML, CSS, JS, React

bateu: 3 
faltou: React
percentual: 3/4 * 100 = 75% 

7. gerar compatibilidade:
>= 80% = alta compatibilidade
>= 50% = média compatibilidade
< 50% = baixa compatibilidade

8. método array

vaga -> relatorio da vaga

filter -> habilidades faltantes

reduce -> encontrar maior compatibilidade

9. calcularCompatibilidade(vaga, callback) callback recebe o resultado

10. fazer closure

função para guardar histórico de recomendação ou contador de analises

contadoCompatibilidade()

toda vez que chamar = Analise 1
Analise 2
Analise 3

11. no final fazer o promise + async await

buscarVagas() -> simula busca de vagas com delay

await buscarVagas() -> obter vagas e depois calcular compatibilidade

