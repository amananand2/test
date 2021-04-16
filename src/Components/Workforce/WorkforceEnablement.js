import { Button, Column, Grid, Loading, Row, } from 'carbon-components-react';
import React, { useEffect } from 'react';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import BGimage from '../../img/workforce/Mask Group 46.svg';
import cloud2 from '../../img/workforce/cloud2.svg';
import chat from '../../img/workforce/chat.png';
import bubble from '../../img/workforce/bubble.svg';
import tablet from '../../img/workforce/tablet.svg';
import computer from '../../img/workforce/computer.svg';
// import { KeyUsers, DesignResearch } from '@carbon/pictograms-react';
import { ArrowDown16, ArrowLeft16, ArrowRight16 } from '@carbon/icons-react';
import FooterBotm from '../Homepage/Footer/FooterBotm';
import {connect} from 'react-redux';
import {workforceLandingPageDataStart,workforceApproachPageDataStart,workforceReachOutPageDataStart,workforceDrivesPageDataStart,workforceSourcingPageDataStart,workforceChatPageDataStart} from "../../actions/index";
import {Link} from "react-router-dom";
import  * as All from "@carbon/pictograms-react";

const Icon = ({iconName ="ArrowLeft16",fill}) => {
  const icon = React.createElement(All[iconName]);
  return <div style={{fill:fill}}>{icon}</div>;
};

const Content1=({img,heading,desc})=>{
  console.log(img,"index1.....");
  return(
  <>
      <Column lg={8}>
              <div className='workforce__sourcing__imgBox'>
                <img alt='' src={img} />
              </div>
            </Column>
            <Column lg={8} style={{ marginBottom: '2rem' }}>
              <div className='workforce__sourcing__card'>
                <div className='heading'>
                  <h3>{heading}</h3>
                </div>
                <div className='desc'>
                  <p>
                      {desc}
                  </p>
                </div>
              </div>
            </Column>
  </>
  )
}

const Content2=({img,heading,desc})=>{
  console.log(img,"index2");

  return(
    <>
         <Column lg={8} style={{ marginBottom: '2rem' }}>
              <div className='workforce__sourcing__card'>
                <div className='heading'>
                  <h3>{heading}</h3>
                </div>
                <div className='desc'>
                  <p>
                       {desc}
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={8}>
              <div className='workforce__sourcing__imgBox'>
                <img alt='' src={img} />
              </div>
            </Column>

    </>
  )
}

const WorkforceEnablement = ({workforceLandingPageDataStart,workforceLandingData,workforceApproachPageDataStart,
                              workforceApproachData,workforceReachOutPageDataStart,workforceReachOutData,workforceDrivesPageDataStart,
                              workforceDrivesData,workforceSourcingPageDataStart,workforceSourcingData,workforceChatPageDataStart,workforceChatData}) => {

  useEffect(()=>{
    workforceLandingPageDataStart();
    workforceApproachPageDataStart();
    workforceReachOutPageDataStart();
    workforceDrivesPageDataStart();
    workforceSourcingPageDataStart();
    workforceChatPageDataStart();
  },[])

  console.log(workforceChatData,"workforceChatData");

  return (
    <>
    <Loading active={workforceLandingData.workforceLandingLoader}/>
    <div className='workforce'>
      <MainHeader />
      {/* section1 */}
      <Grid
        fullWidth
        className='workforce__banner'
        style={{ backgroundImage: ` url("${BGimage}")` }}
      >
        <Grid condensed>
          <Row className='workforce__banner__content'>
            <Column lg={16} className='pictoIcon'>
              <All.KeyUsers />
            </Column>
            <Column lg={16} className='heading'>
              <h1>{workforceLandingData && workforceLandingData.workforce_heading}</h1>
            </Column>
            <Column lg={7} className='subheading'>
              <p>
                {workforceLandingData && workforceLandingData.workforce_description}
              </p>
            </Column>
            <Column lg={16} className='learn__more'>
              <Button renderIcon={ArrowDown16}>Learn more</Button>
            </Column>
            <Column className='bottom__arrows'>
            <Link style={{color:"none",textDecoration:"none"}} to ="/technologyservices">
            <p>
                <ArrowLeft16 /> Technology Services
            </p>
              </Link>
             
              <p>
                <span>|</span>
              </p>
            <Link style={{color:"none",textDecoration:"none"}} to ="/cybersecurity">
              <p>
                up next: cybersecurity <ArrowRight16 />
              </p>
              </Link>
            </Column>
          </Row>
        </Grid>
      </Grid>
      {/* section2 */}
      <Grid fullWidth className='workforce__benifits'>
        <Grid condensed>
          <Row>
            <Column lg={16}>
              <h2>{workforceLandingData && workforceLandingData.approach_description}</h2>
            </Column>
          </Row>
          <Row className='workforce__benifits__box'>
            {workforceLandingData && workforceLandingData.benefits_content && workforceLandingData.benefits_content.map((value,index)=>{
              return(
                <>
                      <Column>
                          <div className='heading'>
                            <div className='number__box'>
                              <span>{value.s_r}</span>
                            </div>
                            <h4>{value.benefits_content_heading} </h4>
                          </div>
                          <div className='border__line'></div>
                          <p>
                            {value.benefits_content_description}
                          </p>
                   </Column>

                </>
              )
            })}
     
          </Row>
        </Grid>
      </Grid>
      {/* section3 */}
      <Grid fullWidth className='workforce__approach'>
        <Grid condensed>
          <Row>
            <Column lg={8} className='heading'>
              <h2>{workforceApproachData && workforceApproachData.approach_heading}</h2>
            </Column>
          </Row>
          <Row>
            <Column lg={7} className='subheading'>
              <h6>
              {workforceApproachData && workforceApproachData.approach_description}
              </h6>
            </Column>
          </Row>
          <Row className='approch__box'>
            {workforceApproachData && workforceApproachData.approach_content && workforceApproachData.approach_content.map((value,index)=>{
               return(
                 <>
                         <Column>
                            <div className='pictoIcon'>
                              <Icon iconName="DesignResearch" fill="#222" />
                            </div>
                            <div className='approch__box__name'>
                              <h4>{value.approach_content_heading}</h4>
                            </div>
                            <div className='approch__box__desc'>
                              <p>
                               {value.approach_content_description}
                              </p>
                            </div>
                    </Column>
                 </>
               )
            })}
        
       
         
          </Row>
        </Grid>
      </Grid>
      {/* section4 */}
      <Grid fullWidth className='workforce__reach'>
        <Grid condensed>
          <Row>
            <Column lg={9} className='workforce__reach__heading'>
              <h2>
                {workforceReachOutData && workforceReachOutData.reach_out_heading}
              </h2>
            </Column>
            <Column lg={7} style={{ position: 'relative' }}>
              <img src={BGimage} />
              <div className='bookCons'>
                <p>Book a consultation</p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>
      {/* section5 */}
      <Grid fullWidth className='workforce__drive'>
        <Grid condensed>
          <Row>
            <div className='heading'>
              <h2>{workforceDrivesData && workforceDrivesData.drives_heading}</h2>
            </div>
            <Column lg={8} className='subheading'>
              <p>
                {workforceDrivesData && workforceDrivesData.drives_description}
              </p>
            </Column>
          </Row>
          <div className='card-col'>

          {workforceDrivesData && workforceDrivesData.drives_content && workforceDrivesData.drives_content.map(value=>{
                return(
                  <div>
                  <h3>{value.drives_content_heading}</h3>
                  <p>
                     {value.drives_content_description}
                  </p>
                        </div>

                )
              }) }

           
          </div>
        </Grid>
      </Grid>
      {/* section6 */}
      <Grid fullWidth className='workforce__sourcing'>
        <Grid condensed>
          <Row>
            <div className='workforce__sourcing__heading'>
              <h2>{workforceSourcingData && workforceSourcingData.sourcing_heading}</h2>
            </div>
            <Column className='workforce__sourcing__subheading' lg={9}>
              <p>
                {workforceSourcingData && workforceSourcingData.sourcing_description}
              </p>
            </Column>
          </Row>
          <Row className='workforce__sourcing__boxrow'>
          {workforceSourcingData && workforceSourcingData.sourcing_content && workforceSourcingData.sourcing_content.map((value,index)=> index % 2==0 ? 
              <Content1 img={index === 0 ? cloud2 : index=== 2 ? bubble : ""} heading={value.sourcing_content_heading} desc={value.sourcing_content_description}/> : 
              <Content2 img={index === 1 ? computer : index=== 3 ? tablet : ""} heading={value.sourcing_content_heading} desc={value.sourcing_content_description}/>          
              ) }
          </Row>
        </Grid>
      </Grid>
      {/* section7*/}

      <Grid fullWidth className='workforce__chat'>
        <Grid condensed>
          <Row>
            <Column lg={{ span: 7 }}>
              <div className='heading'>
                <h3>
                {workforceChatData && workforceChatData.workforce_chat}
                </h3>
              </div>
              <Column lg={10}>
                <div className='subheading'>
                  <p>
                   {workforceChatData && workforceChatData.workforce_chat_description}
                  </p>
                </div>
              </Column>
            </Column>
            <Column
              lg={{ span: 8, offset: 1 }}
              style={{ position: 'relative' }}
            >
              <div className='imgbox'>
                <img src={chat} alt='' />
              </div>
              <div className='bookCons'>
                <p>Book a consultation</p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>
      <FooterBotm />
    </div>
    </>
  );
};

const mapStateToProps = state => ({

  workforceLandingData: state.workforcePageReducer.workforceLandingData,
  workforceApproachData: state.workforcePageReducer.workforceApproachData,
  workforceReachOutData: state.workforcePageReducer.workforceReachOutData,
  workforceDrivesData: state.workforcePageReducer.workforceDrivesData,
  workforceSourcingData: state.workforcePageReducer.workforceSourcingData,
  workforceChatData: state.workforcePageReducer.workforceChatData,

});

const mapDispatchToProps = (dispatch) => ({

  workforceLandingPageDataStart: () => dispatch(workforceLandingPageDataStart()),
  workforceApproachPageDataStart: () => dispatch(workforceApproachPageDataStart()),
  workforceReachOutPageDataStart: () => dispatch(workforceReachOutPageDataStart()),
  workforceDrivesPageDataStart: () => dispatch(workforceDrivesPageDataStart()),
  workforceSourcingPageDataStart: () => dispatch(workforceSourcingPageDataStart()),
  workforceChatPageDataStart: () => dispatch(workforceChatPageDataStart()),

});


export default connect(mapStateToProps,mapDispatchToProps)(WorkforceEnablement);


