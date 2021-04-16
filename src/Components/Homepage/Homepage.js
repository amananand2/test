import { Chat32 } from "@carbon/icons-react";
import React, { useEffect, useRef } from "react";
import CaseStudy from "./Casestudy/Casestudy";
import ContentTop from "./Contentdriven/ContentTop";
import Deploy from "./Deploy/Deploy";
import Footer from "./Footer/Footer";
import Landingpage from "./Landingpage/Landingpage";
import MainHeader from "./Mainheader/MainHeader";
import MapSection from "./Mapsection/MapSection";
import ImSlider from "./Ourhistory/ImSlider";
import { connect } from "react-redux";
import { historyPageDataStart } from "../../actions/index";
import { Link, NavLink } from "react-router-dom";
import { Loading } from "carbon-components-react";

// import OurHistoryPage from './Ourhistory/OurHistoryPage';

const scrollToRef = () => window.scrollTo(0, 0);

const Homepage = ({ landingData, historyPageDataStart, landingPageLoader,deployPageLoader,experisePageLoader,caseStudiesPageLoader,captionPageLoader,
  newsRoomPageLoader,historyPageLoader,getinTouchLoader }) => {
  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
    historyPageDataStart();
  }, []);

  // console.log(landingData.landingPage, "landingPageLoader");

  return (
    <>
    
      <div ref={myRef}>
      <Loading active={landingData.landingPage} />
        <MainHeader />
        <Landingpage landingData={landingData} />
        <Deploy landingData={landingData} />
        <MapSection />
        <CaseStudy landingData={landingData} />
        <ContentTop />
        <ImSlider />
        <Footer />
        <div className="chat-box">
          <Chat32 />
        </div>
      </div>
         
    </>
  );
};
const mapStateToProps = (state) => ({
  landingData: state.landingPageReducer.landingData,
  deployPageLoader: state.landingPageReducer.deployData.landingPage,
  experisePageLoader: state.landingPageReducer.expertiseData.landingPage,
  caseStudiesPageLoader: state.landingPageReducer.caseStudiesData.landingPage,
  captionPageLoader: state.landingPageReducer.captionData.landingPage,
  newsRoomPageLoader: state.landingPageReducer.newsRoomData.landingPage,
  historyPageLoader: state.landingPageReducer.historyData.landingPage,
  getinTouchLoader: state.landingPageReducer.getInTouchData.landingPage,
});

const mapDispatchToProps = (dispatch) => ({
  historyPageDataStart: () => dispatch(historyPageDataStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
