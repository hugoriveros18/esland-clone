/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import gallerySize from './../utils/meta-gallery.json';
import 'photoswipe/style.css';

export default function ArchiveGallery({
    edition
}:GallerySectionProps) {

    // STATES
    const [isFullListActive, setIsFullListActive] = useState<boolean>(false);

    // EFFECTS
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#my-galery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            //@ts-ignore
            lightbox = null;
        };
    }, []);

    // METHODS
    const calcItemsToRender = () => {
        if(edition === 'first-edition') {
            if(isFullListActive) {
                return gallerySize[0].length;
            }
            return 12
        }

        if(isFullListActive) {
            return gallerySize[1].length;
        }
        return 12
    }

    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-2 max-w-6xl gap-8 lg:gap-4 mx-auto py-20 lg:py-10 sm:py-4" id='my-galery'>
            {
                Array.from({ length: calcItemsToRender()}).map((_, i) => (
                    <a
                        href={`/img/gallery/${edition}/img-${i+1}.webp`}
                        data-pswp-width={gallerySize[edition === 'first-edition' ? 0 : 1][i].width}
                        data-pswp-height={gallerySize[edition === 'first-edition' ? 0 : 1][i].height}
                        key={`my-galery-${i}`}
                        target="_blank"
                        rel="noreferrer"
                        className='group rounded-xl hover:scale-105 transition-all relative h-[400px] sm:h-[250px]'
                    >
                        <img 
                            src={`/img/gallery/${edition}/thumbnails/img-${i+1}.webp`} 
                            alt="Fotografia Premios ESLAND"
                            className='rounded-xl h-full w-full object-cover'
                        />
                        <img 
                            src={`/img/gallery/${edition}/thumbnails/img-${i+1}.webp`} 
                            alt="Imagen con efecto blur para hacer de sombra de una fotografía de los premios ESLAND"
                            className='blur-md h-full opacity-0 group-hover:opacity-100 absolute inset-0 transition contrast-150 -z-10 object-cover'
                        />
                    </a>
                ))
            }
            </div>
            <div className='w-full flex justify-center text-center'>
                <div
                    className="initialButton mx-auto text-white text-base font-medium no-underline px-5 py-2 md:py-3 border border-solid border-white rounded-full cursor-pointer"
                    onClick={() => setIsFullListActive(state => !state)}
                >
                    {isFullListActive ? 'VER MENOS' : 'DESCÚBRELAS TODAS'}
                </div>
            </div>
        </>
    );
}
