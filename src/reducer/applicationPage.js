import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    applicationData:{applicationPageLoader:true},
    benefitsData:{},
    developData:{},
    businessData:{},
    applicationTabsData:{},
    applicationChatData:{},
    businessLandData:{businessPageLoader:true},
    resiliencyData:{},
    improveData:{},
    businessChatData:{}
  };

  const applicationPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.APPLICATION_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.APPLICATION_DATA_SUCCEEDED:
        return {
          ...state,
          applicationData: {...action.payload,applicationPageLoader:false},
          error: false,
        };

      case UserActionTypes.APPLICATION_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };
        case UserActionTypes.BENEFITS_PAGE_DATA_START :
            return {
              ...state,
              url: '',
              error: false,
            };
          case UserActionTypes.BENEFITS_DATA_SUCCEEDED:
            return {
              ...state,
              benefitsData: action.payload,
              error: false,
            };
          case UserActionTypes.BENEFITS_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };
            case UserActionTypes.DEVELOP_PAGE_DATA_START :
                return {
                  ...state,
                  url: '',
                  error: false,
                };
              case UserActionTypes.DEVELOP_DATA_SUCCEEDED:
                return {
                  ...state,
                  developData: action.payload,
                  error: false,
                };
              case UserActionTypes.DEVELOP_DATA_FAILED:
                return {
                  ...state,
                  url: '',
                  error: true,
                };
            
                case UserActionTypes.BUSINESS_PAGE_DATA_START :
                    return {
                      ...state,
                      url: '',
                      error: false,
                    };
                  case UserActionTypes.BUSINESS_DATA_SUCCEEDED:
                    return {
                      ...state,
                      businessData: action.payload,
                      error: false,
                    };
                  case UserActionTypes.BUSINESS_DATA_FAILED:
                    return {
                      ...state,
                      url: '',
                      error: true,
                    };

       
                case UserActionTypes.APPLICATION_TABS_PAGE_DATA_START :
                    return {
                      ...state,
                      url: '',
                      error: false,
                    };
                  case UserActionTypes.APPLICATION_TABS_DATA_SUCCEEDED:
                    return {
                      ...state,
                      applicationTabsData: action.payload,
                      error: false,
                    };
                  case UserActionTypes.APPLICATION_TABS_DATA_FAILED:
                    return {
                      ...state,
                      url: '',
                      error: true,
                    };

                    case UserActionTypes.APPLICATION_CHAT_PAGE_DATA_START :
                      return {
                        ...state,
                        url: '',
                        error: false,
                      };
                    case UserActionTypes.APPLICATION_CHAT_DATA_SUCCEEDED:
                      return {
                        ...state,
                        applicationChatData: action.payload,
                        error: false,
                      };
                    case UserActionTypes.APPLICATION_CHAT_DATA_FAILED:
                      return {
                        ...state,
                        url: '',
                        error: true,
                      };

                
                      case UserActionTypes.BUSINESS_LANDING_PAGE_DATA_START :
                        return {
                          ...state,
                          url: '',
                          error: false,
                        };
                      case UserActionTypes.BUSINESS_LANDING_DATA_SUCCEEDED:
                        return {
                          ...state,
                          businessLandData: {...action.payload,businessPageLoader:false},
                          error: false,
                        };
                      case UserActionTypes.BUSINESS_LANDING_DATA_FAILED:
                        return {
                          ...state,
                          url: '',
                          error: true,
                        };
                        case UserActionTypes.RESILIENCY_PAGE_DATA_START :
                          return {
                            ...state,
                            url: '',
                            error: false,
                          };
                        case UserActionTypes.RESILIENCY_DATA_SUCCEEDED:
                          return {
                            ...state,
                            resiliencyData: action.payload,
                            error: false,
                          };
                        case UserActionTypes.RESILIENCY_DATA_FAILED:
                          return {
                            ...state,
                            url: '',
                            error: true,
                          };
                       
                          case UserActionTypes.IMPROVE_PAGE_DATA_START :
                            return {
                              ...state,
                              url: '',
                              error: false,
                            };
                          case UserActionTypes.IMPROVE_DATA_SUCCEEDED:
                            return {
                              ...state,
                              improveData: action.payload,
                              error: false,
                            };
                          case UserActionTypes.IMPROVE_DATA_FAILED:
                            return {
                              ...state,
                              url: '',
                              error: true,
                            };
                            case UserActionTypes.BUSINESS_CHAT_PAGE_DATA_START :
                              return {
                                ...state,
                                url: '',
                                error: false,
                              };
                            case UserActionTypes.BUSINESS_CHAT_DATA_SUCCEEDED:
                              return {
                                ...state,
                                businessChatData: action.payload,
                                error: false,
                              };
                            case UserActionTypes.BUSINESS_CHAT_DATA_FAILED:
                              return {
                                ...state,
                                url: '',
                                error: true,
                              };  
  
      default:
        return state;
    }

  };

  export default applicationPageReducer;