import { MainNav } from "@/components/menu/main-nav"
import { ModeToggle } from "@/components/menu/mode-toggle"
import { ConnectWallet } from "@thirdweb-dev/react";


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full mt-5">
      <section className="max-w-[1150px] mx-auto px-5 flex h-16 items-center space-x-4 justify-between sm:space-x-0">
        <MainNav />
        <nav className="flex items-center gap-2">
          <ModeToggle />
          <ConnectWallet className="!bg-accentPurple !py-[10px] !text-white !font-bold" />
        </nav>
      </section>
    </header>
  )
}
