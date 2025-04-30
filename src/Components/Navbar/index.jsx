import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Navbar = () => {
  return (
    <>
      <div className="mx-auto max-w-11/12 flex pt-4 pb-4 justify-between items-center">
        <div>
          <Link to="/"> 
          <img src="/Logos/logo.svg" />
          </Link>
        </div>
        <div className="flex gap-5">
          <Link to="/" className="focus:text-green-700 text-[1.3rem]">Main Page</Link>
          <Link to="/categories" className="focus:text-green-700 text-[1.3rem]">Categories</Link>
          <Link to='/allproducts' className="focus:text-green-700 text-[1.3rem]">All products</Link>
          <Link to="/allSales" className="focus:text-green-700 text-[1.3rem]">All sales</Link>
        </div>
        <div>
       <Link> <HiOutlineShoppingBag className="text-5xl hover:text-green-700"/></Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
