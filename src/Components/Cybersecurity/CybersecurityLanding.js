import { Button, Column, Grid, Row,Loading } from 'carbon-components-react';
import React, { useEffect } from 'react';
import headerBg from './../../img/cybersecurity/header.svg';
import bottomBg from './../../img/cybersecurity/bottom.png';
import managed from './../../img/cybersecurity/managed.png';
import soc from './../../img/cybersecurity/soc.png';
import {
  ArrowDown20,
  ArrowRight16,
  ArrowRight20,
  Chat16,
  IbmSecurity24,
  Launch16,
  Phone16,
} from '@carbon/icons-react';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import { SystemsDevopsCode } from '@carbon/pictograms-react';
import  * as All from "@carbon/pictograms-react";
import { Link } from 'react-router-dom';
import FooterBotm from '../Homepage/Footer/FooterBotm';
import {connect} from 'react-redux';
import {cyberSecurityLandingPageDataStart,cyberSecurityChatPageDataStart} from "../../actions/index";
// import  * as All from "@carbon/icons-react";


const CybersecurityLanding = ({cyberSecurityLandingPageDataStart,CyberSecurityLandingData,CyberSecurityChatData,cyberSecurityChatPageDataStart}) => {

  const Icon = ({iconName ="ArrowLeft16",fill}) => {
    const icon = React.createElement(All[iconName]);
    return <div style={{fill:fill}}>{icon}</div>;
  };

  const Card1=({img,icon,heading,desc})=>{
    return(
    <>
       <Column lg={8}>
            <div
              className='cardbox__img'
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundrepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            ></div>
          </Column>
          <Column lg={8}>
            <Column lg={{ span: 10, offset: 3 }}>
              <div className='card'>
                <Icon iconName = {icon}/>
                <div className='card__heading'>
                  <h3>{heading}</h3>
                </div>
                <div className='card__para'>
                  <p>
                       {desc}
                  </p>
                </div>
                <div className='card__button'>
                  <Button as={Link} to='#' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Column>
    </>
    )
  }

  const Card2=({img,icon,heading,desc})=>{
    return(
      <>
          <Column lg={8}>
            <Column lg={{ span: 10, offset: 3 }}>
              <div className='card'>
              <Icon iconName = {icon}/>
                <div className='card__heading'>
                  <h3>{heading}</h3>
                </div>
                <div className='card__para'>
                  <p>
                   {desc}
                  </p>
                </div>
                <div className='card__button'>
                  <Button as={Link} to='#' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Column>
          <Column lg={8}>
            <div
              className='cardbox__img'
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundrepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </Column>

      </>
    )
  }

  useEffect(()=>{
  cyberSecurityLandingPageDataStart();
  cyberSecurityChatPageDataStart();
  },[])

  console.log(CyberSecurityChatData,"CyberSecurityChatData");
  return (
    <>
    <Loading active={CyberSecurityLandingData.cyberSecurityPageLoader}/>
    <div className='cybersecurity'>
      <MainHeader />
      <Grid
        fullWidth
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: 'cover',
          backgroundrepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Row className='cybersecurity__banner'>
         <IbmSecurity24/>
          <Column lg={16} className='title'>
            <p>{CyberSecurityLandingData && CyberSecurityLandingData.prepare_top_heading}</p>
          </Column>
          <Column lg={12} className='heading'>
            <h1>{CyberSecurityLandingData && CyberSecurityLandingData.prepare_heading}</h1>
          </Column>
          <Column lg={10} className='subheading'>
            <p>
            {CyberSecurityLandingData && CyberSecurityLandingData.prepare_description}
            </p>
          </Column>
          <Column lg={10}>
            <div className='learnmore'>
              <Button renderIcon={ArrowDown20}>See more</Button>

              <Button renderIcon={ArrowRight20} kind='ghost'>
                Contact Us
              </Button>
            </div>
          </Column>
        </Row>
      </Grid>

      {/* image rows */}
      <Grid fullWidth className='cybersecurity__cardbox'>
        <Row condensed>
       

{CyberSecurityLandingData && CyberSecurityLandingData.prepare_content && CyberSecurityLandingData.prepare_content.map((value,index)=> index % 2==0 ? 
             <Card1 img={soc} heading={value.prepare_content_heading} desc={value.prepare_content_description} icon={value.prepare_content_icon} />: 
              <Card2 img={managed} heading={value.prepare_content_heading} desc={value.prepare_content_description} icon={value.prepare_content_icon}/>          
              ) }
          {/* <Column lg={8}>
            <Column lg={{ span: 10, offset: 3 }}>
              <div className='card'>
                <SystemsDevopsCode stroke='#f4f4f4' />
                <div className='card__heading'>
                  <h3>Managed Security</h3>
                </div>
                <div className='card__para'>
                  <p>
                    Managed security is a cost-effective way to keep your
                    company safe. Instead of hiring an in-house security team,
                    you can rely on Uvation’s expertise to design, deploy, and
                    manage your security infrastructure. Expand your security
                    operations to protect your company from the latest cyber
                    threats through must-have security technologies, key
                    expertise, and 24/7 support.
                  </p>
                </div>
                <div className='card__button'>
                  <Button as={Link} to='#' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Column>
          <Column lg={8}>
            <div
              className='cardbox__img'
              style={{
                backgroundImage: `url(${managed})`,
                backgroundSize: 'cover',
                backgroundrepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </Column>

          <Column lg={8}>
            <div
              className='cardbox__img'
              style={{
                backgroundImage: `url(${soc})`,
                backgroundSize: 'cover',
                backgroundrepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            ></div>
          </Column>
          <Column lg={8}>
            <Column lg={{ span: 10, offset: 3 }}>
              <div className='card'>
                <SystemsDevopsCode stroke='#f4f4f4' />
                <div className='card__heading'>
                  <h3>Incident Response</h3>
                </div>
                <div className='card__para'>
                  <p>
                    In the event of a data breach or cyberattack, you need a
                    protocol to protect your assets and shore up your defenses.
                    Managed security service providers like Uvation can empower
                    your company with a full set of tools and processes for
                    responding to cyber incidents, so you can minimize risk and
                    place your company on the fast-track to recovery. Security
                    incidents are no longer a question of “if,” but “when.” A
                    comprehensive incident response program is an essential part
                    of doing business in today’s connected world.
                  </p>
                </div>
                <div className='card__button'>
                  <Button as={Link} to='#' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Column> */}
        </Row>
      </Grid>

      {/* get in touch */}
      <Grid
        fullWidth
        className='cybersecurity__getinTouch'
        style={{
          backgroundImage: `linear-gradient(90deg,#010101,#010101E1,#00000000),url(${bottomBg})`,
          backgroundSize: 'cover',
          backgroundrepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <Row condensed>
          <Column lg={8}>
            <Column lg={{ span: 13, offset: 3 }} sm={16}>
              <div className='cybersecurity__getinTouch__content'>
                <div className='heading'>
                  <h2>{CyberSecurityChatData && CyberSecurityChatData.cybersecurity_top_get_heading}</h2>
                </div>
                <div className='slogenLine'>
                  <p>{CyberSecurityChatData && CyberSecurityChatData.cybersecurity_get_heading}</p>
                </div>
                <Column lg={{ span: 9 }} className='subheading'>
                  <p>
                  {CyberSecurityChatData && CyberSecurityChatData.cybersecurity_get_description}
                  </p>
                </Column>
                <div className='getInbutton'>
                  <Button className='lrg-btn' renderIcon={Phone16}>
                    Call Us
                  </Button>
                  <Button kind='ghost' renderIcon={Chat16}>
                    Live chat
                  </Button>
                </div>
              </div>
            </Column>
          </Column>
          <Column lg={8}>
            <div className='sendus'>
              <div className='largeBtnSet'>
                <Button
                  as={Link}
                  to='#'
                  renderIcon={ArrowRight16}
                  size='xl'
                  className='left'
                >
                  Send us a message
                </Button>
                <Button
                  as={Link}
                  to='#'
                  renderIcon={ArrowRight16}
                  size='xl'
                  className='right'
                >
                  Request a meeting
                </Button>
              </div>
            </div>
          </Column>
        </Row>
      </Grid>
      <FooterBotm />
    </div>
    </>
  );
};

const mapStateToProps = state => ({

  CyberSecurityLandingData : state.workforcePageReducer.CyberSecurityLandingData,
  CyberSecurityChatData : state.workforcePageReducer.CyberSecurityChatData,

});

const mapDispatchToProps = (dispatch) => ({

cyberSecurityLandingPageDataStart:() => dispatch(cyberSecurityLandingPageDataStart()),
cyberSecurityChatPageDataStart:() => dispatch(cyberSecurityChatPageDataStart()),



// CyberSecurityChatData:() => dispatch(CyberSecurityChatData()),
});


export default connect(mapStateToProps,mapDispatchToProps)(CybersecurityLanding);



