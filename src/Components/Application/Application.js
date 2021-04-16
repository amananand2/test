import React, { useEffect,useState } from 'react';
import MainHeader from "../Homepage/Mainheader/MainHeader";
import { Grid, Row, Button, Loading } from "carbon-components-react";
import { SystemsDevopsCode,CodeSyntax } from "@carbon/pictograms-react";
// import { ArrowDown20, ArrowRight20 } from "@carbon/icons-react";
import { ArrowDown20, ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import { Chat32 } from '@carbon/icons-react';
import bg1 from "./../../img/technologyservices/bg1.png";
import Footer from './../Homepage/Footer/Footer';
import FooterBotm from '../Homepage/Footer/FooterBotm';
import {connect} from 'react-redux';
import {applicationPageDataStart,benefitsPageDataStart,developPageDataStart,businessPageDataStart,applicationTabsPageDataStart,applicationChatPageDataStart} from "../../actions/index";
 import {Link} from "react-router-dom";



const Content1 = ({num,heading,desc}) =>{
return(
    <>
        <div className="bx--col-lg-7 ">
            <div className="application__benifts__content__first__heading">
                <div className="box">
                            {num}
                     </div>
                        <p>{heading}</p>
                    </div>
                    <div className="application__benifts__content__first__content">
                    <p>{desc}</p>
            </div>
                 </div>

             
    </>
)
}

const Content2 = ({num,heading,desc}) =>{
    return(
        <>
            <div className="bx--col-lg-7 bx--offset-lg-1 ">
                    <div className="application__benifts__content__first__heading">
                        <div className="box">
                            {num}
                        </div>
                        <p>{heading}</p>
                    </div>
                    <div className="application__benifts__content__first__content">
                    <p>{desc}</p>
                    </div>
                    </div>
                  
        </>
    )
    }

const Application = ({applicationPageDataStart,applicationData,benefitsPageDataStart,benefitsData,developPageDataStart,developData,
                      businessPageDataStart,businessData,applicationTabsPageDataStart,applicationTabsData,applicationChatPageDataStart,applicationChatData}) => {

    useEffect(()=>{
        applicationPageDataStart();
        benefitsPageDataStart();
        developPageDataStart();
        businessPageDataStart();
        applicationTabsPageDataStart();
        applicationChatPageDataStart();
    },[])
     
    const [active,setActive] = useState(1);
    // console.log(applicationChatData,"applicationChatData");

    return (
        <>
        <Loading active = {applicationData.applicationPageLoader} />
        <div className="application">
            <MainHeader/>
            <Grid className="bx--no-gutter" fullWidth>
            <div className="application__banner">
            <Row className="application__banner_img" >
            <Grid>
              <div className="bx--col-lg-7 application__banner__content">
                        <div className="application__header_content_icon">
                         <SystemsDevopsCode stroke="#f4f4f4" />
                         </div>
                         <div className="application__header_content_heading">
                         <h1>{applicationData && applicationData.application_heading}</h1>
                         </div>
                         <div className="application__header_content_para">
                         <p>{applicationData && applicationData.application_description}</p>
                         </div>
                         <div className="application__header_content_button">
                            <Button renderIcon={ArrowDown20}>Learn more</Button>
                         </div>

                         <div className="application__header_content_downbutton">
                         <div className="arrow-left">
                                 <ArrowLeft16/>
                                </div>
                                <Link style={{color:"none",textDecoration:"none"}} to ="/technologyservices">
                                <p>Technology Services</p>
                                </Link>
                                <div className="border"></div>
                                <Link style={{color:"none",textDecoration:"none"}} to ="/businessresiliency">
                                <p className="sec-button">Next Up: Business Resiliency</p>
                                </Link>
                                <div className="arrow-right">
                                 <ArrowRight16/>
                                </div>
                         </div>

                        </div> 
                  </Grid>
                  </Row>
                </div>
                    {/* section 2 */}
                   
                    <div className="application_benifit">
                    <Grid>
                <div className="bx--col-lg-8 bx--no-gutter  application__benifts__heading">
                  <h1>{benefitsData && benefitsData.benefits_heading}</h1>
                </div>
                </Grid>
 
                 {/* first row */}
                <Grid>
                    <Row>
                    {benefitsData && benefitsData.benefits_content && benefitsData.benefits_content.map((value,index)=> index % 2==0 ? 
              <Content1 num={value.sr_no} heading={value.benefits_content_heading} desc={value.benefits_content_description}/> : 
              <Content2 num={value.sr_no} heading={value.benefits_content_heading} desc={value.benefits_content_description}/>          
              ) }
                   
                     
                    </Row>
                </Grid>

                {/* first row ends */}

                {/* second row starts */}
              

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
                                 <p>{developData && developData.develop_heading}</p>
                             </div>
                             <div className="develop__application__content">
                                 <p>{developData && developData.develop_description}</p>
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
                          <p>{businessData && businessData.business_heading}</p>
                          </div>

                          <div>
                          <Row>
                               {businessData && businessData.business_description && businessData.business_description.map(value=>{
                return(
                    <div className="bx--col bx--col-sm-4 work__application__content ">
                    <p>
                      {value.description}
                    </p>
                </div>
                )
              }) }
                            
                          </Row>
                          </div>


                          <div>
                          <Row>
                            <div className="bx--col-lg-5 work_application_menu_content">
                                
                               <div className={active === 1 ? "work_application_menu_content_item_start_active" : "work_application_menu_content_item_start_notactive"}>
                                   <div className={active === 1 ? "work_application_menu_content_item_start_active_border" : "work_application_menu_content_item_start_notactive_border"}></div>
                                   <p onClick={()=>{
                                       setActive(1)
                                   }}>{applicationTabsData && applicationTabsData.tab_first }</p>
                                   </div>

                               <div className={active === 2 ? "work_application_menu_content_item_start_active" : "work_application_menu_content_item_start_notactive"}>
                               <div className={active === 2 ? "work_application_menu_content_item_start_active_border" : "work_application_menu_content_item_start_notactive_border"}></div>
                                   <p onClick={()=>{
                                       setActive(2)
                                   }}>{applicationTabsData && applicationTabsData.tab_second}</p>
                               </div>
                             
                               <div className={active === 3 ? "work_application_menu_content_item_start_active" : "work_application_menu_content_item_start_notactive"}>
                               <div className={active === 3 ? "work_application_menu_content_item_start_active_border" : "work_application_menu_content_item_start_notactive_border"}></div>
                                   <p onClick={()=>{
                                       setActive(3)
                                   }}>{applicationTabsData && applicationTabsData.tab_third}</p>
                                </div>
                             
                               <div className={active === 4 ? "work_application_menu_content_item_start_active" : "work_application_menu_content_item_start_notactive"}>
                               <div className={active === 4 ? "work_application_menu_content_item_start_active_border" : "work_application_menu_content_item_start_notactive_border"}></div>
                                   <p onClick={()=>{
                                       setActive(4)
                                   }}>{applicationTabsData && applicationTabsData.tab_fourth}</p>
                                   </div>
                                </div>

                                

                            <div className=" bx--col work_application_menu_content_container ">
                               <div className="bx--col-lg-16 work_application_menu_content_heading__second">
                                   <h3>{active === 1 ? applicationTabsData.tab_heading : active === 2 ? applicationTabsData.tab_second_heading
                                        :active === 3 ? applicationTabsData.tab_third_heading : applicationTabsData.tab_fourth_heading }</h3>
                                </div> 
                                <div className="bx--col-lg-16 work_application_menu_content_content__second">
                                   <p>{active === 1 ? applicationTabsData.tab_description : active === 2 ? applicationTabsData.tab_second_description
                                        :active === 3 ? applicationTabsData.tab_third_description : applicationTabsData.tab_fourth_description }</p>
                                   
                                </div>  

                                <div className="bx--col-lg-16 work_application_menu_content_data__second">
                                 <Row>
                                   <div className="bx--col-lg-8 work_application_menu_content_corefeatures">
                                      <div className="work_application_menu_content_corefeatures_icon">
                                      <CodeSyntax/>
                                      </div>
                                      <div className="work_application_menu_content_corefeatures_heading">
                                      <p>{active === 1 ? applicationTabsData.description && applicationTabsData.description[0].heading : active === 2 ? applicationTabsData.second_description && applicationTabsData.second_description[0].heading
                                        : active === 3 ? applicationTabsData && applicationTabsData.third_description && applicationTabsData.third_description[0].heading : applicationTabsData && applicationTabsData.fourth_description && applicationTabsData.fourth_description[0].heading }</p>
                                      </div>
                                      <div className="work_application_menu_content_corefeatures_para">
                                      <p>{active === 1 ? applicationTabsData.description && applicationTabsData.description[0].description : active === 2 ? applicationTabsData.second_description && applicationTabsData.second_description[0].description
                                        : active === 3 ? applicationTabsData && applicationTabsData.third_description && applicationTabsData.third_description[0].description : applicationTabsData && applicationTabsData.fourth_description && applicationTabsData.fourth_description[0].description }
                                      </p>

                                      </div>
                                   </div>


                                   <div className="bx--col-lg-7 work_application_menu_content_supportfeatures">
                                      <div className="work_application_menu_content_supportfeatures_icon">
                                      <CodeSyntax/>
                                      </div>
                                      <div className="work_application_menu_content_supportfeatures_heading">
                                      <p>{active === 1 ? applicationTabsData.description && applicationTabsData.description[1].heading : active === 2 ? applicationTabsData.second_description && applicationTabsData.second_description[1].heading
                                        : active === 3 ? applicationTabsData && applicationTabsData.third_description && applicationTabsData.third_description[1].heading : applicationTabsData && applicationTabsData.fourth_description && applicationTabsData.fourth_description[1].heading }</p>
                                      </div>
                                      <div className="work_application_menu_content_supportfeatures_para">
                                      <p>{active === 1 ? applicationTabsData.description && applicationTabsData.description[1].description : active === 2 ? applicationTabsData.second_description && applicationTabsData.second_description[1].description
                                        : active === 3 ? applicationTabsData && applicationTabsData.third_description && applicationTabsData.third_description[1].description : applicationTabsData && applicationTabsData.fourth_description && applicationTabsData.fourth_description[1].description }
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
                                 <p>{applicationChatData && applicationChatData.chat_heading}</p>
                             </div>
                             <div className="chat__application__content">
                                 <p>{applicationChatData && applicationChatData.chat_description}</p>
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
        </>
    )
}

const mapStateToProps = state => ({

    applicationData: state.applicationPageReducer.applicationData,
    benefitsData: state.applicationPageReducer.benefitsData,
    developData: state.applicationPageReducer.developData,
    businessData: state.applicationPageReducer.businessData,
    applicationTabsData: state.applicationPageReducer.applicationTabsData,
    applicationChatData: state.applicationPageReducer.applicationChatData,

    //applicationChatData

  });
  
  const mapDispatchToProps = (dispatch) => ({
    applicationPageDataStart: () => dispatch(applicationPageDataStart()),
    benefitsPageDataStart: () => dispatch(benefitsPageDataStart()),
    developPageDataStart: () => dispatch(developPageDataStart()),
    businessPageDataStart: () => dispatch(businessPageDataStart()),
    applicationTabsPageDataStart: () => dispatch(applicationTabsPageDataStart()),
    applicationChatPageDataStart: () => dispatch(applicationChatPageDataStart()),

    //ApplicationChatPageDataStart
  });
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Application);

