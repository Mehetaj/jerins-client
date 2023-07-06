import React from 'react';
import useCart from '../../../../HOOKS/useCart';
import Cart from './Cart';
import useAuth from '../../../../HOOKS/useAuth';

const Carts = () => {
    const [cart, refetch] = useCart();
    const {user} = useAuth()
    // console.log(cart);
    return (
        <div>
            <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-semibold'>Service List</h1>
            <h1 className='text-2xl font-bold font-serif'>{user?.displayName}</h1>
            </div>

            <div className='grid mt-10  p-10 md:grid-cols-2'>
                {
                    cart.map(item => <Cart key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Carts;