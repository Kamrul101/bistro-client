import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBeer,FaShoppingCart ,FaWallet,FaCalendar,FaHome, FaHamburger} from 'react-icons/fa';
const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full ">
      {/* Sidebar content here */}
      <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
      <li><NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
      <li><NavLink><FaCalendar></FaCalendar>Reservations</NavLink></li>
      <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
      <div className="divider"></div>
      <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
      <li>
        <NavLink to="/menu"><FaHamburger></FaHamburger> Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
    </ul>
  
  </div>
</div>
    );
};

export default DashboardLayout;