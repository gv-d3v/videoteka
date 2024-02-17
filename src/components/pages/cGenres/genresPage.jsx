import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopPage from "../utility/tools/topPage";
import TopButton from "../utility/tools/topButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const GenresPage = ({ allGenres, allMovies }) => {
   const { hash } = useLocation();

   const [slidesPerView, setSlidesPerView] = useState(5);
   const [slidesPerGroup, setSlidesPerGroup] = useState(5);

   //Change resolution
   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

   const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
   };

   useEffect(() => {
      // Initial setup
      updateScreenSize();

      // Event listener for window resize
      window.addEventListener("resize", updateScreenSize);

      // Cleanup the event listener when the component unmounts
      return () => {
         window.removeEventListener("resize", updateScreenSize);
      };
   }, []); // Empty dependency array ensures the effect runs only once after the initial render

   useEffect(() => {
      if (window.innerWidth >= 1000) {
         setSlidesPerView(5);
         setSlidesPerGroup(5);
      } else if (window.innerWidth < 1000 && window.innerWidth >= 600) {
         setSlidesPerView(4);
         setSlidesPerGroup(4);
      } else if (window.innerWidth < 600 && window.innerWidth >= 400) {
         setSlidesPerView(3);
         setSlidesPerGroup(3);
      } else if (window.innerWidth < 400) {
         setSlidesPerView(2);
         setSlidesPerGroup(2);
      }
   }, [isLargeScreen]); 

   //Scroll to genre
   useEffect(() => {
      const targetElement = document.getElementById(hash.substring(1));

      if (targetElement) {
         setTimeout(() => {
            targetElement.scrollIntoView({ behavior: "smooth" });
         }, 10);
      } else {
         window.scrollTo(0, 0);
      }
   }, [hash]);

   return (
      <div className="container">
         {Object.entries(allGenres).map(([key, value]) => (
            <div
               className="row genre"
               key={key}
            >
               <h3 id={value.toLowerCase().replace(/č/g, "c")}>{value}</h3>
               <Swiper
                  slidesPerView={slidesPerView}
                  slidesPerGroup={slidesPerGroup}
                  spaceBetween={30}
                  centeredSlides={false}
                  navigation={true}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                 
               >
                  <div className="col">
                     {allMovies
                        .filter(movie => movie.genre.includes(value))
                        .map(filteredMovie => (
                           <SwiperSlide>
                              <Link
                                 to={`/${filteredMovie.id}`}
                                 onClick={() => TopPage()}
                              >
                                 <img
                                    src={filteredMovie.img}
                                    alt=""
                                 />
                              </Link>
                           </SwiperSlide>
                        ))}
                  </div>
               </Swiper>
            </div>
         ))}
         <TopButton />
      </div>
   );
};

export default GenresPage;
