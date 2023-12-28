import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import TickAnimationData from '@/assets/SuccessTickAnimation.json';

const container = {
    initial: {
        transition: {
            staggerChildren:0.35,
        },
    },
};

const SuccessTick = () => {
    return (
        <>
            <Lottie animationData={TickAnimationData} loop={false}/>
        </>
    )
}

export default SuccessTick;