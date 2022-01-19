import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUser,
  buy1000,
  buy5000,
  buy7500,
} from "../components/redux/actions/userActions";
import {
  fetchProducts,
  sortingHighest,
  sortingLowest,
  sortingPredefined,
  sortCannotAfford,
  sortCanAfford,
} from "../components/redux/actions/productActions";
import Header from '../components/frontendComponents/elements/Header';
import NavBar from '../components/frontendComponents/elements/NavBar';
import SortBar from '../components/frontendComponents/elements/SortBar';
import ProductsDisplay from "../components/frontendComponents/elements/ProductsDisplay";
import Footer from '../components/frontendComponents/elements/Footer';

const MainPage = (props) => {
  console.log(props);
  const {fetchUser, fetch_products, buy1000, buy5000, buy7500, sortingLowest, sortingHighest, sortingPredefined, sortCannotAfford, sortCanAfford} = props;
  const {name, points} = props.user.user;
  const {products} = props.products;

  useEffect(() => {
    fetchUser();
    fetch_products();
  }, []);
  
  // if (!user || !product) return <div className="lds-circle"> </div>;

  return (
    <>
   
    <Header 
    name={name} 
    points={points} />
    
    <NavBar 
    title="Redeem Points" 
    buy1000={buy1000} 
    buy5000={buy5000} 
    buy7500={buy7500} />
    
    <SortBar 
    sortingPredefined={sortingPredefined} 
    sortingHighest={sortingHighest} 
    sortCanAfford={sortCanAfford} 
    sortingLowest={sortingLowest} 
    sortCannotAfford={sortCannotAfford} 
    products={products}/>

    <ProductsDisplay 
    products={products}
    points={points} />

    <Footer/>
    </>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  products: state.products
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(fetchUser());
    },
    buy1000: () => {
      dispatch(buy1000());
    },
    buy5000: () => {
      dispatch(buy5000());
    },
    buy7500: () => {
      dispatch(buy7500());
    },
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
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

