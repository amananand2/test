import React from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import ManPhoto from './../../img/About/jdoe.png';
// import { Link } from "react-router-dom";
import { ArrowRight20 } from '@carbon/icons-react';

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
export const PeopleLeadership = () => (
  <div className='bx--grid bx--no-gutter'>
    <div className='bx--row bx--no-gutter'>
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

const AboutPeople = () => {
  return (
    <div className='about-people bx--grid--full-width'>
      <div className='bx--grid bx--no-gutter '>
        <div className='bx--row'>
          <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4  bx--col-md-4  bx--col-sm-4'>
            <div className='about--our'>
              <h6>ABOUT OUR</h6>
              <h3>People</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                maximus quam eu porta molestie. Fusce et vulputate metus, ac
                sagittis risus.
              </p>
            </div>
          </div>
          <div className='bx--col bx--offset-lg-1 bx--col-md-8  bx--col-sm-15  '>
            <div className='people--desc'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                maximus quam eu porta molestie. Fusce et vulputate metus, ac
                sagittis risus. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc maximus quam eu porta molestie. Fusce et
                vulputate metus, ac sagittis risus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc maximus quam eu porta
                molestie. Fusce et vulputate metus, ac sagittis risus.
              </p>
            </div>
          </div>
        </div>

        <div className='bx--row'>
          <div className='people--tabs'>
            <Tabs>
              <Tab id='tab-1' label='Leadership'>
                <div>
                  <PeopleLeadership />
                </div>
              </Tab>
              <Tab id='tab-2' label='Information technology'>
                <div>
                  <PeopleLeadership />
                </div>
              </Tab>
              <Tab id='tab-3' label='Lorem ipsum'>
                <div>
                  <PeopleLeadership />
                </div>
              </Tab>
              <Tab id='tab-3' label='Lorem ipsum'>
                <div>
                  <PeopleLeadership />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPeople;
