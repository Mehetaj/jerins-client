import React from 'react';
import useAxiosSecure from '../../../../HOOKS/useAxiosSecure';
import useAuth from '../../../../HOOKS/useAuth';
import adminPic from '../../../../assets/admin.jpg'
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const [axiosSecure] = useAxiosSecure();
    // const [users, setUsers] = useState([]);
    const { user } = useAuth()
    // useEffect(() => {
    //     axiosSecure.get("/users")
    //         .then(res => {
    //             setUsers(res.data);
    //         })
    // }, []);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data
        }
    })

    const handleAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold font-serif'>Make Admin</h1>
                <h1 className='text-3xl font-bold font-serif'>{user?.displayName}</h1>
            </div>
            <div className='mt-10 bg-white p-10 rounded-lg'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className=' bg-gray-200'>
                            <tr className=''>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make  Admin</th>
                                <th>Remove Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        {user?.name}
                                    </td>
                                    <td>
                                        {user?.email}
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' : <button onClick={() => handleAdmin(user)} className='btn btn-sm bg-gray-100'>
                                                <img className='w-7 h-7' src={adminPic} alt="" />
                                            </button>
                                        }
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
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

export default MakeAdmin;