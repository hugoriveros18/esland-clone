interface BentoGridItemProps {
    title: string
    subtitle?: string
    description: string
    gridClass: string
    backgroundImage: string
}

export const bentoGridImages: BentoGridItemProps[] = [
    {
        title: "Andorra: el cénit de los premios ESLAND",
        description: "Una nueva edición <strong>cargada de novedades y contenido</strong>, que empezará varias semanas antes de la ansiada gala. <strong>Directos especiales, colaboraciones, conciertos y mucho más</strong> en lo que será una auténtica fiesta dedicada a la creación de contenido.",
        gridClass: "col-span-4 xl:col-span-5 sm:col-span-10",
        backgroundImage: "/img/mountain.webp"
    },
    {
        title: "La alfombra blanca",
        subtitle: "16 de febrero de 2024",
        description: "Este año, el momento de la alfombra azul será sustituido y mejorado, gracias a los increíbles paisajes andorranos, por una <strong>alfombra blanca en plena nieve</strong>, situada en las <strong>pistas de esquí de Andorra</strong>.",
        gridClass: "col-span-6 xl:col-span-5 sm:col-span-10",
        backgroundImage: "/img/pistas.webp"
    },
    {
        title: "LA GALA",
        subtitle: "17 de febrero de 2024",
        description: "Una gala de premios llena de <strong>contenido de primer nivel</strong> y <strong>muchas sorpresas</strong>, en la que se descubrirán los ganadores de esta tercera edición de los Premios ESLAND.",
        gridClass: "col-span-6 xl:col-span-5 sm:col-span-10",
        backgroundImage: "/img/grefg.webp"
    },
    {
        title: "DISFRUTA DEL REDDIT DE LA COMUNIDAD",
        description: "Este año, el reddit no formará parte de las votaciones de los premios, pero sí que <strong>formará parte de la comunidad</strong>. El subreddit oficial de los Premios ESLAND está abierto para ti, para que compartas tus clips, tus opiniones y para que <strong>interactúes con toda la comunidad</strong> del streaming hispanohablante.",
        gridClass: "col-span-4 xl:col-span-5 sm:col-span-10",
        backgroundImage: "/img/laptop.webp"
    }
]

