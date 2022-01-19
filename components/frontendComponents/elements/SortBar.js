import React, { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import sortBarStyles from "./sortBarStyles";
import options from "./options";

const SortBar = ({sortingPredefined, sortingHighest, sortCanAfford, sortingLowest,sortCannotAfford, products}) => {
    const sortProducts = (option) => {
        switch (option.value) {
          case "predefined":
            return sortingPredefined();
          case "highest":
            return sortingHighest(products.products);
          case "lowest":
            return sortingLowest(products.products);
          case "canAfford":
            return sortCanAfford(points);
          case "cannotAfford":
            return sortCannotAfford(points);
        }
      };
    
    return ( 
        <>
        <div className="m-12 w-96">
         <Select
            options={options}
            onChange={(e) => sortProducts(e)}
            className="sortBar"
            styles={sortBarStyles}
            placeholder={<div className="text-white font-light">Select </div>}
          />
          </div>
        </>
     );
}
 
export default SortBar;