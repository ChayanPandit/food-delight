import { Link } from "react-router-dom"


export default function Footer() {
    return (
        <footer className="bottom-0 w-full bg-slate-100 border-b">
    <div className="container bg-slate-100 w-full flex flex-col items-center justify-between gap-4 px-4 py-2 md:flex-row md:gap-0 bg-muted/50 border-t sticky bottom-0 ">
      <div className="text-center md:text-left">
        <Link className="text-lg font-bold" href="#">
          Delicious Bites
        </Link>
        <p className="text-sm text-muted-foreground">Discover the best restaurants in town.</p>
      </div>
      <nav className="flex items-center gap-4">
        <Link className="text-muted-foreground hover:text-foreground" href="#">
          About
        </Link>
        <Link className="text-muted-foreground hover:text-foreground" href="#">
          Contact
        </Link>
        <Link className="text-muted-foreground hover:text-foreground" href="#">
          Privacy
        </Link>
        <Link className="text-muted-foreground hover:text-foreground" href="#">
          Terms
        </Link>
      </nav>
    </div>
    </footer>
    )
  }