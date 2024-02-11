'use client'

import Link from "next/link";
import EslandLogoSvg from "../components/EslandLogoSvg";
import { MenuCloseIconMobile, MenuIconMobile } from "../components/MenuIconMobile";
import { useEffect, useState } from "react";
import LanguageSelection from "../components/LanguageSelection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { headerMenuRouteValidation } from "../utils/headerMenuRouteValidation";

type LanguagesConfigured = 'es' | 'en';

interface HeaderProps {
    locale: LanguagesConfigured
}

export default function Header({
    locale
}:HeaderProps) {
    
    // LANGUAGE
    const t = useTranslations('Header');

    // PATHNAME
    const pathname = usePathname();
    const currentPathSelection = pathname?.split('/')[2];

    // STATES
    const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    // EFFECTS
    useEffect(() => {

        const handleHeaderVisibility = () => {
            const scrollY = window.pageYOffset;
        
            if(scrollY > 10) {
                setIsHeaderVisible(true)
            } else {
                setIsHeaderVisible(false)
            }
        }

        window.addEventListener('scroll', handleHeaderVisibility)

        return () => window.removeEventListener('scroll', handleHeaderVisibility)
    },[isHeaderVisible])

    // JSX
    return (
        <header 
            className={`${isHeaderVisible ? 'header-nav' : undefined} fixed top-0 w-full px-6 py-4 z-50`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-16">
                <Link
                    href={`/${locale}`}
                    className="relative z-10 border-b-2 uppercase border-transparent"
                >
                    <EslandLogoSvg 
                        svgClass="absolute h-[52px] w-[40px] m-auto blur-sm opacity-0 transition-opacity duration-300 hover:opacity-100"
                    />
                    <EslandLogoSvg 
                        svgClass="h-[52px] w-[40px]"
                    />
                </Link>
                <nav
                    className={`lg:fixed flex flex-row lg:flex-col items-center justify-center gap-8 w-full lg:h-screen inset-0 lg:bg-[#151a36]/90 text-xl lg:text-2xl lg:z-[99] translate-y-[initial] transition-transform duration-300 ${isMobileMenuOpen ? 'lg:-translate-y-0' : 'lg:-translate-y-full'}`}
                >
                    <Link
                        href={t('vota.slug')}
                        className={`text__glowing text-white border-b-2 border-transparent ${headerMenuRouteValidation[currentPathSelection]?.includes(t('vota.texto').toLocaleLowerCase()) ? 'border-white' : undefined}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        { t('vota.texto') }
                    </Link>
                    <Link
                        href={t('info.slug')}
                        className={`text__glowing text-white border-b-2 border-transparent ${headerMenuRouteValidation[currentPathSelection]?.includes(t('info.texto').toLocaleLowerCase()) ? 'border-white' : undefined}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        { t('info.texto') }
                    </Link>
                    <Link
                        href={t('archivo.slug')}
                        className={`text__glowing text-white border-b-2 border-transparent ${headerMenuRouteValidation[currentPathSelection]?.includes(t('archivo.texto').toLocaleLowerCase()) ? 'border-white' : undefined}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        { t('archivo.texto') }
                    </Link>
                    <LanguageSelection 
                        locale={locale}
                        pathname={pathname}
                    />
                    <Link
                        href={t('criteriosNominacion.slug')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="initialButton w-fit ml-auto lg:ml-0 lg:mt-4 text-white text-base font-medium no-underline px-5 py-2 lg:py-3 border border-solid border-white rounded-full uppercase"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        { t('criteriosNominacion.texto') }
                    </Link>
                    <MenuCloseIconMobile
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                    />
                </nav>
                <MenuIconMobile 
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
            </div>
        </header>
    )
}
