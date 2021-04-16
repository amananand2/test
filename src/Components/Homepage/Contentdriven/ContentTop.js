import React,{useEffect} from 'react';
import { ArrowRight16 } from '@carbon/icons-react';
import { Link } from 'carbon-components-react';
import ContentBotm from './ContentBotm';
import {connect} from 'react-redux';
import {captionPageDataStart} from "../../../actions/index";

const BannerVal = {
  title: 'CAPTION TITLE',
  heading: `This is a content driven section`,
  about: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
  quam eu porta molestie. Fusce et vulputate metus, ac sagittis risus.
  Nam maximus ex nec purus accumsan, eu congue lorem pellentesque. Etiam
  sodales mi id cursus facilisis . Etiam imperdiet nisi est, quis mollis
  lacus bibendum non.`,
};
const SectionVal = {
  title: 'Supportive sub-section title',
  about: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
  urna congue est. Lorem ipsum dolor sit amet, consectetur adipiscing
  elit. Fusce quis urna congue est.ty`,
};

const LeftSection = (props) => {
  return (
    <div className='bx--col-lg-15'>
      <h6>{props.title}</h6>

      <h2>{props.heading}</h2>

      <div className='about'>
        <p>{props.about}</p>
      </div>
      <div className='button'>
        <Link href='/'>
          Learn more
          <div className='arrow'>
            <ArrowRight16 fill='#ffffff' />
          </div>
        </Link>
      </div>
    </div>
  );
};

const SubSection = () => {
  return (
    <div className='bx--col sub--section bx--col-sm-4'>
      <div className='bx--col-lg-14'>
        <h5>{SectionVal.title}</h5>
        <p>{SectionVal.about}</p>
      </div>
      <div className='arrow'>
        <ArrowRight16 />
      </div>
    </div>
  );
};

const ContentTop = ({captionPageDataStart,captionData}) => {

  useEffect(() => {
    captionPageDataStart();
  }, []);

  // console.log(captionData && captionData.caption_top_heading ,"captionData");
  return (
    <div className='bx--grid--full-width contentTop'>
      <div className='bx--grid'>
        <div className='bx--row bx--row--condensed'>
          <div className='bx--col-lg-6 banner '>
            <LeftSection 
            title={captionData && captionData.caption_top_heading}
            heading={captionData && captionData.caption_heading}
            about={captionData && captionData.caption_description}
            />
          </div>
          {captionData && captionData.supportive && captionData.supportive.map((value,index)=>{
            return(
              
                  <div className='bx--col sub--section bx--col-sm-4'>
                <div className='bx--col-lg-14 tile'>
                  <h5>{value.supportive_heading}</h5>
                  <p>{value.supportive_description}</p>
                </div>
                <div className='arrow'>
                  <ArrowRight16 />
                </div>
              </div>
            )
          }) }
          {/* <SubSection /> */}
        </div>
      </div>
      <ContentBotm />
    </div>
  );
};

const mapStateToProps = state => ({
  captionData: state.landingPageReducer.captionData
});

const mapDispatchToProps = (dispatch) => ({
  captionPageDataStart: () => dispatch(captionPageDataStart())
});


export default connect(mapStateToProps,mapDispatchToProps)(ContentTop);
