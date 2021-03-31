import React from 'react';
// import Logo from "./../../img/Brand/Logo.png";

import { ArrowRight16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const BrandsTileCard = () => (
  <div className='bx--col bx--col-md-8  bx--col-sm-4 bx--no-gutter'>
    <div className='brands--tiles'>
      <div className='card bx--col-lg-8 bx--offset-lg-3'>
        <div>
          <img alt='' />
        </div>
        <div className='heading'>
          <h3>Uvation Cloud Services</h3>
        </div>
        <div className='desc'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus quam eu porta molestie. Fusce et vulputate metus, ac
            sagittis risus.
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

const Brands = () => {
  return (
    <div className='brands bx--grid--full-width'>
      <div className='bx--grid'>
        <div className='bx--row'>
          <div className='bx--col-lg-4  bx--col-md-4  bx--col-sm-4 brands--banner'>
            <div className='about--our'>
              <h6>ABOUT OUR</h6>
              <h3>Brands</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                maximus quam eu porta molestie. Fusce et vulputate metus, ac
                sagittis risus.
              </p>
            </div>
          </div>
          <div className='bx--col bx--offset-lg-1 bx--col-md-8  bx--col-sm-15  '>
            <div className='brands--desc'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                maximus quam eu porta molestie. Fusce et vulputate metus, ac
                sagittis risus. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc maximus quam eu porta molestie. Fusce et
                vulputate metus, ac sagittis risus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc maximus quam eu porta
                molestie. Fusce et vulputate metus, ac sagittis risus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bx--row'>
        <BrandsTileCard />
        <div className='bx--col bx--col-md-8  bx--col-sm-4 bx--no-gutter'>
          <div className='brands--tile--row1'></div>
        </div>
      </div>

      <div className='bx--row'>
        <div className='bx--col bx--col-md-8  bx--col-sm-4 bx--no-gutter'>
          <div className='brands--tile--row2'></div>
        </div>

        <BrandsTileCard />
      </div>

      <div className='bx--row'>
        <BrandsTileCard />

        <div className='bx--col bx--col-md-8  bx--col-sm-4 bx--no-gutter'>
          <div className='brands--tile--row3'></div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
