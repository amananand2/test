import React, { useEffect, useRef } from 'react';
import { Button, Tab, Tabs } from 'carbon-components-react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  CustomerService,
  Advocate,
} from '@carbon/pictograms-react';

import {
  Phone16,
  Email16,
  Settings16,
  ArrowRight16,
  ArrowDown16,
} from '@carbon/icons-react';
import MoreContactUs from './MoreContactUs';
import Footer from '../Homepage/Footer/Footer';
import MainHeader from '../Homepage/Mainheader/MainHeader';
// import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import { Loading } from "carbon-components-react";
import {reachUsPageDataStart,moreContactUsPageDataStart} from "../../actions/index";


export const InfoCard = ({ icon, source }) => (
  <div className='details'>
    <div>{icon}</div>
    <p>{source}</p>
  </div>
);

const scrollToRef = () =>
  window.scrollTo({
    top: -56,
    behavior: 'smooth',
  });
const scrollToRef1 = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 200,
    behavior: 'smooth',
  });

const ContactUs = ({reachUsPageDataStart,moreContactUsPageDataStart,reachUsData}) => {
  const myRef = useRef(null);
  const myRef1 = useRef(null);

  const executeScroll = () => scrollToRef(myRef);
  const executeScroll1 = () => scrollToRef1(myRef1);

  useEffect(() => {
    executeScroll();
    reachUsPageDataStart();
    moreContactUsPageDataStart();
  }, []);

  // const reachUsData = useSelector(state => state.landingPageReducer.reachUsData);

  // console.log(reachUsData && reachUsData.help_centers && reachUsData.help_centers[0].help_centers_description ,"reachUsData")


  function TabsContent() {
    return (
      <>
        <div className='bx--row'>
          <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
            <div className='heading'>
              <h2>{reachUsData && reachUsData.reach_us_top_heading}</h2>
              <h6>{reachUsData && reachUsData.reach_us_heading}</h6>
            </div>

            <div className='line'></div>

            <div className='desc'>
              <p>
              {reachUsData && reachUsData.reach_us_description}
              </p>
            </div>
          </div>

          <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
            <div className='heading'>
              <ShoppingCart />
              <h3> {reachUsData && reachUsData.clint_heading}</h3>
            </div>
            <div className='line'></div>

            <div className='info--cards'>
              <h6>{reachUsData && reachUsData.client_services && reachUsData.client_services[0].general_inquiries[0].genral_heading}</h6>
              <InfoCard
                icon={<Phone16 />}
                source={`${reachUsData && reachUsData.client_services && reachUsData.client_services[0].general_inquiries[0].genral_phone} (North America)`}
              />
              <InfoCard icon={<Email16 />} source={reachUsData && reachUsData.client_services && reachUsData.client_services[0].general_inquiries[0].genral_message} />
            </div>
            <div className='info--cards'>
              <h6>{reachUsData && reachUsData.client_services && reachUsData.client_services[0].sales_assistance[0].sales_heading}</h6>
              <InfoCard
                icon={<Phone16 />}
                source={`${reachUsData && reachUsData.client_services && reachUsData.client_services[0].sales_assistance[0].sales_phone} (North America)`}
              />
              <InfoCard icon={<Email16 />} source={reachUsData && reachUsData.client_services && reachUsData.client_services[0].sales_assistance[0].sales_message} />
            </div>
            <div className='info--cards'>
              <h6>{reachUsData && reachUsData.client_services && reachUsData.client_services[0].billing_accounts[0].billing_heading}</h6>
              <InfoCard
                icon={<Phone16 />}
                source={`${reachUsData && reachUsData.client_services && reachUsData.client_services[0].billing_accounts[0].billing_phone} (North America)`}
              />
              <InfoCard icon={<Email16 />} source={reachUsData && reachUsData.client_services && reachUsData.client_services[0].billing_accounts[0].billing_message} />
              <InfoCard icon={<Email16 />} source={reachUsData && reachUsData.client_services && reachUsData.client_services[0].billing_accounts[0].billing_email} />
            </div>
            <div className='info--cards'>
              <h6>{reachUsData && reachUsData.client_services && reachUsData.client_services[0].online_store[0].store_heading}</h6>
              <InfoCard
                icon={<Phone16 />}
                source={`${reachUsData && reachUsData.client_services && reachUsData.client_services[0].online_store[0].store_phone} (North America)`}
              />
              <InfoCard icon={<Email16 />} source={reachUsData && reachUsData.client_services && reachUsData.client_services[0].online_store[0].store_message}  />
            </div>
          </div>

          <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
            <div className='heading'>
              <CustomerService />
              <h3>{reachUsData && reachUsData.technical_heading}</h3>
            </div>
            <div className='line'></div>
            <div className='info--cards'>
              <h6>{reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].services_support[0].services_heading}</h6>
              <h5>
              {reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].services_support[0].services_description}
              </h5>
              <InfoCard
                icon={<Phone16 />}
                source={ `${ reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].services_support[0].services_phone} (North America)`} 
              />
              <InfoCard icon={<Email16 />} source={ reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].services_support[0].services_email} />
              <InfoCard
                icon={<Settings16 />}
                source={<Link to='#'>Open a Service Request</Link>}
              />
            </div>

            <div className='info--cards'>
              <h6>{reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].incident[0].incident_heading}</h6>
              <h5>
              {reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].incident[0].incident_description}     
              </h5>
              <InfoCard
                icon={<Phone16 />}
                source={`${reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].incident[0].incident_phone} (North America)`}
              />
              <InfoCard icon={<Email16 />} source={reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].incident[0].incident_email} />
              <InfoCard
                icon={<Settings16 />}
                source={<Link to='#'>Submit a SOCIncident Request</Link>}
              />
            </div>

            <div className='info--cards'>
              <h6>{reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].contracts_services[0].contracts_services_heading}</h6>
              <h5>
                {reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].contracts_services[0].contracts_services_description}
              </h5>
              <InfoCard
                icon={<Phone16 />}
                source={`${reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].contracts_services[0].contracts_services_phone}(North America)`}
              />
              <InfoCard icon={<Email16 />} source={reachUsData && reachUsData.technical_support && reachUsData.technical_support[0].contracts_services[0].contracts_services_email} />
              <InfoCard
                icon={<Settings16 />}
                source={
                  <Link to='#'>
                    To open a Service Request login to the cloud portal
                  </Link>
                }
              />
            </div>
          </div>

          <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
            <div className='heading'>
              <Advocate />
              <h3>{reachUsData && reachUsData.help_centers && reachUsData.help_centers[0].help_heading}</h3>
            </div>
            <div className='line'></div>

            <div className='help-center'>
              <p>
                {reachUsData && reachUsData.help_centers && reachUsData.help_centers[0].help_centers_description}
              </p>
              <div className='help-btn'>
                <Button kind='secondary' size='small' renderIcon={ArrowRight16}>
                  Help Center
                </Button>
              </div>
            </div>

            <div className='help-center'>
              <p>
              {reachUsData && reachUsData.help_centers && reachUsData.help_centers[0].help_centers_description}
               
              </p>
              <div className='help-btn'>
                <Button kind='secondary' size='small' renderIcon={ArrowRight16}>
                  Cloud portal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading active={reachUsData.contactPageLoader}/>
      <MainHeader />
      <div
        className='bx--grid--full-width '
        style={{
          paddingTop: '2rem',
          paddingBottom: '3.5rem',
          background: '#ffffff',
          zIndex: '7',
          position: 'sticky',
          top: '3.5rem',
        }}
      >
        <div className='bx--grid bx--no-gutter'>
          <div style={{}}>
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      <div className='bx--grid--full-width contact-us'>
        <div className='contact__top'>
          <div className='bx--grid bx--no-gutter'>
            <div className='see__more'>
              <div className='more-contact'>
                <div onClick={executeScroll1}>
                  <p style={{ zIndex: '8' }}>
                    More contact options
                    <ArrowDown16 />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Tabs
              className='contact__tabs'
              // style={{
              //   background: '#ffffff',
              //   zIndex: '8',
              //   position: 'fixed',
              //   top: '9.6rem',
              // }}
            >
              <Tab label='How To Reach Us'>
                <div className='contact__tabs'>
                  <TabsContent heading={reachUsData && reachUsData.reach_us_top_heading} subHeading={reachUsData && reachUsData.reach_us_heading} desc={reachUsData && reachUsData.reach_us_description} />
                </div>
              </Tab>

              <Tab label='Regional Locations'>
                <div className='contact__tabs'>
                  <TabsContent />
                </div>
              </Tab>

              <Tab label='North America'>
                <div className='contact__tabs'>
                  <TabsContent />
                </div>
              </Tab>

              <Tab label='Latin America'>
                <div className='contact__tabs'>
                  <TabsContent />
                </div>
              </Tab>

              <Tab label='Europe'>
                <div className='contact__tabs'>
                  <TabsContent />
                </div>
              </Tab>

              <Tab label='Asia'>
                <div className='contact__tabs'>
                  <TabsContent />
                </div>
              </Tab>

              <Tab label='Africa'>
                <div className='contact__tabs'>
                  <TabsContent />
                </div>
              </Tab>

              <Tab label='Middle East'>
                <div className='contact__tabs'>
                  <TabsContent />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div ref={myRef1}>
          <MoreContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  reachUsData: state.landingPageReducer.reachUsData,

});

const mapDispatchToProps = (dispatch) => ({

  reachUsPageDataStart: () => dispatch(reachUsPageDataStart()),
  moreContactUsPageDataStart: () => dispatch(moreContactUsPageDataStart()),
 
  //moreContactUsPageDataStart
});


export default connect(mapStateToProps,mapDispatchToProps)(ContactUs);

