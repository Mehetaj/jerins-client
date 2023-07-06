import React from 'react';
import useAuth from '../../../../HOOKS/useAuth';
import useAxiosSecure from '../../../../HOOKS/useAxiosSecure';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const ManageService = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // const [datas, setDatas] = useState([])
    // useEffect(() => {
    //     axiosSecure.get("/services")
    //         .then(res => {
    //             setDatas(res.data);
    //         })
    // }, [])
    const {data: datas, refetch} = useQuery({
        queryKey: ['delete_sevice'],
        queryFn: async () => {
            const res = await axiosSecure.get("/services");
            return res.data
        }
    })
    // img, name, price, _id

    const handleDelete = (id) => {
        axiosSecure.delete(`/services/${id}`)
        .then(res => {
            console.log(res.data.deletedCount);
        })
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Manage Service</h1>
                <h1 className='text-2xl font-bold'>{user?.displayName}</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                datas?.map((data, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={data.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{data.name}</td>
                                    <td>$ {data.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(data._id)} className="btn btn-ghost bg-red-600 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>

                                        </button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;