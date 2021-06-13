// import package
import React, { useState, useContext } from 'react';
// import contexts
import { ThemeContext } from '../contexts/ThemeContextProvider';
import { TodoContext } from '../contexts/TodoContextProvider';

function TodoForm({addTodo}){

    // Khi debug const demo = useContext(ThemeContext) và console.log(demo) ta sẽ thấy kết quả trả về sau đó ta sẽ móc ra các object mà ta cần sử dụng
    const {theme} = useContext(ThemeContext);
    // Móc ra isLightTheme, light, dark trong theme ra
    const {isLightTheme, light, dark} = theme;
    const style = isLightTheme ? light : dark; 

    // Khi debug const demo = useContext(TodoContext) và console.log(demo) ta sẽ thấy kết quả trả về sau đó ta sẽ móc ra các object mà ta cần sử dụng
    const {title, onHandleSubmit, onChangeValue} = useContext(TodoContext);


    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text" name="title" placeholder="Enter Todo: " value={title} onChange={onChangeValue} required/>
            <input type="submit" value="Add" style={style}/>
        </form>
    )
}

export default TodoForm
