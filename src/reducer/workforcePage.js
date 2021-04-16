import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    workforceLandingData:{workforceLandingLoader:true},
    workforceApproachData:{},
    workforceReachOutData:{},
    workforceDrivesData:{},
    workforceSourcingData:{},
    workforceChatData:{},
    CyberSecurityLandingData:{cyberSecurityPageLoader:true},
    CyberSecurityChatData:{}
    
  };

  const workforcePageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.WORKFORCE_LANDING_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.WORKFORCE_LANDING_DATA_SUCCEEDED:
        return {
          ...state,
          workforceLandingData: {...action.payload,workforceLandingLoader:false},
          error: false,
        };

      case UserActionTypes.WORKFORCE_LANDING_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        case UserActionTypes.WORKFORCE_APPROACH_PAGE_DATA_START :
            return {
              ...state,
              url: '',
              error: false,
            };
        case UserActionTypes.WORKFORCE_APPROACH_DATA_SUCCEEDED:
            return {
              ...state,
              workforceApproachData: action.payload,
              error: false,
            };
    
        case UserActionTypes.WORKFORCE_APPROACH_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };

            case UserActionTypes.WORKFORCE_REACHOUT_PAGE_DATA_START :
                return {
                  ...state,
                  url: '',
                  error: false,
                };
            case UserActionTypes.WORKFORCE_REACHOUT_DATA_SUCCEEDED:
                return {
                  ...state,
                  workforceReachOutData: action.payload,
                  error: false,
                };
        
            case UserActionTypes.WORKFORCE_REACHOUT_DATA_FAILED:
                return {
                  ...state,
                  url: '',
                  error: true,
                };

            case UserActionTypes.WORKFORCE_DRIVES_PAGE_DATA_START :
                    return {
                      ...state,
                      url: '',
                      error: false,
                    };
            case UserActionTypes.WORKFORCE_DRIVES_DATA_SUCCEEDED:
                    return {
                      ...state,
                      workforceDrivesData: action.payload,
                      error: false,
                    };
            
            case UserActionTypes.WORKFORCE_DRIVES_DATA_FAILED:
                    return {
                      ...state,
                      url: '',
                      error: true,
                    };
             
            case UserActionTypes.WORKFORCE_SOURCING_PAGE_DATA_START :
                      return {
                        ...state,
                        url: '',
                        error: false,
                      };
            case UserActionTypes.WORKFORCE_SOURCING_DATA_SUCCEEDED:
                      return {
                        ...state,
                        workforceSourcingData: action.payload,
                        error: false,
                      };
              
            case UserActionTypes.WORKFORCE_SOURCING_DATA_FAILED:
                      return {
                        ...state,
                        url: '',
                        error: true,
                      };
            case UserActionTypes.WORKFORCE_CHAT_PAGE_DATA_START :
                        return {
                          ...state,
                          url: '',
                          error: false,
                        };
            case UserActionTypes.WORKFORCE_CHAT_DATA_SUCCEEDED:
                        return {
                          ...state,
                          workforceChatData: action.payload,
                          error: false,
                        };
                
            case UserActionTypes.WORKFORCE_CHAT_DATA_FAILED:
                        return {
                          ...state,
                          url: '',
                          error: true,
                        };

            case UserActionTypes.CYBERSECURITY_LANDING_PAGE_DATA_START :
                          return {
                            ...state,
                            url: '',
                            error: false,
                          };
            case UserActionTypes.CYBERSECURITY_LANDING_DATA_SUCCEEDED:
                          return {
                            ...state,
                            CyberSecurityLandingData: {...action.payload,cyberSecurityPageLoader:false},
                            error: false,
                          };
                  
            case UserActionTypes.CYBERSECURITY_LANDING_DATA_FAILED:
                          return {
                            ...state,
                            url: '',
                            error: true,
                          };
                  
            case UserActionTypes.CYBERSECURITY_CHAT_PAGE_DATA_START :
                            return {
                              ...state,
                              url: '',
                              error: false,
                            };
            case UserActionTypes.CYBERSECURITY_CHAT_DATA_SUCCEEDED:
                            return {
                              ...state,
                              CyberSecurityChatData: action.payload,
                              error: false,
                            };
                    
            case UserActionTypes.CYBERSECURITY_CHAT_DATA_FAILED:
                            return {
                              ...state,
                              url: '',
                              error: true,
                            };
      default:
        return state;
    }

  };

  export default workforcePageReducer;