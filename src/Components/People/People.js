import React, { useEffect, useRef,useState } from 'react';
import { Tab, Tabs } from 'carbon-components-react';
import ManPhoto from './../../img/About/jdoe.png';

import { ArrowRight20 } from '@carbon/icons-react';
import Footer from '../Homepage/Footer/Footer';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import {Loading} from "carbon-components-react"
import {connect} from 'react-redux';
import {peoplesPageDataStart,teamPeoplePageDataStart} from "../../actions/index";

const PeopleCard = ({ para, heading, icon }) => (
  <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4'>
    <div className='people-image-card'>
      <div>
        <img src={ManPhoto} alt='' />
      </div>
      <div className='image--card--detail'>
        <p>{para}</p>
        <h4>{heading}</h4>
        <div className='icon'>
          {icon} <ArrowRight20 />
        </div>
      </div>
    </div>
  </div>
);

// export const Leadership = () => (
 
// );

const scrollToRef = (ref) => window.scrollTo(0, 0);
const People = ({peoplesPageDataStart,peoplesData,teamPeoplePageDataStart,teamPeopleData}) => {
  const myRef = useRef(null);
  const[activeSlide,setActiveSlide]= useState(1)

  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
    peoplesPageDataStart();
    teamPeoplePageDataStart();
  }, []);

  // console.log(teamPeopleData,"teamPeopleData");

  return (
    <>
     <Loading active={peoplesData.peoplesPageLoader}/>
      <MainHeader />
      <div className='people' ref={myRef}>
        <div className='bx--grid--full-width banner'>
          <div className='bx--grid '>
            <div className='bx--row'>
              <div className='bx--col-lg-7 bx--no-gutter--right'>
                <div className='heading '>
                  <h1>{peoplesData && peoplesData.people_heading}</h1>
                </div>
                <div className='sub-heading'>
                  <p>
                 {peoplesData && peoplesData.people_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bx--grid--full-width people-row'>
          <div className='bx--grid'>
            <div className='bx--row '>
              <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4  bx--col-md-4  bx--col-sm-4'>
                <div className='about--our'>
                  <h6>{teamPeopleData && teamPeopleData.team_top_heading}</h6>
                  <h3>{teamPeopleData && teamPeopleData.team_heading}</h3>
                  <p>
                 {teamPeopleData && teamPeopleData.team_description}
                  </p>
                </div>
              </div>
              <div className='bx--col bx--offset-lg-1 bx--col-md-8  bx--col-sm-15  '>
                <div className='people--desc'>
                  <p>
                 {teamPeopleData && teamPeopleData.team_description1}
                  
                  </p>
                </div>
              </div>
            </div>
            <div className='bx--row'>
              <div className='leadership'>
                <Tabs>
                  <Tab id='tab-1' label='Leadership' onClick={()=>{setActiveSlide(1)}}>
                    <div>
                    <div className='bx--grid bx--no-gutter '>
                        <div className='bx--row bx--no-gutter '>
                        {activeSlide === 1 && teamPeopleData && teamPeopleData.leadership_content && teamPeopleData.leadership_content.map(value=>{
                            return(
                          <PeopleCard para={value.leadership_content_heading }  heading={value.leadership_content_description}/>
                            )
                          }) }
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab id='tab-1' label='Board Members' onClick={()=>{setActiveSlide(2)}}>
                    <div>
                    <div className='bx--grid bx--no-gutter '>
                        <div className='bx--row bx--no-gutter '>
                        {activeSlide === 2 && teamPeopleData && teamPeopleData.board_members_content && teamPeopleData.board_members_content.map(value=>{
                            return(
                          <PeopleCard para={value.board_members_content_heading }  heading={value.board_members_content_description}/>
                            )
                          }) }
                        </div>
                      </div>
                      {/* <Leadership /> */}
                    </div>
                  </Tab>
                  <Tab id='tab-1' label='Executives' onClick={()=>{setActiveSlide(3)}}>
                    <div>
                    <div className='bx--grid bx--no-gutter '>
                        <div className='bx--row bx--no-gutter '>
                        {activeSlide === 3 && teamPeopleData && teamPeopleData.description_content && teamPeopleData.description_content.map(value=>{
                            return(
                          <PeopleCard para={value.description_content_heading }  heading={value.description_content_description}/>
                            )
                          }) }
                        </div>
                      </div>
                      {/* <Leadership /> */}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


//peoplesPageDataStart
const mapStateToProps = state => ({

  peoplesData: state.peoplePageReducer.peoplesData,
  teamPeopleData: state.peoplePageReducer.teamPeopleData,

//teamPeopleData
    
});

const mapDispatchToProps = (dispatch) => ({

  peoplesPageDataStart: () => dispatch(peoplesPageDataStart()),
  teamPeoplePageDataStart: () => dispatch(teamPeoplePageDataStart()),


  //teamPeoplePageDataStart

});


export default connect(mapStateToProps,mapDispatchToProps)(People);

