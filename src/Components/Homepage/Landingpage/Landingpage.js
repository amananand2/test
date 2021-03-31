import React, { useEffect, useState } from 'react';
import { ArrowRight16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import { BannerCard } from './BannerCards';


const Landingpage = ({landingData}) => {
  // const [pageData, setpageData] = useState('');

  // const Apicall = async () => {
  //   const response = await axios.get(
  //     'http://192.168.101.110/wordpress-uvation/all-apis/?method=home_page'
  //   );
  //   const data = await response.data;
  //   setpageData(data);
  // };

  // useEffect(() => {
  //   landingPageDataStart();
  // }, []);

  // console.log(landingData,"count");

  return (
    <div className='bx--grid--full-width homepage'>
      <div className='bx--row banner' style={{ backgroundImage: "url('')" }}>
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
              Contact us
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



export default Landingpage;

