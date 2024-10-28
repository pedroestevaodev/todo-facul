import { TodoItemProps } from "@/types/components";

const TodoItem = ({
    index,
    todo,
    onDelete,
    onDrag,
    onDrop,
    onDragOver,
}: TodoItemProps) => {
    return (
        <li
            className="flex justify-between items-center p-3 bg-gray-100 rounded shadow"
            draggable
            onDragStart={(e) => onDrag(e, index)}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={onDragOver}
        >
            <span>{todo}</span>
            <button
                onClick={onDelete}
                className="text-red-500 hover:text-red-700 font-bold"
            >
                X
            </button>
        </li>
    );
};

export default TodoItem;