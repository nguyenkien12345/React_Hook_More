// import actions
import * as types from '../actions/actionTypes';

export const TodoReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch (type){
        case types.GET_TODOS:
            const todos = JSON.parse(localStorage.getItem("todos"));
            if(todos){
                state = todos;
            }
            return state;

        case types.SAVE_TODOS:
            localStorage.setItem("todos", JSON.stringify(payload.todos))
            return state;
        
        case types.ADD_TODO:
            return [
                ...state,
                payload.todo
            ]

        case types.DELETE_TODO:
            const index = state.findIndex(x => x.id === payload.id);
            const newTodos = [...state];
            newTodos.splice(index,1);
            return newTodos;

        default:
            return state;

    }
}
// Đây là kho lưu tất cả hàng động. TodoReducer sẽ nhận về type và payload được gửi từ dispatch của TodoContextProvider