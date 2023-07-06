import React from 'react';
import google from '../../../assets/icons/Group 573.png'
import useAuth from '../../../HOOKS/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../HOOKS/useAxiosSecure';

const Popup = () => {
    const { googleSignIn } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const navigate = useNavigate()
    const handleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const savedUser = {name: loggedInUser.displayName, email: loggedInUser.email}
                if (loggedInUser) {
                    axiosSecure.post("/users", savedUser)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                navigate("/")
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })
                }
            })
    }
    return (
        <div onClick={handleSignIn} className='p-10 cursor-pointer flex justify-center items-center'>
            <div className='flex border px-6 py-2 rounded-3xl items-center gap-10'>
                <img width={30} src={google} alt="" />
                <button><p>Continue With Google</p></button>
            </div>
        </div>
    );
};

export default Popup;