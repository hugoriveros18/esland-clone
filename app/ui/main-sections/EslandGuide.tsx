'use client'

import LiteYouTubeEmbed  from 'react-lite-youtube-embed'

export default function EslandGuide() {

    // JSX
    return (
        <section className="mx-auto w-full max-w-[1400px] p-20 sm:p-6">
            <h3 className="mx-auto mb-10 text-balance text-center text-4xl md:text-xl text-white font-semibold uppercase tracking-wide">
                Guía de la 3ª Edición de los premios ESLAND
            </h3>
            <div className="rounded-xl shadow-2xl shadow-white/10" >
                <LiteYouTubeEmbed
                    id="nYPVr2IYTtk" 
                    title="Play: Guía de la 3ª Edición de los premios ESLAND"
                    poster="maxresdefault"
                >

                </LiteYouTubeEmbed>
            </div>
        </section>
    )
}
