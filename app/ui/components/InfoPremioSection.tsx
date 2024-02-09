'use client'
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion"
import { useRef } from "react"
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function InfoPremioSection() {

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
                    EL PREMIO A LA CREACIÓN
                </motion.h1>
                <motion.p 
                    className='text-white lg:text-base'
                    style={{
                        opacity: opacityText2,
                        translateX: translateText2
                    }}
                >
                    El trofeo que se entrega a los ganadores y ganadoras en la ceremonia es <strong>una representación de la letra “A” dividida en tres fragmentos</strong> y ensambladas a modo de artilugio futurista sobre el que se construye la narrativa del evento.
                </motion.p>
                <motion.p 
                    className='text-white lg:text-base'
                    style={{
                        opacity: opacityText3,
                        translateX: translateText3
                    }}
                >
                    Un artefacto de origen desconocido que dota de <strong>herramientas y habilidades para la creación.</strong> Una metáfora sobre la emancipación del talento gracias a la tecnología y la irrupción de los creadores de contenido en el mundo del entretenimiento.
                </motion.p>
            </div>
        </section>
    )
}
