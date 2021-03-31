import React, { useEffect, useRef } from 'react';
import { Tab, Tabs } from 'carbon-components-react';
import ManPhoto from './../../img/About/jdoe.png';

import { ArrowRight20 } from '@carbon/icons-react';
import Footer from '../Homepage/Footer/Footer';
import MainHeader from '../Homepage/Mainheader/MainHeader';

const PeopleCard = ({ para, heading, icon }) => (
  <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4'>
    <div className='people-image-card'>
      <div>
        <img src={ManPhoto} alt='' />
      </div>
      <div className='image--card--detail'>
        <p>{para}Chief Executive Officer</p>
        <h4>{heading}John Doe</h4>
        <div className='icon'>
          {icon} <ArrowRight20 />
        </div>
      </div>
    </div>
  </div>
);

export const Leadership = () => (
  <div className='bx--grid bx--no-gutter '>
    <div className='bx--row bx--no-gutter '>
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
    </div>
  </div>
);

const scrollToRef = (ref) => window.scrollTo(0, 0);
const People = () => {
  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
  }, []);
  return (
    <>
      <MainHeader />
      <div className='people' ref={myRef}>
        <div className='bx--grid--full-width banner'>
          <div className='bx--grid '>
            <div className='bx--row'>
              <div className='bx--col-lg-7 bx--no-gutter--right'>
                <div className='heading '>
                  <h1>People of Uvation</h1>
                </div>
                <div className='sub-heading'>
                  <p>
                    We work with our partners to boost their revenue growth,
                    expand markets and geographic reach, facilitate sales
                    process, and enhance product and service offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bx--grid--full-width people-row'>
          <div className='bx--grid'>
            <div className='bx--row '>
              <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4  bx--col-md-4  bx--col-sm-4'>
                <div className='about--our'>
                  <h6>ABOUT OUR</h6>
                  <h3>People</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc maximus quam eu porta molestie. Fusce et vulputate
                    metus, ac sagittis risus.
                  </p>
                </div>
              </div>
              <div className='bx--col bx--offset-lg-1 bx--col-md-8  bx--col-sm-15  '>
                <div className='people--desc'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc maximus quam eu porta molestie. Fusce et vulputate
                    metus, ac sagittis risus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nunc maximus quam eu porta
                    molestie. Fusce et vulputate metus, ac sagittis risus. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    maximus quam eu porta molestie. Fusce et vulputate metus, ac
                    sagittis risus.
                  </p>
                </div>
              </div>
            </div>
            <div className='bx--row'>
              <div className='leadership'>
                <Tabs>
                  <Tab id='tab-1' label='Leadership'>
                    <div>
                      <Leadership />
                    </div>
                  </Tab>
                  <Tab id='tab-1' label='Board Members'>
                    <div>
                      <Leadership />
                    </div>
                  </Tab>
                  <Tab id='tab-1' label='Executives'>
                    <div>
                      <Leadership />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default People;
