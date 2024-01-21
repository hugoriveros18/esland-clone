import BentoGrid from "../ui/main-sections/BentoGrid"
import EslandGuide from "../ui/main-sections/EslandGuide"
import WelcomeScreen from "../ui/main-sections/WelcomeScreen"
import WelcomeText from "../ui/main-sections/WelcomeText"

export default function Home() {
  return (
    <main className="w-full">

      {/* WELCOME SCREEN */}
      <WelcomeScreen />

      {/* WELCOME TEXT */}
      <WelcomeText />

      {/* BENTO GRID */}
      <BentoGrid />

      {/* ESLAND GUIDE */}
      <EslandGuide />

    </main>
  )
}
