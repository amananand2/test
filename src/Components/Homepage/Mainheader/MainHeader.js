import React, { useEffect, useRef, useState } from 'react';

import {
  Button,
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderPanel,
  Search,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Tab,
  Tabs,
} from 'carbon-components-react';
import { Link, NavLink } from 'react-router-dom';

import {
  AppSwitcher20,
  ArrowRight16,
  ChevronDown16,
  Close20,
  Code24,
  Development24,
  Email16,
  Headset20,
  Help24,
  IbmSecurity24,
  IotConnect24,
  Login24,
  LogoFacebook24,
  LogoLinkedin24,
  LogoTwitter24,
  OverflowMenuHorizontal24,
  Phone16,
  Settings16,
  Store24,
  Terminal24,
  User20,
  User24,
} from '@carbon/icons-react';

import Logo from './../../../img/Homepage/logo.png';
import { InfoCard } from '../../Contact/ContactUs';

const scrollToRef = () =>
  window.scroll({
    top: -56,
    behavior: 'smooth',
  });

const HeaderCard = ({ icon, heading, subheading, desc, to, address }) => (
  <div class='bx--col card--col '>
    <Link to={to}>
      <div>
        <div className='icon'>{icon}</div>
        <div className='heading'>
          <h3>{heading}</h3>
        </div>
        <div className='subheading'>
          <h6>{subheading}</h6>
          <p>{desc}</p>
        </div>
        <div className='items-list'>
          <ul>
            <li>
              <p>Application service</p>
              <p>cloud service</p>
              <p>Business service</p>
              <p>Application service</p>
            </li>
          </ul>
        </div>
        <div className='learn-more'>
          <Link to={address}>
            Learn more
            <div className='arrow'>
              <ArrowRight16 fill='#ffffff' />
            </div>
          </Link>
        </div>
      </div>
    </Link>
  </div>
);

const MainHeader = () => {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [toogle, setToogle] = useState(false);
  const [userToogle, setUserToogle] = useState(false);
  const [headSetToogle, setHeadsetToogle] = useState(false);

  const Showme = () => {
    setShow(!show);
    setShows(false);
    setHeadsetToogle(false);
    setUserToogle(false);
    setToogle(false);
  };
  const Showmes = () => {
    setShow(false);
    setShows(!shows);
    setHeadsetToogle(false);
    setUserToogle(false);
    setToogle(false);
  };
  const toogler = () => {
    setShow(false);
    setShows(false);
    setToogle(!toogle);
    setUserToogle(false);
    setHeadsetToogle(false);
  };
  const userToogler = () => {
    setShow(false);
    setShows(false);
    setUserToogle(!userToogle);
    setToogle(false);
    setHeadsetToogle(false);
  };
  const headsetToogler = () => {
    setShow(false);
    setShows(false);
    setHeadsetToogle(!headSetToogle);
    setUserToogle(false);
    setToogle(false);
  };

  // useEffect(() => {
  //   if (toogle || show || shows || headSetToogle || userToogle) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   } else {
  //     // document.removeEventListener('mousedown', handleClickOutside);
  //   }
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [toogle, show, shows, headSetToogle, userToogle]);

  const handleClickOutside = (e) => {
    // if (
    //   (node.current && node.current.contains(e.target)) ||
    //   (node1.current && node1.current.contains(e.target)) ||
    //   (node2.current && node2.current.contains(e.target)) ||
    //   (node3.current && node3.current.contains(e.target)) ||
    //   (node4.current && node4.current.contains(e.target))
    // )
    // {
    //   // inside click
    //   return;
    // }
    // outside click
console.log("clicked");
    // setToogle(false);
    setShow(false);
    setShows(false);
    setHeadsetToogle(false);
    setUserToogle(false);
  };
  const node = useRef();
  const node1 = useRef();
  const node2 = useRef();
  const node3 = useRef();
  const node4 = useRef();

  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
  }, []);

  // console.log(toogle,"toogle");

  return (
    <div className='main-header' ref={myRef}>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label=''>
              <HeaderMenuButton
                aria-label=''
                isActive={isSideNavExpanded}
                onClick={onClickSideNavExpand}
              ></HeaderMenuButton>
              <div className='header-menu-bar'>
                <div className='menu-items'>
                  <div
                    className={show ? 'item active' : 'item'}
                    onClick={Showme}
                  >
                    <Link to='#'>
                      <span>
                        <p>Solution</p>
                      </span>
                      <ChevronDown16 />
                    </Link>
                  </div>
                  {show ? (
                    <div
                      className='bx--grid--full-width cards'
                      onClick={setShow}
                    >
                      <div className='bx--row bx--row--condensed' ref={node2}>
                        <HeaderCard
                          to={'/about'}
                          icon={<IbmSecurity24 />}
                          heading='Cybersecurity'
                          subheading='Highly automated and secure'
                          desc='Uvation UCS infrastructure combines the elasticity and utility of public cloud with the granular control, security, and predictability of on-premise infrastructure'
                          address={'/innovation'}
                        />
                        <HeaderCard
                          icon={<Terminal24 />}
                          heading='Technology Services'
                          subheading='Highly automated and secure'
                          desc="Your cyber stronghold for defense, innovation, security  all suited for your business's operations and continuity Your cyber stronghold for defense, innovation, security all suited for your business's operations and continuity"
                        />
                        <HeaderCard
                          icon={<Code24 />}
                          heading='DevOps'
                          subheading='Highly automated and secure'
                          desc="Your cyber stronghold for defense, innovation, security  all suited for your business's operations and continuity Your cyber stronghold for defense, innovation, security all suited for your business's operations and continuity"
                        />
                        <HeaderCard
                          icon={<Development24 />}
                          heading='Infrastructure'
                          subheading='Highly automated and secure'
                          desc="Your cyber stronghold for defense, innovation, security  all suited for your business's operations and continuity Your cyber stronghold for defense, innovation, security all suited for your business's operations and continuity"
                        />
                      </div>
                    </div>
                  ) : null}
                  <div
                    className={shows ? 'item active' : 'item'}
                    onClick={Showmes}
                  >
                    <div>
                      <Link to='#'>
                        <span>
                          <p>Focus Areas</p>
                        </span>
                        <ChevronDown16 />
                      </Link>
                    </div>
                  </div>
                  {shows ? (
                    <div
                      className='bx--grid--full-width  cards'
                      onClick={setShows}
                      // onMouseLeave={() => setShows(false)}
                    >
                      <div className='bx--row bx--row--condensed' ref={node3}>
                        <HeaderCard
                          icon={<Code24 />}
                          heading='Technology Services'
                          subheading='Highly automated and secure'
                          desc="Your cyber stronghold for defense, innovation, security  all suited for your business's operations and continuity Your cyber stronghold for defense, innovation, security all suited for your business's operations and continuity"
                        />
                        <HeaderCard
                          icon={<Code24 />}
                          heading='Technology Services'
                          subheading='Highly automated and secure'
                          desc="Your cyber stronghold for defense, innovation, security  all suited for your business's operations and continuity Your cyber stronghold for defense, innovation, security all suited for your business's operations and continuity"
                        />
                        <HeaderCard
                          icon={<Code24 />}
                          heading='Technology Services'
                          subheading='Highly automated and secure'
                          desc="Your cyber stronghold for defense, innovation, security  all suited for your business's operations and continuity Your cyber stronghold for defense, innovation, security all suited for your business's operations and continuity"
                        />
                        <HeaderCard
                          icon={<Code24 />}
                          heading='Technology Services'
                          subheading='Highly automated and secure'
                          desc="Your cyber stronghold for defense, innovation, security  all suited for your business's operations and continuity Your cyber stronghold for defense, innovation, security all suited for your business's operations and continuity"
                        />
                        <HeaderCard
                          icon={<Code24 />}
                          heading='Technology Services'
                          subheading='Highly automated and secure'
                          desc="Your cyber stronghold for defense, innovation, security  all suited for your business's operations and continuity Your cyber stronghold for defense, innovation, security all suited for your business's operations and continuity"
                        />
                      </div>
                    </div>
                  ) : null}

                  <NavLink
                    to='/industries'
                    className='item'
                    activeClassName='active'
                  >
                    <span>
                      <p>Industries</p>
                    </span>
                  </NavLink>

                  <NavLink
                    to='/innovation'
                    className='item'
                    activeClassName='active'
                  >
                    <span>
                      <p>Innovation</p>
                    </span>
                  </NavLink>

                  <NavLink
                    to='/contact'
                    className='item'
                    activeClassName='active'
                  >
                    <span>
                      <p>Support</p>
                    </span>
                  </NavLink>

                  <NavLink to='covid' className='item' activeClassName='active'>
                    <span>
                      <p>Covid-19</p>
                    </span>
                  </NavLink>
                </div>
              </div>

              <div className='main-logo'>
                <Link to='/'>
                  <span style={{ marginLeft: '-56px' }}>uvati</span>
                  <img src={Logo} alt='' />
                  <span style={{ color: 'white', float: 'left' }}>n</span>
                </Link>
              </div>

              <HeaderGlobalBar>
                <div className='header__left'>
                  <Search
                    labelText='Search '
                    placeHolderText='Search for service or product'
                  />

                  <HeaderGlobalAction
                    aria-label='Search'
                    onClick={headsetToogler}
                    isActive={headSetToogle}
                  >
                    <Headset20 />
                  </HeaderGlobalAction>
                  <div className='headset-icon'>
                    <HeaderPanel
                      expanded={headSetToogle}
                      aria-label='headset'
                      ref={node4}
                    >
                      <div>
                        <div className='reach'>
                          <p>How to reach us</p>
                        </div>
                        <Tabs>
                          <Tab id='tab-1' label={<Store24 />}>
                            <div className='bx--grid--full-width contact-us'>
                              <div className='bx--col info__col'>
                                <div className='heading'>
                                  <h6>Sales & Client Services</h6>
                                </div>
                                <div className='info--cards'>
                                  <h6>General Inquiries</h6>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America)'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='info@uvation.com'
                                  />
                                </div>
                                <div className='info--cards'>
                                  <h6>Sales Assistance</h6>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America)'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='sales@uvation.com'
                                  />
                                </div>
                                <div className='info--cards'>
                                  <h6>Billing & Accounts</h6>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America))'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='billing@uvation.com'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='accounts@uvation.com'
                                  />
                                </div>
                                <div className='info--cards'>
                                  <h6>
                                    Online Store, Shopping & Shipping Assistance
                                  </h6>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America)'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='store@uvation.com'
                                  />
                                </div>
                              </div>
                            </div>
                          </Tab>
                          <Tab id='tab-2' label={<IotConnect24 />}>
                            <div className='bx--grid--full-width contact-us'>
                              <div className='bx--col info__col'>
                                <div className='heading'>
                                  <h6>Technical Support</h6>
                                </div>
                                <div className='info--cards'>
                                  <h6>Contracts & Services support:</h6>
                                  <h5>
                                    Electronic service requests can be submitted
                                    for hardware or software under warranty or
                                    with a support contract.
                                  </h5>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America)'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='support@uvation.com'
                                  />
                                  <InfoCard
                                    icon={<Settings16 />}
                                    source={
                                      <Link to=''>Open a Service Request</Link>
                                    }
                                  />
                                </div>

                                <div className='info--cards'>
                                  <h6>SOC Incident Request:</h6>
                                  <h5>
                                    Electronic service requests can be submitted
                                    for hardware or software under warranty or
                                    with a support contract.
                                  </h5>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America)'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='soc@uvation.com'
                                  />
                                  <InfoCard
                                    icon={<Settings16 />}
                                    source={
                                      <Link to=''>
                                        Submit a SOCIncident Request
                                      </Link>
                                    }
                                  />
                                </div>

                                <div className='info--cards'>
                                  <h6>Contracts & Services support:</h6>
                                  <h5>
                                    Electronic service requests can be submitted
                                    for hardware or software under warranty or
                                    with a support contract.
                                  </h5>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America)'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='support@xonode.com'
                                  />
                                  <InfoCard
                                    icon={<Settings16 />}
                                    source={
                                      <Link to=''>
                                        To open a Service Request login to the
                                        cloud portal
                                      </Link>
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </Tab>
                          <Tab id='tab-3' label={<Help24 />}>
                            <div className='bx--grid--full-width contact-us'>
                              <div className='bx--col info__col'>
                                <div className='heading'>
                                  <h6>Help Centers</h6>
                                </div>

                                <div className='help-center'>
                                  <p>
                                    Customer Service, Accounts & Billing,
                                    Ecommerce and General Support Requests,
                                    please use our Central Help Center:
                                  </p>
                                  <div className='help-btn'>
                                    <Button
                                      kind='secondary'
                                      size='small'
                                      renderIcon={ArrowRight16}
                                    >
                                      Help Center
                                    </Button>
                                  </div>
                                </div>

                                <div className='help-center'>
                                  <p>
                                    Customer Service, Accounts & Billing,
                                    Ecommerce and General Support Requests,
                                    please use our Central Help Center:
                                  </p>
                                  <div className='help-btn'>
                                    <Button
                                      kind='secondary'
                                      size='small'
                                      renderIcon={ArrowRight16}
                                    >
                                      Cloud portal
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tab>
                          <Tab id='tab-3' label={<OverflowMenuHorizontal24 />}>
                            <div className='bx--grid--full-width contact-us'>
                              <div className='bx--col info__col'>
                                <div className='heading'>
                                  <h6>Other contact information</h6>
                                </div>
                                <div className='info--cards'>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America)'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='support@uvation.com'
                                  />
                                  <InfoCard
                                    icon={<Settings16 />}
                                    source={
                                      <Link to=''>Open a Service Request</Link>
                                    }
                                  />
                                </div>

                                <div className='info--cards'>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America)'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='soc@uvation.com'
                                  />
                                  <InfoCard
                                    icon={<Settings16 />}
                                    source={
                                      <Link to=''>
                                        Submit a SOCIncident Request
                                      </Link>
                                    }
                                  />
                                </div>

                                <div className='info--cards'>
                                  <h6>Contracts & Services support:</h6>
                                  <h5>
                                    Electronic service requests can be submitted
                                    for hardware or software under warranty or
                                    with a support contract.
                                  </h5>
                                  <InfoCard
                                    icon={<Phone16 />}
                                    source='+1 855-721-1155 (North America)'
                                  />
                                  <InfoCard
                                    icon={<Email16 />}
                                    source='support@xonode.com'
                                  />
                                  <InfoCard
                                    icon={<Settings16 />}
                                    source={
                                      <Link to=''>
                                        To open a Service Request login to the
                                        cloud portal
                                      </Link>
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </Tab>
                        </Tabs>
                      </div>
                    </HeaderPanel>
                  </div>

                  <HeaderGlobalAction
                    aria-label='Search'
                    onClick={userToogler}
                    isActive={userToogle}
                  >
                    <User20 />
                  </HeaderGlobalAction>
                  <div className='user-icon'>
                    <HeaderPanel
                      expanded={userToogle}
                      aria-label='user'
                      ref={node}
                    >
                      <div className='login'>
                        <div>
                          <Link to='/login'>
                            <Login24 />
                            <p>Login</p>
                          </Link>
                        </div>

                        <div>
                          <p>OR</p>
                        </div>
                        <div>
                          <Link to='signup'>
                            <User24 />
                            <p>Signup</p>
                          </Link>
                        </div>
                      </div>
                    </HeaderPanel>
                  </div>

                  <HeaderGlobalAction
                    aria-label='App Switcher'
                    onClick={toogler}
                    isActive={toogle}
                  >
                    {toogle ? <Close20  /> : <AppSwitcher20 />}
                  </HeaderGlobalAction>
                  <div className='sidenav--link'>
                    <HeaderPanel expanded={toogle} aria-label='s' ref={node1}>
                      <NavLink to='/people' className='side-links'>
                        People of Uvations <ArrowRight16 />
                      </NavLink>
                      <NavLink to='/contact' className='side-links'>
                        How to Reach Us <ArrowRight16 />
                      </NavLink>
                      <NavLink to='/careers' className='side-links'>
                        career <ArrowRight16 />
                      </NavLink>
                      <NavLink to='/partnership' className='side-links'>
                        Partnerships & Alliances <ArrowRight16 />
                      </NavLink>

                      <NavLink to='/investersrelation' className='side-links'>
                        Investers Relation <ArrowRight16 />
                      </NavLink>
                      <NavLink to='/about' className='side-links'>
                        About <ArrowRight16 />
                      </NavLink>
                      <NavLink to='/investersla' className='side-links'>
                        SLA's and Terms of use <ArrowRight16 />
                      </NavLink>
                      <div className='side-links'>
                        We are Socials
                        <div className='social-links'>
                          <Link
                            to=''
                            onClick={() => {
                              window.open('https://www.facebook.com', '_blank');
                            }}
                          >
                            <LogoFacebook24 />
                          </Link>
                          <Link
                            to=''
                            onClick={() => {
                              window.open('https:/www.linkdin.com', '_blank');
                            }}
                          >
                            <LogoLinkedin24 />
                          </Link>
                          <Link
                            to=''
                            onClick={() => {
                              window.open('https:/www.twitter.com', '_blank');
                            }}
                          >
                            <LogoTwitter24 />
                          </Link>
                        </div>
                      </div>
                    </HeaderPanel>
                  </div>
                </div>
              </HeaderGlobalBar>
              <SideNav
                aria-label='Side navigation'
                expanded={isSideNavExpanded}
                defaultExpanded={false}
                isFixedNav={true}
              >
                <SideNavItems>
                  <SideNavMenu title='Solution'>
                    <SideNavMenuItem href=''>Link1</SideNavMenuItem>
                    <SideNavMenuItem href=''>Link2</SideNavMenuItem>
                    <SideNavMenuItem href=''>Link3</SideNavMenuItem>
                    <SideNavMenuItem href=''>Link4</SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu title='Focus-Aria'>
                    <SideNavMenuItem href=''>Link1</SideNavMenuItem>
                    <SideNavMenuItem href=''>Link2</SideNavMenuItem>
                    <SideNavMenuItem href=''>Link3</SideNavMenuItem>
                    <SideNavMenuItem href=''>Link4</SideNavMenuItem>
                    <SideNavMenuItem href=''>Link5</SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavLink href=''>Industries</SideNavLink>
                  <SideNavLink href=''>Innovation</SideNavLink>
                  <SideNavLink href=''>Support</SideNavLink>
                  <SideNavLink href=''>Covid-19</SideNavLink>
                </SideNavItems>
              </SideNav>
            </Header>
          </>
        )}
      />
    </div>
  );
};

export default MainHeader;
