interface EslandLogoSvg {
    svgClass?: string
}

export default function EslandLogoSvg({
    svgClass = 'h-24 lg:h-[3.75rem] md:h-9 w-auto scale-150'
}:EslandLogoSvg) {

    // JSX
    return (
        <svg className={svgClass} aria-label="A" data-astro-cid-7qzxku2k="" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200L75 162L32 168L75 0L0 200Z" fill="#fff"></path>
            <path d="M160 200L85 162L128 168L85 0L160 200Z" fill="#fff"></path>
            <path d="M71 119L80 64L90 119L80 139L71 119Z" fill="#fff"></path>
        </svg>
    )
}
