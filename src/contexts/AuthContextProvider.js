// import package
import React, { createContext, useState, useEffect, useReducer } from 'react';
// import reducers
import { AuthReducer } from '../reducers/AuthReducer'
// import actions
import * as types from '../actions/actionTypes'

export const AuthContext = createContext();

function AuthContextProvider({children}) {

    // const [isAuthentication, setIsauthentication] = useState(true);

    // Thay vì sử dụng useState ta sẽ sử dụng useReducers
    const [isAuthentication, dispatch] = useReducer(AuthReducer, false); // Nhận vào 2 tham số: 1 là cái kho hành động (reducer), 2 là trạng thái ban đầu của states. dispatch tượng trưng cho tất cả các hàng động trong kho reducers

    const onHandleToggleAuthentication = () => {
        // setIsauthentication(!isAuthentication);

        dispatch({
            type: types.AUTH_TOGGLE,
            payload: isAuthentication
        })
    };

    const AuthContextData = {
        isAuthentication,
        onHandleToggleAuthentication
    };

    useEffect(() => {
        alert(isAuthentication ? "You Are Logged In" : "You Are Log Out. Sign In To See ToDo List")
    }, [])

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

//  dispatch: sẽ truyền type và payload qua reducer 
