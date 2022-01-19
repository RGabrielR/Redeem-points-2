import App from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../components/redux/store/store";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import "../SCSS/Main.scss";

class myApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Redeem Points</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(myApp);
