import Link from "next/link";

export function MenuIconMobile() {

    // JSX
    return (
        <a
            href="#header-mobile-menu"
            className="hidden md:block text-white"
        >
            <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7 3 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                <path d="M21 12 3 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                <path d="M21 17 3 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
            </svg>
        </a>
    )
}

export function MenuCloseIconMobile() {

    // JSX
    return (
        <a
            href="#header-nav"
            className="hidden md:block text-white absolute top-6 right-6"
        >
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m.5.499 23 23M23.5.499l-23 23"></path>
            </svg>
        </a>
    )
}


