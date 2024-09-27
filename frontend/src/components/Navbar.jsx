import React from "react";


const Navbar = () => {
  return <nav className="flex justify-between items-center" >
    <div className="m-4">
    <a href="/" >VedShare</a>
    </div>

    <ul className="flex">
      <li className="m-4"><a href="/home ">Home</a></li>
      <li className="m-4"><a href="/about">About Us</a></li>
      <li className="m-4"><a href="/contact">Contact Us</a></li>

      <li className="m-4 border-2 border-black ">
        <input type="text" className="ml-2 outline-none" placeholder="Search" />
        <button className="bg-slate-500 text-white  px-4">Search</button>
      </li>

      <li className="m-4"><a href="/signin">Login/Signup</a></li>
      <li className="m-4"><a href="/cart">Cart</a></li>

    </ul>
  </nav>
  
};

export default Navbar;
