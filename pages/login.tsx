import AuthHeader from '@/components/AuthHeader';
import Input from '@/components/Input';
import 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    const router = useRouter();

    const [loginForm, setLoginForm] = useState({
        Email: '',
        Password: '',
    });

    const handleFormChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const inputName = target.name;
        const inputValue = target.value;
        setLoginForm({...loginForm, [inputName]: inputValue});
    }

    const login = useCallback(async()=>{
        const email = loginForm.Email;
        const password = loginForm.Password;

        try{
            await signIn('credentials', {email: email, password: password, redirect: false, callbackUrl: '/'});
            router.push('/home');
        } catch (error){
            console.log(error);
        }

    }, [loginForm.Email, loginForm.Password, router])


    return (
        <div className="relative lg:h-screen w-full">
            <AuthHeader/>
            <div className='flex flex-col justify-center min-h-[calc(100vh-5rem)] gap-10 items-center w-full px-3 md:px-0 py-5'>
                <Image src={"/images/radialPurple.svg"} width={0} height={0} alt='' className='hidden md:block w-[25rem] absolute -translate-x-[18vw] -translate-y-[100px] lg:-translate-x-[240px] lg:-translate-y-[130px] z-10'/>
                <Image src={"/images/radialGreen.svg"} width={0} height={0} alt='' className='hidden md:block w-[25rem] absolute -translate-x-[25vw] -translate-y-[200px] lg:-translate-x-[380px] lg:-translate-y-[200px] z-0'/>
                <h2 className="text-white text-3xl font-semibold z-20 mt-auto">Log in to Bloom</h2>
                <div className='flex flex-col gap-3 justify-center w-full'>
                    <form className='flex flex-col gap-4 self-center w-full max-w-[380px] z-20' onSubmit={(event)=>{event.preventDefault();}}>
                            <Input id={"email"} name="Email" onChange={handleFormChange} label="Email" value={loginForm.Email} type="email" required/>
                            <Input id={"password"} name="Password" onChange={handleFormChange} label="Password" value={loginForm.Password} type="password" required/>
                            <button className='bg-primary-green text-white rounded-md w-full border-[1px]
                        border-primary-green hover:bg-transparent hover:text-primary-green basic-transition
                        self-center flex px-6 py-3 items-center' onClick={login}>
                            <FaRegEnvelope className='h-6 w-6'/>
                            <span className='ml-auto mr-auto'>Login with Email</span>
                        </button>
                    </form>
                </div>
                <div className='flex items-center justify-center ml-auto mr-auto gap-[20px]'>
                    <div className='w-[160px] h-[2px] bg-outline-gray'></div>
                    <p className='text-white'>Or</p>
                    <div className='w-[160px] h-[2px] bg-outline-gray'></div>
                </div>
                <button className='bg-[#171717] text-white rounded-md w-full border-[1px]
                        border-outline-gray hover:bg-transparent hover:border-white basic-transition
                        self-center flex px-6 py-3 items-center max-w-[380px]' onClick={() => signIn('google', {callbackUrl: '/home'})}>
                            <FaGoogle className='h-6 w-6'/>
                            <span className='ml-auto mr-auto'>Continue with Google</span>
                        </button>
                <div className='mt-auto'>
                    <div className='flex gap-4 items-center'>
                        <span className='text-white font-light text-sm'>Don't have an account?</span>
                        <Link className='bg-none border-outline-gray border-[2px] text-white py-1 px-6 rounded-md text-sm basic-transition hover:border-white' href={'/signup'}> Sign up </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

