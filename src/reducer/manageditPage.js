import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    manageditLandingData:{manageditPageLoader:true},
    manageditBenifitsData:{},
    manageditInCorporateData:{},
    manageditManagedData:{},
    manageditSolutionData:{},
    manageditUvationData:{},
    manageditChatData:{}
  };

  const manageditPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.MANAGEDIT_LANDING_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.MANAGEDIT_LANDING_DATA_SUCCEEDED:
        return {
          ...state,
          manageditLandingData: {...action.payload,manageditPageLoader:false},
          error: false,
        };

      case UserActionTypes.MANAGEDIT_LANDING_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        case UserActionTypes.MANAGEDIT_BENEFITS_PAGE_DATA_START :
            return {
              ...state,
              url: '',
              error: false,
            };
        case UserActionTypes.MANAGEDIT_BENEFITS_DATA_SUCCEEDED:
            return {
              ...state,
              manageditBenifitsData: action.payload,
              error: false,
            };
    
        case UserActionTypes.MANAGEDIT_BENEFITS_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };
            case UserActionTypes.MANAGEDIT_INCORPORATE_PAGE_DATA_START :
              return {
                ...state,
                url: '',
                error: false,
              };
          case UserActionTypes.MANAGEDIT_INCORPORATE_DATA_SUCCEEDED:
              return {
                ...state,
                manageditInCorporateData: action.payload,
                error: false,
              };
      
          case UserActionTypes.MANAGEDIT_INCORPORATE_DATA_FAILED:
              return {
                ...state,
                url: '',
                error: true,
              };

              case UserActionTypes.MANAGEDIT_MANAGED_PAGE_DATA_START :
                return {
                  ...state,
                  url: '',
                  error: false,
                };
            case UserActionTypes.MANAGEDIT_MANAGED_DATA_SUCCEEDED:
                return {
                  ...state,
                  manageditManagedData: action.payload,
                  error: false,
                };
        
            case UserActionTypes.MANAGEDIT_MANAGED_DATA_FAILED:
                return {
                  ...state,
                  url: '',
                  error: true,
                };
            
            case UserActionTypes.MANAGEDIT_SOLUTION_PAGE_DATA_START :
                return {
                  ...state,
                  url: '',
                  error: false,
                };
            case UserActionTypes.MANAGEDIT_SOLUTION_DATA_SUCCEEDED:
                return {
                  ...state,
                  manageditSolutionData: action.payload,
                  error: false,
                };
        
            case UserActionTypes.MANAGEDIT_SOLUTION_DATA_FAILED:
                return {
                  ...state,
                  url: '',
                  error: true,
                };

                case UserActionTypes.MANAGEDIT_UVATION_PAGE_DATA_START :
                  return {
                    ...state,
                    url: '',
                    error: false,
                  };
              case UserActionTypes.MANAGEDIT_UVATION_DATA_SUCCEEDED:
                  return {
                    ...state,
                    manageditUvationData: action.payload,
                    error: false,
                  };
          
              case UserActionTypes.MANAGEDIT_UVATION_DATA_FAILED:
                  return {
                    ...state,
                    url: '',
                    error: true,
                  };

                  case UserActionTypes.MANAGEDIT_CHAT_PAGE_DATA_START :
                    return {
                      ...state,
                      url: '',
                      error: false,
                    };
                case UserActionTypes.MANAGEDIT_CHAT_DATA_SUCCEEDED:
                    return {
                      ...state,
                      manageditChatData: action.payload,
                      error: false,
                    };
            
                case UserActionTypes.MANAGEDIT_CHAT_DATA_FAILED:
                    return {
                      ...state,
                      url: '',
                      error: true,
                    };
            // MANAGEDIT_MANAGED
      default:
        return state;
    }

  };

  export default manageditPageReducer;