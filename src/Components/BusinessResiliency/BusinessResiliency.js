import React from 'react';
import MainHeader from "../Homepage/Mainheader/MainHeader";
import { Grid, Row, Button } from "carbon-components-react";
import { SystemsDevopsCode,OptimizeCashFlow_02 } from "@carbon/pictograms-react";
import { ArrowDown20, ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import FooterBotm from '../Homepage/Footer/FooterBotm';
import bg1 from "./../../img/technologyservices/bg1.png";
import { Chat32 } from '@carbon/icons-react';
import comparebox from "./../../img/businessresiliency/comparebox.svg";



const BusinessResiliency = () => {
    return (
            <div className="businessresiliency">
            <MainHeader/>

            <Grid className="bx--no-gutter" fullWidth>

                   {/* section 1 starts*/}
            <div className="businessresiliency__banner">
              <Grid>
               <Row>
              
               <div className="bx--col-lg-7 businessresiliency__banner__content">
                  {/* <Grid className="bx--offset-lg-2"> */}
                        <div className="businessresiliency__header_content_icon">
                         <OptimizeCashFlow_02 stroke="#f4f4f4" />
                         </div>
                         <div className="businessresiliency__header_content_heading">
                         <h1>Business Resiliency</h1>
                         </div>
                         <div className="businessresiliency__header_content_para">
                         <p>For every minute of downtime, the average business loses about $5,600, according to Gartner. When minutes add up to hours, and hours add up to days, costs can quickly skyrocket out of control. Even though attaining resiliency and continuity comes with a range of benefits, the ultimate objective is to reduce or eliminate downtime. The good news is that no matter how complex—or simple—your IT infrastructure is, Uvation can guide you to greater resiliency and continuity.</p>
                         </div>
                         <div className="businessresiliency__header_content_button">
                            <Button renderIcon={ArrowDown20}>Learn more</Button>
                         </div>

                         <div className="businessresiliency__header_content_downbutton">
                               <div className="arrow-left">
                                 <ArrowLeft16/>
                                </div>
                            
                                <p>Technology Services</p>
                                 <div className="border"></div>
                                <p>Next Up: CLOUD</p>
                                 <div className="arrow-right">
                                 <ArrowRight16/>
                                </div>
                         </div>
                          {/* </Grid> */}
                        </div> 
               </Row>
               </Grid>
                </div>
                   {/* section 1 ends*/}

                   {/* section 2 starts*/}
                   <div className="businessresiliency__difference">
                   <Grid >
                        <div className=" businessresiliency__difference__heading">
                        <h1>Resiliency vs. Continuity — What’s the Difference?</h1>
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
                      <p>CONTINUITY</p>
                    </div>
                    <div className="bx--col-lg-16 bx--no-gutter">
                    <div className="businessresiliency__difference__column_color_con_continuity_content">
                       <p>
                       In terms of the IT infrastructure of your business, “continuity” is achieved when you have the physical tools in place to keep business moving regardless of a threat or disaster. An organization that has achieved continuity has the physical infrastructure in place to prevent or mitigate the degree to which operations are halted due to the network being compromised.
                       As a simple example, consider data storage. A company, ABC Enterprises, may rely on an on-site server to house their data. If they have more than one location, each one could be connected to headquarters using a wide area network (WAN). Through the WAN, the satellite offices can pull data from that central server. However, this structure may inhibit continuity. If there was a power outage at headquarters, the server could go offline. The satellite offices would no longer be able to access the data they need to continue business—at least not until power is restored, as well as the WAN connections.In terms of the IT infrastructure of your business, “continuity” is achieved when you have the physical tools in place to keep business moving regardless of a threat or disaster. An organization that has achieved continuity has the physical infrastructure in place to prevent or mitigate the degree to which operations are halted due to the network being compromised.
                      </p>
                    </div>
                    </div>
                    </div>
                    
                    <div className="bx--col bx--no-gutter businessresiliency__difference__column_color_con_resiliency ">
                    <div className="businessresiliency__difference__column_color_con_resiliency_heading">
                      <p>RESILIENCY</p>
                    </div>
                    <div className="bx--col-lg-16 bx--no-gutter businessresiliency__difference__column_color_con_resiliency_border">
                       
                    <div className="businessresiliency__difference__column_color_con_resiliency_border_content">
                   
                    <p>Resiliency refers to the ability of the entire infrastructure—technical, organizational, and human—to respond to and recover from an adverse event. Therefore, continuity is an element of resiliency, but they are not the same thing. At the same time, they are inseparable because without continuity tools, an organization cannot be resilient.
                    Resiliency refers to the ability of the entire infrastructure—technical, organizational, and human—to respond to and recover from an adverse event. Therefore, continuity is an element of resiliency, but they are not the same thing. At the same time, they are inseparable because without continuity tools, an organization cannot be resilient.
                    Resiliency refers to the ability of the entire infrastructure—technical, organizational, and human—to respond to and recover from an adverse event. Therefore, continuity is an element of resiliency, but they are not the same thing. At the same time, they are inseparable because without continuity tools, an organization cannot be resilient.
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
                        <h1>How to Improve Resiliency and Continuity</h1>
                        </div>
                    </Grid>
                   {/* heading ends*/}

                   {/* Tabs start*/}
                   <Grid>
                   <div className="bx--col">
                      <Row>
                          <div className="bx--col-lg-8 improve_section_sub_heading_first">
                            <h1>STEP 1: Preparations</h1>   
                          </div>
                          <div className="bx--col improve_section_sub_heading_second">
                            <h1>STEP 2: Solutions</h1>   
                          </div>
                      </Row>
                      </div>
                    </Grid>
                   {/* Tabs end*/}
                   <Grid>
                       <div className="bx--col improve_section_box">
                       <ul class="improve_section_box_progressbar">
                            <li className="improve_section_box_progressbar_1">Evaluate</li>
                            <li className="improve_section_box_progressbar_2">Identify Weaknesses</li>
                            <li className="improve_section_box_progressbar_3">Map the Network</li>
                        </ul>
                       </div>
                   </Grid>
                   <Grid>
                       <div className="bx--col improve_section_box_content_heading">
                     <p>Evaluate the Cost of an Outage</p>
                       </div>
                   </Grid>
                   <Grid>
                     <Row>
                       <div className="bx--col-lg-6  improve_section_box_content_sec">
                     <p>While there are several types of outages, you should focus on those that are most likely to impact your organization. Some outages may come with a higher cost than others. For example, a localized interruption caused by a failed router may cost less than the failure of a server responsible for point-of-sale operations. It’s best to take your time and consider each possibility using a systematic, pragmatic approach. Here are some of the different types of outages you may want to consider:</p>
                       </div>

                       <div className="bx--col-lg-8 bx--offset-lg-1  improve_section_box_content_sec">
                     <p>• Events that damage the organization’s reputation. These may include ransomware attacks, data leaks, or hijacked social media accounts. Again, the cost of these varies. However, you can use case studies to get an idea as to the financial impact.</p>
                       </div>

                       </Row>
                   </Grid>
                   
                    </div>
                   
                {/* section 3 ends*/}

                {/* section 4 starts*/}
                <div className="chat__application">
                        <Grid>
                            <Row>
                                {/* left content  starts*/} 
                            <div className="bx--col-lg-7">
                             <div className="chat__application__heading">
                                 <p>Chat with an Uvation expert for a 30-minute strategy session at no cost</p>
                             </div>
                             <div className="chat__application__content">
                                 <p>Get in touch for a consultation call or answer to any questions you might have.</p>
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
    )
}

export default BusinessResiliency
