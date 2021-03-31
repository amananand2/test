import React, { useState } from 'react';

function TopSection() {
  return (
    <div className='banner'>
      <h6>OUR HISTORY</h6>
      <h3>Inside Uvation</h3>
      <p>We are a multinational company, with over 2 decades of experience.</p>
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

const ImSlider = () => {
  const [active, setActive] = useState('1');
  return (
    <div className='bx--grid--full-width home__slider'>
      <div className='bx--row bx--no-gutter' style={{ margin: '0' }}>
        <div className='bx--col-lg-1'>
          <div className='tabs'>
            {tabItems.map(({ id, title }) => (
              <TabItemComponent
                key={id}
                title={title}
                onItemClicked={() => setActive(id)}
                isActive={active === id}
              />
            ))}
          </div>
        </div>
        <div className='bx--col-lg-15'>
          <div className='content'>
            {tabItems.map(({ id, content }) => {
              return active === id ? content : '';
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImSlider;
