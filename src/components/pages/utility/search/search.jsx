import React, { useEffect, useState } from "react";
import GenreList from "./searchOptions/genre";
import LaguangesList from "./searchOptions/laguanges";
import OrderBy from "./searchOptions/orderby";
import QualityList from "./searchOptions/quality";
import RatingList from "./searchOptions/rating";
import YearList from "./searchOptions/year";

export default function Search({ allMovies, setMovies, movies, setShownCards, setHasMore, setNoMovies }) {
   const [searchInput, setSearchInput] = useState("");
   const [videoQualityInput, setVideoQualityInput] = useState("");
   const [genreInput, setGenreInput] = useState("");
   const [yearInput, setYearInput] = useState("");
   const [ratingInput, setRatingInput] = useState("");
   const [laguangeInput, setLaguangeInput] = useState("");
   const [orderBy, setOrderBy] = useState("");
   const [visible, setVisible] = useState("");

   //FILTERS
   const applyFilters = () => {
      let filteredMovies = allMovies;

      if (searchInput) {
         filteredMovies = filteredMovies.filter(movie => movie.label.toLowerCase().includes(searchInput.toLowerCase()));
      }

      if (videoQualityInput) {
         filteredMovies = filteredMovies.filter(movie => movie.quality.toLowerCase().includes(videoQualityInput.toLowerCase()));
      }

      if (genreInput) {
         filteredMovies = filteredMovies.filter(movie =>
            typeof movie.genre === "string"
               ? movie.genre.toLowerCase().includes(genreInput.toLowerCase())
               : movie.genre.some(genre => genre.toLowerCase().includes(genreInput.toLowerCase()))
         );
      }

      if (yearInput) {
         filteredMovies = filteredMovies.filter(movie => {
            const movieYear = movie.year;
            if (yearInput === "2023") {
               return movieYear === 2023;
            } else if (yearInput === "2022") {
               return movieYear === 2022;
            } else if (yearInput === "2020-2023") {
               return movieYear >= 2020;
            } else if (yearInput === "2010-2023") {
               return movieYear >= 2010;
            } else if (yearInput === "2010-2019") {
               return movieYear >= 2010 && movieYear <= 2019;
            } else if (yearInput === "2000-2009") {
               return movieYear >= 2000 && movieYear <= 2009;
            } else if (yearInput === "1990-1999") {
               return movieYear >= 1990 && movieYear <= 1999;
            } else if (yearInput === "1980-1989") {
               return movieYear >= 1980 && movieYear <= 1989;
            } else if (yearInput === "1970-1979") {
               return movieYear >= 1970 && movieYear <= 1979;
            } else if (yearInput === "1900-1969") {
               return movieYear >= 1900 && movieYear <= 1969;
            }
            return true;
         });
      }

      if (ratingInput) {
         const minRanking = parseFloat(ratingInput);

         if (!isNaN(minRanking)) {
            const maxRanking = minRanking + 0.9; // For '8', '9', etc.

            filteredMovies = filteredMovies.filter(movie => {
               const movieRanking = movie.imdb;
               return movieRanking >= minRanking && movieRanking <= maxRanking;
            });
         }
      }

      if (laguangeInput) {
         filteredMovies = filteredMovies.filter(movie => movie.laguange.toLowerCase().includes(laguangeInput.toLowerCase()));
      }

      //SORTING
      if (orderBy) {
         if (orderBy === "yearasc") filteredMovies = filteredMovies.slice().sort((a, b) => a.year - b.year);
         if (orderBy === "yeardsc") filteredMovies = filteredMovies.slice().sort((a, b) => b.year - a.year);
         if (orderBy === "bestrated") filteredMovies = filteredMovies.slice().sort((a, b) => b.imdb - a.imdb);
         if (orderBy === "alphabetical") filteredMovies = filteredMovies.slice().sort((a, b) => a.label.localeCompare(b.label));
      }
      //CHANGE STATE
      setMovies(filteredMovies);
   };

   const checkMovies = () => {
      if (searchInput && movies.length === 0) {
         setNoMovies("search");
      } else if ((videoQualityInput || genreInput || yearInput || ratingInput || laguangeInput) && movies.length === 0) {
         setNoMovies("filter");
      } else {
         setNoMovies("false");
      }
   };

   useEffect(() => {
      applyFilters();
      setShownCards(8);
      setHasMore(true);
      checkMovies();
   }, [searchInput, videoQualityInput, genreInput, yearInput, ratingInput, laguangeInput, orderBy, checkMovies()]);

   const glowActive = element => {
      return element === "" ? "" : "glow";
   };

   const formSubmitHandler = e => {
      e.preventDefault();
      setVisible("");
   };

   return (
      <form
         accept-charset="UTF-8"
         className="searchForm"
         onSubmit={e => {
            formSubmitHandler(e);
         }}
      >
         <div
            class="input-group container search-query"
            bis_skin_checked="1"
         >
            <input
               onFocus={() => setVisible("visible")}
               onClick={() => setVisible("visible")}
               class="form-control"
               placeholder="Pronađi film…"
               autocorrect="off"
               autocomplete="off"
               name="keyword"
               type="search"
               onChange={e => {
                  setSearchInput(e.target.value);
               }}
            />
         </div>
         <div
            class={`container search ${visible}`}
            bis_skin_checked="1"
         >
            <div
               class="row"
               bis_skin_checked="1"
            >
               <div
                  class="col-xs-10"
                  bis_skin_checked="1"
               >
                  <div
                     class="selects-container"
                     bis_skin_checked="1"
                  >
                     <p>Žanr:</p>
                     <select
                        className={glowActive(genreInput)}
                        name="genre"
                        onChange={e => {
                           setGenreInput(e.target.value);
                        }}
                     >
                        <GenreList />
                     </select>
                  </div>

                  <div
                     class="selects-container"
                     bis_skin_checked="1"
                  >
                     <p>Godina:</p>
                     <select
                        className={glowActive(yearInput)}
                        name="year"
                        onChange={e => {
                           setYearInput(e.target.value);
                        }}
                     >
                        <YearList />
                     </select>
                  </div>

                  <div
                     class="selects-container"
                     bis_skin_checked="1"
                  >
                     <p>Kvalitet:</p>
                     <select
                        className={glowActive(videoQualityInput)}
                        name="quality"
                        onChange={e => {
                           setVideoQualityInput(e.target.value);
                        }}
                     >
                        <QualityList />
                     </select>
                  </div>
               </div>
               <div
                  class="col-xs-10"
                  bis_skin_checked="1"
               >
                  <div
                     class="selects-container selects-container-last"
                     bis_skin_checked="1"
                  >
                     <p>Poredaj po:</p>
                     <select
                        name="order_by"
                        defaultValue="yeardsc"
                        onChange={e => {
                           setOrderBy(e.target.value);
                        }}
                     >
                        <OrderBy />
                     </select>
                  </div>
                  <div
                     class="selects-container"
                     bis_skin_checked="1"
                  >
                     <p>Ocjena:</p>
                     <select
                        className={glowActive(ratingInput)}
                        name="rating"
                        onChange={e => {
                           setRatingInput(e.target.value);
                        }}
                     >
                        <RatingList />
                     </select>
                  </div>
                  <div
                     class="selects-container"
                     bis_skin_checked="1"
                  >
                     <p>Jezik:</p>
                     <select
                        className={glowActive(laguangeInput)}
                        name="language"
                        onChange={e => {
                           setLaguangeInput(e.target.value);
                        }}
                     >
                        <LaguangesList />
                     </select>
                  </div>
               </div>
            </div>
         </div>
      </form>
   );
}
