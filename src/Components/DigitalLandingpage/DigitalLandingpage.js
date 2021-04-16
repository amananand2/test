import {
  ArrowDown20,
  ArrowRight16,
  ArrowRight20,
  Chat16,
  Code24,
  Launch16,
  Phone16,
} from '@carbon/icons-react';
import { Button, Column, Grid, Row } from 'carbon-components-react';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterBotm from '../Homepage/Footer/FooterBotm';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import headerBg from './../../img/DigitalLandingpage/line-1@2x.png';
import bottomBg from './../../img/cybersecurity/bottom.png';
import superior from './../../img/managedsecurity/superior.png';
import {
  Build,
  ChartCustom,
  ChipCircuit,
  CloudPakForData,
  SystemsDevopsCode,
} from '@carbon/pictograms-react';

const DigitalLandingpage = () => {
  return (
    <div className='digitalLanding'>
      <MainHeader />
      <Grid
        fullWidth
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: 'cover',
          backgroundrepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Row className='digitalLanding__banner'>
          <Code24 />

          <Column lg={16} className='title'>
            <p>digital</p>
          </Column>
          <Column lg={12} className='heading'>
            <h1>Take the digitalization of your business to the next level</h1>
          </Column>
          <Column lg={10} className='subheading'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              facilisis nisi. Ut aliquet lacus cursus purus convallis, ac cursus
              purus euismod. Etiam malesuada posuere justo, ac efficitur dui
              lobortis et. Mauris scelerisque sollicitudin eleifend. Aenean
              efficitur lorem sed nisl consectetur, eu vestibulum arcu bibendum.
            </p>
          </Column>
          <Column lg={10}>
            <div className='learnmore'>
              <Button renderIcon={ArrowDown20}>See more</Button>

              <Button renderIcon={ArrowRight20} kind='ghost'>
                Contact Us
              </Button>
            </div>
          </Column>
        </Row>
      </Grid>

      {/* image rows */}
      <Grid fullWidth className='cybersecurity__cardbox'>
        <Row condensed>
          <Column lg={8}>
            <div
              className='cardbox__img'
              style={{
                backgroundImage: `url(${superior})`,
                backgroundSize: 'cover',
                backgroundrepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            >
              {/* <img src={superior} alt='' /> */}
            </div>
          </Column>
          <Column lg={8}>
            <Column lg={{ span: 10, offset: 3 }}>
              <div className='card'>
                <ChartCustom />
                <div className='card__heading'>
                  <h3>Analytics & Big Data</h3>
                </div>
                <div className='card__para'>
                  <p>
                    In a business landscape filled with personal devices, public
                    networks, and various endpoints, there’s no shortage of
                    data. Harnessing the power of that data requires an
                    analytics and big data platform. With the right platform,
                    you can harvest the data you need to better inform new
                    strategies and confirm the effectiveness of existing plans
                  </p>
                </div>
                <div className='card__button'>
                  <Button as={Link} to='#' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Column>

          <Column lg={8}>
            <Column lg={{ span: 10, offset: 3 }}>
              <div className='card'>
                <CloudPakForData />
                <div className='card__heading'>
                  <h3>Artificial Intelligence</h3>
                </div>
                <div className='card__para'>
                  <p>
                    Artificial intelligence (AI) can add new levels of
                    efficiency to your business in areas like data analytics,
                    process automation, and customer service, and security.
                    Uvation can help you build an AI strategy for your business
                    to leverage these benefits and others. We can even help you
                    manage change within your organization as part of an
                    overarching digital transformation. Drive maximum business
                    value in your organization through the power of artificial
                    intelligence.
                  </p>
                </div>
                <div className='card__button'>
                  <Button as={Link} to='#' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Column>
          <Column lg={8}>
            <div
              className='cardbox__img'
              style={{
                backgroundImage: `url(${superior})`,
                backgroundSize: 'cover',
                backgroundrepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            >
              {/* <img src={superior} alt='' /> */}
            </div>
          </Column>

          <Column lg={8}>
            <div
              className='cardbox__img'
              style={{
                backgroundImage: `url(${headerBg})`,
                backgroundSize: 'cover',
                backgroundrepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            >
              {/* <img src={superior} alt='' /> */}
            </div>
          </Column>
          <Column lg={8}>
            <Column lg={{ span: 10, offset: 3 }}>
              <div className='card'>
                <Build />
                <div className='card__heading'>
                  <h3>Internet of Things</h3>
                </div>
                <div className='card__para'>
                  <p>
                    Internet of Things (IoT) technology enables you to turn the
                    machines, devices, and other physical objects your company
                    owns into aggregators of operational data. Connect your
                    company’s devices to a digital hub to generate digital
                    intelligence you can use to power your business strategy.
                    Leverage the internet to communicate with devices across the
                    world, so you can fuel your digital transformation. Turn
                    your physical assets into data-generating machines with IoT
                    technology.
                  </p>
                </div>
                <div className='card__button'>
                  <Button as={Link} to='#' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Column>
          <Column lg={8}>
            <Column lg={{ span: 10, offset: 3 }}>
              <div className='card'>
                <ChipCircuit />
                <div className='card__heading'>
                  <h3>Edge Computing</h3>
                </div>
                <div className='card__para'>
                  <p>
                    Edge computing provides organizations with unprecedented
                    application speed while paving the way for enhanced
                    versatility. When data is gathered and processed at the
                    edge, businesses can glean data regarding customer behavior,
                    equipment operation, and the edge devices themselves. If you
                    want to take advantage of low-latency data processing and
                    analysis, an edge computing solution can pave the way. Even
                    with an architecture that incorporates IoT devices, with the
                    right security in place, you can keep your network safe.
                  </p>
                </div>
                <div className='card__button'>
                  <Button as={Link} to='#' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Column>
          <Column lg={8}>
            <div
              className='cardbox__img'
              style={{
                backgroundImage: `url(${superior})`,
                backgroundSize: 'cover',
                backgroundrepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            >
              {/* <img src={superior} alt='' /> */}
            </div>
          </Column>

          <Column lg={8}>
            <div
              className='cardbox__img'
              style={{
                backgroundImage: `url(${headerBg})`,
                backgroundSize: 'cover',
                backgroundrepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            >
              {/* <img src={superior} alt='' /> */}
            </div>
          </Column>
          <Column lg={8}>
            <Column lg={{ span: 10, offset: 3 }}>
              <div className='card'>
                <SystemsDevopsCode />
                <div className='card__heading'>
                  <h3>DevOps & WebOps</h3>
                </div>
                <div className='card__para'>
                  <p>
                    Both DevOps and WebOps bring together teams of professionals
                    to create novel opportunities for efficient app development.
                    The principles and habits of mind powering DevOps and WebOps
                    are as important as the actual strategies they engender.
                    Regardless of the scale of your development operation, using
                    DevOps and WebOps can result in more productive and agile
                    processes that benefit not only your internal teams but the
                    end users they serve.
                  </p>
                </div>
                <div className='card__button'>
                  <Button as={Link} to='#' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Column>
        </Row>
      </Grid>

      {/* get in touch */}
      <Grid
        fullWidth
        className='cybersecurity__getinTouch'
        style={{
          backgroundImage: `linear-gradient(90deg,#010101,#010101E1,#00000000),url(${bottomBg})`,
          backgroundSize: 'cover',
          backgroundrepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Row condensed>
          <Column lg={8}>
            <Column lg={{ span: 13, offset: 3 }} sm={16}>
              <div className='cybersecurity__getinTouch__content'>
                <div className='heading'>
                  <h2>Get in touch with us</h2>
                </div>
                <div className='slogenLine'>
                  <p>Threats never sleep. Neither do we.</p>
                </div>
                <Column lg={{ span: 9 }} className='subheading'>
                  <p>
                    Get in touch for a consultation call or answer to any
                    questions you might have.
                  </p>
                </Column>
                <div className='getInbutton'>
                  <Button className='lrg-btn' renderIcon={Phone16}>
                    Call Us
                  </Button>
                  <Button kind='ghost' renderIcon={Chat16}>
                    Live chat
                  </Button>
                </div>
              </div>
            </Column>
          </Column>
          <Column lg={8}>
            <div className='sendus'>
              <div className='largeBtnSet'>
                <Button
                  as={Link}
                  to='#'
                  renderIcon={ArrowRight16}
                  size='xl'
                  className='left'
                >
                  Send us a message
                </Button>
                <Button
                  as={Link}
                  to='#'
                  renderIcon={ArrowRight16}
                  size='xl'
                  className='right'
                >
                  Request a meeting
                </Button>
              </div>
            </div>
          </Column>
        </Row>
      </Grid>
      <FooterBotm />
    </div>
  );
};

export default DigitalLandingpage;
