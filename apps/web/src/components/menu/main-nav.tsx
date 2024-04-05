import { Link } from "react-router-dom"
import Logo from "../Logo"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="/" >
        <Logo />

      </Link>

    </div>
  )
}
