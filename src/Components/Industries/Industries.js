import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import { Loading } from "carbon-components-react";


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
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import {industriesPageDataStart,featuredPageDataStart,
  futureIndustriesPageDataStart,workWithPageDataStart,resourcesPageDataStart,explorePageDataStart} from "../../actions/index";


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

const FutureCard = (props) => (
  <div className='bx--col'>
    <div className='card--left'>
      <div className='pictogram'>
        <Robotics />
      </div>
      <div className='content'>
        <h6>{props.heading}</h6>
        <h3>{props.subHeading}</h3>
        <p>
         {props.desc}
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

const Industries = ({industriesPageDataStart,featuredPageDataStart,
  futureIndustriesPageDataStart,workWithPageDataStart,resourcesPageDataStart,explorePageDataStart}) => {
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
  const [activeSlide, setActiveSlide] = useState(1);


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
    industriesPageDataStart();
    featuredPageDataStart();
    futureIndustriesPageDataStart();
    workWithPageDataStart();
    resourcesPageDataStart();
    explorePageDataStart();
  }, []);

  const [ActiveDot, setActiveDot] = useState(true);

  const ActiveDotHandler = () => {
    setActiveDot(!ActiveDot);
  };

  const industriesData = useSelector(state => state.landingPageReducer.industriesData);

  const featuredData = useSelector(state => state.landingPageReducer.featuredData);

  const futureIndustriesData = useSelector(state => state.landingPageReducer.futureIndustriesData);

  const workWithData = useSelector(state => state.landingPageReducer.workWithData);

  const resourcesData = useSelector(state => state.landingPageReducer.resourcesData);

  const exploreData = useSelector(state => state.landingPageReducer.exploreData);


  // console.log(featuredData && featuredData.featured_contact && featuredData.featured_contact[0].featured_contact_heading ,"featuredData")

  // console.log(resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[0].resources_contact_top_heading  ,"resourcesData")
// console.log(exploreData,"exploreData")

  return (
    <>
      <Loading active={industriesData.industriesPageLoader}/>
      <MainHeader />
      <div className='bx--grid--full-width industries'>
        <div className='bx--grid--full-width banner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-6 left'>
                <div className='heading'>
                  <h1>{industriesData && industriesData.industries_heading}</h1>
                </div>
                <div className='desc'>
                  <p>
                  {industriesData && industriesData.industries_description}
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
                  <h6>{featuredData && featuredData.featured_top_heading}</h6>
                  <h3>{featuredData && featuredData.featured_heading}</h3>
                  <p>
                  {featuredData && featuredData.featured_description}
                  </p>
                </div>
              </div>
              <div className='bx--col'>
                <div className='cards'>
                  <div className='bx--row bx--no-gutter--left'>
                    <FeaturedCard
                      pictoIcon={<Satellite />}
                      title={featuredData && featuredData.featured_contact && featuredData.featured_contact[0].featured_contact_heading}
                    />
                    <FeaturedCard
                      pictoIcon={<GlobalCurrency />}
                      title={featuredData && featuredData.featured_contact && featuredData.featured_contact[1].featured_contact_heading}
                    />
                    <FeaturedCard
                      pictoIcon={<University />}
                      title={featuredData && featuredData.featured_contact && featuredData.featured_contact[2].featured_contact_heading}
                    />
                  </div>
                  <div className='bx--row bx--no-gutter--left'>
                    <FeaturedCard
                      pictoIcon={<ChipCircuit />}
                      title={featuredData && featuredData.featured_contact && featuredData.featured_contact[3].featured_contact_heading}
                    />
                    <FeaturedCard
                      pictoIcon={<WindPower />}
                      title={featuredData && featuredData.featured_contact && featuredData.featured_contact[4].featured_contact_heading}
                    />
                    <FeaturedCard pictoIcon={<Medical />} title='Healthcare' />
                  </div>
                  <div className='bx--row bx--no-gutter--left'>
                    <FeaturedCard
                      pictoIcon={<Robotics />}
                      title={featuredData && featuredData.featured_contact && featuredData.featured_contact[5].featured_contact_heading}
                    />
                    <FeaturedCard
                      pictoIcon={<Shop />}
                      title={featuredData && featuredData.featured_contact && featuredData.featured_contact[6].featured_contact_heading}
                    />
                    <FeaturedCard
                      pictoIcon={<SatelliteDish />}
                      title={featuredData && featuredData.featured_contact && featuredData.featured_contact[7].featured_contact_heading}
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
                  <h6>{futureIndustriesData && futureIndustriesData.future_industries_top_heading}</h6>
                  <h2>{futureIndustriesData && futureIndustriesData.future_industries_heading}</h2>
                  <p>
                   {futureIndustriesData && futureIndustriesData.future_industries_description}
                  </p>
                </div>
              </div>
            </div>
            <div className='bx--row bx--no-gutter--left cards'>
            {activeSlide === 1 &&
              futureIndustriesData && futureIndustriesData.future_industries_contact && futureIndustriesData.future_industries_contact.slice(0,4).map((value,index)=>{
                return (
              <FutureCard heading={value.future_industries_contact_top_heading} subHeading={value.future_industries_contact_heading} desc={value.future_industries_contact_description} />
                );

              })
            }

            {activeSlide === 2 &&
              futureIndustriesData && futureIndustriesData.future_industries_contact && futureIndustriesData.future_industries_contact.slice(4,8).map((value,index)=>{
                return (
              <FutureCard  heading={value.future_industries_contact_top_heading} subHeading={value.future_industries_contact_heading} desc={value.future_industries_contact_description} />
                );

              })
            }
            
            </div>
            <div className='bx--row bx--no-gutter--left'>
              <div className='bx--col future-dots '>
                <div className='dots'>
                  <div
                    className={activeSlide === 1 ? 'dot dot__active' : 'dot'}
                  >
                    <div className='dot__inside'></div>
                  </div>
                  <div className={activeSlide === 2 ? 'dot dot__active' : 'dot'}>
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
                 
                    <Button onClick={()=>{activeSlide !==1  && setActiveSlide(activeSlide - 1)}}
                      className='btns'
                      kind='ghost'
                      renderIcon={ArrowLeft16}
                    />
            

                 
                    <Button onClick={()=>{activeSlide !==2 && setActiveSlide(activeSlide + 1)}}
                      className='btns'
                      kind='primary'
                      renderIcon={ArrowRight16}
                    />
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width we-work' ref={myRef2}>
          <div className='bx--grid '>
            <div className='bx--row bx--no-gutter'>
              <div className='bx--col-lg-4 we-banner'>
                <h5>{workWithData && workWithData.work_with_top_heading}</h5>
                <h2>{workWithData && workWithData.work_with_heading}</h2>
                <p>
                {workWithData && workWithData.work_with_description}
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
                      {workWithData && workWithData.work_with_content && workWithData.work_with_content[0].work_heading}
                    </h5>
                  </div>
                  <div className='desc'>
                    <p>
                    {workWithData && workWithData.work_with_content && workWithData.work_with_content[0].work_description}
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
                    {workWithData && workWithData.work_with_content && workWithData.work_with_content[1].work_heading}
                    </h5>
                  </div>
                  <div className='desc'>
                    <p>
                    {workWithData && workWithData.work_with_content && workWithData.work_with_content[1].work_description}
                    
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
                    {workWithData && workWithData.work_with_content && workWithData.work_with_content[2].work_heading}
                   
                    </h5>
                  </div>
                  <div className='desc'>
                    <p>
                    {workWithData && workWithData.work_with_content && workWithData.work_with_content[2].work_description}
                      
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
                    {workWithData && workWithData.work_with_content && workWithData.work_with_content[3].work_heading}
                     
                    </h5>
                  </div>
                  <div className='desc'>
                    <p>
                    {workWithData && workWithData.work_with_content && workWithData.work_with_content[3].work_description}
                      
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
                  <h6>{resourcesData && resourcesData.resources_top_heading}</h6>
                  <h2>{resourcesData && resourcesData.resources_heading}</h2>
                  <p>
                  {resourcesData && resourcesData.resources_description}
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
                      <h6>{resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[0].resources_contact_top_heading}</h6>
                    </div>
                    <div className='heading'>
                      <h4>{resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[0].resources_contact_heading}</h4>
                    </div>
                    <div className='desc'>
                      <p>
                       {resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[0].resources_contact_description}
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
                      <h6>{resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[1].resources_contact_top_heading}</h6>
                    </div>
                    <div className='heading'>
                      <h4>{resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[1].resources_contact_heading}</h4>
                    </div>
                    <div className='desc'>
                      <p>
                       {resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[1].resources_contact_description}
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
                      <h6>{resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[2].resources_contact_top_heading}</h6>
                    </div>
                    <div className='heading'>
                      <h4>{resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[2].resources_contact_heading}</h4>
                    </div>
                    <div className='desc'>
                      <p>
                       {resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[2].resources_contact_description}
                        
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
                      <h6>{resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[3].resources_contact_top_heading}</h6>
                    </div>
                    <div className='heading'>
                      <h4>{resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[3].resources_contact_heading}</h4>
                    </div>
                    <div className='desc'>
                      <p>
                      {resourcesData && resourcesData.resources_contact && resourcesData.resources_contact[3].resources_contact_description}
                       
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
                    {exploreData && exploreData.explore_heading}
                  </h2>
                </div>
                <div className='sub-heading'>
                  <h5>
                   {exploreData && exploreData.explore_description}
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

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = (dispatch) => ({

  industriesPageDataStart: () => dispatch(industriesPageDataStart()),
  featuredPageDataStart: () => dispatch(featuredPageDataStart()),  
  futureIndustriesPageDataStart: () => dispatch(futureIndustriesPageDataStart()),
  workWithPageDataStart: () => dispatch(workWithPageDataStart()),
  resourcesPageDataStart: () => dispatch(resourcesPageDataStart()),
  explorePageDataStart: () => dispatch(explorePageDataStart()),  

 
  //moreContactUsPageDataStart
});


export default connect(mapStateToProps,mapDispatchToProps)(Industries);

