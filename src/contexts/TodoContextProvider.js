// import package
import React, { createContext, useState, useEffect, useReducer } from 'react';
// import reducer
import { TodoReducer } from '../reducers/TodoReducer';
//import actions 
import * as types from '../actions/actionTypes'

// Tạo ra kho trạng thái
export const TodoContext = createContext();

function TodoContextProvider({children}) {

    // {children}: props này chính là toàn bộ các components con mà đươc sử dụng trong TodoContextProvider

    // state
    // const [todos, setTodos] = useState([]);

    // Thay vì sử dụng useState ta sẽ sử dụng useReducers
    const [todos,dispatch] = useReducer(TodoReducer, []); // Nhận vào 2 tham số: 1 là cái kho hành động (reducer), 2 là trạng thái ban đầu của states. dispatch tượng trưng cho tất cả các hàng động trong kho reducers

    const [title, setTitle] = useState('');

    const onChangeValue = (e) => {
        setTitle(e.target.value);
    }

    const addTodo = (todo) => {
        // const newTodo = {
        //     id: todos.length + 1,
        //     ...todo
        // }
        // const newTodoList = [...todos];
        // newTodoList.push(newTodo);
        // localStorage.setItem("todos",JSON.stringify(newTodoList));
        // setTodos(newTodo);
        
        dispatch({
            type: types.ADD_TODO,
            payload: {
                todo:{
                    id: todos.length + 1,
                    ...todo
                }
            }
        })
    }

    const deleteTodo = (todo) => {
        // const index = todos.findIndex(x => x.id === todo.id);
        // const newTodoList = [...todos];
        // newTodoList.splice(index,1);
        // localStorage.setItem("todos",JSON.stringify(newTodoList));
        // setTodos(newTodo);
        
        dispatch({
            type: types.DELETE_TODO,
            payload: todo
        })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const valuesForm = {
            title: title
        }
        if(addTodo){
            addTodo(valuesForm);
        }
        setTitle('');
    }

    const onHandleDelete = (todo) => {
        if(deleteTodo){
            deleteTodo(todo);
        }
    }

    useEffect(() => {
        dispatch({
            type: types.GET_TODOS,
            payload: null
        })
    }, [])

    // Sau khi sửa và xoá, todos sẽ được cập nhật lại 
    useEffect(() => {
        dispatch({
            type: types.SAVE_TODOS,
            payload: {todos}
        })
    }, [todos])

    // Context Data (Những component khác sẽ được sử dụng các dữ liệu trong đây)
    const TodoContextData = {
        todos,
        title,
        onChangeValue,
        addTodo,
        deleteTodo,
        onHandleSubmit,
        onHandleDelete
    }

    return (
        // Kho cung cấp dữ liệu cho các components
        <TodoContext.Provider value={TodoContextData}>{children}</TodoContext.Provider>
    )
}

export default TodoContextProvider;

//  dispatch: sẽ truyền type và payload qua reducer 
