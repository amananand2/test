import React, { useEffect,useState } from 'react';
import MainHeader from "../Homepage/Mainheader/MainHeader";
import { Grid, Row, Button , Loading } from "carbon-components-react";
import { SystemsDevopsCode,OptimizeCashFlow_02 } from "@carbon/pictograms-react";
import { ArrowDown20, ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import FooterBotm from '../Homepage/Footer/FooterBotm';
import bg1 from "./../../img/technologyservices/bg1.png";
import { Chat32 } from '@carbon/icons-react';
import comparebox from "./../../img/businessresiliency/comparebox.svg";
import {connect} from 'react-redux';
import {businessLandingPageDataStart,resiliencyPageDataStart,improvePageDataStart,businessChatPageDataStart} from "../../actions/index";
import {Link} from "react-router-dom";



const BusinessResiliency = ({businessLandingPageDataStart,businessLandData,resiliencyPageDataStart,resiliencyData,improvePageDataStart,improveData,businessChatPageDataStart,businessChatData}) => {

  const [active,setActive] = useState(1)

  useEffect(()=>{
    businessLandingPageDataStart();
    resiliencyPageDataStart();
    improvePageDataStart();
    businessChatPageDataStart();
  },[])

  console.log(improveData,"improveData");
    return (
        <>
            <Loading active={businessLandData.businessPageLoader}/>
            <div className="businessresiliency">
            <MainHeader/>

            <Grid className="bx--no-gutter" fullWidth>

                   {/* section 1 starts*/}
            <div className="businessresiliency__banner">
            <Row className="businessresiliency__banner_img" >
              <Grid>
              
               <div className="bx--col-lg-7 businessresiliency__banner__content">
                  {/* <Grid className="bx--offset-lg-2"> */}
                        <div className="businessresiliency__header_content_icon">
                         <OptimizeCashFlow_02 stroke="#f4f4f4" />
                         </div>
                         <div className="businessresiliency__header_content_heading">
                         <h1>{businessLandData && businessLandData.business_heading}</h1>
                         </div>
                         <div className="businessresiliency__header_content_para">
                         <p>{businessLandData && businessLandData.business_description}</p>
                         </div>
                         <div className="businessresiliency__header_content_button">
                            <Button renderIcon={ArrowDown20}>Learn more</Button>
                         </div>

                         <div className="businessresiliency__header_content_downbutton">
                               <div className="arrow-left">
                                 <ArrowLeft16/>
                                </div>
                                <Link style={{color:"none",textDecoration:"none"}} to ="/technologyservices">
                                <p>Technology Services</p>
                                </Link>
                                 <div className="border"></div>
                                 <Link style={{color:"none",textDecoration:"none"}} to ="/cloud">
                                <p>Next Up: CLOUD</p>
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
                   <div className="businessresiliency__difference">
                   <Grid >
                        <div className=" businessresiliency__difference__heading">
                        <h1>{resiliencyData && resiliencyData.resiliency_heading}</h1>
                        </div>
                    </Grid>
                   {/* difference column starts*/}
                   {/* difference column heading starts*/}
                   <Grid>
                    <Row className=" businessresiliency__difference__column_color ">
                    <div className="businessresiliency__difference__column_color_con">
                    <img src={comparebox}/>         
                        </div>
                    <div className="bx--col bx--no-gutter businessresiliency__difference__column_color_con_continuity ">
                    <div className="businessresiliency__difference__column_color_con_continuity_heading">
                      <p>{resiliencyData && resiliencyData.continuity_heading}</p>
                    </div>
                    <div className="bx--col-lg-16 bx--no-gutter">
                    <div className="businessresiliency__difference__column_color_con_continuity_content">
                       <p>
                         {resiliencyData && resiliencyData.continuity_description}
                      </p>
                    </div>
                    </div>
                    </div>
                    
                    <div className="bx--col bx--no-gutter businessresiliency__difference__column_color_con_resiliency ">
                    <div className="businessresiliency__difference__column_color_con_resiliency_heading">
                      <p>{resiliencyData && resiliencyData.resiliency_heading1}</p>
                    </div>
                    <div className="bx--col-lg-16 bx--no-gutter businessresiliency__difference__column_color_con_resiliency_border">
                       
                    <div className="businessresiliency__difference__column_color_con_resiliency_border_content">
                   
                    <p>{resiliencyData && resiliencyData.resiliency_description}
                    </p>
                    </div>
                    </div>
                    </div>
                    </Row>
                    </Grid>
                   {/* difference column heading ends*/}
                  
                   {/* difference column ends*/}                        
                   </div>
                   {/* section 2 ends*/}

                   {/* section 3 starts*/}
                    <div className="improve_section">
                    
                   {/* heading starts*/}
                    <Grid>
                        <div className="improve_section_heading">
                        <h1>{improveData && improveData.improve_heading}</h1>
                        </div>
                    </Grid>
                   {/* heading ends*/}

                   {/* Tabs start*/}
                   <Grid>
                   <div className="bx--col">
                      <Row>
                          <div className="bx--col-lg-8 improve_section_sub_heading_first">
                            <h1>{improveData && improveData.preparations_heading}</h1>   
                          </div>
                          <div className="bx--col improve_section_sub_heading_second">
                            <h1>{improveData && improveData.solutions_heading}</h1>   
                          </div>
                      </Row>
                      </div>
                    </Grid>
                   {/* Tabs end*/}
                   <Grid>
                       <div className="bx--col improve_section_box">
                       <ul class="improve_section_box_progressbar">
                            <li className={active === 1 ? "improve_section_box_progressbar_active_1" : "improve_section_box_progressbar_1"} onClick={()=>{setActive(1)}}>{improveData && improveData.improve_content && improveData.improve_content[0].top_heading}</li>
                            <li className={active === 2 ? "improve_section_box_progressbar_active_2" : "improve_section_box_progressbar_2"} onClick={()=>{setActive(2)}}>{improveData && improveData.improve_content && improveData.improve_content[1].top_heading}</li>
                            <li className={active === 3 ? "improve_section_box_progressbar_active_3" : "improve_section_box_progressbar_3"} onClick={()=>{setActive(3)}}>{improveData && improveData.improve_content && improveData.improve_content[2].top_heading}</li>
                        </ul>
                       </div>
                   </Grid>
                   {
              improveData && improveData.improve_content && improveData.improve_content.slice(active-1,active).map((value,index)=>{
                return (
                     <>
                        <Grid>
                       <div className="bx--col improve_section_box_content_heading">
                     <p>{value.heading}</p>
                       </div>
                   </Grid>
                   <Grid>
                     <Row>
                       <div className="bx--col-lg-6  improve_section_box_content_sec">
                     <p>{value.description}</p>
                       </div>

                       <div className="bx--col-lg-8 bx--offset-lg-1  improve_section_box_content_sec">
                     <p>{value.long_description}</p>
                       </div>

                       </Row>
                   </Grid>
                   
                     </>
                );

              })
            }
      
                    </div>
                   
                {/* section 3 ends*/}

                {/* section 4 starts*/}
                <div className="chat__application">
                        <Grid>
                            <Row>
                                {/* left content  starts*/} 
                            <div className="bx--col-lg-7">
                             <div className="chat__application__heading">
                                 <p>{businessChatData && businessChatData.business_chat_heading }</p>

                             </div>
                             <div className="chat__application__content">
                                 <p>{businessChatData && businessChatData.business_chat_description}</p>
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


                {/* section 4 ends*/}



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

  businessLandData: state.applicationPageReducer.businessLandData,
  resiliencyData: state.applicationPageReducer.resiliencyData,
  improveData: state.applicationPageReducer.improveData,
  businessChatData: state.applicationPageReducer.businessChatData,

});

const mapDispatchToProps = (dispatch) => ({
  businessLandingPageDataStart: () => dispatch(businessLandingPageDataStart()),
  resiliencyPageDataStart: () => dispatch(resiliencyPageDataStart()),
  improvePageDataStart: () => dispatch(improvePageDataStart()),
  businessChatPageDataStart: () => dispatch(businessChatPageDataStart()),

});
// businessChatPageDataStart
export default connect(mapStateToProps,mapDispatchToProps)(BusinessResiliency)
