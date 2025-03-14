"use client"

import Link from "next/link";

const Navbar = () => {
    const links = <>
        <li className="uppercase text-white font-bold"><Link href='/'>Home</Link></li>
        <li className="uppercase text-white font-bold"><Link href='/services'>Services</Link></li>
        <li className="uppercase text-white font-bold"><Link href='/support'>Support</Link></li>
        <li className="uppercase text-white font-bold"><Link href='/about'>About Us</Link></li>
    </>

    return (
        <div className="navbar container text-white mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href='/' className="uppercase text-green-600 text-3xl font-bold">ISP+</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;