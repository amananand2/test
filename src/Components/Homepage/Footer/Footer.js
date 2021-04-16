import React,{useEffect} from 'react';
import MainHeader from '../Mainheader/MainHeader';
import { Button } from 'carbon-components-react';
import { ArrowRight16, Chat20, Phone20 } from '@carbon/icons-react';
import FooterBotm from './FooterBotm';
import {connect} from 'react-redux';
import {getInTouchPageDataStart} from "../../../actions/index";

const Footer = ({getInTouchPageDataStart,getInTouchData}) => {
  useEffect(() => {
     getInTouchPageDataStart();
  }, []);

//  console.log(getInTouchData && getInTouchData.get_top_heading ,"getInTouchData");
  return (
    <>
      <MainHeader />
      <div className='bx--grid--full-width footermain'>
        <div className='bx--grid'>
          <div className='bx--row'>
            <div className='bx--col-lg-5 content'>
              <div className='heading'>
                <h2>{getInTouchData && getInTouchData.get_top_heading}</h2>
              </div>
              <div className='sub-heading'>
                <p>{getInTouchData && getInTouchData.get_heading}</p>
              </div>
              <div className='about'>
                <h6>
                {getInTouchData && getInTouchData.get_description}
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

const mapStateToProps = state => ({
  getInTouchData: state.landingPageReducer.getInTouchData
});

const mapDispatchToProps = (dispatch) => ({
  getInTouchPageDataStart: () => dispatch(getInTouchPageDataStart())
});


export default connect(mapStateToProps,mapDispatchToProps)(Footer);
