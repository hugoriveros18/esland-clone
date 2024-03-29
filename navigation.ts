import {
createLocalizedPathnamesNavigation,
Pathnames
} from 'next-intl/navigation';

export const locales = ['es', 'en'] as const;
export const localePrefix = 'always'; // Default

export const pathnames = {
    // If locales use different paths, you can
    // specify each external path per locale.
    '/': {
        en: '/en',
        es: '/es'
    },
    '/vota': {
        en: '/vote',
        es: '/vota'
    },
    '/info': '/info'
} satisfies Pathnames<typeof locales>;

export const {Link, redirect, usePathname, useRouter, getPathname} =
createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});