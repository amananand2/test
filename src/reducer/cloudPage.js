import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    cloudLandingData:{cloudPageLoader:true},
    cloudBenifitsData:{},
    cloudGetData:{},
    cloudComputingData:{},
    cloudUniqueData:{},
    cloudDifferentData:{},
    cloudChatData:{}
  };

  const cloudPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.CLOUD_LANDING_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.CLOUD_LANDING_DATA_SUCCEEDED:
        return {
          ...state,
          cloudLandingData: {...action.payload,cloudPageLoader:false},
          error: false,
        };

      case UserActionTypes.CLOUD_LANDING_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };
      
        case UserActionTypes.CLOUD_BENIFITS_PAGE_DATA_START :
            return {
              ...state,
              url: '',
              error: false,
            };
          case UserActionTypes.CLOUD_BENIFITS_DATA_SUCCEEDED:
            return {
              ...state,
              cloudBenifitsData: action.payload,
              error: false,
            };
    
          case UserActionTypes.CLOUD_BENIFITS_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };
            case UserActionTypes.CLOUD_GET_PAGE_DATA_START :
                return {
                  ...state,
                  url: '',
                  error: false,
                };
              case UserActionTypes.CLOUD_GET_DATA_SUCCEEDED:
                return {
                  ...state,
                  cloudGetData: action.payload,
                  error: false,
                };
        
              case UserActionTypes.CLOUD_GET_DATA_FAILED:
                return {
                  ...state,
                  url: '',
                  error: true,
                };
                case UserActionTypes.CLOUD_COMPUTING_PAGE_DATA_START :
                    return {
                      ...state,
                      url: '',
                      error: false,
                    };
                case UserActionTypes.CLOUD_COMPUTING_DATA_SUCCEEDED:
                    return {
                      ...state,
                      cloudComputingData: action.payload,
                      error: false,
                    };
            
                case UserActionTypes.CLOUD_COMPUTING_DATA_FAILED:
                    return {
                      ...state,
                      url: '',
                      error: true,
                    };
                
                    case UserActionTypes.CLOUD_UNIQUE_PAGE_DATA_START :
                    return {
                      ...state,
                      url: '',
                      error: false,
                    };
                case UserActionTypes.CLOUD_UNIQUE_DATA_SUCCEEDED:
                    return {
                      ...state,
                      cloudUniqueData: action.payload,
                      error: false,
                    };
            
                case UserActionTypes.CLOUD_UNIQUE_DATA_FAILED:
                    return {
                      ...state,
                      url: '',
                      error: true,
                    };

                    case UserActionTypes.CLOUD_UNIQUE_DATA_FAILED:
                        return {
                          ...state,
                          url: '',
                          error: true,
                        };
                    
                    case UserActionTypes.CLOUD_DIFFERENT_PAGE_DATA_START :
                        return {
                          ...state,
                          url: '',
                          error: false,
                        };
                    case UserActionTypes.CLOUD_DIFFERENT_DATA_SUCCEEDED:
                        return {
                          ...state,
                          cloudDifferentData: action.payload,
                          error: false,
                        };
                
                    case UserActionTypes.CLOUD_DIFFERENT_DATA_FAILED:
                        return {
                          ...state,
                          url: '',
                          error: true,
                        };
                    case UserActionTypes.CLOUD_CHAT_PAGE_DATA_START :
                            return {
                              ...state,
                              url: '',
                              error: false,
                            };
                    case UserActionTypes.CLOUD_CHAT_DATA_SUCCEEDED:
                            return {
                              ...state,
                              cloudChatData: action.payload,
                              error: false,
                            };
                    
                    case UserActionTypes.CLOUD_CHAT_DATA_FAILED:
                            return {
                              ...state,
                              url: '',
                              error: true,
                            };
      default:
        return state;
    }

  };

  export default cloudPageReducer;