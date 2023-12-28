import Image from 'next/image';

const AuthHeader = () =>
{
    return(
        <div className='header_wrapper w-full bg-black bg-opacity-25 backdrop-blur-sm max-h-20 flex justify-center sticky top-0 border-b-[1px] border-neutral-700 z-50'>
            <header className='max-w-screen-xl w-full mx-auto my-4 px-6 '>
                    <Image src={"/images/logoWordmark.svg"} alt='Bloom Logo' width={0} height={0} className='w-24'/>
            </header>
        </div>
    );
}

export default AuthHeader;

