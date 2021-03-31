import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'carbon-components-react';

import {
  ArrowRight16,
  ArrowDown16,
  ArrowLeft16,
  PlayFilledAlt16,
  Chat16,
  Video16,
  TextLinkAnalysis16,
} from '@carbon/icons-react';

import {
  Satellite,
  GlobalCurrency,
  University,
  ChipCircuit,
  WindPower,
  Medical,
  Robotics,
  Shop,
  SatelliteDish,
} from '@carbon/pictograms-react';

import Volvo from './../../img/Industries/volvo.png';

import FooterBotm from '../Homepage/Footer/FooterBotm';
import MainHeader from '../Homepage/Mainheader/MainHeader';

const FeaturedCard = ({ pictoIcon, title }) => (
  <div className='bx--col bx--col-md-8 bx--col-sm-4'>
    <div className='card'>
      <div className='content'>
        <div className='pictoicon'>{pictoIcon}</div>
        <div className='title'>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  </div>
);

const FutureCard = () => (
  <div className='bx--col'>
    <div className='card--left'>
      <div className='pictogram'>
        <Robotics />
      </div>
      <div className='content'>
        <h6>CASE STUDY</h6>
        <h3>Manufacturing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          urna congue est. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Fusce quis urna congue est.
        </p>
      </div>
      <div className='button'>
        <Link to='#'>
          Learn more
          <div className='arrow'>
            <ArrowRight16 fill='#ffffff' />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 125,
    behavior: 'smooth',
  });
const scrollToRef1 = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 125,
    behavior: 'smooth',
  });
const scrollToRef2 = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 125,
    behavior: 'smooth',
  });
const scrollToRef3 = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 125,
    behavior: 'smooth',
  });
const scrollToRef4 = () => window.scrollTo(0, 0);

const Industries = () => {
  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);

  const executeScroll = () => scrollToRef(myRef);
  const executeScroll1 = () => scrollToRef1(myRef1);
  const executeScroll2 = () => scrollToRef2(myRef2);
  const executeScroll3 = () => scrollToRef3(myRef3);
  const executeScroll4 = () => scrollToRef4(myRef4);

  const [industries, setindustries] = useState(true);
  const [future, setfuture] = useState();
  const [work, setwork] = useState();
  const [insights, setinsights] = useState();

  function Industry() {
    setindustries(true);
    setfuture(false);
    setwork(false);
    setinsights(false);
    executeScroll();
  }

  function Future() {
    setindustries(false);
    setfuture(true);
    setwork(false);
    setinsights(false);
    executeScroll1();
  }

  function Work() {
    setindustries(false);
    setfuture(false);
    setwork(true);
    setinsights(false);
    executeScroll2();
  }
  function Insights() {
    setindustries(false);
    setfuture(false);
    setwork(false);
    setinsights(true);
    executeScroll3();
  }

  useEffect(() => {
    executeScroll4();
  }, []);

  const [ActiveDot, setActiveDot] = useState(true);

  const ActiveDotHandler = () => {
    setActiveDot(!ActiveDot);
  };

  return (
    <>
      <MainHeader />
      <div className='bx--grid--full-width industries'>
        <div className='bx--grid--full-width banner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-6 left'>
                <div className='heading'>
                  <h1>Industries</h1>
                </div>
                <div className='desc'>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Fusce quis urna congue est. Lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
                <div className='button'>
                  <Button className='see' renderIcon={ArrowDown16}>
                    See more
                  </Button>
                </div>
              </div>
              <div className='bx--col-lg-10 bx--no-gutter right'>
                <div className='banner-btn'>
                  <PlayFilledAlt16 className='play' />
                </div>
                <p>Play the video to see how</p>

                {/* <video
                  style={{ maxWidth: '100%', height: '100%' }}
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                    type='video/mp4'
                  />
                </video> */}
              </div>
            </div>
          </div>
        </div>

        <div className='bx--row bx--no-gutter   innovation__sections'>
          <div className='bx--col bx--col-md-4 bx--col-sm-4'>
            <div className='about--section' onClick={Industry}>
              <Link to='#' id='industries'>
                <div className={industries ? 'section-active' : 'section'}>
                  Industries
                </div>
              </Link>
            </div>
          </div>

          <div className='bx--col bx--col-md-4 bx--col-sm-4 '>
            <div className='about--section' onClick={Future}>
              <Link to='#' id='future'>
                <div className={future ? 'section-active' : 'section'}>
                  Future of industries
                </div>
              </Link>
            </div>
          </div>

          <div className='bx--col bx--col-md-4 bx--col-sm-4'>
            <div className='about--section' onClick={Work}>
              <Link to='#' id='who'>
                <div className={work ? 'section-active' : 'section'}>
                  Who we work with
                </div>
              </Link>
            </div>
          </div>

          <div className='bx--col bx--col-md-4 bx--col-sm-4'>
            <div className='about--section' onClick={Insights}>
              <Link to='#' id='insight'>
                <div className={insights ? 'section-active' : 'section'}>
                  Insights and resources
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width featured' ref={myRef}>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-4 '>
                <div className='about--our'>
                  <h6>INDUSTRIES</h6>
                  <h3>Featured</h3>
                  <p>
                    Discover how Uvation’s breakthrough technologies are
                    transforming industries with smarter ways to do business,
                    new growth opportunities and strategies to compete and win.
                  </p>
                </div>
              </div>
              <div className='bx--col'>
                <div className='cards'>
                  <div className='bx--row bx--no-gutter--left'>
                    <FeaturedCard
                      pictoIcon={<Satellite />}
                      title='Aerospace & Defense'
                    />
                    <FeaturedCard
                      pictoIcon={<GlobalCurrency />}
                      title='Banking & Finance'
                    />
                    <FeaturedCard
                      pictoIcon={<University />}
                      title='Education'
                    />
                  </div>
                  <div className='bx--row bx--no-gutter--left'>
                    <FeaturedCard
                      pictoIcon={<ChipCircuit />}
                      title='Electronics'
                    />
                    <FeaturedCard
                      pictoIcon={<WindPower />}
                      title='Energy & Utilites'
                    />
                    <FeaturedCard pictoIcon={<Medical />} title='Healthcare' />
                  </div>
                  <div className='bx--row bx--no-gutter--left'>
                    <FeaturedCard
                      pictoIcon={<Robotics />}
                      title='Manufacturing'
                    />
                    <FeaturedCard
                      pictoIcon={<Shop />}
                      title='Retail & ConsumerProducts'
                    />
                    <FeaturedCard
                      pictoIcon={<SatelliteDish />}
                      title='Telecommunications, Media & Entertainment'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width future' ref={myRef1}>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-7 bx--no-gutter'>
                <div className='about'>
                  <h6>INDUSTRIES</h6>
                  <h2>The Future of Industries</h2>
                  <p>
                    Discover how Uvation’s breakthrough technologies are
                    transforming industries with smarter ways to do business,
                    new growth opportunities and strategies to compete and win.
                  </p>
                </div>
              </div>
            </div>
            <div className='bx--row bx--no-gutter--left cards'>
              <FutureCard />
              <FutureCard />
              <FutureCard />
              <FutureCard />
            </div>
            <div className='bx--row bx--no-gutter--left'>
              <div className='bx--col future-dots '>
                <div className='dots'>
                  <div
                    className={ActiveDot ? 'dot dot__active' : 'dot'}
                    onClick={ActiveDotHandler}
                  >
                    <div className='dot__inside'></div>
                  </div>
                  <div className='dot'>
                    <div className='dot__inside'></div>
                  </div>
                  <div className='dot'>
                    <div className='dot__inside'></div>
                  </div>
                  <div className='dot'>
                    <div className='dot__inside'></div>
                  </div>
                  <div className='dot'>
                    <div className='dot__inside'></div>
                  </div>
                  <div className='dot'>
                    <div className='dot__inside'></div>
                  </div>
                  <div className='dot'>
                    <div className='dot__inside'></div>
                  </div>
                  <div className='dot'>
                    <div className='dot__inside'></div>
                  </div>
                </div>
                <div>
                  <Link to='#'>
                    <Button
                      className='btns'
                      kind='ghost'
                      renderIcon={ArrowLeft16}
                    />
                  </Link>

                  <Link to='#'>
                    <Button
                      className='btns'
                      kind='primary'
                      renderIcon={ArrowRight16}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width we-work' ref={myRef2}>
          <div className='bx--grid '>
            <div className='bx--row bx--no-gutter'>
              <div className='bx--col-lg-4 we-banner'>
                <h5>CLIENTS</h5>
                <h2>Who we work with</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  quis urna congue est. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className='bx--row bx--no-gutter--left'>
              <div className='bx--col-lg-4 '>
                <div className='car'></div>
              </div>
              <div className='bx--col-lg-4 '>
                <div className='led '></div>
              </div>
              <div className='bx--col-lg-4 '>
                <div className='tracker'></div>
              </div>
              <div className='bx--col-lg-4 '>
                <div className='graph'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width we-work-cards'>
          <div className='bx--grid '>
            <div className='bx--row bx--no-gutter--left'>
              <div className='bx--col-lg-4  bx--col-md-4 '>
                <div className='card'>
                  <div>
                    <img src={Volvo} alt='' />
                  </div>
                  <div className='bx--col-lg-13 heading'>
                    <h5>
                      Volvo transforms processes with predictive maintenance
                    </h5>
                  </div>
                  <div className='desc'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce quis urna congue est. Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                  <div className='video-btn'>
                    <div className='play-btn'>
                      <PlayFilledAlt16 className='play' />
                    </div>
                    <p>Play the video to see how</p>
                  </div>
                </div>
              </div>
              <div className='bx--col-lg-4  bx--col-md-4'>
                <div className='card'>
                  <div>
                    <img src={Volvo} alt='' />
                  </div>
                  <div className='bx--col-lg-13 heading'>
                    <h5>
                      Volvo transforms processes with predictive maintenance
                    </h5>
                  </div>
                  <div className='desc'>
                    <p>
                      AMC is using Uvation analytical tools to uncover new
                      insights into audience preferences and viewing patterns,
                      helping to make smarter scheduling and...
                    </p>
                  </div>
                  <div className='video-btn'>
                    <div className='play-btn'>
                      <PlayFilledAlt16 className='play' />
                    </div>
                    <p>Play the video to see how</p>
                  </div>
                </div>
              </div>
              <div className='bx--col-lg-4  bx--col-md-4'>
                <div className='card'>
                  <div>
                    <img src={Volvo} alt='' />
                  </div>
                  <div className='bx--col-lg-13 heading'>
                    <h5>
                      Volvo transforms processes with predictive maintenance
                    </h5>
                  </div>
                  <div className='desc'>
                    <p>
                      AMC is using Uvation analytical tools to uncover new
                      insights into audience preferences and viewing patterns,
                      helping to make smarter scheduling and...
                    </p>
                  </div>
                  <div className='video-btn'>
                    <div className='play-btn'>
                      <PlayFilledAlt16 className='play' />
                    </div>
                    <p>Play the video to see how</p>
                  </div>
                </div>
              </div>
              <div className='bx--col-lg-4 bx--col-md-4'>
                <div className='card'>
                  <div>
                    <img src={Volvo} alt='' />
                  </div>
                  <div className='bx--col-lg-13 heading'>
                    <h5>
                      Volvo transforms processes with predictive maintenance
                    </h5>
                  </div>
                  <div className='desc'>
                    <p>
                      AMC is using Uvation analytical tools to uncover new
                      insights into audience preferences and viewing patterns,
                      helping to make smarter scheduling and...
                    </p>
                  </div>
                  <div className='video-btn'>
                    <div className='play-btn'>
                      <PlayFilledAlt16 className='play' />
                    </div>
                    <p>Play the video to see how</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width insight' ref={myRef3}>
          <div className='bx--grid'>
            <div className='bx--row bx--no-gutter'>
              <div className='bx--col-lg-7'>
                <div className='about'>
                  <h6>INDUSTRIES</h6>
                  <h2>Insights and resources</h2>
                  <p>
                    Discover how Uvation’s breakthrough technologies are
                    transforming industries with smarter ways to do business,
                    new growth opportunities and strategies to compete and win.
                  </p>
                </div>
              </div>
            </div>
            <div className='bx--row bx--no-gutter img-cards'>
              <div className='bx--col-lg-4'>
                <div className='img-card'>
                  <div className='img-bg1'></div>
                  <div className='content'>
                    <div className='title'>
                      <Chat16 />
                      <h6>Keynote</h6>
                    </div>
                    <div className='heading'>
                      <h4>Lorem ipsum dolor sit amet</h4>
                    </div>
                    <div className='desc'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce quis urna congue est. Lorem ipsum dolor sit
                        amet...
                      </p>
                    </div>
                    <div className='arrow'>
                      <Link to='#'>
                        <ArrowRight16 />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bx--col-lg-4'>
                <div className='img-card'>
                  <div className='img-bg2'></div>
                  <div className='content'>
                    <div className='title'>
                      <Video16 />
                      <h6>video</h6>
                    </div>
                    <div className='heading'>
                      <h4>Lorem ipsum dolor sit amet</h4>
                    </div>
                    <div className='desc'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce quis urna congue est. Lorem ipsum dolor sit
                        amet...
                      </p>
                    </div>
                    <div className='arrow'>
                      <Link to='#'>
                        <ArrowRight16 />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bx--col-lg-4'>
                <div className='img-card'>
                  <div className='img-bg3'></div>
                  <div className='content'>
                    <div className='title'>
                      <TextLinkAnalysis16 />
                      <h6>insights</h6>
                    </div>
                    <div className='heading'>
                      <h4>Lorem ipsum dolor sit amet</h4>
                    </div>
                    <div className='desc'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce quis urna congue est. Lorem ipsum dolor sit
                        amet...
                      </p>
                    </div>
                    <div className='arrow'>
                      <Link to='#'>
                        <ArrowRight16 />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bx--col-lg-4'>
                <div className='img-card'>
                  <div className='img-bg4'></div>
                  <div className='content'>
                    <div className='title'>
                      <Video16 />
                      <h6>video</h6>
                    </div>
                    <div className='heading'>
                      <h4>Lorem ipsum dolor sit amet</h4>
                    </div>
                    <div className='desc'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce quis urna congue est. Lorem ipsum dolor sit
                        amet...
                      </p>
                    </div>
                    <div className='arrow'>
                      <Link to='#'>
                        <ArrowRight16 />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width footer'>
          <div className='bx--grid'>
            <div className='bx--row '>
              <div className='bx--col-lg-9 fot-banner'>
                <div className='heading'>
                  <h2>
                    Explore enterprise and business solutions for your industry
                    on the Uvation Marketplace
                  </h2>
                </div>
                <div className='sub-heading'>
                  <h5>
                    Transform your business with infrastructure, services and
                    tools for integrated cloud computing.
                  </h5>
                </div>
                <div className='access'>
                  <Button>Access the Uvation Marketplace</Button>
                </div>
              </div>
            </div>
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
      </div>
      <FooterBotm />
    </>
  );
};

export default Industries;
