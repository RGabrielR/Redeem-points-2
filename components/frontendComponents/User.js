import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUser,
  buy1000,
  buy5000,
  buy7500,
} from "../redux/actions/userActions";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";

const User = (props) => {
  const { 
  user
   } = props.user;

  useEffect(() => {
    props.fetchUser();
  }, []);

if (!user) return <div className="lds-circle"> </div>;
  const buythousandpoints = () => {
    props.buy1000();
    Swal.fire("Perfect!", "You gain 1000 points!", "success");
  };
  const buyfivehundredpoints = () => {
    props.buy5000();
    Swal.fire("Perfect!", "You gain 5000 points!", "success");
  };
  const buyseventhousandfivehundredpoints = () => {
    props.buy7500();
    Swal.fire("Perfect!", "You gain 7500 points!", "success");
  };

 
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500  text-white navbar">
      <section className="flex flex-col items-center">
        <div className=" flex flex-row">
          <h1 className="text-5xl pl-4 cursor-default self-center pb-4 mr-10">
            {user.name}
          </h1>
          <div className="tooltip mt-2">
            <Link href="/redeemed-products">
              <Image
                className="cursor-pointer"
                width="100"
                height="90"
                src="/tesoro.png"
              />
            </Link>
            <h5 className="pl-2 cursor-default">Reddemed products!</h5>
          </div>
        </div>
        <div className="ml-2 mt-4 bg-gradient-to-r from-gray-400 to-blue-300  hover:from-blue-300 hover:to-gray-400 rounded-lg cursor-default">
          <h3 className="m-1 px-4 py-1 border-4 rounded-lg text-black bg-white bg-opacity-80 text-2xl">
            {user.points + " "}
            points
          </h3>
        </div>
      </section>
      <div className="flex flex-col md:flex-row lg:flex-row md:flex-row xl:flex-row 2xl:flex-row justify-evenly items-center w-full items-start  2xl:-mt-6 lg:-mt-6 xl:-mt-6 ">
        <div
          onClick={() => buythousandpoints()}
          className=" bg-gradient-to-r from-gray-400 to-blue-300  hover:from-blue-300 hover:to-gray-400 m-1 px-4 py-1 border-4 rounded-lg text-black border-gray-600 cursor-pointer"
        >
          buy 1000 points
        </div>
        <div
          onClick={() => buyseventhousandfivehundredpoints()}
          className="middle-button bg-gradient-to-r from-gray-400 to-blue-300  hover:from-blue-300 hover:to-gray-400 m-1 px-4 py-1 border-4 rounded-lg text-black border-gray-600 cursor-pointer lg:ml-3 xl:ml-3 2xl:ml-3 order-last md:order-none lg:order-none xl:order-none 2xl:order-none"
        >
          buy 7500 points
        </div>
        <div
          onClick={() => buyfivehundredpoints()}
          className="bg-gradient-to-r from-gray-400 to-blue-300  hover:from-blue-300 hover:to-gray-400 m-1 px-4 py-1 border-4 rounded-lg text-black border-gray-600 cursor-pointer  "
        >
          buy 5000 points
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
