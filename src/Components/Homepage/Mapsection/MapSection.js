import { ArrowRight16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import React, { useState } from 'react';

import {
  Robotics,
  Medical,
  Satellite,
  University,
} from '@carbon/pictograms-react';

const HeaderVal = {
  title: 'OUR EXPERTISE',
  heading:
    'We are posivitely impacting a large number of industries, all over the world',
  about:
    'Over 3000 customers in 24 countries are relying on our products and services',
};

// const MapVal = [
//   {
//     icon: <Robotics />,
//     title: 'Manufacturing',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est.',
//   },
// ];

const SectionTitle = () => {
  return (
    <div className='bx--col-lg-5 bx--no-gutter--right '>
      <div className='header'>
        <div className='title'>
          <h6>{HeaderVal.title}</h6>
        </div>
        <div className='heading'>
          <h4>{HeaderVal.heading}</h4>
        </div>
        <div className='about'>
          <p>{HeaderVal.about}</p>
        </div>
      </div>
    </div>
  );
};

// const MapCards = (props) => {
//   return (
//     <div className='bx--col-lg-5 bx--col-sm-4 bx--no-gutter' {...props}>
//       <div className='map-cards'>
//         <div className='icon'>{props.icon}</div>
//         <div className='title'>
//           <h5>{props.title}</h5>
//         </div>
//         <div className='about'>
//           <p>{props.about}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MapCard = (val, index) => {
//   return (
//     <MapCards key={index} icon={val.icon} title={val.title} about={val.about} />
//   );
// };

// const Card = () => MapVal.map(MapCard);

const MapSection = () => {
  const [manufacture, setmanufacture] = useState(true);
  const [health, sethealth] = useState(false);
  const [education, seteducation] = useState(false);
  const [aerospace, setaerospace] = useState(false);

  const Manufacture = () => {
    setmanufacture(true);
    sethealth(false);
    seteducation(false);
    setaerospace(false);
  };
  const Health = () => {
    setmanufacture(false);
    sethealth(true);
    seteducation(false);
    setaerospace(false);
  };
  const Education = () => {
    setmanufacture(false);
    sethealth(false);
    seteducation(true);
    setaerospace(false);
  };
  const Aerospace = () => {
    setmanufacture(false);
    sethealth(false);
    seteducation(false);
    setaerospace(true);
  };

  return (
    <div className='mappage'>
      <div
        className='dots'
        style={{ top: '17%', left: '43%' }}
        onClick={Manufacture}
      >
        <span className={manufacture ? 'location actives' : 'location'}></span>
      </div>
      <div
        className='dots1'
        style={{ top: '26%', left: '50%' }}
        onClick={Health}
      >
        <span className={health ? 'location actives' : 'location'}></span>
      </div>
      <div
        className='dots2'
        style={{ top: '29%', left: '43%' }}
        onClick={Education}
      >
        <span className={education ? 'location actives' : 'location'}></span>
      </div>
      <div
        className='dots3'
        style={{ top: '47%', left: '50.5%' }}
        onClick={Aerospace}
      >
        <span className={aerospace ? 'location actives' : 'location'}></span>
      </div>
      <div className='map'>
        <div className='bx--grid'>
          <div className='bx--row bx--no-gutter'>
            <SectionTitle />
          </div>
          <div className='bx--row  card'>
            <div className='bx--col-lg-5 bx--col-sm-4 bx--no-gutter'>
              {manufacture ? (
                <div className='map-cards'>
                  <div className='slide'>
                    <div className='icon'>
                      <Robotics />
                    </div>
                    <div className='title'>
                      <h5>Manufacturing</h5>
                    </div>
                    <div className='about'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce quis urna congue est. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Fusce quis urna congue est.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {health ? (
                <div className='map-cards'>
                  <div className='slide'>
                    <div className='icon'>
                      <Medical />
                    </div>
                    <div className='title'>
                      <h5>Healthcare</h5>
                    </div>
                    <div className='about'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce quis urna congue est. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Fusce quis urna congue est.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {education ? (
                <div className='map-cards'>
                  <div className='slide'>
                    <div className='icon'>
                      <University />
                    </div>
                    <div className='title'>
                      <h5>Education</h5>
                    </div>
                    <div className='about'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce quis urna congue est. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Fusce quis urna congue est.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {aerospace ? (
                <div className='map-cards'>
                  <div className='slide'>
                    <div className='icon'>
                      <Satellite />
                    </div>
                    <div className='title'>
                      <h5>Aerospace & Defence</h5>
                    </div>
                    <div className='about'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce quis urna congue est. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Fusce quis urna congue est.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className='bx--grid '>
        <ul className='bx--col-lg-10 bx--col-sm-2 bx--no-gutter--left map-list'>
          <li>
            <h3>20</h3> <p>Maret</p>
          </li>
          <li className='list-sep'></li>
          <li>
            <h3>15 </h3> <p>Datacenter</p>
          </li>
          <li className='list-sep'></li>
          <li>
            <h3>200+</h3> <p>Carrier Access Points</p>
          </li>
          <li className='list-sep'></li>
          <li>
            <h3>50+</h3> <p>Lorem ipsum</p>
          </li>
          <li className='list-sep'></li>
          <li>
            <h3>50+</h3> <p>Lorem ipsum</p>
          </li>
        </ul>
      </div>
      <div className='btns'>
        <div className='learnmore '>
          <Button href='/' kind='primary' className='lrg-btn'>
            Learn more
            <div className='learn'>{<ArrowRight16 />}</div>
          </Button>
          <Button className='lrg-btn-right .lrg-btn' kind='secondary'>
            See all industries
            <div className='learn'>{<ArrowRight16 />}</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
