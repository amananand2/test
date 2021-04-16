import { ArrowDown16, ArrowLeft16, ArrowRight16 } from '@carbon/icons-react';
import {
  CloudStorage,
  EnterpriseDesignThinking_02,
  InfrastructureSecurity,
  ItInfrastructureSoftware,
  Meter,
  QuestionAndAnswer,
  SecurityIntelligence,
  ServerOperatingSystems,
  SupportServices,
} from '@carbon/pictograms-react';
import { Button, Column, Grid, Row } from 'carbon-components-react';
import React from 'react';
import FooterBotm from '../Homepage/Footer/FooterBotm';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import banner from './../../img/incedentResponce/banner.png';
import bottom from './../../img/incedentResponce/bottom.png';
import cyber from './../../img/managedsecurity/bottom.png';

const IncedentResponce = () => {
  return (
    <div className='incedentResponce'>
      <MainHeader />
      <Grid
        fullWidth
        className='incedentResponce__banner'
        style={{ backgroundImage: ` url("${banner}")` }}
      >
        <Grid condensed>
          <Row className='incedentResponce__banner__content'>
            <Column lg={7} className='pictoIcon'>
              <SecurityIntelligence />
            </Column>
            <Column lg={15} className='heading'>
              <h1>Incident Response</h1>
            </Column>
            <Column lg={7} className='subheading'>
              <p>
                In the event of a data breach or cyberattack, you need a
                protocol to protect your assets and shore up your defenses.
                Managed security service providers like Uvation can empower your
                company with a full set of tools and processes for responding to
                cyber incidents, so you can minimize risk and place your company
                on the fast-track to recovery. <br />
                <br /> Security incidents are no longer a question of “if,” but
                “when.” A comprehensive incident response program is an
                essential part of doing business in today’s connected world.
              </p>
            </Column>
            <Column lg={16} className='learn__more'>
              <Button renderIcon={ArrowDown16}>Learn more</Button>
            </Column>
            <Column className='bottom__arrows'>
              <p>
                <ArrowLeft16 /> Technology Services
              </p>
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

      <Grid fullWidth className='incedentResponce__benifits'>
        <Grid condensed>
          <Row>
            <Column lg={16}>
              <h2>The Benefits of Incident Response</h2>
            </Column>
          </Row>
          <Row className='incedentResponce__benifits__box'>
            <Column lg={{ span: 7 }}>
              <div className='heading'>
                <div className='number__box'>
                  <span>1</span>
                </div>
                <h4>Data Breach Prevention and Management</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Incident response plans should be deployed alongside other
                cybersecurity functions to act as a fail-safe against the real
                risk of cyberattacks and data breaches. Once a breach is
                detected, the tools, processes, and people that make up your
                incident response program will spring into action. <br />
                <br />
                Your incident response team will investigate every incident to
                determine the extent of the breach. They’ll file reports with
                your stakeholders and take additional steps will be taken to
                patch vulnerabilities. In the event of data loss, your incident
                response team will work to recover and secure lost data.
              </p>
            </Column>
            <Column lg={{ span: 7 }}>
              <div className='heading'>
                <div className='number__box'>
                  <span>2</span>
                </div>
                <h4>Investor and Client Confidence</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Your clients, customers, and investors expect you to treat data
                with the care it deserves. This doesn’t just mean establishing a
                proactive cybersecurity posture. It also means ensuring you have
                a program in place to investigate and recover if the worst comes
                to pass. <br />
                <br /> Including incident response as part of your cybersecurity
                program can help you inspire confidence in all your company’s
                stakeholders. By working with outsourced incident response
                specialists like Uvation, you can deploy a program quickly, at a
                minimal cost.
              </p>
            </Column>
            <Column lg={7}>
              <div className='heading'>
                <div className='number__box'>
                  <span>3</span>
                </div>
                <h4>Lower Investigation Costs</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Your internal IT staff already have enough on their plates.
                Investigating and responding to a cybersecurity incident may not
                be within the scope of their expertise, either.
                <br /> <br /> By working with an external team, you can minimize
                the costs of investigating a cybersecurity incident. You won’t
                need to bring in an investigative service after the fact, then
                wait for them to familiarize themselves with your network,
                either.
              </p>
            </Column>
            <Column lg={7}>
              <div className='heading'>
                <div className='number__box'>
                  <span>4</span>
                </div>
                <h4>A Scalable Security Solution</h4>
              </div>
              <div className='border__line'></div>
              <p>
                In many industries, and some jurisdictions, incident response
                programs are necessary to successfully comply with data
                regulations. Meeting these requirements on your own can
                sometimes be daunting, especially if you’re working to break
                into a new market. <br /> <br />
                By partnering with an incident response team like Uvation, you
                can onboard a compliant incident response program much faster
                than you would if you were to hire experts internally. This can
                get you compliance with relevant regulations faster, so you can
                keep focusing on growing your business.
              </p>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* incedentResponce comprehensive */}

      <Grid fullWidth className='incedentResponce__comprehensive'>
        <Grid condensed>
          <Row>
            <Column lg={{ span: 8 }}>
              <div className='heading'>
                <h3>Comprehensive Incident Response with Uvation</h3>
              </div>
              <Column lg={12}>
                <div className='subheading'>
                  <p>
                    Uvation is made up of skilled security technicians and
                    strategists who stand ready to deploy your incident response
                    program. We can connect you to powerful technologies that
                    monitor your network continually and identify breaches in
                    real-time, you’ll always be prepared when the time comes.
                    <br />
                    <br />
                  </p>
                  <h6>
                    Don’t leave incident response up to chance. Contact Uvation
                    today to start building out your program.
                  </h6>
                </div>
              </Column>
            </Column>
            <Column
              lg={{ span: 7, offset: 1 }}
              style={{ position: 'relative' }}
            >
              <div className='imgbox'>
                <img src={bottom} alt='' />
              </div>
              <div className='bookCons'>
                <p>Book a consultation</p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* Incident Response Explained*/}

      <Grid fullWidth className='incedentResponce__explained'>
        <Grid condensed>
          <Row>
            <Column className='heading'>
              <h2>Incident Response Explained</h2>
            </Column>
          </Row>
          <Row className='section__desc'>
            <Column lg={{ span: 5 }}>
              <p>
                In years past, some companies believed they could stay under the
                radar and avoid potential data breaches simply by virtue of
                being small. Unfortunately, cybersecurity threats have only
                escalated, to the point that every business is a potential
                target of a data breach or cyberattack—even small businesses.
                Cyber attacks now cost small companies $200,000 on average.
              </p>
            </Column>
            <Column lg={{ span: 5 }}>
              <p>
                The image of the hacker trying to guess a security password is
                dated. Malicious actors now use automated tools to scan for
                vulnerabilities in a variety of critical systems, then exploit
                those vulnerabilities to access sensitive information, implant
                viruses and malware, or hold computer systems for ransom.
              </p>
            </Column>
            <Column lg={{ span: 5 }}>
              <p>
                Incident response refers to the people, technologies, and
                processes that respond when a cybersecurity incident occurs. The
                primary purpose of incident response is to detect the threat,
                then isolate and contain it to mitigate the damage it causes to
                the network. Once a threat is contained, incident response teams
                work to remediate the damages it caused, so the company can get
                back to normal operation as soon as possible.
              </p>
            </Column>
          </Row>
          <Row condensed className='incedentResponce__explained__desc__row'>
            <Column lg={4} className='with__icon'>
              <div className='serial'>
                <p>01</p>
              </div>
              <div className='title'>
                <h4>A Final Line of Defense and a Path to Recovery</h4>
              </div>
              <div className='icon'>
                <ItInfrastructureSoftware />
              </div>
            </Column>
            <Column lg={{ span: 11, offset: 1 }}>
              <div className='desc'>
                <p>
                  Incident response is not an end-to-end cybersecurity solution.
                  An ideal scenario is when your company never needs to engage
                  in incident response at all. That’s because incident response
                  only comes into play when an incident occurs after other
                  security measures have failed. <br />
                  <br /> Therefore, incident response must be deployed as a part
                  of a comprehensive security suite that includes standard
                  protection like firewalls, network monitoring, training, and
                  access management. Unfortunately, cybersecurity incidents are
                  so commonplace that it’s unreasonable for businesses to assume
                  they’ll never need an incident response program. This is why
                  investing in this capability is so crucial to ensuring
                  business continuity.
                </p>
              </div>
            </Column>
          </Row>
          <Row condensed className='incedentResponce__explained__desc__row'>
            <Column lg={4} className='with__icon'>
              <div className='serial'>
                <p>02</p>
              </div>
              <div className='title'>
                <h4>Cybersecurity Incident Statistics</h4>
              </div>
              <div className='icon'>
                <ItInfrastructureSoftware />
              </div>
            </Column>
            <Column lg={{ span: 11, offset: 1 }}>
              <div className='desc'>
                <p>
                  The following cybersecurity incident statistics presented by
                  CSO Online demonstrate just how widespread cybersecurity
                  incidents have become and how important it is to have a
                  response program in place:
                </p>
                <Row narrow className='cardsrow'>
                  <Column lg={7}>
                    <div className='card'>
                      <div className='title'>
                        <h4>94%</h4>
                      </div>
                      <div className='desc'>
                        <p>of malware is delivered by email</p>
                      </div>
                    </div>
                  </Column>
                  <Column lg={7}>
                    <div className='card'>
                      <div className='title'>
                        <h4>80%</h4>
                      </div>
                      <div className='desc'>
                        <p>
                          of reported security incidents are phishing attacks
                        </p>
                      </div>
                    </div>
                  </Column>
                  <Column lg={7}>
                    <div className='card'>
                      <div className='title'>
                        <h4>$17,700</h4>
                      </div>
                      <div className='desc'>
                        <p>is lost every minute due to phishing</p>
                      </div>
                    </div>
                  </Column>
                  <Column lg={7}>
                    <div className='card'>
                      <div className='title'>
                        <h4>60%</h4>
                      </div>
                      <div className='desc'>
                        <p>
                          of breaches involved vulnerabilities for which a patch
                          was available but not applied
                        </p>
                      </div>
                    </div>
                  </Column>
                  <Column lg={7}>
                    <div className='card'>
                      <div className='title'>
                        <h4>x3</h4>
                      </div>
                      <div className='desc'>
                        <p>
                          attacks on IoT devices tripled in the first half of
                          2019
                        </p>
                      </div>
                    </div>
                  </Column>
                  <Column lg={7}>
                    <div className='card'>
                      <div className='title'>
                        <h4>256%</h4>
                      </div>
                      <div className='desc'>
                        <p>
                          Fileless attacks grew by 256% over the first half of
                          2019{' '}
                        </p>
                      </div>
                    </div>
                  </Column>
                  <Column lg={7}>
                    <div className='card'>
                      <div className='title'>
                        <h4>$3.92 million</h4>
                      </div>
                      <div className='desc'>
                        <p>
                          Data breaches cost enterprises an average of $3.92
                          million
                        </p>
                      </div>
                    </div>
                  </Column>
                  <Column lg={7}>
                    <div className='card'>
                      <div className='title'>
                        <h4>$2.6 million</h4>
                      </div>
                      <div className='desc'>
                        <p>
                          The average malware attack costs victims up to $2.6
                          million
                        </p>
                      </div>
                    </div>
                  </Column>
                  <Column lg={7}>
                    <div className='card'>
                      <div className='title'>
                        <h4>40%</h4>
                      </div>
                      <div className='desc'>
                        <p>
                          of IT leaders say cybersecurity jobs are the hardest
                          to fill
                        </p>
                      </div>
                    </div>
                  </Column>
                </Row>
                <p>
                  A security incident can occur when one of your employees opens
                  a malicious email, when one of your company computers accesses
                  an unsecured network, when a hacker exploits a vulnerability
                  in one of your operating systems, or even when someone on the
                  inside of your company leaks sensitive data. Incident response
                  is designed to address all these scenarios and more.
                </p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* Uvation’s Incident Response Services */}

      <Grid fullWidth className='incedentResponce__uvationServices'>
        <Grid condensed>
          <Column className='heading'>
            <h2>Uvation’s Incident Response Services</h2>
          </Column>

          <Column lg={7} className='subheading'>
            <p>
              Uvation provides a range of services to proactively protect your
              network, including SOC as a Service and cybersecurity consulting.
              But in the event of a security incident, Uvation can also respond
              quickly and decisively to identify vulnerabilities, protect your
              data, and recover.
              <br />
              <br /> Here’s what you can expect from Uvation’s incident response
              services.
            </p>
          </Column>
        </Grid>
        <Grid>
          <Row className='cardrow'>
            <Column lg={5} className='bx--no-gutter--left'>
              <div className='card'>
                <EnterpriseDesignThinking_02 />
                <div className='card__title'>
                  <h5>The OODA Loop</h5>
                </div>
                <div className='card__desc' style={{ paddingBottom: '2.4REM' }}>
                  <p>
                    The OODA loop refers to a military-derived methodology to
                    incident response. It is not a rigid protocol, but it’s a
                    good outline of how effective incident response teams
                    operate. The OODA Loop includes four steps, which are
                    Observe, Orient, Decide, and Act, each of which are designed
                    to help minimize the impact of security incidents. <br />
                    <br />
                    The Observe step requires visibility into your network, your
                    operating system, and your applications. Observing activity
                    on your network helps you establish a basis for normal
                    operation, so you and your tools can more effectively
                    identify irregular activity. Uvation will stay apprised of
                    the latest threat intelligence.
                    <br /> <br /> During the Orient step, your incident response
                    team will assess the applicability of the latest security
                    protocols and work to understand potential threats in
                    context. They’ll also address operational issues and work to
                    protect your network from risk.
                    <br /> <br /> During the Decide and Act steps, your incident
                    response team will determine the best premeditation strategy
                    and then put that strategy into action. They’ll manage
                    incidents in real-time, monitor the results, and help to
                    heal any damage. Once managed, the team will return to the
                    Observe step.
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={11}>
              <Row>
                <Column lg={8} className='bx--no-gutter--left'>
                  <div className='card'>
                    <QuestionAndAnswer />
                    <div className='card__title'>
                      <h5>Rapid Response Times</h5>
                    </div>
                    <div className='card__desc'>
                      <p>
                        When an incident occurs, your response speed is
                        critical. Your incident response program should be
                        measurable in hours, not days. Uvation’s incident
                        response team will act quickly to contain any security
                        incident and limit the damage.
                        <br />
                        <br /> They’ll start by analyzing your network to detect
                        signs of malicious activity. This is followed by
                        securing your most critical data and moving into
                        remediation, so you can get back on track faster.
                      </p>
                    </div>
                  </div>
                </Column>
                <Column lg={8} className='bx--no-gutter--left'>
                  <div className='card'>
                    <Meter />
                    <div className='card__title'>
                      <h5>24/7 Coverage</h5>
                    </div>
                    <div className='card__desc'>
                      <p>
                        Uvation’s incident response service is just one part of
                        our fully outsourced cybersecurity suite. We’ll provide
                        you with 24/7 network monitoring to reduce the time it
                        takes to respond to an incident, and we’ll continue
                        monitoring your network once your systems have been
                        restored.
                        <br />
                        <br /> You’ll never be left to deal with a security
                        incident on your own.
                      </p>
                    </div>
                  </div>
                </Column>
                <Column lg={16} className='bx--no-gutter--left'>
                  <div
                    className='card'
                    style={{ marginTop: '0', paddingBottom: '0' }}
                  >
                    <SupportServices />
                    <div className='card__title'>
                      <h5>Hands-on Support and Remediation</h5>
                    </div>
                    <div className='card__desc'>
                      <p>
                        Once deployed, Uvation will monitor your security
                        infrastructure to ensure it is up to date with the
                        latest vulnerability patches and security updates. We’ll
                        detect any intrusions to your network and work with you
                        to resolve any incidents if they occur.
                      </p>
                    </div>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section6 */}

      <Grid fullWidth className='incedentResponce__service'>
        <Grid condensed>
          <Row>
            <Column lg={11} className='heading'>
              <h2>Key Incident Response Technologies</h2>
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
          <Row className='incedentResponce__service__cards'>
            <Column lg={5}>
              <div className='card'>
                <div className='card__icon'>
                  <CloudStorage />
                </div>
                <div className='card__title'>
                  <h3>
                    Security Information and Event Management (SIEM) Tools
                  </h3>
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
                  <h3>Endpoint Detection and Response (EDR) Systems</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    Data serves as the foundation for your organization’s
                    operations, but it’s under constant threat from
                    cybercriminals. If you think of your network security
                    infrastructure is a vault, your data is the currency that
                    sits inside it.
                    <br />
                    <br /> Uvation’s SOC will work proactively to identify
                    security vulnerabilities that could put your data at risk,
                    then rectify them quickly. We’ll implement critical security
                    solutions to ensure your data is secure from outside
                    threats, while also instilling robust internal protocols to
                    keep
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__icon'>
                  <InfrastructureSecurity />
                </div>
                <div className='card__title'>
                  <h3>
                    Security Orchestration, Automation, and Response (SOAR)
                    Solutions
                  </h3>
                </div>
                <div className='card__desc'>
                  <p>
                    If your organization operates a data center or another type
                    of computing facility, we will consult with you to deploy a
                    robust set of security protocols to keep your facilities
                    safe from security threats. Your equipment is paramount
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={5}>
              <div className='card'>
                <div className='card__icon'>
                  <CloudStorage />
                </div>
                <div className='card__title'>
                  <h3>Intrusion Prevention Systems (IPS)</h3>
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
          </Row>
        </Grid>
      </Grid>

      {/* section7 */}

      <Grid fullWidth className='incedentResponce__chat'>
        <Grid condensed>
          <Row>
            <Column lg={{ span: 7 }}>
              <div className='heading'>
                <h3>No organization should risk a cyberattack.</h3>
              </div>
              <Column lg={15}>
                <div className='subheading'>
                  <p>
                    Contact Uvation to learn more about our managed services and
                    to see how we can help you shore up your defenses.
                  </p>
                </div>
              </Column>
            </Column>
            <Column
              lg={{ span: 8, offset: 1 }}
              style={{ position: 'relative' }}
            >
              <div className='imgbox'>
                <img src={cyber} alt='' />
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

export default IncedentResponce;
