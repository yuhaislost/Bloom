
import Input from '@/components/Input';
import { FormEvent } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';


const CreationStage = ({handleFormChange, signUpFormInformation, stepFunction, handleRegister}: MultiStepSignupProps) =>
{
    function onSubmitHanlder(event : FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        stepFunction();
    }

    return (
        <>
            <h2 className="text-white text-3xl font-semibold z-20 mt-auto">Sweet, Almost There!</h2>
            <div className='flex flex-col gap-3 justify-center w-full'>
                <form className='flex flex-col gap-4 self-center w-full max-w-[380px] z-20' onSubmit={onSubmitHanlder}>
                    <Input id={"password"} name="Username" onChange={handleFormChange} label="Username" value={signUpFormInformation.Username} type="text" required/>
                    <Input id={"password"} name="Password" onChange={handleFormChange} label="Password" value={signUpFormInformation.Password} type="password" required/>
                    <button className='bg-primary-green text-white rounded-md w-full border-[1px]
                        border-primary-green hover:bg-transparent hover:text-primary-green basic-transition
                        self-center flex px-6 py-3 items-center' onClick={handleRegister}>
                            <FaRegEnvelope className='h-6 w-6'/>
                            <span className='ml-auto mr-auto'>Let's Get Started</span>
                    </button>
                </form>
            </div> 
        </>
    )
};

export default CreationStage;