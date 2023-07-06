import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Signup from "../Pages/Login/Signup/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Book from "../Pages/Dashboard/UserDashboard/Book/Book";
import Carts from "../Pages/Dashboard/UserDashboard/Carts/Carts";
import MakeAdmin from "../Pages/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin";
import OrderList from "../Pages/Dashboard/AdminDashboard/OrderList/OrderList";
import Payment from "../Pages/Dashboard/UserDashboard/payment/payment";
import AddService from "../Pages/Dashboard/AdminDashboard/AddService/AddService";
import ManageService from "../Pages/Dashboard/AdminDashboard/ManageService/ManageService";
import AdminUser from "../Pages/Dashboard/admin_user/admin_user";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <AdminUser />
            },
            {
                path: 'books',
                element: <Book />
            },
            {
                path: 'bookinglist',
                element: <Carts />
            },
            {
                path: 'payment/:id',
                element: <Payment />
            }
            // Admin Routes
            ,
            {
                path: 'make_admin',
                element: <MakeAdmin />
            },
            {
                path: 'order_list',
                element: <OrderList />
            },
            {
                path: 'add_service',
                element: <AddService />
            },
            {
                path: 'manage_service',
                element: <ManageService />
            }
        ]
    }
]);

export default router