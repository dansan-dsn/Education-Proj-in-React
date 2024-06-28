import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0 custom-link mr-2">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="bx bx-code-alt"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                EDUCATIONAL PROGRAM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                COMMUNICATION FACTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                COURSES
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-sm-0 custom-link">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-primary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    HANGUL
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    LUNYAKITARA
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    LUGANDA
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex form" role="search">
            <i className="bx bx-search"></i>
            <input
              className="form-control me-2 col-w-100"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link
              to="/Login"
              className="btn btn-outline-primary mr-2 col-4"
              type="submit"
            >
              SIGN IN
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
