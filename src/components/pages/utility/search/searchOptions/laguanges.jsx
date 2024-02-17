import React from "react";

export default function LaguangesList() {
   return (
      <React.Fragment>
         <option
            value=""
            selected="selected"
         >
            Svi
         </option>
         <option value="engleski">Strani</option>
         <option value="domaci">Domaći</option>
      </React.Fragment>
   );
}
