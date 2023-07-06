import React from 'react';
import bookImg from '../../assets/icons/Group.png'
import bookListImg from '../../assets/icons/Group 1360.png'
import reviewImg from '../../assets/icons/Group 1368.png'
import logo from '../../assets/logo.png'
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../HOOKS/useAdmin';
import manage from '../../assets/manage.png'

const Dashboard = () => {

    // const [isAdmin, setIsAdmin] = useState(true);
    const [isAdmin] = useAdmin()
    
    // console.log(isAdmin);

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#E5E5E5] rounded-lg p-10">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <img className='mb-16' width={130} src={logo} alt="" />
                                <li><Link to="/dashboard/order_list">
                                    <img width={20} src={bookImg} alt="" />
                                    Order list
                                </Link></li>
                                <li><Link to="/dashboard/add_service">
                                    <img width={20} src={bookListImg} alt="" />
                                    Add Service
                                </Link></li>
                                <li><Link to="/dashboard/make_admin">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                        </svg>

                                    </span>
                                    Make Admin
                                </Link></li>
                                <li><Link to="/dashboard/manage_service">
                                    <img src={manage} alt="" />
                                    Manage Service
                                </Link></li>
                                <div className="divider w-1/2"></div>
                                <Link to={'/'} className='btnp w-[60%]'>Back to Home</Link>
                            </>
                                :
                                <>
                                    <img className='mb-16' width={130} src={logo} alt="" />
                                    <li><Link to="/dashboard/books">
                                        <img width={20} src={bookImg} alt="" />
                                        Book
                                    </Link></li>
                                    <li><Link to="/dashboard/bookinglist">
                                        <img width={20} src={bookListImg} alt="" />
                                        Booking list
                                    </Link></li>
                                    <li><Link>
                                        <img width={20} src={reviewImg} alt="" />
                                        Review
                                    </Link></li>
                                    <div className="divider w-1/2"></div>
                                    <Link to={'/'} className='btnp w-[60%]'>Back to Home</Link>
                                </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;