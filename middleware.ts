import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
  pathnames
});
 
export const config = {
  matcher: ['/', '/(es|en)/:path*']
};