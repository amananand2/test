import React, { useEffect } from 'react'
import MainHeader from "../Homepage/Mainheader/MainHeader";
import { Grid, Row, Button,Column,Loading } from "carbon-components-react";
import { ArrowDown20, ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import { SystemsDevopsCode,OptimizeCashFlow_02,CloudManagedServices } from "@carbon/pictograms-react";
import uwv1 from "./../../img/cloud/uwv1.svg";
import uwv2 from "./../../img/cloud/uwv2.svg";
import FooterBotm from '../Homepage/Footer/FooterBotm';
import { Chat32 } from '@carbon/icons-react';
import bg1 from "./../../img/technologyservices/bg1.png";
import {connect} from 'react-redux';
import {cloudLandingPageDataStart,cloudBenifitsPageDataStart,cloudGetPageDataStart,cloudComputingPageDataStart,cloudUniquePageDataStart,cloudDifferentPageDataStart,cloudChatPageDataStart} from "../../actions/index";
import {Link} from "react-router-dom";
import first from "./../../img/cloud/first.svg";
import second from "./../../img/cloud/second.svg";
import third from "./../../img/cloud/third.svg";
import fourth from "./../../img/cloud/fourth.svg";



const Content1=({num,heading,desc})=>{

  return(
  <>
    <div className="bx--col-lg-7 ">
          <div className="cloud__benefits__content__first__heading">
              <div className="box">
                  {num}
              </div>
              <p>{heading}</p>
          </div>
          <div className="cloud__benefits__content__first__content">
          <p>{desc}</p>
          </div>
          </div>
  </>
  )

}

const Content2=({num,heading,desc})=>{

  return (
    <>
         <div className="bx--col-lg-7 bx--offset-lg-1 ">
          <div className="cloud__benefits__content__first__heading">
              <div className="box">
                  {num}
              </div>
              <p>{heading}</p>
          </div>
          <div className="cloud__benefits__content__first__content">
          <p>{desc}</p>
          </div>
          </div>

    </>
  )
}

const Cloud = ({cloudLandingPageDataStart,cloudLandingData,cloudBenifitsPageDataStart,cloudBenifitsData,cloudGetData,
                cloudGetPageDataStart,cloudComputingPageDataStart,cloudComputingData,cloudUniquePageDataStart,cloudUniqueData,cloudDifferentPageDataStart,
                cloudDifferentData,cloudChatPageDataStart,cloudChatData}) => {

  useEffect(()=>{
    cloudLandingPageDataStart();
    cloudBenifitsPageDataStart();
    cloudGetPageDataStart();
    cloudComputingPageDataStart();
    cloudUniquePageDataStart();
    cloudDifferentPageDataStart();
    cloudChatPageDataStart();
  },[])

  console.log(cloudChatData,"cloudChatData");

    return (
      <>
      <Loading active={cloudLandingData.cloudPageLoader}/>
        <div className="cloud">
        <MainHeader/>
      <Grid className="bx--no-gutter" fullWidth>
                   {/* section 1 starts*/}
          <div className="cloud__banner">
             <Row className="cloud__banner_img">
            <Grid>
           <div className="bx--col-lg-7 cloud__banner__content">
                  {/* <Grid className="bx--offset-lg-3"> */}
                        <div className="cloud__header_content_icon">
                         <OptimizeCashFlow_02 stroke="#f4f4f4" />
                         </div>
                         <div className="cloud__header_content_heading">
                         <h1>{cloudLandingData && cloudLandingData.cloud_heading}</h1>
                         </div>
                         <div className="cloud__header_content_para">
                         <p>{cloudLandingData && cloudLandingData.cloud_description}</p>
                         </div>
                         <div className="cloud__header_content_button">
                            <Button renderIcon={ArrowDown20}>Learn more</Button>
                         </div>

                         <div className="cloud__header_content_downbutton">
                               <div className="arrow-left">
                                 <ArrowLeft16/>
                                </div>
                                <Link style={{color:"none",textDecoration:"none"}} to ="/technologyservices">
                                <p>Technology Services</p>
                                </Link>
                                 <div className="border"></div>
                                <Link style={{color:"none",textDecoration:"none"}} to ="/datacenter">
                                <p>Next Up: DATACENTER</p>
                                </Link>
                                 <div className="arrow-right">
                                 <ArrowRight16/>
                                </div>
                         </div>
                          {/* </Grid> */}
                        </div> 
                   </Grid>
                   </Row>
           
          </div>
                   {/* section 1 ends*/}
               {/* section 2 starts*/}
      <div className="cloud_benefits">
      <Grid >
      <div className="bx--col-lg-10   cloud__benefits__heading">
        <h1>{cloudBenifitsData && cloudBenifitsData.benefits_heading}</h1>
      </div>
      </Grid>


       {/* first row */}
       <Grid>
          <Row>
          {cloudBenifitsData && cloudBenifitsData.benefits_content && cloudBenifitsData.benefits_content.map((value,index)=> index % 2==0 ? 
              <Content1 num={value.sr_no} heading={value.benefit_heading} desc={value.benefit_description}/> : 
              <Content2 num={value.sr_no} heading={value.benefit_heading} desc={value.benefit_description}/>          
              ) }
          </Row>
      </Grid>

      {/* first row ends */}

      {/* second row starts */}
    

      {/* second row ends */}

      </div>
         {/* section 2 ends*/}
             {/* section 3 starts*/}
      <div className="cloud_with_uvation">
        <Grid>
       <div className="cloud_with_uvation_heading">
           <h1>{cloudGetData && cloudGetData.cloud_get_heading}</h1>
           <p>{cloudGetData && cloudGetData.cloud_get_description}</p>
       </div>
       </Grid>

       
       <div className="cloud_with_uvation_content">
       <Grid className="cloud_with_uvation_content_topspace">
         <Row>
           <div className="bx--col-lg-8  cloud_with_uvation_content_topspace_heading">
           <h1>{cloudGetData && cloudGetData.cloud_get_content && cloudGetData.cloud_get_content[0].cloud_get_content_heading}</h1>
           <p>
             {cloudGetData && cloudGetData.cloud_get_content && cloudGetData.cloud_get_content[0].cloud_get_content_description}
           </p>
           </div>
           <div className="bx--col-lg-8  cloud_with_uvation_content_topspace_image">
           <img src={uwv1}/>
           </div>
         </Row>
       </Grid>

       <Grid >
         <Row >
         <div className="bx--col-lg-8  cloud_with_uvation_content_section2_image">
           <img src={uwv2}/>
           </div>
           <div className="bx--col-lg-7 bx--offset-lg-1 cloud_with_uvation_content_section2_heading">
           <h1>{cloudGetData && cloudGetData.cloud_get_content && cloudGetData.cloud_get_content[1].cloud_get_content_heading}</h1>
           <p>
             {cloudGetData && cloudGetData.cloud_get_content && cloudGetData.cloud_get_content[1].cloud_get_content_description}
           </p>
           </div>
          
         </Row>
       </Grid>

       </div>

      

      </div>                    
         {/* section 3 ends*/}
          {/* section 4 starts*/}
       <div className="cloud_computing_explained">
         <Grid>
         <div className="bx--col-lg-10">
          <h1>{cloudComputingData && cloudComputingData.cloud_computing_heading}</h1>
          </div>
         </Grid>

         <Grid>
          <Row>
            <div className="bx--col-lg-5  cloud_computing_explained_sections">
             <p>{cloudComputingData && cloudComputingData.cloud_computing_content && cloudComputingData.cloud_computing_content[0].cloud_computing_content_heading}</p>
             <OptimizeCashFlow_02 stroke="#f4f4f4" />
             <div className="cloud_computing_explained_sections_para">
              <p>{cloudComputingData && cloudComputingData.cloud_computing_content && cloudComputingData.cloud_computing_content[0].cloud_computing_content_description}</p>
             </div>
            </div>

            <div className="bx--col-lg-5  cloud_computing_explained_sections_section2">
             <p>{cloudComputingData && cloudComputingData.cloud_computing_content && cloudComputingData.cloud_computing_content[1].cloud_computing_content_heading}</p>
             <OptimizeCashFlow_02 stroke="#f4f4f4" />
             <div className="cloud_computing_explained_sections_section2_para">
              <p>{cloudComputingData && cloudComputingData.cloud_computing_content && cloudComputingData.cloud_computing_content[1].cloud_computing_content_description}</p>
             </div>
            </div>

            <div className="bx--col-lg-5 cloud_computing_explained_sections">
             <p>{cloudComputingData && cloudComputingData.cloud_computing_content && cloudComputingData.cloud_computing_content[2].cloud_computing_content_heading}</p>
             <OptimizeCashFlow_02 stroke="#f4f4f4" />
             <div className="cloud_computing_explained_sections_para">
              <p>{cloudComputingData && cloudComputingData.cloud_computing_content && cloudComputingData.cloud_computing_content[2].cloud_computing_content_description}</p>
             </div>
            </div>

          </Row>
         </Grid>
       </div>
         {/* section 4 ends*/}

          {/* section 5 starts*/}
          <div className="cloud_computing_unique">
          <Grid>
          <div className="bx--col-lg-10">
            <h1>{cloudUniqueData && cloudUniqueData.computing_unique_heading}</h1>
            </div>
          </Grid>

            <div className="cloud_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 cloud_computing_unique_section1_index"> 
             <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[0].sr_no}</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  cloud_computing_unique_section1_left_content">
                  <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[0].computing_unique_content_heading}</p>
                  <div className="cloud_computing_unique_section1_left_content_icon">
                  <img src={first}/>
                  </div>
                 </div>
                 <div className="bx--col-lg-11    cloud_computing_unique_section1_right_content">
                  <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[0].computing_unique_content_logo_description}</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="cloud_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 cloud_computing_unique_section1_index"> 
             <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[1].sr_no}</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  cloud_computing_unique_section1_left_content">
                  <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[1].computing_unique_content_heading}</p>
                  <div className="cloud_computing_unique_section1_left_content_icon">
                  <img src={second}/>
                  </div>
                 </div>
                 <div className="bx--col-lg-11 cloud_computing_unique_section1_right_content">
                  <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[1].computing_unique_content_logo_description}</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="cloud_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 cloud_computing_unique_section1_index"> 
             <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[2].sr_no}</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  cloud_computing_unique_section1_left_content">
                  <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[2].computing_unique_content_heading}</p>
                  <div className="cloud_computing_unique_section1_left_content_icon">
                  <img src={third}/>
                  </div>
                 </div>
                 <div className="bx--col-lg-11    cloud_computing_unique_section1_right_content">
                  <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[2].computing_unique_content_logo_description}</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="cloud_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 cloud_computing_unique_section1_index"> 
             <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[3].sr_no}</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-4 cloud_computing_unique_section1_left_content">
                  <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[3].computing_unique_content_heading}</p>
                  <div className="cloud_computing_unique_section1_left_content_icon">
                  <img src={fourth}/>
                  </div>
                 </div>
                 <div className="bx--col-lg-11   bx--offset-lg-1 cloud_computing_unique_section1_right_content">
                  <p>{cloudUniqueData && cloudUniqueData.computing_unique_content && cloudUniqueData.computing_unique_content[3].computing_unique_content_logo_description}</p>
                 </div>
               </Row>
             </Grid>
            </div>

          
         </div>
         {/* section 5 ends*/}
         <div className="cloud_computing_varities">
           <Grid>
            <Row>
           <div className="cloud_computing_varities_left_content ">

              <h1>{cloudDifferentData && cloudDifferentData.different_heading}</h1>
              <p>{cloudDifferentData && cloudDifferentData.different_description}</p>

           </div>
           </Row>
           </Grid>

           <Grid>
           <Row>
           <div className="bx--col-lg-5 different_kinds">
             <div className="icon">
             <OptimizeCashFlow_02 stroke="#f4f4f4" />
             </div>
             <p>{cloudDifferentData && cloudDifferentData.different_content && cloudDifferentData.different_content[0].different_content_heading}</p>

             <div className="para">
              <p>{cloudDifferentData && cloudDifferentData.different_content && cloudDifferentData.different_content[0].different_content_description}</p>
             </div>
         
            
             </div>

             <div className="bx--col-lg-5 different_kinds">
             <div className="icon">
             <OptimizeCashFlow_02 stroke="#f4f4f4" />
             </div>
             <p>{cloudDifferentData && cloudDifferentData.different_content && cloudDifferentData.different_content[1].different_content_heading}</p>

             <div className="para">
              <p>{cloudDifferentData && cloudDifferentData.different_content && cloudDifferentData.different_content[1].different_content_description}</p>
             </div>
         
            
             </div>

             <div className="bx--col-lg-5 different_kinds">
             <div className="icon">
             <OptimizeCashFlow_02 stroke="#f4f4f4" />
             </div>
             <p>{cloudDifferentData && cloudDifferentData.different_content && cloudDifferentData.different_content[2].different_content_heading}</p>

             <div className="para">
              <p>{cloudDifferentData && cloudDifferentData.different_content && cloudDifferentData.different_content[2].different_content_description}</p>
             </div>
         
            
             </div>

             </Row>
            
            </Grid>
         </div>

         <div className="chat__application">
                        <Grid>
                            <Row>
                                {/* left content  starts*/} 
                            <div className="bx--col-lg-7">
                             <div className="chat__application__heading">
                                 <p>{cloudChatData && cloudChatData.cloud_chat_heading}</p>
                             </div>
                             <div className="chat__application__content">
                                 <p>{cloudChatData && cloudChatData.cloud_chat_description}</p>
                             </div>
                            </div>
                                {/* left content ends*/}
                                {/* right content starts*/}
                                <div className="bx--col-lg-8 bx--offset-lg-1 chat__application__image">
                                    <img src={bg1}/>
                                        <div class="book_consultation">
                                        <p>Book a Consultation</p>
                                        </div>
                                </div>
                                {/* right content ends*/}
                            </Row>
                           
                            
                        </Grid>
                      

                    </div>
             
                   {/* section 6 ends*/}
                      <FooterBotm/>
                      <div className='chat-box'>
        <Chat32 />
      </div>


        </Grid>
        </div>
    </>
    )
}

const mapStateToProps = state => ({

  cloudLandingData: state.cloudPageReducer.cloudLandingData,
  cloudBenifitsData: state.cloudPageReducer.cloudBenifitsData,
  cloudGetData: state.cloudPageReducer.cloudGetData,
  cloudComputingData: state.cloudPageReducer.cloudComputingData,
  cloudUniqueData: state.cloudPageReducer.cloudUniqueData,
  cloudDifferentData: state.cloudPageReducer.cloudDifferentData,
  cloudChatData: state.cloudPageReducer.cloudChatData,


  
//cloudChatData
});

const mapDispatchToProps = (dispatch) => ({
  cloudLandingPageDataStart: () => dispatch(cloudLandingPageDataStart()),
  cloudBenifitsPageDataStart: () => dispatch(cloudBenifitsPageDataStart()),
  cloudGetPageDataStart: () => dispatch(cloudGetPageDataStart()),
  cloudComputingPageDataStart: () => dispatch(cloudComputingPageDataStart()),
  cloudUniquePageDataStart: () => dispatch(cloudUniquePageDataStart()),
  cloudDifferentPageDataStart: () => dispatch(cloudDifferentPageDataStart()),
  cloudChatPageDataStart: () => dispatch(cloudChatPageDataStart()),

});
// cloudChatPageDataStart
export default connect(mapStateToProps,mapDispatchToProps)(Cloud)

