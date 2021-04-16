import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import {companyPageDataStart} from "../../actions/index";
import { Advocate } from '@carbon/pictograms-react';

const CompanyCard = ({pictoIcon,props}) => {
  console.log(props,"props");
  return(
  <div className='bx--col bx--col-md-8 bx--col-sm-4'>
    <div className='card'>
      <div className='content'>
        <div className='pictoicon'>{pictoIcon}</div>
        <div className='title'>
          {/* <h4>{props.title} Title of the card</h4> */}
        </div>
        <div className='desc'>
          <p>
            {/* {props.desc} */}
            
          </p>
        </div>
      </div>
    </div>
  </div>
  )
  };

const Company = ({companyPageDataStart,companyData}) => {
  // const companyData = useSelector(state => state.landingPageReducer.companyData);

  useEffect(()=>{
    companyPageDataStart()
  },[])

  // console.log(companyData,"companyData");

  // console.log(companyData && companyData.company_card && companyData.company_card[0].company_card_heading,"companyData");


  return (
    <div className='company'>
      <div className='bx--grid company--page'>
        <div className='bx--row'>
          <div className='bx--col-lg-4'>
            <div className='about--our'>
              <h6>{companyData && companyData.company_top_title }</h6>
              <h3>{companyData && companyData.company_title}</h3>
              <p>
              {companyData && companyData.company_description}      
              </p>
            </div>
          </div>
          {/* {
              companyData && companyData.company_card && companyData.company_card.map((value,index)=>{
                return (
                  <div className='bx--col'>
                  <div className='cards'>
                    <div className='bx--row bx--no-gutter--left'>
                      <CompanyCard pictoIcon={<Advocate />} />
                      <CompanyCard pictoIcon={<Advocate />} />
                      <CompanyCard pictoIcon={<Advocate />} />
                    </div>
                    <div className='bx--row bx--no-gutter--left'>
                      <CompanyCard pictoIcon={<Advocate />} />
                      <CompanyCard pictoIcon={<Advocate />} />
                      <CompanyCard pictoIcon={<Advocate />} />
                    </div>
                  </div>
                </div>

                  
                );

              })
            } */}
          <div className='bx--col'>
            <div className='cards'>
              <div className='bx--row bx--no-gutter--left'>
              <div className='bx--col bx--col-md-8 bx--col-sm-4'>
                      <div className='card'>
                        <div className='content'>
                          <div className='pictoicon'><Advocate /></div>
                          <div className='title'>
                            <h4>{companyData && companyData.company_card && companyData.company_card[0].company_card_heading}</h4>
                          </div>
                          <div className='desc'>
                            <p>
                            {companyData && companyData.company_card && companyData.company_card[0].company_card_description}   
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='bx--col bx--col-md-8 bx--col-sm-4'>
                      <div className='card'>
                        <div className='content'>
                          <div className='pictoicon'><Advocate /></div>
                          <div className='title'>
                            <h4>{companyData && companyData.company_card && companyData.company_card[1].company_card_heading}</h4>
                          </div>
                          <div className='desc'>
                            <p>
                            {companyData && companyData.company_card && companyData.company_card[1].company_card_description}   
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='bx--col bx--col-md-8 bx--col-sm-4'>
                      <div className='card'>
                        <div className='content'>
                          <div className='pictoicon'><Advocate /></div>
                          <div className='title'>
                            <h4>{companyData && companyData.company_card && companyData.company_card[2].company_card_heading}</h4>
                          </div>
                          <div className='desc'>
                            <p>
                            {companyData && companyData.company_card && companyData.company_card[2].company_card_description}   
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
            
              </div>
              <div className='bx--row bx--no-gutter--left'>
              <div className='bx--col bx--col-md-8 bx--col-sm-4'>
                      <div className='card'>
                        <div className='content'>
                          <div className='pictoicon'><Advocate /></div>
                          <div className='title'>
                            <h4>{companyData && companyData.company_card && companyData.company_card[3].company_card_heading}</h4>
                          </div>
                          <div className='desc'>
                            <p>
                            {companyData && companyData.company_card && companyData.company_card[3].company_card_description}   
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className='bx--col bx--col-md-8 bx--col-sm-4'>
                      <div className='card'>
                        <div className='content'>
                          <div className='pictoicon'><Advocate /></div>
                          <div className='title'>
                            <h4>{companyData && companyData.company_card && companyData.company_card[4].company_card_heading}</h4>
                          </div>
                          <div className='desc'>
                            <p>
                            {companyData && companyData.company_card && companyData.company_card[4].company_card_description}   
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    

                    <div className='bx--col bx--col-md-8 bx--col-sm-4'>
                      <div className='card'>
                        <div className='content'>
                          <div className='pictoicon'><Advocate /></div>
                          <div className='title'>
                            <h4>{companyData && companyData.company_card && companyData.company_card[5].company_card_heading}</h4>
                          </div>
                          <div className='desc'>
                            <p>
                            {companyData && companyData.company_card && companyData.company_card[5].company_card_description}   
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  companyData: state.landingPageReducer.companyData
});

const mapDispatchToProps = (dispatch) => ({
  companyPageDataStart: () => dispatch(companyPageDataStart())
});


export default connect(mapStateToProps,mapDispatchToProps)(Company);

