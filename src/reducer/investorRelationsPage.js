import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    investorInformationData:{investorRelationsPageLoader:true},
    investorNewsData:{},
    investorUvationData:{},
    investorWantData:{},
    investorHeadingData:{investorSlaPageLoader:true}
  };

  const InvestorRelationPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.INVESTOR_INFORMATION_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.INVESTOR_INFORMATION_DATA_SUCCEEDED:
        return {
          ...state,
          investorInformationData: {...action.payload,investorRelationsPageLoader:false},
          error: false,
        };

      case UserActionTypes.INVESTOR_INFORMATION_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        case UserActionTypes.INVESTOR_NEWS_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.INVESTOR_NEWS_DATA_SUCCEEDED:
        return {
          ...state,
          investorNewsData:action.payload,
          error: false,
        };
      case UserActionTypes.INVESTOR_NEWS_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        case UserActionTypes.INVESTOR_UVATION_PAGE_DATA_START :
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.INVESTOR_UVATION_DATA_SUCCEEDED:
          return {
            ...state,
            investorUvationData:action.payload,
            error: false,
          };
        case UserActionTypes.INVESTOR_UVATION_DATA_FAILED:
          return {
            ...state,
            url: '',
            error: true,
          };


        case UserActionTypes.INVESTOR_WANT_PAGE_DATA_START :
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.INVESTOR_WANT_DATA_SUCCEEDED:
          return {
            ...state,
            investorWantData:action.payload,
            error: false,
          };
        case UserActionTypes.INVESTOR_WANT_DATA_FAILED:
          return {
            ...state,
            url: '',
            error: true,
          };


          case UserActionTypes.INVESTOR_HEADING_PAGE_DATA_START :
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.INVESTOR_HEADING_DATA_SUCCEEDED:
          return {
            ...state,
            investorHeadingData:{...action.payload,investorSlaPageLoader:false},
            error: false,
          };
        case UserActionTypes.INVESTOR_HEADING_DATA_FAILED:
          return {
            ...state,
            url: '',
            error: true,
          };
        
        
      default:
        return state;
    }

  };

  export default InvestorRelationPageReducer;