import SuccessTick from '@/components/SuccessTick';
import { motion } from 'framer-motion';

interface CompletetionStageProps{
    Name: String;
};

const CompletetionStage = ({Name}:CompletetionStageProps) => {
    const welcomeText = ["Hahah, great! It's good to have", `you on aboard, ${Name}.`];
    const sentence = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.03,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y:50},
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <>
            <div className='w-[260px] mt-auto'>
                <SuccessTick/>
            </div>
            <motion.div className='text-white text-center font-medium text-lg w-[270px] flex flex-col' variants={sentence} initial="hidden" animate="visible">
                {
                    welcomeText.map((phrase, i) => {
                        return (
                            <p key={i}>
                                {phrase.split("").map((char, index) => {
                                    return(
                                        <motion.span key={char + '_' + index} variants={letter}>
                                            {char}
                                        </motion.span>
                                    );
                                })}
                            </p>
                        );
                    })
                }
            </motion.div>
            <motion.p initial={{y:0, opacity: 0}} animate={{y:-20, opacity: 1}} exit={{y:0}} transition={{ delay: 1, duration:1, repeat: Infinity, repeatType:"mirror"}} className='text-white font-light mt-auto'>Click anywhere to exit</motion.p>
        </>
    )
}

export default CompletetionStage;