import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content mt-6 mx-8">
                    <h2 className='text-4xl text-center text-purple-500 font-bold mb-6'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/addReviews">Add a Reviews</Link></li>
                        <li><Link to="/dashboard/profile">My Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;