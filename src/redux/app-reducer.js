import {getUserAuthData} from './auth-reducer'

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'

const initialState = {
    initialized: false
  };
  
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INITIALIZED_SUCCES":
        return {
          ...state,
          initialized: true
        };
      default:
        return state;
    }
  };
  
  export const initializedSucces = () => {
    return {
      type: INITIALIZED_SUCCES
    };
  };
  
  export const initializedApp = () => {
    return (dispatch) => {
        let promise = dispatch(getUserAuthData())
        Promise.all([promise]).then(()=>dispatch(initializedSucces()))
    };
  };

  export default appReducer;
  
  