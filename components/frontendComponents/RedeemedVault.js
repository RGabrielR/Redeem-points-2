import React, { useEffect } from "react";
import { connect } from "react-redux";
import Image from 'next/image';
import Link from 'next/link';
import { fetchUser } from "../redux/actions/userActions";

const RedeemedVault = (props) => {
    
    const {redeemHistory} = props.user.user;
    const {fetchUser} = props;
    
    useEffect(() => {
      props.fetchUser();
    }, []);
  
    if(!redeemHistory) return <div className="lds-circle"> </div>;
    
    return ( 
        <>
        <div >
        <div className="back-arrow m-6  cursor-pointer">
        <Link href="/"> 
        <Image  src="/go-back-arrow.png" width="60" height="60"/>
         </Link>
         </div>
         <div className="flex flex-col md:flex-row lg:flex-row md:flex-row xl:flex-row 2xl:flex-row  justify-center text-5xl cursor-default bg-gradient-to-r from-yellow-300  to-yellow-600 mb-6">
         <h1 className="self-center">Redeemed</h1> 
        <Image className="vault" width="150" height="120" src="/treasure.svg"/>
        <h1 className="self-center mb-2">products</h1>
        </div>
       <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6  justify-items-center front-of-the-page"> 
        {redeemHistory.map((products) => {
        const {name, cost, img, _id} = products;
        return (
        <div className="p-2 border-2 border-solid border-black card w-10/12" key={products.key}>
        <div className="flex flex-col justify-between">
        <h1 className="self-center pl-6 pr-2 bg-black text-white cursor-default rounded-full "> {name} </h1>
       <div className="text-2xl w-full  text-center  "> 
       <h5 className="cursor-default  rounded-full  bg-yellow-300 border-solid border-8 border-yellow-800 hover:bg-yellow-800 hover:border-yellow-300 hover:text-white">{cost} points </h5>
        </div>
        </div>
        <div className="flex flex-col "> 
         <img className="w-3/4 self-center rounded-lg" src={img.url} />
        </div>
        </div>
        )})}
        </div>
        </div>
        </>
     );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
 const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(fetchUser());
    }
  }
 }
export default connect(mapStateToProps,mapDispatchToProps)(RedeemedVault);