'use client'
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion"
import { useRef } from "react"
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useTranslations } from "next-intl";

export default function InfoTeatroSection() {

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
    } = useScrollAnimation({sectionRef, direction: 'left'})

    // JSX
    return (
        <section
            ref={sectionRef}
            className='w-full max-w-[1400px] mx-auto my-24 sm:my-12 gap-10 text-pretty text-left text-xl flex flex-row md:flex-col items-center justify-between p-8 md:px-20 sm:px-6 md:p-6'
        >
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
                    {t('teatro.title')}
                </motion.h1>
                <motion.p 
                    className='text-white lg:text-base'
                    style={{
                        opacity: opacityText2,
                        translateX: translateText2
                    }}
                >
                    {t('teatro.texto1')}
                </motion.p>
                <motion.p 
                    className='text-white lg:text-base'
                    style={{
                        opacity: opacityText3,
                        translateX: translateText3
                    }}
                >
                    {t('teatro.texto2')}
                </motion.p>
            </div>
            <motion.div 
                className='mt-0 md:mt-6 w-1/2 md:w-full'
                style={{
                    opacity: opacityImage,
                    translateX: translateImage
                }}
            >
                <img
                    alt='Teatro'
                    src='/img/theater.webp'
                    style={{
                        aspectRatio: '812/556',
                        objectFit: 'cover'
                    }}
                />
            </motion.div>
        </section>
    )
}
