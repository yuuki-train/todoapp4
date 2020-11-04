//必要な要素をインポートする
import React from 'react';
import { render } from 'react-dom';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import { TodoInterface } from './interfaces'
import './styles/styles.css';

//TodoListAppコンポーネント
const TodoListApp = () =>{
    const [todos, setTodos] = React.useState<TodoInterface[]>([])

    //TodoItemを新規作成する
    function handleTodoCreate(todo:TodoInterface){
        //newTodosStateにtodo情報を登録する
        const newTodosState: TodoInterface[] = [...todos]

        //newtodosStateにtodoをpushする
        newTodosState.push(todo)

        //TodosにnewTodosStateをsetする
        setTodos(newTodosState)
    }

    //TodoItemを更新する
    function handleTodoUpdate(event:React.ChangeEvent<HTMLInputElement>, id: string){
        //newTodosStateにtodo情報を登録する
        const newTodosState: TodoInterface[] = [...todos]
        //todoItemに変更点が無いかを探す
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value
        //TodosにnewTodosStateをsetする
        setTodos(newTodosState)
    }

    //TodoItemを削除する
    function handleTodoRemove(id: string){
        //newTodosStateにtodo情報を登録し、TodoItemの削除処理を行う
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
        //TodosにnewTodosStateをsetする
        setTodos(newTodosState)
    }

    //TodoItemが完了したかを判定する
    function handleTodoComplete(id: string){
        //newTodosStateにtodo情報を登録する
        const newTodosState: TodoInterface[] = [...todos]
        //todoItemのisCompletedキーを探し、完了状態を逆転させる
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
        //TodosにnewTodosStateをsetする
        setTodos(newTodosState)

    }

    // TodoItemがタイトルを持っているかを調べる。
    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>){
        //valueの長さが0である時エラーが発生する
       if(event.target.value.length === 0){
           event.target.classList.add('todo-input-error')
       }else{
           event.target.classList.remove('todo-input-error')
       }

    }
    return(
        <div className="todo-list-app">
        <TodoForm
          todos={todos}
          handleTodoCreate={handleTodoCreate}
        />
  
        <TodoList
          todos={todos}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoRemove={handleTodoRemove}
          handleTodoComplete={handleTodoComplete}
          handleTodoBlur={handleTodoBlur}
        />
      </div>
    )

}


const rootElement = document.getElementById('root')
render(<TodoListApp/>, rootElement)

