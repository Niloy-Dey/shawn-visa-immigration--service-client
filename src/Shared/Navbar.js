import React from 'react';
import Marquee from 'react-fast-marquee';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-10  py-5'>
                <div>
                    <h1 className='text-4xl font-bold text-red-600 '>Immigration & Visa Service</h1>
                </div>
                <div className=' font-bold text-red-600'>
                    <p>Facebook</p>
                    <p>abcd@gmail.com</p>
                </div>

            </div>

            <div className="navbar bg-red-600 text-white px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-600 text-white rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Service</a></li>
                        <li><a>About Us</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <p className=" text-2xl text-white font-bold  ">Shawn & Peter LLC</p>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Service</a></li>
                        <li><a>About Us</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>


            <Marquee gradient="true"  gradientWidth="0" className='pt-5 pb-2 bg-neutral font-bold text-xl text-white  ' speed="40">
            We sincerely apologize for the temporary inconvenience as our website maintenance work is ongoing
            </Marquee>
        </div>
    );
};

export default Navbar;