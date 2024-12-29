function Navbar() {
  return (
    <nav className="navbar sticky-top bg-gray pb-0" id="0">
      <div className="container-fluid">
        <a
          className="navbar-brand text-crimson fw-bold bg-white px-3 rounded"
          href="/"
        >
          f.
        </a>
        <form
          className="d-flex"
          role="search"
          method="get"
          action="/home/search"
          style={{ width: "250px" }}
        >
          <input
            className="form-control me-2 bg-dark text-white"
            name="keyword"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-warning" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="row mx-auto mt-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active px-5"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Movies
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-5"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              TV Show
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
