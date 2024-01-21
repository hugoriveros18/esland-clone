'use client'

import BentoGridItem from "../components/BentoGridItem"
import { bentoGridImages, bentoGridImagesEnglish } from "../utils/bentoGridInfo"
import { useParams } from 'next/navigation'


export default function BentoGrid() {

    const params = useParams();
    const { locale } = params;

    // JSX
    return (
        <section className="w-full max-w-[1400px] grid grid-cols-10 auto-rows-[30rem] gap-4 mx-auto  p-20 lg:p-12 md:p-6">
            {
                locale === 'en' ? (
                    bentoGridImagesEnglish.map(image => {
                        return (
                            <BentoGridItem 
                                key={image.title}
                                title={image.title}
                                subtitle={image.subtitle}
                                description={image.description}
                                gridClass={image.gridClass}
                                backgroundImage={image.backgroundImage}
                            />
                        )
                    })
                ) : (
                    bentoGridImages.map(image => {
                        return (
                            <BentoGridItem 
                                key={image.title}
                                title={image.title}
                                subtitle={image.subtitle}
                                description={image.description}
                                gridClass={image.gridClass}
                                backgroundImage={image.backgroundImage}
                            />
                        )
                    })
                )
            }
        </section>
    )
}