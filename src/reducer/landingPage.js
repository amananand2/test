import UserActionTypes from "../actions/types";

const initialAddCreditCard = {
	addCreditCard: {
		isLoading: false,
	}
};

const initialState = {
  ...initialAddCreditCard,
    url: '',
    error: false,
    landingData:{landingPage:true},
    deployData:{landingPage:true},
    expertiseData:{landingPage:true},
    caseStudiesData:{landingPage:true},
    captionData:{landingPage:true},
    newsRoomData:{landingPage:true},
    historyData:{landingPage:true},
    getInTouchData:{landingPage:true},
    uvationData:{aboutPageLoader:true},
    companyData:{},
    brandData:{},
    servicesData:{},
    peopleData:{},
    aboutHistoryData:{},
    reachUsData:{contactPageLoader:true},
    moreContactUsData:{},
    industriesData:{industriesPageLoader:true},
    featuredData:{},
    futureIndustriesData:{},
    workWithData:{},
    resourcesData:{},
    exploreData:{},
    innovationData:{innovationPageLoader:true},
    featuredInnovationData:{},
    recommendedData:{},
    contentData:{},
    innovationExploreData:{}
  };

  const landingPageReducer = (state = initialState, action) => {
    console.log(state,"action");
    switch (action.type) {
      case UserActionTypes.LANDING_PAGE_DATA_START:
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.LANDING_PAGE_DATA_SUCCEEDED:
        return {
          ...state,
          landingData: {...action.payload,landingPage:false},
        
          error: false,
        };
      case UserActionTypes.LANDING_PAGE_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        //DEPLOY
        case UserActionTypes.DEPLOY_PAGE_DATA_START:
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.DEPLOY_PAGE_DATA_SUCCEEDED:
        return {
          ...state,
          deployData: {...action.payload,landingPage:false},
      
          error: false,
        };
        case UserActionTypes.DEPLOY_PAGE_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };
        // case UserActionTypes.CLEAR_ADD_CREDIT_CARD:
        //   return {
        //     ...state,
        //     loading:true
        //   };
        //expertise

        case UserActionTypes.EXPERTISE_PAGE_DATA_START:
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.EXPERTISE_PAGE_DATA_SUCCEEDED:
        return {
          ...state,
          expertiseData: {...action.payload,landingPage:false},
        
          error: false,
        };
        case UserActionTypes.EXPERTISE_PAGE_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };
//casestudies
case UserActionTypes.CASE_STUDIES_DATA_START:
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.CASE_STUDIES_DATA_SUCCEEDED:
        return {
          ...state,
          caseStudiesData: {...action.payload,landingPage:false},
         
          error: false,
        };
        case UserActionTypes.CASE_STUDIES_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        //caption

        case UserActionTypes.CAPTION_DATA_START:
          return {
            ...state,
            url: '',
          };
        case UserActionTypes.CAPTION_DATA_SUCCEEDED:
        return {
          ...state,
          captionData: {...action.payload,landingPage:false},
        
          error: false,
        };
        case UserActionTypes.CAPTION_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        //newsroom

        case UserActionTypes.NEWS_ROOM_PAGE_DATA_START:
          return {
          ...state,
            url: '',
            loading:{
              ...state.loading,
               landingPage:false
            },
            error: false,
          };
        case UserActionTypes.NEWS_ROOM_DATA_SUCCEEDED:
        return {
          ...state,
          newsRoomData: {...action.payload,landingPage:false},
          error: false,
        };
        case UserActionTypes.NEWS_ROOM_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        //history

        case UserActionTypes.HISTORY_PAGE_DATA_START:
          return {
          ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.HISTORY_DATA_SUCCEEDED:
        return {
          ...state,
          historyData: {...action.payload,landingPage:false},
        
          error: false,
        };
        case UserActionTypes.HISTORY_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        // getintouch
        case UserActionTypes.GET_IN_TOUCH_PAGE_DATA_START:
          return {
          ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.GET_IN_TOUCH_DATA_SUCCEEDED:
        return {
          ...state,
          getInTouchData: {...action.payload,landingPage:false},
          error: false,
        };
        case UserActionTypes.GET_IN_TOUCH_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        //uvationPage
        case UserActionTypes.UVATION_PAGE_DATA_START :
          return {
          ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.UVATION_DATA_SUCCEEDED:
          return {
            ...state,
            uvationData: {...action.payload,aboutPageLoader:false},
            // loading: false,
            error: false,
          };
        case UserActionTypes.UVATION_DATA_FAILED:
          return {
          ...state,
            url: '',
            error: true,
          };

        //companyData

        case UserActionTypes.COMPANY_PAGE_DATA_START :
          return {
          ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.COMPANY_DATA_SUCCEEDED:
          return {
            ...state,
            companyData: action.payload,
            error: false,
          };
        case UserActionTypes.COMPANY_DATA_FAILED:
          return {
          ...state,
            url: '',
            error: true,
          };
       
          //brandData

          case UserActionTypes.BRAND_PAGE_DATA_START :
            return {
               ...state,
              url: '',
              error: false,
            };
          case UserActionTypes.BRAND_DATA_SUCCEEDED:
            return {
              ...state,
              brandData: action.payload,
              error: false,
            };
          case UserActionTypes.BRAND_DATA_FAILED:
            return {
              ...state,
              url: '',
              error: true,
            };
        
            //services

            case UserActionTypes.SERVICE_PAGE_DATA_START :
              return {
                ...state,
                url: '',
                error: false,
              };
            case UserActionTypes.SERVICE_DATA_SUCCEEDED:
              return {
                ...state,
                servicesData: action.payload,
                error: false,
              };
            case UserActionTypes.SERVICE_DATA_FAILED:
              return {
                ...state,
                url: '',
                error: true,
              };
           //PEOPLE
           
           case UserActionTypes.PEOPLE_PAGE_DATA_START :
              return {
                ...state,
                url: '',
                error: false,
              };
            case UserActionTypes.PEOPLE_DATA_SUCCEEDED:
              return {
                ...state,
                peopleData: action.payload,
                error: false,
              };
            case UserActionTypes.PEOPLE_DATA_FAILED:
              return {
                ...state,
                url: '',
                error: true,
              };

      //ABOUT_HISTORY

      case UserActionTypes.ABOUT_HISTORY_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.ABOUT_HISTORY_DATA_SUCCEEDED:
        return {
          ...state,
          aboutHistoryData: action.payload,
          error: false,
        };
      case UserActionTypes.ABOUT_HISTORY_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

      //about page ends

      //contact us page start
      
      //reach us
     
      case UserActionTypes.REACH_US_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.REACH_US_DATA_SUCCEEDED:
        return {
          ...state,
          reachUsData: {...action.payload,contactPageLoader:false},
          error: false,
        };
      case UserActionTypes.REACH_US_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

      //morecontactus

      case UserActionTypes.MORE_CONTACT_US_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.MORE_CONTACT_US_DATA_SUCCEEDED:
        return {
          ...state,
          moreContactUsData: action.payload,
          error: false,
        };
      case UserActionTypes.MORE_CONTACT_US_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };


      //contact us page ends

      //INDUSTRIES page starts
      
      //industries
      case UserActionTypes.INDUSTRIES_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.INDUSTRIES_DATA_SUCCEEDED:
        return {
          ...state,
          industriesData: {...action.payload,industriesPageLoader:false},
          error: false,
        };
      case UserActionTypes.INDUSTRIES_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        //FEATURED

        case UserActionTypes.FEATURED_PAGE_DATA_START :
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.FEATURED_DATA_SUCCEEDED:
          return {
            ...state,
            featuredData: action.payload,
            error: false,
          };
        case UserActionTypes.FEATURED_DATA_FAILED:
          return {
            ...state,
            url: '',
            error: true,
          };

      //FUTURE INDUSTRIES

      case UserActionTypes.FUTURE_INDUSTRIES_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.FUTURE_INDUSTRIES_DATA_SUCCEEDED:
        return {
          ...state,
          futureIndustriesData: action.payload,
          error: false,
        };
      case UserActionTypes.FUTURE_INDUSTRIES_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

        //WorkWith

        case UserActionTypes.WORK_WITH_PAGE_DATA_START :
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.WORK_WITH_DATA_SUCCEEDED:
          return {
            ...state,
            workWithData: action.payload,
            error: false,
          };
        case UserActionTypes.WORK_WITH_DATA_FAILED:
          return {
            ...state,
            url: '',
            error: true,
          };

      //RESOURCES

      case UserActionTypes.RESOURCES_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.RESOURCES_DATA_SUCCEEDED:
        return {
          ...state,
          resourcesData: action.payload,
          error: false,
        };
      case UserActionTypes.RESOURCES_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

      //EXPLORE

      case UserActionTypes.EXPLORE_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.EXPLORE_DATA_SUCCEEDED:
        return {
          ...state,
          exploreData: action.payload,
          error: false,
        };
      case UserActionTypes.EXPLORE_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };


      //INDUSTRIES page ends

      //INNOVATION page STARTS

        //Innovation
        case UserActionTypes.INNOVATION_PAGE_DATA_START :
          return {
            ...state,
            url: '',
            error: false,
          };
        case UserActionTypes.INNOVATION_DATA_SUCCEEDED:
          return {
            ...state,
            innovationData: {...action.payload,innovationPageLoader:false},
            error: false,
          };
        case UserActionTypes.INNOVATION_DATA_FAILED:
          return {
            ...state,
            url: '',
            error: true,
          };
  
      //Featured Innovation

      case UserActionTypes.FEATURED_INNOVATION_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.FEATURED_INNOVATION_DATA_SUCCEEDED:
        return {
          ...state,
          featuredInnovationData: action.payload,
          error: false,
        };
      case UserActionTypes.FEATURED_INNOVATION_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

      //recommended

      case UserActionTypes.RECOMMENDED_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.RECOMMENDED_DATA_SUCCEEDED:
        return {
          ...state,
          recommendedData: action.payload,
          error: false,
        };
      case UserActionTypes.RECOMMENDED_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

       //CONTENT

       case UserActionTypes.CONTENT_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.CONTENT_DATA_SUCCEEDED:
        return {
          ...state,
          contentData: action.payload,
          error: false,
        };
      case UserActionTypes.CONTENT_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

      //INNOVATION_EXPLORE

      case UserActionTypes.INNOVATION_EXPLORE_PAGE_DATA_START :
        return {
          ...state,
          url: '',
          error: false,
        };
      case UserActionTypes.INNOVATION_EXPLORE_DATA_SUCCEEDED:
        return {
          ...state,
          innovationExploreData: action.payload,
          error: false,
        };
      case UserActionTypes.INNOVATION_EXPLORE_DATA_FAILED:
        return {
          ...state,
          url: '',
          error: true,
        };

      //INNOVATION page ENDS
           
      default:
        return state;
    }

  };

  export default landingPageReducer;