import React, { useEffect, useState } from 'react';
import HeaderSection from '../sections/HeaderSection';
import { isAuthenticated, getToken } from '../_helper/auth'
import { setAuthToken } from '../store/userActions'
import { useDispatch } from 'react-redux';
import { httpRequest } from '../_helper/axiosService'

const User = ({ history }) => {

    const [suggestedUsers, setSuggestedUsers] = useState([])
    const [start, setStart] = useState(0)
    const [intervalState, setIntervalState] = useState()

    const dispatch = useDispatch()
    const limit = 2

    useEffect(() => {
        setToken()
        setIntervalState(setInterval(getSuggestionList(), 10000))
    }, [])

    const setToken = () => {
        if (isAuthenticated()) dispatch(setAuthToken(getToken()))
    }

    const getSuggestionList = async () => {
        await httpRequest({
            url: 'user/get-suggestion-list',
            data: { start },
            method: 'POST'
        }).then(response => {
            if (response && response.data) {
                setSuggestedUsers([...response.data])
                setStart(limit + start)
            } else {
                clearInterval(intervalState)
            }
        })
    }

    const handleAddFriend = async userId => {
        await httpRequest({
            url: 'user/send-friend-request',
            data: { userId },
            method: 'POST'
        }).then(response => {
            setSuggestedUsers(suggestedUsers.filter(user => user._id !== userId))
            if (response.message)
                alert(response.message)
        })
    }

    return (
        <>
            <HeaderSection history={history} />
            {suggestedUsers && suggestedUsers.length &&
                <div className='user-suggestion-box'>
                    {suggestedUsers.map(user => (
                        <div className='item' key={user._id}>
                            {user.sName}<br />
                            <button onClick={() => handleAddFriend(user._id)}>Add As Friend</button>
                        </div>
                    ))}
                </div>
            }
        </>
    );
};

export default User;