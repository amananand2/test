import { put, takeLatest, all, call } from 'redux-saga/effects';
import actionTypes from "../actions/types";
import {landingPageDataSuccess,landingPageDataError,deployPageDataSuccess,deployPageDataError,
  expertisePageDataSuccess,expertisePageDataError,caseStudiesPageDataSuccess,caseStudiesPageDataError,captionPageDataSuccess,captionPageDataError,
  newsRoomPageDataSuccess,newsRoomPageDataError,historyPageDataSuccess,historyPageDataError,getInTouchPageDataSuccess,getInTouchPageDataError,uvationPageDataSuccess,
  uvationPageDataError,companyPageDataSuccess,companyPageDataError,brandPageDataSuccess,brandPageDataError,servicePageDataSuccess,servicePageDataError,
  peoplePageDataSuccess,peoplePageDataError,aboutHistoryPageDataSuccess,aboutHistoryPageDataError,reachUsPageDataSuccess,reachUsPageDataError,
  moreContactUsDataSuccess,moreContactUsDataError,industriesDataSuccess,industriesDataError,featuredDataSuccess,featuredDataError,futureIndustriesDataSuccess,
  futureIndustriesDataError,workWithDataSuccess,workWithDataError,resourcesDataSuccess,resourcesDataError,exploreDataSuccess,exploreDataError,innovationDataSuccess,
  innovationDataError,featuredInnovationDataSuccess,featuredInnovationDataError,recommendedDataSuccess,recommendedDataError,contentDataSuccess,contentDataError,
  innovationExploreDataSuccess,innovationExploreDataError,careerDataSuccess,careerDataError,careerUvationDataSuccess,careerUvationDataError,applyingDataSuccess,
  applyingDataError,jobDataSuccess,jobDataError,questionsDataSuccess,questionsDataError,partnershipDataSuccess,partnershipDataError,discoverDataSuccess,discoverDataError,
  channelDataSuccess,channelDataError,peoplesDataSuccess,peoplesDataError,teamPeopleDataSuccess,teamPeopleDataError,investorInformationDataSuccess,
  investorInformationDataError,investorNewsDataSuccess,investorNewsDataError,investorUvationDataSuccess,investorUvationDataError,investorWantDataSuccess,investorWantDataError,
  investorHeadingDataSuccess,investorHeadingDataError,TechnologyHeadingDataSuccess,TechnologyHeadingDataError,applicationDataSuccess,applicationDataError,
  benefitsDataSuccess,benefitsDataError,developDataSuccess,developDataError,businessDataSuccess,businessDataError,applicationTabsDataSuccess,applicationTabsDataError,
  applicationChatDataSuccess,applicationChatDataError,businessLandingDataSuccess,businessLandingDataError,resiliencyDataSuccess,resiliencyDataError,improveDataSuccess,
  improveDataError,businessChatDataSuccess,businessChatDataError,cloudLandingDataSuccess,cloudLandingDataError,cloudBenifitsDataSuccess,cloudBenifitsDataError,
  cloudGetDataSuccess,cloudGetDataError,cloudComputingDataSuccess,cloudComputingDataError,cloudUniqueDataSuccess,cloudUniqueDataError,
  cloudDifferentDataSuccess,cloudDifferentDataError,cloudChatDataSuccess,cloudChatDataError,centerLandingDataSuccess,centerLandingDataError,
  centerBenifitsDataSuccess,centerBenifitsDataError,centerDeployDataSuccess,centerDeployDataError,centerExplainedDataSuccess,centerExplainedDataError,
  centerServicesDataSuccess,centerServicesDataError,centerTechnologiesDataSuccess,centerTechnologiesDataError,centerChatDataSuccess,centerChatDataError,
  manageditLandingDataSuccess,manageditLandingDataError,manageditBenefitsDataSuccess,manageditBenefitsDataError,manageditIncorporateDataSuccess,
  manageditIncorporateDataError,manageditManagedDataSuccess,manageditManagedDataError,manageditSolutionDataSuccess,manageditSolutionDataError,
  manageditUvationDataSuccess,manageditUvationDataError,manageditChatDataSuccess,manageditChatDataError,workforceLandingDataSuccess,workforceLandingDataError,
  workforceApproachDataSuccess,workforceApproachDataError,workforceReachOutDataSuccess,workforceReachOutDataError,workforceDrivesDataSuccess,
  workforceDrivesDataError,workforceSourcingDataSuccess,workforceSourcingDataError,workforceChatDataSuccess,workforceChatDataError,cyberSecurityLandingDataSuccess,
  cyberSecurityLandingDataError,cyberSecurityChatDataSuccess,cyberSecurityChatDataError,SocLandingDataSuccess,SocLandingDataError} from "../actions/index";

import {HomeData,AboutData,ContactData,IndustriesData,InnovationData,CareerData,PartnershipData,
        PeopleData,InvestorRelationsData,InvestorSlaData,technologyData,applicationData,businessResiliencyData, cloudData,dataCenterData,
        manageditData,workforceData,cyberSecurityData,socPageData} from "../service.js";


function* helloSaga() {
  console.log('Hello Sagas!')
}

function* watchLandingPageData() {
  yield takeLatest(actionTypes.LANDING_PAGE_DATA_START, fetchLandingPageDataAsync);
}

function* fetchLandingPageDataAsync() {
  try {
      const response = yield call(HomeData.fetchsection1);
		const { data } = response;
    
    // console.log(data,"data");
    yield put(landingPageDataSuccess(data));
  } catch (error) {
    yield put(landingPageDataError());
  }
}

function* watchDeployPageData() {
  yield takeLatest(actionTypes.DEPLOY_PAGE_DATA_START, fetchDeployPageDataAsync);
}

function* fetchDeployPageDataAsync() {
  try {
      const response = yield call(HomeData.deploy);
		const { data } = response;
    
    // console.log(data,"data");
    yield put(deployPageDataSuccess(data));
  } catch (error) {
    yield put(deployPageDataError());
  }
}

//EXPERTISE

function* watchExpertisePageData() {
  yield takeLatest(actionTypes.EXPERTISE_PAGE_DATA_START, fetchExpertisePageDataAsync);
}

function* fetchExpertisePageDataAsync() {
  try {
      const response = yield call(HomeData.expertise);
		const { data } = response;
    
    // console.log(data,"data");
    yield put(expertisePageDataSuccess(data));
  } catch (error) {
    yield put(expertisePageDataError());
  }
}

//CASE STUDIES

function* watchCaseStudiesPageData() {
  yield takeLatest(actionTypes.CASE_STUDIES_PAGE_DATA_START, fetchCaseStudiesPageDataAsync);
}

function* fetchCaseStudiesPageDataAsync() {
  try {
      const response = yield call(HomeData.casestudies);
		const { data } = response;
    
    // console.log(data,"data");
    yield put(caseStudiesPageDataSuccess(data));
  } catch (error) {
    yield put(caseStudiesPageDataError());
  }
}

//caption

function* watchCaptionPageData() {
  yield takeLatest(actionTypes.CAPTION_PAGE_DATA_START, fetchCaptionPageDataAsync);
}

function* fetchCaptionPageDataAsync() {
  try {
      const response = yield call(HomeData.caption);
		const { data } = response;
    
    // console.log(data,"data");
    yield put(captionPageDataSuccess(data));
  } catch (error) {
    yield put(captionPageDataError());
  }
}


//NEWSROOM

function* watchNewsRoomPageData() {
  yield takeLatest(actionTypes.NEWS_ROOM_PAGE_DATA_START, fetchNewsRoomDataAsync);
}

function* fetchNewsRoomDataAsync() {
  try {
      const response = yield call(HomeData.newsroom);
		const { data } = response;
    
    // console.log(data,"data");
    yield put(newsRoomPageDataSuccess(data));
  } catch (error) {
    yield put(newsRoomPageDataError());
  }
}


//history

function* watchHistoryPageData() {
  yield takeLatest(actionTypes.HISTORY_PAGE_DATA_START, fetchHistoryDataAsync);
}

function* fetchHistoryDataAsync() {
  try {
      const response = yield call(HomeData.history);
		const { data } = response;
    
    // console.log(data,"data");
    yield put(historyPageDataSuccess(data));
  } catch (error) {
    yield put(historyPageDataError());
  }
}


//getintouch

function* watchGetInTouchPageData() {
  yield takeLatest(actionTypes.GET_IN_TOUCH_PAGE_DATA_START, fetchGetInTouchDataAsync);
}

function* fetchGetInTouchDataAsync() {
  try {
      const response = yield call(HomeData.getintouch);
		const { data } = response;
    
    // console.log(data,"data");
    yield put(getInTouchPageDataSuccess(data));
  } catch (error) {
    yield put(getInTouchPageDataError());
  }
}

//ABOUT PAGE STARTS

//Uvation

function* watchUvationPageData() {
  yield takeLatest(actionTypes.UVATION_PAGE_DATA_START, fetchUvationDataAsync);
}

function* fetchUvationDataAsync() {
  try {
      const response = yield call(AboutData.uvation);
		const { data } = response;
    
    // consoAboutog(data,"data");
    yield put(uvationPageDataSuccess(data));
  } catch (error) {
    yield put(uvationPageDataError());
  }
}


//companyData

function* watchCompanyPageData() {
  yield takeLatest(actionTypes.COMPANY_PAGE_DATA_START, fetchCompanyDataAsync);
}

function* fetchCompanyDataAsync() {
  try {
      const response = yield call(AboutData.company);
		const { data } = response;
    
    // consoAboutog(data,"data");
    yield put(companyPageDataSuccess(data));
  } catch (error) {
    yield put(companyPageDataError());
  }
}

//brandData

function* watchBrandPageData() {
  yield takeLatest(actionTypes.BRAND_PAGE_DATA_START, fetchBrandDataAsync);
}

function* fetchBrandDataAsync() {
  try {
      const response = yield call(AboutData.brand);
		const { data } = response;
    
    // consoAboutog(data,"data");
    yield put(brandPageDataSuccess(data));
  } catch (error) {
    yield put(brandPageDataError());
  }
}

//service

function* watchServicePageData() {
  yield takeLatest(actionTypes.SERVICE_PAGE_DATA_START, fetchServiceDataAsync);
}

function* fetchServiceDataAsync() {
  try {
      const response = yield call(AboutData.services);
		const { data } = response;
    
    // consoAboutog(data,"data");
    yield put(servicePageDataSuccess(data));
  } catch (error) {
    yield put(servicePageDataError());
  }
}
//people

function* watchPeoplePageData() {
  yield takeLatest(actionTypes.PEOPLE_PAGE_DATA_START, fetchPeopleDataAsync);
}

function* fetchPeopleDataAsync() {
  try {
      const response = yield call(AboutData.people);
		const { data } = response;
    
    // consoAboutog(data,"data");
    yield put(peoplePageDataSuccess(data));
  } catch (error) {
    yield put(peoplePageDataError());
  }
}

//history

function* watchAboutHistoryPageData() {
  yield takeLatest(actionTypes.ABOUT_HISTORY_PAGE_DATA_START, fetchAboutHistoryDataAsync);
}

function* fetchAboutHistoryDataAsync() {
  try {
      const response = yield call(AboutData.history);
		const { data } = response;
    
    // consoAboutog(data,"data");
    yield put(aboutHistoryPageDataSuccess(data));
  } catch (error) {
    yield put(aboutHistoryPageDataError());
  }
}


//ABOUT PAGE ENDS

//Contact Us page Starts

//reach us

function* watchReachUsPageData() {
  yield takeLatest(actionTypes.REACH_US_PAGE_DATA_START, fetchReachUsDataAsync);
}

function* fetchReachUsDataAsync() {
  try {
      const response = yield call(ContactData.reachus);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(reachUsPageDataSuccess(data));
  } catch (error) {
    yield put(reachUsPageDataError());
  }
}

//morecontactus

function* watchMoreContactUsPageData() {
  yield takeLatest(actionTypes.MORE_CONTACT_US_PAGE_DATA_START, fetchMoreContactUsDataAsync);
}

function* fetchMoreContactUsDataAsync() {
  try {
      const response = yield call(ContactData.morecontactus);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(moreContactUsDataSuccess(data));
  } catch (error) {
    yield put(moreContactUsDataError());
  }
}


//Contact us page Ends

//Industries page starts

//industries

function* watchIndustriesPageData() {
  yield takeLatest(actionTypes.INDUSTRIES_PAGE_DATA_START, fetchIndustriesDataAsync);
}

function* fetchIndustriesDataAsync() {
  try {
      const response = yield call(IndustriesData.industries);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(industriesDataSuccess(data));
  } catch (error) {
    yield put(industriesDataError());
  }
}

//featured

function* watchFeaturedPageData() {
  yield takeLatest(actionTypes.FEATURED_PAGE_DATA_START, fetchFeaturedDataAsync);
}

function* fetchFeaturedDataAsync() {
  try {
      const response = yield call(IndustriesData.featured);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(featuredDataSuccess(data));
  } catch (error) {
    yield put(featuredDataError());
  }
}

//futureIndustries

function* watchFutureIndustriesPageData() {
  yield takeLatest(actionTypes.FUTURE_INDUSTRIES_PAGE_DATA_START, fetchFutureIndustriesDataAsync);
}

function* fetchFutureIndustriesDataAsync() {
  try {
      const response = yield call(IndustriesData.futureindustries);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(futureIndustriesDataSuccess(data));
  } catch (error) {
    yield put(futureIndustriesDataError());
  }
}

//workWith

function* watchworkWithPageData() {
  yield takeLatest(actionTypes.WORK_WITH_PAGE_DATA_START, fetchworkWithDataAsync);
}

function* fetchworkWithDataAsync() {
  try {
      const response = yield call(IndustriesData.workwith);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(workWithDataSuccess(data));
  } catch (error) {
    yield put(workWithDataError());
  }
}

//resources

function* watchResourcesPageData() {
  yield takeLatest(actionTypes.RESOURCES_PAGE_DATA_START, fetchResourcesDataAsync);
}

function* fetchResourcesDataAsync() {
  try {
      const response = yield call(IndustriesData.resources);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(resourcesDataSuccess(data));
  } catch (error) {
    yield put(resourcesDataError());
  }
}

//explore

function* watchExplorePageData() {
  yield takeLatest(actionTypes.EXPLORE_PAGE_DATA_START, fetchExploreDataAsync);
}

function* fetchExploreDataAsync() {
  try {
      const response = yield call(IndustriesData.explore);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(exploreDataSuccess(data));
  } catch (error) {
    yield put(exploreDataError());
  }
}


//Industries page Ends

//Innovation page starts

//Innovation

function* watchInnovationPageData() {
  yield takeLatest(actionTypes.INNOVATION_PAGE_DATA_START, fetchInnovationDataAsync);
}

function* fetchInnovationDataAsync() {
  try {
      const response = yield call(InnovationData.innovation);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(innovationDataSuccess(data));
  } catch (error) {
    yield put(innovationDataError());
  }
}

//Featured Innovation

function* watchFeaturedInnovationPageData() {
  yield takeLatest(actionTypes.FEATURED_INNOVATION_PAGE_DATA_START, fetchFeaturedInnovationDataAsync);
}

function* fetchFeaturedInnovationDataAsync() {
  try {
      const response = yield call(InnovationData.featuredinnovation);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(featuredInnovationDataSuccess(data));
  } catch (error) {
    yield put(featuredInnovationDataError());
  }
}

//recommended

function* watchRecommendedPageData() {
  yield takeLatest(actionTypes.RECOMMENDED_PAGE_DATA_START, fetchRecommendedDataAsync);
}

function* fetchRecommendedDataAsync() {
  try {
      const response = yield call(InnovationData.recommended);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(recommendedDataSuccess(data));
  } catch (error) {
    yield put(recommendedDataError());
  }
}

//Content

function* watchContentPageData() {
  yield takeLatest(actionTypes.CONTENT_PAGE_DATA_START, fetchContentDataAsync);
}

function* fetchContentDataAsync() {
  try {
      const response = yield call(InnovationData.content);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(contentDataSuccess(data));
  } catch (error) {
    yield put(contentDataError());
  }
}

//Innovation Explore

function* watchInnovationExploreData() {
  yield takeLatest(actionTypes.INNOVATION_EXPLORE_PAGE_DATA_START, fetchInnovationExploreAsync);
}

function* fetchInnovationExploreAsync() {
  try {
      const response = yield call(InnovationData.explore);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(innovationExploreDataSuccess(data));
  } catch (error) {
    yield put(innovationExploreDataError());
  }
}

//INNOVATION PAGE ENDS

//CAREER PAGE STARTS

//career

function* watchCareerPageData() {
  yield takeLatest(actionTypes.CAREER_PAGE_DATA_START, fetchCareerPageAsync);
}

function* fetchCareerPageAsync() {
  try {
      const response = yield call(CareerData.career);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(careerDataSuccess(data));
  } catch (error) {
    yield put(careerDataError());
  }
}

//career uvation

function* watchCareerUvationPageData() {
  yield takeLatest(actionTypes.CAREER_UVATION_PAGE_DATA_START, fetchCareerUvationPageAsync);
}

function* fetchCareerUvationPageAsync() {
  try {
      const response = yield call(CareerData.uvation);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(careerUvationDataSuccess(data));
  } catch (error) {
    yield put(careerUvationDataError());
  }
}

//applying

function* watchApplyingPageData() {
  yield takeLatest(actionTypes.APPLYING_PAGE_DATA_START, fetchApplyingPageAsync);
}

function* fetchApplyingPageAsync() {
  try {
      const response = yield call(CareerData.applying);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(applyingDataSuccess(data));
  } catch (error) {
    yield put(applyingDataError());
  }
}

//job

function* watchJobPageData() {
  yield takeLatest(actionTypes.JOB_PAGE_DATA_START, fetchJobPageAsync);
}

function* fetchJobPageAsync() {
  try {
      const response = yield call(CareerData.job);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(jobDataSuccess(data));
  } catch (error) {
    yield put(jobDataError());
  }
}

//questions

function* watchQuestionsPageData() {
  yield takeLatest(actionTypes.QUESTIONS_PAGE_DATA_START, fetchQuestionsPageAsync);
}

function* fetchQuestionsPageAsync() {
  try {
      const response = yield call(CareerData.questions);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(questionsDataSuccess(data));
  } catch (error) {
    yield put(questionsDataError());
  }
}


//carrer page ends

//partnership page starts

//partnership

function* watchPartnershipPageData() {
  yield takeLatest(actionTypes.PARTNERSHIP_PAGE_DATA_START, fetchPartnershipPageAsync);
}

function* fetchPartnershipPageAsync() {
  try {
      const response = yield call(PartnershipData.partnership);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(partnershipDataSuccess(data));
  } catch (error) {
    yield put(partnershipDataError());
  }
}

//discover

function* watchDiscoverPageData() {
  yield takeLatest(actionTypes.DISCOVER_PAGE_DATA_START, fetchDiscoverPageAsync);
}

function* fetchDiscoverPageAsync() {
  try {
      const response = yield call(PartnershipData.discover);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(discoverDataSuccess(data));
  } catch (error) {
    yield put(discoverDataError());
  }
}

//channel

function* watchChannelPageData() {
  yield takeLatest(actionTypes.CHANNEL_PAGE_DATA_START, fetchChannelPageAsync);
}

function* fetchChannelPageAsync() {
  try {
      const response = yield call(PartnershipData.channel);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(channelDataSuccess(data));
  } catch (error) {
    yield put(channelDataError());
  }
}


//partnership page ends


//people page starts

//peoples

function* watchPeoplesPageData() {
  yield takeLatest(actionTypes.PEOPLES_PAGE_DATA_START, fetchPeoplesPageAsync);
}

function* fetchPeoplesPageAsync() {
  try {
      const response = yield call(PeopleData.people);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(peoplesDataSuccess(data));
  } catch (error) {
    yield put(peoplesDataError());
  }
}


//teamPeople

function* watchTeamPeoplePageData() {
  yield takeLatest(actionTypes.PEOPLES_PAGE_DATA_START, fetchTeamPeoplePageAsync);
}

function* fetchTeamPeoplePageAsync() {
  try {
      const response = yield call(PeopleData.teampeople);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(teamPeopleDataSuccess(data));
  } catch (error) {
    yield put(teamPeopleDataError());
  }
}

//people page ends


//Investor Relations page Starts

//information

function* watchInvestorInformationPageData() {
  yield takeLatest(actionTypes.INVESTOR_INFORMATION_PAGE_DATA_START, fetchInvestorInformationPageAsync);
}

function* fetchInvestorInformationPageAsync() {
  try {
      const response = yield call(InvestorRelationsData.information);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(investorInformationDataSuccess(data));
  } catch (error) {
    yield put(investorInformationDataError());
  }
}

//news


function* watchInvestorNewsPageData() {
  yield takeLatest(actionTypes.INVESTOR_INFORMATION_PAGE_DATA_START, fetchInvestorNewsPageAsync);
}

function* fetchInvestorNewsPageAsync() {
  try {
      const response = yield call(InvestorRelationsData.news);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(investorNewsDataSuccess(data));
  } catch (error) {
    yield put(investorNewsDataError());
  }
}

//uvation

function* watchInvestorUvationPageData() {
  yield takeLatest(actionTypes.INVESTOR_UVATION_PAGE_DATA_START, fetchInvestorUvationPageAsync);
}

function* fetchInvestorUvationPageAsync() {
  try {
      const response = yield call(InvestorRelationsData.uvation);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(investorUvationDataSuccess(data));
  } catch (error) {
    yield put(investorUvationDataError());
  }
}

//want

function* watchInvestorWantPageData() {
  yield takeLatest(actionTypes.INVESTOR_WANT_PAGE_DATA_START, fetchInvestorWantPageAsync);
}

function* fetchInvestorWantPageAsync() {
  try {
      const response = yield call(InvestorRelationsData.want);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(investorWantDataSuccess(data));
  } catch (error) {
    yield put(investorWantDataError());
  }
}

//Investor Relations page Ends

//Investor Sla page Starts

//heading

function* watchInvestorHeadingPageData() {
  yield takeLatest(actionTypes.INVESTOR_HEADING_PAGE_DATA_START, fetchInvestorHeadingPageAsync);
}

function* fetchInvestorHeadingPageAsync() {
  try {
      const response = yield call(InvestorSlaData.heading);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(investorHeadingDataSuccess(data));
  } catch (error) {
    yield put(investorHeadingDataError());
  }
}

//Investor Sla page Ends

//Technology Page Starts

function* watchTechnologyHeadingPageData() {
  yield takeLatest(actionTypes.TECHNOLOGY_HEADING_PAGE_DATA_START, fetchTechnologyHeadingPageAsync);
}

function* fetchTechnologyHeadingPageAsync() {
  try {
      const response = yield call(technologyData.heading);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(TechnologyHeadingDataSuccess(data));
  } catch (error) {
    yield put(TechnologyHeadingDataError());
  }
}

//Technology Page Ends


//Application Page Starts

//application

function* watchApplicationPageData() {
  yield takeLatest(actionTypes.APPLICATION_PAGE_DATA_START, fetchApplicationPageAsync);
}

function* fetchApplicationPageAsync() {
  try {
      const response = yield call(applicationData.application);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(applicationDataSuccess(data));
  } catch (error) {
    yield put(applicationDataError());
  }
}

//benefits

function* watchBenefitsPageData() {
  yield takeLatest(actionTypes.APPLICATION_PAGE_DATA_START, fetchBenefitsPageAsync);
}

function* fetchBenefitsPageAsync() {
  try {
      const response = yield call(applicationData.benefits);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(benefitsDataSuccess(data));
  } catch (error) {
    yield put(benefitsDataError());
  }
}


//develop

function* watchDevelopPageData() {
  yield takeLatest(actionTypes.APPLICATION_PAGE_DATA_START, fetchDevelopPageAsync);
}

function* fetchDevelopPageAsync() {
  try {
      const response = yield call(applicationData.develop);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(developDataSuccess(data));
  } catch (error) {
    yield put(developDataError());
  }
}

//business

function* watchBusinessPageData() {
  yield takeLatest(actionTypes.BUSINESS_PAGE_DATA_START, fetchBusinessPageAsync);
}

function* fetchBusinessPageAsync() {
  try {
      const response = yield call(applicationData.business);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(businessDataSuccess(data));
  } catch (error) {
    yield put(businessDataError());
  }
}

//applicationTabs

function* watchApplicationTabsPageData() {
  yield takeLatest(actionTypes.APPLICATION_TABS_PAGE_DATA_START, fetchApplicationTabsPageAsync);
}

function* fetchApplicationTabsPageAsync() {
  try {
      const response = yield call(applicationData.tabs);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(applicationTabsDataSuccess(data));
  } catch (error) {
    yield put(applicationTabsDataError());
  }
}


//chat

function* watchApplicationChatPageData() {
  yield takeLatest(actionTypes.APPLICATION_CHAT_PAGE_DATA_START, fetchApplicationChatPageAsync);
}

function* fetchApplicationChatPageAsync() {
  try {
      const response = yield call(applicationData.chat);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(applicationChatDataSuccess(data));
  } catch (error) {
    yield put(applicationChatDataError());
  }
}




//Application Page Ends


//Business Resiliency Page Starts

//business Landing

function* watchBusinessLandingPageData() {
  yield takeLatest(actionTypes.BUSINESS_LANDING_PAGE_DATA_START, fetchBusinessLandingPageAsync);
}

function* fetchBusinessLandingPageAsync() {
  try {
      const response = yield call(businessResiliencyData.business);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(businessLandingDataSuccess(data));
  } catch (error) {
    yield put(businessLandingDataError());
  }
}

//resiliency

function* watchResiliencyPageData() {
  yield takeLatest(actionTypes.RESILIENCY_PAGE_DATA_START, fetchResiliencyPageAsync);
}

function* fetchResiliencyPageAsync() {
  try {
      const response = yield call(businessResiliencyData.resiliency);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(resiliencyDataSuccess(data));
  } catch (error) {
    yield put(resiliencyDataError());
  }
}


//improve

function* watchImprovePageData() {
  yield takeLatest(actionTypes.IMPROVE_PAGE_DATA_START, fetchImprovePageAsync);
}

function* fetchImprovePageAsync() {
  try {
      const response = yield call(businessResiliencyData.improve);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(improveDataSuccess(data));
  } catch (error) {
    yield put(improveDataError());
  }
}

//chat

function* watchBusinessChatPageData() {
  yield takeLatest(actionTypes.BUSINESS_CHAT_PAGE_DATA_START, fetchBusinessChatPageAsync);
}

function* fetchBusinessChatPageAsync() {
  try {
      const response = yield call(businessResiliencyData.chat);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(businessChatDataSuccess(data));
  } catch (error) {
    yield put(businessChatDataError());
  }
}


//Business Resiliency Page Ends

//cloud Page Starts

//cloudLanding

function* watchCloudLandingPageData() {
  yield takeLatest(actionTypes.CLOUD_LANDING_PAGE_DATA_START, fetchCloudLandingPageAsync);
}

function* fetchCloudLandingPageAsync() {
  try {
      const response = yield call(cloudData.cloud);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(cloudLandingDataSuccess(data));
  } catch (error) {
    yield put(cloudLandingDataError());
  }
}

//cloudBenifits

function* watchCloudBenifitsPageData() {
  yield takeLatest(actionTypes.CLOUD_BENIFITS_PAGE_DATA_START, fetchCloudBenifitsPageAsync);
}

function* fetchCloudBenifitsPageAsync() {
  try {
      const response = yield call(cloudData.benefits);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(cloudBenifitsDataSuccess(data));
  } catch (error) {
    yield put(cloudBenifitsDataError());
  }
}

//cloudGet

function* watchCloudGetPageData() {
  yield takeLatest(actionTypes.CLOUD_GET_PAGE_DATA_START, fetchCloudGetPageAsync);
}

function* fetchCloudGetPageAsync() {
  try {
      const response = yield call(cloudData.get);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(cloudGetDataSuccess(data));
  } catch (error) {
    yield put(cloudGetDataError());
  }
}

//CloudComputing

function* watchCloudComputingPageData() {
  yield takeLatest(actionTypes.CLOUD_COMPUTING_PAGE_DATA_START, fetchCloudComputingPageAsync);
}

function* fetchCloudComputingPageAsync() {
  try {
      const response = yield call(cloudData.cloudcomputing);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(cloudComputingDataSuccess(data));
  } catch (error) {
    yield put(cloudComputingDataError());
  }
}

//cloudUnique

function* watchCloudUniquePageData() {
  yield takeLatest(actionTypes.CLOUD_UNIQUE_PAGE_DATA_START, fetchCloudUniquePageAsync);
}

function* fetchCloudUniquePageAsync() {
  try {
      const response = yield call(cloudData.cloudunique);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(cloudUniqueDataSuccess(data));
  } catch (error) {
    yield put(cloudUniqueDataError());
  }
}


// clouddifferent

//CloudDifferent

function* watchCloudDifferentPageData() {
  yield takeLatest(actionTypes.CLOUD_DIFFERENT_PAGE_DATA_START, fetchCloudDifferentPageAsync);
}

function* fetchCloudDifferentPageAsync() {
  try {
      const response = yield call(cloudData.clouddifferent);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(cloudDifferentDataSuccess(data));
  } catch (error) {
    yield put(cloudDifferentDataError());
  }
}

//CloudChat

function* watchCloudChatPageData() {
  yield takeLatest(actionTypes.CLOUD_CHAT_PAGE_DATA_START, fetchCloudChatPageAsync);
}

function* fetchCloudChatPageAsync() {
  try {
      const response = yield call(cloudData.cloudchat);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(cloudChatDataSuccess(data));
  } catch (error) {
    yield put(cloudChatDataError());
  }
}


//cloud Page Ends

//Data Center Page Starts

//centerLanding

function* watchCenterLandingPageData() {
  yield takeLatest(actionTypes.CENTER_LANDING_PAGE_DATA_START, fetchCenterLandingPageAsync);
}

function* fetchCenterLandingPageAsync() {
  try {
      const response = yield call(dataCenterData.datacenter);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(centerLandingDataSuccess(data));
  } catch (error) {
    yield put(centerLandingDataError());
  }
}

//centerBenifits

function* watchCenterBenifitsPageData() {
  yield takeLatest(actionTypes.CENTER_BENIFITS_PAGE_DATA_START, fetchCenterBenifitsPageAsync);
}

function* fetchCenterBenifitsPageAsync() {
  try {
      const response = yield call(dataCenterData.benefits);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(centerBenifitsDataSuccess(data));
  } catch (error) {
    yield put(centerBenifitsDataError());
  }
}

//centerDeploy

function* watchCenterDeployPageData() {
  yield takeLatest(actionTypes.CENTER_BENIFITS_PAGE_DATA_START, fetchCenterDeployPageAsync);
}

function* fetchCenterDeployPageAsync() {
  try {
      const response = yield call(dataCenterData.deploy);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(centerDeployDataSuccess(data));
  } catch (error) {
    yield put(centerDeployDataError());
  }
}

//centerExplained

function* watchCenterExplainedPageData() {
  yield takeLatest(actionTypes.CENTER_EXPLAINED_PAGE_DATA_START, fetchCenterExplainedPageAsync);
}

function* fetchCenterExplainedPageAsync() {
  try {
      const response = yield call(dataCenterData.explained);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(centerExplainedDataSuccess(data));
  } catch (error) {
    yield put(centerExplainedDataError());
  }
}

//centerServices

function* watchCenterServicesPageData() {
  yield takeLatest(actionTypes.CENTER_SERVICES_PAGE_DATA_START, fetchCenterServicesPageAsync);
}

function* fetchCenterServicesPageAsync() {
  try {
      const response = yield call(dataCenterData.centerservices);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(centerServicesDataSuccess(data));
  } catch (error) {
    yield put(centerServicesDataError());
  }
}

//centerTechnologies

function* watchCenterTechnologiesPageData() {
  yield takeLatest(actionTypes.CENTER_TECHNOLOGIES_PAGE_DATA_START, fetchCenterTechnologiesPageAsync);
}

function* fetchCenterTechnologiesPageAsync() {
  try {
      const response = yield call(dataCenterData.technologies);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(centerTechnologiesDataSuccess(data));
  } catch (error) {
    yield put(centerTechnologiesDataError());
  }
}

//centerChat

function* watchCenterChatPageData() {
  yield takeLatest(actionTypes.CENTER_TECHNOLOGIES_PAGE_DATA_START, fetchCenterChatPageAsync);
}

function* fetchCenterChatPageAsync() {
  try {
      const response = yield call(dataCenterData.chat);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(centerChatDataSuccess(data));
  } catch (error) {
    yield put(centerChatDataError());
  }
}

//Data Center Page Ends

//Managed It Page Starts

//ManageditLanding

function* watchManageditLandingPageData() {
  yield takeLatest(actionTypes.MANAGEDIT_LANDING_PAGE_DATA_START, fetchManageditLandingPageAsync);
}

function* fetchManageditLandingPageAsync() {
  try {
      const response = yield call(manageditData.landing);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(manageditLandingDataSuccess(data));
  } catch (error) {
    yield put(manageditLandingDataError());
  }
}

//ManageditBenifits

function* watchManageditBenifitsPageData() {
  yield takeLatest(actionTypes.MANAGEDIT_BENEFITS_PAGE_DATA_START, fetchManageditBenifitsPageAsync);
}

function* fetchManageditBenifitsPageAsync() {
  try {
      const response = yield call(manageditData.benefits);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(manageditBenefitsDataSuccess(data));
  } catch (error) {
    yield put(manageditBenefitsDataError());
  }
}

//ManageditInCorporate

function* watchManageditInCorporatePageData() {
  yield takeLatest(actionTypes.MANAGEDIT_INCORPORATE_PAGE_DATA_START, fetchManageditInCorporatePageAsync);
}

function* fetchManageditInCorporatePageAsync() {
  try {
      const response = yield call(manageditData.incorporate);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(manageditIncorporateDataSuccess(data));
  } catch (error) {
    yield put(manageditIncorporateDataError());
  }
}

//ManageditManaged

function* watchManageditManagedPageData() {
  yield takeLatest(actionTypes.MANAGEDIT_MANAGED_PAGE_DATA_START, fetchManageditManagedPageAsync);
}

function* fetchManageditManagedPageAsync() {
  try {
      const response = yield call(manageditData.managed);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(manageditManagedDataSuccess(data));
  } catch (error) {
    yield put(manageditManagedDataError());
  }
}

//ManageditSolution

function* watchManageditSolutionPageData() {
  yield takeLatest(actionTypes.MANAGEDIT_SOLUTION_PAGE_DATA_START, fetchManageditSolutionPageAsync);
}

function* fetchManageditSolutionPageAsync() {
  try {
      const response = yield call(manageditData.solution);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(manageditSolutionDataSuccess(data));
  } catch (error) {
    yield put(manageditSolutionDataError());
  }
}

//ManageditUvation

function* watchManageditUvationPageData() {
  yield takeLatest(actionTypes.MANAGEDIT_SOLUTION_PAGE_DATA_START, fetchManageditUvationPageAsync);
}

function* fetchManageditUvationPageAsync() {
  try {
      const response = yield call(manageditData.uvation);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(manageditUvationDataSuccess(data));
  } catch (error) {
    yield put(manageditUvationDataError());
  }
}

//ManageditChat

function* watchManageditChatPageData() {
  yield takeLatest(actionTypes.MANAGEDIT_CHAT_PAGE_DATA_START, fetchManageditChatPageAsync);
}

function* fetchManageditChatPageAsync() {
  try {
      const response = yield call(manageditData.chat);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(manageditChatDataSuccess(data));
  } catch (error) {
    yield put(manageditChatDataError());
  }
}

//Managed It Page Ends

//Workforce Page Starts

//WorkforceLanding

function* watchWorkforceLandingPageData() {
  yield takeLatest(actionTypes.WORKFORCE_LANDING_PAGE_DATA_START, fetchWorkforceLandingPageAsync);
}

function* fetchWorkforceLandingPageAsync() {
  try {
      const response = yield call(workforceData.landing);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(workforceLandingDataSuccess(data));
  } catch (error) {
    yield put(workforceLandingDataError());
  }
}

//WorkforceApproach

function* watchWorkForceApproachPageData() {
  yield takeLatest(actionTypes.WORKFORCE_APPROACH_PAGE_DATA_START, fetchWorkForceApproachPageAsync);
}

function* fetchWorkForceApproachPageAsync() {
  try {
      const response = yield call(workforceData.approach);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(workforceApproachDataSuccess(data));
  } catch (error) {
    yield put(workforceApproachDataError());
  }
}

//WorkforceReachOut

function* watchWorkforceReachOutPageData() {
  yield takeLatest(actionTypes.WORKFORCE_REACHOUT_PAGE_DATA_START, fetchWorkforceReachOutPageAsync);
}

function* fetchWorkforceReachOutPageAsync() {
  try {
      const response = yield call(workforceData.reachout);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(workforceReachOutDataSuccess(data));
  } catch (error) {
    yield put(workforceReachOutDataError());
  }
}

//WorkforceDrives

function* watchWorkforceDrivesPageData() {
  yield takeLatest(actionTypes.WORKFORCE_DRIVES_PAGE_DATA_START, fetchWorkforceDrivesPageAsync);
}

function* fetchWorkforceDrivesPageAsync() {
  try {
      const response = yield call(workforceData.drives);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(workforceDrivesDataSuccess(data));
  } catch (error) {
    yield put(workforceDrivesDataError());
  }
}

//WorkforceSourcing

function* watchWorkforceSourcingPageData() {
  yield takeLatest(actionTypes.WORKFORCE_SOURCING_PAGE_DATA_START, fetchWorkforceSourcingPageAsync);
}

function* fetchWorkforceSourcingPageAsync() {
  try {
      const response = yield call(workforceData.sourcing);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(workforceSourcingDataSuccess(data));
  } catch (error) {
    yield put(workforceSourcingDataError());
  }
}

//WorkforceChat

function* watchWorkforceChatPageData() {
  yield takeLatest(actionTypes.WORKFORCE_CHAT_PAGE_DATA_START, fetchWorkforceChatPageAsync);
}

function* fetchWorkforceChatPageAsync() {
  try {
      const response = yield call(workforceData.chat);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(workforceChatDataSuccess(data));
  } catch (error) {
    yield put(workforceChatDataError());
  }
}

//Workforce Page Ends

//CyberSecurityLanding Page Starts

//CyberSecurityLanding

function* watchCyberSecurityLandingPageData() {
  yield takeLatest(actionTypes.CYBERSECURITY_LANDING_PAGE_DATA_START, fetchCyberSecurityLandingPageAsync);
}

function* fetchCyberSecurityLandingPageAsync() {
  try {
      const response = yield call(cyberSecurityData.landing);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(cyberSecurityLandingDataSuccess(data));
  } catch (error) {
    yield put(cyberSecurityLandingDataError());
  }
}

//CyberSecurityChat

function* watchCyberSecurityChatPageData() {
  yield takeLatest(actionTypes.CYBERSECURITY_LANDING_PAGE_DATA_START, fetchCyberSecurityChatPageAsync);
}

function* fetchCyberSecurityChatPageAsync() {
  try {
      const response = yield call(cyberSecurityData.chat);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(cyberSecurityChatDataSuccess(data));
  } catch (error) {
    yield put(cyberSecurityChatDataError());
  }
}



//CyberSecurityLanding Page Ends


//Soc Page Starts

//SocLanding

function* watchSocLandingPageData() {
  yield takeLatest(actionTypes.SOC_LANDING_PAGE_DATA_START, fetchSocLandingChatPageAsync);
}

function* fetchSocLandingChatPageAsync() {
  try {
      const response = yield call(socPageData.landing);
		  const { data } = response;    
    // consoAboutog(data,"data");
    yield put(SocLandingDataSuccess(data));
  } catch (error) {
    yield put(SocLandingDataError());
  }
}

//Soc Page Ends



export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchLandingPageData(),
    watchDeployPageData(),
    watchExpertisePageData(),
    watchCaseStudiesPageData(),
    watchCaptionPageData(),
    watchNewsRoomPageData(),
    watchHistoryPageData(),
    watchGetInTouchPageData(),
    watchUvationPageData(),
    watchCompanyPageData(),
    watchBrandPageData(),
    watchServicePageData(),
    watchPeoplePageData(),
    watchAboutHistoryPageData(),
    watchReachUsPageData(),
    watchMoreContactUsPageData(),
    watchIndustriesPageData(),
    watchFeaturedPageData(),
    watchFutureIndustriesPageData(),
    watchworkWithPageData(),
    watchResourcesPageData(),
    watchExplorePageData(),
    watchInnovationPageData(),
    watchFeaturedInnovationPageData(),
    watchRecommendedPageData(),
    watchContentPageData(),
    watchInnovationExploreData(),
    watchCareerPageData(),
    watchCareerUvationPageData(),
    watchApplyingPageData(),
    watchJobPageData(),
    watchQuestionsPageData(),
    watchPartnershipPageData(),
    watchDiscoverPageData(),
    watchChannelPageData(),
    watchPeoplesPageData(),
    watchTeamPeoplePageData(),
    watchInvestorInformationPageData(),
    watchInvestorNewsPageData(),
    watchInvestorUvationPageData(),
    watchInvestorWantPageData(),
    watchInvestorHeadingPageData(),
    watchTechnologyHeadingPageData(),
    watchApplicationPageData(),
    watchBenefitsPageData(),
    watchDevelopPageData(),
    watchBusinessPageData(),
    watchApplicationTabsPageData(),
    watchApplicationChatPageData(),
    watchBusinessLandingPageData(),
    watchResiliencyPageData(),
    watchImprovePageData(),
    watchBusinessChatPageData(),
    watchCloudLandingPageData(),
    watchCloudBenifitsPageData(),
    watchCloudGetPageData(),
    watchCloudComputingPageData(),
    watchCloudUniquePageData(),
    watchCloudDifferentPageData(),
    watchCloudChatPageData(),
    watchCenterLandingPageData(),
    watchCenterBenifitsPageData(),
    watchCenterDeployPageData(),
    watchCenterExplainedPageData(),
    watchCenterServicesPageData(),
    watchCenterTechnologiesPageData(),
    watchCenterChatPageData(),
    watchManageditLandingPageData(),
    watchManageditBenifitsPageData(),
    watchManageditInCorporatePageData(),
    watchManageditManagedPageData(),
    watchManageditSolutionPageData(),
    watchManageditUvationPageData(),
    watchManageditChatPageData(),
    watchWorkforceLandingPageData(),
    watchWorkForceApproachPageData(),
    watchWorkforceReachOutPageData(),
    watchWorkforceDrivesPageData(),
    watchWorkforceSourcingPageData(),
    watchWorkforceChatPageData(),
    watchCyberSecurityLandingPageData(),
    watchCyberSecurityChatPageData(),
    watchSocLandingPageData()
  ])
}