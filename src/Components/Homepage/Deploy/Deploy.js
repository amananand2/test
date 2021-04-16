import React, { useState,useEffect } from 'react';
import { CaretRight16, WordCloud32 } from '@carbon/icons-react';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import {deployPageDataStart,clearAddCreditCard} from "../../../actions/index";
import { createStructuredSelector } from "reselect";
import {selectDeployData} from '../../../selector';


// import { NavLink } from "react-router-dom";

const HeaderVal = {
  title: 'WHY UVATION UCS',
  heading: 'Deploy in minutes and scale seamlessly',
  about:
    'Over 3000 customers in 24 countries are relying on our products and services.',
};
const CardVal = [
  {
    icon: <WordCloud32 />,
    title: 'Disaster Recovery',
    heading: 'Protect your digital footprint from unforeseen disasters',
  },
  {
    icon: <WordCloud32 />,
    title: 'Disaster Recovery',
    heading: 'Protect your digital footprint from unforeseen disasters',
  },
  {
    icon: <WordCloud32 />,
    title: 'Disaster Recovery',
    heading: 'Protect your digital footprint from unforeseen disasters',
  },
];

const SectionTitle = () => {
  return (
    <div className='bx--col-lg-7 sectionTitle'>
      <div className='subtitle'>
        <h6>{HeaderVal.title}</h6>
      </div>
      <div className='title'>
        <h2>{HeaderVal.heading}</h2>
      </div>
      <div className='about'>
        <p>{HeaderVal.about}</p>
      </div>
    </div>
  );
};

const ProductCards = (props) => {
  return (
    <div className='bx--col bx--col-sm-4 '>
      <div className='product-cards'>
        <div className='icon'>{props.icon}</div>
        <div className='title'>
          <h4>{props.title}</h4>
        </div>
        <div className='about'>
          <p>{props.heading}</p>
        </div>
        <div className='icon-bott'>
          <div>{<CaretRight16 />}</div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = (val, index) => {
  return (
    <ProductCards
      key={index}
      // icon={val.icon}
      title={val.title}
      heading={val.heading}
    />
  );
};

// const Product = () => ProductsList.map(Products);
const Card = () => CardVal.map(ProductCard);


const Deploy = ({deployPageDataStart,deployData}) => {

  const [activeMenu,setActiveMenu] = useState({business:true,develop:false,feature:false})
  const [data,setData] = useState()

  // const landingData = useSelector(state => state.landingPageReducer.loading);
  
  // useEffect(()=>{

  //   setData(landingData);

  // },[landingData])

  const menuChange=(menuName)=>{
    if(menuName === "business"){
      setActiveMenu({business:true,develop:false,feature:false})
    }
    if(menuName === "develop"){
      setActiveMenu({business:false,develop:true,feature:false})
    } 
    if(menuName === "feature"){
      setActiveMenu({business:false,develop:false,feature:true})
    } 
  }


  useEffect(() => {
    deployPageDataStart();
  }, []);

  // console.log(deployData && deployData.tab_data_first && deployData.tab_data_first[0],"deploydata...");
  
  // console.log(deployData,"data...");

 

  //  const Card = () => deployData && deployData.tab_data_first && deployData.tab_data_first(ProductCard);



  return (
    <div className='bx--grid--full-width deploy'>
      <div className='bx--grid'>
        <div className='bx--row'>
          <SectionTitle />
        </div>
        <div className='bx--row '>
          <div className='bx--col bx--no-gutter product-tab'>
            <div className='product-tab'>
              <li onClick={()=>{menuChange("business")
            // deployPageDataStart()
            // clearAddCreditCard()
            }} className={activeMenu.business ? 'actives' : ''}>
                <p>
                  <span>01</span>For Businesses
                </p>
              </li>
              <li onClick={()=>{menuChange("develop")}} className={activeMenu.develop ? 'actives' : ''}>
                <p>
                  <span>02</span>For Developers
                </p>
              </li>
              <li onClick={()=>menuChange("feature")} className={activeMenu.feature ? 'actives' : ''}>
                <p>
                  <span>03</span>Featured products
                </p>
              </li>
            </div>
          </div>

          <div className='bx--col-lg-12 bx--no-gutter'>
          <div className='bx--row bx--no-gutter'>

            {
              activeMenu.business && deployData && deployData.tab_data_first && deployData.tab_data_first.map((value,index)=>{
                return (
                  <div className='bx--col-lg-5 bx--col-sm-4 '>
                       <div className={activeMenu.business ? 'business slide' : ''}>
                    <div className='product-cards'>
                      <div className='icon'></div>
                      <div className='title'>
                        <h4>{value.first_data_heading}</h4>
                      </div>
                      <div className='about'>
                        <p>{value.first_data_description}</p>
                      </div>
                      <div className='icon-bott'>
                        <div>{<CaretRight16 />}</div>
                      </div>
                    </div>
                    </div>
                  </div>
                );
              })
            }
            {/* {activeMenu.business ? (
              <div className={activeMenu.business ? 'business slide' : ''}>
                <div className='bx--row bx--no-gutter'>
                <Card/>
                </div>
                <div className='bx--row bx--no-gutter'>
                <Card/>
                </div>
              </div>
            ) : null} */}

            {
              activeMenu.develop && deployData && deployData.tab_data_second && deployData.tab_data_second.map((value,index)=>{
                return (
                  <div className='bx--col-lg-5 bx--col-sm-4 '>
                  <div className={activeMenu.develop ? 'business slide' : ''}>

                    <div className='product-cards'>
                      <div className='icon'></div>
                      <div className='title'>
                        <h4>{value.second_data_heading}</h4>
                      </div>
                      <div className='about'>
                        <p>{value.second_data_description}</p>
                      </div>
                      <div className='icon-bott'>
                        <div>{<CaretRight16 />}</div>
                      </div>
                    </div>
                  </div>

                  </div>
                );

              })
            }



            {/* {activeMenu.develop ? (
              <div className={activeMenu.develop ? 'business slide' : ''}>
                <div className='bx--row bx--no-gutter'>
                  <Card/>
                </div>
                <div className='bx--row bx--no-gutter'>
                <Card/>

                </div>
              </div>
            ) : null} */}
   {
              activeMenu.feature && deployData && deployData.tab_data_third && deployData.tab_data_third.map((value,index)=>{
                return (
                  <div className='bx--col-lg-5 bx--col-sm-4 '>
                     <div className={activeMenu.feature ? 'business slide' : ''}>
                    <div className='product-cards'>
                      <div className='icon'></div>
                      <div className='title'>
                        <h4>{value.third_data_heading}</h4>
                      </div>
                      <div className='about'>
                        <p>{value.third_data_description}</p>
                      </div>
                      <div className='icon-bott'>
                        <div>{<CaretRight16 />}</div>
                      </div>
                    </div>
                    </div>
                  </div>
                );

              })
            }
            {/* {activeMenu.feature ? (
              <div className={activeMenu.feature ? 'business slide' : ''}>
                <div className='bx--row bx--no-gutter'>
                  <Card />
                </div>
                <div className='bx--row bx--no-gutter'>
                  <Card />
                </div>
              </div>
            ) : null} */}

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
// 	user: selectUser,
// 	userDetails: selectUserDetails,
// 	categories: selectCategories,
// 	categoryJobs: selectCategoryJobs,
// 	categoryPopularServices: selectCategoryPopularServices,
// 	categorySpecialityServices: selectCategorySpecialityServices,
// 	isGuestUser: selectIsGuestUser,
// });

const mapStateToProps = (state)=>({
  
  deployData:state.landingPageReducer.deployData

});

const mapDispatchToProps = (dispatch) => ({
  deployPageDataStart: () => dispatch(deployPageDataStart()),
  // clearAddCreditCard: () => dispatch(clearAddCreditCard())
});


export default connect(mapStateToProps,mapDispatchToProps)(Deploy);

