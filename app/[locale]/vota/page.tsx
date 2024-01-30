/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Vota() {

  // LANGUAGE
  const t = useTranslations('Vota');

  // JSX
  return (
    <section className="relative bg-no-repeat bg-cover pb-24 min-h-screen w-full max-w-[100vw]">
      <img
        alt="Vote background"
        src="/img/vota-bkg.webp"
        className="absolute h-full w-full animate-fade object-cover object-center animate-duration-1000 animate-ease-in-out -z-10"
      />
      <div className="mx-auto flex flex-col max-w-7xl px-6 pt-40">
        <h1 className="uppercase mb-10 text-left text-5xl lg:text-3xl text-white font-bold tracking-wider max-w-xl text-balance">
          {t('titulo')}
        </h1>
        <div className='mb-10'>
          <Link
            href="#"
            className='initialButton w-fit text-2xl lg:text-base font-medium no-underline px-5 py-3 border border-solid border-white rounded-full uppercase text-white'
          >
            {t('boton')}
          </Link>
        </div>
        <p
          className='max-w-3xl text-pretty text-2xl px-2 mb-10'
          dangerouslySetInnerHTML={{ __html: t.raw('descripcion')}}
        />
        <ul className='flex flex-col gap-y-10 text-2xl pl-4 font-extralight'>
          {/* ITEM UNO */}
          <li className='flex gap-x-6 items-center text-white'>
            <svg className='min-w-[40px]' width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.839 3.625a2.143 2.143 0 1 0 4.286 0 2.143 2.143 0 1 0-4.286 0M7.2 10.321a3.214 3.214 0 0 0-6.428 0M1.839 15.678a2.143 2.143 0 1 0 4.286 0 2.143 2.143 0 1 0-4.286 0M7.2 22.375a3.214 3.214 0 1 0-6.428 0M9.768 4h12.464a1 1 0 0 1 1 1v2.464a1 1 0 0 1-1 1H9.768h0V4h0ZM9.768 16h7a1 1 0 0 1 1 1v2.464a1 1 0 0 1-1 1h-7 0V16h0ZM9.768.75v22.5"></path>
            </svg>
            <span  dangerouslySetInnerHTML={{ __html: t.raw('itemUno')}}/>
          </li>
          {/* ITEM DOS */}
          <li className='flex gap-x-6 items-center text-white'>
            <svg className='min-w-[40px]' width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3.464 16.714 3.572 3.572M7.036 16.714l-3.572 3.572M1 13.75h8.5s.5 0 .5.5v8.5s0 .5-.5.5H1s-.5 0-.5-.5v-8.5s0-.5.5-.5M1 .75h8.5s.5 0 .5.5v8.5s0 .5-.5.5H1s-.5 0-.5-.5v-8.5s0-.5.5-.5M15.7 13.55l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 0 1 3 3ZM18.979 4.271l3 3M12.7 10.55l3 3"></path>
            </svg>
            <span  dangerouslySetInnerHTML={{ __html: t.raw('itemDos')}}/>
          </li>
          {/* ITEM TRES */}
          <li className='flex gap-x-6 items-center text-white'>
            <svg className='min-w-[40px]' width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 11.5h5s1 0 1 1v10s0 1-1 1h-5s-1 0-1-1v-10s0-1 1-1M1.5 17.5h4s1 0 1 1v4s0 1-1 1h-4s-1 0-1-1v-4s0-1 1-1M18.5 20.5h4s1 0 1 1v1s0 1-1 1h-4s-1 0-1-1v-1s0-1 1-1M13.5 3.5h1.921a.5.5 0 0 1 .293.905l-1.6 1.161.986 2.266a.5.5 0 0 1-.7.635L12 7.122 9.609 8.467a.5.5 0 0 1-.7-.635l.986-2.266-1.6-1.161a.5.5 0 0 1 .286-.905H10.5L11.534.82a.5.5 0 0 1 .933 0ZM1.5 13.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18.5 16.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"></path>
            </svg>
            <span  dangerouslySetInnerHTML={{ __html: t.raw('itemTres')}}/>
          </li>
          {/* ITEM CUATRO */}
          <li className='flex gap-x-6 items-center text-white'>
            <svg className='min-w-[40px]' xmlns="http://www.w3.org/2000/svg" fill="none" width="40" height="40" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.3177 3.91406 7.38277 9.83594 5.26118 7.71435"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.6875 13H2.25c-.39782 0-.77936-.158-1.06066-.4393C.908035 12.2794.75 11.8978.75 11.5V2.25c0-.39782.158035-.77936.43934-1.06066C1.47064.908035 1.85218.75 2.25.75H20c.3978 0 .7794.158035 1.0607.43934.2813.2813.4393.66284.4393 1.06066v9.25c0 .3978-.158.7794-.4393 1.0607S20.3978 13 20 13"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.75 23.1562-2.764-3.11c-.13865-.1523-.24569-.3306-.31493-.5246-.06923-.194-.09928-.3999-.08841-.6056.01088-.2057.06246-.4072.15177-.5928.0893-.1856.21455-.3517.36847-.4885.154-.1369.3335-.2419.5283-.3088.1948-.067.401-.0947.6065-.0814.2056.0132.4065.0672.5911.1586.1845.0915.3491.2186.4842.3741l1.937 2.179v-9c0-.3978.158-.7793.4393-1.0606.2813-.28131.6629-.43935 1.0607-.43935.3978 0 .7794.15804 1.0607.43935.2813.2813.4393.6628.4393 1.0606v6.75h1.5c1.1935 0 2.3381.4742 3.182 1.3181.8439.8439 1.318 1.9885 1.318 3.1819v.75"></path>
            </svg>
            <span  dangerouslySetInnerHTML={{ __html: t.raw('itemCuatro')}}/>
          </li>
          {/* ITEM CINCO */}
          <li className='flex gap-x-6 items-center text-white'>
            <svg className='min-w-[40px]' width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.074 10.212a4 4 0 1 0 0 3.574M19.5 8.5a4.01 4.01 0 1 0-3.575-2.213M15.925 17.712A4 4 0 1 0 19.5 15.5"></path>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.5a4 4 0 0 1-3.575-2.213l-7.851 3.925a3.963 3.963 0 0 1 0 3.575l7.851 3.926A4 4 0 0 1 19.5 15.5"></path>
            </svg>
            <span  dangerouslySetInnerHTML={{ __html: t.raw('itemCinco')}}/>
          </li>
          {/* ITEM SEIS */}
          <li className='flex gap-x-6 items-center text-white'>
            <svg className='min-w-[40px]' width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.65 23.5v-3H7.54a3 3 0 0 1-3-3v-3H1.85a.51.51 0 0 1-.41-.21.49.49 0 0 1-.07-.44C3.44 7.43 4.88.5 12.9.5a9.74 9.74 0 0 1 5.75 17.61v5.39"></path>
                <path d="M18.62 7.15a3 3 0 0 0-3-2.65 3 3 0 0 0-1.31.31A2.49 2.49 0 0 0 9.85 5a2.49 2.49 0 1 0-.2 5 2.63 2.63 0 0 0 .8-.14 2.93 2.93 0 0 0 2.91 1.62A3.53 3.53 0 0 0 16.65 14a3.63 3.63 0 0 0 3.5-3.75 3.8 3.8 0 0 0-1.53-3.1Z"></path>
                <path d="m10.45 9.86.29-.86a2.92 2.92 0 0 1 1.32-1.61l.59-.39M18.23 6c-2.11.53-2.42 1.57-2.58 2h0M18.19 13.62a4.94 4.94 0 0 0-1.5-2.71"></path>
              </g>
            </svg>
            <span  dangerouslySetInnerHTML={{ __html: t.raw('itemSeis')}}/>
          </li>

          <span className='opacity-85 text-base mt-4'>
            {t('footer')}
          </span>
        </ul>
      </div>
    </section>
  )
}
