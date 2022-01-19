import React, { useEffect } from "react";
import Head from 'next/head';
import { connect } from "react-redux";
import {
  fetchUser,
  buy1000,
  buy5000,
  buy7500,
} from "../redux/actions/userActions";

const MainPage = (props) => {

  useEffect(() => {
    props.fetchUser();
  }, []);
  
  if (!user) return <div className="lds-circle"> </div>;
  return (
<div>
    {props.user}
    </div>
  )
}
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
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

