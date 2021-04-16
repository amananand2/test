import React, { useEffect } from 'react'
import MainHeader from "../Homepage/Mainheader/MainHeader";
import {Link} from "react-router-dom";
import { Grid, Row, Button, Loading } from "carbon-components-react";
import { ArrowDown20, ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import { SystemsDevopsCode, University, OptimizeCashFlow_02, datacenterPakForSecurity, Servers } from "@carbon/pictograms-react";
import FooterBotm from '../Homepage/Footer/FooterBotm';
import bg1 from "./../../img/technologyservices/bg1.png";
import contentimg from "./../../img/datacenter/contentimg.svg";
import first from "./../../img/datacenter/first.svg";
import second from "./../../img/datacenter/second.svg";
import third from "./../../img/datacenter/third.svg";
import fourth from "./../../img/datacenter/fourth.svg";
import chatimg from "./../../img/datacenter/chatimage.png";
import uwv1 from "./../../img/cloud/uwv1.svg";
import uwv2 from "./../../img/cloud/uwv2.svg";
import { Chat32 } from '@carbon/icons-react';
import {connect} from 'react-redux';
import {centerLandingPageDataStart,centerBenifitsPageDataStart,centerDeployPageDataStart,centerExplainedPageDataStart,centerServicesPageDataStart,centerTechnologiesPageDataStart,centerChatPageDataStart} from "../../actions/index";


const Content1=({num,heading,desc})=>{
  return(
    <>
          <div className="bx--col-lg-7">
          <div className="datacenter__benefits__content__first__heading">
              <div className="box">
                  {num}
              </div>
              <p>{heading}</p>
          </div>
          <div className="datacenter__benefits__content__first__content">
          <p>{desc}</p>
          </div>
          </div>
    </>
  )
}

const Content2=({num,heading,desc})=>{
  return(
    <>
         <div className="bx--col-lg-7 bx--offset-lg-1 bx--no-gutter ">
          <div className="datacenter__benefits__content__first__heading">
              <div className="box">
                  {num}
              </div>
              <p>{heading}</p>
          </div>
          <div className="datacenter__benefits__content__first__content">
          <p>{desc}</p>
          </div>
          </div>
    </>
  )
}

const DataCenter = ({centerLandingPageDataStart,centerLandingData,centerBenifitsPageDataStart,
                     centerBenifitsData,centerDeployPageDataStart,centerDeployData,centerExplainedPageDataStart,centerExplainedData,centerServicesPageDataStart,
                     centerServicesData,centerTechnologiesPageDataStart,centerTechnologiesData,centerChatPageDataStart,centerChatData}) => {
  useEffect(()=>{
    centerLandingPageDataStart();
    centerBenifitsPageDataStart();
    centerDeployPageDataStart();
    centerExplainedPageDataStart();
    centerServicesPageDataStart();
    centerTechnologiesPageDataStart();
    centerChatPageDataStart();
  },[])

   console.log(centerChatData,"centerChatData");

    return (
      <>
      <Loading active={centerLandingData.dataCenterPageLoader}/>
        <div className="datacenter">
         <MainHeader/>
      <Grid className="bx--no-gutter" fullWidth>
                   {/* section 1 starts*/}
                   <div className="datacenter__banner">
            <Row className="datacenter__banner_img">
            <Grid>
           <div className="bx--col-lg-7 datacenter__banner__content">
                  {/* <Grid className="bx--offset-lg-3"> */}
                        <div className="datacenter__header_content_icon">
                         <Servers stroke="#f4f4f4" />
                         </div>
                         <div className="datacenter__header_content_heading">
                         <h1>{centerLandingData && centerLandingData.data_center_heading}</h1>
                         </div>
                         <div className="datacenter__header_content_para">
                         <p>{centerLandingData && centerLandingData.data_center_description}</p>
                         </div>
                         <div className="datacenter__header_content_button">
                            <Button renderIcon={ArrowDown20}>Learn more</Button>
                         </div>

                         <div className="datacenter__header_content_downbutton">
                               <div className="arrow-left">
                                 <ArrowLeft16/>
                                </div>
                                <Link style={{color:"none",textDecoration:"none"}} to ="/technologyservices">
                                <p>Technology Services</p>
                                </Link>
                                 <div className="border"></div>
                                <Link style={{color:"none",textDecoration:"none"}} to ="/managedit">
                                <p>Next Up: MANAGED IT</p>
                                </Link>
                                 <div className="arrow-right">
                                 <ArrowRight16/>
                                </div>
                         </div>
                          {/* </Grid> */}
                        </div> 
                        <div className="bx--col-lg-8 bx--offset-lg-1">
                          {/* <img src={headerimg}/> */}
                          </div>
                   </Grid>
                   </Row>
          </div>
                   {/* section 1 ends*/}

                               {/* section 2 starts*/}
      <div className="datacenter_benefits">
      <Grid >
      <div className="bx--col-lg-10   datacenter__benefits__heading">
        <h1>{centerBenifitsData && centerBenifitsData.benefits_heading}</h1>
      </div>
      </Grid>


       {/* first row */}


       <Grid>
          <Row>
          {centerBenifitsData && centerBenifitsData.benefits_content && centerBenifitsData.benefits_content.map((value,index)=> index % 2==0 ? 
              <Content1 num={value.s_r} heading={value.benefits_content_heading} desc={value.benefits_content_description}/> : 
              <Content2 num={value.s_r} heading={value.benefits_content_heading} desc={value.benefits_content_description}/>          
              ) }
          </Row>
      </Grid>

      {/* first row ends */}

      {/* second row starts */}
      {/* <Grid>
          <Row>
          <div className="bx--col-lg-7 ">
          <div className="datacenter__benefits__content__first__heading">
              <div className="box">
                  3
              </div>
              <p>Reliable Disaster Recovery</p>
          </div>
          <div className="datacenter__benefits__content__first__content">
          <p>Data center services provide you with more opportunities to protect your organization from risks. Create your own disaster recovery sites, so you can maintain operations even during a catastrophic outage. Locate your disaster recovery site remotely to protect your assets even when your production location is put at physical risk. With a strategically placed recovery site and a comprehensive disaster recovery plan, you can bring your entire system back online in no time.</p>
          </div>
          </div>

          <div className="bx--col-lg-7 bx--offset-lg-1 bx--no-gutter ">
          <div className="datacenter__benefits__content__first__heading">
              <div className="box">
                  4
              </div>
              <p>Flexible Deployment Options</p>
          </div>
          <div className="datacenter__benefits__content__first__content">
          <p>Choose from several unique options when deploying your data center to ensure security, continuity, and scalability. Rent space in a data center and securely place your hardware, so you can maintain your servers more affordably and reduce risk in the process. Even if you don’t own your hardware, you can rent servers and nodes from colocation service providers to scale your operations quickly.</p>
          </div>
          </div>
          </Row>
      </Grid> */}

      {/* second row ends */}

      </div>
         {/* section 2 ends*/}


                    {/* section 3  starts*/}   
                    <div className="develop__application">
                        <Grid>
                            <Row>
                                {/* left content  starts*/} 
                            <div className="bx--col-lg-8  ">
                             <div className="develop__application__heading ">
                                 <p>{centerDeployData && centerDeployData.deploy_heading}</p>
                             </div>
                             <div className="develop__application__content ">
                                 <p>{centerDeployData && centerDeployData.deploy_description}</p>
                             </div>
                            </div>
                                {/* left content ends*/}
                                {/* right content starts*/}
                                <div className="bx--col-lg-7 bx--offset-lg-1 develop__application__image">
                                    <img src={bg1}/>
                                        <div class="book_consultation">
                                        <p>Book a Consultation</p>
                                        </div>
                                </div>
                                {/* right content ends*/}
                            </Row>
                           
                            
                        </Grid>
                      

                    </div>
                    {/* section 3  ends*/}

                      {/* section 4 starts*/}
                      <div className="datacenter_computing_unique">
          <Grid>
          <div className="bx--col-lg">
            <h1>{centerExplainedData && centerExplainedData.explained_heading}</h1>
            </div>
          </Grid>

            <div className="datacenter_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 datacenter_computing_unique_section1_index"> 
             <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[0].explained_s_r}</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  datacenter_computing_unique_section1_left_content">
                  <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[0].explained_content_heading}</p>
                  <div className="datacenter_computing_unique_section1_left_content_icon">
                  <img src={first}/>
                  </div>
                 </div>
                 <div className="bx--col-lg-11    datacenter_computing_unique_section1_right_content">
                  <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[0].explained_content_description}</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="datacenter_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 datacenter_computing_unique_section1_index"> 
             <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[1].explained_s_r}</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  datacenter_computing_unique_section1_left_content">
                  <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[1].explained_content_heading}</p>
                  <div className="datacenter_computing_unique_section1_left_content_icon">
                  <img src={second}/>
                  </div>
                 </div>
                 <div className="bx--col-lg-11 datacenter_computing_unique_section1_right_content">
                  <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[1].explained_content_description}</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="datacenter_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 datacenter_computing_unique_section1_index"> 
             <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[2].explained_s_r}</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  datacenter_computing_unique_section1_left_content">
                  <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[2].explained_content_heading}</p>
                  <div className="datacenter_computing_unique_section1_left_content_icon">
                  <img src={third}/>
                  </div>
                 </div>
                 <div className="bx--col-lg-11    datacenter_computing_unique_section1_right_content">
                  <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[2].explained_content_description}</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="datacenter_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 datacenter_computing_unique_section1_index"> 
             <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[3].explained_s_r}</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-4 datacenter_computing_unique_section1_left_content">
                  <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[3].explained_content_heading}</p>
                  <div className="datacenter_computing_unique_section1_left_content_icon">
                  <img src={fourth}/>
                  </div>
                 </div>
                 <div className="bx--col-lg-11   bx--offset-lg-1 datacenter_computing_unique_section1_right_content">
                   <p>{centerExplainedData && centerExplainedData.explained_content && centerExplainedData.explained_content[3].explained_content_description}</p>
                 </div>
               </Row>
             </Grid>
            </div>

          
         </div>
         {/* section 4 ends*/}

         {/* section 5 starts*/}
         <div className="datacenter_services">
         <div className="datacenter_services_heading">
           <h1>{centerServicesData && centerServicesData.center_services_heading}</h1>
           <p>{centerServicesData && centerServicesData.center_services_description}</p>
       </div>
       <Grid>
           <Row>
               <div className="bx--col datacenter_services_content">
                   <div className="datacenter_services_content_img">
                   <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                  <div className="datacenter_services_content_heading">
                      <p>{centerServicesData && centerServicesData.center_services_content && centerServicesData.center_services_content[0].center_services_heading}</p>
                   </div>
                   <div className="datacenter_services_content_para">
                      <p>{centerServicesData && centerServicesData.center_services_content && centerServicesData.center_services_content[0].center_services_description}</p>
                   </div>     
               </div>

               <div className="bx--col datacenter_services_content_second">  
                   <div className="datacenter_services_content_second_img">
                   <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                  <div className="datacenter_services_content_second_heading">
                      <p>{centerServicesData && centerServicesData.center_services_content && centerServicesData.center_services_content[1].center_services_heading}</p>
                   </div>
                   <div className="datacenter_services_content_second_para">
                      <p>{centerServicesData && centerServicesData.center_services_content && centerServicesData.center_services_content[1].center_services_description}</p>
                   </div>     
               </div>
           </Row>
       </Grid>

       <Grid>
           <Row>
               <div className="bx--col datacenter_services_content_third">
                   <div className="datacenter_services_content_third_img">
                   <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                  <div className="datacenter_services_content_third_heading">
                      <p>{centerServicesData && centerServicesData.center_services_content && centerServicesData.center_services_content[2].center_services_heading}</p>
                   </div>
                   <div className="datacenter_services_content_third_para">
                      <p>{centerServicesData && centerServicesData.center_services_content && centerServicesData.center_services_content[2].center_services_description}</p>
                   </div>     
               </div>

               <div className="bx--col datacenter_services_content_fourth">  
                   <div className="datacenter_services_content_fourth_img">
                   <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                  <div className="datacenter_services_content_fourth_heading">
                      <p>{centerServicesData && centerServicesData.center_services_content && centerServicesData.center_services_content[3].center_services_heading}</p>
                   </div>
                   <div className="datacenter_services_content_fourth_para">
                      <p>{centerServicesData && centerServicesData.center_services_content && centerServicesData.center_services_content[3].center_services_description}</p>
                   </div>     
               </div>
           </Row>
       </Grid>

         </div>
         {/* section 5 ends*/}

         {/* section 6 starts*/}
         <div className="datacenter_technologies">
         <div className="datacenter_technologies_heading">
           <h1>{centerTechnologiesData && centerTechnologiesData.technologies_heading}</h1>
           <p>{centerTechnologiesData && centerTechnologiesData.technologies_description}</p>
       </div>

       <Grid className="datacenter_technologies_topspace">
         <Row>
           <div className="bx--col-lg-8  datacenter_technologies_topspace_heading">
               
           <h1>{centerTechnologiesData && centerTechnologiesData.technologies_content && centerTechnologiesData.technologies_content[0].technologies_content_heading }</h1>
           <p>
            {centerTechnologiesData && centerTechnologiesData.technologies_content && centerTechnologiesData.technologies_content[0].technologies_content_description}
           </p>
           
           </div>
           <div className="bx--col-lg-8  datacenter_technologies_topspace_image">
           <img src={contentimg}/>
           </div>
         </Row>
       </Grid>

       <Grid >
         <Row >
         <div className="bx--col-lg-8  datacenter_technologies_section2_image">
           <img src={uwv2}/>
           </div>
           <div className="bx--col-lg-6  bx--offset-lg-1 datacenter_technologies_section2_heading">
           <h1>{centerTechnologiesData && centerTechnologiesData.technologies_content && centerTechnologiesData.technologies_content[1].technologies_content_heading}</h1>
           <p>
             {centerTechnologiesData && centerTechnologiesData.technologies_content && centerTechnologiesData.technologies_content[1].technologies_content_description}
           </p>
           </div>
          
         </Row>
       </Grid>

       <Grid className="datacenter_technologies_thirdcard">
         <Row>
           <div className="bx--col-lg-8  datacenter_technologies_thirdcard_heading">
           <h1>{centerTechnologiesData && centerTechnologiesData.technologies_content && centerTechnologiesData.technologies_content[2].technologies_content_heading}</h1>
           <p>
            {centerTechnologiesData && centerTechnologiesData.technologies_content && centerTechnologiesData.technologies_content[2].technologies_content_description}
           </p>
           </div>
           <div className="bx--col-lg-8  datacenter_technologies_thirdcard_image">
           <img src={uwv1}/>
           </div>
         </Row>
       </Grid>


         </div>
         {/* section 6 ends*/}
           {/* section 7 starts*/}

           <div className="chat__application">
                        <Grid >
                            <Row >
                                {/* left content  starts*/} 
                            <div className="bx--col-lg-7 ">
                             <div className="chat__application__heading ">
                                 <p>{centerChatData && centerChatData.datacenter_chat_heading}</p>
                             </div>
                             <div className="chat__application__content ">
                                 <p>{centerChatData && centerChatData.datacenter_chat_description}</p>
                             </div>
                            </div>
                                {/* left content ends*/}
                                {/* right content starts*/}
                                <div className="bx--col-lg-8 bx--offset-lg-1 chat__application__image">
                                    <img src={chatimg}/>
                                        <div class="book_consultation">
                                        <p>Book a Consultation</p>
                                        </div>
                                </div>
                                {/* right content ends*/}
                            </Row>
                           
                            
                        </Grid>
                      

                    </div>



                    {/* section 7 ends*/}   
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

  centerLandingData: state.dataCenterPageReducer.centerLandingData,
  centerBenifitsData: state.dataCenterPageReducer.centerBenifitsData,
  centerDeployData: state.dataCenterPageReducer.centerDeployData,
  centerExplainedData: state.dataCenterPageReducer.centerExplainedData,
  centerServicesData: state.dataCenterPageReducer.centerServicesData,
  centerTechnologiesData: state.dataCenterPageReducer.centerTechnologiesData,
  centerChatData: state.dataCenterPageReducer.centerChatData,
  
  //centerChatData

});

const mapDispatchToProps = (dispatch) => ({
  centerLandingPageDataStart: () => dispatch(centerLandingPageDataStart()),
  centerBenifitsPageDataStart: () => dispatch(centerBenifitsPageDataStart()),
  centerDeployPageDataStart: () => dispatch(centerDeployPageDataStart()),
  centerExplainedPageDataStart: () => dispatch(centerExplainedPageDataStart()),
  centerServicesPageDataStart: () => dispatch(centerServicesPageDataStart()),
  centerTechnologiesPageDataStart: () => dispatch(centerTechnologiesPageDataStart()),
  centerChatPageDataStart: () => dispatch(centerChatPageDataStart()),

  //centerChatPageDataStart
});


export default connect(mapStateToProps,mapDispatchToProps)(DataCenter);

