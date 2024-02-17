import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./components/aNavbar/Navbar";
import Home from "./components/pages/aHome/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./components/pages/bMoviePage/moviePage";
import moviesData, { genres } from "./database/moviesData";
import GenresPage from "./components/pages/cGenres/genresPage";
import LoginModal from "./components/modals/LoginModal";

function App() {
   const [allMovies, setAllMovies] = useState([]);
   const [movies, setMovies] = useState([]);
   const [loaded, setLoaded] = useState(false);
   const [allGenres, setAllGenres] = useState([]);

   //Login modal
   const [center, setCenter] = useState("");

   //FETCH MOVIES
   const getMovies = _ => {
      const moviesvar = moviesData()
         .slice()
         .sort((a, b) => b.year - a.year);

      const genresvar = genres;

      setTimeout(() => {
         setMovies(moviesvar);
         setAllMovies(moviesvar);
         setAllGenres(genresvar);
      }, 300);
      setLoaded(true);
   };

   useEffect(() => {
      getMovies();
   }, []);

   return (
      <BrowserRouter>
         <LoginModal
            center={center}
            setCenter={setCenter}
         />
         <Navbar setCenter={setCenter} />
         <Routes>
            <Route
               path="/"
               element={
                  <Home
                     movies={movies}
                     allMovies={allMovies}
                     loaded={loaded}
                     setMovies={setMovies}
                  />
               }
            />
            <Route
               path=":id"
               element={
                  <MoviePage
                     movies={movies}
                     setCenter={setCenter}
                  />
               }
            />
            <Route
               path="/zanrovi"
               element={
                  <GenresPage
                     allGenres={allGenres}
                     allMovies={allMovies}
                  />
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
