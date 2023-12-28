import Image from 'next/image';
import { FaXmark } from "react-icons/fa6";
import HomeNavbarItem from './HomeNavbarItem';
import { useState } from 'react';
import { motion as m, AnimatePresence, stagger } from 'framer-motion';

interface MobileMenuProps{
    visible?: boolean;
    toggleVisibility: any;
}

export default function MobileMenu({visible, toggleVisibility} : MobileMenuProps)
{
    if (!visible)
    {
        return null;
    }

    const [menuItemIndex, setMenuItemIndex] = useState(0);
    const bgMovementData = ['20', '40', '60', '80', '100'];
    const [menuHover, setMenuHover] = useState(false);

    const mobileMenuVariant = {
        hidden:{
            opacity: 0,
            x:'100vw',
        },
        show:{
            opacity: 1,
            x:0,
            transition:{
                duration: 1,
                staggerChildren: 0.5,
            }
        },
        exit:{
            opacity: 0,
            height: 0,
        }
    }

    const mobileMenuItemsVariant = {
        hidden:{
            opacity: 0,
            y: 10,
        },
        show:{
            opacity: 1,
            y: 0,
            transition:{
                duration: 2,
            },
            delay: stagger(0.1)
        },
        exit:{
            opacity: 0,
        }
    }

    return (
        <m.div className="bg-black w-screen h-screen absolute top-0 px-12 py-6 overflow-y-hidden"
            variants={mobileMenuVariant} initial='hidden' animate='show' exit='exit'
        >
            <header className='flex flex-row items-center justify-between z-[2] relative'>
                <Image src={"/images/logoWordmark.svg"} alt='Bloom Logo' width={0} height={0} className='w-24'/>
                <div className='cursor-pointer' onClick={toggleVisibility}>
                    <FaXmark className='text-white h-8 w-8'/>
                </div>
            </header>
            <m.ul className='flex flex-col mt-20 gap-10 group z-[2] relative w-[60%]' id='mob-menu' onMouseEnter={()=>setMenuHover(true)} onMouseLeave={()=>setMenuHover(false)} variants={mobileMenuItemsVariant}>
                <HomeNavbarItem label='Home' link='/home' className='mob-menu-items' textClassName='text-3xl' onMouseOver={() => setMenuItemIndex(0)}  variants={mobileMenuItemsVariant}  initial="hidden" animate="show" exit="exit"/>
                <HomeNavbarItem label='Courses' link='/home/courses' className='mob-menu-items' textClassName='text-3xl' onMouseOver={() => setMenuItemIndex(1)} variants={mobileMenuItemsVariant} initial="hidden" animate="show" exit="exit"/>
                <HomeNavbarItem label='My Education' link='/home/myedu' className='mob-menu-items' textClassName='text-3xl' onMouseOver={() => setMenuItemIndex(2)} variants={mobileMenuItemsVariant}/>
                <HomeNavbarItem label='New & Popular' link='/home/courses/hot' className='mob-menu-items' textClassName='text-3xl' onMouseOver={() => setMenuItemIndex(3)} variants={mobileMenuItemsVariant} initial="hidden" animate="show" exit="exit"/>
                <HomeNavbarItem label='Profile' link='/home/courses/hot' className='mob-menu-items' textClassName='text-3xl' onMouseOver={() => setMenuItemIndex(4)} variants={mobileMenuItemsVariant} initial="hidden" animate="show" exit="exit"/>
            </m.ul> 
            <div className={`h-screen w-screen dotted-bg`} style={{backgroundPositionY: `${bgMovementData[menuItemIndex]}%`}} id='mob-menu-bg'></div>
        </m.div>
);
}