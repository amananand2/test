import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'carbon-components-react';
import { ArrowDown20 } from '@carbon/icons-react';
import {
  PartnerRelationship,
  Growth,
  Advocate,
} from "@carbon/pictograms-react";

import { Link } from 'react-router-dom';

import Company from './Company';
import Brands from './Brands';
import Footer from './../Homepage/Footer/Footer';
import AboutPeople from './AboutPeople';
import History from './History';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import {connect} from 'react-redux';
import {uvationPageDataStart} from "../../actions/index";
import { Loading } from "carbon-components-react";


const BannerCard = ({ num, heading, picto }) => (
  <>
    <div className='num'>
      <p>{num}</p>
    </div>
    <div className='card--heading'>
      <h4> {heading} </h4>
    </div>
    <div className='card--pict'>{picto}</div>
  </>
);
const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 125,
    behavior: 'smooth',
  });
const scrollToRef1 = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 125,
    behavior: 'smooth',
  });
const scrollToRef2 = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 125,
    behavior: 'smooth',
  });
const scrollToRef3 = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 125,
    behavior: 'smooth',
  });
const scrollToRef4 = () => window.scrollTo(0, 0);

const About = ({uvationData,uvationPageDataStart}) => {
  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);

  const executeScroll = () => scrollToRef(myRef);
  const executeScroll1 = () => scrollToRef1(myRef1);
  const executeScroll2 = () => scrollToRef2(myRef2);
  const executeScroll3 = () => scrollToRef3(myRef3);
  const executeScroll4 = () => scrollToRef4(myRef4);

  const [company, setcompany] = useState(true);
  const [brands, setBrands] = useState();
  const [people, setpeople] = useState();
  const [history, sethistory] = useState();

  function FCompany() {
    setcompany(true);
    setBrands(false);
    setpeople(false);
    sethistory(false);
    executeScroll();
  }

  function FBrands() {
    setcompany(false);
    setBrands(true);
    setpeople(false);
    sethistory(false);
    executeScroll1();
  }

  function FPeople() {
    setcompany(false);
    setBrands(false);
    setpeople(true);
    sethistory(false);
    executeScroll2();
  }
  function FHistory() {
    setcompany(false);
    setBrands(false);
    setpeople(false);
    sethistory(true);
    executeScroll3();
  }

  useEffect(() => {
    executeScroll4();
    uvationPageDataStart();
  }, []);

//  console.log(uvationData && uvationData.card && uvationData.card[0].card_heading  ,"uvationData")
//  console.log(uvationData && uvationData.card ,"uvationData")


  return (
    <>
      <Loading active={uvationData.aboutPageLoader}/>
      <MainHeader />
      <div className='aboutpage'>
        <div className='bx--grid--full-width banner'>
          <div className='bx--col-lg-6 bx--offset-lg-2 '>
            <div className='bx--col-lg-13 header'>
              <div className='heading'>
                <h1>{uvationData && uvationData.inside_heading}</h1>
              </div>
              <div className='detail'>
                <p>
                {uvationData && uvationData.inside_description}
                </p>
              </div>
              <div>
                <Button renderIcon={ArrowDown20}>See more</Button>
              </div>
            </div>
          </div>
        </div>

        <div className='banner-cards'>
          <div className='bx--row bx--no-gutter'>
            <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4'>
              <div className='card-1'>
                <h6>{uvationData && uvationData.value_heading}</h6>
                <h3>{uvationData && uvationData.value_description}</h3>
              </div>
            </div>
            <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4'>
              <div className='card-2'>
                <BannerCard
                  num={uvationData && uvationData.card && uvationData.card[0].card_heading}
                  heading={uvationData && uvationData.card && uvationData.card[0].card_description}
                  picto={<Advocate />}
                />
              </div>
            </div>
            <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4'>
              <div className='card-3'>
                <BannerCard
                  num={uvationData && uvationData.card && uvationData.card[1].card_heading}
                  heading={uvationData && uvationData.card && uvationData.card[1].card_description}
                  picto={<Growth />}
                />
              </div>
            </div>
            <div className='bx--col-lg-4 bx--col-md-4 bx--col--sm-4'>
              <div className='card-4'>
                <BannerCard
                  num={uvationData && uvationData.card && uvationData.card[2].card_heading}
                  heading={uvationData && uvationData.card && uvationData.card[2].card_description}
                  picto={<PartnerRelationship />}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='bx--row bx--no-gutter innovation__sections'>
          <div className='bx--col bx--col-md-2 bx--col-sm-1'>
            <div className='about--section' onClick={FCompany}>
              <Link to='#'>
                <div className={company ? 'section-active' : 'section'}>
                  Company
                </div>
              </Link>
            </div>
          </div>

          <div className='bx--col bx--col-md-2 bx--col-sm-1 '>
            <div className='about--section' onClick={FBrands}>
              <Link to='#'>
                <div className={brands ? 'section-active' : 'section'}>
                  Brands
                </div>
              </Link>
            </div>
          </div>

          <div className='bx--col bx--col-md-2 bx--col-sm-1'>
            <div className='about--section' onClick={FPeople}>
              <Link to='#'>
                <div className={people ? 'section-active' : 'section'}>
                  People
                </div>
              </Link>
            </div>
          </div>

          <div className='bx--col bx--col-md-2 bx--col-sm-1'>
            <div className='about--section' onClick={FHistory}>
              <Link to='#'>
                <div className={history ? 'section-active' : 'section'}>
                  History
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div ref={myRef}>
          <Company />
        </div>

        <div ref={myRef1}>
          <Brands />
        </div>

        <div ref={myRef2}>
          <AboutPeople />
        </div>

        <div ref={myRef3}>
          <History />
        </div>

        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  uvationData: state.landingPageReducer.uvationData
});

const mapDispatchToProps = (dispatch) => ({
  uvationPageDataStart: () => dispatch(uvationPageDataStart())
});


export default connect(mapStateToProps,mapDispatchToProps)(About);
