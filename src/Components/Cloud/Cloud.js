import React from 'react'
import MainHeader from "../Homepage/Mainheader/MainHeader";
import { Grid, Row, Button } from "carbon-components-react";
import { ArrowDown20, ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import { SystemsDevopsCode,OptimizeCashFlow_02 } from "@carbon/pictograms-react";
import uwv1 from "./../../img/cloud/uwv1.svg";
import uwv2 from "./../../img/cloud/uwv2.svg";
import FooterBotm from '../Homepage/Footer/FooterBotm';
import { Chat32 } from '@carbon/icons-react';




const Cloud = () => {
    return (
        <div className="cloud">
        <MainHeader/>
      <Grid className="bx--no-gutter" fullWidth>
                   {/* section 1 starts*/}
          <div className="cloud__banner">
            <Grid>
            <Row>
           <div className="bx--col-lg-7 cloud__banner__content">
                  {/* <Grid className="bx--offset-lg-3"> */}
                        <div className="cloud__header_content_icon">
                         <OptimizeCashFlow_02 stroke="#f4f4f4" />
                         </div>
                         <div className="cloud__header_content_heading">
                         <h1>Cloud</h1>
                         </div>
                         <div className="cloud__header_content_para">
                         <p>The cloud serves as an extension of computing resources as well as a fertile ground for growing new business initiatives. With the cloud, small organizations can wield the power of larger enterprises, and big companies can discover fresh ways of improving their services, as well as the experience of their staff and other stakeholders. The cloud enables companies, regardless of size or where they are in their growth cycle, to create, manage, and maintain business solutions with a minimal upfront investment.</p>
                         </div>
                         <div className="cloud__header_content_button">
                            <Button renderIcon={ArrowDown20}>Learn more</Button>
                         </div>

                         <div className="cloud__header_content_downbutton">
                               <div className="arrow-left">
                                 <ArrowLeft16/>
                                </div>
                            
                                <p>Technology Services</p>
                                 <div className="border"></div>
                                <p>Next Up: DATACENTER</p>
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
      <div className="cloud_benefits">
      <Grid >
      <div className="bx--col-lg-10   cloud__benefits__heading">
        <h1>Benefits of Cloud Computing</h1>
      </div>
      </Grid>


       {/* first row */}
       <Grid>
          <Row>
          <div className="bx--col-lg-7 ">
          <div className="cloud__benefits__content__first__heading">
              <div className="box">
                  1
              </div>
              <p>Enhanced Data Storage</p>
          </div>
          <div className="cloud__benefits__content__first__content">
          <p>With the cloud, you can store more data without investing in expensive storage equipment. Also, the data can be readily available for use in applications and for team members to reference as-needed.</p>
          </div>
          </div>

          <div className="bx--col-lg-7 bx--offset-lg-1 ">
          <div className="cloud__benefits__content__first__heading">
              <div className="box">
                  2
              </div>
              <p>Reliability</p>
          </div>
          <div className="cloud__benefits__content__first__content">
          <p>A cloud service provider maintains the latest software and hardware in order to support many different kinds of organizations. These are installed, managed, and maintained by experienced staff. This results in a reliable solution you can depend on. You can choose the SLA that best suits your business needs and alter it, typically for a fee, if the need arises.</p>
          </div>
          </div>
          </Row>
      </Grid>

      {/* first row ends */}

      {/* second row starts */}
      <Grid>
          <Row>
          <div className="bx--col-lg-7">
          <div className="cloud__benefits__content__first__heading">
              <div className="box">
                  3
              </div>
              <p>Scalability</p>
          </div>
          <div className="cloud__benefits__content__first__content">
          <p>Purchasing and maintaining equipment and software can be a financial millstone, particularly for small businesses in the midst of growth. With the cloud, you can add services and resources without breaking the bank.</p>
          </div>
          </div>

          <div className="bx--col-lg-7 bx--offset-lg-1">
          <div className="cloud__benefits__content__first__heading">
              <div className="box">
                  4
              </div>
              <p>Mobility</p>
          </div>
          <div className="cloud__benefits__content__first__content">
          <p>A cloud solution empowers an organization to hire a mobile or remote workforce without having to worry about whether they will have access to business-critical applications or data. Using secure VPNs, transmissions can be encrypted, end-to-end, enabling greater safety without sacrificing convenience.</p>
          </div>
          </div>
          </Row>
      </Grid>

      {/* second row ends */}

      </div>
         {/* section 2 ends*/}
             {/* section 3 starts*/}
      <div className="cloud_with_uvation">
       <div className="cloud_with_uvation_heading">
           <h1>Get the Most Out of the Cloud with Uvation</h1>
           <p>Uvation’s cloud experts can walk you through the options that best support your unique business model. Through partnerships with the top cloud providers, Uvation can help you select the solution that makes the most financial sense for the management and growth of your business.</p>
       </div>
       
       <div className="cloud_with_uvation_content">
       <Grid className="cloud_with_uvation_content_topspace">
         <Row>
           <div className="bx--col-lg-8 bx--no-gutter cloud_with_uvation_content_topspace_heading">
           <h1>Integration with Public Cloud</h1>
           <p>
           Uvation can integrate a public cloud environment with your company’s current solution. For many organizations, this provides them with enhanced security, and significant time and IT savings. Uvation can help you decide how to best benefit from adding public cloud to your infrastructure. Then Uvation can assist you in choosing the cloud resources you need the most. While integrating public cloud services, this may involve Uvation guiding you through choosing which public cloud APIs you may want to take advantage of. Uvation can also help you decide which cloud resources to employ and how best to control your costs.
           </p>
           </div>
           <div className="bx--col-lg-8 bx--no-gutter cloud_with_uvation_content_topspace_image">
           <img src={uwv1}/>
           </div>
         </Row>
       </Grid>

       <Grid >
         <Row >
         <div className="bx--col-lg-8 bx--no-gutter cloud_with_uvation_content_section2_image">
           <img src={uwv2}/>
           </div>
           <div className="bx--col-lg-6 bx--offset-lg-1 cloud_with_uvation_content_section2_heading">
           <h1>Custom-Designed Hybrid Cloud Solutions</h1>
           <p>
           Uvation can integrate a public cloud environment with your company’s current solution. For many organizations, this provides them with enhanced security, and significant time and IT savings. Uvation can help you decide how to best benefit from adding public cloud to your infrastructure. Then Uvation can assist you in choosing the cloud resources you need the most. While integrating public cloud services, this may involve Uvation guiding you through choosing which public cloud APIs you may want to take advantage of. Uvation can also help you decide which cloud resources to employ and how best to control your costs.
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
          <h1>Cloud Computing Explained</h1>
          </div>
         </Grid>

         <Grid>
          <Row>
            <div className="bx--col-lg-5  cloud_computing_explained_sections">
             <p>Computing</p>
             <OptimizeCashFlow_02 stroke="#f4f4f4" />
             <div className="cloud_computing_explained_sections_para">
              <p>Cloud computing gives users the power to perform some or all of their computing by using the internet to access hardware and software that sits in a remote location. Instead of using a laptop, desktop, or an on-site server to process data, all of this is provided to you as a service by a company whose objective is to make the experience as seamless as possible.</p>
             </div>
            </div>

            <div className="bx--col-lg-5 bx--no-gutter cloud_computing_explained_sections_section2">
             <p>Location</p>
             <OptimizeCashFlow_02 stroke="#f4f4f4" />
             <div className="cloud_computing_explained_sections_section2_para">
              <p>For the user, the location of the cloud service may or may not matter, particularly if they’re using applications where a little latency doesn’t significantly impact performance. The cloud computing provider, on the other hand, has the challenge of providing uninterrupted service that, as closely as possible, mirrors what the user would experience if the computing were happening on their desktop.</p>
             </div>
            </div>

            <div className="bx--col-lg-5 bx--offset-lg-1 bx--no-gutter cloud_computing_explained_sections">
             <p>Datacenters</p>
             <OptimizeCashFlow_02 stroke="#f4f4f4" />
             <div className="cloud_computing_explained_sections_para">
              <p>Take a Google search, for example. When a user types in a search query, it isn’t their computer that’s doing the heavy lifting. Google’s PCs, sitting in a variety of data centers, scour the internet for results and then send them to the user’s computer. The user could be in New York, but the computer that generates the results may be in California. The distance doesn’t hamper the user’s experience­­—at least not enough to raise concern.</p>
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
            <h1>What Makes Cloud Computing Unique?</h1>
            </div>
          </Grid>

            <div className="cloud_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 cloud_computing_unique_section1_index"> 
             <p>01</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  cloud_computing_unique_section1_left_content">
                  <p>The Cloud Is a Managed Service</p>
                  <div className="cloud_computing_unique_section1_left_content_icon">
                  <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                 </div>
                 <div className="bx--col-lg-11    cloud_computing_unique_section1_right_content">
                  <p>All the services you get with a cloud solution are managed for you. For example, when using Google Docs, there’s no need to worry about the many licenses needed for the Docs word-processing app or whether they are being kept up-to-date. You also don’t have to think twice about whether your computer is exposed to malware as you type out a document, make a slide show, or fill in a spreadsheet. Google handles that protection for you. Also, because cloud services are managed, users don’t have to be concerned about whether they’re using the latest version of the software. Updates are performed by the service provider, as well as security patches that protect the service from emerging threats on the landscape. With years of experience in cloud computing technologies, Uvation can help you choose an SLA that best fits your organization’s needs. In this way, alongside Uvation, you can match your business model with the specific provisions of each cloud solution.</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="cloud_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 cloud_computing_unique_section1_index"> 
             <p>02</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  cloud_computing_unique_section1_left_content">
                  <p>The Cloud Is Available On-Demand</p>
                  <div className="cloud_computing_unique_section1_left_content_icon">
                  <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                 </div>
                 <div className="bx--col-lg-11 cloud_computing_unique_section1_right_content">
                  <p>Cloud services are provided on-demand. When you log in to your cloud provider, you expect the service to be up and running, ready for your use. In order to achieve an equivalent state of readiness with an in-house hardware environment, you would have to have a computer dedicated to the application running 24/7. This includes not only the user-facing elements of the app but also all its dependencies, which may require substantial storage or memory to execute. A cloud provider shoulders all that responsibility in exchange for a fee. With some services, the “fee” charged to the user is non-existent, with the service provider earning money from advertising, as is the case with Google’s Gmail. In many cases, availability is maintained even if the customer’s usage goes up dramatically. For example, if you were to go from producing one slide show a month with Google slides to 10 a day, all of your presentations would still function as you’d expect. For businesses seeking a cloud provider to host an application, it’s important to keep in mind that users, as they would with Google docs or other cloud-based services, expect availability. For this reason, it’s often prudent to choose a cloud service that’s agile enough to adjust to varying workloads in accordance with user demands. Uvation’s knowledge of the capabilities of each cloud service will make it easy to choose which one has the kinds of on-demand services that fit your business. Whether you need to host applications, house a database, or store user information, Uvation can vet the available options and help you pick the best one.</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="cloud_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 cloud_computing_unique_section1_index"> 
             <p>03</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  cloud_computing_unique_section1_left_content">
                  <p>The Cloud Can Be Private and Public</p>
                  <div className="cloud_computing_unique_section1_left_content_icon">
                  <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                 </div>
                 <div className="bx--col-lg-11    cloud_computing_unique_section1_right_content">
                  <p>Cloud services are provided on-demand. When you log in to your cloud provider, you expect the service to be up and running, ready for your use. In order to achieve an equivalent state of readiness with an in-house hardware environment, you would have to have a computer dedicated to the application running 24/7. This includes not only the user-facing elements of the app but also all its dependencies, which may require substantial storage or memory to execute. A cloud provider shoulders all that responsibility in exchange for a fee. With some services, the “fee” charged to the user is non-existent, with the service provider earning money from advertising, as is the case with Google’s Gmail. In many cases, availability is maintained even if the customer’s usage goes up dramatically. For example, if you were to go from producing one slide show a month with Google slides to 10 a day, all of your presentations would still function as you’d expect. For businesses seeking a cloud provider to host an application, it’s important to keep in mind that users, as they would with Google docs or other cloud-based services, expect availability. For this reason, it’s often prudent to choose a cloud service that’s agile enough to adjust to varying workloads in accordance with user demands. Uvation’s knowledge of the capabilities of each cloud service will make it easy to choose which one has the kinds of on-demand services that fit your business. Whether you need to host applications, house a database, or store user information, Uvation can vet the available options and help you pick the best one.</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="cloud_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 cloud_computing_unique_section1_index"> 
             <p>04</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-4 cloud_computing_unique_section1_left_content">
                  <p>Hybrid Cloud</p>
                  <div className="cloud_computing_unique_section1_left_content_icon">
                  <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                 </div>
                 <div className="bx--col-lg-11   bx--offset-lg-1 cloud_computing_unique_section1_right_content">
                  <p>Cloud services are provided on-demand. When you log in to your cloud provider, you expect the service to be up and running, ready for your use. In order to achieve an equivalent state of readiness with an in-house hardware environment, you would have to have a computer dedicated to the application running 24/7. This includes not only the user-facing elements of the app but also all its dependencies, which may require substantial storage or memory to execute. A cloud provider shoulders all that responsibility in exchange for a fee. With some services, the “fee” charged to the user is non-existent, with the service provider earning money from advertising, as is the case with Google’s Gmail. In many cases, availability is maintained even if the customer’s usage goes up dramatically. For example, if you were to go from producing one slide show a month with Google slides to 10 a day, all of your presentations would still function as you’d expect. For businesses seeking a cloud provider to host an application, it’s important to keep in mind that users, as they would with Google docs or other cloud-based services, expect availability. For this reason, it’s often prudent to choose a cloud service that’s agile enough to adjust to varying workloads in accordance with user demands. Uvation’s knowledge of the capabilities of each cloud service will make it easy to choose which one has the kinds of on-demand services that fit your business. Whether you need to host applications, house a database, or store user information, Uvation can vet the available options and help you pick the best one.</p>
                 </div>
               </Row>
             </Grid>
            </div>

          
         </div>
         {/* section 5 ends*/}
         <div className="cloud_computing_varities">
           <Grid>
            <Row>
           <div className="bx--col-lg-10  cloud_computing_varities_left_content ">

              <h1>The Different Kinds of Cloud Computing</h1>

              <div className="cloud_computing_varities_left_content_heading_para">
              <p>While there are many different types of cloud computing, most can be grouped in one of three categories: infrastructure as a service (IaaS), software as a service (SaaS), and platform as a service (PaaS). While there is some overlap between each type, their primary services are different.</p>
              </div>

              <div className="cloud_computing_varities_left_content_subheading">
              <p> Infrastructure as a Service (IaaS)</p>
              </div>

              <div className="cloud_computing_varities_left_content_subheading_para">
              <p>With IaaS you purchase access to computing hardware through the internet. For example, you can gain access to storage or servers that are hosted by the cloud provider. Instead of running your applications or storing your data using in-house infrastructure, you rent out space on the cloud. An IaaS solution enables you to have business-critical applications run in the cloud, which gives users, both in the public and team members, the flexibility to access your applications over the internet as long as they have service. This is a useful solution for a remote or hybrid workforce that needs to be able to work outside of an office setting. One of the most common examples of IaaS is when you pay a hosting company for your website. Files get served up from the host’s servers and visitors get an experience as seamless as it would have been if you had been using your own, internal server. Many companies can benefit for IaaS, but it can be difficult to figure out which applications or websites would benefit the most from this service. Uvation can walk you through the various options and how they can support your business’ goals.</p>
              </div>

              <div className="cloud_computing_varities_left_content_circles">
             <div className="cloud_computing_varities_left_content_circles_first">

             </div>
             <div className="cloud_computing_varities_left_content_circles_second">

             </div>
             <div className="cloud_computing_varities_left_content_circles_third">

             </div>
              </div>
           </div>


           {/* <div className="bx--col-lg-9 ">
            <Grid className="bx--no-gutter cloud_computing_varities_left_content">
              <h1>The Different Kinds of Cloud Computing</h1>
              <div className="cloud_computing_varities_left_content_heading_para">
              <p>While there are many different types of cloud computing, most can be grouped in one of three categories: infrastructure as a service (IaaS), software as a service (SaaS), and platform as a service (PaaS). While there is some overlap between each type, their primary services are different.</p>
              </div>
              <div className="cloud_computing_varities_left_content_subheading">
              <p> Infrastructure as a Service (IaaS)</p>
              </div>
              <div className="cloud_computing_varities_left_content_subheading_para">
              <p>With IaaS you purchase access to computing hardware through the internet. For example, you can gain access to storage or servers that are hosted by the cloud provider. Instead of running your applications or storing your data using in-house infrastructure, you rent out space on the cloud. An IaaS solution enables you to have business-critical applications run in the cloud, which gives users, both in the public and team members, the flexibility to access your applications over the internet as long as they have service. This is a useful solution for a remote or hybrid workforce that needs to be able to work outside of an office setting. One of the most common examples of IaaS is when you pay a hosting company for your website. Files get served up from the host’s servers and visitors get an experience as seamless as it would have been if you had been using your own, internal server. Many companies can benefit for IaaS, but it can be difficult to figure out which applications or websites would benefit the most from this service. Uvation can walk you through the various options and how they can support your business’ goals.</p>
              </div>
            </Grid>
           </div> */}

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
    )
}

export default Cloud
