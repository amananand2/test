import React,{useEffect} from "react";
import MainHeader from "../Homepage/Mainheader/MainHeader";
import bg1 from "./../../img/technologyservices/bg1.png";
import { Grid, Row, Button } from "carbon-components-react";
import { ArrowDown20, ArrowRight20 } from "@carbon/icons-react";
import { SystemsDevopsCode, University, OptimizeCashFlow_02, CloudPakForSecurity, Servers } from "@carbon/pictograms-react";
import Footer from './../Homepage/Footer/Footer';
import { Chat32 } from '@carbon/icons-react';
import {connect} from 'react-redux';
import {TechnologyHeadingDataStart} from "../../actions/index";
import {Loading} from "carbon-components-react";



const Content1=({heading,desc})=>{
return(
  <Row>
  <div className="bx--col-lg-8 image_application">
    <img src={bg1} />
  </div>
  <div className="bx--col-lg-8 tech_application">
    <div className="card bx--col-lg-11 bx--offset-lg-3 technology_application">
      <div className="technology_application_content_icon">
        <SystemsDevopsCode stroke="#f4f4f4" />
      </div>
      <div className="technology_application_content_heading">
        <h1>{heading}</h1>
      </div>
      <div className="technology_application_content_para">
        <p>
          {desc}
        </p>
      </div>
      <div className="technology_application_content_button">
        <Button renderIcon={ArrowDown20}>Learn more</Button>
      </div>
    </div>
  </div>
</Row>
)
}

const Content2=({heading,desc})=>{
  return (
  <Row>
  <div className="bx--col-lg-8 tech_application">
    <div className="card bx--col-lg-11 bx--offset-lg-3 technology_application">
      <div className="technology_application_content_icon">
        <OptimizeCashFlow_02 stroke="#f4f4f4" />
      </div>
      <div className="technology_application_content_heading">
        <h1>{heading}</h1>
      </div>
      <div className="technology_application_content_para">
        <p>
         {desc}
        </p>
      </div>
      <div className="technology_application_content_button">
        <Button renderIcon={ArrowDown20}>Learn more</Button>
      </div>
    </div>
  </div>

  <div className="bx--col-lg-8 image_application">
    <img src={bg1} />
  </div>
</Row>
  )
}


const TechnologyServices = ({TechnologyHeadingDataStart,technologyHeadingData}) => {

  useEffect(()=>{
    TechnologyHeadingDataStart();
  },[])

  // console.log(technologyHeadingData,"technologyHeadingData");

  return (
    <>
    <Loading active={technologyHeadingData.technologyPageLoader}/>
    <div className="technology">
      <MainHeader />
      {/* <Grid fullWidth style=
            {{backgroundImage: `url(${bg1})` }}>
              
            </Grid> */}

      <Grid className="bx--no-gutter" fullWidth>
        <div className="technology__banner">
          <Grid>
            <Row>
              <div className="technology__banner__content">
                <div className="bx-col section-heading">
                  <p>{technologyHeadingData && technologyHeadingData.technology_top_heading}</p>
                </div>
                <div className="bx--col-lg-12 section-mainHead">
                  <div className="section-mainHead">
                    <div className=" section-mainHeading">
                      <h1>{technologyHeadingData && technologyHeadingData.technology_heading}</h1>
                    </div>
                  </div>
                </div>
                {/* sectionpara */}
                <div className="bx--col-lg-12 section-mainHead">
                  <div className="section-paraHeading">
                    <p>
                     {technologyHeadingData && technologyHeadingData.technology_description}
                    </p>
                  </div>
                </div>
                {/* sectionpara */}
                {/* sectionbutton */}
                <div className="bx--col-lg-12 section-mainHead">
                  <div className="section-button">
                    <Button renderIcon={ArrowDown20}>See more</Button>
                    {/* <div className="btn-secondary">
                             <p>Contact us</p>
                         </div> */}
                    <Button
                      renderIcon={ArrowRight20}
                      className="btn-secondary"
                      kind="secondary"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
                {/* sectionbutton */}
              </div>
            </Row>
          </Grid>
        </div>
        {/* section_2 */}
    
        {/* section_2 */}
        {technologyHeadingData && technologyHeadingData.technology_content && technologyHeadingData.technology_content.map((value,index)=> index % 2==0 ? 
              <Content1 heading={value.technology_content_heading} desc={value.technology_content_description}/> : 
              <Content2 heading={value.technology_content_heading} desc={value.technology_content_description}/>          
              ) }
      </Grid>
      <Footer/>
      <div className='chat-box'>
        <Chat32 />
      </div>

    </div>
    </>
  );
};


//TechnologyHeadingDataStart
const mapStateToProps = state => ({

  technologyHeadingData: state.technologyPageReducer.technologyHeadingData

});

const mapDispatchToProps = (dispatch) => ({

  TechnologyHeadingDataStart: () => dispatch(TechnologyHeadingDataStart()),
 
});

export default connect(mapStateToProps,mapDispatchToProps)(TechnologyServices);
