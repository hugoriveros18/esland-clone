/* eslint-disable @next/next/no-img-element */
// import { useTranslations } from 'next-intl';
import ProgressiveNumber from '@/app/ui/components/ProgressiveNumber';
import ArchiveContent from '@/app/ui/main-sections/ArchiveContent';
import localFont from 'next/font/local';
import Link from 'next/link';

const tommaso = localFont({ src: './../../ui/fonts/tomaso.woff2' });

export default function Archivo() {

    // LANGUAGE
    // const t = useTranslations('Header');

    // JSX
    return (
        <>
            {/* PANTALLA DE INICIO */}
            <div className="bg-no-repeat bg-cover relative h-[90vh] w-full max-w-[100vw]">
                <div className="absolute inset-0 m-auto w-full h-full flex justify-center flex-col items-center">
                    <h1 className={`text-white text-6xl lg:text-4xl sm:text-2xl text-center mb-20 sm:mb-10 tracking-widest ${tommaso.className}`}>
                        EDICIONES ANTERIORES
                    </h1>
                    <Link
                        href="https://www.youtube.com/watch?v=1YmpPrqKP-g"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='initialButton w-fit text-2xl lg:text-base font-medium no-underline px-5 py-3 border border-solid border-white rounded-full uppercase text-white'
                    >
                        REVIVE LA ÚLTIMA GALA
                    </Link>
                </div>
                <img
                    className='absolute cp-v h-full w-full animate-fade object-cover object-center animate-duration-1000 animate-ease-in-out -z-10'
                    alt='ESLAND Cover'
                    src='/img/archivo-background.webp'
                />
                <img
                    className='absolute animate-fade object-cover object-center animate-duration-1000 animate-ease-in-out blur-3xl -z-40'
                    alt='ESLAND Cover'
                    src='/img/archivo-background.webp'
                />
            </div>

            {/* MAIN */}
            <ArchiveContent />
            

            {/* ESTADISTICAS */}
            <section className='max-w-6xl mx-auto py-20 lg:py-15 sm:py-10 px-20 lg:px-10 sm:px-6'>
                <h2 className={`text-6xl lg:text-4xl text-white ${tommaso.className} text-center text-balance mb-20 lg:mb-10`}>
                    Los ESLAND en números
                </h2>
                <div className='grid grid-cols-3 md:grid-cols-1 gap-y-10'>
                    <ProgressiveNumber
                        initial={0}
                        final={69.9}
                        decimals={1}
                        texto='DE VISUALIZACIONES'
                        simbolo='M'
                        />
                    <ProgressiveNumber
                        initial={0}
                        final={227}
                        texto='NOTICIAS EN PRENSA'
                        />
                    <ProgressiveNumber
                        initial={0}
                        final={3.2}
                        decimals={1}
                        texto='EN MEDIOS GANADOS'
                        simbolo='M€'
                    />
                </div>
            </section>
        </>
    )
}
