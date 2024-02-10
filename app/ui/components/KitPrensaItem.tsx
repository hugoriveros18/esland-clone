/* eslint-disable @next/next/no-img-element */
interface KitPrensaItemProps {
    title: string
    image: string
    downloadLink: string
    downloadButtonText: string
}

export default function KitPrensaItem({
    title,
    image,
    downloadLink,
    downloadButtonText
}:KitPrensaItemProps) {

    // JSX
    return (
        <article className="flex flex-col justify-center items-center">
            <h3 className="text-2xl mb-2 text-white">
                {title}
            </h3>
            <a
                className="relative group flex flex-col gap-y-4 text-center justify-center items-center mt-2 uppercase m-auto transition-all text__glowing"
                href={downloadLink}
                target="_blank"
            >
                <img 
                    alt="Kit image"
                    src={image}
                    loading="lazy"
                    className="aspect-video rounded-lg w-full h-auto transition group-hover:scale-105"
                />
                <img 
                    alt="Kit image"
                    src={image}
                    loading="lazy"
                    className="absolute inset-0 opacity-0 brightness-200 blur-xl group-hover:opacity-40 scale-125 aspect-video rounded w-full h-auto -z-10 transition"
                />
                <span className="border-white inline-flex w-fit border-2 border-solid rounded-full py-2 px-12">
                    {downloadButtonText}
                </span>
            </a>
        </article>
    )
}
