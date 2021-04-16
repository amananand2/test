import React, { useEffect } from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import ManPhoto from './../../img/About/jdoe.png';
// import { Link } from "react-router-dom";
import { ArrowRight20 } from '@carbon/icons-react';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import {peoplePageDataStart,aboutHistoryPageDataStart} from "../../actions/index";


const PeopleCard = ({ para, heading, icon }) => {
  return (
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
  )};

// export const PeopleLeadership = () => (
//   <div className='bx--grid bx--no-gutter'>
//     <div className='bx--row bx--no-gutter'>
//       <PeopleCard />
//       <PeopleCard />
//       <PeopleCard />
//       <PeopleCard />
//       <PeopleCard />
//       <PeopleCard />
//       <PeopleCard />
//       <PeopleCard />
//     </div>
//   </div>
// );

const AboutPeople = ({peoplePageDataStart,peopleData,aboutHistoryPageDataStart}) => {
  // const peopleData = useSelector(state => state.landingPageReducer.peopleData);

  // console.log(peopleData,"peopleData");

  useEffect(()=>{
    peoplePageDataStart()
    aboutHistoryPageDataStart()
  },[])

  return (
    <div className='about-people bx--grid--full-width'>
      <div className='bx--grid bx--no-gutter '>
        <div className='bx--row'>
          <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4  bx--col-md-4  bx--col-sm-4'>
            <div className='about--our'>
              <h6>{peopleData && peopleData.people_top_heading}</h6>
              <h3>{peopleData && peopleData.people_heading}</h3>
              <p>
              {peopleData && peopleData.people_description}
              </p>
            </div>
          </div>
          <div className='bx--col bx--offset-lg-1 bx--col-md-8  bx--col-sm-15  '>
            <div className='people--desc'>
              <p>
              {peopleData && peopleData.people_long_description}
              </p>
            </div>
          </div>
        </div>

        <div className='bx--row'>
          <div className='people--tabs'>
            <Tabs>
              <Tab id='tab-1' label='Leadership'>
                <div>
                <div className='bx--grid bx--no-gutter'>
                  <div className='bx--row bx--no-gutter'>
                  {
              peopleData && peopleData.leadership && peopleData.leadership.map((value,index)=>{
                return (
                    <PeopleCard heading={value.leadership_heading} para={value.leadership_description}   />
                );

              })
            }
                  </div>
                </div>
                </div>
              </Tab>

              <Tab id='tab-2' label='Information technology'>
                <div>
                <div className='bx--grid bx--no-gutter'>
                  <div className='bx--row bx--no-gutter'>
                  {
              peopleData && peopleData.lnformation_technology && peopleData.lnformation_technology.map((value,index)=>{
                return (
                    <PeopleCard heading={value.lnformation_technology_heading} para={value.lnformation_technology_description}   />
                );

              })
            }
                  </div>
                </div>
                </div>
              </Tab>

              <Tab id='tab-3' label='Lorem ipsum'>
                <div>
                <div className='bx--grid bx--no-gutter'>
                  <div className='bx--row bx--no-gutter'>
                  {
              peopleData && peopleData.lorem_ipsum && peopleData.lorem_ipsum.map((value,index)=>{
                return (
                    <PeopleCard heading={value.lorem_ipsum_heading} para={value.lorem_ipsum_description}   />
                );

              })
            }
                  </div>
                </div>
                </div>
              </Tab>

              <Tab id='tab-3' label='Lorem ipsum'>
                <div>
                <div className='bx--grid bx--no-gutter'>
                  <div className='bx--row bx--no-gutter'>
                  {
              peopleData && peopleData.lorem_ipsum1 && peopleData.lorem_ipsum1.map((value,index)=>{
                return (
                    <PeopleCard heading={value.lorem_ipsum1_heading} para={value.lorem_ipsum1_description}   />
                );

              })
            }
                  </div>
                </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  peopleData: state.landingPageReducer.peopleData,

});

const mapDispatchToProps = (dispatch) => ({
  peoplePageDataStart: () => dispatch(peoplePageDataStart()),
  aboutHistoryPageDataStart: () => dispatch(aboutHistoryPageDataStart()),

 
  //aboutHistoryPageDataStart
});


export default connect(mapStateToProps,mapDispatchToProps)(AboutPeople);


