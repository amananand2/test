import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    technologyHeadingData:{technologyPageLoader:true},
    
  };

  const technologyPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.TECHNOLOGY_HEADING_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.TECHNOLOGY_HEADING_DATA_SUCCEEDED:
        return {
          ...state,
          technologyHeadingData: {...action.payload,technologyPageLoader:false},
          error: false,
        };

      case UserActionTypes.TECHNOLOGY_HEADING_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

     
      default:
        return state;
    }

  };

  export default technologyPageReducer;