import React from 'react';
import MainHeader from "../Homepage/Mainheader/MainHeader";
import { Grid, Row, Button } from "carbon-components-react";
import { SystemsDevopsCode,CodeSyntax } from "@carbon/pictograms-react";
// import { ArrowDown20, ArrowRight20 } from "@carbon/icons-react";
import { ArrowDown20, ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import { Chat32 } from '@carbon/icons-react';
import bg1 from "./../../img/technologyservices/bg1.png";
import Footer from './../Homepage/Footer/Footer';
import FooterBotm from '../Homepage/Footer/FooterBotm';







const Application = () => {
    return (
        <div className="application">
            <MainHeader/>
            <Grid className="bx--no-gutter" fullWidth>
            <div className="application__banner">
            <Grid>
                  <Row>
              <div className="bx--col-lg-7 application__banner__content">
                        <div className="application__header_content_icon">
                         <SystemsDevopsCode stroke="#f4f4f4" />
                         </div>
                         <div className="application__header_content_heading">
                         <h1>Application</h1>
                         </div>
                         <div className="application__header_content_para">
                         <p>Custom applications can give you automation, enhanced functionality, and customer connection you need to propel your business to the next level.
                            By going with a customized solution, you avoid settling for an off-the-shelf solution that ends up forcing you to “put a round peg in a square hole.” 
                            With Uvation, you can have your app designed to your specifications, from scratch, and in-line with your most important objectives.</p>
                         </div>
                         <div className="application__header_content_button">
                            <Button renderIcon={ArrowDown20}>Learn more</Button>
                         </div>

                         <div className="application__header_content_downbutton">
                         <div className="arrow-left">
                                 <ArrowLeft16/>
                                </div>
                            
                                <p>Technology Services</p>
                                <div className="border"></div>
                                <p className="sec-button">Next Up: Business Resiliency</p>
                                <div className="arrow-right">
                                 <ArrowRight16/>
                                </div>
                         </div>
                        </div> 
                  </Row>
                  </Grid>
                </div>
                    {/* section 2 */}
                   
                    <div className="application_benifit">
                    <Grid>
                <div className="bx--col-lg-8 bx--no-gutter  application__benifts__heading">
                  <h1>Benefits of Custom Application Development</h1>
                </div>
                </Grid>
 
                 {/* first row */}
                <Grid>
                    <Row>
                    <div className="bx--col-lg-7 ">
                    <div className="application__benifts__content__first__heading">
                        <div className="box">
                            1
                        </div>
                        <p>AUTOMATION</p>
                    </div>
                    <div className="application__benifts__content__first__content">
                    <p>There are likely several time-consuming, repetitive tasks you or your employees execute on a daily or weekly basis. 
                    One of the benefits of a more digital business landscape is many repetitive or mundane tasks can be automated using a custom application. 
                    This can save valuable time, reduce frustration, and significantly cut down on human error.</p>
                    </div>
                    </div>

                    <div className="bx--col-lg-7 bx--offset-lg-1 ">
                    <div className="application__benifts__content__first__heading">
                        <div className="box">
                            2
                        </div>
                        <p>Facilitate collaboration</p>
                    </div>
                    <div className="application__benifts__content__first__content">
                    <p>Because an application can serve as a central digital workspace, it can help people from different teams come together. 
                        Using an application that encourages collaboration, team members can combine forces to tackle current obstacles and design ways to help your business grow.</p>
                    </div>
                    </div>
                    </Row>
                </Grid>

                {/* first row ends */}

                {/* second row starts */}
                <Grid>
                    <Row>
                    <div className="bx--col-lg-7 ">
                    <div className="application__benifts__content__first__heading">
                        <div className="box">
                            3
                        </div>
                        <p>Unify your business’ data</p>
                    </div>
                    <div className="application__benifts__content__first__content">
                    <p>There are likely several time-consuming, repetitive tasks you or your employees execute on a daily or weekly basis. 
                        One of the benefits of a more digital business landscape is many repetitive or mundane tasks can be automated using a custom application. 
                        This can save valuable time, reduce frustration, and significantly cut down on human error.</p>
                    </div>
                    </div>

                    <div className="bx--col-lg-7 bx--offset-lg-1 ">
                    <div className="application__benifts__content__first__heading">
                        <div className="box">
                            4
                        </div>
                        <p>Enhance security</p>
                    </div>
                    <div className="application__benifts__content__first__content">
                    <p>When you buy an application off-the-shelf, you inherit a host of security issues. 
                        Many off-the-shelf apps have long been targets of hackers and other cyber criminals because they know if they find a vulnerability, they can gain access to the data of large groups of users—and, potentially, the app’s entire customer roster. By opting for custom-design services, your app is a much smaller target. 
                        Cyber criminals would have to commit their time and energy to devising attack strategies for your app specifically.</p>
                    </div>
                    </div>
                    </Row>
                </Grid>

                {/* second row ends */}
                </div>
                    {/* section 2  ends*/}

                    {/* section 3  starts*/}   
                    <div className="develop__application">
                        <Grid>
                            <Row>
                                {/* left content  starts*/} 
                            <div className="bx--col-lg-8">
                             <div className="develop__application__heading ">
                                 <p>Develop Your Customized Application with Uvation</p>
                             </div>
                             <div className="develop__application__content">
                                 <p>Uvation’s data center experts are prepared to help you develop your data center strategy and choose an optimal deployment model, both for growth and your immediate business needs. We can help you find an ideal solution by conducting an audit of your current deployment, then working with top providers to find a data center solution that drives your business forward. 
                                    Contact Uvation today to start developing your data center strategy and a roadmap for the future.</p>
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
                    <div className="work__application">
                        <Grid>
                          <div className="bx--col-lg-7 work__application__heading">
                          <p>How Does Business Application Design Work?</p>
                          </div>

                          <div>
                          <Row>
                            <div className="bx--col bx--col-sm-4 work__application__content ">
                                <p>
                                While many organizations know they need an application, most don’t understand the process that goes into creating one. However, it’s important to know the basics of how your business app will be produced. Understanding how an application is designed is a lot like having a basic understanding of how your car is designed.
                                </p>
                            </div>

                            <div className="bx--col bx--col-sm-4 work__application__content ">
                                <p>
                                While many organizations know they need an application, most don’t understand the process that goes into creating one. However, it’s important to know the basics of how your business app will be produced. Understanding how an application is designed is a lot like having a basic understanding of how your car is designed.
                                </p>
                            </div>

                            <div className="bx--col bx--col-sm-4 work__application__content ">
                                <p>
                                While many organizations know they need an application, most don’t understand the process that goes into creating one. However, it’s important to know the basics of how your business app will be produced. Understanding how an application is designed is a lot like having a basic understanding of how your car is designed.
                                </p>
                            </div>

                          </Row>
                          </div>


                          <div>
                          <Row>
                            <div className="bx--col-lg-5 work_application_menu_content">
                                
                               <div className="work_application_menu_content_item_first">
                                   <div className="work_application_menu_content_item_first_border"></div>
                                   <p>Understanding the Business’ Requirements</p>
                                   </div>

                               <div className="work_application_menu_content_item_second">
                               <div className="work_application_menu_content_item_second_border"></div>
                                   <p>Generating Wireframes</p>
                               </div>
                             
                               <div className="work_application_menu_content_item_third">
                               <div className="work_application_menu_content_item_third_border"></div>
                                   <p>Designing composites</p>
                                </div>
                             
                               <div className="work_application_menu_content_item_fourth">
                               <div className="work_application_menu_content_item_fourth_border"></div>
                                   <p>Exporting design composites</p>
                                   </div>
                                </div>

                            <div className=" bx--col work_application_menu_content_container ">
                               <div className="bx--col-lg-16 work_application_menu_content_heading__second">
                                   <h3>Understanding the Business’ Requirements</h3>
                                </div> 
                                <div className="bx--col-lg-16 work_application_menu_content_content__second">
                                   <p>During this step, you get to decide what your app will do. Specificity is important. You can’t simply say, “I want to build an employee management system.” That’s too broad. You want to spend time thinking about what the core features of your app will be.</p>
                                   
                                </div>  

                                <div className="bx--col-lg-16 work_application_menu_content_data__second">
                                 <Row>
                                   <div className="bx--col-lg-8 work_application_menu_content_corefeatures">
                                      <div className="work_application_menu_content_corefeatures_icon">
                                      <CodeSyntax/>
                                      </div>
                                      <div className="work_application_menu_content_corefeatures_heading">
                                      <p>Core Features</p>
                                      </div>
                                      <div className="work_application_menu_content_corefeatures_para">
                                      <p>The core features are the essential functions the app will perform to help you accomplish your business’ objectives. For example, you may want the app to track employee performance using sales metrics for teams or individuals. You may also want to gather data that may show correlations between hours worked and sales success. The sky is the limit, so during this step, you can feel free to outline a core wish list of your app’s essential features.
                                      Uvation can be a powerful ally while choosing your app’s core features. After an in-depth consultation, Uvation can help you select and prioritize the aspects of your app that will have the most immediate—and long-term—payoff. Uvation can also help you narrow down your list of features according to which ones align best with your business’ objectives. This way, you can shed unnecessary, and potentially expensive, functions in favor of those that more directly impact your bottom line.
                                      </p>

                                      </div>
                                   </div>


                                   <div className="bx--col-lg-7 work_application_menu_content_supportfeatures">
                                      <div className="work_application_menu_content_supportfeatures_icon">
                                      <CodeSyntax/>
                                      </div>
                                      <div className="work_application_menu_content_supportfeatures_heading">
                                      <p>Supporting Features</p>
                                      </div>
                                      <div className="work_application_menu_content_supportfeatures_para">
                                      <p>The supporting features are those that help make the core features happen but they may not be absolutely essential to the app’s success. Using the employee performance example, a supporting feature may include one that allows employees to enter the results of sales efforts using quantifiable metrics, such as how much the customer spent on a purchase, how long it took them to commit to the sale, and the number of conversations that needed to happen before the sale was finalized.The supporting features are those that help make the core features happen but they may not be absolutely essential to the app’s success. Using the employee performance example, a supporting feature may include one that allows employees to enter the results of sales efforts using quantifiable metrics, such as how much the customer spent on a purchase, how long it took them to commit to the sale, and the number of conversations that needed to happen before the sale was finalized.The supporting features are those that help make the core features happen but they may not be absolutely essential to the app’s success. Using the employee performance example, a supporting feature may include one that allows employees to enter the results of sales efforts using quantifiable metrics, such as how much the customer spent on a purchase, how long it took them to commit to the sale, and the number of conversations that needed to happen before the sale was finalized.
                                      </p>

                                      </div>
                                   </div>

                                </Row>                                   
                                </div>   
                              
                            </div>
                          </Row>
                          </div>


                        </Grid>
                    </div>
                    {/* section 4  ends*/}  

                    {/* section 5 starts*/}

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



                    {/* section 5 ends*/}   


                      <FooterBotm/>

                      <div className='chat-box'>
        <Chat32 />
      </div>
            </Grid>            
        </div>
    )
}

export default Application

