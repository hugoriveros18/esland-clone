import EslandLogoSvg from "../components/EslandLogoSvg";

export default function WelcomeText() {
  // JSX
  return (
    <section className="text-xl text-left px-20 sm:px-6 max-w-[70ch] text-pretty mx-auto my-24">
      <div className="flex justify-center mb-7 m-auto">
        <EslandLogoSvg
          svgClass="h-[70px] w-[60px]"
        />
      </div>
      <h1 className="text-4xl font-semibold text-center text-wrap text-white mx-auto mb-10 tracking-wide">
        Bienvenidos/as<br/> a los Premios ESLAND
      </h1>
      <p>
        El cine tiene los Oscars, la música tiene los Grammy y <strong>el streaming tiene los ESLAND</strong>. Los premios que celebran la creatividad y el talento de los mejores creadores de contenido de <strong>la comunidad hispanohablante</strong>.
      </p>
      <p>
        España, Latinoamérica y Andorra unidas por creadores, creadoras y sus comunidades, para recordar y revivir <strong>algunos de los mejores momentos del año</strong>.
      </p>
      <p>
        Tras dos galas celebradas, una en el Palau de la Música Catalana de Barcelona, y otra en el Auditorio Nacional de la Ciudad de México, solo queda esperar a <strong>la tercera edición en Andorra</strong>.
      </p>
    </section>
  );
}
