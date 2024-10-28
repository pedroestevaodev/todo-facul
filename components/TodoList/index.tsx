'use client';

import { useState } from "react";
import TodoItem from "@/components/TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() && !todos.includes(newTodo)) {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        } else if (todos.includes(newTodo)) {
            alert("Já existe uma tarefa com esse nome!");
        }
    };

    const handleDeleteTodo = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const handleDrag = (event: React.DragEvent, draggedIndex: number) => {
        event.dataTransfer.setData("text/plain", draggedIndex.toString());
    };

    const handleDrop = (event: React.DragEvent, targetIndex: number) => {
        event.preventDefault();
        const draggedIndex = Number(event.dataTransfer.getData("text"));
        if (draggedIndex === targetIndex) return;

        const updatedTodos = [...todos];
        const [draggedTodo] = updatedTodos.splice(draggedIndex, 1);
        updatedTodos.splice(targetIndex, 0, draggedTodo);

        setTodos(updatedTodos);
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    return (
        <div className="max-w-md mx-auto p-4 space-y-4">
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Adicionar uma nova tarefa..."
                    className="w-full px-3 py-2 border rounded-[5px]"
                />
                <button
                    onClick={handleAddTodo}
                    className="px-4 py-2 bg-blue-500 text-white rounded-[5px] hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
            <ul className="bg-white p-[15px] rounded-[5px] space-y-2">
                {todos.length === 0 ? (
                    <li className="text-center text-gray-500">Nenhuma tarefa adicionada.</li>
                ) : (
                    <>
                        {todos.map((todo, index) => (
                            <TodoItem
                                key={index}
                                index={index}
                                todo={todo}
                                onDelete={() => handleDeleteTodo(index)}
                                onDrag={handleDrag}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            />
                        ))}
                    </>
                )}
            </ul>
        </div>
    );
};

export default TodoList;