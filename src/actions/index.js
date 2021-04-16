
import actionTypes from "./types";

export const landingPageDataStart = () => ({
    type: actionTypes.LANDING_PAGE_DATA_START 
});
  
  export const landingPageDataSuccess = (data) => ({
      type: actionTypes.LANDING_PAGE_DATA_SUCCEEDED, payload: data 
  });
  
export const landingPageDataError = () => ({
     type: actionTypes.LANDING_PAGE_DATA_FAILED 
  });
  
  

  //Deploy

  export const deployPageDataStart = () => ({
    type: actionTypes.DEPLOY_PAGE_DATA_START 
});
  
  export const deployPageDataSuccess = (data) => ({
      type: actionTypes.DEPLOY_PAGE_DATA_SUCCEEDED, payload: data 
  });
  
export const deployPageDataError = () => ({
     type: actionTypes.DEPLOY_PAGE_DATA_FAILED 
  });

  export const clearAddCreditCard = (error) => ({
    type: actionTypes.CLEAR_ADD_CREDIT_CARD,
  });

  //expertise

  export const expertisePageDataStart = () => ({
    type: actionTypes.EXPERTISE_PAGE_DATA_START 
});
  
  export const expertisePageDataSuccess = (data) => ({
      type: actionTypes.EXPERTISE_PAGE_DATA_SUCCEEDED, payload: data 
  });
  
export const expertisePageDataError = () => ({
     type: actionTypes.EXPERTISE_PAGE_DATA_FAILED 
  });

  
  //caseStudies

  export const caseStudiesPageDataStart = () => ({
    type: actionTypes.CASE_STUDIES_PAGE_DATA_START 
});
  
  export const caseStudiesPageDataSuccess = (data) => ({
      type: actionTypes.CASE_STUDIES_DATA_SUCCEEDED, payload: data 
  });
  
export const caseStudiesPageDataError = () => ({
     type: actionTypes.CASE_STUDIES_DATA_FAILED 
  });


  //caption


  export const captionPageDataStart = () => ({
    type: actionTypes.CAPTION_PAGE_DATA_START 
});
  
  export const captionPageDataSuccess = (data) => ({
      type: actionTypes.CAPTION_DATA_SUCCEEDED, payload: data 
  });
  
export const captionPageDataError = () => ({
     type: actionTypes.CAPTION_DATA_FAILED 
  });

//newsroom

export const newsRoomPageDataStart = () => ({
  type: actionTypes.NEWS_ROOM_PAGE_DATA_START 
});

export const newsRoomPageDataSuccess = (data) => ({
    type: actionTypes.NEWS_ROOM_DATA_SUCCEEDED, payload: data 
});

export const newsRoomPageDataError = () => ({
   type: actionTypes.NEWS_ROOM_DATA_FAILED 
});

//history


export const historyPageDataStart = () => ({
  type: actionTypes.HISTORY_PAGE_DATA_START 
});

export const historyPageDataSuccess = (data) => ({
    type: actionTypes.HISTORY_DATA_SUCCEEDED, payload: data 
});

export const historyPageDataError = () => ({
   type: actionTypes.HISTORY_DATA_FAILED 
});

//getintouch

export const getInTouchPageDataStart = () => ({
  type: actionTypes.GET_IN_TOUCH_PAGE_DATA_START 
});

export const getInTouchPageDataSuccess = (data) => ({
    type: actionTypes.GET_IN_TOUCH_DATA_SUCCEEDED, payload: data 
});

export const getInTouchPageDataError = () => ({
   type: actionTypes.GET_IN_TOUCH_DATA_FAILED 
});


//About page starts

//uvation

export const uvationPageDataStart = () => ({
  type: actionTypes.UVATION_PAGE_DATA_START 
});

export const uvationPageDataSuccess = (data) => ({
    type: actionTypes.UVATION_DATA_SUCCEEDED, payload: data 
});

export const uvationPageDataError = () => ({
   type: actionTypes.UVATION_DATA_FAILED 
});

//company

export const companyPageDataStart = () => ({
  type: actionTypes.COMPANY_PAGE_DATA_START 
});

export const companyPageDataSuccess = (data) => ({
    type: actionTypes.COMPANY_DATA_SUCCEEDED, payload: data 
});

export const companyPageDataError = () => ({
   type: actionTypes.COMPANY_DATA_FAILED 
});


//brand


export const brandPageDataStart = () => ({
  type: actionTypes.BRAND_PAGE_DATA_START 
});

export const brandPageDataSuccess = (data) => ({
    type: actionTypes.BRAND_DATA_SUCCEEDED, payload: data 
});

export const brandPageDataError = () => ({
   type: actionTypes.BRAND_DATA_FAILED 
});

//service

export const servicePageDataStart = () => ({
  type: actionTypes.SERVICE_PAGE_DATA_START 
});

export const servicePageDataSuccess = (data) => ({
    type: actionTypes.SERVICE_DATA_SUCCEEDED, payload: data 
});

export const servicePageDataError = () => ({
   type: actionTypes.SERVICE_DATA_FAILED 
});

//people


export const peoplePageDataStart = () => ({
  type: actionTypes.PEOPLE_PAGE_DATA_START 
});

export const peoplePageDataSuccess = (data) => ({
    type: actionTypes.PEOPLE_DATA_SUCCEEDED, payload: data 
});

export const peoplePageDataError = () => ({
   type: actionTypes.PEOPLE_DATA_FAILED 
});

//history


export const aboutHistoryPageDataStart = () => ({
  type: actionTypes.ABOUT_HISTORY_PAGE_DATA_START 
});

export const aboutHistoryPageDataSuccess = (data) => ({
    type: actionTypes.ABOUT_HISTORY_DATA_SUCCEEDED, payload: data 
});

export const aboutHistoryPageDataError = () => ({
   type: actionTypes.ABOUT_HISTORY_DATA_FAILED 
});


//About page ends


//Contact Page Starts

//ReachUs

export const reachUsPageDataStart = () => ({
  type: actionTypes.REACH_US_PAGE_DATA_START 
});

export const reachUsPageDataSuccess = (data) => ({
    type: actionTypes.REACH_US_DATA_SUCCEEDED, payload: data 
});

export const reachUsPageDataError = () => ({
   type: actionTypes.REACH_US_DATA_FAILED 
});

//MoreContactus

export const moreContactUsPageDataStart = () => ({
  type: actionTypes.MORE_CONTACT_US_PAGE_DATA_START 
});

export const moreContactUsDataSuccess = (data) => ({
    type: actionTypes.MORE_CONTACT_US_DATA_SUCCEEDED, payload: data 
});

export const moreContactUsDataError = () => ({
   type: actionTypes.MORE_CONTACT_DATA_FAILED 
});

//MoreContactus

//Contact Page Ends

//Industries page Starts

//industries

export const industriesPageDataStart = () => ({
  type: actionTypes.INDUSTRIES_PAGE_DATA_START 
});

export const industriesDataSuccess = (data) => ({
    type: actionTypes.INDUSTRIES_DATA_SUCCEEDED, payload: data 
});

export const industriesDataError = () => ({
   type: actionTypes.INDUSTRIES_DATA_FAILED 
});

//featured

export const featuredPageDataStart = () => ({
  type: actionTypes.FEATURED_PAGE_DATA_START 
});

export const featuredDataSuccess = (data) => ({
    type: actionTypes.FEATURED_DATA_SUCCEEDED, payload: data 
});

export const featuredDataError = () => ({
   type: actionTypes.FEATURED_DATA_FAILED 
});

//futureIndustries

export const futureIndustriesPageDataStart = () => ({
  type: actionTypes.FUTURE_INDUSTRIES_PAGE_DATA_START 
});

export const futureIndustriesDataSuccess = (data) => ({
    type: actionTypes.FUTURE_INDUSTRIES_DATA_SUCCEEDED, payload: data 
});

export const futureIndustriesDataError = () => ({
   type: actionTypes.FUTURE_INDUSTRIES_DATA_FAILED 
});

//workWith
export const workWithPageDataStart = () => ({
  type: actionTypes.WORK_WITH_PAGE_DATA_START 
});

export const workWithDataSuccess = (data) => ({
    type: actionTypes.WORK_WITH_DATA_SUCCEEDED, payload: data 
});

export const workWithDataError = () => ({
   type: actionTypes.WORK_WITH_DATA_FAILED 
});

//resources

export const resourcesPageDataStart = () => ({
  type: actionTypes.RESOURCES_PAGE_DATA_START 
});

export const resourcesDataSuccess = (data) => ({
    type: actionTypes.RESOURCES_DATA_SUCCEEDED, payload: data 
});

export const resourcesDataError = () => ({
   type: actionTypes.RESOURCES_DATA_FAILED 
});

//explore

export const explorePageDataStart = () => ({
  type: actionTypes.EXPLORE_PAGE_DATA_START 
});

export const exploreDataSuccess = (data) => ({
    type: actionTypes.EXPLORE_DATA_SUCCEEDED, payload: data 
});

export const exploreDataError = () => ({
   type: actionTypes.EXPLORE_DATA_FAILED 
});

//Industries page Ends


//Innovation page Ends


//Innovation
export const innovationPageDataStart = () => ({
  type: actionTypes.INNOVATION_PAGE_DATA_START 
});

export const innovationDataSuccess = (data) => ({
    type: actionTypes.INNOVATION_DATA_SUCCEEDED, payload: data 
});

export const innovationDataError = () => ({
   type: actionTypes.INNOVATION_DATA_FAILED 
});

//Featured Innovation

export const featuredInnovationPageDataStart = () => ({
  type: actionTypes.FEATURED_INNOVATION_PAGE_DATA_START 
});

export const featuredInnovationDataSuccess = (data) => ({
    type: actionTypes.FEATURED_INNOVATION_DATA_SUCCEEDED, payload: data 
});

export const featuredInnovationDataError = () => ({
   type: actionTypes.FEATURED_INNOVATION_DATA_FAILED 
});

//recommended

export const recommendedPageDataStart = () => ({
  type: actionTypes.RECOMMENDED_PAGE_DATA_START 
});

export const recommendedDataSuccess = (data) => ({
    type: actionTypes.RECOMMENDED_DATA_SUCCEEDED, payload: data 
});

export const recommendedDataError = () => ({
   type: actionTypes.RECOMMENDED_DATA_FAILED 
});

//content

export const contentPageDataStart = () => ({
  type: actionTypes.CONTENT_PAGE_DATA_START 
});

export const contentDataSuccess = (data) => ({
    type: actionTypes.CONTENT_DATA_SUCCEEDED, payload: data 
});

export const contentDataError = () => ({
   type: actionTypes.CONTENT_DATA_FAILED 
});

//explore

export const innovationExplorePageDataStart = () => ({
  type: actionTypes.INNOVATION_EXPLORE_PAGE_DATA_START 
});

export const innovationExploreDataSuccess = (data) => ({
    type: actionTypes.INNOVATION_EXPLORE_DATA_SUCCEEDED, payload: data 
});

export const innovationExploreDataError = () => ({
   type: actionTypes.INNOVATION_EXPLORE_DATA_FAILED 
});

//Innovation page Ends


//Career Page Starts

//careers

export const careerPageDataStart = () => ({
  type: actionTypes.CAREER_PAGE_DATA_START 
});

export const careerDataSuccess = (data) => ({
    type: actionTypes.CAREER_DATA_SUCCEEDED, payload: data 
});

export const careerDataError = () => ({
   type: actionTypes.CAREER_DATA_FAILED 
});

//career uvation


export const careerUvationDataStart = () => ({
  type: actionTypes.CAREER_UVATION_PAGE_DATA_START 
});

export const careerUvationDataSuccess = (data) => ({
    type: actionTypes.CAREER_UVATION_DATA_SUCCEEDED, payload: data 
});

export const careerUvationDataError = () => ({
   type: actionTypes.CAREER_UVATION_DATA_FAILED 
});

//applying

export const applyingPageDataStart = () => ({
  type: actionTypes.APPLYING_PAGE_DATA_START 
});

export const applyingDataSuccess = (data) => ({
    type: actionTypes.APPLYING_DATA_SUCCEEDED, payload: data 
});

export const applyingDataError = () => ({
   type: actionTypes.APPLYING_DATA_FAILED 
});

//job

export const jobPageDataStart = () => ({
  type: actionTypes.JOB_PAGE_DATA_START 
});

export const jobDataSuccess = (data) => ({
    type: actionTypes.JOB_DATA_SUCCEEDED, payload: data 
});

export const jobDataError = () => ({
   type: actionTypes.JOB_DATA_FAILED 
});


//questions

export const questionsPageDataStart = () => ({
  type: actionTypes.QUESTIONS_PAGE_DATA_START 
});

export const questionsDataSuccess = (data) => ({
    type: actionTypes.QUESTIONS_DATA_SUCCEEDED, payload: data 
});

export const questionsDataError = () => ({
   type: actionTypes.QUESTIONS_DATA_FAILED 
});


//Carrer Page Ends


//Partnership Page Starts

//partnership

export const partnershipPageDataStart = () => ({
  type: actionTypes.PARTNERSHIP_PAGE_DATA_START 
});

export const partnershipDataSuccess = (data) => ({
    type: actionTypes.PARTNERSHIP_DATA_SUCCEEDED, payload: data 
});

export const partnershipDataError = () => ({
   type: actionTypes.PARTNERSHIP_DATA_FAILED 
});

//discover

export const discoverPageDataStart = () => ({
  type: actionTypes.DISCOVER_PAGE_DATA_START 
});

export const discoverDataSuccess = (data) => ({
    type: actionTypes.DISCOVER_DATA_SUCCEEDED, payload: data 
});

export const discoverDataError = () => ({
   type: actionTypes.DISCOVER_DATA_FAILED 
});


//channel

export const channelPageDataStart = () => ({
  type: actionTypes.CHANNEL_PAGE_DATA_START 
});

export const channelDataSuccess = (data) => ({
    type: actionTypes.CHANNEL_DATA_SUCCEEDED, payload: data 
});

export const channelDataError = () => ({
   type: actionTypes.CHANNEL_DATA_FAILED 
});


//Partnership Page Ends

//People Page Starts

//peoples
export const peoplesPageDataStart = () => ({
  type: actionTypes.PEOPLES_PAGE_DATA_START 
});

export const peoplesDataSuccess = (data) => ({
    type: actionTypes.PEOPLES_DATA_SUCCEEDED, payload: data 
});

export const peoplesDataError = () => ({
   type: actionTypes.PEOPLES_DATA_FAILED 
});

//teamPeople
export const teamPeoplePageDataStart = () => ({
  type: actionTypes.TEAM_PEOPLE_PAGE_DATA_START 
});

export const teamPeopleDataSuccess = (data) => ({
    type: actionTypes.TEAM_PEOPLE_DATA_SUCCEEDED, payload: data 
});

export const teamPeopleDataError = () => ({
   type: actionTypes.TEAM_PEOPLE_DATA_FAILED 
});

//People Page Ends

//Investors Relations Page starts

//information

export const investorInformationPageDataStart = () => ({
  type: actionTypes.INVESTOR_INFORMATION_PAGE_DATA_START 
});

export const investorInformationDataSuccess = (data) => ({
    type: actionTypes.INVESTOR_INFORMATION_DATA_SUCCEEDED, payload: data 
});

export const investorInformationDataError = () => ({
   type: actionTypes.INVESTOR_INFORMATION_DATA_FAILED 
});


//news

export const investorNewsPageDataStart = () => ({
  type: actionTypes.INVESTOR_NEWS_PAGE_DATA_START 
});

export const investorNewsDataSuccess = (data) => ({
    type: actionTypes.INVESTOR_NEWS_DATA_SUCCEEDED, payload: data 
});

export const investorNewsDataError = () => ({
   type: actionTypes.INVESTOR_NEWS_DATA_FAILED 
});


//uvation

export const investorUvationDataStart = () => ({
  type: actionTypes.INVESTOR_UVATION_PAGE_DATA_START 
});

export const investorUvationDataSuccess = (data) => ({
    type: actionTypes.INVESTOR_UVATION_DATA_SUCCEEDED, payload: data 
});

export const investorUvationDataError = () => ({
   type: actionTypes.INVESTOR_UVATION_DATA_FAILED 
});

//want

export const investorWantDataStart = () => ({
  type: actionTypes.INVESTOR_WANT_PAGE_DATA_START 
});

export const investorWantDataSuccess = (data) => ({
    type: actionTypes.INVESTOR_WANT_DATA_SUCCEEDED, payload: data 
});

export const investorWantDataError = () => ({
   type: actionTypes.INVESTOR_WANT_DATA_FAILED 
});



//Investors Relations Page Ends


//Investors Sla Page Starts

//investorHeading

export const investorHeadingDataStart = () => ({
  type: actionTypes.INVESTOR_HEADING_PAGE_DATA_START 
});

export const investorHeadingDataSuccess = (data) => ({
    type: actionTypes.INVESTOR_HEADING_DATA_SUCCEEDED, payload: data 
});

export const investorHeadingDataError = () => ({
   type: actionTypes.INVESTOR_HEADING_DATA_FAILED 
});

//Investors Sla Page Ends


//Technology Service Page Starts

//TechnologyHeading

export const TechnologyHeadingDataStart = () => ({
  type: actionTypes.TECHNOLOGY_HEADING_PAGE_DATA_START 
});

export const TechnologyHeadingDataSuccess = (data) => ({
    type: actionTypes.TECHNOLOGY_HEADING_DATA_SUCCEEDED, payload: data 
});

export const TechnologyHeadingDataError = () => ({
   type: actionTypes.TECHNOLOGY_HEADING_DATA_FAILED 
});

//Technology Service Page Ends


//Application Page Starts

//application

export const applicationPageDataStart = () => ({
  type: actionTypes.APPLICATION_PAGE_DATA_START 
});

export const applicationDataSuccess = (data) => ({
    type: actionTypes.APPLICATION_DATA_SUCCEEDED, payload: data 
});

export const applicationDataError = () => ({
   type: actionTypes.APPLICATION_DATA_FAILED 
});

//benefits

export const benefitsPageDataStart = () => ({
  type: actionTypes.BENEFITS_PAGE_DATA_START 
});

export const benefitsDataSuccess = (data) => ({
    type: actionTypes.BENEFITS_DATA_SUCCEEDED, payload: data 
});

export const benefitsDataError = () => ({
   type: actionTypes.BENEFITS_DATA_FAILED 
});


//develop

export const developPageDataStart = () => ({
  type: actionTypes.DEVELOP_PAGE_DATA_START 
});

export const developDataSuccess = (data) => ({
    type: actionTypes.DEVELOP_DATA_SUCCEEDED, payload: data 
});

export const developDataError = () => ({
   type: actionTypes.DEVELOP_DATA_FAILED 
});

//business

export const businessPageDataStart = () => ({
  type: actionTypes.BUSINESS_PAGE_DATA_START 
});

export const businessDataSuccess = (data) => ({
    type: actionTypes.BUSINESS_DATA_SUCCEEDED, payload: data 
});

export const businessDataError = () => ({
   type: actionTypes.BUSINESS_DATA_FAILED 
});

//applicationTabs

export const applicationTabsPageDataStart = () => ({
  type: actionTypes.APPLICATION_TABS_PAGE_DATA_START 
});

export const applicationTabsDataSuccess = (data) => ({
    type: actionTypes.APPLICATION_TABS_DATA_SUCCEEDED, payload: data 
});

export const applicationTabsDataError = () => ({
   type: actionTypes.APPLICATION_TABS_DATA_FAILED 
});

//chat

export const applicationChatPageDataStart = () => ({
  type: actionTypes.APPLICATION_CHAT_PAGE_DATA_START 
});

export const applicationChatDataSuccess = (data) => ({
    type: actionTypes.APPLICATION_CHAT_DATA_SUCCEEDED, payload: data 
});

export const applicationChatDataError = () => ({
   type: actionTypes.APPLICATION_CHAT_DATA_FAILED 
});

//Application Page Ends

//Business Resiliency Page Starts

//business

export const businessLandingPageDataStart = () => ({
  type: actionTypes.BUSINESS_LANDING_PAGE_DATA_START 
});

export const businessLandingDataSuccess = (data) => ({
    type: actionTypes.BUSINESS_LANDING_DATA_SUCCEEDED, payload: data 
});

export const businessLandingDataError = () => ({
   type: actionTypes.BUSINESS_LANDING_DATA_FAILED 
});

//resiliency

export const resiliencyPageDataStart = () => ({
  type: actionTypes.RESILIENCY_PAGE_DATA_START 
});

export const resiliencyDataSuccess = (data) => ({
    type: actionTypes.RESILIENCY_DATA_SUCCEEDED, payload: data 
});

export const resiliencyDataError = () => ({
   type: actionTypes.RESILIENCY_DATA_FAILED 
});

//improve

export const improvePageDataStart = () => ({
  type: actionTypes.IMPROVE_PAGE_DATA_START 
});

export const improveDataSuccess = (data) => ({
    type: actionTypes.IMPROVE_DATA_SUCCEEDED, payload: data 
});

export const improveDataError = () => ({
   type: actionTypes.IMPROVE_DATA_FAILED 
});

//businessChat

export const businessChatPageDataStart = () => ({
  type: actionTypes.BUSINESS_CHAT_PAGE_DATA_START 
});

export const businessChatDataSuccess = (data) => ({
    type: actionTypes.BUSINESS_CHAT_DATA_SUCCEEDED, payload: data 
});

export const businessChatDataError = () => ({
   type: actionTypes.BUSINESS_CHAT_DATA_FAILED 
});


//Business Resiliency Page Ends

//Cloud Page Starts

//cloudLanding

export const cloudLandingPageDataStart = () => ({
  type: actionTypes.CLOUD_LANDING_PAGE_DATA_START 
});

export const cloudLandingDataSuccess = (data) => ({
    type: actionTypes.CLOUD_LANDING_DATA_SUCCEEDED, payload: data 
});

export const cloudLandingDataError = () => ({
   type: actionTypes.CLOUD_LANDING_DATA_FAILED 
});


//cloudBenifits

export const cloudBenifitsPageDataStart = () => ({
  type: actionTypes.CLOUD_BENIFITS_PAGE_DATA_START 
});

export const cloudBenifitsDataSuccess = (data) => ({
    type: actionTypes.CLOUD_BENIFITS_DATA_SUCCEEDED, payload: data 
});

export const cloudBenifitsDataError = () => ({
   type: actionTypes.CLOUD_BENIFITS_DATA_FAILED 
});

//cloudGet

export const cloudGetPageDataStart = () => ({
  type: actionTypes.CLOUD_GET_PAGE_DATA_START 
});

export const cloudGetDataSuccess = (data) => ({
    type: actionTypes.CLOUD_GET_DATA_SUCCEEDED, payload: data 
});

export const cloudGetDataError = () => ({
   type: actionTypes.CLOUD_GET_DATA_FAILED 
});

//cloudComputing

export const cloudComputingPageDataStart = () => ({
  type: actionTypes.CLOUD_COMPUTING_PAGE_DATA_START 
});

export const cloudComputingDataSuccess = (data) => ({
    type: actionTypes.CLOUD_COMPUTING_DATA_SUCCEEDED, payload: data 
});

export const cloudComputingDataError = () => ({
   type: actionTypes.CLOUD_COMPUTING_DATA_FAILED 
});

//cloudUnique

export const cloudUniquePageDataStart = () => ({
  type: actionTypes.CLOUD_UNIQUE_PAGE_DATA_START 
});

export const cloudUniqueDataSuccess = (data) => ({
    type: actionTypes.CLOUD_UNIQUE_DATA_SUCCEEDED, payload: data 
});

export const cloudUniqueDataError = () => ({
   type: actionTypes.CLOUD_UNIQUE_DATA_FAILED 
});

//cloudDifferent

export const cloudDifferentPageDataStart = () => ({
  type: actionTypes.CLOUD_DIFFERENT_PAGE_DATA_START 
});

export const cloudDifferentDataSuccess = (data) => ({
    type: actionTypes.CLOUD_DIFFERENT_DATA_SUCCEEDED, payload: data 
});

export const cloudDifferentDataError = () => ({
   type: actionTypes.CLOUD_DIFFERENT_DATA_FAILED 
});

//cloudChat

export const cloudChatPageDataStart = () => ({
  type: actionTypes.CLOUD_CHAT_PAGE_DATA_START 
});

export const cloudChatDataSuccess = (data) => ({
    type: actionTypes.CLOUD_CHAT_DATA_SUCCEEDED, payload: data 
});

export const cloudChatDataError = () => ({
   type: actionTypes.CLOUD_CHAT_DATA_FAILED 
});

//Cloud Page Page Ends

//Data Center Page Starts

//centerLanding
export const centerLandingPageDataStart = () => ({
  type: actionTypes.CENTER_LANDING_PAGE_DATA_START 
});

export const centerLandingDataSuccess = (data) => ({
    type: actionTypes.CENTER_LANDING_DATA_SUCCEEDED, payload: data 
});

export const centerLandingDataError = () => ({
   type: actionTypes.CENTER_LANDING_DATA_FAILED 
});

//centerBenefits

export const centerBenifitsPageDataStart = () => ({
  type: actionTypes.CENTER_BENIFITS_PAGE_DATA_START 
});

export const centerBenifitsDataSuccess = (data) => ({
    type: actionTypes.CENTER_BENIFITS_DATA_SUCCEEDED, payload: data 
});

export const centerBenifitsDataError = () => ({
   type: actionTypes.CENTER_BENIFITS_DATA_FAILED 
});

//deploy

export const centerDeployPageDataStart = () => ({
  type: actionTypes.CENTER_DEPLOY_PAGE_DATA_START 
});

export const centerDeployDataSuccess = (data) => ({
    type: actionTypes.CENTER_DEPLOY_DATA_SUCCEEDED, payload: data 
});

export const centerDeployDataError = () => ({
   type: actionTypes.CENTER_DEPLOY_DATA_FAILED 
});

//explained

export const centerExplainedPageDataStart = () => ({
  type: actionTypes.CENTER_EXPLAINED_PAGE_DATA_START 
});

export const centerExplainedDataSuccess = (data) => ({
    type: actionTypes.CENTER_EXPLAINED_DATA_SUCCEEDED, payload: data 
});

export const centerExplainedDataError = () => ({
   type: actionTypes.CENTER_EXPLAINED_DATA_FAILED 
});

//CenterServices

export const centerServicesPageDataStart = () => ({
  type: actionTypes.CENTER_SERVICES_PAGE_DATA_START 
});

export const centerServicesDataSuccess = (data) => ({
    type: actionTypes.CENTER_SERVICES_DATA_SUCCEEDED, payload: data 
});

export const centerServicesDataError = () => ({
   type: actionTypes.CENTER_SERVICES_DATA_FAILED 
});

//centerTechnologies

export const centerTechnologiesPageDataStart = () => ({
  type: actionTypes.CENTER_TECHNOLOGIES_PAGE_DATA_START 
});

export const centerTechnologiesDataSuccess = (data) => ({
    type: actionTypes.CENTER_TECHNOLOGIES_DATA_SUCCEEDED, payload: data 
});

export const centerTechnologiesDataError = () => ({
   type: actionTypes.CENTER_TECHNOLOGIES_DATA_FAILED 
});

//centerChat

export const centerChatPageDataStart = () => ({
  type: actionTypes.CENTER_CHAT_PAGE_DATA_START 
});

export const centerChatDataSuccess = (data) => ({
    type: actionTypes.CENTER_CHAT_DATA_SUCCEEDED, payload: data 
});

export const centerChatDataError = () => ({
   type: actionTypes.CENTER_CHAT_DATA_FAILED 
});

//Data Center Page Ends


//Managed It Page Starts

//manageditLanding

export const manageditLandingPageDataStart = () => ({
  type: actionTypes.MANAGEDIT_LANDING_PAGE_DATA_START 
});

export const manageditLandingDataSuccess = (data) => ({
    type: actionTypes.MANAGEDIT_LANDING_DATA_SUCCEEDED, payload: data 
});

export const manageditLandingDataError = () => ({
   type: actionTypes.MANAGEDIT_LANDING_DATA_FAILED 
});

//manageditBenefits

export const manageditBenefitsPageDataStart = () => ({
  type: actionTypes.MANAGEDIT_BENEFITS_PAGE_DATA_START 
});

export const manageditBenefitsDataSuccess = (data) => ({
    type: actionTypes.MANAGEDIT_BENEFITS_DATA_SUCCEEDED, payload: data 
});

export const manageditBenefitsDataError = () => ({
   type: actionTypes.MANAGEDIT_BENEFITS_DATA_FAILED 
});


//manageditIncorporate

export const manageditIncorporatePageDataStart = () => ({
  type: actionTypes.MANAGEDIT_INCORPORATE_PAGE_DATA_START 
});

export const manageditIncorporateDataSuccess = (data) => ({
    type: actionTypes.MANAGEDIT_INCORPORATE_DATA_SUCCEEDED, payload: data 
});

export const manageditIncorporateDataError = () => ({
   type: actionTypes.MANAGEDIT_INCORPORATE_DATA_FAILED 
});

//manageditManaged

export const manageditManagedPageDataStart = () => ({
  type: actionTypes.MANAGEDIT_MANAGED_PAGE_DATA_START 
});

export const manageditManagedDataSuccess = (data) => ({
    type: actionTypes.MANAGEDIT_MANAGED_DATA_SUCCEEDED, payload: data 
});

export const manageditManagedDataError = () => ({
   type: actionTypes.MANAGEDIT_MANAGED_DATA_FAILED 
});


//manageditSolution

export const manageditSolutionPageDataStart = () => ({
  type: actionTypes.MANAGEDIT_SOLUTION_PAGE_DATA_START 
});

export const manageditSolutionDataSuccess = (data) => ({
    type: actionTypes.MANAGEDIT_SOLUTION_DATA_SUCCEEDED, payload: data 
});

export const manageditSolutionDataError = () => ({
   type: actionTypes.MANAGEDIT_SOLUTION_DATA_FAILED 
});

//manageditUvation
export const manageditUvationPageDataStart = () => ({
  type: actionTypes.MANAGEDIT_UVATION_PAGE_DATA_START 
});

export const manageditUvationDataSuccess = (data) => ({
    type: actionTypes.MANAGEDIT_UVATION_DATA_SUCCEEDED, payload: data 
});

export const manageditUvationDataError = () => ({
   type: actionTypes.MANAGEDIT_UVATION_DATA_FAILED 
});

//manageditChat
export const manageditChatPageDataStart = () => ({
  type: actionTypes.MANAGEDIT_CHAT_PAGE_DATA_START 
});

export const manageditChatDataSuccess = (data) => ({
    type: actionTypes.MANAGEDIT_CHAT_DATA_SUCCEEDED, payload: data 
});

export const manageditChatDataError = () => ({
   type: actionTypes.MANAGEDIT_CHAT_DATA_FAILED 
});


//Managed It Page Ends

//workforce Page Starts

//workforceLanding

export const workforceLandingPageDataStart = () => ({
  type: actionTypes.WORKFORCE_LANDING_PAGE_DATA_START 
});

export const workforceLandingDataSuccess = (data) => ({
    type: actionTypes.WORKFORCE_LANDING_DATA_SUCCEEDED, payload: data 
});

export const workforceLandingDataError = () => ({
   type: actionTypes.WORKFORCE_LANDING_DATA_FAILED 
});


//workforceApproach

export const workforceApproachPageDataStart = () => ({
  type: actionTypes.WORKFORCE_APPROACH_PAGE_DATA_START 
});

export const workforceApproachDataSuccess = (data) => ({
    type: actionTypes.WORKFORCE_APPROACH_DATA_SUCCEEDED, payload: data 
});

export const workforceApproachDataError = () => ({
   type: actionTypes.WORKFORCE_APPROACH_DATA_FAILED 
});

//workforceReachOut

export const workforceReachOutPageDataStart = () => ({
  type: actionTypes.WORKFORCE_REACHOUT_PAGE_DATA_START 
});

export const workforceReachOutDataSuccess = (data) => ({
    type: actionTypes.WORKFORCE_REACHOUT_DATA_SUCCEEDED, payload: data 
});

export const workforceReachOutDataError = () => ({
   type: actionTypes.WORKFORCE_REACHOUT_DATA_FAILED 
});

//workforceDrives

export const workforceDrivesPageDataStart = () => ({
  type: actionTypes.WORKFORCE_DRIVES_PAGE_DATA_START 
});

export const workforceDrivesDataSuccess = (data) => ({
    type: actionTypes.WORKFORCE_DRIVES_DATA_SUCCEEDED, payload: data 
});

export const workforceDrivesDataError = () => ({
   type: actionTypes.WORKFORCE_DRIVES_DATA_FAILED 
});

//workforceSourcing

export const workforceSourcingPageDataStart = () => ({
  type: actionTypes.WORKFORCE_SOURCING_PAGE_DATA_START 
});

export const workforceSourcingDataSuccess = (data) => ({
    type: actionTypes.WORKFORCE_SOURCING_DATA_SUCCEEDED, payload: data 
});

export const workforceSourcingDataError = () => ({
   type: actionTypes.WORKFORCE_SOURCING_DATA_FAILED 
});

//workforceChat

export const workforceChatPageDataStart = () => ({
  type: actionTypes.WORKFORCE_CHAT_PAGE_DATA_START 
});

export const workforceChatDataSuccess = (data) => ({
    type: actionTypes.WORKFORCE_CHAT_DATA_SUCCEEDED, payload: data 
});

export const workforceChatDataError = () => ({
   type: actionTypes.WORKFORCE_CHAT_DATA_FAILED 
});



//workforce Page Ends


//cyberSecurity Page Starts

//cyberSecurityLanding

export const cyberSecurityLandingPageDataStart = () => ({
  type: actionTypes.CYBERSECURITY_LANDING_PAGE_DATA_START 
});

export const cyberSecurityLandingDataSuccess = (data) => ({
    type: actionTypes.CYBERSECURITY_LANDING_DATA_SUCCEEDED, payload: data 
});

export const cyberSecurityLandingDataError = () => ({
   type: actionTypes.CYBERSECURITY_LANDING_DATA_FAILED 
});

//cyberSecurityChat

export const cyberSecurityChatPageDataStart = () => ({
  type: actionTypes.CYBERSECURITY_CHAT_PAGE_DATA_START 
});

export const cyberSecurityChatDataSuccess = (data) => ({
    type: actionTypes.CYBERSECURITY_CHAT_DATA_SUCCEEDED, payload: data 
});

export const cyberSecurityChatDataError = () => ({
   type: actionTypes.CYBERSECURITY_CHAT_DATA_FAILED 
});

//cyberSecurity Page Ends

//Soc Page Starts

export const SocLandingPageDataStart = () => ({
  type: actionTypes.SOC_LANDING_PAGE_DATA_START 
});

export const SocLandingDataSuccess = (data) => ({
    type: actionTypes.SOC_LANDING_DATA_SUCCEEDED, payload: data 
});

export const SocLandingDataError = () => ({
   type: actionTypes.SOC_LANDING_DATA_FAILED 
});





//Soc Page Ends



























