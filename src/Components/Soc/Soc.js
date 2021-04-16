import React, { useEffect } from 'react';
import { Button, Column, Grid, Row, Tab, Tabs } from 'carbon-components-react';
import banner from './../../img/soc/banner.png';
import chat from './../../img/soc/chat.png';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import {
  CloudManagedServices,
  CloudStorage,
  LockedNetwork_01,
  SecurityAsAService,
  ServerOperatingSystems,
} from '@carbon/pictograms-react';
import {
  ArrowDown16,
  ArrowLeft16,
  ArrowRight16,
  Launch16,
} from '@carbon/icons-react';
import FooterBotm from '../Homepage/Footer/FooterBotm';
import {connect} from 'react-redux';
import {SocLandingPageDataStart} from "../../actions/index";
import { Link } from "react-router-dom";

const Soc = ({SocLandingPageDataStart,socLandingData}) => {
  // SocLandingPageDataStart
  useEffect(()=>{
    SocLandingPageDataStart();
  },[])

  console.log(socLandingData,"socLandingData");

  return (
    <div className='soc'>
      <MainHeader />
      {/* section1 */}
      <Grid
        fullWidth
        className='soc__banner'
        style={{ backgroundImage: ` url("${banner}")` }}
      >
        <Grid condensed>
          <Row className='soc__banner__content'>
            <Column lg={7} className='pictoIcon'>
              <SecurityAsAService />
            </Column>
            <Column lg={15} className='heading'>
              <h1>{socLandingData && socLandingData.soc_heading}</h1>
            </Column>
            <Column lg={7} className='subheading'>
              <p>
                 {socLandingData && socLandingData.soc_description}
              </p>
            </Column>
            <Column lg={16} className='learn__more'>
              <Button renderIcon={ArrowDown16}>Learn more</Button>
            </Column>
            <Column className='bottom__arrows'>
            <Link style={{color:"none",textDecoration:"none"}} to ="/technologyservices">
                         <ArrowLeft16 />  <p>Technology Services</p>
                                </Link>
              <p>
                <span>|</span>
              </p>
              <p>
                up next: cybersecurity <ArrowRight16 />
              </p>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section2 */}

      <Grid fullWidth className='soc__benifits'>
        <Grid condensed>
          <Row>
            <Column lg={16}>
              <h2>The Benefits of SOC as a Service</h2>
            </Column>
          </Row>
          <Row className='soc__benifits__box'>
            <Column lg={{ span: 7 }}>
              <div className='heading'>
                <div className='number__box'>
                  <span>1</span>
                </div>
                <h4>Centralize Threat Detection and Response</h4>
              </div>
              <div className='border__line'></div>
              <p>
                If you were taking an ad hoc approach to cybersecurity, or if
                the task of securing your network fell on the shoulders of a few
                IT employees, SOC as a Service can give you a more organized
                defense. SOC as a Service centralizes all your security
                operations and unburdens your staff. Instead of making
                additional work for your team, you can rely on your SOC partner
                to focus entirely on system security.
                <br /> <br /> Your outsourced SOC acts as the operational core
                for system monitoring, threat detection, and incident response.
                It ensures you stay compliant with security regulations, so your
                staff doesn’t need to. If there is an incident, you’ll get an
                automated alert, and your partner will spring into action to
                rectify the situation.
              </p>
            </Column>
            <Column lg={{ span: 7 }}>
              <div className='heading'>
                <div className='number__box'>
                  <span>2</span>
                </div>
                <h4>Take a Proactive Security Posture</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Organizations that don’t maintain a SOC usually take a reactive
                security posture. That means they don’t act until a threat has
                already been active for some time, which is usually too late.
                With SOC as a Service, a team of security professionals, armed
                with a comprehensive security software suite, will actively
                monitor your network, updating and patching your solutions to
                eliminate as many vulnerabilities as possible. <br /> <br />
                Most importantly, they’ll be proactive about threat detection
                and analysis. You’ll dramatically reduce your risk of a security
                incident in the first place.
              </p>
            </Column>
            <Column lg={7}>
              <div className='heading'>
                <div className='number__box'>
                  <span>3</span>
                </div>
                <h4>Respond to Threats More Effectively</h4>
              </div>
              <div className='border__line'></div>
              <p>
                You partner will also provide you with incident response and
                security information and event management (SIEM) services.
                You’ll receive automated alerts about security threats and
                real-time analysis about incidents directly from your security
                partner. <br /> <br />
                Your partner will also help you develop and deploy a plan for
                responding to incidents. If there is a threat, you won’t have to
                worry about allocating additional business resources to identify
                it and formulate a response. Your SOC as a Service partner will
                provide the personnel and processes to respond to threats
                immediately.
              </p>
            </Column>
            <Column lg={7}>
              <div className='heading'>
                <div className='number__box'>
                  <span>4</span>
                </div>
                <h4>Deploy Solutions Faster</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Building an in-house SOC requires you to hire several security
                experts, but it also requires you to purchase and deploy
                multiple security software solutions. Putting together an
                effective security technology stack is a time-consuming and
                expensive undertaking.
                <br /> <br /> With SOC as a Service, your partner will have a
                security suite ready to deploy from the start of your
                relationship. They’ll install firewalls, intrusion detection
                systems (IDSs), automation tools, and more during a
                comprehensive onboarding process, so you won’t have to assemble
                these solutions yourself.
              </p>
            </Column>
            <Column lg={7}>
              <div className='heading'>
                <div className='number__box'>
                  <span>5</span>
                </div>
                <h4>Leverage Automation and AI</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Cybersecurity service providers also utilize some of the most
                advanced security technologies on the market. By partnering with
                a SOC provider, you’ll be able to integrate security solutions
                like robotic process automation (RPA), security orchestration
                automation and response (SOAR), and AI-enhanced data analysis
                into your security processes.
              </p>
            </Column>
            <Column lg={7}>
              <div className='heading'>
                <div className='number__box'>
                  <span>6</span>
                </div>
                <h4>Improved Visibility and Reporting</h4>
              </div>
              <div className='border__line'></div>
              <p>
                The more you know about your systems, the easier it is to
                identify attacks and vulnerabilities. SOC operators not only
                gain a full understanding of your computing environment, but
                they also provide you with clear visibility and reporting. This
                gives you a high-level view of what’s happening in your network
                and why. <br /> <br />
                Your SOC will create a thorough inventory of all your
                organization’s IT assets. Throughout your partnership, they’ll
                keep you updated on security incidents with regular reports,
                data visualizations, and a security dashboard that’s easy for
                every stakeholder to access and understand.
              </p>
            </Column>
            <Column lg={7}>
              <div className='heading'>
                <div className='number__box'>
                  <span>7</span>
                </div>
                <h4>Instant Access to Security Experts</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Finding and hiring cybersecurity professionals to staff an
                in-house SOC is a daunting process, especially in today’s hiring
                environment. SOC as a Service removes this variable from the
                security equation. You’ll gain instant access to a security
                staff who will apply their expertise directly to your
                organization. <br /> <br /> If you have questions, your
                outsourced security staff will provide answers as if they are
                right down the hall from you. The best way to safeguard your
                organization from any threat vector is through a comprehensive
                SOC team, which includes both engineering and security
                personnel.
              </p>
            </Column>
            <Column lg={7}>
              <div className='heading'>
                <div className='number__box'>
                  <span>8</span>
                </div>
                <h4>Predictable Regular Costs</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Finally, one of the clearest benefits to SOC as a Service is the
                predictable cost. Your organization won’t have to waste time and
                money onboarding solutions that may or may not be suitable for
                your security environment. Instead, you’ll pay a regular fee to
                your SOC as a Service provider to take advantage of their
                technology and expertise.
              </p>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section3 */}

      <Grid fullWidth className='soc__service'>
        <Grid condensed>
          <Row>
            <Column lg={11} className='heading'>
              <h2>SOC as a Service by Uvation</h2>
            </Column>
            <Column lg={7} className='subheading'>
              <p>
                Uvation provides its clients with a fully outsourced SIEM
                service delivered through a comprehensive SOC as a Service
                partnership. We don’t just provide security software. We also
                provide analysts, engineers, and other personnel, as well as a
                comprehensive suite of security processes to protect your
                systems.
              </p>
            </Column>
          </Row>
          <Row className='soc__service__cards'>
            <Column lg={5}>
              <div className='card'>
                <div className='card__icon'>
                  <CloudStorage />
                </div>
                <div className='card__title'>
                  <h3>Network Security</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    The image of the hacker attempting to guess a security
                    password is dated. Today’s cyber attackers have more tools
                    in their arsenal than ever before, and they’ll throw
                    everything
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__icon'>
                  <ServerOperatingSystems />
                </div>
                <div className='card__title'>
                  <h3>Data Security</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    Data serves as the foundation for your organization’s
                    operations, but it’s under constant threat from
                    cybercriminals. If you think of your network security
                    infrastructure is a vault, your data is the currency that
                    sits inside it. Uvation’s SOC will work proactively to
                    identify security vulnerabilities that could put your data
                    at risk, then rectify them quickly. We’ll implement critical
                    security solutions to ensure your data is secure from
                    outside threats, while also instilling robust internal
                    protocols to keep your data safe while you use it and
                    transfer it across your network. We also stay appraised of
                    all relevant security compliance regulations. We’ll ensure
                    your systems are compliant and your customers’ data is safe,
                    so you can operate in every available market.
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__icon'>
                  <LockedNetwork_01 />
                </div>
                <div className='card__title'>
                  <h3>Physical Security</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    If your organization operates a data center or another type
                    of computing facility, we will consult with you to deploy a
                    robust set of security protocols to keep your facilities
                    safe from security threats. Your equipment is paramount to
                    your success. We can help to keep your resources safe and
                    prevent unwanted access to your data at the source.
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section4 */}

      <Grid fullWidth className='soc__service__statistics'>
        <Grid condensed>
          <Row>
            <Column lg={11} className='heading'>
              <h2>SOC as a Service Statistics</h2>
            </Column>
            <Column lg={8} className='subheading'>
              <p>
                SOC as a Service has emerged as one of the most important
                industries in the cybersecurity landscape. Now, more than ever,
                organizations of all sizes need their own SOC to prepare them
                for an ever-expanding list of security regulations and to
                protect them from constantly evolving security threats.
              </p>
            </Column>
          </Row>
          <Row className='soc__service__statistics__cards'>
            <Column lg={5}>
              <div className='card'>
                <div className='card__title'>
                  <h2>$1.656 bn.</h2>
                </div>
                <div className='card__desc'>
                  <p>
                    The SOC as a Service market is projected to grow from $471
                    million in 2020 to $1.656 billion by 2025, at a CAGR of
                    26.6%.
                  </p>
                </div>
                <div className='learnmore '>
                  <Button kind='secondary' size='field' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__title'>
                  <h2>$2.86 mil.</h2>
                </div>
                <div className='card__desc'>
                  <p>
                    Organizations spend an average of $2.86 million annually on
                    their in-house SOC.
                  </p>
                </div>
                <div className='learnmore '>
                  <Button kind='secondary' size='field' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__title'>
                  <h2>73%</h2>
                </div>
                <div className='card__desc'>
                  <p>
                    of IT professionals say their SOCs are either “essential” or
                    “very important.”
                  </p>
                </div>
                <div className='learnmore '>
                  <Button kind='secondary' size='field' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__title'>
                  <h2>63%</h2>
                </div>
                <div className='card__desc'>
                  <p>
                    of companies said their data was potentially compromised
                    within the last twelve months due to breaches in their
                    operating systems, firmware, or hardware.
                  </p>
                </div>
                <div className='learnmore '>
                  <Button kind='secondary' size='field' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__title'>
                  <h2>94%</h2>
                </div>
                <div className='card__desc'>
                  <p>of malware arrives on computers via email%.</p>
                </div>
                <div className='learnmore '>
                  <Button kind='secondary' size='field' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__title'>
                  <h2>#1</h2>
                </div>
                <div className='card__desc'>
                  <p>
                    Phishing is the number one cause of cybersecurity breaches
                  </p>
                </div>
                <div className='learnmore '>
                  <Button kind='secondary' size='field' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__title'>
                  <h2>34%</h2>
                </div>
                <div className='card__desc'>
                  <p>
                    The SOC as a Service market is projected to grow from $471
                    million in 2020 to $1.656 billion by 2025, at a CAGR of
                    26.6%.
                  </p>
                </div>
                <div className='learnmore '>
                  <Button kind='secondary' size='field' renderIcon={Launch16}>
                    Learn more
                  </Button>
                </div>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section5 */}

      <Grid fullWidth className='soc__what'>
        <Grid condensed>
          <Row>
            <Column className='heading'>
              <h2>What is SOC as a Service?</h2>
            </Column>
          </Row>
          <Row className='section__desc'>
            <Column lg={{ span: 7 }}>
              <p>
                To address these challenges, many companies have sought to
                outsource their cybersecurity functions or augment their
                internal teams with outsourced cybersecurity professionals. Over
                the years, this industry has evolved from a simple managed IT
                service model to the managed security services provider (MSSP)
                model which has come to define the industry. Today,
                <br />
                <br />
                cybersecurity organizations like Uvation offer a specific type
                of security service to help their customers reach a reliable
                security posture: Security Operations Center (SOC) as a Service.
              </p>
            </Column>
            <Column lg={{ span: 7 }}>
              <p>
                SOC as a Service provides an opportunity to augment your
                cybersecurity strategy, deploy robust defenses, incorporate new
                security technologies, respond to threats instantly, and reach
                your cybersecurity goals faster and for a fraction of the cost.
                <br />
                <br />
                To understand how SOC as a Service works, it’s important to
                understand what a SOC is and why it’s important to your
                organization’s security posture.
              </p>
            </Column>
          </Row>
          <Row condensed className='soc__desc__row'>
            <Column lg={5} className='with__icon'>
              <div className='serial'>
                <p>01</p>
              </div>
              <div className='title'>
                <h4>Security Operations Center (SOC)</h4>
              </div>
              <div className='icon'>
                <CloudManagedServices />
              </div>
            </Column>
            <Column lg={{ span: 11 }}>
              <div className='desc'>
                <p>
                  A SOC is a centralized security function within your
                  organization. It encompasses people, processes, and
                  technologies that serve to monitor your organization’s
                  computing environment. A SOC also detects, prevents, analyzes,
                  and responds to cybersecurity incidents.
                  <br />
                  <br /> SOC teams are usually staffed by engineers, analysts,
                  and managers. They are responsible for analyzing and
                  monitoring your organization’s security posture, and they work
                  alongside incident response teams to address security issues
                  quickly once they are discovered. <br />
                  <br /> Traditionally, a SOC might have looked like an office
                  in a company building that was staffed with security personnel
                  and technology, all of which work together to perform a
                  security function. But SOCs today are increasingly remote and
                  virtual, relying on automated software, AI, and remote experts
                  to protect a networ A SOC at your organization would do the
                  following:
                  <br />
                  <br />
                  • Act as a central point for mon itoring your company’s
                  security posture <br />
                  <br />• Identify, analyze, and prepare a response to threats
                  <br />
                  <br />• Prevent cyber threats from impacting business
                  continuity
                  <br />
                  <br />• Ensure fast recovery in the event of a loss of data
                  <br />
                  <br />• Provide insightful reporting on compliance and risk
                  <br />
                  <br /> • Keep other sectors of the business informed about
                  relevant cyber threats Many SOCs can also conduct incident
                  management in the event of a breach. They can even conduct
                  forensic investigations to determine the results of a breach
                  or attack.
                </p>
              </div>
            </Column>
          </Row>
          <Row condensed className='soc__desc__row'>
            <Column lg={5} className='with__icon'>
              <div className='serial'>
                <p>02</p>
              </div>
              <div className='title'>
                <h4>Security Operations Center (SOC)</h4>
              </div>
              <div className='icon'>
                <CloudManagedServices />
              </div>
            </Column>
            <Column lg={{ span: 11 }}>
              <div className='desc'>
                <p>
                  SOC as a Service In a SOC as a Service arrangement, you
                  outsource some or all your security functions to an MSSP
                  rather than keeping them in-house. Your MSSP provides you with
                  the personnel, processes, and technology necessary to manage
                  your security posture and respond proactively to threats.{' '}
                  <br />
                  <br />
                  Much like the Software as a Service (SaaS) model, SOC as a
                  Service is typically provided on a subscription basis, and it
                  could be provided alongside other types of IT services. For
                  example, when you work with a partner like Uvation, you can
                  incorporate SOC as a Service into other technology services,
                  such as computational infrastructure engineering, managed IT
                  services, and our DevOps and WebOps solutions. SOC as a
                  Service can be deployed in multiple ways, such as:
                  <br />
                  <br /> • Fully managed <br />
                  <br /> • Co-managed •<br />
                  <br /> Custom-built A fully managed SOC as a Service
                  arrangement lets you rely on your partner to manage your
                  security function entirely. They will provide
                  personnel—including analysts and engineers—alongside the
                  automations, software, and other technologies you need to
                  maintain your security posture. If you choose, you could
                  deploy a co-managed SOC as a Service model, in which you
                  maintain some ownership of your security function while
                  augmenting it with your partner’s resources. Naturally, any
                  SOC as a Service function can be custom-built to meet the
                  unique needs of your organization and your computing
                  infrastructure.
                </p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section6*/}

      <Grid fullWidth className='soc__technologies'>
        <Grid condensed>
          <Row>
            <Column lg={10} className='heading'>
              <h2>
                Technologies and Security Processes Involved in SOC as a Service
              </h2>
            </Column>
            <Column lg={7} className='subheading'>
              <p>
                There are several technologies and processes involved in
                deploying a comprehensive SOC. Here are some that you should be
                aware of.
              </p>
            </Column>
          </Row>
          <Row className=' soc__technologies__tabs'>
            <Tabs>
              <Tab id='tab-1' label='Technologies'>
                <Grid condensed>
                  <Row>
                    <Column lg={9} className='tabheading'>
                      <h4>Technologies</h4>
                    </Column>
                    <Column lg={9} className='tabsubheading'>
                      <p>
                        With SOC as a Service, your network will be protected by
                        technologies like the following.
                      </p>
                    </Column>
                  </Row>
                  <Row className='cards'>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>SIEM Software</h3>
                      </div>
                      <div className='desc'>
                        <p>
                          SIEM software identifies and categorizes incidents and
                          events throughout your organization’s infrastructure.
                          It will also analyze incidents, providing reports and
                          real-time alerts about potential security problems.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>Data Loss Prevention Software</h3>
                      </div>
                      <div className='desc'>
                        <p>
                          This software detects potential data breaches and
                          exfiltration transmissions, then prevents them from
                          happening by blocking sensitive data.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>Threat Intelligence Platforms</h3>
                      </div>
                      <div className='desc'>
                        <p>
                          This emerging technology helps you organize and
                          analyze threat data from multiple sources, so you can
                          prepare a defense for potential threats.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>Vulnerability Management Solutions:</h3>
                      </div>
                      <div className='desc'>
                        <p>
                          This type of solution identifies, evaluates, and
                          reports on security vulnerabilities in your systems
                          and software.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5}></Column>
                  </Row>
                </Grid>
              </Tab>
              <Tab id='tab-2' label='Processes'>
                <Grid condensed>
                  <Row>
                    <Column lg={9} className='tabheading'>
                      <h4>Processes</h4>
                    </Column>
                    <Column lg={9} className='tabsubheading'>
                      <p>
                        With SOC as a Service, your network will be protected by
                        technologies like the following.
                      </p>
                    </Column>
                  </Row>
                  <Row className='cards'>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5}></Column>
                  </Row>
                </Grid>
              </Tab>
              <Tab id='tab-3' label='Types of Cyberattacks'>
                <Grid condensed>
                  <Row>
                    <Column lg={9} className='tabheading'>
                      <h4>Types of Cyberattacks</h4>
                    </Column>
                    <Column lg={9} className='tabsubheading'>
                      <p>
                        With SOC as a Service, your network will be protected by
                        technologies like the following.
                      </p>
                    </Column>
                  </Row>
                  <Row className='cards'>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5} className='tabCard'>
                      <div className='title'>
                        <h3>
                          Intrusion Detection and Prevention Systems (IDPS)
                        </h3>
                      </div>
                      <div className='desc'>
                        <p>
                          An IDPS monitors your network’s traffic in search of
                          signs of a potential attack. It automatically takes
                          action to prevent an attack when it detects dangerous
                          activity.
                        </p>
                      </div>
                    </Column>
                    <Column lg={5}></Column>
                  </Row>
                </Grid>
              </Tab>
            </Tabs>
          </Row>
        </Grid>
      </Grid>

      {/* section7*/}

      <Grid fullWidth className='soc__chat'>
        <Grid condensed>
          <Row>
            <Column lg={{ span: 7 }}>
              <div className='heading'>
                <h3>
                  Contact Uvation today to learn more about our SOC as a Service
                  Offering.
                </h3>
              </div>
              <Column lg={10}>
                <div className='subheading'>
                  <p>
                    Get in touch for a consultation call or answer to any
                    questions you might have.
                  </p>
                </div>
              </Column>
            </Column>
            <Column
              lg={{ span: 8, offset: 1 }}
              style={{ position: 'relative' }}
            >
              <div className='imgbox'>
                <img src={chat} alt='' />
              </div>
              <div className='bookCons'>
                <p>Book a consultation</p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>

      <FooterBotm />
    </div>
  );
};
const mapStateToProps = state => ({

  socLandingData: state.socPageReducer.socLandingData,

});

const mapDispatchToProps = (dispatch) => ({

  SocLandingPageDataStart: () => dispatch(SocLandingPageDataStart()),
  
});


export default connect(mapStateToProps,mapDispatchToProps)(Soc);
