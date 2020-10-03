# Desafio Frontend a Backoffice 2020

Olá! Seja bem vindo! Muito obrigado por querer fazer parte do nosso time! 

Abaixo você encontrará as informações necessárias para realizar o desafio.

## Importante!

- A entrega poderá ser realizada através de um Pull Request ou enviando o projeto zipado para nairan.asilva[a]gmail.com;
- Não esqueça do arquivo README explicando como devemos rodar o seu projeto;
- Você poderá consultar o Google, Stackoverflow ou algum projeto particular na sua máquina;
- Não fique preso a entregar todo o desafio e sim entregar com a melhor qualidade no prazo estipulado; 
- Fique à vontade para perguntar qualquer coisa =)!
- Boa sorte!

## Setup do projeto

- Angular CLI: 8+
- Node: 10+
- Angular: 8+

## Como submeter?

- Commite suas alterações de forma organizada;
- Um dia antes da entrevista será dada permissão para fazer o push/ abrir a pull request, abra uma pull request da sua branch para a master com a nomenclatura: Nome Sobrenome - dd-mm-yy

_Obs: Caso não tenha recebido permissão para realizar o push da branch entre em contato com o recrutador e envie seu usuário do GitHub_

## Objetivo

O objetivo desenvolver um controle de Pets e Donos.

## Telas

### Login

- Desenvolver uma tela de login de usuários.
- A regra de autenticação fica por conta do desenvolvedor (inclusive um usuário e senha mockado no sistema);
- Essa deverá ser a única tela que o usuário conseguirá acessar sem realizar o login;

### Pets

- O sistema deverá apresentar todos os pets cadastrados. Os campos apresentados serão:
	1. Nome;
	2. Apelido;
	3. Raça;
	4. Especíe:
	5. Nome do Dono;
	6. Telefone do Dono;

- Ações Disponíveis:
	1. Incluir um novo Pet;
	2. Alterar um Pet existente;
	3. Excluir um Pet existente;
	4. Visualizar Dados do Pet;

#### CRUD-Pets
- Todos os campos deverão ser preenchidos;
- O Pet deverá ser vinculado a um dono;
- Para alterções/deleções, o usuário precisará confirmar a operação;
- As Raças e Especíes deverão ser campos do tipo compo, com informações já definidas;

#### Visualizar Pets
- O sistema deverá apresentar todos os dados dos Pets e do seu dono;

### Donos

- O sistema deverá apresentar todos os donos de pet cadastrados. Os campos apresentados serão:
	1. Nome;
	2. E-mail;
	3. Telefone;

- Ações Disponíveis:
	1. Incluir um novo dono;
	2. Alterar um dono existente;
	3. Excluir um dono existente;
	4. Visualizar Dados do dono;

#### CRUD-Dono
- Todos os campos deverão ser preenchidos;
- Para alterções/deleções, o usuário precisará confirmar a operação;
- As Raças e Especíes deverão ser campos do tipo compo, com informações já definidas;

#### Visualizar Pets
- O sistema deverá apresentar todos os dados do seu dono e de todos os seus pets;


## APIs

**Pefixo**: https://5f779702d5c9cb001623760a.mockapi.io/api/v1

### Donos
- **Get:** /owner
- **Get ID:** /owner/{id}
- **Get Pets:** /owner/{idOwner}/pets
- **Post:** /owner/{id}
- **Put:** /owner/{id}
- **Delete:** /owner/{id}

### Pets
- **Get:** /pets
- **Get ID:** /pets/{id}
- **Post:** /pets/{id}
- **Put:** /pets/{id}
- **Delete:** /pets/{id}

#

## Diferenciais
- Design Responsivo;
- Validação de formulários e máscaras;
- Simular paginação e pesquisas;
- Organização do Código e Commits;
- Casos de Testes;


#

Caso tenha alguma sugestão de melhoria, nos avise!

Boa sorte! :blue_heart: