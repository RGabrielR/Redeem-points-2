import * as t from '../types';
import {fetchUser} from './userActions';

export const redeemProduct = id => {
return async (dispatch) => {
    await fetch('https://coding-challenge-api.aerolab.co/redeem',
          {
            method: 'POST',
           headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY,
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
           body: JSON.stringify({"productId": id})
          }
          );
           console.log(id);
           dispatch(fetchUser());
  }
 
}
