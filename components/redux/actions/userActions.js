import * as t from '../types';
export const fetchUser = () => {
      return  (dispatch) => {
        fetch('https://coding-challenge-api.aerolab.co/user/me',
          { headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY
          }}
          ).then(p => p.json())
          .then(data => {
            const userFetch = data
            
              dispatch(fetchUserSuccess(userFetch))
              })
          .catch(error => 
              dispatch(fetchUserError(error)))
};
}

export const fetchUserSuccess = user => {
  return {
    type: t.FETCH_USER_SUCCESS,
    payload: user
  }
};
export const fetchUserError = error => {
  return {
    type: t.FETCH_USER_ERROR,
    payload: error
  }
};

export const buy1000 =  () => {
  return async (dispatch) => {
    await fetch('https://coding-challenge-api.aerolab.co/user/points',
          {
            method: 'POST',
           headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY,
            "Content-Type": "application/json"
          },
           body: JSON.stringify({"amount": 1000})
          }
          );
           dispatch(fetchUser());
           console.log("llego aca")
  }
};
export const buy5000 =  () => {
  return async (dispatch) => {
    await fetch('https://coding-challenge-api.aerolab.co/user/points',
          {
            method: 'POST',
           headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY,
            "Content-Type": "application/json"
          },
           body: JSON.stringify({"amount": 5000})
          }
          );
           dispatch(fetchUser());
           console.log("llego aca")
  }
};
export const buy7500 =  () => {
  return async (dispatch) => {
    await fetch('https://coding-challenge-api.aerolab.co/user/points',
          {
            method: 'POST',
           headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY,
            "Content-Type": "application/json"
          },
           body: JSON.stringify({"amount": 7500})
          }
          );
           dispatch(fetchUser());
           console.log("llego aca")
  }
}


