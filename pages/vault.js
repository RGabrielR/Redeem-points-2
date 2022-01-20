import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchUser } from "../components/redux/actions/userActions";
import VaultHeader from '../components/frontendComponents/elements/VaultHeader';
import VaultTable from "../components/frontendComponents/elements/VaultTable";
import Footer from '../components/frontendComponents/elements/Footer';

const Vault = (props) => {
    const {redeemHistory} = props.user.user;
    const {fetchUser} = props;

    useEffect(() => {
      fetchUser()
      }, []);
      if(!redeemHistory) return "loading..."
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

export default connect(mapStateToProps,mapDispatchToProps)(Vault);
 