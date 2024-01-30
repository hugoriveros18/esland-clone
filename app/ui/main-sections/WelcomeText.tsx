import { useTranslations } from "next-intl";
import EslandLogoSvg from "../components/EslandLogoSvg";

export default function WelcomeText() {

  // LANGUAGE
  const t = useTranslations('WelcomeText');

  // JSX
  return (
    <section className="text-xl text-left px-20 sm:px-6 max-w-[70ch] text-pretty mx-auto my-24">
      <div className="flex justify-center mb-7 m-auto">
        <EslandLogoSvg
          svgClass="h-[70px] w-[60px]"
        />
      </div>
      <h1 
        className="text-4xl font-semibold text-center text-wrap text-white mx-auto mb-10 tracking-wide"
        dangerouslySetInnerHTML={{ __html: t.raw('titulo') }}
      />
      <p dangerouslySetInnerHTML={{ __html: t.raw('parrafoUno') }}/>
      <p dangerouslySetInnerHTML={{ __html: t.raw('parrafoDos') }}/>
      <p dangerouslySetInnerHTML={{ __html: t.raw('parrafoTres') }}/>
    </section>
  );
}
