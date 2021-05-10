import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../store/userActions'
import { setToken } from '../_helper/auth'

const Login = ({ history }) => {

    // 
    const [loginState, setLoginState] = useState({
        sEmail: '',
        sPassword: ''
    })

    // store
    const dispatch = useDispatch()
    const token = useSelector(state => state.user.token)

    // 
    const handleInput = ev => {
        const { id, value } = ev.target
        setLoginState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    // 
    const handleLogin = ev => {
        ev.preventDefault()
        dispatch(userLogin(loginState))
    }

    // 
    useEffect(() => {
        if (token) {
            setToken(token)
            history.push('/user')
        }
    }, [token])

    return (
        <>
            <form noValidate onSubmit={handleLogin}>
                <input type='email' id='sEmail' onInput={handleInput} placeholder='Enter Username' /><br />
                <input type='password' id='sPassword' onInput={handleInput} placeholder='Enter Password' /><br />
                <input type='submit' value='Login' /><br />
                Or <button onClick={() => history.push('/register')}>Signup</button>
            </form>
        </>
    );
};

export default Login;