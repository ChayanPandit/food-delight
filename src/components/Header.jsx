import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Header() {
  
    return (
      <header className="sticky top-0 z-20 w-full bg-slate-100 border-b">
      <div className="w-full flex items-center justify-between h-16 px-4 md:px-6">
      <Link className="text-2xl font-bold" to="/">
        Delicious Bites
      </Link>
      <nav className="hidden md:flex items-center gap-4 ml-auto">
        <Link className="text-muted-foreground hover:text-foreground" to="/">
          Home
        </Link>
        <Link className="text-muted-foreground hover:text-foreground" to="/">
          Restaurants
        </Link>
        <Link className="text-muted-foreground hover:text-foreground" to="/about">
          About
        </Link>
        <Link className="text-muted-foreground hover:text-foreground" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
    </header>
    )
  }