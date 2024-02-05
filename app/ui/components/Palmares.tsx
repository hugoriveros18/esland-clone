/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from 'react';
import editionsInfo from './../utils/editions-info.json';
import localFont from 'next/font/local';
import PalmaresWinnerCard from './PalmaresWinnerCard';

const tommaso = localFont({ src: './../../ui/fonts/tomaso.woff2' });

export default function Palmares({
    edition
}:GallerySectionProps) {

    //MEMO
    const currentEdition = useMemo(() => {
        return editionsInfo[edition]
    },[edition])

    // STATES
    const [activeTab, setActiveTab] = useState<any>(currentEdition.info[0]);
    const [isAnimationActive, setIsAnimationActive] = useState<boolean>(false);

    // METHODS
    const handleTabChange = (ctg:any) => {
        if(ctg !== activeTab) {
            if(!isAnimationActive) {
                setIsAnimationActive(true);
                setTimeout(() => {
                    setActiveTab(ctg);
                }, 400)
            }
        }
    }

    // EFFECTS
    useEffect(() => {
        if(isAnimationActive) {
            setTimeout(() => {
                setIsAnimationActive(false)
            }, 1000)
        }
    },[isAnimationActive])

    // JSX
    return (
        <section className="max-w-6xl mx-auto flex flex-col gap-4 pt-20 sm:pt-10 justify-center items-center px-10 lg:px-20 sm:px-4">
            <h2 className={`text-6xl lg:text-4xl text-center text-white mb-20 lg:mb-10 sm:mb-6 uppercase ${tommaso.className}`}>
                PALMARÉS
            </h2>
            <div className="flex flex-row lg:flex-col gap-16 sm:gap-10 sm:w-full">
                {/* CATEGORIAS */}
                <div className='flex flex-col gap-2'>
                    {
                        currentEdition.info.map((ctg, index) => {
                            return (
                                <button
                                    key={ctg.categoria}
                                    className={`flex justify-between items-center w-[300px] lg:w-auto sm:max-w-full rounded-sm categoryButton bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-600 to-sky-400/45 text-center' : 'from-gray-700 to-blue-900'} ${ctg === activeTab ? 'border border-sky-300 border-spacing-6' : undefined} hover:bg-blue-900 sm:hover:bg-transparent px-4 py-1`}
                                    onClick={() => handleTabChange(ctg)}
                                >
                                    <h1 className='text-sm text-left text-white'>
                                        {ctg.categoria}
                                    </h1>
                                    <strong className='text-xs text-right text-white'>
                                        {ctg.ganador}
                                    </strong>
                                </button>
                            )
                        })
                    }
                </div>

                {/* POSICIONES */}
                <div className='flex gap-6 sm:gap-3 items-end mr-5 sm:mr-0 sm:justify-center'>
                    {/* FIRST PLACE */}
                    <PalmaresWinnerCard 
                        titulo={activeTab.ganador}
                        foto={activeTab.foto1}
                        comunidad={activeTab.comunidad1}
                        streamers={activeTab.streamers1}
                        total={activeTab.total1}
                        position={1}
                        edition={edition}
                        isAnimationActive={isAnimationActive}
                    />
                    {/* SECOND PLACE */}
                    {
                        activeTab.finalista &&
                        <PalmaresWinnerCard 
                            titulo={activeTab.finalista}
                            foto={activeTab.foto2}
                            comunidad={activeTab.comunidad2}
                            streamers={activeTab.streamers2}
                            total={activeTab.total2}
                            position={2}
                            edition={edition}
                            isAnimationActive={isAnimationActive}
                        />
                    }
                </div>
            </div>
        </section>
    )
}
