# TodoList App
Este é um projeto de uma aplicação de lista de tarefas (TodoList) desenvolvida com Next.js, TypeScript, MongoDB Atlas e Mongoose. A aplicação permite criar, editar, completar e excluir tarefas, com estados de carregamento, validações e exibição de notificações. Além disso, o design é responsivo, adaptado tanto para desktop quanto para dispositivos móveis.

## Telas
![image](https://github.com/user-attachments/assets/5e3b77b7-5f46-40f3-9a44-1a8bc882ac38)


![image](https://github.com/user-attachments/assets/31e53c8a-c8ae-48e6-bd06-14662ee0d3a9)


![image](https://github.com/user-attachments/assets/9344c465-6501-4187-893d-4c89b81d9088)


![image](https://github.com/user-attachments/assets/f88fa51e-1bb9-43c1-a152-8523e8230397)


![image](https://github.com/user-attachments/assets/f3ca0be7-0113-4772-bced-3c5391d817fd)


![image](https://github.com/user-attachments/assets/1b6eddcd-9dc0-4de9-b965-36d583fa19f8)


![image](https://github.com/user-attachments/assets/c3744756-7967-4481-b59b-3c9aabd35b72)


![image](https://github.com/user-attachments/assets/41488871-3055-44b6-8934-3a9d7f756a5e)


![image](https://github.com/user-attachments/assets/1b5a8d25-da4b-48f5-9207-de7f7cb4b4bc)



![image](https://github.com/user-attachments/assets/3b61c75e-aed7-4873-82e1-e9d661a9f635)




## Funcionalidades
Adicionar uma nova tarefa.

Visualizar a lista de tarefas pendentes.

Marcar tarefas como concluídas.

Excluir tarefas.

Notificações de sucesso ou erro para ações como criar, editar e excluir.

Validação de formulários usando Zod.

Persistência de dados usando MongoDB Atlas.


## Tecnologias Utilizadas
Next.js: Framework React para renderização no lado do servidor e rotas dinâmicas.

TypeScript: Tipagem estática para maior segurança e desenvolvimento mais ágil.

MongoDB Atlas: Banco de dados NoSQL para armazenar as tarefas.

Mongoose: ODM para facilitar a interação com o MongoDB.

SCSS: Para estilização com variáveis, mixins e outras vantagens de CSS pré-processado.

Zod: Biblioteca para validação de formulários e dados de entrada.

React Hooks: Utilização de hooks personalizados como useTodo e useNewTodo.

Context API: Para gerenciar o estado global das tarefas na aplicação.

## Estrutura das pastas
├── components

│   ├── Button.tsx

│   ├── Checkbox.tsx

│   ├── Container.tsx

│   ├── LoadingOverlay.tsx

│   ├── Modal.tsx

│   ├── NewTodo.tsx

│   ├── Notification.tsx

│   ├── TodoItem.tsx

│   ├── TodoList.tsx

│   └── Welcome.tsx


├── context

│   └── TodoContext.tsx


├── hook

│   ├── useTodo.ts

│   ├── useNewTodo.ts

│   └── useTodoItem.ts

├── lib

│   ├── mongodb.ts

│   └── todoApi.ts

├── pages

│   ├── api

│   │   ├── todos

│   │   │   └── [id].ts

│   │   └── todos.ts

│   └── index.tsx

├── public

│   ├── icons

│   └── images

├── styles

│   ├── variables.module.scss

│   ├── Button.module.scss

│   ├── Checkbox.module.scss

│   ├── LoadingOverlay.module.scss

│   ├── Modal.module.scss

│   ├── NewTodo.module.scss

│   ├── TodoItem.module.scss

│   ├── TodoList.module.scss

│   └── Container.module.scss

└── README.md


## Instalação e Execução

### Pré-requisitos

Node.js (versão 16 ou superior)

MongoDB Atlas configurado com uma URI de conexão


### Passos para rodar o projeto
1. Clone o repositório:
```git clone https://github.com/seu-usuario/todolist-app.git```

2. Instale as dependências: ```npm install```
   
3. Crie um arquivo .env.local e .env na raiz do projeto e adicione a variável de ambiente com a URI de conexão do MongoDB Atlas: ```MONGODB_URI = mongodb+srv://dbTodo:t1iRd5N6JeobyxPv@cluster0.7hs9k.mongodb.net/```
   
4. Execute o projeto: ```npm run dev```

A aplicação estará disponível em http://localhost:3000.

## Endpoints da API
A API RESTful oferece as seguintes rotas:

GET /api/todos: Retorna todas as tarefas.

POST /api/todos: Cria uma nova tarefa.

PUT /api/todos/:id: Atualiza uma tarefa específica (completa ou edita a descrição).

DELETE /api/todos/:id: Exclui uma tarefa específica.

## Validação de Formulários
Utilizamos Zod para validar os dados de entrada dos formulários, garantindo que a descrição da tarefa seja válida antes de submetê-la à API.

## Estilização e Design
A aplicação é completamente responsiva, utilizando SCSS para estilização. Os breakpoints são utilizados para adaptar o layout entre mobile e desktop.

Desktop: A largura máxima para componentes como TodoList é de 450px.

Mobile: Para dispositivos com largura menor, a aplicação se adapta para 880px.

## Contribuições
Sinta-se à vontade para contribuir! Se você encontrar um bug ou tiver sugestões de melhoria, crie uma issue ou envie um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.


