import { combineReducers } from 'redux';

import landingPageReducer from "./landingPage"

import careerPageReducer from "./careerPage"

import partnershipPageReducer from "./partnershipPage"

import peoplePageReducer from "./peoplePage"

import InvestorRelationPageReducer from "./investorRelationsPage"

import technologyPageReducer from "./technologyPage"

import applicationPageReducer from "./applicationPage"

import cloudPageReducer from "./cloudPage"

import dataCenterPageReducer from "./dataCenterPage"

import manageditPageReducer from "./manageditPage"

import workforcePageReducer from "./workforcePage"

import socPageReducer from "./socPage"







export const reducers = combineReducers({ 
    landingPageReducer,
    careerPageReducer,
    partnershipPageReducer,
    peoplePageReducer,
    InvestorRelationPageReducer,
    technologyPageReducer,
    applicationPageReducer,
    cloudPageReducer,
    dataCenterPageReducer,
    manageditPageReducer,
    workforcePageReducer,
    socPageReducer 
});
