type GalleryEdition = 'first-edition' | 'second-edition'

interface GallerySectionProps {
    edition: GalleryEdition
}

interface HeaderMenuRouteValidation {
    [key: string]: any
}