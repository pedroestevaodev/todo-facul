export interface TodoItemProps {
    index: number;
    todo: string;
    onDelete: () => void;
    onDrag: (event: React.DragEvent, index: number) => void;
    onDrop: (event: React.DragEvent, index: number) => void;
    onDragOver: (event: React.DragEvent) => void;
};