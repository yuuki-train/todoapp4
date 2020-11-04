// 必要な要素をインポートする
import * as React from 'react'
import TodoItem from './todo-item'
import{ TodoListInterface } from './../interfaces'

//TodoListコンポーネント
const TodoList = (props: TodoListInterface) =>{
    //TodoListが呼ばれたら、TodoItemのHTMLリストの型を作成する。
    return(
        <div className="todo-list">
            <ul>
                {props.todos.map((todo) =>(
                    <li key={todo.id}>
                        <TodoItem
                            todo={todo}
                            handleTodoUpdate={props.handleTodoUpdate}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoComplete={props.handleTodoComplete}
                            handleTodoBlur={props.handleTodoBlur}
                        />
                    </li>
                ))}
            </ul>
        </div>

    )
}
//TodoItemとしてエクスポートする
export default TodoList