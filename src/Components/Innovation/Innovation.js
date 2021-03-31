import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'carbon-components-react';
import {
  ArrowDown16,
  Chat16,
  ArrowRight16,
  PlayFilledAlt16,
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';

import FooterBotm from '../Homepage/Footer/FooterBotm';
import MainHeader from '../Homepage/Mainheader/MainHeader';

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

export const ArticleCards = ({ titleIcon, title, heading }) => (
  <div className='article--cards'>
    <div className='content'>
      <div className='title'>
        {titleIcon} <Chat16 />
        <h6>{title}ARTICLE CAPTIONs</h6>
      </div>
      <div className='bx--col-lg-10 heading'>
        <h4>{heading}Lorem ipsum dolor sit amet</h4>
      </div>

      <div className='arrow'>
        <Link to='#'>
          <ArrowRight16 />
        </Link>
      </div>
    </div>
  </div>
);

const RecommendCard = ({ title, desc }) => (
  <div className='bx--col-lg-5 bx--col-sm-4'>
    <div className='card'>
      <div className='title'>
        <h3>
          {title}
          Featured articles
        </h3>
      </div>
      <div className='bx--col-lg-12  desc'>
        <p>
          {desc}Discover how Uvation’s breakthrough technologies are
          transforming industries with smarter ways to do business, new growth
          opportunities and strategies to compete and win.
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

const Innovation = () => {
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
  }, []);

  return (
    <>
      <MainHeader />
      <div className='bx--grid--full-width innovation'>
        <div className='bx--grid--full-width bannerpage' ref={myRef3}>
          <div className='bx--row '>
            <div className='bx--col-lg-7 bx--offset-lg-1'>
              <div className=' bx--col-lg-10 bx--offset-lg-1 left'>
                <div className='heading'>
                  <h1>Innovation</h1>
                </div>
                <div className='desc'>
                  <p>
                    We’re committed to utilizing a delivery approach that puts
                    our client’s specific requirements first.Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Fusce quis urna
                    congue est. Lorem ipsum dolor sit amet.
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
                  <h6>INNOVATION</h6>
                  <h2>Featured articles</h2>
                  <p>
                    Discover how Uvation’s breakthrough technologies are
                    transforming industries with smarter ways to do business,
                    new growth opportunities and strategies to compete and win.
                  </p>
                </div>
              </div>
              <div className='bx--col bx--offset-lg-8 '>
                <ArticleCards />
              </div>
              <div className='bx--col bx--offset-lg-8 '>
                <ArticleCards />
              </div>
              <div className='bx--col'>
                <ArticleCards />
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width recommend' ref={myRef1}>
          <div className='bx--grid '>
            <div className='bx--row bx--no-gutter'>
              <div className='bx--col-lg-4'>
                <div className='bx--col-lg-14 bx--no-gutter left'>
                  <h6>INNOVATION</h6>
                  <h4>Recommended for you</h4>
                </div>
              </div>
              <div className='bx--col'>
                <div className='bx--grid bx--no-gutter '>
                  <div className='bx--row bx--no-gutter'>
                    <div className='bx--col bx--col-md-4 bx--col-sm-4'>
                      <ArticleCards />
                    </div>
                    <div className='bx--col bx--col-md-4 bx--col-sm-4 '>
                      <ArticleCards />
                    </div>
                    <div className='bx--col bx--col-md-4 bx--col-sm-4'>
                      <ArticleCards />
                    </div>
                  </div>
                  <div className='bx--row bx--no-gutter'>
                    <div className='bx--col bx--col-md-4 bx--col-sm-4'>
                      <ArticleCards />
                    </div>
                    <div className='bx--col bx--col-md-4 bx--col-sm-4 '>
                      <ArticleCards />
                    </div>
                    <div className='bx--col bx--col-md-4 bx--col-sm-4'>
                      <ArticleCards />
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
                  <h6>INNOVATION</h6>
                  <h2>Lorem ipsum dolor est</h2>
                </div>
              </div>
            </div>
            <div className='bx--row bx--row--condensed card-row'>
              <RecommendCard />
              <RecommendCard />
              <RecommendCard />
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

export default Innovation;
