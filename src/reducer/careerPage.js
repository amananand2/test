import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    careerData:{careerPageLoader:true},
    careerUvationData:{},
    applyingData:{},
    jobData:{},
    questionsData:{}
  };

  const careerPageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.CAREER_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.CAREER_DATA_SUCCEEDED:
        return {
          ...state,
          careerData: {...action.payload,careerPageLoader:false},
          error: false,
        };
      case UserActionTypes.CAREER_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };
        
        case UserActionTypes.CAREER_UVATION_PAGE_DATA_START :
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.CAREER_UVATION_DATA_SUCCEEDED:
          return {
            ...state,
            careerUvationData: action.payload,
            error: false,
          };
        case UserActionTypes.CAREER_UVATION_DATA_FAILED:
          return {
            ...state,
            url: '',
            error: true,
          };    
          case UserActionTypes.APPLYING_PAGE_DATA_START :
            return {
              ...state,
              url: '',
              error: false,
            };
          case UserActionTypes.APPLYING_DATA_SUCCEEDED:
            return {
              ...state,
              applyingData: action.payload,
              error: false,
            };
          case UserActionTypes.APPLYING_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };
            
            case UserActionTypes.JOB_PAGE_DATA_START :
              return {
                ...state,
                url: '',
                error: false,
              };
            case UserActionTypes.JOB_DATA_SUCCEEDED:
              return {
                ...state,
                jobData: action.payload,
                error: false,
              };
            case UserActionTypes.JOB_DATA_FAILED:
              return {
                ...state,
                url: '',
                error: true,
              };

              case UserActionTypes.QUESTIONS_PAGE_DATA_START :
                return {
                  ...state,
                  url: '',
                  error: false,
                };
              case UserActionTypes.QUESTIONS_DATA_SUCCEEDED:
                return {
                  ...state,
                  questionsData: action.payload,
                  error: false,
                };
              case UserActionTypes.QUESTIONS_DATA_FAILED:
                return {
                  ...state,
                  url: '',
                  error: true,
                };
  
      default:
        return state;
    }

  };

  export default careerPageReducer;