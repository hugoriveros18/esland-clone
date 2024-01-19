import Link from "next/link";
import EslandLogoSvg from "../components/EslandLogoSvg";
import { MenuCloseIconMobile, MenuIconMobile } from "../components/MenuIconMobile";

export default function Header() {

    // JSX
    return (
        <header 
            className="fixed top-0 w-full px-6 py-4 z-50"
            id="header-nav"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-16">
                <EslandLogoSvg 
                    svgClass="h-[52px] w-[40px]"
                />
                <nav 
                    id="header-mobile-menu"
                    className="md:fixed flex flex-row md:flex-col items-center justify-center gap-8 w-full md:h-screen inset-0 md:bg-[#151a36]/90 text-xl md:text-2xl translate-y-[initial] md:-translate-y-full transition-transform duration-300 target:translate-y-0"
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
                    <MenuCloseIconMobile />
                </nav>
                <MenuIconMobile />
            </div>
        </header>
    )
}
