import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams();
    return (
        <div className='bg-grey-600 text-white text-3xl p-4'>
            User: {userid}
            {/* //is can now be used here just need to include useParams       */}
        </div>
    )
}

export default User
