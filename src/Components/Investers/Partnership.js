import React, { useEffect, useRef, useState } from 'react';
// import Footer from "../Homepage/Footer/Footer";
import Google from './../../img/Investers/gc.png';
import Ms from './../../img/Investers/msoft.png';
import Aws from './../../img/Investers/aws.png';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import Footer from '../Homepage/Footer/Footer';

const PartnersCard = ({ src, name }) => (
  <div className='bx--col-lg-5 bx--col-sm-4 bx--no-gutter '>
    <div className='card'>
      <div className='image'>
        <img src={src} alt='' />
      </div>
      <div className='names'>
        <p>{name}</p>
      </div>
    </div>
  </div>
);

const scrollToRef = () => window.scrollTo(0, 0);

const Partnership = () => {
  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
  }, []);

  const [channel, setChannel] = useState(true);
  const [security, setSecurity] = useState();
  const [supply, setSupply] = useState();
  const [alliances, setAlliances] = useState();

  const Channel = () => {
    setChannel(true);
    setSecurity(false);
    setSupply(false);
    setAlliances(false);
  };

  const Security = () => {
    setChannel(false);
    setSecurity(true);
    setSupply(false);
    setAlliances(false);
  };

  const Supply = () => {
    setChannel(false);
    setSecurity(false);
    setSupply(true);
    setAlliances(false);
  };
  const Alliances = () => {
    setChannel(false);
    setSecurity(false);
    setSupply(false);
    setAlliances(true);
  };

  return (
    <>
      <MainHeader />
      <div className='patrnership'>
        <div className='bx--grid--full-width prtbanner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-7 bx--no-gutter--right'>
                <div className='content'>
                  <div className='heading'>
                    <h1>Partnerships & Alliances</h1>
                  </div>
                  <p>
                    We work with our partners to boost their revenue growth,
                    expand markets and geographic reach, facilitate sales
                    process, and enhance product and service offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bx--grid--full-width discover'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-3 '>
                <div className='content'>
                  <div className='heading'>
                    <h6>CAREERS</h6>
                    <h3>Discover our key partners</h3>
                  </div>
                </div>
              </div>
              <div className='bx--col bx--offset-lg-1 desc'>
                <p>
                  "When we say, “we’ve done it all” we don’t mean alone.
                  Uvation, its members and its consultants have had associations
                  with more than 150 remarkable companies. These companies
                  consist of clients, associates, partners and mentors for our
                  team, working together to achieve their unique vision. Uvation
                  and alliance partners jointly deliver business solutions that
                  address our clients' business and technology problems. We
                  address specific client needs as well as develop tools and
                  methods to accelerate the successful deployment of solutions
                  while reducing risk.
                </p>
              </div>
            </div>

            <div className='bx--row card-row'>
              <div className='bx--col-lg-4 bx--no-gutter partners'>
                <ul>
                  <li
                    onClick={Channel}
                    className={
                      channel ? 'partner--list active' : 'partner--list'
                    }
                  >
                    <p>Channel Partners</p>
                  </li>
                  <li
                    onClick={Security}
                    className={
                      security ? 'partner--list active' : 'partner--list'
                    }
                  >
                    <p>Security Partners/Vendorss</p>
                  </li>
                  <li
                    onClick={Supply}
                    className={
                      supply ? 'partner--list active' : 'partner--list'
                    }
                  >
                    <p>Global Distributors / Supply Chain</p>
                  </li>
                  <li
                    onClick={Alliances}
                    className={
                      alliances ? 'partner--list active' : 'partner--list'
                    }
                  >
                    <p>Data Center Partners / Alliances</p>
                  </li>
                </ul>
              </div>
              <div className='bx--col bx--no-gutter'>
                {channel ? (
                  <div className='bx--row'>
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Ms} name='Microsoft' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Ms} name='Microsoft' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Ms} name='Microsoft' />
                  </div>
                ) : (
                  ''
                )}
                {security ? (
                  <div className='bx--row'>
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Ms} name='Microsoft' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Ms} name='Microsoft' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Ms} name='Microsoft' />
                  </div>
                ) : (
                  ''
                )}
                {supply ? (
                  <div className='bx--row'>
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Ms} name='Microsoft' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Ms} name='Microsoft' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Ms} name='Microsoft' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                  </div>
                ) : (
                  ''
                )}
                {alliances ? (
                  <div className='bx--row'>
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Ms} name='Microsoft' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Ms} name='Microsoft' />
                    <PartnersCard src={Google} name='Google Cloud' />
                    <PartnersCard src={Aws} name='Amazon AWS' />
                    <PartnersCard src={Ms} name='Microsoft' />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Partnership;
