import React from 'react'
import { SiTailwindcss } from 'react-icons/si';

export default function Navbar() {
    return (
        <>
            <nav className='px-20 py-4 bg-white-500 text-black flex'>
                <div className="flex grow ">
                    <SiTailwindcss size={30} />
                </div>
                <ul className='flex space-x-4 font-bold'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>Login</li>
                </ul>
            </nav>
        </>
    );
};
