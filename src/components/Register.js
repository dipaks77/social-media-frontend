import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../store/userActions'
import { setToken } from '../_helper/auth'

const Register = ({ history }) => {
    const [registerState, setRegisterState] = useState({
        sName: '',
        sEmail: '',
        sPassword: ''
    })

    // store
    const dispatch = useDispatch()
    const token = useSelector(state => state.user.token)

    const handleInput = ev => {
        const { id, value } = ev.target
        setRegisterState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    // 
    const handleRegister = ev => {
        ev.preventDefault()
        dispatch(userRegister(registerState))
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
            <form noValidate onSubmit={handleRegister}>
                <input type='text' id='sName' onInput={handleInput} placeholder='Enter Fullname' /><br />
                <input type='email' id='sEmail' onInput={handleInput} placeholder='Enter Username' /><br />
                <input type='password' id='sPassword' onInput={handleInput} placeholder='Enter Password' /><br />
                <input type='submit' value='Register' /><br />
                Or <button onClick={() => history.push('/login')}>Login</button>
            </form>
        </>
    );
};

export default Register;