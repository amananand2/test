import { ArrowRight16 } from '@carbon/icons-react';
import { Robotics } from '@carbon/pictograms-react';
import { Button } from 'carbon-components-react';
import { useSelector } from 'react-redux';
import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';

import {caseStudiesPageDataStart} from "../../../actions/index";

const HeaderVal = {
  title: 'CASE STUDIES',
  heading: 'Technology impact on industries',
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est.',
};

const CardVal = [
  {
    icon: <Robotics />,
    title: 'case studies',
    heading: 'manufacturing',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est.',
  },
  {
    icon: <Robotics />,
    title: 'case studies',
    heading: 'manufacturing',
    subheading: 'Supportive sub-section title',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est.',
  },
  {
    icon: <Robotics />,
    title: 'case studies',
    subheading: 'Supportive sub-section title',
    heading: 'manufacturing',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est.',
  },
  {
    icon: <Robotics />,
    title: 'case studies',
    heading: 'manufacturing',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna congue est.',
  },
];
const SectionHeader = () => {
  return (
    <div className='bx--col-lg-6 section_header'>
      <div className='title'>
        <h6>{HeaderVal.title}</h6>
      </div>
      <div className='heading'>
        <h3>{HeaderVal.heading}</h3>
      </div>
      <div className='subheading'>
        <h4>{HeaderVal.subheading}</h4>
      </div>
      <div className='about'>
        <p>{HeaderVal.about}</p>
      </div>
    </div>
  );
};

// const Card = (props) => {
//   return (
//     <div className='bx--col cards'>
//       <div className='icon'>{CardVal[0].icon}</div>
//       <div className='title'>
//         <h6>{CardVal[0].title}</h6>
//       </div>
//       <div className='heading'>
//         <h3>{CardVal[0].heading}</h3>
//       </div>
//       <div className='about'>
//         <p>{CardVal[0].about}</p>
//       </div>
//       <div className='card-btn'>
//         <div className='learnmore '>
//           <Button kind='primary' className='lrg-btn'>
//             Learn more
//             <div className='learn'>{<ArrowRight16 />}</div>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
const Cardbot = (props) => {
  // console.log(props,"props");
  return (
    <div className='bx--col cardbot'>
      <div className='icon'>{CardVal[0].icon}</div>
      <div className='title'>
        <h6>{props.title}</h6>
      </div>
      <div className='heading'>
        <h3>{props.heading}</h3>
      </div>
      <div className='about'>
        <p>{props.about}</p>
      </div>
      <div className='card-btn'>
        <div className='learnmore '>
          <Button kind='primary' className='lrg-btn'>
            Learn more
            <div className='learn'>{<ArrowRight16 />}</div>
          </Button>
        </div>
      </div>
    </div>
  );
};
const Cardsm = (props) => {
  return (
    <div className='bx--col cardsm'>
      <div className='heading'>
        <h4>{CardVal[0].heading}</h4>
      </div>
      <div className='about'>
        <p>{CardVal[0].about}</p>
      </div>
      <div className='icon'>
        <ArrowRight16 />
      </div>
    </div>
  );
};

const CaseStudy = ({caseStudiesPageDataStart,caseStudiesData}) => {
  // const landingData = useSelector(state => state.landingPageReducer.landingData);
  // console.log(landingData,"landingData...")

  // const[data,setData]=useState();

  useEffect(()=>{
    caseStudiesPageDataStart()
  },[])

  console.log(caseStudiesData,"caseStudiesData");
  // const Card = (props) => {
    
  //   return (
  //     <div className='bx--col cards'>
  //       <div className='icon'>{landingData.tabthird.CardVal[0].icon}</div>
  //       <div className='title'>
  //         <h6>{CardVal[0].title}</h6>
  //       </div>
  //       <div className='heading'>
  //         <h3>{CardVal[0].heading}</h3>
  //       </div>
  //       <div className='about'>
  //         <p>{CardVal[0].about}</p>
  //       </div>
  //       <div className='card-btn'>
  //         <div className='learnmore '>
  //           <Button kind='primary' className='lrg-btn'>
  //             Learn more
  //             <div className='learn'>{<ArrowRight16 />}</div>
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  
  // console.log(data && data.tabthird.map((index,value)=>
  //   value
  // ),"data...")

// console.log(landingData && landingData.tabthird[0].industries_data_description,"landingData.tabthird[0].industries_data_description");
  return (
    <div className='casestudy'>
      <div className='bx--grid'>
        <div className='bx--row'>
        <div className='bx--col-lg-6 section_header'>
      <div className='title'>
        <h6>{caseStudiesData && caseStudiesData.case_top_heading}</h6>
      </div>
      <div className='heading'>
        <h3></h3>
      </div>
      <div className='subheading'>
        <h4>{caseStudiesData && caseStudiesData.case_heading}</h4>
      </div>
      <div className='about'>
        <p>{caseStudiesData && caseStudiesData.case_description}</p>
      </div>
    </div>

{/* <SectionHeader/> */}

        </div>
        <div className='bx--row  card-row'>
          <div className='bx--col bx--no-gutter tab '>
            {caseStudiesData &&
              <div className='bx--col cards'>
              <div className='icon'>{<Robotics/>}</div>
              <div className='title'>
                <h6>{caseStudiesData && caseStudiesData.manu_case_heading}</h6>
              </div>
              <div className='heading'>
                <h3>{caseStudiesData && caseStudiesData.manu_heading}</h3>
              </div>
              <div className='about'>
                <p>{caseStudiesData && caseStudiesData.manu_description}</p>
              </div>
              <div className='card-btn'>
                <div className='learnmore '>
                  <Button kind='primary' className='lrg-btn'>
                    Learn more
                    <div className='learn'>{<ArrowRight16 />}</div>
                  </Button>
                </div>
              </div>
            </div>
              } 
          </div>
          <div className='bx--col-lg-10 bx--no-gutter tab '>
            <div className='bx--row bx--no-gutter--right'>
              <div className='bx--col-lg-8'>
                {caseStudiesData &&
                 <div className='bx--col cardsm'>
                    <div className='heading'>
                      <h4>{caseStudiesData && caseStudiesData.supportive1_heading}</h4>
                    </div>
                    <div className='about'>
                      <p>{caseStudiesData && caseStudiesData.supportive1_description}</p>
                    </div>
                    <div className='icon'>
                      <ArrowRight16 />
                    </div>
                </div>
                 }
              </div>
              <div className='bx--col-lg-8 '>
              {caseStudiesData && 
                 <div className='bx--col cardsm'>
                    <div className='heading'>
                      <h4>{caseStudiesData && caseStudiesData.supportive2_heading}</h4>
                    </div>
                    <div className='about'>
                      <p>{caseStudiesData && caseStudiesData.supportive2_description}</p>
                    </div>
                    <div className='icon'>
                      <ArrowRight16 />
                    </div>
                </div>
                }
              </div>
              <div className='bx--col '>
                <Cardbot
                  icon={CardVal[3].icon}
                  title={caseStudiesData && caseStudiesData.health_top_heading}
                  heading={caseStudiesData && caseStudiesData.health_heading}
                  about={caseStudiesData && caseStudiesData.health_description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  caseStudiesData: state.landingPageReducer.caseStudiesData
});

const mapDispatchToProps = (dispatch) => ({
  caseStudiesPageDataStart: () => dispatch(caseStudiesPageDataStart())
});


export default connect(mapStateToProps,mapDispatchToProps)(CaseStudy);

