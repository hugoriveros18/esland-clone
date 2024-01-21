import { jura } from "../fonts/fonts";
import Link from "next/link";
import EslandLogoSvg from "../components/EslandLogoSvg";
import localFont from 'next/font/local';
import { useTranslations } from 'next-intl';

const tommaso = localFont({ src: './../fonts/tomaso.woff2' })

export default function WelcomeScreen() {

  // LANGUAGE
  const t = useTranslations('WelcomeScreen');

  // JSX
  return (
    <div className="w-full relative aspect-video h-full xl:h-[80vh] md:h-dvh">

      <div className="absolute inset-0 h-full justify-center z-10 m-auto flex flex-col items-center w-full">
        <section className="absolute z-10 animate-fade-up flex justify-center items-center gap-8 flex-col">
          <h1 className={`flex items-center text-8xl lg:text-6xl md:text-4xl gap-20 lg:gap-5 ${tommaso.className}`}>
            <span className="leading-none">E</span>
            <span className="leading-none">S</span>
            <span className="leading-none">L</span>
            <EslandLogoSvg />
            <span className="leading-none">N</span>
            <span className="leading-none">D</span>
          </h1>
          <p className={`subtitle text-2xl lg:text-xl text-center text-wrap text-[#ffffffe6] px-4 mt-2 ${jura.className}`}>
            {t('WELCOME_SCREEN__DESCRIPTION')}
          </p>
          <Link
            href="/vota"
            className="initialButton w-fit text-2xl lg:text-base font-medium no-underline px-5 py-3 border border-solid border-white rounded-full uppercase text-blue-950 animate-fade-up bg-white"
          >
            {t('VOTE_BUTTON')}
          </Link>
        </section>
        <video 
          className="video cp-v h-full w-full object-cover object-top animate-duration-[2s] animate-ease-in-out animate-fade" 
          src="/videos/esland-video-logo.webm" 
          autoPlay 
          loop 
          muted
          style={{
            clipPath: 'polygon(0 0,100% 0,100% 85%,50% 100%,50% 100%,0 85%)'
          }}
        />
      </div>

      <video 
        className="absolute -bottom-48 -z-40 blur-3xl animate-duration-[2s] animate-ease-in-out animate-fade" 
        src="/videos/esland-video-logo.webm" 
        autoPlay 
        loop 
        muted
      />

    </div>
  )
}
