import {notFound} from "next/navigation";
import {getRequestConfig} from 'next-intl/server';
import spanish from './messages/es.json'
import english from './messages/en.json'

type LanguagesConfigured = 'es' | 'en';
 
const locales = ['es', 'en'];
 
export default getRequestConfig(async ({locale}) => {

  if (!locales.includes(locale as LanguagesConfigured)) {
    notFound();
  }

  return {
    messages: locale === 'es' ? spanish : english
  };
});