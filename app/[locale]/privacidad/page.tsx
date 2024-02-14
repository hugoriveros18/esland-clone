import { useTranslations } from "next-intl";

export default function Privacidad() {

    // LANGUAGE
    const t = useTranslations('Privacidad');

    // JSX
    return (
        <main className="max-w-5xl mx-auto my-24 text-pretty px-20 sm:px-6 text-left text-lg leading-relaxed">
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('politica.title')}
            </h1>
            <p className="text-white">
                {t('politica.parrafo1')}
            </p>
            <p className="text-white">
                {t('politica.parrafo2')}
            </p>
            <p className="text-white">
                {t('politica.parrafo3')}
            </p>
            <p className="text-white">
                {t('politica.parrafo4')}
            </p>
            <p className="text-white">
                {t('politica.parrafo5')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('responsable.title')}
            </h1>
            <p className="text-white">
                {t('responsable.parrafo1')}
            </p>
            <p className="text-white">
                {t('responsable.parrafo2')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('definiciones.title')}
            </h1>
            <p className="text-white">
                {t('definiciones.parrafo1')}
            </p>
            <p className="text-white">
                {t('definiciones.parrafo2')}
            </p>
            <p className="text-white">
                {t('definiciones.parrafo3')}
            </p>
            <p className="text-white">
                {t('definiciones.parrafo4')}
            </p>
            <p className="text-white">
                {t('definiciones.parrafo5')}
            </p>
            <p className="text-white">
                {t('definiciones.parrafo6')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('finalidad.title')}
            </h1>
            <p className="text-white">
                {t('finalidad.parrafo1')}
            </p>
            <p className="text-white">
                {t('finalidad.parrafo2')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('categoria.title')}
            </h1>
            <p className="text-white">
                {t('categoria.parrafo1')}
            </p>
            <p className="text-white">
                {t('categoria.parrafo2')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('base.title')}
            </h1>
            <p className="text-white">
                {t('base.parrafo1')}
            </p>
            <p className="text-white">
                {t('base.parrafo2')}
            </p>
            <p className="text-white">
                {t('base.parrafo3')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('conservacion.title')}
            </h1>
            <p className="text-white">
                {t('conservacion.parrafo1')}
            </p>
            <p className="text-white">
                {t('conservacion.parrafo2')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('comunicacion.title')}
            </h1>
            <p className="text-white">
                {t('comunicacion.parrafo1')}
            </p>
            <p className="text-white">
                {t('comunicacion.parrafo2')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('derechos.title')}
            </h1>
            <p className="text-white">
                {t('derechos.parrafo1')}
            </p>
            <ul className="list-disc">
                <li className="text-white">
                    {t('derechos.parrafo2')}
                </li>
                <li className="text-white">
                    {t('derechos.parrafo3')}
                </li>
                <li className="text-white">
                    {t('derechos.parrafo4')}
                </li>
                <li className="text-white">
                    {t('derechos.parrafo5')}
                </li>
                <li className="text-white">
                    {t('derechos.parrafo6')}
                </li>
            </ul>
            <p className="text-white">
                {t('derechos.parrafo7')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('enlaces.title')}
            </h1>
            <p className="text-white">
                {t('enlaces.parrafo1')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('redesSociales.title')}
            </h1>
            <p className="text-white">
                {t('redesSociales.parrafo1')}
            </p>
            <p className="text-white">
                {t('redesSociales.parrafo2')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('cookies.title')}
            </h1>
            <p className="text-white">
                {t('cookies.parrafo1')}
            </p>
            <p className="text-white">
                {t('cookies.parrafo2')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('transferencias.title')}
            </h1>
            <p className="text-white">
                {t('transferencias.parrafo1')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('modificaciones.title')}
            </h1>
            <p className="text-white">
                {t('modificaciones.parrafo1')}
            </p>
            <p className="text-white">
                {t('ultimaActualizacion')}
            </p>
        </main>
    )
}
