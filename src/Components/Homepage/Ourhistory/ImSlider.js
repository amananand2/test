import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import {historyPageDataStart} from "../../../actions/index";

function TopSection(props) {
  return (
    <div className='banner'>
      <h6>{props.Heading}</h6>
      <h3>{props.SubHeading}</h3>
      <p>{props.Desc}</p>
    </div>
  );
}

const Contents = () => {
  return (
    <div className='content1'>
      <TopSection />
      <div className='bx--col-lg-6'>
        <div className='breakthrough'>
          <h2>Our first breakthrough</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at commodo metus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse commodo id lorem eu efficitur. Nulla id porta
            eros. Nam non auctor ligula. Proin consequat vehicula libero, eget
            efficitur metus tempor non.
          </p>
        </div>
      </div>
    </div>
  );
};

const Contents1 = () => {
  return (
    <div className='content2'>
      <TopSection />
      <div className='bx--col-lg-6'>
        <div className='breakthrough'>
          <h2>The Traction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at commodo metus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse commodo id lorem eu efficitur. Nulla id porta
            eros. Nam non auctor ligula. Proin consequat vehicula libero, eget
            efficitur metus tempor non.
          </p>
        </div>
      </div>
    </div>
  );
};
const Contents2 = () => {
  return (
    <div className='content3'>
      <TopSection />
      <div className='bx--col-lg-6'>
        <div className='breakthrough'>
          <h2>The Expansion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at commodo metus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse commodo id lorem eu efficitur. Nulla id porta
            eros. Nam non auctor ligula. Proin consequat vehicula libero, eget
            efficitur metus tempor non.
          </p>
        </div>
      </div>
    </div>
  );
};

// const Contents4 = ({ bg }) => {
//   return (
//     <div
//       className='content1'
//       style={{
//         backgroundImage: `linear-gradient(90deg, #010101, #010101e1, #00000000),url(${bg})
//         `,
//       }}
//     >
//       <TopSection />
//       <div className='bx--col-lg-6'>
//         <div className='breakthrough'>
//           <h2>Our first breakthrough</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
//             at commodo metus. Lorem ipsum dolor sit amet, consectetur adipiscing
//             elit. Suspendisse commodo id lorem eu efficitur. Nulla id porta
//             eros. Nam non auctor ligula. Proin consequat vehicula libero, eget
//             efficitur metus tempor non.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

const tabItems = [
  {
    id: '1',
    title: '1999',
    content: <Contents />,
    URL: '../../../img/Homepage/Slider/bghistory.png',
  },
  {
    id: '2',
    title: '2000',
    content: <Contents1 />,
  },
  {
    id: '3',
    title: '2005',
    content: <Contents2 />,
  },
  // {
  //   id: '4',
  //   title: '2010',
  //   content: (
  //     <Contents4
  //       bg={
  //         'http://max-themes.net/demos/grandtour/upload/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg'
  //       }
  //     />
  //   ),
  // },
  {
    id: '4',
    title: '2010',
    content: <Contents1 />,
  },
  {
    id: '5',
    title: '2014',
    content: <Contents2 />,
  },
  {
    id: '6',
    title: '2019',
    content: <Contents1 />,
  },
  {
    id: '7',
    title: '2020',
    content: <Contents2 />,
  },
];

const TabItemComponent = ({ id, title, onItemClicked, isActive = false }) => {
  return (
    <div className='tabsList' onClick={onItemClicked}>
      <div className={isActive ? 'tabitem' : 'tabitem--inactive'}></div>
      <p
        className={isActive ? 'tabitem__title' : 'tabitem__title__inactive'}
        key={id}
      >
        {title}
      </p>
    </div>
  );
};

const ImSlider = ({historyPageDataStart,historyData}) => {
  const [active, setActive] = useState('1999');
  useEffect(() => {
    // historyPageDataStart();
  }, []);
    
    console.log(historyData && historyData.mission_content && historyData.mission_content,"historyData...");

  //   if(historyData){ 
  //    for(const property in historyData) {
  //     console.log(`${property}: ${historyData[property]}`);
  //   }
  // }

    // console.log(data,"data");

//     console.log(active,"active");
//     console.log(historyData && historyData.growth,"growth.....");
// const data=historyData && historyData.growth && historyData.growth.map(({key,year,breakthrough_heading})  => ({
//                         year,breakthrough_heading
// }))

// var result = arr.map(person => ({ value: person.id, text: person.name }));
// console.log(data,"data");

  return (
    <>
    <div>
    <div className='bx--grid--full-width home__slider'>
      <div className='bx--row bx--no-gutter' style={{ margin: '0' }}>
        <div className='bx--col-lg-1'>
          <div className='tabs'>
            {historyData && historyData.growth && historyData.growth.map(( value ) => (
              <TabItemComponent
                key={value.year}
                title={value.year}
                onItemClicked={() => setActive(value.year)}
                isActive={active === value.year}
              />
            ))}
          </div>
        </div>
        <div className='bx--col-lg-15'>
          <div className='content'>
          <div className={active === "1999" || active === "2010" || active === "2020" ? "content1" :
           active === "2000" || active === "2014"  ? "content2" : "content3"}>
              <TopSection Heading={historyData && historyData.history_top_heading} SubHeading={historyData && historyData.history_heading} Desc={historyData && historyData.history_description} />

            {historyData && historyData.growth && historyData.growth.map((value) => {
              return value.year === active ? 
              <div className='bx--col-lg-6'>
                <div className='breakthrough'>
                  <h2>{value.breakthrough_heading}</h2>
                  <p>
                   {value.breakthrough_description}
                  </p>
                </div>
              </div>
             : '';
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


  <div className='bx--grid--full-width mission-row'>
        <div className='bx--row bx--no-gutter'>
        {historyData && historyData.mission_content && historyData.mission_content.map(value=>{
                return(
                     <>
                         <div className='bx--col bx--col-sm-4 mission-border'>
                              <div className='mission'>
                                <h6>{value.s_r}</h6>
                                <h2>{value.mission_content_heading}</h2>
                                <p>
                                  {value.mission_content_description}
                                </p>
                              </div>
                           </div>
                     </>
                )
              }) }
      
        </div>
      </div>


    </>
    
    
  );
};

const mapStateToProps = state => ({
  historyData: state.landingPageReducer.historyData
});

const mapDispatchToProps = (dispatch) => ({
  historyPageDataStart: () => dispatch(historyPageDataStart())
});


export default connect(mapStateToProps,mapDispatchToProps)(ImSlider);


