import React from 'react';
import MainHeader from '../Mainheader/MainHeader';
import { Button } from 'carbon-components-react';
import { ArrowRight16, Chat20, Phone20 } from '@carbon/icons-react';
import FooterBotm from './FooterBotm';
const Footer = () => {
  return (
    <>
      <MainHeader />
      <div className='bx--grid--full-width footermain'>
        <div className='bx--grid'>
          <div className='bx--row'>
            <div className='bx--col-lg-5 content'>
              <div className='heading'>
                <h2>Get in touch with us</h2>
              </div>
              <div className='sub-heading'>
                <p>Threats never sleep. Neither do we.</p>
              </div>
              <div className='about'>
                <h6>
                  Get in touch for a consultation call or answer to any
                  questions you might have.
                </h6>
              </div>
              <div className='call-btn'>
                <Button className='call' renderIcon={Phone20}>
                  Call us
                </Button>
                <Button className='call' kind='secondary' renderIcon={Chat20}>
                  Live chat
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='btns'>
          <div className='learnmore '>
            <Button href='/' kind='primary' className='lrg-btn'>
              Send us a message
              <div className='learn'>{<ArrowRight16 />}</div>
            </Button>
            <Button className='lrg-btn-right .lrg-btn' kind='secondary'>
              Request a meeting
              <div className='learn'>{<ArrowRight16 />}</div>
            </Button>
          </div>
        </div>
      </div>
      <FooterBotm />
    </>
  );
};

export default Footer;
