import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
  };

  const landingPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.LANDING_PAGE_DATA_START:
        return {
          url: '',
          loading: true,
          error: false,
        };
      case UserActionTypes.LANDING_PAGE_DATA_SUCCEEDED:
        return {
          landingData: action.payload,
          loading: false,
          error: false,
        };
      case UserActionTypes.LANDING_PAGE_DATA_FAILED:
        return {
          url: '',
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };

  export default landingPageReducer;