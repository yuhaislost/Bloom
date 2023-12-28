import Image from 'next/image';
import HomeNavbarItem from './HomeNavbarItem';
import { FaSearch } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import MobileMenu from './MobileMenu';
import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function HomeNavbar ()
{
    const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuVisibility((visibility) => !visibility);
    }, []);

    return (
        <nav className="w-full sticky z-50">
            <ul className="px-12 md:px-24 py-6 flex flex-row items-center transition duration-500 bg-zinc-900">
                <li>
                    <Image src={"/images/logoWordmark.svg"} alt='Bloom Logo' width={0} height={0} className='w-24'/>
                </li>
                <div className='flex-row ml-14 gap-12 hidden lg:flex pt[2px]'>
                    <HomeNavbarItem label='Home' link='/home'/>
                    <HomeNavbarItem label='Courses' link='/home/courses'/>
                    <HomeNavbarItem label='My Education' link='/home/myedu'/>
                    <HomeNavbarItem label='New & Popular' link='/home/courses/hot'/>
                </div>
                <div className='flex flex-row ml-auto gap-7 items-center'>
                    <li className='lg:hidden items-center justify-center ml-auto cursor-pointer pt-[2px]' onClick={toggleMobileMenu}>
                        <BsFillGrid3X3GapFill className='text-white'/>
                    </li>
                    <li className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                        <FaSearch/>
                    </li>
                    <li className='flex flex-row items-center gap-2 cursor-pointer relative'>
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <Image src={}/>
                        </div>
                    </li>
                </div>
            </ul>
            <AnimatePresence>
                <MobileMenu visible={mobileMenuVisibility} toggleVisibility={toggleMobileMenu}/>
            </AnimatePresence>
        </nav>
    );
}