import Link from "next/link";
import EslandLogoSvg from "../components/EslandLogoSvg";
import { GithubIcon, InstagramIcon, RedditIcon, TwitterIcon } from "../components/SocialMediaIcons";
import FooterMenu from "../components/FooterMenu";
import Image from "next/image";

export default function Footer() {

    // JSX
    return (
        <footer className="bg-black/40">
            <div className="mx-auto w-full max-w-[1280px] p-4 px-6 py-8 lg:py-6">
                <div className="flex justify-between sm:flex-col sm:gap-3">
                    <div className="flex flex-col b-0 md:mb-6">
                        <Link
                            href="/"
                            className="-mt-14 sm:-mt-9 flex items-center justify-center"
                        >
                            <EslandLogoSvg 
                                svgClass="h-[120px] w-[96px] sm:h-[90px] sm:w-[66px]"
                            />
                        </Link>
                        <div className="mt-6 flex justify-center gap-x-4">
                            <TwitterIcon />
                            <InstagramIcon />
                            <RedditIcon />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8 sm:gap-6">
                        <FooterMenu
                            title="LEGAL"
                            items={[
                                {
                                    title: "Aviso Legal",
                                    slug:"/aviso-legal"
                                },
                                {
                                    title: "Privacidad",
                                    slug:"/privacidad"
                                },
                                {
                                    title: "Cookies",
                                    slug:"/cookies"
                                }
                            ]}
                        />
                        <FooterMenu
                            title="MAPA WEB"
                            items={[
                                {
                                    title: "Inicio",
                                    slug:"/"
                                },
                                {
                                    title: "Info",
                                    slug:"/info"
                                },
                                {
                                    title: "Archivo",
                                    slug:"/archivo"
                                }
                            ]}
                        />
                        <div>
                            <h2 className="mb-0 text-sm font-semibold uppercase text-white">
                                PRODUCIDO POR
                            </h2>
                            <Link
                                href="https://www.ubiq.ad/"
                                target="_blank"
                                className="hover:scale-110  duration-300 block"
                            >
                                <Image
                                    alt="Ubiq logo"
                                    src="/img/ubiq-logo.svg"
                                    width={120}
                                    height={120}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="my-8 lg:my-6 border-white/10 mx-auto" />
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 text-center sm:text-start">

                        © ESLAND 2021 - 2024 Todos los derechos reservados. - Pagina web desarrollada para fines educativos 
                    </span>
                    <GithubIcon />
                </div>
            </div>
        </footer>
    )
}
