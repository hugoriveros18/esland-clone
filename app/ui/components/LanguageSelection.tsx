'use client'

import { Link } from "@/navigation";
import { EnglishFlag, SpanishFlag } from "./LanguageFlags";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useScreenWidth from "../hooks/useScreenWidth";

type LanguagesConfigured = 'es' | 'en';

interface LanguageSelectionProps {
    locale: LanguagesConfigured
    pathname: string
}

export default function LanguageSelection({
    locale,
    pathname
}:LanguageSelectionProps) {

    // PATHNAME TRANSFORM
    const pathnameWithoutLanguage = pathname?.split('/').splice(2).join('/');
    // console.log('pathname', pathnameWithoutLanguage)

    // DEVICE
    const device = useScreenWidth();

    // STATES
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // METHODS
    const handleDesktopMenuVisualization = () => {
        if(device === 'desktop') {
            setIsMenuOpen(true);
        }
    }

    const handleMobileMenuVisualization = () => {
        if(device !== 'desktop') {
            setIsMenuOpen(!isMenuOpen);
        }
    } 
 
    // JSX
    return (
        <div className="relative text-white rounded-md text-xs font-semibold bg-black/30 hover:bg-black/70 transition-all">
            <button 
                className="inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
                onMouseEnter={handleDesktopMenuVisualization}
                onMouseLeave={() => setIsMenuOpen(false)}
                onClick={handleMobileMenuVisualization}
            >
                { locale === 'es' ? <SpanishFlag/> : <EnglishFlag/> }
                { locale === 'es' ? 'Español' : 'English' }
                <svg className={`-mr-1 h-5 w-5 text-white transition-all duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                </svg>
            </button>
            <ul 
                className={`pt-0.5 absolute w-full ${isMenuOpen ? 'block animate-fade-down animate-duration-200' : 'hidden'}`}
                onMouseEnter={handleDesktopMenuVisualization}
                onMouseLeave={() => setIsMenuOpen(false)}
            >
                <li>
                    <Link
                        //@ts-ignore
                        href={`/${pathnameWithoutLanguage}`}
                        locale={locale === 'es' ? 'en' : 'es'}
                        className="rounded-md bg-black/30 hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
                    >
                        { locale === 'es' ? <EnglishFlag/> : <SpanishFlag/>}
                        { locale === 'es' ? 'English' : 'Español' }
                    </Link>
                </li>
            </ul>
        </div>
    )
}
