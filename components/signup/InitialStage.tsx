import Input from '@/components/Input';
import { FormEvent, FormEventHandler } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';


const InitialStage = ({handleFormChange, signUpFormInformation, stepFunction, handleRegister}: MultiStepSignupProps) =>
{
    function onSumbitHandler(event: FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        stepFunction();
    }

    return (
        <>
            <h2 className="text-white text-3xl font-semibold z-20 mt-auto">Welcome to Bloom</h2>
            <div className='flex flex-col gap-3 justify-center w-full'>
                <form className='flex flex-col gap-4 self-center w-full max-w-[380px] z-20' onSubmit={onSumbitHandler}>
                    <Input id={"email"} name="Email" onChange={handleFormChange} label="Email" value={signUpFormInformation.Email} type="email" required/>
                    <button className='bg-primary-green text-white rounded-md w-full border-[1px]
                        border-primary-green hover:bg-transparent hover:text-primary-green basic-transition
                        self-center flex px-6 py-3 items-center'>
                            <FaRegEnvelope className='h-6 w-6'/>
                            <span className='ml-auto mr-auto'>Continue with Email</span>
                    </button>
                </form>
            </div> 
        </>
    )
};

export default InitialStage;