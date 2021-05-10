import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from '../store/userActions'
import { removeToken } from '../_helper/auth'

const HeaderSection = ({ history }) => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        removeToken()
        dispatch(userLogout({}))
        history.push('/login')
    }

    const handlePendingList = () => {
        history.push('/pending-list')
    }

    const handleMyFriendsList = () => {
        history.push('/my-friends')
    }

    const handleSuggestionList = () => {
        history.push('/user')
    }

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleSuggestionList}>Suggestion List</button>
            <button onClick={handlePendingList}>Pending List</button>
            <button onClick={handleMyFriendsList}>My Friends List</button>
        </>
    );
};

export default HeaderSection;