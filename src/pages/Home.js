import { useEffect, useState } from "react";

function Home() {
  const API_KEY = process.env.TMDB_API_KEY;

  // movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie",
          {
            headers: {
              Authorization: "Bearer " + API_KEY,
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  //series
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/tv",
          {
            headers: {
              Authorization: "Bearer " + API_KEY,
            },
          }
        );
        const data = await response.json();
        setSeries(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchSeries();
  }, []);

  return (
    <div>
      {/* <div>
        <ul className="text-center nav justify-content-center">
          <li className="nav-item">
            <a className="d-block text-dark text-decoration-none mx-3" href="/">
              <div className="p-2 bg-dark text-center rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="<?= ($title == 'trending') ? 'crimson' : '#adb5bd'; ?>"
                  className="bi bi-fire"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                </svg>
              </div>
              <div className="name text-muted text-decoration-none text-center pt-1">
                Trending
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-block text-dark text-decoration-none mx-3"
              href="/home/toprated"
            >
              <div className="p-2 bg-dark text-center rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="<?= ($title == 'best') ? 'crimson' : '#adb5bd'; ?>"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className="name text-muted text-decoration-none text-center pt-1">
                Top Rated
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-block text-dark text-decoration-none mx-3"
              href="/home/genres"
            >
              <div className="p-2 bg-dark text-center rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="<?= ($title == 'genre') ? 'crimson' : '#adb5bd'; ?>"
                  className="bi bi-grid-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                </svg>
              </div>
              <div className="name text-muted text-decoration-none text-center pt-1">
                Genre
              </div>
            </a>
          </li>
        </ul>
      </div> */}

      {/* <!-- Daftar Film maks 12 tiap baris 6 --> */}
      <div className="tab-content my-4" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          {/* <!-- Movie --> */}
          <div className="row d-flex ">
            {movies.map((movie) => (
              <div className="card col-md-2 col-sm-3 col-6 mb-3">
                <a href="/home/detail/movie/<?= $movie['id']; ?>">
                  <img
                    src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                    className="card-img-top"
                    alt="judul"
                  ></img>
                </a>
                <div className="card-body p-1">
                  <h6 className="card-title text-white">{movie.title}</h6>
                  <p className="card-text text-white-50">
                    {movie.release_date
                      ? movie.release_date.split("-")[0]
                      : "-"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          {/* <!-- Series --> */}
          <div className="row d-flex">
            {series.map((serie) => (
              <div className="card col-md-2 col-sm-3 col-6 mb-3">
                <a href="/home/detail/tv/<?= $series['id']; ?>">
                  <img
                    src={"https://image.tmdb.org/t/p/w300" + serie.poster_path}
                    className="card-img-top"
                    alt="judul"
                  />
                </a>
                <div className="card-body p-1">
                  <h6 className="card-title text-white">{serie.name}</h6>
                  <p className="card-text text-white-50">
                    {serie.release_date
                      ? serie.release_date.split("-")[0]
                      : "-"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <?= $pager_links; ?> */}
      </div>
    </div>
  );
}

export default Home;
