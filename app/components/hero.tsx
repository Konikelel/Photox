import Image from 'next/image';

import facebook from '../../public/facebook.svg';
import instagram from '../../public/instagram.svg';
import linkedin from '../../public/linkedin.svg';

export default function Hero() {
    return (
        <section className='flex-col items-center justify-start w-full min-[1600px]:w-3/5'>
            <div className='flex items-center justify-center pb-5'>
                <h2 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-custom-red'>
                    Jan Kowalski
                </h2>
            </div>
            <div className='flex items-center justify-center text-custom-black'>
                <h3 className='text-3xl lg:text-4xl font-medium'>
                    Photographer
                </h3>
            </div>
            <div className='flex items-center justify-center'>
                <Image
                    className='m-3'
                    src={facebook}
                    width={32}
                    height={32}
                    alt='Facebook'
                />
                <Image
                    className='m-3'
                    src={instagram}
                    width={32}
                    height={32}
                    alt='Instagram'
                />
                <Image
                    className='m-3'
                    src={linkedin}
                    width={32}
                    height={32}
                    alt='Linkedin'
                />
            </div>
        </section>
    );
}
