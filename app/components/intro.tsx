import Hero from './hero';
import Nav from './nav';

import background from '../../public/hero-background.jpg';

const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${background.src})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60%',
};

export default function Intro() {
    return (
        <section style={backgroundStyle}>
            <div className='mx-auto min-h-full w-full sm:w-11/12'>
                <Nav />
                <div className='mt-14 sm:mt-28 min-[1700px]:mt-56'>
                    <Hero />
                </div>
            </div>
        </section>
    );
}
