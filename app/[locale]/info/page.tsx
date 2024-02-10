/* eslint-disable @next/next/no-img-element */
import InfoPremioSection from '@/app/ui/components/InfoPremioSection';
import InfoTeatroSection from '@/app/ui/components/InfoTeatroSection';
import KitPrensaItem from '@/app/ui/components/KitPrensaItem';
import { useTranslations } from 'next-intl';
import localFont from 'next/font/local';

const tommaso = localFont({ src: './../../ui/fonts/tomaso.woff2' });


export default function Info() {

    // LANGUAGE
    const t = useTranslations('Info');

    // JSX
    return (
        <>
            <div className="bg-no-repeat bg-cover relative h-[90vh] w-full max-w-[100vw]">
                <div className="absolute inset-0 m-auto w-full h-full flex justify-center flex-col items-center">
                    <h1 className={`text-6xl lg:text-5xl text-center ${tommaso.className} tracking tracking-widest`}>
                        {t('mainTitle')}
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
                <section className='flex flex-col items-center justify-center p-4 overflow-hidden'>
                    <h2 className='text-6xl font-bold mb-14 mt-4 text-white lg:text-center'>
                        {t('kitPrensa.title')}
                    </h2>
                    <div className='flex flex-row lg:flex-col gap-8 lg:gap-16'>
                        <KitPrensaItem
                            title={t('kitPrensa.logotipo.title')}
                            image='/img/logo-y-trofeo.webp'
                            downloadLink='https://premiosesland.com/ESLAND_MEDIA_KIT_2022.rar'
                            downloadButtonText={t('kitPrensa.logotipo.button')}
                        />
                        <KitPrensaItem
                            title={t('kitPrensa.fondos.title')}
                            image='/img/fondos-de-pantalla.webp'
                            downloadLink='https://premiosesland.com/ESLAND_FONDOS.zip'
                            downloadButtonText={t('kitPrensa.prensa.title')}
                        />
                        <KitPrensaItem
                            title={t('kitPrensa.fondos.title')}
                            image='/img/nota-de-prensa.webp'
                            downloadLink='https://premiosesland.com/Nota%20Prensa-ESLAND.pdf'
                            downloadButtonText={t('kitPrensa.prensa.title')}
                        />
                    </div>
                </section>
            </main>
        </>
    )
}
