import { ArrowDown16, ArrowLeft16, ArrowRight16 } from '@carbon/icons-react';
import {
  CloudStorage,
  InfrastructureSecurity,
  LockedNetwork_01,
  MasterThreatHunting,
  ProtectCriticalAssets,
  RichTextFormat,
  ServerOperatingSystems,
  StrategyAndRisk,
  ThreatManagement,
  TrustedUser,
} from '@carbon/pictograms-react';
import { Button, Column, Grid, Row } from 'carbon-components-react';
import React from 'react';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import banner from './../../img/managedsecurity/banner.png';
import superior from './../../img/managedsecurity/superior.png';
import bottomimg from './../../img/managedsecurity/bottom.png';
import FooterBotm from '../Homepage/Footer/FooterBotm';

const ManagedSecurity = () => {
  return (
    <div className='managedSecurity'>
      <MainHeader />
      <Grid
        fullWidth
        className='managedSecurity__banner'
        style={{ backgroundImage: ` url("${banner}")` }}
      >
        <Grid condensed>
          <Row className='managedSecurity__banner__content'>
            <Column lg={7} className='pictoIcon'>
              <ThreatManagement />
            </Column>
            <Column lg={15} className='heading'>
              <h1>Managed Security</h1>
            </Column>
            <Column lg={7} className='subheading'>
              <p>
                Managed security is a cost-effective way to keep your company
                safe. Instead of hiring an in-house security team, you can rely
                on Uvation’s expertise to design, deploy, and manage your
                security infrastructure.
                <br />
                <br /> Expand your security operations to protect your company
                from the latest cyber threats through must-have security
                technologies, key expertise, and 24/7 support.
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

      <Grid fullWidth className='managedSecurity__benifits'>
        <Grid condensed>
          <Row>
            <Column lg={16}>
              <h2>The Benefits of Managed Security</h2>
            </Column>
          </Row>
          <Row className='managedSecurity__benifits__box'>
            <Column lg={{ span: 7 }}>
              <div className='heading'>
                <div className='number__box'>
                  <span>1</span>
                </div>
                <h4>The Benefits of Managed Security</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Cybersecurity is a necessity, but it shouldn’t place an undue
                burden on your budget. Working with managed security experts
                helps you mitigate costs and save time. <br /> <br /> You
                shouldn’t have to worry about keeping up with the latest
                security threats. You should only have to worry about growing
                your business.
              </p>
            </Column>
            <Column lg={{ span: 7 }}>
              <div className='heading'>
                <div className='number__box'>
                  <span>2</span>
                </div>
                <h4>Instant Access to Security Tools and Expertise</h4>
              </div>
              <div className='border__line'></div>
              <p>
                It’s already challenging to find top-notch cybersecurity
                personnel, and it can be prohibitively expensive. Choosing the
                right team, the right technology, and the right strategy can
                take months of work when you need high-tier security now. <br />{' '}
                <br /> Working with a managed security team can grant you access
                to comprehensive security solutions and industry-leading
                expertise almost instantly. Upgrade your security posture
                faster, so you can continue to focus on your core business
                objectives.
              </p>
            </Column>
            <Column lg={7}>
              <div className='heading'>
                <div className='number__box'>
                  <span>3</span>
                </div>
                <h4>Automatic Updating and Patching</h4>
              </div>
              <div className='border__line'></div>
              <p>
                Most companies rely on a wide variety of technologies, each of
                which has its security vulnerabilities. New exploits to
                operating systems, applications, and infrastructure are emerging
                all the time, and keeping up with security patches can be a
                difficult process. <br /> <br />
                Managed security experts use automation to update and patch
                vulnerabilities quickly, the moment they are revealed. You won’t
                need to patch your systems manually ever again.
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
                Managed security is a scalable security solution for businesses
                of all sizes. Focus on the growth of your business, then add
                additional security resources as you need them. There’s no need
                to hire new security staff internally or restructure your
                departments.
              </p>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section3 */}
      <Grid fullWidth className='managedSecurity__superior'>
        <Grid condensed>
          <Row>
            <Column lg={{ span: 9 }}>
              <div className='heading'>
                <h3>Get Superior Protection with Uvation Managed Security</h3>
              </div>
              <Column lg={11}>
                <div className='subheading'>
                  <p>
                    Uvation’s team of managed security experts is prepared to
                    analyze your current security posture and recommend an
                    action plan for defending your networks. We’ll connect you
                    with powerful security technologies, empowering you with the
                    same level of security as the largest companies.
                  </p>
                  <h5>
                    Contact Uvation today to start improving your security
                    posture.
                  </h5>
                </div>
              </Column>
            </Column>
            <Column lg={{ span: 7 }} style={{ position: 'relative' }}>
              <div className='imgbox'>
                <img src={superior} alt='' />
              </div>
              <div className='bookCons'>
                <p>Book a consultation</p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section4 */}

      <Grid fullWidth className='managedSecurity__explained'>
        <Grid condensed>
          <Row>
            <Column className='heading'>
              <h2>Managed Security Explained</h2>
            </Column>
          </Row>

          <Row condensed className='managedSecurity__desc__row'>
            <Column lg={4} className='with__icon'>
              <div className='serial'>
                <p>01</p>
              </div>
              <div className='title'>
                <h4>About</h4>
              </div>
              <div className='icon'>
                <RichTextFormat />
              </div>
            </Column>
            <Column lg={{ span: 11, offset: 1 }}>
              <div className='desc'>
                <p>
                  Managed security services were borne from the necessity of all
                  businesses to protect themselves against cyberattacks while
                  contending with a threat landscape that is constantly
                  changing. It is also a necessity due to the increasing costs
                  of preventing cybercrime and the high costs associated with
                  successful attacks. According to McAfee, losses to global
                  cybercrime have exceeded $1 trillion, up 50% from 2018. <br />
                  <br />
                  Currently, there aren’t enough cybersecurity professionals
                  available to fully staff security teams at every company. That
                  gap is also widening. In 2019, there were almost 3 million
                  vacant cybersecurity jobs across the world. Those <br />
                  <br />
                  professionals who are available for work are often hired by
                  larger companies that can offer higher paying salaries and
                  better benefits. This leaves smaller companies to fend for
                  themselves, relying on consumer-oriented security systems and
                  their overstretched IT staff to keep their systems and data
                  safe. <br />
                  <br /> This is especially problematic given that cyberattacks
                  on smaller organizations are much more common than many
                  believe. According to Security Magazine, 67% of companies with
                  fewer than 1,000 employees have experienced a cyberattack and
                  60% of small businesses could go out of business due to
                  damages associated with a cyberattack. <br />
                  <br /> Most organizations don’t have the funds to maintain
                  state-of-the-art security operations in-house, so they look
                  outside for help. Originally, they turned to managed service
                  providers (MSPs), which offered a range of IT services but
                  didn’t necessarily specialize in security. <br />
                  <br /> Now, managed security service providers (MSSPs) fill
                  that role, providing comprehensive security features to
                  business clients that would otherwise not be able to secure
                  their networks.
                </p>
              </div>
            </Column>
          </Row>
          <Row condensed className='managedSecurity__desc__row'>
            <Column lg={4} className='with__icon'>
              <div className='serial'>
                <p>02</p>
              </div>
              <div className='title'>
                <h4>What a Managed Security Services Provider Does</h4>
              </div>
              <div className='icon'>
                <StrategyAndRisk />
              </div>
            </Column>
            <Column lg={{ span: 11, offset: 1 }}>
              <div className='desc'>
                <p>
                  MSSPs are network security service companies that serve other
                  businesses on a contract basis. As outsourced security
                  professionals, you hire an MSSP the same way you might hire a
                  market agency. They aren’t your employees, but they serve your
                  company as per the terms of your contract.
                  <br />
                  <br /> Most MSSPs serve as fractional augmentations to your
                  own IT staff. But they also serve small businesses that don’t
                  have a formal IT department but still need network security.
                  <br />
                  <br /> MSSPs provide their clients with technology, manpower,
                  and expertise that are difficult to find or afford when
                  brought in-house. MSSPs deploy, configure, and maintain
                  security technologies like intrusion protection systems (IPS),
                  anti-virus programs, firewalls, and more. In the event of an
                  incident, an MSSP can respond quickly or help the company
                  develop a plan so they can respond internally.
                  <br />
                  <br /> MSSPs may offer a broad range of services, or they may
                  be hired to work on a specific security issue. For example,
                  MSSPs can provide direct training to company personnel to help
                  them prevent cyberattacks. They may help in designing password
                  protocols, building structures of access to sensitive data,
                  and doing other types of security training.
                  <br />
                  <br /> Finally, an MSSP can provide the company with
                  comprehensive security reporting through 24/7 monitoring of
                  the network. They can audit the company’s security
                  infrastructure regularly and ensure they are compliant with
                  relevant industry regulations.
                </p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section5 */}

      <Grid fullWidth className='managedSecurity__withuvation'>
        <Grid narrow>
          <Column className='heading'>
            <h2>Managed Security with Uvation</h2>
          </Column>

          <Column lg={7} className='subheading'>
            <p>
              You don’t have to hire a team of security professionals internally
              to protect yourself from cybersecurity threats. Our experts can
              help you secure your network for a fraction of the cost. <br />
              <br />
              Uvation provides its managed security customers with a
              straightforward process to help them achieve a better security
              posture. We’ll do an audit of your current security
              infrastructure, deploy fixes and improvements, then monitor your
              network regularly to ensure you are protected from potential
              threats.
            </p>
          </Column>
          <Row className='cardrow'>
            <Column lg={8}>
              <div className='card'>
                <ThreatManagement />
                <div className='card__title'>
                  <h5>Audit Your Current Security Infrastructure</h5>
                </div>
                <div className='card__desc'>
                  <p>
                    A comprehensive audit of your security infrastructure will
                    spot weaknesses and vulnerabilities. We’ll then design a
                    plan of action that will take you to a heightened security
                    posture.
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={8}>
              <div className='card'>
                <TrustedUser />
                <div className='card__title'>
                  <h5>Augment Your Team with Security Experts</h5>
                </div>
                <div className='card__desc'>
                  <p>
                    With Uvation, you get instant access to cybersecurity
                    experts who can protect you against the latest security
                    threats. You’ll be able to leverage the latest security
                    technologies and protocols at a fraction of the cost of
                    doing so internally.
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={8}>
              <div className='card'>
                <MasterThreatHunting />
                <div className='card__title'>
                  <h5>Deploy Your New Cybersecurity Regimen</h5>
                </div>
                <div className='card__desc'>
                  <p>
                    Uvation will deploy your new security program to put you in
                    a safer, more streamlined position. We can even work with
                    your team to ensure they are using the network safely and
                    avoiding common security pitfalls.
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={8}>
              <div className='card'>
                <ProtectCriticalAssets />
                <div className='card__title'>
                  <h5>Get Regular Reporting, Patches, and Monitoring</h5>
                </div>
                <div className='card__desc'>
                  <p>
                    Once deployed, Uvation will monitor your security
                    infrastructure to ensure it is up to date with the latest
                    vulnerability patches and security updates. We’ll detect any
                    intrusions to your network and work with you to resolve any
                    incidents if they occur.
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        </Grid>
      </Grid>

      {/* section6 */}

      <Grid fullWidth className='managedSecurity__service'>
        <Grid condensed>
          <Row>
            <Column lg={11} className='heading'>
              <h2>Key Managed Security Technologies</h2>
            </Column>
            <Column lg={8} className='subheading'>
              <p>
                A successfully managed security operation is predicated on
                leveraging the latest security technologies and being
                knowledgeable about how to deploy them. The following are just a
                few of the core security technologies you can expect to see when
                working with an MSSP.
              </p>
            </Column>
          </Row>
          <Row className='managedSecurity__service__cards'>
            <Column lg={5}>
              <div className='card'>
                <div className='card__icon'>
                  <CloudStorage />
                </div>
                <div className='card__title'>
                  <h3>Firewalls</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    Your firewall monitors and controls network traffic based on
                    predetermined rules. We can help you set up these barriers
                    and protect your company against instructions.
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
                  <h3>Web Content Filtering</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    Web content filtering programs ensure your staff can only
                    access parts of the internet related to their work. They can
                    also help you prevent accidental downloads of malicious
                    software, spyware, and viruses.
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
                  <h3>Antivirus Programs</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    Antivirus programs are designed to prevent and detect
                    malicious software on your network. Most computers come with
                    antivirus built-in, but your company needs corporate-level
                    antivirus software to protect your data.
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
                  <h3>Data Loss Prevention (DLP) Systems</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    This type of software detects potential data breaches and
                    ex-filtration transmissions. It monitors and blocks
                    sensitive data while it's in use, ensuring it doesn’t fall
                    into the wrong hands.
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
                  <h3>Intrusion Prevention Systems (IPS)</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    hese systems monitor your network, searching for potential
                    intrusions. A successful IPS will collect information about
                    incidents and take preventative measures to keep them from
                    causing damage.
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
                  <h3>Identity and Privileged Access Management</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    Identity access management (IAP) and privilege access
                    management (PAM) are protocols that ensure employees only
                    have access to data or systems necessary for doing their
                    job. If your company keeps sensitive data, these types of
                    programs can keep it in the right hands.
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
                  <h3>Threat Intelligence Platforms</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    Threat intelligence platforms analyze threat data from
                    several sources to give your security team a full picture of
                    the current threat landscape.
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
                  <h3>Vulnerability Scanning and System Patching Tools</h3>
                </div>
                <div className='card__desc'>
                  <p>
                    Vulnerability scanning tools automatically and regularly
                    scan your network, looking for gaps in your security. These
                    types of tools can also patch vulnerabilities when they
                    become known, protecting you from potential threats.
                  </p>
                </div>
              </div>
            </Column>
            <Column lg={5} style={{ opacity: '0' }}></Column>
          </Row>
        </Grid>
      </Grid>

      {/* section7 */}
      <Grid fullWidth className='managedSecurity__chat'>
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
                <img src={bottomimg} alt='' />
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

export default ManagedSecurity;
