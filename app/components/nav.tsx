import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo.svg';
import menu from '../../public/menu.svg';

export default function Nav() {
    return (
        <nav className='flex sm:flex-wrap justify-between items-center py-4'>
            <div className='mx-5 sm:mx-0'>
                <Image src={logo} width={56} height={56} alt='Logo' />
            </div>
            <Image
                className='visible sm:hidden mx-5 cursor-pointer'
                src={menu}
                width={40}
                height={40}
                alt='Menu'
            />
            <ul className='sm:visible sm:flex hidden my-5 w-4/6 justify-around items-center'>
                <li className='p-1.5 px-5'>
                    <Link href='#about'>About</Link>
                </li>
                <li className='p-1.5 px-5'>
                    <Link href='#portfolio'>Portfolio</Link>
                </li>
                <li className='p-1.5 px-5 rounded-xl bg-custom-red text-custom-white'>
                    <Link href='#contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

/*
 <nav>
            <ul className='flex justify-between items-center p-3 px-10'>
                <li>
                    <Image src={logo} width={56} height={56} alt='Logo' />
                </li>
                <ul className='flex text-lg text-custom-black'>
                    <li className='px-32 p-1.5'>About</li>
                    <li className='px-32 p-1.5'>Portfolio</li>
                    <div className='px-32'>
                        <li className='rounded-xl bg-custom-red p-1.5 px-5 text-custom-white'>
                            Contact
                        </li>
                    </div>
                </ul>
            </ul>
    </nav>
*/
