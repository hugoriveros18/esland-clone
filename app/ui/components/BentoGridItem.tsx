interface BentoGridItemProps {
    title: string
    subtitle?: string
    description: string
    gridClass: string
    backgroundImage: string
}

export default function BentoGridItem({
    title,
    subtitle,
    description,
    gridClass,
    backgroundImage
}:BentoGridItemProps) {

    // JSX
    return (
        <article className={`${gridClass} relative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 overflow-hidden group`}>
            <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80"/>
            <div 
                className="transition-scale absolute bottom-0 left-0 top-0 -z-10 h-full w-full bg-blue-950 bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            />
            <div className="relative z-20 flex h-full select-none flex-col justify-end gap-1 p-6 text-lg lg:p-4">
                <h2 className="mb-4 text-balance text-3xl font-semibold uppercase text-white">
                    {title}
                </h2>
                {
                    subtitle ? (
                        <h3 className="-mt-4 mb-4 text-3xl font-semibold text-sky-200/80">
                            {subtitle}
                        </h3>
                    ) : (
                        null
                    )
                }
                <p dangerouslySetInnerHTML={{ __html: description }} className="max-w-xl text-lg md:text-base lg:mb-0" />
            </div>
        </article>
    )
}
