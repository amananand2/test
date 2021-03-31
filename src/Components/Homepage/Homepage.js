import { Chat32 } from '@carbon/icons-react';
import React, { useEffect, useRef } from 'react';
import CaseStudy from './Casestudy/Casestudy';
import ContentTop from './Contentdriven/ContentTop';
import Deploy from './Deploy/Deploy';
import Footer from './Footer/Footer';
import Landingpage from './Landingpage/Landingpage';
import MainHeader from './Mainheader/MainHeader';
import MapSection from './Mapsection/MapSection';
import ImSlider from './Ourhistory/ImSlider';
import {connect} from 'react-redux';
import {landingPageDataStart} from "../../actions/index";
// import OurHistoryPage from './Ourhistory/OurHistoryPage';

const scrollToRef = () => window.scrollTo(0, 0);

const Homepage = ({landingPageDataStart,landingData}) => {
  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
    landingPageDataStart();
  }, []);

  // console.log(landingData,"landingData");

  return (
    <div ref={myRef}>
      <MainHeader />
      <Landingpage landingData={landingData} />
      <Deploy landingData={landingData}/>
      <MapSection />
      <CaseStudy landingData={landingData}/>
      <ContentTop />
      <ImSlider />
      <Footer />
      <div className='chat-box'>
        <Chat32 />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  landingData: state.landingPageReducer.landingData
});

const mapDispatchToProps = (dispatch) => ({
  landingPageDataStart: () => dispatch(landingPageDataStart())
});


export default connect(mapStateToProps,mapDispatchToProps)(Homepage);

