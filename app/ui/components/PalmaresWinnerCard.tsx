/* eslint-disable @next/next/no-img-element */
import localFont from 'next/font/local';
const tommaso = localFont({ src: './../../ui/fonts/tomaso.woff2' });

type Position = 1 | 2

interface PalmaresWinnerCardProps {
    titulo: any
    foto: any
    comunidad: any
    streamers: any
    total: any
    position: Position
    edition: GalleryEdition
    isAnimationActive: boolean
}

export default function PalmaresWinnerCard({
    titulo,
    foto,
    comunidad,
    streamers,
    total,
    position,
    edition,
    isAnimationActive
}:PalmaresWinnerCardProps) {

    // JSX
    return (
        <div className={`w-[315px] sm:w-[140px] rounded-lg shadow border-[#0d507a] ${isAnimationActive && 'cardAnimation'}`}>
            <p className={`mx-11 shadow-md absolute text-center rounded-b-lg rounded-t-sm bg-white -mt-[2px] text-black py-2 font-bold ${tommaso.className} size-11`}>
                { `${position}º` }
            </p>
            <img 
                alt={titulo}
                src={`/img/gallery/${edition}/palmares/desktop/${foto}.webp`}
                className='rounded-t-lg object-cover'
            />
            <div className='p-5 sm:p-2'>
                <p className="mb-2 text-xl sm:text-lg font-bold tracking-tight text-white uppercase text-balance">
                    {titulo}
                </p>
                <p className='mt-5 flex flex-col mb-3 sm:text-sm font-normal text-white uppercase'>
                    <strong>
                        COMUNIDAD: {comunidad}
                    </strong>
                    <strong>
                        STREAMERS: {streamers}
                    </strong>
                    <strong>
                        TOTAL: {total}
                    </strong>
                </p>
            </div>
        </div>
    )
}
