import { createSelector } from "reselect";

const deployedData = (state) => state.landingPageReducer.deployData || [];

// console.log(deployedData,"landData")

export const  selectDeployData= createSelector(deployedData, (deployedData) => deployedData);
