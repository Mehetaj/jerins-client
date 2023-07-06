import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({item}) => {
    const {img,name, description, price, _id} = item
    return (
        <div className='bg-base-100 rounded-xl p-10 mr-10'>
            <div className='flex items-center justify-between'>
            <img className='w-[80px]' src={img} alt="" />
            <p>
                {
                    item.status ? <span className='bg-[#C6FFE0] py-3 px-7'>{item.status}</span> : <span className='bg-[#FFE3E3] text-[#FF4545] rounded-md py-3 px-7'>Pending</span>
                }
            </p>
            </div>
            <h1 className='text-2xl font-bold my-4'>{name}</h1>
            <p className=''>{description}</p>
            <div className='flex justify-between mt-6 items-center'>
            <p className='text-red-600 font-semibold'>${price}</p>
            <button className='btnp'><Link to={`/dashboard/payment/${_id}`}>Pay</Link></button>
            </div>
        </div>
    );
};

export default Cart;