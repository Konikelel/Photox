import Image from 'next/image';

import background from '../../public/end_background.jpg';
import inbox from '../../public/inbox.svg';
import phone from '../../public/phone.svg';

const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${background.src})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60%',
};

export default function ParallaxOneImg() {
    return (
        <section
            className='h-100v w-full flex justify-center items-center'
            style={backgroundStyle}
            id='contact'
        >
            <div className='h-4/6 w-full bg-custom-white bg-opacity-50 flex flex-col justify-center items-center'>
                <h2 className='mb-10 text-5xl min-[440px]:text-6xl sm:text-8xl md:text-9xl lg:text-10xl font-bold text-custom-red'>
                    Get in touch
                </h2>
                <div>
                    <div className='flex justify-start items-center'>
                        <Image
                            className='m-3'
                            src={inbox}
                            width={32}
                            height={32}
                            alt='Mail'
                        />
                        <h3 className='mx-5 text-1xl min-[440px]:text-2xl sm:text-3xl font-medium text-custom-black'>
                            jankowalski@gmail.com
                        </h3>
                    </div>
                    <div className='flex justify-start items-center'>
                        <Image
                            className='m-3'
                            src={phone}
                            width={32}
                            height={32}
                            alt='Phone'
                        />
                        <h3 className='mx-5 text-1xl min-[440px]:text-2xl sm:text-3xl font-medium text-custom-black'>
                            +47 123 123 894
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
