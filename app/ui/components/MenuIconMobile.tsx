import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface MenuIconProps {
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

export function MenuIconMobile({
    setIsMobileMenuOpen
}:MenuIconProps) {

    // JSX
    return (
        <button
            className="hidden lg:block text-white border-none bg-transparent"
            onClick={() => setIsMobileMenuOpen(true)}
        >
            <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7 3 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                <path d="M21 12 3 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                <path d="M21 17 3 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
            </svg>
        </button>
    )
}

export function MenuCloseIconMobile({
    setIsMobileMenuOpen
}:MenuIconProps) {

    // JSX
    return (
        <button
            className="hidden lg:block text-white absolute top-6 right-6 border-none bg-transparent"
            onClick={() => setIsMobileMenuOpen(false)}
        >
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m.5.499 23 23M23.5.499l-23 23"></path>
            </svg>
        </button>
    )
}


