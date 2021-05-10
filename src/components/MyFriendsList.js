import React, { useState, useEffect } from 'react';

import { httpRequest } from '../_helper/axiosService'
import HeaderSection from '../sections/HeaderSection';
const MyFriendsList = ({ history }) => {
    const [myFriendsList, setMyFriendsList] = useState([])

    useEffect(() => {
        getMyFriendsList()
    }, [])

    const getMyFriendsList = async () => {
        await httpRequest({
            url: 'user/get-friends-list',
            method: 'POST'
        }).then(response => {
            if (response && response.data) setMyFriendsList([...response.data])
        })
    }

    return (
        <>
            <HeaderSection history={history} />
            {myFriendsList && myFriendsList.length &&
                <div>
                    {myFriendsList.map(user => (
                        <div className='item' key={user._id}>
                            {user.sName}<br />
                        </div>
                    ))}
                </div>
            }
        </>
    );
};

export default MyFriendsList;