# Todo List in Next.js with TailwindCSS

<p style="text-align: center;">
    <a href="https://www.pedroestevao.com">
        <img src="https://res.cloudinary.com/dge3g9rcw/image/upload/v1747399649/github/odc6gowyyq99knrahu0w.webp" alt="Illustrative image" />
    </a>
</p>

This is a simple Todo List project built with **Next.js** and **TailwindCSS**. It allows you to add, delete, and reorder tasks using drag-and-drop, without relying on external libraries.

## Tech Stack

The project was built using the following technologies and tools:

- [Next.js (App Router)](https://nextjs.org/) - React framework for web applications.
- [React](https://react.dev/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript superset for static typing.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for fast and customizable design.

## Features

- **Add new tasks.**
- **Delete tasks from the list.**
- **Reorder tasks using drag-and-drop.**
- **Validation to prevent duplicate tasks.**

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/pedroestevaodev/todo-facul.git
cd todo-facul
```

### 2. Install dependencies

```bash
$ bun install
```

### 3. Start the development server

```bash
bun run dev
```

Open your browser and visit `http://localhost:3000` to see the project in action.

You can start editing the homepage by modifying the `app/page.tsx` file. The browser will automatically update as you make changes to the code.

## Project Structure

- `app/page.tsx`: Main page that renders the `TodoList` component.
- `components/TodoItem`: Component that represents an individual task with delete and drag functionalities.
- `components/TodoList`: Component that manages the list of tasks and handles add, delete, and drag-and-drop actions.

## How to Use

- To add a new task, type its name in the input field and click Add.
- To delete a task, click the X button next to it.
- To reorder tasks, drag and drop the desired task to a new position.
- If you try to add a task with the same name as an existing one, the app will show an alert.

## Styling

Styling is handled with TailwindCSS, enabling fast and responsive UI development. The design is minimalist and focused on functionality.

## License

This project is open source and available under the [MIT License](https://mit-license.org/).  
<br />

---

<br />

**Built with ☕ by [Pedro Estevão](https://www.pedroestevao.com)**
