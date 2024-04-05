import { SiteHeader } from "@/components/menu/site-header"
import '@fontsource/press-start-2p';
import { Novatrix } from "uvcanvas"
import FaucetCard from "@/components/faucet/FaucetCard";

function App() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-hidden">
        <SiteHeader />
        <main className="max-w-[1150px] mx-auto px-5 my-[150px] relative">
          <div className="lg:w-[1100px] lg:h-[700px] w-[500px] h-[600px] absolute -right-[70vw] lg:-right-[68vw] lg:-top-[200px] -z-10 slime -rotate-[50deg] rounded-[100px] overflow-hidden">
            <Novatrix />
          </div>
          <FaucetCard />
        </main>
      </div>
    </>
  )
}

export default App
