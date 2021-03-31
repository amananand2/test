import React, { useEffect, useRef } from 'react';
import { Button } from 'carbon-components-react';
import { Link } from 'react-router-dom';

import { ArticleCards } from './../Innovation/Innovation';
import { ArrowRight16, Phone20, Chat20 } from '@carbon/icons-react';

import {
  Insights,
  ChartHistogram,
  ChartPie,
  DocumentSecurity,
} from '@carbon/pictograms-react';
import { Launch16 } from '@carbon/icons-react';
import FooterBotm from '../Homepage/Footer/FooterBotm';
import MainHeader from '../Homepage/Mainheader/MainHeader';

const RelationCard = ({ cardicon, heading, headingIcon }) => (
  <div className='bx--col-lg-4 bx--col-md-4  bx--col-sm-4'>
    <div className='card'>
      <div className='pictogram'>{cardicon}</div>
      <div className='bottom'>
        <h4>{heading}</h4>
        <Link to='#'>
          {headingIcon} <Launch16 />
        </Link>
      </div>
    </div>
  </div>
);

const scrollToRef = () => window.scrollTo(0, 0);

const InvestersRelation = () => {
  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
  }, []);
  return (
    <>
      <MainHeader />
      <div className='investersRelation' ref={myRef}>
        <div className=' banner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-10'>
                <div className='content'>
                  <h1>Investors Relations</h1>
                  <p>
                    If you want to know more about Uvation, the following
                    materials will help provide an introduction to our business.
                  </p>
                </div>
                <div className='details--list'>
                  <span>
                    <p>Go to: </p>
                  </span>
                  <span>
                    <p>Company Information </p>
                  </span>
                  <span>
                    <p>| </p>
                  </span>
                  <span>
                    <p>Earnings & Financials </p>
                  </span>
                  <span>
                    <p>| </p>
                  </span>
                  <span>
                    <p>Board & ESG </p>
                  </span>
                  <span>
                    <p>| </p>
                  </span>
                  <span>
                    <p>Annual Reports </p>
                  </span>
                  <span>
                    <p>| </p>
                  </span>
                  <span>
                    <p>SEC Fislings </p>
                  </span>
                </div>
              </div>

              <div className='bx--col-lg-14 cards'>
                <div className='bx--row'>
                  <RelationCard
                    cardicon={<DocumentSecurity />}
                    heading='Financial reporting'
                  />
                  <RelationCard
                    cardicon={<ChartHistogram />}
                    heading='Latest annual report'
                  />
                  <RelationCard
                    cardicon={<ChartPie />}
                    heading='Previous years reports'
                  />
                  <RelationCard
                    cardicon={<Insights />}
                    heading='News and informations'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width news'>
          <div className='bx--grid '>
            <div className='bx--row hh'>
              <div className='bx--col-lg-4'>
                <div className='bx--no-gutter--left left'>
                  <h6>INNOVATION</h6>
                  <h2>Featured articles</h2>
                  <p>
                    Discover how Uvation’s breakthrough technologies are
                    transforming industries with smarter ways to do business,
                    new growth opportunities and strategies to compete and win.
                  </p>
                </div>
              </div>
              <div className='bx--col bx--no-gutter bx--offset-lg-8 '>
                <ArticleCards />
              </div>
              <div className='bx--col bx--no-gutter bx--offset-lg-8 '>
                <ArticleCards />
              </div>
              <div className='bx--col bx--no-gutter'>
                <ArticleCards />
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width latest-article'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-4'>
                <div className='bx--col-lg-14 bx--no-gutter left'>
                  <h6>INNOVATION</h6>
                  <h4>Latest Uvation articles</h4>
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

        <div className='bx--grid--full-width footer'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-6  fot-banner '>
                <div className='bx--col bx--no-gutter heading'>
                  <h2>Want to find out more about investing in Uvation?</h2>
                </div>
                <div className='bx--col-lg-12 bx--no-gutter--left desc'>
                  <h4>
                    Get in touch for a consultation call or answer to any
                    questions you might have.
                  </h4>
                </div>
                <div className='call-btn'>
                  <Button className='call' size='field' renderIcon={Phone20}>
                    Call us
                  </Button>
                  <Button
                    className='call'
                    size='field'
                    kind='secondary'
                    renderIcon={Chat20}
                  >
                    Live chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='btns'>
            <div className='learnmore '>
              <Button href='/' kind='primary' className='lrg-btn'>
                Send us a message
                <div className='learn'>{<ArrowRight16 />}</div>
              </Button>
              <Button className='lrg-btn-right .lrg-btn' kind='secondary'>
                Request a meeting
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

export default InvestersRelation;
