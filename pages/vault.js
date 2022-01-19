import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../components/redux/actions/userActions";
import VaultHeader from '../components/frontendComponents/elements/VaultHeader';
import VaultTable from "../components/frontendComponents/elements/VaultTable";
import Footer from '../components/frontendComponents/elements/Footer';

const vault = (props) => {
    const {redeemHistory} = props.user.user;
    const {fetchUser} = props;

    useEffect(() => {
       if(!redeemHistory) return(fetchUser())
      }, []);

      if(!redeemHistory) return "loading...";

    return ( 
        <>
       <div className="linear-gradient-font">
        <VaultHeader/>
        <VaultTable redeemHistory={redeemHistory} />
        <Footer/>
       </div>
        </>
     );
}

const mapStateToProps = (state) => ({
    user: state.user,
  });

   const mapDispatchToProps = (dispatch) => {
    return {
      fetchUser: () => {
        dispatch(fetchUser());
      }
    }
   };

export default connect(mapStateToProps,mapDispatchToProps)(vault);
 