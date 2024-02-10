'use client'
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion"
import { useRef } from "react"
import { useTranslations } from "next-intl";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function InfoPremioSection() {

    // LANGUAGE
    const t = useTranslations('Info');

    // REFERENCES
    const sectionRef = useRef<any>(null);

    // SCROLL ANIMATION
    const {
        translateText1,
        translateText2,
        translateText3,
        translateImage,
        opacityText1,
        opacityText2,
        opacityText3,
        opacityImage
    } = useScrollAnimation({sectionRef, direction: 'right'})

    // JSX
    return (
        <section
            ref={sectionRef}
            className='w-full max-w-[1400px] mx-auto my-24 sm:my-12 gap-10 text-pretty text-left text-xl flex flex-row md:flex-col-reverse items-center justify-between p-8 md:px-20 sm:px-6 md:p-6'
        >
            <motion.div 
                className='mt-0 md:mt-6 w-1/2 md:w-full'
                style={{
                    opacity: opacityImage,
                    translateX: translateImage
                }}
            >
                <img
                    alt='Trofeos'
                    src='/img/trophies.webp'
                    style={{
                        aspectRatio: '812/556',
                        objectFit: 'cover'
                    }}
                />
            </motion.div>
            <div 
                className='w-1/2 md:w-full space-y-4'
            >
                <motion.h1 
                    className='mx-auto mb-10 lg:mb-6 text-balance text-left text-5xl lg:text-3xl font-semibold tracking-wide'
                    style={{
                        opacity: opacityText1,
                        translateX: translateText1
                    }}
                >
                    {t('premio.title')}
                </motion.h1>
                <motion.p 
                    className='text-white lg:text-base'
                    style={{
                        opacity: opacityText2,
                        translateX: translateText2
                    }}
                    dangerouslySetInnerHTML={{ __html: t.raw('premio.texto1') }}
                />
                <motion.p 
                    className='text-white lg:text-base'
                    style={{
                        opacity: opacityText3,
                        translateX: translateText3
                    }}
                    dangerouslySetInnerHTML={{ __html: t.raw('premio.texto2') }}
                />
            </div>
        </section>
    )
}
