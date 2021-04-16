import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    socLandingData:{socPageLoader:true},
    
  };

  const socPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.SOC_LANDING_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.SOC_LANDING_DATA_SUCCEEDED:
        return {
          ...state,
          socLandingData: {...action.payload,socPageLoader:false},
          error: false,
        };

      case UserActionTypes.SOC_LANDING_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

     
      default:
        return state;
    }

  };

  export default socPageReducer;