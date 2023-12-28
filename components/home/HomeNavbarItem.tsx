import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavbarItemProps{
    label: string;
    link: string;
    className?: string;
    onMouseOver?: any;
    textClassName?: string;
    variants?: any;
    initial?: string;
    animate?: string;
    exit?: string;
};

export default function HomeNavbarItem({label, link, className, textClassName, onMouseOver, variants, initial, animate, exit} : NavbarItemProps)
{
    return (
        <motion.li className={`text-white cursor-pointer transition ${className}`} onMouseOver={onMouseOver} initial={initial} animate={animate} exit={exit} whileHover={{}}>
            <Link href={link} className={textClassName}>{label}</Link>
        </motion.li>
    )
}