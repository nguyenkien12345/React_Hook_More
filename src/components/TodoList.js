import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import { TodoContext } from '../contexts/TodoContextProvider';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


function TodoList() {

    // Khi debug const demo = useContext(TodoContext) và console.log(demo) ta sẽ thấy kết quả trả về sau đó ta sẽ móc ra các object mà ta cần sử dụng
    const {todos, addTodo, deleteTodo} = useContext(TodoContext);

    const {isAuthentication} = useContext(AuthContext);

    return (
        <>
        {isAuthentication ?
            (<div className="todo-list">
            <TodoForm addTodo={addTodo}/>
                <ul>
                    {todos.map(todo => {
                        return (
                            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
                        )
                    })}
                </ul>
            </div>) :
            <h1>Vui lòng đăng nhập để sử dụng My Hooks App</h1>
        }
        </>
    )
}

export default TodoList
