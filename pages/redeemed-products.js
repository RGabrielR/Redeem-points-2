import Head from 'next/head'
import RedeemedVault from '../components/frontendComponents/RedeemedVault';
import BackgroundRH from '../components/frontendComponents/BackgroundRH';

const redeemedProducts = () => {
    return (
            <>
            <Head>
                  <title>Redeemed Products</title>
            </Head>
            <BackgroundRH/>
            <RedeemedVault/>
            </>

      );
}
 
export default redeemedProducts;