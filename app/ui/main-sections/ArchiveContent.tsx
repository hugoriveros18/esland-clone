'use client'

import { useState } from "react";
import ArchiveGallery from "../components/ArchiveGallery";
import { useTranslations } from "next-intl";
import Palmares from "../components/Palmares";

export default function ArchiveContent() {

    // LANGUAGE
    const t = useTranslations('Archivo');

    // STATES
    const [activeTab, setActiveTab] = useState<GalleryEdition>('first-edition');

    // JSX
    return (
        <main className="pb-24 lg:pb-10">
            {/* SELECTION BUTTONS */}
            <div className="flex h-24 mt-4">
                <button className={`flex-1 rounded-t-2xl transition-colors text-white text-xl sm:text-wrap sm:px-5 font-bold z/10 galleryTabSelected ${activeTab === 'first-edition' ? 'bg-transparent' : 'bg-[#222b5b] hover:bg-[#1b2663]'}`}
                onClick={() => setActiveTab('first-edition')}
                >
                    {t('palmares.boton1')}
                </button>
                <button className={`flex-1 rounded-t-2xl transition-colors text-white text-xl sm:text-wrap sm:px-5 font-bold z/10 galleryTabSelected ${activeTab === 'second-edition' ? 'bg-transparent' : 'bg-[#222b5b] hover:bg-[#1b2663]'}`}
                onClick={() => setActiveTab('second-edition')}
                >
                    {t('palmares.boton2')}
                </button>
            </div>

            {/* PALMARES */}
            <Palmares 
                edition={activeTab}
            />

            {/* GALLERY */}
            <section className='max-w-8xl mx-auto py-20 lg:py-15 sm:py-6 px-20 lg:px-10 sm:px-4'>
                <h2 className='mx-auto mb-8 sm:mb-2 text-center text-6xl lg:text-3xl text-white font-semibold tracking-wide'>
                    {t('galeria.title')}
                </h2>
                <p className='text-center text-2xl sm:text-xl text-white'>
                    {t('galeria.description')}
                </p>
                <ArchiveGallery
                    edition={activeTab}
                />
            </section>
        </main>
    )
}
