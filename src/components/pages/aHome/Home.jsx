import React, { useEffect, useState, useRef } from "react";
import Search from "../utility/search/search";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../utility/pagination/card/card";
import CardData from "../utility/pagination/card/cardData";
import Trailer from "../utility/trailer/trailer";
import TopPage from "../utility/tools/topPage";
import TopButton from "../utility/tools/topButton";

export default function Home({ movies, allMovies, loaded, setMovies }) {
   const playerRef = useRef(null);
   
   const [shownCards, setShownCards] = useState("");
   const [hasMore, setHasMore] = useState(true);
   const [noMovies, setNoMovies] = useState(false);
   const [showTrailer, setShowTrailer] = useState("");
   const [top, setTop] = useState(0);
   const [player, setPlayer] = useState(null);
   const [trailer, setTrailer] = useState("");

   //MOVIES CARDS RESPONSIVNESS
   const cardsShownResponsive = {
      phone: 1,
      small: 2,
      medium: 3,
      large: 4,
   };

   useEffect(() => {
      if (window.innerWidth >= 768 && window.innerWidth < 992) {
         setShownCards(9);
      } else {
         setShownCards(8);
      }
   }, []);

   //SCROLL FETCH
   const fetchMoreData = () => {
      setTimeout(() => {
         if (window.innerWidth >= 768 && window.innerWidth < 992) {
            setShownCards(shownCards + 9);
            if (shownCards >= movies.length - 9) {
               setHasMore(false);
            }
         } else {
            setShownCards(shownCards + 8);
            if (shownCards >= movies.length - 8) {
               setHasMore(false);
            }
         }
      }, 1000);
   };

   //ADD ... AFTER CERTTAIN CHAR LENGTH
   /*const truncateText = (text, limit) => {
        if (text.length <= limit) {
          return text;
        }
        return text.substring(0, limit) + '...';
      };*/

   //MOVIES CARDS CHECKUP AND RENDER
   const Movies = () => {
      if (noMovies === "search") {
         return <p className="load no-movies">Film koji ste tražili ne postoji.</p>;
      } else if (noMovies === "filter") {
         return <p className="load no-movies">Nema dostupnih filmova unutar odabranog raspona filtera.</p>;
      } else {
         return movies.slice(0, shownCards).map((movie, index) =>
            movie.id && movie.img ? (
               <li key={index + 1}>
                  <Card
                     data={
                        <CardData
                           data={movie}
                           openTrailer={openTrailer}
                        />
                     }
                  />
               </li>
            ) : null
         );
      }
   };

   //TRAILER
   const openTrailer = trailer => {
      setTrailer(trailer);
      setTop(window.scrollY);
      setShowTrailer("show");
      document.body.style.overflow = "hidden";
   };

   const closeTrailer = () => {
      setShowTrailer("");
      document.body.style.overflow = "scroll";
      if (player) {
         player.stopVideo();
      }
   };

   return (
      <React.Fragment>
         <Trailer
            top={top}
            showTrailer={showTrailer}
            playerRef={playerRef}
            setPlayer={setPlayer}
            closeTrailer={closeTrailer}
            trailer={trailer}
         />
         {loaded === false ? (
            <div>
               <div className="loadingBox">
                  <div className="loadingBoxPosition">
                     <div className="loadingBoxContent">
                        <div class="lds-dual-ring"></div>
                        <p className="load first">Učitavanje...</p>
                     </div>
                  </div>
               </div>
               <div className="spaceToFooter"></div>
            </div>
         ) : (
            <div className="CardMainContainer">
               <Search
                  allMovies={allMovies}
                  setMovies={setMovies}
                  movies={movies}
                  setShownCards={setShownCards}
                  setHasMore={setHasMore}
                  setNoMovies={setNoMovies}
               />
               <div
                  className="album py-4 bg-light"
                  id="cardContent"
               >
                  <div
                     id="scrollableDiv"
                     className="container katalogContainer"
                  >
                     <InfiniteScroll
                        dataLength={shownCards}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        endMessage={
                           <button
                              className="card-button scroll-top"
                              onClick={() => {
                                 TopPage();
                              }}
                           >
                              Povratak na početak
                           </button>
                        }
                        loader={<p className="load scroll">Učitavanje...</p>}
                     >
                        {" "}
                        <div
                           id="cardlist"
                           className={`row row-cols-${cardsShownResponsive.phone} row-cols-sm-${cardsShownResponsive.small} row-cols-md-${cardsShownResponsive.medium} row-cols-lg-${cardsShownResponsive.large} g-3`}
                        >
                           {Movies()}
                        </div>
                     </InfiniteScroll>
                     <TopButton />
                  </div>
               </div>
            </div>
         )}
      </React.Fragment>
   );
}
