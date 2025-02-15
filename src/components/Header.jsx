import { Link } from "react-router-dom";

export default function Header({ numberCommande }) {
  return (
    <>
      <div className="container mt-2">
        <nav className="navbar navbar-expand-lg navbar-light bg-info shadow-lg rounded">
          <div className="container-fluid">
            <Link className="navbar-brand text-white font-weight-bold" to="/">
              <i className="fa-solid fa-house-user"></i>Shop
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Accueill
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/achat">
                    Achat
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/panier"
                    style={{ position: "relative" }}
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                    <span className="cart-item-count text-succes">
                      {numberCommande > 0 ? numberCommande : ""}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
