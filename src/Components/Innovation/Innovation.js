import React, { useState, useRef, useEffect } from 'react';
import { Button, Loading } from 'carbon-components-react';
import {
  ArrowDown16,
  Chat16,
  ArrowRight16,
  PlayFilledAlt16,
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';

import FooterBotm from '../Homepage/Footer/FooterBotm';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import {connect} from 'react-redux';
import {innovationPageDataStart,featuredInnovationPageDataStart,recommendedPageDataStart,contentPageDataStart,innovationExplorePageDataStart} from "../../actions/index";

export const FeatureCard = ({ titleIcon, title, content }) => (
  <div>
    <div className='bx--col-lg-10 featured--card'>
      <div className='card--heading'>
        {titleIcon}
        <p>{title}</p>
      </div>
      <div className='card--content'>
        <h2>{content}</h2>
      </div>
    </div>
    <div className='card--lcon'>
      <Link to='/'>
        <ArrowRight16 />
      </Link>
    </div>
  </div>
);

export const ArticleCard = ({ heading, content }) => (
  <>
    <div className='bx--col featured--card'>
      <div className='title'>
        <h6>{heading}</h6>
      </div>
      <div className='card--content'>
        <h4>{content}</h4>
      </div>
    </div>
  </>
);

export const ArticleCards = ({ titleIcon, title, heading }) => {
  console.log(heading,"heading");
  return(
  <div className='article--cards'>
    <div className='content'>
      <div className='title'>
        {titleIcon} <Chat16 />
        <h6>{title}</h6>
      </div>
      <div className='bx--col-lg-10 heading'>
        <h4>{heading}</h4>
      </div>

      <div className='arrow'>
        <Link to='#'>
          <ArrowRight16 />
        </Link>
      </div>
    </div>
  </div>
  )
};

const RecommendCard = ({ title, desc }) => (
  <div className='bx--col-lg-5 bx--col-sm-4'>
    <div className='card'>
      <div className='title'>
        <h3>
          {title}
        </h3>
      </div>
      <div className='bx--col-lg-12  desc'>
        <p>
          {desc}
        </p>
      </div>

      <div className='arrow'>
        <Link to='#'>
          <ArrowRight16 fill='$white-0' />
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
const scrollToRef3 = () => window.scrollTo(0, 0);

const Innovation = ({innovationPageDataStart,innovationData,featuredInnovationPageDataStart,featuredInnovationData,recommendedPageDataStart,
                     recommendedData,contentPageDataStart,contentData,innovationExplorePageDataStart,innovationExploreData}) => {
  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const executeScroll = () => scrollToRef(myRef);
  const executeScroll1 = () => scrollToRef1(myRef1);
  const executeScroll2 = () => scrollToRef2(myRef2);
  const executeScroll3 = () => scrollToRef3(myRef3);

  const [featured, setfeatured] = useState(true);
  const [recommended, setrecommended] = useState();
  const [content, setcontent] = useState();

  function Featured() {
    setfeatured(true);
    setrecommended(false);
    setcontent(false);
    executeScroll();
  }

  function Recommended() {
    setfeatured(false);
    setrecommended(true);
    setcontent(false);
    executeScroll1();
  }

  function Content() {
    setfeatured(false);
    setrecommended(false);
    setcontent(true);
    executeScroll2();
  }

  useEffect(() => {
    executeScroll3();
    innovationPageDataStart();
    featuredInnovationPageDataStart();
    recommendedPageDataStart();
    contentPageDataStart();
    innovationExplorePageDataStart();
  }, []);

  // console.log(featuredInnovationData && featuredInnovationData.featured_description && featuredInnovationData.featured_description[0].featured_content_description,"innovationExploreData");

  return (
    <>
    <Loading active={innovationData.innovationPageLoader}/>
      <MainHeader />
      <div className='bx--grid--full-width innovation'>
        <div className='bx--grid--full-width bannerpage' ref={myRef3}>
          <div className='bx--row '>
            <div className='bx--col-lg-7 bx--offset-lg-1'>
              <div className=' bx--col-lg-10 bx--offset-lg-1 left'>
                <div className='heading'>
                  <h1>{innovationData && innovationData.innovation_heading}</h1>
                </div>
                <div className='desc'>
                  <p>
                   {innovationData && innovationData.innovation_description}
                  </p>
                </div>
                <div className='button'>
                  <Button className='see' renderIcon={ArrowDown16}>
                    See more
                  </Button>
                </div>
              </div>
            </div>
            <div className='bx--col right'>
              <div className='banner-btn'>
                <PlayFilledAlt16 className='play' />
              </div>
              <p>Play the video to see how</p>
            </div>
          </div>
        </div>

        <div className='bx--row bx--no-gutter innovation__sections'>
          <div className='bx--col bx--col-md-4 bx--col-sm-4'>
            <div className='about--section' onClick={Featured}>
              <Link to='#'>
                <div className={featured ? 'section-active' : 'section'}>
                  Featured
                </div>
              </Link>
            </div>
          </div>

          <div className='bx--col bx--col-md-4 bx--col-sm-4 '>
            <div className='about--section' onClick={Recommended}>
              <Link to='#'>
                <div className={recommended ? 'section-active' : 'section'}>
                  Recommended
                </div>
              </Link>
            </div>
          </div>

          <div className='bx--col bx--col-md-4 bx--col-sm-4'>
            <div className='about--section' onClick={Content}>
              <Link to='#'>
                <div className={content ? 'section-active' : 'section'}>
                  Content section
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width article' ref={myRef}>
          <div className='bx--grid  bg'>
            <div className='bx--row bx--no-gutter'>
              <div className='bx--col-lg-4 bx--no-gutter'>
                <div className=' bx--col-lg-14 left'>
                  <h6>{featuredInnovationData && featuredInnovationData.featured_top_heading}</h6>
                  <h2>{featuredInnovationData && featuredInnovationData.featured_heading}</h2>
                  <p>
                    Discover how Uvation’s breakthrough technologies are
                    transforming industries with smarter ways to do business,
                    new growth opportunities and strategies to compete and win.
                  </p>
                </div>
              </div>
          
              <div className='bx--col bx--offset-lg-8 '>
                <ArticleCards title={featuredInnovationData && featuredInnovationData.featured_description && featuredInnovationData.featured_description[0].featured_content_heading} 
                heading={featuredInnovationData && featuredInnovationData.featured_description && featuredInnovationData.featured_description[0].featured_content_description} />
              </div>
              <div className='bx--col bx--offset-lg-8 '>
              <ArticleCards title={featuredInnovationData && featuredInnovationData.featured_description && featuredInnovationData.featured_description[1].featured_content_heading} 
                heading={featuredInnovationData && featuredInnovationData.featured_description && featuredInnovationData.featured_description[1].featured_content_description} />
              </div>
              <div className='bx--col'>
              <ArticleCards title={featuredInnovationData && featuredInnovationData.featured_description && featuredInnovationData.featured_description[2].featured_content_heading} 
                heading={featuredInnovationData && featuredInnovationData.featured_description && featuredInnovationData.featured_description[2].featured_content_description} />
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width recommend' ref={myRef1}>
          <div className='bx--grid '>
            <div className='bx--row bx--no-gutter'>
              <div className='bx--col-lg-4'>
                <div className='bx--col-lg-14 bx--no-gutter left'>
                  <h6>{recommendedData && recommendedData.recommended_heading }</h6>
                  <h4>{recommendedData && recommendedData.recommended_description }</h4>
                </div>
              </div>
              <div className='bx--col'>
                <div className='bx--grid bx--no-gutter '>
                  <div className='bx--row bx--no-gutter'>
                  {
             recommendedData && recommendedData.recommended_content && recommendedData.recommended_content.slice(0,3).map((value,index)=>{
                return (
                  <div className='bx--col bx--col-md-4 bx--col-sm-4'>
                      <ArticleCards title={value.recommended_content_heading} heading={value.recommended_content_description} />
                    </div>
                );
              })
            }
                  </div>
                  <div className='bx--row bx--no-gutter'>
                  <div className='bx--row bx--no-gutter'>
                  {
             recommendedData && recommendedData.recommended_content && recommendedData.recommended_content.slice(3,7).map((value,index)=>{
                return (
                  <div className='bx--col bx--col-md-4 bx--col-sm-4'>
                      <ArticleCards title={value.recommended_content_heading} heading={value.recommended_content_description} />
                    </div>
                );
              })
            }
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width recommend--bottom' ref={myRef2}>
          <div className='bx--grid '>
            <div className='bx--row bx--no-gutter'>
              <div className='bx--col-lg-4'>
                <div className='banner'>
                  <h6>{contentData && contentData.lorem_heading}</h6>
                  <h2>{contentData && contentData.lorem_description}</h2>
                </div>
              </div>
            </div>
            <div className='bx--row bx--row--condensed card-row'>
              {contentData && contentData.lorem_content && contentData.lorem_content.map(value=>{
                return(
              <RecommendCard title={value.lorem_content_heading} desc={value.lorem_content_description} />
                )
              }) }
      
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width footer'>
          <div className='bx--grid'>
            <div className='bx--row '>
              <div className='bx--col-lg-9 fot-banner'>
                <div className='heading'>
                  <h2>
                  {innovationExploreData && innovationExploreData.explore_heading}
                  </h2>
                </div>
                <div className='sub-heading'>
                  <h5>
                  {innovationExploreData && innovationExploreData.explore_description}      
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
  innovationData: state.landingPageReducer.innovationData,
  featuredInnovationData: state.landingPageReducer.featuredInnovationData,
  recommendedData:state.landingPageReducer.recommendedData,
  contentData:state.landingPageReducer.contentData,
  innovationExploreData:state.landingPageReducer.innovationExploreData,
  //innovationData

});

const mapDispatchToProps = (dispatch) => ({

  innovationPageDataStart: () => dispatch(innovationPageDataStart()),
  featuredInnovationPageDataStart: () => dispatch(featuredInnovationPageDataStart()),
  recommendedPageDataStart: () => dispatch(recommendedPageDataStart()),
  contentPageDataStart: () => dispatch(contentPageDataStart()),
  innovationExplorePageDataStart: () => dispatch(innovationExplorePageDataStart()),

  //innovationExplorePageDataStart
});


export default connect(mapStateToProps,mapDispatchToProps)(Innovation);

