import React,{useState} from 'react';
import { Button } from 'carbon-components-react';
import { ArrowLeft16, ArrowRight16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const History = () => {

  const[active,setActive]=useState(1)
  const aboutHistoryData = useSelector(state => state.landingPageReducer.aboutHistoryData);

  
  const YearHistory = ({ year,index }) => (
    <div className='bx--col bx--no-gutter'>
      <div className='circles'>
        <div className='circle' onClick={() => setActive(index)}>
          <div className={active === index ? 'dot-active':'dot'}></div>
          <div className='years'>
            <p>{year}</p>
            {/* <p>{index}</p> */}
          </div>
        </div>
        <div className='line'></div>
      </div>
    </div>
  );

  return (
    <div className='history bx--grid--full-width'>
      <div className='bx--grid'>
        <div className='bx--row'>
          <div className='bx--col-lg-4  bx--col-md-4  bx--col-sm-4 history--banner'>
            <div className='about--our'>
              <h6>{aboutHistoryData && aboutHistoryData.history_top_heading}</h6>
              <h3>{aboutHistoryData && aboutHistoryData.history_heading}</h3>
              <p>
              {aboutHistoryData && aboutHistoryData.history_description}
              </p>
            </div>
          </div>
          <div className='bx--col bx--offset-lg-1 bx--col-md-8  bx--col-sm-15  '>
            <div className='history--desc'>
              <p>
              {aboutHistoryData && aboutHistoryData.history_long_description}
              
              </p>
            </div>
          </div>
        </div>

        <div className='bx--row year--row'>
        {
              aboutHistoryData && aboutHistoryData.history && aboutHistoryData.history.map((value,index)=>{
                return (
          <YearHistory year={value.year} index={index} />
                );

              })
            }
        </div>

        <div className='banner'>
          <div className='bx--row'>
            <div className='bx--col bx--col-md-4  bx--col-sm-4'>
              <div className='about--history'>
                <div className='bx--col-lg-13 bx--col-md-8  bx--col-sm-4 bx--offset-lg-1'>
                  {
              aboutHistoryData && aboutHistoryData.history && aboutHistoryData.history.map((value,index)=>{
                return  index === active ?
                  <div className='about--our'>
                  <h6>{value.top_heading}</h6>
                  <h3>{value.heading}</h3>
                  <p>
                  {value.description}
                  </p>
                  </div>
                : ""
              })
            }
                </div>
              </div>
            </div>
            <div className='bx--col bx--no-gutter'>
              <div className='banner-img'>
                <div className='btn'>
                  
                    <Button onClick={()=>{active !== 0  && setActive(active - 1)}}
                      icononly='true'
                      renderIcon={ArrowLeft16}
                      iconDescription=' '
                    ></Button>
       
                    <Button onClick={()=>{active !== 6  && setActive(active + 1)}}
                      icononly='true'
                      renderIcon={ArrowRight16}
                      className='btn-right'
                      iconDescription=' '
                    ></Button>
                 
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
