import UserActionTypes from "../actions/types";


const initialState = {
    url: '',
    loading: false,
    error: false,
    peoplesData:{peoplesPageLoader:true},
    teamPeopleData:{}
    
  };

  const peoplePageReducer = (state = initialState, action) => {
    // console.log(action,"action");
    switch (action.type) {
      case UserActionTypes.PEOPLES_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.PEOPLES_DATA_SUCCEEDED:
        return {
          ...state,
          peoplesData: {...action.payload,peoplesPageLoader:false},
          error: false,
        };
      case UserActionTypes.PEOPLES_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        case UserActionTypes.TEAM_PEOPLE_PAGE_DATA_START :
            return {
              ...state,
              url: '',
              error: false,
            };
          case UserActionTypes.TEAM_PEOPLE_DATA_SUCCEEDED:
            return {
              ...state,
              teamPeopleData:action.payload,
              error: false,
            };
          case UserActionTypes.TEAM_PEOPLE_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };
        
      default:
        return state;
    }

  };

  export default peoplePageReducer;