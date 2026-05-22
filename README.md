# Objetivo do Projeto

O principal objetivo deste projeto não foi apenas desenvolver um código que encontrasse a melhor vaga para um candidato, mas também testar as capacidades dos alunos em diferentes aspectos, como:

- Cumprimento de prazos;
- Organização e realização de tarefas;
- Explicação dos processos do código;
- Aplicação dos conhecimentos adquiridos durante a disciplina.

O projeto tem como foco a criação de um sistema simples capaz de comparar as habilidades de um candidato com os requisitos de diferentes vagas, gerando uma porcentagem de compatibilidade para identificar quais oportunidades melhor se encaixam no perfil do candidato.

Além disso, o sistema também apresenta as habilidades faltantes, permitindo identificar quais conhecimentos poderiam ser desenvolvidos para aumentar a compatibilidade com determinadas vagas.

## Funcionamento do Projeto

O sistema recebe os dados de um candidato, cria diferentes vagas de emprego e realiza uma análise comparativa entre as habilidades do candidato e os requisitos de cada vaga.

Durante a execução, o programa realiza as seguintes etapas:

1. Recebe os dados do candidato;
2. Cria as vagas disponíveis;
3. Calcula a porcentagem de compatibilidade;
4. Classifica o nível de compatibilidade;
5. Exibe as habilidades encontradas e faltantes;
6. Identifica a vaga com maior compatibilidade;
7. Apresenta um resumo das informações obtidas.

## Principais Conceitos Utilizados

### Classes e Objetos
Foram utilizadas classes para representar candidatos e vagas, permitindo uma estrutura mais organizada e orientada a objetos.

Também foi aplicada **herança**, permitindo que a classe `VagaFrontEndJunior` herdasse características da classe `Vaga`.

### Uso de `this`
O `this` foi utilizado dentro das classes para acessar propriedades e métodos do próprio objeto, permitindo maior reutilização e organização do código.

### Métodos de Array
Durante o projeto, foram utilizados diferentes métodos de array para processar os dados:

- `filter()` → utilizado para encontrar habilidades em comum e habilidades faltantes;
- `every()` → utilizado para verificar se o candidato possui todos os requisitos da vaga;
- `reduce()` → utilizado para encontrar a vaga com maior compatibilidade;
- `forEach()` → utilizado para percorrer e apresentar as informações das vagas.

### Closure
Foi utilizada uma **closure** para criar um contador privado, responsável por numerar automaticamente as análises das vagas sem alterar variáveis globais.

### Promise e `async/await`
Foi utilizada uma **Promise** junto com `async/await` para simular um tempo de organização das vagas antes da exibição dos resultados, representando um comportamento semelhante a processos assíncronos encontrados em aplicações reais.

## Saída do Sistema

Ao executar o código, o sistema gera um relatório no console contendo:

- Nome do candidato;
- Compatibilidade com cada vaga;
- Habilidades encontradas;
- Habilidades faltantes;
- Salário da vaga;
- Modalidade de trabalho;
- Empresa responsável;
- Classificação da compatibilidade (alta, média ou baixa);
- Melhor vaga encontrada com base na compatibilidade.

## Considerações Finais

Este projeto teve como objetivo praticar conceitos fundamentais do JavaScript, incluindo **Programação Orientada a Objetos (POO)**, manipulação de arrays, closures, programação assíncrona e organização de código, além de demonstrar a lógica de comparação entre perfis profissionais e requisitos de vagas.

**Link do Trello**
https://trello.com/b/52z399iW/projeto

**Link do GitHub**
https://github.com/GabrielAntoniassi21/projeto-SCTEC.git