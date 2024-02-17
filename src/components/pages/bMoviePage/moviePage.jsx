import React from "react";
import { Link, useParams } from "react-router-dom";
import PlaySVG from "../../../_iconsAndImages/play-icon";

export default function MoviePage({ movies, setCenter }) {
   const { id } = useParams();

   return movies.map(movie => {
      if (id === movie.id) {
         const {
            img,
            label,
            text,
            /*quality,*/
            genre,
            year,
            imdb,
            imdburl,
            metascore,
            metaurl,
            tommato,
            tomattoaudience,
            tomattourl,
            laguange,
            /*trailer,*/
            story,
            director,
            writers,
            actors,
            releaseDate,
            runtime,
            comments,
         } = movie;

         const commentsFetch = () => {
            if (comments) {
               return Object.entries(comments).map(([key, value]) => (
                  <div className="row comment-section">
                     <div className="col">
                        <div className="row user">
                           <div className="col-auto">
                              {" "}
                              <span className="comment-username">{key}</span>
                           </div>
                           <div className="col-auto">
                              {" "}
                              <span className="comment-date">{value[1]}</span>
                           </div>
                        </div>
                        <div className="row user-comment">
                           <span>{value[0]}</span>
                        </div>
                     </div>
                  </div>
               ));
            } else {
               return <p className="load no-comments">Nema komentara.</p>;
            }
         };

         const commentButton = e => {
            e.preventDefault();
            setCenter("center");
         };

         return (
            <div className="container movie-page">
               <div className="row">
                  {" "}
                  <h1>{label}</h1>
                  <div className="col left-container"></div>
               </div>

               <div className="row movie-info">
                  <div class="col-auto">
                     <div className="col year-genre">
                        <div className="col year">
                           {" "}
                           <p>{runtime}</p>
                        </div>
                        <div className="col genre">
                           {genre.map((gen, index) => {
                              //{ index < genre.length - 1 ? gen + "" + "/" : gen}
                              const genLink = gen.toLowerCase();
                              if (index < genre.length - 1) {
                                 return (
                                    <p>
                                       <Link to={`/zanrovi#${genLink.replace(/č/g, "c")}`}>{gen}</Link>
                                       <span>/</span>
                                    </p>
                                 );
                              } else {
                                 return (
                                    <p>
                                       {" "}
                                       <Link to={`/zanrovi#${genLink.replace(/č/g, "c")}`}>{gen} </Link>
                                    </p>
                                 );
                              }
                           })}
                        </div>
                     </div>{" "}
                     <img
                        className="movie-page-img"
                        src={img}
                     />
                     <div className="col year-genre">
                        <div className="col time">
                           {" "}
                           <p>{releaseDate}</p>
                        </div>
                        <div className="col genre"> {<p>{laguange}</p>}</div>
                     </div>{" "}
                  </div>

                  <div className="col right-container">
                     <div className="all-ratings">
                        <div className="row">
                           <a
                              href={imdburl}
                              target="_blank"
                              className="col"
                           >
                              <div className="col ratings">
                                 {" "}
                                 <div className="imgWidth">
                                    <img src="/imdb.png" />
                                 </div>
                                 <span>{imdb != 0 ? (imdb % 1 === 0 ? `${imdb}.0` : imdb) : "?"}</span>
                              </div>
                           </a>
                           <a
                              href={tomattourl}
                              target="_blank"
                              className="col"
                           >
                              <div className="col ratings">
                                 {" "}
                                 <div className="imgWidth">
                                    <img src="/rotten.png" />
                                 </div>
                                 <span>{tommato === 0 ? "?" : `${tommato}%`}</span>
                              </div>
                           </a>
                        </div>

                        <div className="row">
                           <a
                              href={metaurl}
                              target="_blank"
                              className="col"
                           >
                              <div className="col ratings">
                                 {" "}
                                 <div className="imgWidth">
                                    <img src="/meta.png" />
                                 </div>
                                 <span>{metascore === 0 ? "?" : metascore}</span>
                              </div>
                           </a>
                           <a
                              href={tomattourl}
                              target="_blank"
                              className="col"
                           >
                              <div className="col ratings ">
                                 {" "}
                                 <div className="imgWidth">
                                    <img src="/rotten-audi.png" />
                                 </div>
                                 <span>{tomattoaudience === 0 ? "?" : `${tommato}%`}</span>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="roles-bg">
                        <div className="row text role">
                           <span>Director:</span>
                           {director.map((direct, index) => {
                              return index < director.length - 1 ? `${direct}, ` : `${direct}`;
                           })}
                        </div>
                     </div>
                     <div className="roles-bg">
                        <div className="row text role">
                           <span>Writers: </span>
                           {writers.map((writer, index) => {
                              return index < writers.length - 1 ? `${writer}, ` : `${writer}`;
                           })}
                        </div>
                     </div>
                     <div className="roles-bg">
                        <div className="row text role">
                           <span className="actors">Actors: </span>
                           {actors.map((actor, index) => {
                              return index < actors.length - 1 ? `${actor}, ` : `${actor}`;
                           })}
                        </div>
                     </div>
                     <div className="text-bg scroll">
                        <div className="row text">{text}</div>
                        <div className="row text">{story}</div>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="movie-frame">
                     {" "}
                     <p className="player-label">
                        {label} ({year})
                     </p>
                     <div className="col watch-movie">
                        <div
                           className="play"
                           onClick={() => setCenter("center")}
                           type="button"
                           data-bs-toggle="modal"
                           data-bs-target="#staticBackdrop"
                        >
                           <PlaySVG />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row comments">
                  <div className="col">
                     <h4>Komentari:</h4>
                  </div>
                  {commentsFetch()}
                  <div className="row comment-form">
                     <div className="col left-empty"></div>
                     <div className="col">
                        <form action="">
                           <div className="row">
                              <div className="col comment-info">
                                 {" "}
                                 <span>Ime</span>
                                 <input type="text" />
                              </div>
                              <div className="col comment-info">
                                 {" "}
                                 <span>Email</span>
                                 <input type="email" />
                              </div>
                           </div>
                           <div className="row">
                              {" "}
                              <div className="col comment-info comment-input">
                                 <span>Komentar:</span>
                                 <textarea type="text" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col"></div>
                              <div className="col comment-button">
                                 <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    onClick={e => commentButton(e)}
                                 >
                                    Objavi komentar
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         );
      }
   });
}
