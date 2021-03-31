import React from 'react'
import MainHeader from "../Homepage/Mainheader/MainHeader";
import { Grid, Row, Button } from "carbon-components-react";
import { ArrowDown20, ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";
import { SystemsDevopsCode, University, OptimizeCashFlow_02, datacenterPakForSecurity, Servers } from "@carbon/pictograms-react";
import FooterBotm from '../Homepage/Footer/FooterBotm';
import bg1 from "./../../img/technologyservices/bg1.png";
import uwv1 from "./../../img/cloud/uwv1.svg";
import uwv2 from "./../../img/cloud/uwv2.svg";
import headerimg from "./../../img/datacenter/headerimg.svg";
import { Chat32 } from '@carbon/icons-react';


const DataCenter = () => {
    return (
        <div className="datacenter">
         <MainHeader/>
      <Grid className="bx--no-gutter" fullWidth>
                   {/* section 1 starts*/}
                   <div className="datacenter__banner">
            <Grid>
            <Row>
           <div className="bx--col-lg-7 datacenter__banner__content">
                  {/* <Grid className="bx--offset-lg-3"> */}
                        <div className="datacenter__header_content_icon">
                         <Servers stroke="#f4f4f4" />
                         </div>
                         <div className="datacenter__header_content_heading">
                         <h1>Data Center</h1>
                         </div>
                         <div className="datacenter__header_content_para">
                         <p>Upgrading from an initial server installation to a data center can help your business grow from small beginnings to an enterprise-level competitor. Whether you intend to maintain your own data center, outsource the role entirely, or collocate your own hardware in a hosted facility, you can harness the computing power your business needs to thrive through the strategic deployment of your assets. Centralize your organization’s IT operations and secure your most critical proprietary assets in a unique server environment. Both physical and virtual infrastructures are available for your workloads.</p>
                         </div>
                         <div className="datacenter__header_content_button">
                            <Button renderIcon={ArrowDown20}>Learn more</Button>
                         </div>

                         <div className="datacenter__header_content_downbutton">
                               <div className="arrow-left">
                                 <ArrowLeft16/>
                                </div>
                                  
                                <p>Technology Services</p>
                                 <div className="border"></div>
                                <p>Next Up: MANAGED IT</p>
                                 <div className="arrow-right">
                                 <ArrowRight16/>
                                </div>
                         </div>
                          {/* </Grid> */}
                        </div> 
                        <div className="bx--col-lg-8 bx--offset-lg-1">
                          {/* <img src={headerimg}/> */}
                          </div>
                   </Row>
                   </Grid>
           
          </div>
                   {/* section 1 ends*/}

                               {/* section 2 starts*/}
      <div className="datacenter_benefits">
      <Grid >
      <div className="bx--col-lg-10   datacenter__benefits__heading">
        <h1>Benefits of Data Center</h1>
      </div>
      </Grid>


       {/* first row */}
       <Grid>
          <Row>
          <div className="bx--col-lg-7 ">
          <div className="datacenter__benefits__content__first__heading">
              <div className="box">
                  1
              </div>
              <p>Improved Resource Availability</p>
          </div>
          <div className="datacenter__benefits__content__first__content">
          <p>Leveraging a data center allows you to cluster active servers and maintain uninterrupted access to critical applications and computing resources. Even in the event of an outage of system failure, maintain optimal uptime through the implementation of automatic failover processes. With the right data center environment, you can take advantage of industry-leading load-balancing systems. Minimize single points of failure and ensure the availability of your computing assets for all users, including your staff and your valued customers.</p>
          </div>
          </div>

          <div className="bx--col-lg-7 bx--offset-lg-1 ">
          <div className="datacenter__benefits__content__first__heading">
              <div className="box">
                  2
              </div>
              <p>Scalable Performance</p>
          </div>
          <div className="datacenter__benefits__content__first__content">
          <p>Data center environments allow you to scale your business through the installation of additional nodes and servers, expanding your computing power to meet your growth demands. You can dedicate servers to specific tasks, such as workflow automation or API traffic, and you can deploy resources to prepare for overflow and maintain performance during periods of high demand. Through clear planning, you can create a cost-effective data center that delivers a substantial ROI and prepares you for future growth.</p>
          </div>
          </div>
          </Row>
      </Grid>

      {/* first row ends */}

      {/* second row starts */}
      <Grid>
          <Row>
          <div className="bx--col-lg-7">
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

          <div className="bx--col-lg-7 bx--offset-lg-1">
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
      </Grid>

      {/* second row ends */}

      </div>
         {/* section 2 ends*/}


                    {/* section 3  starts*/}   
                    <div className="develop__application">
                        <Grid>
                            <Row>
                                {/* left content  starts*/} 
                            <div className="bx--col-lg-8 bx--no-gutter ">
                             <div className="develop__application__heading bx--no-gutter">
                                 <p>Deploy Your Data Center Strategy with Uvation</p>
                             </div>
                             <div className="develop__application__content bx--no-gutter">
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

                      {/* section 4 starts*/}
                      <div className="datacenter_computing_unique">
          <Grid>
          <div className="bx--col-lg">
            <h1>Data Center Explained</h1>
            </div>
          </Grid>

            <div className="datacenter_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 datacenter_computing_unique_section1_index"> 
             <p>01</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  datacenter_computing_unique_section1_left_content">
                  <p>Introduction</p>
                  <div className="datacenter_computing_unique_section1_left_content_icon">
                  <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                 </div>
                 <div className="bx--col-lg-11    datacenter_computing_unique_section1_right_content">
                  <p>All the services you get with a datacenter solution are managed for you. For example, when using Google Docs, there’s no need to worry about the many licenses needed for the Docs word-processing app or whether they are being kept up-to-date. You also don’t have to think twice about whether your computer is exposed to malware as you type out a document, make a slide show, or fill in a spreadsheet. Google handles that protection for you. Also, because datacenter services are managed, users don’t have to be concerned about whether they’re using the latest version of the software. Updates are performed by the service provider, as well as security patches that protect the service from emerging threats on the landscape. With years of experience in datacenter computing technologies, Uvation can help you choose an SLA that best fits your organization’s needs. In this way, alongside Uvation, you can match your business model with the specific provisions of each datacenter solution.</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="datacenter_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 datacenter_computing_unique_section1_index"> 
             <p>02</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  datacenter_computing_unique_section1_left_content">
                  <p>The datacenter Is Available On-Demand</p>
                  <div className="datacenter_computing_unique_section1_left_content_icon">
                  <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                 </div>
                 <div className="bx--col-lg-11 datacenter_computing_unique_section1_right_content">
                  <p>datacenter services are provided on-demand. When you log in to your datacenter provider, you expect the service to be up and running, ready for your use. In order to achieve an equivalent state of readiness with an in-house hardware environment, you would have to have a computer dedicated to the application running 24/7. This includes not only the user-facing elements of the app but also all its dependencies, which may require substantial storage or memory to execute. A datacenter provider shoulders all that responsibility in exchange for a fee. With some services, the “fee” charged to the user is non-existent, with the service provider earning money from advertising, as is the case with Google’s Gmail. In many cases, availability is maintained even if the customer’s usage goes up dramatically. For example, if you were to go from producing one slide show a month with Google slides to 10 a day, all of your presentations would still function as you’d expect. For businesses seeking a datacenter provider to host an application, it’s important to keep in mind that users, as they would with Google docs or other datacenter-based services, expect availability. For this reason, it’s often prudent to choose a datacenter service that’s agile enough to adjust to varying workloads in accordance with user demands. Uvation’s knowledge of the capabilities of each datacenter service will make it easy to choose which one has the kinds of on-demand services that fit your business. Whether you need to host applications, house a database, or store user information, Uvation can vet the available options and help you pick the best one.</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="datacenter_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 datacenter_computing_unique_section1_index"> 
             <p>03</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-5  datacenter_computing_unique_section1_left_content">
                  <p>The datacenter Can Be Private and Public</p>
                  <div className="datacenter_computing_unique_section1_left_content_icon">
                  <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                 </div>
                 <div className="bx--col-lg-11    datacenter_computing_unique_section1_right_content">
                  <p>datacenter services are provided on-demand. When you log in to your datacenter provider, you expect the service to be up and running, ready for your use. In order to achieve an equivalent state of readiness with an in-house hardware environment, you would have to have a computer dedicated to the application running 24/7. This includes not only the user-facing elements of the app but also all its dependencies, which may require substantial storage or memory to execute. A datacenter provider shoulders all that responsibility in exchange for a fee. With some services, the “fee” charged to the user is non-existent, with the service provider earning money from advertising, as is the case with Google’s Gmail. In many cases, availability is maintained even if the customer’s usage goes up dramatically. For example, if you were to go from producing one slide show a month with Google slides to 10 a day, all of your presentations would still function as you’d expect. For businesses seeking a datacenter provider to host an application, it’s important to keep in mind that users, as they would with Google docs or other datacenter-based services, expect availability. For this reason, it’s often prudent to choose a datacenter service that’s agile enough to adjust to varying workloads in accordance with user demands. Uvation’s knowledge of the capabilities of each datacenter service will make it easy to choose which one has the kinds of on-demand services that fit your business. Whether you need to host applications, house a database, or store user information, Uvation can vet the available options and help you pick the best one.</p>
                 </div>
               </Row>
             </Grid>
            </div>

            <div className="datacenter_computing_unique_section1">
              <Grid>
              <div className="bx--col-lg-4 datacenter_computing_unique_section1_index"> 
             <p>04</p>
             </div>
             </Grid>

             <Grid>
               <Row>
                 <div className="bx--col-lg-4 datacenter_computing_unique_section1_left_content">
                  <p>Hybrid datacenter</p>
                  <div className="datacenter_computing_unique_section1_left_content_icon">
                  <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                 </div>
                 <div className="bx--col-lg-11   bx--offset-lg-1 datacenter_computing_unique_section1_right_content">
                  <p>datacenter services are provided on-demand. When you log in to your datacenter provider, you expect the service to be up and running, ready for your use. In order to achieve an equivalent state of readiness with an in-house hardware environment, you would have to have a computer dedicated to the application running 24/7. This includes not only the user-facing elements of the app but also all its dependencies, which may require substantial storage or memory to execute. A datacenter provider shoulders all that responsibility in exchange for a fee. With some services, the “fee” charged to the user is non-existent, with the service provider earning money from advertising, as is the case with Google’s Gmail. In many cases, availability is maintained even if the customer’s usage goes up dramatically. For example, if you were to go from producing one slide show a month with Google slides to 10 a day, all of your presentations would still function as you’d expect. For businesses seeking a datacenter provider to host an application, it’s important to keep in mind that users, as they would with Google docs or other datacenter-based services, expect availability. For this reason, it’s often prudent to choose a datacenter service that’s agile enough to adjust to varying workloads in accordance with user demands. Uvation’s knowledge of the capabilities of each datacenter service will make it easy to choose which one has the kinds of on-demand services that fit your business. Whether you need to host applications, house a database, or store user information, Uvation can vet the available options and help you pick the best one.</p>
                 </div>
               </Row>
             </Grid>
            </div>

          
         </div>
         {/* section 4 ends*/}

         {/* section 5 starts*/}
         <div className="datacenter_services">
         <div className="datacenter_services_heading">
           <h1>Uvation’s Data Center Services</h1>
           <p>Uvation provides companies with multiple options for achieving their data center goals. If you’re just beginning your data center journey, we can help you build a strategy that will prepare you for years of growth. Whether you need to start from scratch or need a team to augment your existing staff, our data center experts can guide you.</p>
       </div>
       <Grid>
           <Row>
               <div className="bx--col datacenter_services_content">
                   <div className="datacenter_services_content_img">
                   <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                  <div className="datacenter_services_content_heading">
                      <p>On-Demand Deployment</p>
                   </div>
                   <div className="datacenter_services_content_para">
                      <p>Our team of engineers is available on-demand to assist you when you need help. If you’re experiencing peak traffic and need to expand your resources, we’ll take a hands-on approach to solve your problems. Uvation’s team stands prepared to help with your initial deployment and beyond.</p>
                   </div>     
               </div>

               <div className="bx--col datacenter_services_content_second">  
                   <div className="datacenter_services_content_second_img">
                   <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                  <div className="datacenter_services_content_second_heading">
                      <p>Comprehensive Management</p>
                   </div>
                   <div className="datacenter_services_content_second_para">
                      <p>One of the most challenging aspects of leveraging a data center is managing all your relationships with vendors. Facilities, IT services companies, and security companies all require time and attention that is put to better use pursuing your business objectives. Let Uvation take the lead on data center management, so you can get back to what’s important.</p>
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
                      <p>Risk Mitigation</p>
                   </div>
                   <div className="datacenter_services_content_third_para">
                      <p>At Uvation, we understand the data center marketplace, and we can help you find colocation and IT partners with leading security credentials. We can do an audit of your existing deployments and maintain vigilance over the security of your data center as your business grows.</p>
                   </div>     
               </div>

               <div className="bx--col datacenter_services_content_fourth">  
                   <div className="datacenter_services_content_fourth_img">
                   <OptimizeCashFlow_02 stroke="#f4f4f4" />
                  </div>
                  <div className="datacenter_services_content_fourth_heading">
                      <p>Efficient Collaboration with Top Providers</p>
                   </div>
                   <div className="datacenter_services_content_fourth_para">
                      <p>Uvation has experience working with the world’s top IT and computing providers, and we can help you build bridges with the best in the business. We can help companies seeking cloud services through companies like AWS, Microsoft Azure, and Google Cloud, and we can help you collaborate with top data center providers to see your ideal environment become a reality.</p>
                   </div>     
               </div>
           </Row>
       </Grid>

         </div>
         {/* section 5 ends*/}

         {/* section 6 starts*/}
         <div className="datacenter_technologies">
         <div className="datacenter_technologies_heading">
           <h1>Data Center Deployments and Technologies</h1>
           <p>Data center deployments require you to select and maintain a multitude of technologies and applications, all of which must be maintained and updated regularly, including servers, firewalls, and more. Uvation lends you the technical expertise you need to make optimal selections for your business. Our goal is to help you establish a data center deployment that helps you grow and keeps your company secure.</p>
       </div>

       <Grid className="datacenter_technologies_topspace">
         <Row>
           <div className="bx--col-lg-8  datacenter_technologies_topspace_heading">
               
           <h1>In-house Data Center</h1>
           <p>
           In-house data center deployments tend to be the most complicated and expensive, but they also give you the most control. In this model, your organization will either build its own data center facility or rent space in an existing building and establish a data center. Because you aren’t working with a provider, you will be responsible for every aspect of the deployment, including power, maintenance, and the physical security of the building. This is often a viable solution for companies that have a lot of existing capital, a large footprint, and expect to grow rapidly soon.
           </p>
           
           </div>
           <div className="bx--col-lg-8  datacenter_technologies_topspace_image">
           <img src={uwv1}/>
           </div>
         </Row>
       </Grid>

       <Grid >
         <Row >
         <div className="bx--col-lg-8  datacenter_technologies_section2_image">
           <img src={uwv2}/>
           </div>
           <div className="bx--col-lg-6  bx--offset-lg-1 datacenter_technologies_section2_heading">
           <h1>Colocation</h1>
           <p>
           In a colocation model, you place your owned servers into a space you’ve rented in a data center facility. This allows you to maintain control over your servers, their operating systems, and many aspects of your security environment while outsourcing the costly aspects of operating an entire building. This is ideal for mid-sized businesses and companies that need to meet rigorous security demands regarding their data. It provides many of the benefits of an in-house data center but is much more affordable.
           </p>
           </div>
          
         </Row>
       </Grid>

       <Grid className="datacenter_technologies_thirdcard">
         <Row>
           <div className="bx--col-lg-8  datacenter_technologies_thirdcard_heading">
           <h1>Hosting Environments</h1>
           <p>
           Through the right hosting environment, you can create a cloud deployment that rivals the computing power of some data centers. This is made possible through significant arrangements with top cloud providers like Amazon Web Services, Microsoft Azure, and others. In this model, you outsource every aspect of your data center to the cloud provider and access your computing resources remotely. This is an excellent option for smaller companies, startups, and companies that require real-time, cost-effective flexibility in their computing environments.
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
                                 <p>Chat with an Uvation expert for a 30-minute strategy session at no cost</p>
                             </div>
                             <div className="chat__application__content ">
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



                    {/* section 7 ends*/}   
                   <FooterBotm/>
                   <div className='chat-box'>
        <Chat32 />
      </div>


       </Grid>
        </div>
    )
}

export default DataCenter
