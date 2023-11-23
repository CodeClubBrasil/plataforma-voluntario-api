# DOC - API Voluntário Code Club Brasil (Back-end)

## Visão Geral

A API do Voluntário Code Club Brasil é uma API de gestão de Code Clubes e Voluntários. Ela oferece funcionalidades para buscar Code Clubs, adicionar novos voluntários, fazer login na plataforma, enviar documentos e realizar operações de usuário.

### Tecnologias Utilizadas

- **Node.js**:  A API é executada na plataforma Node.js na versão **v18.15.0** . 
- **NestJS**:  O framework utilizado para desenvolver a API é o NestJS, que é um framework Node.js extensível e progressivo para construir aplicativos do lado do servidor eficientes e escaláveis a API está utilizando a versão **v10.1.12**. 
- **Linguagem TypeScript**: A API é escrita em TypeScript, uma linguagem de programação fortemente tipada que compila para JavaScript. O TypeScript oferece recursos avançados de tipagem estática que tornam o código mais seguro e legível. 
- **ORM Prisma**: O Prisma é utilizado como ORM (Object-Relational Mapping) para interagir com o banco de dados. Ele simplifica o acesso e a manipulação de dados do banco de dados, permitindo uma integração suave com o Node.js e TypeScript, a API está utilizando a versão **4.12.0**.
- **Banco de Dados PostgreSQL**: A API utiliza o banco de dados relacional PostgreSQL para armazenar e gerenciar dados de voluntários, Code Clubs e outras informações essenciais. O PostgreSQL é conhecido por sua confiabilidade, desempenho e recursos avançados de SQL.
- **Repositório Git**: O código-fonte desta API. Você pode acessar o repositório no [GitHub](https://github.com/CodeClubBrasil/plataforma-voluntario-api).

## Arquitetura Clean na API do Voluntário Code Club Brasil

A API do Voluntário Code Club Brasil é desenvolvida com base na arquitetura Clean Architecture, também conhecida como Arquitetura Limpa. Essa abordagem arquitetural foi escolhida para promover a modularidade, a manutenibilidade e a escalabilidade do sistema, permitindo um desenvolvimento mais eficiente e uma estrutura bem organizada.

![CleanCode](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)
### Princípios da Clean Architecture

A Arquitetura Limpa segue vários princípios fundamentais que a tornam adequada para desenvolver aplicativos robustos e de alta qualidade:

1. **Independência de Frameworks**: A lógica de negócios é mantida independente de qualquer framework ou biblioteca específica, permitindo que você troque facilmente componentes de interface do usuário, armazenamento de dados ou outras partes do sistema.

2. **Independente da IU**: A UI pode mudar facilmente, sem alterar o resto do sistema. Uma UI da Web pode ser substituída por uma UI de console, por exemplo, sem alterar as regras de negócios.

3. **Testabilidade**: A arquitetura promove a testabilidade fácil, pois a lógica de negócios está isolada em camadas interiores, tornando simples escrever testes unitários e de integração.
    
4. **Separação de Responsabilidades**: A Clean Architecture divide o sistema em camadas bem definidas, como Entidades de Negócios, Casos de Uso, Adaptadores e Controladores, cada uma com sua responsabilidade clara. Isso melhora a compreensão e a manutenção do código.
    
5. **Regra de Dependência**: As dependências fluem das camadas externas para as camadas internas. Isso significa que as camadas internas, que contêm a lógica de negócios, não dependem das camadas externas, como frameworks ou bibliotecas.

6. **Independente do banco de dados**: Você pode trocar Oracle ou SQL Server por Mongo, BigTable, CouchDB ou qualquer outra coisa. Suas regras de negócios não estão vinculadas ao banco de dados.
    
7. **Modelagem Orientada a Casos de Uso**: A Clean Architecture se concentra em modelar os casos de uso do sistema, representando como os usuários interagem com o sistema e garantindo que essa interação seja clara e lógica.
    
### Estrutura da API

A API do Voluntário Code Club Brasil é organizada de acordo com os princípios da Clean Architecture. Ela é dividida em camadas distintas, cada uma com seu próprio conjunto de responsabilidades:

- **Entidades de Negócios**: Representam os objetos principais do domínio da aplicação, como voluntários, clubes e outros conceitos.
    
- **Casos de Uso**: Contêm a lógica de negócios da aplicação, definindo como os casos de uso específicos devem ser tratados.
    
- **Adaptadores**: São responsáveis pela interação com recursos externos, como bancos de dados, serviços web e interfaces de usuário. Eles traduzem as informações entre o formato interno da aplicação e o formato esperado pelos recursos externos.
    
- **Controladores**: Gerenciam as solicitações HTTP, validam dados de entrada e encaminham as solicitações para os casos de uso apropriados.
    
Esta estrutura permite que a API seja altamente flexível, facilitando a adição de novos recursos, a manutenção e a evolução contínua do sistema.

## Estrutura de Dados do Voluntário na API do Voluntário Code Club Brasil

A estrutura de dados abaixo é usada para representar informações de voluntários na API do Voluntário Code Club Brasil. Cada campo possui um nome, tipo de dado e descrição para fornecer uma compreensão completa do JSON.

### Campos:
1. **name (Nome do Voluntário)**:
    - Tipo de Dado: String
    - Descrição: O nome do voluntário.

2. **lastName (Sobrenome do Voluntário)**:    
    - Tipo de Dado: String
    - Descrição: O sobrenome do voluntário.

3. **tels (Números de Telefone do Voluntário)**:    
    - Tipo de Dado: Array de Strings
    - Descrição: Uma lista de números de telefone do voluntário. Pode conter vários números de telefone.

4. **email (Endereço de E-mail do Voluntário)**:
    - Tipo de Dado: String
    - Descrição: O endereço de e-mail do voluntário.

5. **password (Senha do Voluntário)**:
    - Tipo de Dado: String
    - Descrição: A senha do voluntário.

6. **city (Cidade do Voluntário)**:
    - Tipo de Dado: String
    - Descrição: A cidade onde o voluntário reside.

7. **state (Estado do Voluntário)**:
    - Tipo de Dado: Enumeração (Estados Brasileiros)
    - Descrição: O estado onde o voluntário reside. Deve ser um dos estados brasileiros, como "São Paulo," "Rio de Janeiro," etc.

8. **neighborhood (Bairro do Voluntário)**:    
    - Tipo de Dado: String
    - Descrição: O bairro onde o voluntário reside.

9. **knowledges (Conhecimentos do Voluntário)**:    
    - Tipo de Dado: Array de Strings
    - Descrição: Uma lista dos conhecimentos ou habilidades do voluntário. Pode incluir várias áreas de conhecimento, como programação, design, ensino, etc.

10. **available_time (Disponibilidade de Horário do Voluntário)**:    
    - Tipo de Dado: Array de Objetos
    - Descrição: Uma lista que representa a disponibilidade de horário do voluntário. Cada objeto contém os seguintes campos:
        - week_day (Dia da Semana): Enumeração (Dias da Semana)
            - Descrição: O dia da semana em que o voluntário está disponível.
        - time_start (Horário de Início):
            - Tipo de Dado: Datetime (HH:mm)
            - Descrição: O horário de início em que o voluntário está disponível.
        - time_end (Horário de Término):
            - Tipo de Dado: Datetime (HH:mm)
            - Descrição: O horário de término em que o voluntário está disponível.

Esta estrutura de dados é usada para representar informações de voluntários na API do Voluntário Code Club Brasil.
## Endpoint

### 1. `/club` - Buscar Code Clubs
- **Método**: GET
- **Descrição**: Este endpoint permite buscar Code Clubs com base em critérios como nome, estado, cidade e bairro.
- **Parâmetros**:
	  - `name` (opcional) - Nome do Code Club.
	  - `state` (opcional) - Estado do Code Club.
	  - `city` (opcional) - Cidade do Code Club.
	  - `neighborhood` (opcional) - Bairro do Code Club.
- **Respostas**:
	  - `200` (OK) - Resposta bem-sucedida com informações sobre os Code Clubs.
	  - Outros códigos de resposta para possíveis erros.

### 2. `/user` - Adicionar um novo voluntário
- **Método**: POST
- **Descrição**: Este endpoint permite adicionar um novo voluntário à plataforma.
- **Payload**:
```json
{
  "name": "Marry",
  "lastName": "Marry",
  "tels": ["tels", "tels"],
  "email": "marry@gmail.com",
  "password": "123",
  "city": "Niterói",
  "state": "Rio de Janeiro",
  "neighborhood": "Icarai",
  "knowledges": ["Programacao", "Designer", "Professor"],
  "available_time": [
    {
      "week_day": "monday",
      "time_start": "10:00",
      "time_end": "11:00"
    },
    {
      "week_day": "tuesday",
      "time_start": "10:00",
      "time_end": "11:00"
    }
  ]
}
```
- **Respostas**:
	- `200` (OK) - Resposta bem-sucedida com informações sobre o voluntário adicionado.
	- `405` (Invalid input) - Erro de entrada inválida.

### 3. `/user/login` - Logar na plataforma
- **Método**: GET
- **Descrição**: Este endpoint permite aos voluntários fazerem login na plataforma.
- **Parâmetros**:
    - `email` (opcional) - O nome de usuário para fazer login.
    - `password` (opcional) - A senha para fazer login em texto claro.
- **Respostas**:
    - `200` (OK) - Resposta bem-sucedida com informações de login.
    - `400` (Invalid username/password supplied) - Nome de usuário ou senha inválidos.

### 4. `/user/send-document` - Adicionar um novo documento

- **Método**: POST (multipart/form-data)
- **Descrição**: Este endpoint permite aos voluntários enviar um novo documento para a plataforma.
- **Payload**: Envio de arquivo, incluindo um campo `fileName`.
- **Respostas**:
    - `200` (OK) - Resposta bem-sucedida.
    - `405` (Invalid input) - Erro de entrada inválida.

### 5. `/user/{username}` - Obter usuário por nome de usuário

- **Método**: GET
- **Descrição**: Este endpoint permite obter informações de usuário com base no nome de usuário.
- **Parâmetros**:
    - `username` (obrigatório) - O nome a ser buscado.
- **Respostas**:
    - `200` (OK) - Resposta bem-sucedida com informações do usuário.
    - `400` (Invalid username supplied) - Nome de usuário inválido.
    - `404` (User not found) - Usuário não encontrado.

### 6. `/user/{username}` - Atualizar usuário

- **Método**: PUT
- **Descrição**: Este endpoint permite atualizar as informações de um usuário existente (somente permitido para o usuário logado).
- **Parâmetros**:
    - `username` (obrigatório) - O nome do usuário a ser atualizado.
- **Payload**:
```json
{   
	"name": "Marry",   
	"lastName": "Marry",   
	"tels": ["tels", "tels"],   
	"email": "marry@gmail.com",   
	"password": "123",   
	"city": "Niterói",   
	"state": "Rio de Janeiro",   
	"neighborhood": "Icarai"
}
```
    
- **Respostas**:
    - `200` (OK) - Resposta bem-sucedida.
    - Outros códigos de resposta para possíveis erros.
### Segurança
- Autenticação JWT (Bearer Token) é necessária para os endpoints, conforme especificado.

## Referências Bibliográficas:

- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Programação Orientada a Objetos (POO)](https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos)
- [What is a REST API?](https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api)

**Créditos:** Esta documentação foi preparada por [Victor Hugo](https://github.com/torugo99) para a API do Voluntário Code Club Brasil.
