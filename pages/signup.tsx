import Image from 'next/image';
import Link from 'next/link';
import AuthHeader from '@/components/AuthHeader';
import { useState, useCallback } from 'react';
import InitialStage from '@/components/signup/InitialStage';
import CreationStage from '@/components/signup/CreationStage';
import axios from 'axios';
import CompletetionStage from '@/components/signup/CompletetionStage';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const Signup = () => {

    const router = useRouter();

    const [signUpForm, setSignUpForm] = useState({
        Username: '',
        Email: '',
        Password: '',
    });

    const [formStep, setFormStep] = useState(1);


    function handleFormChange (event : Event)
    {
        const target = event.target as HTMLInputElement;
        const inputName = target.name;
        const value = target.value;
        setSignUpForm({...signUpForm, [inputName]:value});
    };

    function forwardStep(){
        if (formStep < 3)
            setFormStep(formStep + 1);
    }

    function backwardStep()
    {
        if (formStep > 1)
            setFormStep(formStep - 1);
    }

    const login = useCallback(async()=>{
        const email = signUpForm.Email;
        const password = signUpForm.Password;

        try{
            await signIn('credentials', {email: email, password: password, redirect: false, callbackUrl: '/home'});
        } catch (error){
            console.log(error);
        }

    }, [signUpForm.Email, signUpForm.Password]);

    const register = useCallback( async() => {
        try{
            const name = signUpForm.Username;
            const email = signUpForm.Email;
            const password = signUpForm.Password;

            await axios.post('/api/register', {
                name,
                password,
                email 
            });

            login();
        }catch(error){
            console.log(error);
        }
    }, [signUpForm.Username, signUpForm.Password, signUpForm.Username, login]);

    function containerClickHandler ()
    {
        if (formStep === 3)
        {
            router.push('/home');
        }
    }

    let containerClass = 'flex flex-col justify-center min-h-[calc(100vh-5rem)] gap-10 items-center w-full px-3 md:px-0 py-5';

    if (formStep == 3)
    {
        containerClass='flex flex-col justify-center min-h-[calc(100vh-5rem)] gap-10 items-center w-full px-3 md:px-0 py-5 cursor-pointer';
    }


    return(
        <div className="relative lg:h-screen w-full">
            <AuthHeader/>
            <div className={containerClass} onClick={containerClickHandler}>
                {formStep != 3 && <Image src={"/images/radialPurple.svg"} width={0} height={0} alt='' className='hidden md:block w-[25rem] absolute -translate-x-[18vw] -translate-y-[100px] lg:-translate-x-[240px] lg:-translate-y-[130px] z-10'/>}
                {formStep != 3 &&  <Image src={"/images/radialGreen.svg"} width={0} height={0} alt='' className='hidden md:block w-[25rem] absolute -translate-x-[25vw] -translate-y-[200px] lg:-translate-x-[380px] lg:-translate-y-[200px] z-0'/>}
                {formStep===1 && <InitialStage handleFormChange={handleFormChange} signUpFormInformation={signUpForm} stepFunction={forwardStep} handleRegister={register}/>}
                {formStep===2 && <CreationStage handleFormChange={handleFormChange} signUpFormInformation={signUpForm} stepFunction={forwardStep} handleRegister={register}/>}
                {formStep=== 3 && <CompletetionStage Name={signUpForm.Username}/> }
                {formStep != 3 && 
                    <div className='mt-auto'>
                        <div className='flex gap-4 items-center'>
                            <span className='text-white font-light text-sm'>Already have an account?</span>
                            <Link className='bg-none border-outline-gray border-[2px] text-white py-1 px-6 rounded-md text-sm basic-transition hover:border-white' href={'/login'}> Login </Link>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
}

export default Signup;