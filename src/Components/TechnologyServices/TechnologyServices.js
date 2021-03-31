import React from "react";
import MainHeader from "../Homepage/Mainheader/MainHeader";
import bg1 from "./../../img/technologyservices/bg1.png";
import { Grid, Row, Button } from "carbon-components-react";
import { ArrowDown20, ArrowRight20 } from "@carbon/icons-react";
import { SystemsDevopsCode, University, OptimizeCashFlow_02, CloudPakForSecurity, Servers } from "@carbon/pictograms-react";
import Footer from './../Homepage/Footer/Footer';
import { Chat32 } from '@carbon/icons-react';


const TechnologyServices = () => {
  return (
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
                  <p>Technology Services</p>
                </div>
                <div className="bx--col-lg-12 section-mainHead">
                  <div className="section-mainHead">
                    <div className=" section-mainHeading">
                      <h1>Harness the full power of your IT infrastructure</h1>
                    </div>
                  </div>
                </div>
                {/* sectionpara */}
                <div className="bx--col-lg-12 section-mainHead">
                  <div className="section-paraHeading">
                    <p>
                      The full package of professional services designed to
                      facilitate the use of technology by your enterprise and
                      end users. We provide specialized technology-oriented
                      solutions by combining the processes and functions of
                      software, hardware, networks, telecommunications and
                      electronics.
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
                <h1>Application</h1>
              </div>
              <div className="technology_application_content_para">
                <p>
                  Custom applications can give you automation, enhanced
                  functionality, and customer connection you need to propel your
                  business to the next level. By going with a customized
                  solution, you avoid settling for an off-the-shelf solution
                  that ends up forcing you to “put a round peg in a square hole.
                  ” With Uvation, you can have your app designed to your
                  specifications, from scratch, and in-line with your most
                  important objectives.
                </p>
              </div>
              <div className="technology_application_content_button">
                <Button renderIcon={ArrowDown20}>Learn more</Button>
              </div>
            </div>
          </div>
        </Row>
        {/* section_2 */}

        {/* section_3 */}
        <Row>
          <div className="bx--col-lg-8 tech_application">
            <div className="card bx--col-lg-11 bx--offset-lg-3 technology_application">
              <div className="technology_application_content_icon">
                <OptimizeCashFlow_02 stroke="#f4f4f4" />
              </div>
              <div className="technology_application_content_heading">
                <h1>Business Resiliency</h1>
              </div>
              <div className="technology_application_content_para">
                <p>
                  For every minute of downtime, the average business loses about
                  $5,600, according to Gartner. When minutes add up to hours,
                  and hours add up to days, costs can quickly skyrocket out of
                  control. Even though attaining resiliency and continuity comes
                  with a range of benefits, the ultimate objective is to reduce
                  or eliminate downtime. The good news is that no matter how
                  complex—or simple—your IT infrastructure is, Uvation can guide
                  you to greater resiliency and continuity.
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
        {/* section_3 */}


          {/* section_4 */}
          <Row>

          <div className="bx--col-lg-8 image_application">
            <img src={bg1} />
          </div>

          <div className="bx--col-lg-8 tech_application">
            <div className="card bx--col-lg-11 bx--offset-lg-3 technology_application">
              <div className="technology_application_content_icon">
                <OptimizeCashFlow_02  stroke="#f4f4f4" />
              </div>
              <div className="technology_application_content_heading">
                <h1>Cloud</h1>
              </div>
              <div className="technology_application_content_para">
                <p>
                The cloud serves as an extension of computing resources as well as a fertile ground for growing new business initiatives. 
                With the cloud, small organizations can wield the power of larger enterprises, and big companies can discover fresh ways of improving their services, as well as the experience of their staff and other stakeholders. 
                The cloud enables companies, regardless of size or where they are in their growth cycle, to create, manage, and maintain business solutions with a minimal upfront investment.
                </p>
              </div>
              <div className="technology_application_content_button">
                <Button renderIcon={ArrowDown20}>Learn more</Button>
              </div>
            </div>
          </div>

        
        </Row>
        {/* section_4 */}

        {/* section_5 */}
        <Row>
          <div className="bx--col-lg-8 tech_application">
            <div className="card bx--col-lg-11 bx--offset-lg-3 technology_application">
              <div className="technology_application_content_icon">
                <Servers stroke="#f4f4f4" />
              </div>
              <div className="technology_application_content_heading">
                <h1>Data Center</h1>
              </div>
              <div className="technology_application_content_para">
                <p>
                Upgrading from an initial server installation to a data center can help your business grow from small beginnings to an enterprise-level competitor. Whether you intend to maintain your own data center, outsource the role entirely, or collocate your own hardware in a hosted facility, you can harness the computing power your business needs to thrive through the strategic deployment of your assets. 
                Centralize your organization’s IT operations and secure your most critical proprietary assets in a unique server environment. 
                Both physical and virtual infrastructures are available for your workloads.
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
        {/* section_5 */}

{/* section_6 */}
<Row>

<div className="bx--col-lg-8 image_application">
  <img src={bg1} />
</div>

<div className="bx--col-lg-8 tech_application">
  <div className="card bx--col-lg-11 bx--offset-lg-3 technology_application">
    <div className="technology_application_content_icon">
      <OptimizeCashFlow_02  stroke="#f4f4f4" />
    </div>
    <div className="technology_application_content_heading">
      <h1>Managed IT</h1>
    </div>
    <div className="technology_application_content_para">
      <p>
      Using managed IT services can free up your IT team to invest their valuable time in supporting your organization’s growth and fine-tuning existing systems. Whether you choose to use managed service providers (MSPs) only for specific, mundane tasks or to manage the bulk of your IT structure, leveraging managed IT services enables you to invest less time in repetitive IT tasks and more time towards business-critical objectives. 
      MSPs can serve as the foundation for all your IT needs or focus solely on cybersecurity initiatives. 
      You can also take an a la carte approach, selecting services as needed.
      </p>
    </div>
    <div className="technology_application_content_button">
      <Button renderIcon={ArrowDown20}>Learn more</Button>
    </div>
  </div>
</div>


</Row>
{/* section_6 */}

{/* section_7 */}
        <Row>
          <div className="bx--col-lg-8 tech_application">
            <div className="card bx--col-lg-11 bx--offset-lg-3 technology_application">
              <div className="technology_application_content_icon">
                <Servers stroke="#f4f4f4" />
              </div>
              <div className="technology_application_content_heading">
                <h1>Workforce Enablement</h1>
              </div>
              <div className="technology_application_content_para">
                <p>
                Workforce enablement involves empowering companies to get more done while spending less and making more.
                 This involves leveraging technology, policies, and principles to make a business more productive and efficient. Many businesses are still in the process of completing their digitalization. For these, workforce enablement offers significant, immediate pay-off, as technology is put to work to enhance core systems.
                 However, even for companies that already incorporate digital tools to drive and support operations, workforce enablement provides them with a fresh look at business problems, as well as the tools needed to address them.
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
        {/* section_7 */}
      </Grid>
      <Footer/>
      <div className='chat-box'>
        <Chat32 />
      </div>

    </div>
  );
};

export default TechnologyServices;
