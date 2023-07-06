import React from 'react';
import useAuth from '../../../HOOKS/useAuth';

const AdminUser = () => {
    const { user } = useAuth();
    return (
        <div className='flex items-center justify-center'>
            <div>
            <div className=' flex justify-center m-4'>
                <img className='w-[100px] border border-red-500 rounded-full p-1' src={user?.photoURL} alt="" />
            </div>
           <h1 className='text-3xl font-bold'>Welcome Back, {user?.displayName || 'anonymous'}</h1>
           <h2 className='font-semibold mt-4'>Email Address: {user?.email || 'unknown'}</h2>
            </div>
        </div>

    );
};

export default AdminUser;