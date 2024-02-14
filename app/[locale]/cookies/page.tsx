import { useTranslations } from "next-intl";

export default function Cookies() {

    // LANGUAGE
    const t = useTranslations('Cookies');

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
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('queSon.title')}
            </h1>
            <p className="text-white">
                {t('queSon.parrafo1')}
            </p>
            <p className="text-white">
                {t('queSon.parrafo2')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('tipos.title')}
            </h1>
            <p className="text-white font-bold">
                {t('tipos.parrafo1.title')}
            </p>
            <p className="text-white">
                {t('tipos.parrafo1.texto')}
            </p>
            <p className="text-white font-bold">
                {t('tipos.parrafo2.title')}
            </p>
            <p className="text-white">
                {t('tipos.parrafo2.texto')}
            </p>
            <p className="text-white font-bold">
                {t('tipos.parrafo3.title')}
            </p>
            <p className="text-white">
                {t('tipos.parrafo3.texto')}
            </p>
            <p className="text-white font-bold">
                {t('tipos.parrafo4.title')}
            </p>
            <p className="text-white">
                {t('tipos.parrafo4.texto')}
            </p>
            <p className="text-white font-bold">
                {t('tipos.parrafo5.title')}
            </p>
            <p className="text-white">
                {t('tipos.parrafo5.texto')}
            </p>
            <p className="text-white font-bold">
                {t('tipos.parrafo6.title')}
            </p>
            <p className="text-white">
                {t('tipos.parrafo6.texto')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('bloquear.title')}
            </h1>
            <p className="text-white">
                {t('bloquear.parrafo1')}
            </p>
            <p className="text-white">
                {t('bloquear.parrafo2')}
            </p>
            <p className="text-white">
                {t('bloquear.parrafo3')}
            </p>
            <p className="text-white">
                {t('bloquear.parrafo4')}
            </p>
            <p className="text-white">
                {t('bloquear.chrome.texto')}
                <a
                    href={t('bloquear.chrome.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-up font-semibold break-words"
                >
                    {t('bloquear.chrome.link')}
                </a>
            </p>
            <p className="text-white">
                {t('bloquear.explorer.texto')}
                <a
                    href={t('bloquear.explorer.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-up font-semibold break-words"
                >
                    {t('bloquear.explorer.link')}
                </a>
            </p>
            <p className="text-white">
                {t('bloquear.firefox.texto')}
                <a
                    href={t('bloquear.firefox.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-up font-semibold break-words"
                >
                    {t('bloquear.firefox.link')}
                </a>
            </p>
            <p className="text-white">
                {t('bloquear.safari.texto')}
                <a
                    href={t('bloquear.safari.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-up font-semibold break-words"
                >
                    {t('bloquear.safari.link')}
                </a>
            </p>
            <p className="text-white">
                {t('bloquear.opera.texto')}
                <a
                    href={t('bloquear.opera.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-up font-semibold break-words"
                >
                    {t('bloquear.opera.link')}
                </a>
            </p>
            <p className="text-white">
                {t('bloquear.analytics.texto')}
                <a
                    href={t('bloquear.analytics.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-up font-semibold break-words"
                >
                    {t('bloquear.analytics.link')}
                </a>
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('saberMas.title')}
            </h1>
            <p className="text-white">
                {t('saberMas.parrafo1.texto')}
                <a
                    href={t('saberMas.parrafo1.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-up font-semibold break-words"
                >
                    {t('saberMas.parrafo1.link')}
                </a>
            </p>
            <p className="text-white">
                {t('saberMas.parrafo2.texto')}
                <a
                    href={t('saberMas.parrafo2.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-up font-semibold break-words"
                >
                    {t('saberMas.parrafo2.link')}
                </a>
            </p>
            <p className="text-white">
                {t('saberMas.parrafo3.texto')}
                <a
                    href={t('saberMas.parrafo3.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-up font-semibold break-words"
                >
                    {t('saberMas.parrafo3.link')}
                </a>
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('terceros.title')}
            </h1>
            <p className="text-white">
                {t('terceros.parrafo')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('actualizaciones.title')}
            </h1>
            <p className="text-white">
                {t('actualizaciones.parrafo')}
            </p>
            <h1 className="mx-auto mt-16 mb-4 text-wrap text-4xl text-white font-semibold tracking-wide uppercase">
                {t('queCookies.title')}
            </h1>
            <div className="overflow-x-auto">
                <table className="w-fulltext-left rtl:text-right">
                    <thead className="uppercase">
                        <tr>
                            <th className="px-6 py-3">
                                {t('queCookies.tabla.encabezados.nombre')}
                            </th>
                            <th className="px-6 py-3">
                                {t('queCookies.tabla.encabezados.caducidad')}
                            </th>
                            <th className="px-6 py-3">
                                {t('queCookies.tabla.encabezados.proveedor')}
                            </th>
                            <th className="px-6 py-3">
                                {t('queCookies.tabla.encabezados.finalidad')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-[#007aff]">
                            <td className="px-6 py-3">
                                {t('queCookies.tabla.fila1.nombre')}
                            </td>
                            <td className="px-6 py-3">
                                {t('queCookies.tabla.fila1.caducidad')}
                            </td>
                            <td className="px-6 py-3">
                                <a
                                    href='https://google.com'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="animate-fade-up font-semibold break-words"
                                >
                                    {t('queCookies.tabla.fila1.proveedor')}
                                </a>
                            </td>
                            <td className="px-6 py-3">
                                <p className="text-white">
                                    {t('queCookies.tabla.fila1.finalidad')}
                                </p>
                            </td>
                        </tr>
                        <tr className="odd:bg-[#007aff]">
                            <td className="px-6 py-3">
                                {t('queCookies.tabla.fila2.nombre')}
                            </td>
                            <td className="px-6 py-3">
                                {t('queCookies.tabla.fila2.caducidad')}
                            </td>
                            <td className="px-6 py-3">
                                <a
                                    href='https://google.com'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="animate-fade-up font-semibold break-words"
                                >
                                    {t('queCookies.tabla.fila2.proveedor')}
                                </a>
                            </td>
                            <td className="px-6 py-3">
                                <p className="text-white">
                                    {t('queCookies.tabla.fila2.finalidad')}
                                </p>
                            </td>
                        </tr>
                        <tr className="odd:bg-[#007aff]">
                            <td className="px-6 py-3">
                                {t('queCookies.tabla.fila3.nombre')}
                            </td>
                            <td className="px-6 py-3">
                                {t('queCookies.tabla.fila3.caducidad')}
                            </td>
                            <td className="px-6 py-3">
                                <a
                                    href='https://google.com'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="animate-fade-up font-semibold break-words"
                                >
                                    {t('queCookies.tabla.fila3.proveedor')}
                                </a>
                            </td>
                            <td className="px-6 py-3">
                                <p className="text-white">
                                    {t('queCookies.tabla.fila3.finalidad')}
                                </p>
                            </td>
                        </tr>
                        <tr className="odd:bg-[#007aff]">
                            <td className="px-6 py-3">
                                {t('queCookies.tabla.fila4.nombre')}
                            </td>
                            <td className="px-6 py-3">
                                {t('queCookies.tabla.fila4.caducidad')}
                            </td>
                            <td className="px-6 py-3">
                                <a
                                    href='https://google.com'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="animate-fade-up font-semibold break-words"
                                >
                                    {t('queCookies.tabla.fila4.proveedor')}
                                </a>
                            </td>
                            <td className="px-6 py-3">
                                <p className="text-white">
                                    {t('queCookies.tabla.fila4.finalidad')}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-white">
                {t('ultimaActualizacion')}
            </p>
        </main>
    )
}
