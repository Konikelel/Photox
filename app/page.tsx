import { Intro, Gallery, Contact, LaxPlace } from '../app/components/index';

import iceland from '../public/iceland.jpg';
import italy from '../public/italy.jpg';
import canada from '../public/canada.jpg';

export default function Home() {
    return (
        <main>
            <Intro />
            <LaxPlace background={iceland.src} name={'Iceland'} id={'about'} />
            <LaxPlace background={italy.src} name={'Italy'} />
            <LaxPlace background={canada.src} name={'Canada'} />
            <Gallery />
            <Contact />
        </main>
    );
}
