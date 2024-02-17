import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange, nextPage, prevPage }) => {
   const pagesCount = Math.ceil(itemsCount / pageSize);
   if (pagesCount === 1) return null; //if only one page, dont show pagination
   const pages = _.range(1, pagesCount + 1); //using lodash to create array

   return (
      <React.Fragment>
         <nav aria-label="Pagination">
            <ul className="pagination">
               <li className="page-item">
                  <i
                     className="page-link"
                     onClick={() => prevPage()}
                     aria-label="Previous"
                  >
                     <span aria-hidden="true">&laquo;</span>
                  </i>
               </li>
               {pages.map(page => (
                  <li
                     key={page}
                     className={page === currentPage ? "page-item active" : "page-item"}
                  >
                     <i
                        className="page-link"
                        onClick={() => onPageChange(page)}
                     >
                        {page}
                     </i>
                  </li>
               ))}
               <li className="page-item">
                  <i
                     className="page-link"
                     onClick={() => nextPage()}
                     aria-label="Next"
                  >
                     <span aria-hidden="true">&raquo;</span>
                  </i>
               </li>
            </ul>
         </nav>
      </React.Fragment>
   );
};

Pagination.propTypes = {
   itemsCount: PropTypes.number.isRequired, //must be number and is required
   pageSize: PropTypes.number.isRequired,
   currentPage: PropTypes.number.isRequired,
   onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
