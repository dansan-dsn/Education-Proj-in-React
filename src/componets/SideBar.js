export default function SiderHeader() {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex mt-3">
          <a href="#" className="nav-link">
            <i class="bx bx-code-alt"></i>
          </a>
          <h5 className="mr-2">Coding Bandit</h5>
        </div>
        <div>
          <form className="d-flex form" role="search">
            <i class="bx bx-search"></i>
            <input
              className="form-control col-12"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "100%" }}
            />
          </form>
        </div>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-sm-0 custom-link mr-2">
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
        </div>
      </div>
    </>
  );
}
