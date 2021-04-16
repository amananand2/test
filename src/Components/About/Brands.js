import React, { useEffect } from 'react';
// import Logo from "./../../img/Brand/Logo.png";

import { ArrowRight16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import {brandPageDataStart,servicePageDataStart} from "../../actions/index";

const BrandsTileCard = (props) => (

  <div className='bx--col bx--col-md-8  bx--col-sm-4 bx--no-gutter'>
    <div className='brands--tiles'>
      <div className='card bx--col-lg-8 bx--offset-lg-3'>
        <div>
          <img alt='' />
        </div>
        <div className='heading'>
          <h3>{props.title}</h3>
        </div>
        <div className='desc'>
          <p>
           {props.desc}
          </p>
        </div>
        <div className='learn'>
          <Link to='/'>
            Learn more <ArrowRight16 fill='$blue-60' />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Brands = ({brandPageDataStart,servicePageDataStart,brandData,servicesData}) => {
  // const brandData = useSelector(state => state.landingPageReducer.brandData);
  // const servicesData = useSelector(state => state.landingPageReducer.servicesData);

  useEffect(()=>{
    brandPageDataStart()
    servicePageDataStart()
  },[])
  // console.log(servicesData,"servicesData");

  // console.log(companyData && companyData.company_card && companyData.company_card[0].company_card_heading,"companyData");
  return (
    <div className='brands bx--grid--full-width'>
      <div className='bx--grid'>
        <div className='bx--row'>
          <div className='bx--col-lg-4  bx--col-md-4  bx--col-sm-4 brands--banner'>
            <div className='about--our'>
              <h6>{brandData && brandData.brand_top_heading }</h6>
              <h3>{brandData && brandData.brand_heading }</h3>
              <p>
              {brandData && brandData.brand_description }
              </p>
            </div>
          </div>
          <div className='bx--col bx--offset-lg-1 bx--col-md-8  bx--col-sm-15  '>
            <div className='brands--desc'>
              <p>
            {brandData && brandData.brand_long_description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bx--row'>
        <BrandsTileCard title={servicesData && servicesData.cloud_heading } desc={servicesData && servicesData.cloud_description} />
        <div className='bx--col bx--col-md-8  bx--col-sm-4 bx--no-gutter'>
          <div className='brands--tile--row1'></div>
        </div>
      </div>

      <div className='bx--row'>
        <div className='bx--col bx--col-md-8  bx--col-sm-4 bx--no-gutter'>
          <div className='brands--tile--row2'></div>
        </div>

        <BrandsTileCard title={servicesData && servicesData.marketplace_heading } desc={servicesData && servicesData.marketplace_description}    />
      </div>

      <div className='bx--row'>
        <BrandsTileCard title={servicesData && servicesData.org_heading } desc={servicesData && servicesData.org_description}  />

        <div className='bx--col bx--col-md-8  bx--col-sm-4 bx--no-gutter'>
          <div className='brands--tile--row3'></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  brandData: state.landingPageReducer.brandData,
  servicesData: state.landingPageReducer.servicesData
});

const mapDispatchToProps = (dispatch) => ({
  brandPageDataStart: () => dispatch(brandPageDataStart()),
  servicePageDataStart: () => dispatch(servicePageDataStart())

  //servicePageDataStart
});


export default connect(mapStateToProps,mapDispatchToProps)(Brands);

