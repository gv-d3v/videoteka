import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopPage from "../../tools/topPage";

const CardData = ({ data, openTrailer }) => {
   const [show, setShow] = useState("");

   if (data.id && data.img && data.label) {
    const toggleShow = () =>{
        if(show===""){
            setShow("show")
        }else{
            setShow("")
        }
    }
      return (
         <React.Fragment>
            <div
               className={`card-image-background ${show}`}
               onMouseEnter={() => {
                  setShow("show");
               }}
               onClick={() => {
                  toggleShow()
               }}
               onMouseLeave={() => setShow("")}
            >
               <img
                  src={data.img}
                  className={`bd-placeholder-img card-img-top ${show}`}
                  width="100%"
                  height="400"
                  aria-label={`${data.label} movie cover`}
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  alt={`${data.label} movie cover`}
               />
               <div className={`imdb ${show}`}>
                  <img
                     width="100"
                     src="/imdb.png"
                  />

                  <span>{data.imdb % 1 === 0 ? `${data.imdb}.0` : data.imdb}</span>
               </div>

               <button
                  className={`card-button trailer ${show}`}
                  onClick={() => openTrailer(data.trailer)}
               >
                  Trailer
               </button>
               <Link to={`/${data.id}`}>
                  <button
                     className={`card-button pogledaj ${show}`}
                     onClick={() => TopPage()}
                  >
                     Gledaj
                  </button>
               </Link>
            </div>
            <span
               className="card-body-uniq appHeader"
               x="50%"
               y="50%"
               fill="#eceeef"
               dy=".3em"
            >
               {data.label} ({data.year})
            </span>
            <div className="card-body-uniq">
               <p className="card-text">{data.text}</p>
            </div>
         </React.Fragment>
      );
   } /*else {
        return (
            <React.Fragment>
                <svg
                    className='bd-placeholder-img card-img-top'
                    width='100%'
                    height='225'
                    aria-label='Under construction'
                    preserveAspectRatio='xMidYMid slice'
                    focusable='false'
                >
                    <title>Placeholder</title>
                    <rect
                        width='100%'
                        height='100%'
                        fill='#55595c'
                    ></rect>
                    <text
                        x='50%'
                        y='50%'
                        fill='#eceeef'
                        dy='.3em'
                    >
                        No touchy
                    </text>
                </svg>
                <span
                    className='card-body-uniq appHeader'
                    x='50%'
                    y='50%'
                    fill='#eceeef'
                    dy='.3em'
                >
                    {data.label}
                </span>
                <div className='card-body-uniq'>
                    <p className='card-text'>Comming soon</p>
                </div>
            </React.Fragment>
        );
    }*/
};

export default CardData;
