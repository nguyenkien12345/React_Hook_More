// import package
import React, { useContext } from 'react';
// import contexts
import { ThemeContext } from '../contexts/ThemeContextProvider';
import { TodoContext } from '../contexts/TodoContextProvider';

function TodoItem({todo, deleteTodo}){

    // Khi debug const demo = useContext(ThemeContext) và console.log(demo) ta sẽ thấy kết quả trả về sau đó ta sẽ móc ra các object mà ta cần sử dụng
    const {theme} = useContext(ThemeContext);
    // Móc ra isLightTheme, light, dark trong theme ra
    const {isLightTheme, light, dark} = theme;
    const style = isLightTheme ? light : dark;

    // Khi debug const demo = useContext(TodoContext) và console.log(demo) ta sẽ thấy kết quả trả về sau đó ta sẽ móc ra các object mà ta cần sử dụng
    const {onHandleDelete} = useContext(TodoContext);

    return (
        <div>
            <li style={style} onClick={() => onHandleDelete(todo)}>{todo.title}</li>
        </div>
    )
}

export default TodoItem
