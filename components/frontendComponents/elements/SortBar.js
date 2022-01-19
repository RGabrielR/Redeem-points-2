import React, { useState } from "react";
import Select from "react-select";
import sortBarStyles from "./sortBarStyles";
import options from "./options";

const SortBar = ({
  sortingPredefined, 
  sortingHighest, 
  sortCanAfford, 
  sortingLowest,
  sortCannotAfford, 
  products, 
  points}) => {
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
        <div className="w-72  mt-6 ml-6 md:m-12 md:w-96">
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