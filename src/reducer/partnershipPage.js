import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    partnershipData:{partnershipPageLoader:true},
    discoverData:{},
    channelData:{}
  };

  const partnershipPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.PARTNERSHIP_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.PARTNERSHIP_DATA_SUCCEEDED:
        return {
          ...state,
          partnershipData: {...action.payload,partnershipPageLoader:false},
          error: false,
        };
      case UserActionTypes.PARTNERSHIP_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };
        
        case UserActionTypes.DISCOVER_PAGE_DATA_START :
            return {
              ...state,
              url: '',
              error: false,
            };
          case UserActionTypes.DISCOVER_DATA_SUCCEEDED:
            return {
              ...state,
              discoverData: action.payload,
              error: false,
            };
          case UserActionTypes.DISCOVER_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };

           case UserActionTypes.CHANNEL_PAGE_DATA_START :
                return {
                  ...state,
                  url: '',
                  error: false,
                };
              case UserActionTypes.CHANNEL_DATA_SUCCEEDED:
                return {
                  ...state,
                  channelData: action.payload,
                  error: false,
                };
              case UserActionTypes.CHANNEL_DATA_FAILED:
                return {
                  ...state,
                  url: '',
                  error: true,
                };

      default:
        return state;
    }

  };

  export default partnershipPageReducer;