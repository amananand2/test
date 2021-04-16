import React, { useEffect, useState } from 'react';
import { ArrowRight16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import { BannerCard } from './BannerCards';
import axios from "axios";
import {connect} from 'react-redux';
import {backgroundImage} from "../../../img/Homepage/Landingpage/banner.jpg"

import {landingPageDataStart} from "../../../actions/index";



const Landingpage = ({landingPageDataStart,landingData}) => {
  const [apiCall, setApiCall] = useState(true);

  // const Apicall = async () => {
  //   const response = await axios.get(
  //     'https://testurls.net/uvation/all-apis/?method=home_page&section_name=section1'
  //   );
  //   const data = await response.data;
  //   setlandingData(data);
  // };

  useEffect(() => {
    landingPageDataStart();    
  }, []);

// Apicall()


  // console.log(pageData,"pageData");
  // landingPageDataStart();
  return (
    <div className='bx--grid--full-width homepage'>
      <div className='bx--row banner' style={{ backgroundImage:{backgroundImage} }}>
        <div className='bx--grid ' style={{ width: '-webkit-fill-available' }}>
          <div className='bx--col-lg-8 bx--no-gutter a'>
            <p>
              {landingData && landingData.banner_heading}
            </p>
          </div>
          <div className='bx--col-lg-6 bx--no-gutter--left b'>
            <p>
            {landingData && landingData.banner_description}
            </p>
          </div>
          <div className='bx--col-lg-5 bx--no-gutter learn-more'>
            <Button renderIcon={ArrowRight16}>{landingData && landingData.learn_more_button_text}</Button>
            <Button renderIcon={ArrowRight16} kind='secondary'>
            {landingData && landingData.contact_button_text}
            </Button>
          </div>
        </div>
      </div>
      <div className='bx--row bx--no-gutter'>
        <BannerCard />
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


export default connect(mapStateToProps,mapDispatchToProps)(Landingpage);


