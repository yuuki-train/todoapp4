// 必要な要素をインポートする
import * as React from 'react'
import shortid from 'shortid'
import{ TodoInterface, TodoFormInterface } from './../interfaces'

// TodoFormコンポーネント
const TodoForm = (props: TodoFormInterface) =>{
    // input用のrefを作成する
    const inputRef = React.useRef<HTMLInputElement>(null)

    // formStateを新規作成する
    const [formState, setFormState] = React.useState('')

    // InputChangeを受け取りformStateに転送する
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value)
    }
    // エンターキーを押すとinputが始まるようにする
    function handleInputEnter(event: React.KeyboardEvent){
        if(event.key === 'Enter'){
            // 新規Todoオブジェクトを作成する
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false
            }
        
             // 新規TodoオブジェクトをTodoitemとして渡せるようにする
            props.handleTodoCreate(newTodo)

            // 入力フォームをクリア（リセット）する
            if (inputRef && inputRef.current){
               inputRef.current.value=''
          }
        }
    }
    //todoアプリフォームと、change時、及びenter時に呼び出すhandleメソッドを記述する
    return(
        <div className="todo-form">
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter new todo"
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}

export default TodoForm