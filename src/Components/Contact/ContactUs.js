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

const ContactUs = () => {
  const myRef = useRef(null);
  const myRef1 = useRef(null);

  const executeScroll = () => scrollToRef(myRef);
  const executeScroll1 = () => scrollToRef1(myRef1);

  useEffect(() => {
    executeScroll();
  }, []);

  function TabsContent() {
    return (
      <>
        <div className='bx--row'>
          <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
            <div className='heading'>
              <h2>How To Reach Us</h2>
              <h6>we are here to help</h6>
            </div>

            <div className='line'></div>

            <div className='desc'>
              <p>
                Contact us to learn more about ourproducts, solutions and
                services.
              </p>
            </div>
          </div>

          <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
            <div className='heading'>
              <ShoppingCart />
              <h3>Sales & Client Services</h3>
            </div>
            <div className='line'></div>

            <div className='info--cards'>
              <h6>General Inquiries</h6>
              <InfoCard
                icon={<Phone16 />}
                source='+1 855-721-1155 (North America)'
              />
              <InfoCard icon={<Email16 />} source='info@uvation.com' />
            </div>
            <div className='info--cards'>
              <h6>Sales Assistance</h6>
              <InfoCard
                icon={<Phone16 />}
                source='+1 855-721-1155 (North America)'
              />
              <InfoCard icon={<Email16 />} source='sales@uvation.com' />
            </div>
            <div className='info--cards'>
              <h6>Billing & Accounts</h6>
              <InfoCard
                icon={<Phone16 />}
                source='+1 855-721-1155 (North America))'
              />
              <InfoCard icon={<Email16 />} source='billing@uvation.com' />
              <InfoCard icon={<Email16 />} source='accounts@uvation.com' />
            </div>
            <div className='info--cards'>
              <h6>Online Store, Shopping & Shipping Assistance</h6>
              <InfoCard
                icon={<Phone16 />}
                source='+1 855-721-1155 (North America)'
              />
              <InfoCard icon={<Email16 />} source='store@uvation.com' />
            </div>
          </div>

          <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
            <div className='heading'>
              <CustomerService />
              <h3>Technical Support</h3>
            </div>
            <div className='line'></div>
            <div className='info--cards'>
              <h6>Contracts & Services support:</h6>
              <h5>
                Electronic service requests can be submitted for hardware or
                software under warranty or with a support contract.
              </h5>
              <InfoCard
                icon={<Phone16 />}
                source='+1 855-721-1155 (North America)'
              />
              <InfoCard icon={<Email16 />} source='support@uvation.com' />
              <InfoCard
                icon={<Settings16 />}
                source={<Link to='#'>Open a Service Request</Link>}
              />
            </div>

            <div className='info--cards'>
              <h6>SOC Incident Request:</h6>
              <h5>
                Electronic service requests can be submitted for hardware or
                software under warranty or with a support contract.
              </h5>
              <InfoCard
                icon={<Phone16 />}
                source='+1 855-721-1155 (North America)'
              />
              <InfoCard icon={<Email16 />} source='soc@uvation.com' />
              <InfoCard
                icon={<Settings16 />}
                source={<Link to='#'>Submit a SOCIncident Request</Link>}
              />
            </div>

            <div className='info--cards'>
              <h6>Contracts & Services support:</h6>
              <h5>
                Electronic service requests can be submitted for hardware or
                software under warranty or with a support contract.
              </h5>
              <InfoCard
                icon={<Phone16 />}
                source='+1 855-721-1155 (North America)'
              />
              <InfoCard icon={<Email16 />} source='support@xonode.com' />
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
              <h3>Help Centers</h3>
            </div>
            <div className='line'></div>

            <div className='help-center'>
              <p>
                Customer Service, Accounts & Billing, Ecommerce and General
                Support Requests, please use our Central Help Center:
              </p>
              <div className='help-btn'>
                <Button kind='secondary' size='small' renderIcon={ArrowRight16}>
                  Help Center
                </Button>
              </div>
            </div>

            <div className='help-center'>
              <p>
                Customer Service, Accounts & Billing, Ecommerce and General
                Support Requests, please use our Central Help Center:
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
                  <TabsContent />
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

export default ContactUs;
