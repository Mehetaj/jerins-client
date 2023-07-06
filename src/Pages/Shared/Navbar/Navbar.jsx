import React from 'react';
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../HOOKS/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth()

    const handleSignOut = e => {
        logOut()
    }

    return (
        <div className='flex justify-between items-center'>
            <img width={125} height={48} src={logo} alt="" />
            <div className='navlinks flex items-center'>
                <NavLink to="/" style={({ isActive, isPending }) => { return { fontWeight: isActive ? "active" : "inactive", color: isPending ? "red" : "black", }; }}>Home</NavLink>
                <NavLink to="/dashboard" style={({ isActive, isPending }) => { return { fontWeight: isActive ? "active" : "inactive", color: isPending ? "red" : "black" }; }}>Dashboard</NavLink>
                <NavLink to="/team" style={({ isActive, isPending }) => { return { fontWeight: isActive ? "active" : "inactive", color: isPending ? "red" : "black", }; }}>Our Team</NavLink>
                <NavLink to="/contact" style={({ isActive, isPending }) => { return { fontWeight: isActive ? "active" : "inactive", color: isPending ? "red" : "black", }; }}>Contact Us</NavLink>
                {
                    user ?
                        <div className='flex items-center gap-6'>
                            {user.photoURL ? <img className='w-12 rounded-full h-12' src={user.photoURL}/> : ''}
                            <button onClick={handleSignOut} className='btnp'>Log out</button>
                        </div>
                        :
                        <NavLink to="/login"><button className='btnp'>Login</button></NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;