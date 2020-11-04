// TodoInterface
export interface TodoInterface {
    id: string;
    text: string;
    isCompleted: boolean;
}

//TodoFormInterface
export interface TodoFormInterface {
    todos: TodoInterface[];
    handleTodoCreate: (todo: TodoInterface) => void;
}

//TodoListInterface
export interface TodoListInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todos: TodoInterface[];
}

//TodoItemInterface
export interface TodoItemInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todo: TodoInterface;
}