import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../../HOOKS/useAxiosSecure';

const OrderList = () => {
    const [carts, setCarts] = useState([]);
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get("/ordered")
        .then(res => {
            console.log(res.data);
        })
    },[])
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Order List</h1>
                <h1 className='text-3xl font-bold'>Order List</h1>
            </div>
            <div className='mt-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#F5F6FA]'>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;