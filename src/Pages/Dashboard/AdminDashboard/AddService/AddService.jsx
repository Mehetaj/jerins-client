import React from 'react';
import useAuth from '../../../../HOOKS/useAuth';
import useAxiosSecure from '../../../../HOOKS/useAxiosSecure';
import Swal from 'sweetalert2';

// add pic title price description

const AddService = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.photo.files[0]
        const name = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const service = { name, price, description, img }
        console.log(service);
        const formData = new FormData();
        formData.append('img', img)
        console.log(img);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_token}`

        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data) {
                //     axiosSecure.post("/services", service)
                //         .then(res => {
                //             if (res.data) {
                //                 Swal.fire({
                //                     position: 'center',
                //                     icon: 'success',
                //                     title: 'Service Added',
                //                     showConfirmButton: false,
                //                     timer: 1500
                //                 })
                //             }
                //         })
                // }
            })

    }
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Add Service</h1>
                <h1 className='text-2xl font-bold'>{user?.displayName}</h1>
            </div>
            <div className=''>
                <form onSubmit={handleAddService}>
                    <div className='mt-12 bg-[#FFFFFF] px-6 py-8 w-[1000px] rounded-lg flex items-start  justify-between gap-10'>
                        <div>
                            <div>
                                <label>Service Title</label>
                                <input className='w-[450px] mt-3 block h-10 bg-[#FFFFFF] rounded-sm border border-gray-700' type="text" name="title" id="" />
                            </div>
                            <div className='mt-5'>
                                <label>Price</label>
                                <input className='w-[450px] mt-3 block h-10 bg-[#FFFFFF] rounded-sm border border-gray-700' type="text" name="price" id="" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default size</label>
                                <input name='photo' type="file" className="file-input file-input-bordered w-full" />
                            </div>
                            <div className='mt-4'>
                                <label>Description</label>
                                <textarea className='w-[450px] mt-3 block textarea h-12 bg-[#FFFFFF] border rounded-sm border-gray-700' type="text" name="description" id="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end -mr-48'>
                        <input type="submit" value="Submit" className='btnp mt-6' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;