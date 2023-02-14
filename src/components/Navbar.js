import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/dashboard" className="navbar-brand">
        Dashboard
      </Link>
      <Link to="/produit" className="navbar-brand">
        Produits
      </Link>
      <Link to="/profil" className="navbar-brand">
        Profil
      </Link>
    </nav>
  )
}
