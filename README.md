# Projeto de Exercícios React

<p align="center">
  <img src="./public/infnet_logo.png" alt="Logomarca da Faculdade" width="25%" />
</p>

<p align="center">
  <strong>TP2 • Desenvolvimento Web com React</strong><br>
  <strong>Professor: Armênio Torres Santiago Cardoso</strong><br>
  <strong>Aluno: André Luis Becker</strong>
</p>

<p align="center">
  [![GitHub](https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white)](https://github.com/andrebecker84)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/becker84)
  [![Website](https://img.shields.io/badge/Website-FF5722?style=flat&logo=google-chrome&logoColor=white)](https://andrebecker84.github.io/my-links/)
</p>

## Exercícios

Aqui está uma lista dos exercícios desenvolvidos no projeto:

1. **[Exercise01.jsx](./src/exercises/Exercise01.jsx)** – Crie uma página com um componente que gerencie o estado de um usuário com dados fixos (nome, idade) e botões para incrementar e decrementar a idade usando `useState`.

2. **[Exercise02.jsx](./src/exercises/Exercise02.jsx)** – Crie uma página com um componente semelhante ao anterior, mas usando `useReducer` para gerenciar o estado.

3. **[Exercise03.jsx](./src/exercises/Exercise03.jsx)** – Crie uma página com dois inputs para nome e idade e um botão "INSERIR" para criar uma lista de usuários. Inclua botões para incrementar e decrementar a idade ao lado de cada usuário.

4. **[Exercise04.jsx](./src/exercises/Exercise04.jsx)** – Adicione um botão para excluir o usuário ao componente do exercício anterior.

5. **[Exercise05.jsx](./src/exercises/Exercise05.jsx)** – Desenvolva um componente TO DO LIST que utilize `useState` para gerenciar o valor de um input e `useReducer` para gerenciar uma lista de tarefas com inclusão e exclusão.

6. **[Exercise06.jsx](./src/exercises/Exercise06.jsx)** – Adicione um botão para riscar tarefas concluídas no componente TO DO LIST do exercício anterior, utilizando estilos condicionais.

7. **[Exercise07.jsx](./src/exercises/Exercise07.jsx)** – Crie um componente que calcule o fatorial de um número digitado usando `useMemo` para memorizar o resultado e evitar cálculos desnecessários.

8. **[Exercise08.jsx](./src/exercises/Exercise08.jsx)** – Desenvolva uma página com um input e uma lista de 100 nomes completos gerados pelo Faker. Filtre a lista conforme o usuário digita no input, considerando a busca por início dos caracteres digitados. (desconsidere maiúsculas e minúsculas).

9. **[Exercise09.jsx](./src/exercises/Exercise09.jsx)** – Filtre a lista de nomes (do exercício anterior) para incluir nomes que contenham os caracteres digitados. (desconsidere maiúsculas e minúsculas).

10. **[Exercise10.jsx](./src/exercises/Exercise10.jsx)** – Adicione um campo para o cargo (job title) e filtre a lista de nomes e cargos conforme os caracteres digitados. (desconsidere maiúsculas e minúsculas).

11. **[Exercise11.jsx](./src/exercises/Exercise11.jsx)** – Filtre a lista de nomes e cargos que contenham os caracteres digitados. (desconsidere maiúsculas e minúsculas).

12. **[Exercise12.jsx](./src/exercises/Exercise12.jsx)** – Crie 2 listas suspensas com (select drop-down): uma para UFs e outra para municípios, utilizando a API do IBGE e gerencie os dados com `useEffect` e `useState`.

13. **[Exercise13.jsx](./src/exercises/Exercise13.jsx)** – Crie uma página com 1 lista suspensa (select drop-down) para UFs e liste os municípios abaixo da lista suspensa.

14. **[Exercise14.jsx](./src/exercises/Exercise14.jsx)** – Crie uma página com 1 lista suspensa (select drop-down) para UFs e um input para filtrar os municípios iniciados pelos caracteres digitados. (desconsidere maiúsculas e minúsculas).

15. **[Exercise15.jsx](./src/exercises/Exercise15.jsx)** – Crie uma página com 1 lista suspensa (select drop-down) para UFs e um input para filtrar os municípios que contenham os caracteres digitados. (desconsidere maiúsculas e minúsculas).

16. **[Exercise16.jsx](./src/exercises/Exercise16.jsx)** – Crie uma página com um input para digitar um ano terminado em ZERO (década) e mostre o ranking de frequência de nomes brasileiros.

## Referências

- [Faker](https://fakerjs.dev/)
- [API do IBGE - Estados](https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome)
- [API do IBGE - Municipios](https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios)
- [API do IBGE - Ranking de nomes brasileiros](https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=1950)
