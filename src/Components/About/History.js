import React from 'react';
import { Button } from 'carbon-components-react';
import { ArrowLeft16, ArrowRight16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const YearHistory = ({ year }) => (
  <div className='bx--col bx--no-gutter'>
    <div className='circles'>
      <div className='circle' onClick={() => alert('hello')}>
        <div className='dot'></div>
        <div className='years'>
          <p>{year}</p>
        </div>
      </div>
      <div className='line'></div>
    </div>
  </div>
);

const History = () => {
  return (
    <div className='history bx--grid--full-width'>
      <div className='bx--grid'>
        <div className='bx--row'>
          <div className='bx--col-lg-4  bx--col-md-4  bx--col-sm-4 history--banner'>
            <div className='about--our'>
              <h6>ABOUT OUR</h6>
              <h3>History</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                maximus quam eu porta molestie. Fusce et vulputate metus, ac
                sagittis risus.
              </p>
            </div>
          </div>
          <div className='bx--col bx--offset-lg-1 bx--col-md-8  bx--col-sm-15  '>
            <div className='history--desc'>
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

        <div className='bx--row year--row'>
          <YearHistory year='1999' />
          <YearHistory year='2000' />
          <YearHistory year='2005' />
          <YearHistory year='2010' />
          <YearHistory year='2014' />
          <YearHistory year='2018' />
          <YearHistory year='2020' />
        </div>

        <div className='banner'>
          <div className='bx--row'>
            <div className='bx--col bx--col-md-4  bx--col-sm-4'>
              <div className='about--history'>
                <div className='bx--col-lg-13 bx--col-md-8  bx--col-sm-4 bx--offset-lg-1'>
                  <div className='about--our'>
                    <h6>ABOUT OUR</h6>
                    <h3>Lorem ipsum dolor est</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc maximus quam eu porta molestie. Fusce et vulputate
                      metus, ac sagittis risus. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nunc maximus quam eu porta
                      molestie. Fusce et vulputate metus, ac sagittis risus.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc maximus quam eu porta molestie. Fusce et vulputate
                      metus, ac sagittis risus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc maximus quam eu porta molestie. Fusce et vulputate
                      metus, ac sagittis risus. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nunc maximus quam eu porta
                      molestie. Fusce et vulputate metus, ac sagittis risus.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc maximus quam eu porta molestie. Fusce et vulputate
                      metus, ac sagittis risus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx--col bx--no-gutter'>
              <div className='banner-img'>
                <div className='btn'>
                  <Link to='/'>
                    <Button
                      icononly='true'
                      renderIcon={ArrowLeft16}
                      iconDescription=' '
                    ></Button>
                  </Link>
                  <Link to='/'>
                    <Button
                      icononly='true'
                      renderIcon={ArrowRight16}
                      className='btn-right'
                      iconDescription=' '
                    ></Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
