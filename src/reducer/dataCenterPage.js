import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    centerLandingData:{dataCenterPageLoader:true},
    centerBenifitsData:{},
    centerDeployData:{},
    centerExplainedData:{},
    centerServicesData:{},
    centerTechnologiesData:{},
    centerChatData:{}
  };

  const dataCenterPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.CENTER_LANDING_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.CENTER_LANDING_DATA_SUCCEEDED:
        return {
          ...state,
          centerLandingData: {...action.payload,dataCenterPageLoader:false},
          error: false,
        };

      case UserActionTypes.CENTER_LANDING_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };
        case UserActionTypes.CENTER_BENIFITS_PAGE_DATA_START :
            return {
              ...state,
              url: '',
              error: false,
            };
        case UserActionTypes.CENTER_BENIFITS_DATA_SUCCEEDED:
            return {
              ...state,
              centerBenifitsData: action.payload,
              error: false,
            };
    
        case UserActionTypes.CENTER_BENIFITS_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };

            case UserActionTypes.CENTER_DEPLOY_PAGE_DATA_START :
            return {
              ...state,
              url: '',
              error: false,
            };
        case UserActionTypes.CENTER_DEPLOY_DATA_SUCCEEDED:
            return {
              ...state,
              centerDeployData: action.payload,
              error: false,
            };
    
        case UserActionTypes.CENTER_DEPLOY_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };
        
            case UserActionTypes.CENTER_EXPLAINED_PAGE_DATA_START :
                return {
                  ...state,
                  url: '',
                  error: false,
                };
            case UserActionTypes.CENTER_EXPLAINED_DATA_SUCCEEDED:
                return {
                  ...state,
                  centerExplainedData: action.payload,
                  error: false,
                };
        
            case UserActionTypes.CENTER_SERVICES_DATA_FAILED:
                return {
                  ...state,
                  url: '',
                  error: true,
                };
            
            case UserActionTypes.CENTER_SERVICES_PAGE_DATA_START :
                  return {
                    ...state,
                    url: '',
                    error: false,
                  };
            case UserActionTypes.CENTER_SERVICES_DATA_SUCCEEDED:
                  return {
                    ...state,
                    centerServicesData: action.payload,
                    error: false,
                  };
          
              case UserActionTypes.CENTER_SERVICES_DATA_FAILED:
                  return {
                    ...state,
                    url: '',
                    error: true,
                  };

            case UserActionTypes.CENTER_TECHNOLOGIES_PAGE_DATA_START :
                  return {
                    ...state,
                    url: '',
                    error: false,
                  };
            case UserActionTypes.CENTER_TECHNOLOGIES_DATA_SUCCEEDED:
                  return {
                    ...state,
                    centerTechnologiesData: action.payload,
                    error: false,
                  };
          
            case UserActionTypes.CENTER_TECHNOLOGIES_DATA_FAILED:
                  return {
                    ...state,
                    url: '',
                    error: true,
                  };
                  case UserActionTypes.CENTER_CHAT_PAGE_DATA_START :
                    return {
                      ...state,
                      url: '',
                      error: false,
                    };
              case UserActionTypes.CENTER_CHAT_DATA_SUCCEEDED:
                    return {
                      ...state,
                      centerChatData: action.payload,
                      error: false,
                    };
            
              case UserActionTypes.CENTER_CHAT_DATA_FAILED:
                    return {
                      ...state,
                      url: '',
                      error: true,
                    };
      default:
        return state;
    }

  };

  export default dataCenterPageReducer;