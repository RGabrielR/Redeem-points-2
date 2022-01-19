import * as t from '../types';


export const fetchProducts = () => {
      return  (dispatch) => {
        fetch('https://coding-challenge-api.aerolab.co/products',
          { headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY
          }}
          ).then(p => p.json())
          .then(data => {
            const productsFetch = data
            
              dispatch(fetchProductsSuccess(productsFetch))
              })
          .catch(error => 
              dispatch(fetchProductsError(error)))
};
}
export const fetchProductsRequest = () => {
  return {
    type: t.FETCH_PRODUCTS_REQUEST
  }
};
export const fetchProductsSuccess = products => {
  return {
    type: t.FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
};
export const fetchProductsError = error => {
  return {
    type: t.FETCH_PRODUCTS_ERROR,
    payload: error
  }
};

export const sortingHighest= products => {
  return (dispatch) => {
 fetch('https://coding-challenge-api.aerolab.co/products',
          { headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY
          }}
          ).then(p => p.json())
          .then(data => {
            const productsSorted = data.sort((a, b) => (b.cost - a.cost))
              dispatch(productsSortedHighest(productsSorted))
              })

}
}

export const productsSortedHighest = products => {
  return {
    type: t.PRODUCTS_SORTED_HIGHEST,
    payload: products
  }
}
export const sortingLowest= products => {
  return (dispatch) => {
   fetch('https://coding-challenge-api.aerolab.co/products',
          { headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY
          }}
          ).then(p => p.json())
          .then(data => {
            const productsSorted = data.sort((a, b) => (a.cost - b.cost))
              dispatch(productsSortedLowest(productsSorted))
              })

}
}

export const productsSortedLowest = products => {
  return {
    type: t.PRODUCTS_SORTED_LOWEST,
    payload: products
  }
}
export const sortingPredefined= () => {
      return  (dispatch) => {
        fetch('https://coding-challenge-api.aerolab.co/products',
          { headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY
          }}
          ).then(p => p.json())
          .then(data => {
            const productsFetch = data
            
              dispatch(fetchProductsSuccess(productsFetch))
              })
          .catch(error => 
              dispatch(fetchProductsError(error)))
};
}
export const productsSortedPredefined = products => {
  return {
    type: t.PRODUCTS_SORTED_PREDEFINED,
    payload: products
  }
}
export const sortCanAfford = (points) => {
  return (dispatch) => {
    fetch('https://coding-challenge-api.aerolab.co/products',
          { headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY
          }}
          ).then(p => p.json())
          .then(data => {
            const affordableProducts  = data.filter(prod => prod.cost < points);
            dispatch(affordableArray(affordableProducts));
            })
    
  }
}



export const affordableArray = products => {
  return {
    type: t.AFFORDABLE_ARRAY,
    payload: products
  }
}

export const sortCannotAfford =  points => {
  return (dispatch) => {
    fetch('https://coding-challenge-api.aerolab.co/products',
          { headers: {
            'Authorization': process.env.NEXT_PUBLIC_AUTHKEY
          }}
          ).then(p => p.json())
          .then(data => {
            const unaffordableProducts  = data.filter(prod => prod.cost > points);
            dispatch(unaffordableArray(unaffordableProducts));})
    
  }
}

export const unaffordableArray = products => {
  return {
    type: t.AFFORDABLE_ARRAY,
    payload: products
  }
}