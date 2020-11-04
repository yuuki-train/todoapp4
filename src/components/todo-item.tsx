// 必要な要素をインポートする
import * as React from 'react'
import{ TodoItemInterface } from './../interfaces'

//TodoItemコンポーネント
const TodoItem = (props: TodoItemInterface) =>{
    //Todoの新規作成時、変更時、削除時の動作を規定する。
    return(
        <div className='todo-item'>
            <div onClick={() => props.handleTodoComplete(props.todo.id)}>
                {props.todo.isCompleted ? (
                    <span className="todo-item-checked">&#x2714;</span>
                ) : (
                    <span className="todo-item-unchecked" />
                )}
            </div>

            <div className="todo-item-input-wrapper">
                <input 
                value={props.todo.text}
                onBlur={props.handleTodoBlur}
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
        
                />
            </div>

            <div className ="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
                    &#x02A2F;
            </div>
        </div>
    )
}

//TodoItemとしてエクスポートする
export default TodoItem