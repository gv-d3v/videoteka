import React, { useEffect, useState } from "react";
import TopPage from "./topPage";
import UpIcon from "../../../../_iconsAndImages/up-icon";

const TopButton = () => {
   const [backToTop, setBackToTop] = useState(false);
   const handleScroll = () => {
      //Show the button when the user scrolls down 100 pixels or more
      if (window.scrollY > 100) {
         setBackToTop(true);
      } else {
         setBackToTop(false);
      }
   };

   useEffect(() => {
      //Attach the scroll event listener when the component mounts
      window.addEventListener("scroll", handleScroll);

      //Clean up the event listener when the component unmounts
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []); //Empty dependency array ensures the effect runs only once when the component mounts

   return (
      <div
         className={`scroll-to-top-button ${backToTop ? "visible" : ""}`}
         onClick={() => TopPage()}
      >
         <UpIcon />
      </div>
   );
};

export default TopButton;
