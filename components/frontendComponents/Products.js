import Head from "next/head";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  sortingHighest,
  sortingLowest,
  sortingPredefined,
  sortCannotAfford,
  sortCanAfford,
} from "../redux/actions/productActions";
import { redeemProduct } from "../redux/actions/redeemActions";
import Select from "react-select";
import Swal from "sweetalert2";
import options from "./elements/options";
import sortBarStyles from "./elements/sortBarStyles";


const Products = (props) => {
  
  const {
    products,
    points
  } = props;

  useEffect(() => {
    props.fetch_products();
  }, []);

  if (!products) return <div className="lds-circle"> </div>;

  const sortProducts = (option) => {
    switch (option.value) {
      case "predefined":
        return props.sortingPredefined();
      case "highest":
        return props.sortingHighest(products.products);
      case "lowest":
        return props.sortingLowest(products.products);
      case "canAfford":
        return props.sortCanAfford(points);
      case "cannotAfford":
        return props.sortCannotAfford(points);
    }
  };

  const redeemAlert = id => {
    props.redeemProduct(id);
    Swal.fire(
    'Congratulations!',
    'You redeem a product, enjoy!',
    'success'
    )
  };

  return (
    <div>
      <div className="flex flex-col justify-items-center ">
        <div className="ml-12 ">
          <div className="bg-black text-white w-16 my-2 ml-1">Sort by: </div>
          <Select
            options={options}
            onChange={(e) => sortProducts(e)}
            className="sortBar"
            styles={sortBarStyles}
            placeholder={<div className="text-white font-light">Select </div>}
          />
        </div>
        <div className="text-3xl mb-4 self-center bg-black text-white px-6">
          
          Claim your products:
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 justify-items-center front-of-the-page">
        {products.products.map((product) => {
          const { name, cost, img, _id } = product;
          return (
            <div
              className="p-2 border-2 border-solid border-black card w-10/12"
              key={product.key}
            >
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between">
                <h1 className="self-center pl-6 pr-2 bg-black text-white cursor-default rounded-full w-full text-center">
                  
                  {name}
                </h1>
                <div className="text-2xl w-full  text-right  ">
                  <h5 className="cursor-default sm:ml-10 md:ml-12 lg:ml-14  text-center rounded-full  bg-yellow-300 border-solid border-8  border-yellow-800 hover:bg-yellow-800 hover:border-yellow-300 hover:text-white">
                    {cost}&nbsp;points
                  </h5>
                </div>
              </div>
              <div className="flex flex-col ">
                <img className="w-3/4 self-center rounded-lg" src={img.url} />

                <h5
                  className="mt-2 mb-2 p-2 rounded-lg self-center justify-self-end cursor-pointer text-2xl border-solid border-2 border-black bg-gradient-to-r from-yellow-300 to-yellow-800 hover:text-white  "
                  onClick={() => redeemAlert(_id)}
                >
                  Redeem
                </h5>

                {cost < points ? (
                  <div className="px-4 justify-self-center bg-green-600 text-white  ">
                    *You have enough points to redeem this product
                  </div>
                ) : (
                  <div className="px-4 justify-self-center bg-red-600 text-white ">
                    *You need {cost - points} points to redeem this product
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.products,
  points: state.user.user.points,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetch_products: () => {
      dispatch(fetchProducts());
    },
    sortingHighest: (productsArray) => {
      dispatch(sortingHighest(productsArray));
    },
    sortingLowest: (productsArray) => {
      dispatch(sortingLowest(productsArray));
    },
    sortingPredefined: () => {
      dispatch(sortingPredefined());
    },
    sortCanAfford: (points) => {
      dispatch(sortCanAfford(points));
    },
    sortCannotAfford: (points) => {
      dispatch(sortCannotAfford(points));
    },
    redeemProduct: (id) => {
      dispatch(redeemProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
