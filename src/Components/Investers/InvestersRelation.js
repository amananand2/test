import React, { useEffect, useRef } from 'react';
import { Button } from 'carbon-components-react';
import { Link } from 'react-router-dom';

import { ArticleCards } from './../Innovation/Innovation';
import { ArrowRight16, Phone20, Chat20 } from '@carbon/icons-react';
import {connect} from 'react-redux';
import {investorInformationPageDataStart,investorNewsPageDataStart,investorUvationDataStart,investorWantDataStart,investorWantData} from "../../actions/index";

import {
  Insights,
  ChartHistogram,
  ChartPie,
  DocumentSecurity,
} from '@carbon/pictograms-react';
import { Loading } from "carbon-components-react"
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

const InvestersRelation = ({investorInformationPageDataStart,investorInformationData,investorNewsPageDataStart,investorNewsData,investorUvationDataStart,investorUvationData,investorWantDataStart,investorWantData}) => {
  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
    investorInformationPageDataStart();
    investorNewsPageDataStart();
    investorUvationDataStart();
    investorWantDataStart();
  }, []);

  // console.log(investorWantData,"investorWantData");

  return (
    <>
    <Loading active={investorInformationData.investorRelationsPageLoader}/>
      <MainHeader />
      <div className='investersRelation' ref={myRef}>
        <div className=' banner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-10'>
                <div className='content'>
                  <h1>{investorInformationData && investorInformationData.information_heading}</h1>
                  <p>
                {investorInformationData && investorInformationData.information_description}
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
                    heading={investorInformationData && investorInformationData.investors_content1 && investorInformationData.investors_content1[0].investors_content_heading}
                  />
                  <RelationCard
                    cardicon={<ChartHistogram />}
                    heading={investorInformationData && investorInformationData.investors_content1 && investorInformationData.investors_content1[1].investors_content_heading}
                  />
                  <RelationCard
                    cardicon={<ChartPie />}
                    heading={investorInformationData && investorInformationData.investors_content1 && investorInformationData.investors_content1[2].investors_content_heading}
                  />
                  <RelationCard
                    cardicon={<Insights />}
                    heading={investorInformationData && investorInformationData.investors_content1 && investorInformationData.investors_content1[3].investors_content_heading}
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
                  <h6>{investorNewsData && investorNewsData.investors_top_heading}</h6>
                  <h2>{investorNewsData && investorNewsData.investors_heading}</h2>
                  <p>
                   {investorNewsData && investorNewsData.investors_description}
                  </p>
                </div>
              </div>
      
              <div className='bx--col bx--no-gutter bx--offset-lg-8 '>
                <ArticleCards 
                title={investorNewsData && investorNewsData.investors_content2 && investorNewsData.investors_content2[0].investors_content_heading}
                 heading={investorNewsData && investorNewsData.investors_content2 && investorNewsData.investors_content2[0].investors_content_description}/>
              </div>
              <div className='bx--col bx--no-gutter bx--offset-lg-8 '>
               <ArticleCards 
                title={investorNewsData && investorNewsData.investors_content2 && investorNewsData.investors_content2[1].investors_content_heading}
                 heading={investorNewsData && investorNewsData.investors_content2 && investorNewsData.investors_content2[1].investors_content_description}/>
              </div>
              <div className='bx--col bx--no-gutter'>
               <ArticleCards 
                title={investorNewsData && investorNewsData.investors_content2 && investorNewsData.investors_content2[2].investors_content_heading}
                 heading={investorNewsData && investorNewsData.investors_content2 && investorNewsData.investors_content2[2].investors_content_description}/>
              </div>
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width latest-article'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-4'>
                <div className='bx--col-lg-14 bx--no-gutter left'>
                  <h6>{investorUvationData && investorUvationData.uvation_heading}</h6>
                  <h4>{investorUvationData && investorUvationData.uvation_description}</h4>
                </div>
              </div>
              <div className='bx--col'>
                <div className='bx--grid bx--no-gutter '>
                  <div className='bx--row bx--no-gutter'>
                            {
                      investorUvationData && investorUvationData.uvation_content && investorUvationData.uvation_content.slice(0,3).map((value,index)=>{
                          return (
                            <div className='bx--col bx--col-md-4 bx--col-sm-4'>
                                <ArticleCards title={value.uvation_content_heading} heading={value.uvation_content_description} />
                              </div>
                          );
                        })
                      }
                  </div>
                  <div className='bx--row bx--no-gutter'>
                        {
                  investorUvationData && investorUvationData.uvation_content && investorUvationData.uvation_content.slice(0,3).map((value,index)=>{
                      return (
                        <div className='bx--col bx--col-md-4 bx--col-sm-4'>
                            <ArticleCards title={value.uvation_content_heading} heading={value.uvation_content_description} />
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

        <div className='bx--grid--full-width footer'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-6  fot-banner '>
                <div className='bx--col bx--no-gutter heading'>
                  <h2>{investorWantData && investorWantData.want_heading}</h2>
                </div>
                <div className='bx--col-lg-12 bx--no-gutter--left desc'>
                  <h4>
                    {investorWantData && investorWantData.want_description}
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

const mapStateToProps = state => ({

  investorInformationData: state.InvestorRelationPageReducer.investorInformationData,
  investorNewsData: state.InvestorRelationPageReducer.investorNewsData,
  investorUvationData: state.InvestorRelationPageReducer.investorUvationData,
  investorWantData: state.InvestorRelationPageReducer.investorWantData,

});

const mapDispatchToProps = (dispatch) => ({

  investorInformationPageDataStart: () => dispatch(investorInformationPageDataStart()),
  investorNewsPageDataStart: () => dispatch(investorNewsPageDataStart()),
  investorUvationDataStart: () => dispatch(investorUvationDataStart()),
  investorWantDataStart: () => dispatch(investorWantDataStart()),

  
});

export default connect(mapStateToProps,mapDispatchToProps)(InvestersRelation);
