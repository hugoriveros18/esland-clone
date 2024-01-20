'use client'

import Link from "next/link";
import EslandLogoSvg from "../components/EslandLogoSvg";
import { MenuCloseIconMobile, MenuIconMobile } from "../components/MenuIconMobile";
import { useEffect, useState } from "react";

export default function Header() {
    // STATES
    const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    // EFFECTS
    useEffect(() => {

        const handleHeaderVisibility = () => {
            const scrollY = window.pageYOffset;
        
            if(scrollY > 100) {
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
                <EslandLogoSvg 
                    svgClass="h-[52px] w-[40px]"
                />
                <nav
                    className={`md:fixed flex flex-row md:flex-col items-center justify-center gap-8 w-full md:h-screen inset-0 md:bg-[#151a36]/90 text-xl md:text-2xl translate-y-[initial] transition-transform duration-300 ${isMobileMenuOpen ? 'md:-translate-y-0' : 'md:-translate-y-full'}`}
                >
                    <Link
                        href="/vota"
                        className="text__glowing text-white border-b-2 border-transparent"
                    >
                        VOTA
                    </Link>
                    <Link
                        href="/info"
                        className="text__glowing text-white border-b-2 border-transparent"
                    >
                        INFO
                    </Link>
                    <Link
                        href="/archivo"
                        className="text__glowing text-white border-b-2 border-transparent"
                    >
                        ARCHIVO
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/1D7IvIqMyqAoG58fuk8bc0JvhAmrWBbOK/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="initialButton w-fit ml-auto md:ml-0 text-white text-base font-medium no-underline px-5 py-2 md:py-3 border border-solid border-white rounded-full uppercase"
                    >
                        CRITERIOS DE NOMINACIÓN
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
