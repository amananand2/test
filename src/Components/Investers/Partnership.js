import React, { useEffect, useRef, useState } from 'react';
// import Footer from "../Homepage/Footer/Footer";
import Google from './../../img/Investers/gc.png';
import Ms from './../../img/Investers/msoft.png';
import Aws from './../../img/Investers/aws.png';
import Dell from './../../img/Investers/dell.png';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import Footer from '../Homepage/Footer/Footer';
import {connect} from 'react-redux';
import {partnershipPageDataStart,discoverPageDataStart,channelPageDataStart} from "../../actions/index";
import {Loading} from "carbon-components-react"

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

const Partnership = ({partnershipPageDataStart,partnershipData,discoverPageDataStart,discoverData,channelPageDataStart,channelData}) => {
  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    executeScroll();
    partnershipPageDataStart();
    discoverPageDataStart();
    channelPageDataStart();
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

  console.log(channelData,"channelData");

  return (
    <>
    <Loading active={partnershipData.partnershipPageLoader}/>
      <MainHeader />
      <div className='patrnership'>
        <div className='bx--grid--full-width prtbanner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-7 bx--no-gutter--right'>
                <div className='content'>
                  <div className='heading'>
                    <h1>{partnershipData && partnershipData.partnerships_heading}</h1>
                  </div>
                  <p>
                   {partnershipData && partnershipData.partnerships_description}
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
                    <h6>{discoverData && discoverData.discover_top_heading}</h6>
                    <h3>{discoverData && discoverData.discover_heading}</h3>
                  </div>
                </div>
              </div>
              <div className='bx--col bx--offset-lg-1 desc'>
                <p>
                 {discoverData && discoverData.discover_description}
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
                    <PartnersCard src={Google} name={channelData && channelData.channel_content && channelData.channel_content[0].channel_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.channel_content && channelData.channel_content[1].channel_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.channel_content && channelData.channel_content[2].channel_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.channel_content && channelData.channel_content[3].channel_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.channel_content && channelData.channel_content[4].channel_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.channel_content && channelData.channel_content[5].channel_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.channel_content && channelData.channel_content[6].channel_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.channel_content && channelData.channel_content[7].channel_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.channel_content && channelData.channel_content[8].channel_content_heading} />
                  </div>
                ) : (
                  ''
                )}
                {security ? (
                  <div className='bx--row'>
                    <PartnersCard src={Aws} name={channelData && channelData.security_content && channelData.security_content[0].security_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.security_content && channelData.security_content[1].security_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.security_content && channelData.security_content[2].security_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.security_content && channelData.security_content[3].security_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.security_content && channelData.security_content[4].security_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.security_content && channelData.security_content[5].security_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.security_content && channelData.security_content[6].security_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.security_content && channelData.security_content[7].security_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.security_content && channelData.security_content[8].security_content_heading} />
                  </div>
                ) : (
                  ''
                )}
                {supply ? (
                  <div className='bx--row'>
                    <PartnersCard src={Google} name={channelData && channelData.global_content && channelData.global_content[0].global_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.global_content && channelData.global_content[1].global_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.global_content && channelData.global_content[2].global_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.global_content && channelData.global_content[3].global_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.global_content && channelData.global_content[4].global_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.global_content && channelData.global_content[5].global_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.global_content && channelData.global_content[6].global_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.global_content && channelData.global_content[7].global_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.global_content && channelData.global_content[8].global_content_heading} />
                  </div>
                ) : (
                  ''
                )}
                {alliances ? (
                  <div className='bx--row'>
                    <PartnersCard src={Aws} name={channelData && channelData.data_center_content && channelData.data_center_content[0].data_center_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.data_center_content && channelData.data_center_content[1].data_center_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.data_center_content && channelData.data_center_content[2].data_center_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.data_center_content && channelData.data_center_content[3].data_center_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.data_center_content && channelData.data_center_content[4].data_center_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.data_center_content && channelData.data_center_content[5].data_center_content_heading} />
                    <PartnersCard src={Google} name={channelData && channelData.data_center_content && channelData.data_center_content[6].data_center_content_heading} />
                    <PartnersCard src={Aws} name={channelData && channelData.data_center_content && channelData.data_center_content[7].data_center_content_heading} />
                    <PartnersCard src={Ms} name={channelData && channelData.data_center_content && channelData.data_center_content[8].data_center_content_heading} />
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



const mapStateToProps = state => ({

  partnershipData: state.partnershipPageReducer.partnershipData,
  discoverData: state.partnershipPageReducer.discoverData,
  channelData: state.partnershipPageReducer.channelData,

});

const mapDispatchToProps = (dispatch) => ({

  partnershipPageDataStart: () => dispatch(partnershipPageDataStart()),
  discoverPageDataStart: () => dispatch(discoverPageDataStart()),
  channelPageDataStart: () => dispatch(channelPageDataStart()), 
});


export default connect(mapStateToProps,mapDispatchToProps)(Partnership);

