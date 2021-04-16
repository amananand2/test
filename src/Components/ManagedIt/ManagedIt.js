import React, { useEffect } from 'react';
import MainHeader from "../Homepage/Mainheader/MainHeader";
import { Grid, Row, Button,Loading } from "carbon-components-react";
import { ArrowDown20, ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import headerimg from "./../../img/managedit/headerimg.png";
import { SystemsDevOpsAnalyze,SystemsDevopsCode, University, OptimizeCashFlow_02, datacenterPakForSecurity, Servers,GlobalPartner,GlobalAnalytics } from "@carbon/pictograms-react";
import FooterBotm from '../Homepage/Footer/FooterBotm';
import bg1 from "./../../img/technologyservices/bg1.png";
import hardDrive from "./../../img/managedit/hardDrive.svg";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import first from "../../img/managedit/first.svg";
import second from "../../img/managedit/second.svg";
import third from "../../img/managedit/third.svg";
import fourth from "../../img/managedit/fourth.svg";
import fifth from "../../img/managedit/fifth.svg";
import sixth from "../../img/managedit/sixth.svg";
import seven from "../../img/managedit/seven.svg";
import eight from "../../img/managedit/eight.svg";


import chatimg from "./../../img/datacenter/chatimage.png";
import {manageditLandingPageDataStart,manageditBenefitsPageDataStart,manageditIncorporatePageDataStart,manageditManagedPageDataStart,manageditSolutionPageDataStart,manageditUvationPageDataStart,manageditChatPageDataStart} from "../../actions/index";


const Content1=({num,heading,desc})=>{
    return (
        <>
           <div className="bx--col-lg-7 ">
          <div className="managedit__benefits__content__first__heading">
              <div className="box">
                  {num}
              </div>
              <p>{heading}</p>
          </div>
          <div className="managedit__benefits__content__first__content">
          <p>{desc}</p>
          </div>
          </div>

        </>
    )
}

const Content2 = ({num,heading,desc,index}) =>{
    console.log(index,"index");
    return(
    <>
         <div className="bx--col-lg-7 bx--offset-lg-1 bx--no-gutter ">
          <div className={index === 5 ? "managedit__benefits__content__sixth__heading":"managedit__benefits__content__first__heading"}>
              <div className="box">
                  {num}
              </div>
              <p>{heading}</p>
          </div>
          <div className="managedit__benefits__content__first__content">
          <p>{desc}</p>
          </div>
          </div>
    </>
    )
}

const ManagedIt = ({manageditLandingPageDataStart,manageditLandingData,manageditBenefitsPageDataStart,manageditBenifitsData,
                    manageditIncorporatePageDataStart,manageditInCorporateData,manageditManagedPageDataStart,manageditManagedData,manageditSolutionPageDataStart,
                    manageditSolutionData,manageditUvationData,manageditChatPageDataStart,manageditChatData}) => {
    useEffect(()=>{
        manageditLandingPageDataStart();
        manageditBenefitsPageDataStart();
        manageditIncorporatePageDataStart();
        manageditManagedPageDataStart();
        manageditSolutionPageDataStart();
        manageditUvationPageDataStart();
        manageditChatPageDataStart();
    },[])

    //  console.log(manageditChatData,"manageditChatData");
    return (
        <>
        <Loading active={manageditLandingData.manageditPageLoader}/>
        <div className="managedit">
             <MainHeader/>
      <Grid className="bx--no-gutter" fullWidth>
                {/* section 1 starts*/}
                <div className="managedit__banner">
                    <Row className="managedit__banner_img" >
            <Grid>
            
           <div className="bx--col-lg-7 managedit__banner__content ">
                  {/* <Grid className="bx--offset-lg-3"> */}
                        <div className="managedit__header_content_icon">
                         <Servers stroke="#f4f4f4" />
                         {/* <SystemsDevOpsMonitor /> */}
                        
                         </div>
                         <div className="managedit__header_content_heading">
                         <h1>{manageditLandingData && manageditLandingData.managed_it_heading}</h1>
                         </div>
                         <div className="managedit__header_content_para">
                         <p>{manageditLandingData && manageditLandingData.managed_it_description}</p>
                         </div>
                         <div className="managedit__header_content_button">
                            <Button renderIcon={ArrowDown20}>Learn more</Button>
                         </div>

                         <div className="managedit__header_content_downbutton">
                               <div className="arrow-left">
                                 <ArrowLeft16/>
                                </div>
                                <Link style={{color:"none",textDecoration:"none"}} to ="/technologyservices">
                                <p>Technology Services</p>
                                </Link>
                                 <div className="border"></div>
                                <Link style={{color:"none",textDecoration:"none"}} to ="/workforce">
                                <p>Next Up: WORKFORCE ENABLEMENT</p>
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
                          {/* section 1 ends */}

 {/* section 2 starts*/}
 <div className="managedit_benefits">
      <Grid >
      <div className="bx--col-lg-10   managedit__benefits__heading">
        <h1>{manageditBenifitsData && manageditBenifitsData.benefits_heading}</h1>
      </div>
      </Grid>


       {/* first row */}
       <Grid>
          <Row>
          {manageditBenifitsData && manageditBenifitsData.benefits_content && manageditBenifitsData.benefits_content.map((value,index)=> index % 2==0 ? 
              <Content1 num={value.s_r} heading={value.benefits_content_heading} desc={value.benefits_content_description} index={index}/> : 
              <Content2 num={value.s_r} heading={value.benefits_content_heading} desc={value.benefits_content_description} index={index}/>          
              ) }
                 
          </Row>
      </Grid>

    
 {/* fourth row ends*/}

      </div>
         {/* section 2 ends*/}
          {/* section 3  starts*/}   
          <div className="develop__application">
                        <Grid>
                            <Row>
                                {/* left content  starts*/} 
                            <div className="bx--col-lg-8  ">
                             <div className="develop__application__heading ">
                                 <p>{manageditInCorporateData && manageditInCorporateData.incorporate_heading}</p>
                             </div>
                             <div className="develop__application__content ">
                                 <p>{manageditInCorporateData && manageditInCorporateData.incorporate_description}</p>
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

                    {/* section 4  starts*/}
                    <div className="managedit_works">
                   <Grid>
                       <Row>
                       <div className="bx--col-lg-16  managedit_works_heading">
                        <p>{manageditManagedData && manageditManagedData.managed_top_heading}</p>
                        <div className="bx--col-lg-16 managedit_works_heading_border">
                        </div>
                       </div>
                    {/* Row 1  starts*/}
                   
                       <div className="bx--col-lg-16">
                           <Row>
                       <div className="bx--col-lg-5  bx--no-gutter   managedit_works_subheading_one_left">
                           <p>{manageditManagedData && manageditManagedData.managed_heading}</p>
                       </div>
                       <div className="bx--col-lg-10 bx--offset-lg-1 bx--no-gutter    managedit_works_subheading_one_right">
                           <p>{manageditManagedData && manageditManagedData.managed_description}</p>
                       </div>
                       </Row>

                       <div className= "bx--col-lg-16 managedit_works_subheading_border">
                        </div>
                       </div>
                      

                        <div className="bx--col-lg-5 managedit_works_subheading_content">
                         <div className=" managedit_works_subheading_content_number">
                             <p>{manageditManagedData && manageditManagedData.works_content && manageditManagedData.works_content[0].s_r}</p>
                         </div>
                         <div className="managedit_works_subheading_content_heading">
                             <p>{manageditManagedData && manageditManagedData.works_content && manageditManagedData.works_content[0].works_content_heading}</p>
                         </div>

                         <div className="managedit_works_subheading_content_icon">
                             <img src={first}/>
                         </div>

                         <div className="bx--no-gutter managedit_works_subheading_content_desc">
                         <p>{manageditManagedData && manageditManagedData.works_content && manageditManagedData.works_content[0].works_content_description}</p>
                        </div>
                        </div>

                        <div className="bx--col-lg-5 bx--no-gutter bx--offset-lg-1 managedit_works_subheading_content">
                         <div className=" managedit_works_subheading_content_number">
                             <p>{manageditManagedData && manageditManagedData.works_content && manageditManagedData.works_content[1].s_r}</p>
                         </div>
                         <div className="managedit_works_subheading_content_heading">
                             <p>{manageditManagedData && manageditManagedData.works_content && manageditManagedData.works_content[1].works_content_heading}</p>
                         </div>

                         <div className="managedit_works_subheading_content_icon">
                             <img src={second}/>
                         </div>

                         <div className="managedit_works_subheading_content_desc">
                         <p>{manageditManagedData && manageditManagedData.works_content && manageditManagedData.works_content[1].works_content_description}</p>
                        </div>
                        </div>

                        <div className="bx--col-lg-4 bx--no-gutter bx--offset-lg-1 managedit_works_subheading_content">
                         <div className=" managedit_works_subheading_content_number">
                             <p>{manageditManagedData && manageditManagedData.works_content && manageditManagedData.works_content[2].s_r}</p>
                         </div>
                         <div className="managedit_works_subheading_content_heading">
                             <p>{manageditManagedData && manageditManagedData.works_content && manageditManagedData.works_content[2].works_content_heading}</p>
                         </div>

                         <div className="managedit_works_subheading_content_icon">
                             <img src={third}/>
                         </div>

                         <div className="managedit_works_subheading_content_desc">
                         <p>{manageditManagedData && manageditManagedData.works_content && manageditManagedData.works_content[2].works_content_description}</p>
                        </div>
                        </div>
                    {/* Row 1  starts*/}
                   
                    {/* Row 2  starts*/}

                        
                     
                        <div className="bx--col-lg-16">
                        <div className= "bx--col-lg-16 managedit_works_subheading_border">
                        </div>
                           <Row>
                       <div className="bx--col-lg-5  bx--no-gutter   managedit_works_subheading_two_left">
                           <p>{manageditManagedData && manageditManagedData.advanced_heading}</p>
                       </div>
                       <div className="bx--col-lg-10 bx--offset-lg-1 bx--no-gutter    managedit_works_subheading_two_right">
                           <p>{manageditManagedData && manageditManagedData.advanced_description}</p>
                       </div>
                       </Row>

                       <div className= "bx--col-lg-16 managedit_works_subheading_two_borderdown">
                        </div>
                       </div>

                       <div className="bx--col-lg-5 managedit_works_subheading_content">
                         <div className=" managedit_works_subheading_content_number">
                             <p>{manageditManagedData && manageditManagedData.advanced_content && manageditManagedData.advanced_content[0].s_r}</p>
                         </div>
                         <div className="managedit_works_subheading_content_heading">
                             <p>{manageditManagedData && manageditManagedData.advanced_content && manageditManagedData.advanced_content[0].advanced_content_heading}</p>
                         </div>

                         <div className="managedit_works_subheading_content_icon">
                             <img src={fourth}/>
                         </div>

                         <div className="bx--no-gutter managedit_works_subheading_content_desc">
                         <p>{manageditManagedData && manageditManagedData.advanced_content && manageditManagedData.advanced_content[0].advanced_content_description}</p>
                        </div>
                        </div>

                        <div className="bx--col-lg-5 bx--no-gutter bx--offset-lg-1 managedit_works_subheading_content">
                         <div className=" managedit_works_subheading_content_number">
                             <p>{manageditManagedData && manageditManagedData.advanced_content && manageditManagedData.advanced_content[1].s_r}</p>
                         </div>
                         <div className="managedit_works_subheading_content_heading">
                             <p>{manageditManagedData && manageditManagedData.advanced_content && manageditManagedData.advanced_content[1].advanced_content_heading}</p>
                         </div>

                         <div className="managedit_works_subheading_content_icon">
                             <img src={fifth}/>
                         </div>

                         <div className="managedit_works_subheading_content_desc">
                         <p>{manageditManagedData && manageditManagedData.advanced_content && manageditManagedData.advanced_content[1].advanced_content_description}</p>
                        </div>
                        </div>
                    {/* Row 2 ends*/}
                    {/* Row 3 starts*/}
                    <div className="bx--col-lg-16">
                        <div className= "bx--col-lg-16 managedit_works_subheading_border">
                        </div>
                           <Row>
                       <div className="bx--col-lg-5  bx--no-gutter   managedit_works_subheading_two_left">
                           <p>{manageditManagedData && manageditManagedData.managed_services_heading}</p>
                       </div>
                       <div className="bx--col-lg-10 bx--offset-lg-1 bx--no-gutter    managedit_works_subheading_two_right">
                           <p>{manageditManagedData && manageditManagedData.managed_services_description}</p>
                       </div>
                       </Row>

                       <div className= "bx--col-lg-16 managedit_works_subheading_two_borderdown">
                        </div>
                       </div>

                       <div className="bx--col-lg-5 managedit_works_subheading_content">
                         <div className=" managedit_works_subheading_content_number">
                             <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[0].s_r}</p>
                         </div>
                         <div className="managedit_works_subheading_content_heading">
                             <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[0].managed_services_content_heading}</p>
                         </div>

                         <div className="managedit_works_subheading_content_icon">
                             <img src={sixth}/>
                         </div>

                         <div className="bx--no-gutter managedit_works_subheading_content_desc">
                         <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[0].managed_services_content_description}</p>
                        </div>
                        </div>

                        <div className="bx--col-lg-5 bx--no-gutter bx--offset-lg-1 managedit_works_subheading_content">
                         <div className=" managedit_works_subheading_content_number">
                             <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[1].s_r}</p>
                         </div>
                         <div className="managedit_works_subheading_content_heading">
                             <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[1].managed_services_content_heading}</p>
                         </div>

                         <div className="managedit_works_subheading_content_icon">
                             <img src={seven}/>
                         </div>

                         <div className="managedit_works_subheading_content_desc">
                         <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[1].managed_services_content_description}</p>
                        </div>
                        </div>

                        <div className="bx--col-lg-4 bx--no-gutter bx--offset-lg-1 managedit_works_subheading_content">
                         <div className=" managedit_works_subheading_content_number">
                             <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[2].s_r}</p>
                         </div>
                         <div className="managedit_works_subheading_content_heading">
                             <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[2].managed_services_content_heading}</p>
                         </div>

                         <div className="managedit_works_subheading_content_icon">
                             <img src={eight}/>
                         </div>

                         <div className="managedit_works_subheading_content_desc">
                         <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[2].managed_services_content_description}</p>
                        </div>
                        </div>

                        <div className="bx--col-lg-5 managedit_works_subheading_content">
                         <div className=" managedit_works_subheading_content_number">
                             <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[3].s_r}</p>
                         </div>
                         <div className="managedit_works_subheading_content_heading">
                             <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[3].managed_services_content_heading}</p>
                         </div>

                         <div className="managedit_works_subheading_content_icon">
                             <img src={hardDrive}/>
                         </div>

                         <div className="bx--no-gutter managedit_works_subheading_content_desc">
                         <p>{manageditManagedData && manageditManagedData.managed_services_content && manageditManagedData.managed_services_content[3].managed_services_content_description}</p>
                        </div>
                        </div>


                    {/* Row 3 ends*/}
                       </Row>
                   </Grid>
                   </div>
                    {/* section 4  ends*/}
                    {/* section 5  starts*/}
                    <div className="managedit_services">
         <div className="managedit_services_heading">
           <h1>{manageditSolutionData && manageditSolutionData.it_solution_heading}</h1>
           <p>{manageditSolutionData && manageditSolutionData.it_solution_description}</p>
       </div>
       <Grid>
           <Row>
               <div className="bx--col-lg-5 managedit_services_content">
                   <div className="managedit_services_content_img">
                   <OptimizeCashFlow_02  />
                  </div>
                  <div className="managedit_services_content_heading">
                      <p>{manageditSolutionData && manageditSolutionData.it_solution_content && manageditSolutionData.it_solution_content[0].it_solution_content_heading}</p>
                   </div>
                   <div className="managedit_services_content_para">
                       <p>{manageditSolutionData && manageditSolutionData.it_solution_content && manageditSolutionData.it_solution_content[0].it_solution_content_description}</p>
                   </div>     
               </div>

               <div className="bx--col-lg-5 managedit_services_content_second">  
                   <div className="managedit_services_content_second_img">
                   <GlobalPartner />
                  </div>
                  <div className="managedit_services_content_second_heading">
                      <p>{manageditSolutionData && manageditSolutionData.it_solution_content && manageditSolutionData.it_solution_content[1].it_solution_content_heading}</p>
                   </div>
                   <div className="managedit_services_content_second_para">
                       <p>{manageditSolutionData && manageditSolutionData.it_solution_content && manageditSolutionData.it_solution_content[1].it_solution_content_description}</p>
                   </div>     
               </div>
               <div className="bx--col-lg-5 managedit_services_content_second">  
                   <div className="managedit_services_content_second_img">
                   <GlobalAnalytics />
                  </div>
                  <div className="managedit_services_content_second_heading">
                      <p>{manageditSolutionData && manageditSolutionData.it_solution_content && manageditSolutionData.it_solution_content[2].it_solution_content_heading}</p>
                   </div>
                   <div className="managedit_services_content_second_para">
                      <p>{manageditSolutionData && manageditSolutionData.it_solution_content && manageditSolutionData.it_solution_content[2].it_solution_content_description}</p>
                   </div>     
               </div>
           </Row>
       </Grid>

      

         </div>
                    {/* section 5 ends*/}
                    {/* section 6 starts*/}
                    <div className="uvation_solution">
                        <Grid>
                            <Row>
                            <div className="bx--col-lg-16 ">
                        <p className="uvation_solution_heading">{manageditUvationData && manageditUvationData.uvation_solution_heading}</p>
                            <p className="bx--col-lg-8 bx--no-gutter uvation_solution_subheading">{manageditUvationData && manageditUvationData.uvation_solution_description}</p>
                       </div>
                    {/* first row starts*/}
                  
                       <div className="bx--col-lg-16">
                       <Row>
                       {manageditUvationData && manageditUvationData.uvation_solution_content && manageditUvationData.uvation_solution_content.map((value,index)=>{
                                return(
                                   <>
                           <div className={index === 1 || index===4 ? "bx--col-lg-5 bx--no-gutter uvation_solution_subcontent_second" :"bx--col-lg-5 bx--no-gutter uvation_solution_subcontent"}>
                           <div className={index === 1 || index===4 ? "uvation_solution_subcontent_icon_second" : "uvation_solution_subcontent_icon"}>
                            </div>
                            <div className={index === 1 || index===4 ? "uvation_solution_subcontent_heading_second" : "uvation_solution_subcontent_heading"}>
                                <p>{value.uvation_solution_content_heading}</p>
                            </div>
                            <div className={index === 1 || index===4 ? "uvation_solution_subcontent_desc_second" : "uvation_solution_subcontent_desc"}>
                                <p>{value.uvation_solution_content_description}</p>
                            </div>
                           </div>
                                   </>
                                )
                            }) }
                           </Row>
                      

                       

                       
                    {/* first row ends*/}

                    {/* second row starts*/}
                           
                           

                       </div>
                    {/* second row ends*/}

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
                                 <p>{manageditChatData && manageditChatData.managed_it_chat}</p>
                             </div>
                             <div className="chat__application__content ">
                                 <p>{manageditChatData && manageditChatData.managed_it_chat_description}</p>
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
       </Grid>
        </div>
        </>
    )
}

const mapStateToProps = state => ({

    manageditLandingData: state.manageditPageReducer.manageditLandingData,
    manageditBenifitsData: state.manageditPageReducer.manageditBenifitsData,
    manageditInCorporateData: state.manageditPageReducer.manageditInCorporateData,
    manageditManagedData: state.manageditPageReducer.manageditManagedData,
    manageditSolutionData: state.manageditPageReducer.manageditSolutionData,
    manageditUvationData: state.manageditPageReducer.manageditUvationData,
    manageditChatData: state.manageditPageReducer.manageditChatData,

    //manageditChatData
  
  });
  
  const mapDispatchToProps = (dispatch) => ({
    manageditLandingPageDataStart: () => dispatch(manageditLandingPageDataStart()),
    manageditBenefitsPageDataStart: () => dispatch(manageditBenefitsPageDataStart()),
    manageditIncorporatePageDataStart: () => dispatch(manageditIncorporatePageDataStart()),
    manageditManagedPageDataStart: () => dispatch(manageditManagedPageDataStart()),
    manageditSolutionPageDataStart: () => dispatch(manageditSolutionPageDataStart()),
    manageditUvationPageDataStart: () => dispatch(manageditUvationPageDataStart()),
    manageditChatPageDataStart: () => dispatch(manageditChatPageDataStart()),
    
    //manageditChatPageDataStart
  });

export default connect(mapStateToProps,mapDispatchToProps)(ManagedIt)
