# Todo List em Next.js com TailwindCSS

Este é um projeto simples de Todo List desenvolvido com **Next.js** e **TailwindCSS**. Ele permite adicionar, excluir e reorganizar tarefas por meio de drag-and-drop, sem o uso de pacotes externos.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Funcionalidades

- Adicionar novas tarefas.
- Excluir tarefas da lista.
- Reorganizar a ordem das tarefas por meio de drag-and-drop.
- Verificação para evitar tarefas duplicadas.

## Instalação e Execução

### Pré-requisitos

- Ter o compilador Bun instalado

### Passos para Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
    ```bash
    bun install
    ```

3. Execute o projeto em ambiente de desenvolvimento:
    ```bash
    bun run dev
    ```

4. Acesse o aplicativo no navegador em:
    ```bash
    http://localhost:3000
    ```

## Estrutura do Projeto

- `app/page.tsx`: Página principal que exibe o componente `TodoList`.
- `components/TodoItem`: Componente que representa uma tarefa individual com funcionalidades de excluir e arrastar.
- `components/TodoList`: Componente que gerencia a lista de tarefas e as ações de adicionar, excluir e drag-and-drop.

## Como Usar

- Para adicionar uma nova tarefa, digite o nome dela no campo de entrada e clique em Add.
- Para excluir uma tarefa, clique no botão X ao lado da tarefa.
- Para reorganizar a lista, arraste a tarefa desejada e solte na nova posição.
- Se você tentar adicionar uma tarefa com o mesmo nome de outra já existente, o aplicativo exibirá um alerta.

## Estilização

A estilização é feita com TailwindCSS, o que permite uma criação rápida e responsiva dos estilos. O design é minimalista e focado em funcionalidade.

## Licença

Este projeto é licenciado sob a MIT License.

---

Desenvolvido com 💙 por Pedro Estevão.