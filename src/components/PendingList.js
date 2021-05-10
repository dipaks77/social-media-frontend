import React, { useEffect, useState } from 'react';
import { httpRequest } from '../_helper/axiosService'
import HeaderSection from '../sections/HeaderSection';

const PendingList = ({ history }) => {

    const [pendingList, setPendingList] = useState([])

    useEffect(() => {
        getPendingList()
    }, [])

    const getPendingList = async () => {
        await httpRequest({
            url: 'user/get-pending-requests',
            method: 'POST'
        }).then(response => {
            if (response && response.data) setPendingList([...response.data])
        })
    }

    const handleAcceptRequest = async userId => {
        await httpRequest({
            url: 'user/accept-friend-request',
            data: { userId },
            method: 'POST'
        }).then(response => {
            setPendingList(pendingList.filter(user => user._id !== userId))
            if (response.message)
                alert(response.message)
        })
    }

    const handleRejectRequest = async userId => {
        await httpRequest({
            url: 'user/reject-friend-request',
            data: { userId },
            method: 'POST'
        }).then(response => {
            setPendingList(pendingList.filter(user => user._id !== userId))
            if (response.message)
                alert(response.message)
        })
    }

    return (
        <>
            <HeaderSection history={history} />
            {pendingList && pendingList.length &&
                <div>
                    {pendingList.map(user => (
                        <div className='item' key={user._id}>
                            {user.sName}<br />
                            <button onClick={() => handleAcceptRequest(user._id)}>Accept</button>
                            <button onClick={() => handleRejectRequest(user._id)}>Reject</button>
                        </div>
                    ))}
                </div>
            }
        </>
    );
};

export default PendingList;