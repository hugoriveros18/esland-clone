/* eslint-disable @next/next/no-img-element */
import InfoPremioSection from '@/app/ui/components/InfoPremioSection';
import InfoTeatroSection from '@/app/ui/components/InfoTeatroSection';
import localFont from 'next/font/local';

const tommaso = localFont({ src: './../../ui/fonts/tomaso.woff2' });


export default function Info() {

    // JSX
    return (
        <>
            <div className="bg-no-repeat bg-cover relative h-[90vh] w-full max-w-[100vw]">
                <div className="absolute inset-0 m-auto w-full h-full flex justify-center flex-col items-center">
                    <h1 className={`text-6xl lg:text-5xl text-center uppercase ${tommaso.className} tracking tracking-widest`}>
                        Los premios ESLAND
                    </h1>
                </div>
                <img
                    alt='ESLAND cover'
                    src='/img/info-background.webp'
                    className='absolute cp-v h-full w-full animate-fade object-cover object-center animate-duration-1000 animate-ease-in-out -z-10'
                />
                <img
                    alt='ESLAND cover'
                    src='/img/info-background.webp'
                    className='absolute animate-fade object-cover object-center animate-duration-1000 animate-ease-in-out blur-3xl -z-40'
                />
            </div>
            <main className='pb-24 overflow-hidden'>
                <InfoTeatroSection />
                <InfoPremioSection />
            </main>
        </>
    )
}
