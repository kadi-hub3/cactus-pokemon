import React from "react";

const Navbar = () => {
  return (
    <nav className="h-10 xl:h-20 w-screen flex items-center justify-items-center p-10 bg-gray-900">
         <img src='/pokemon-logo.svg' className='h-12 w-full'  alt='logo' />
    </nav>
  );
};

export default Navbar;
