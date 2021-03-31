import {
  ArrowRight16,
  Code24,
  Development24,
  IbmSecurity24,
  Terminal24,
} from "@carbon/icons-react";
import React from "react";
import { useSelector } from 'react-redux';


// const Values = [
//   {
//     icon: <IbmSecurity24 />,
//     heading: "Cybersecurity",
//     descp:
//       "Your cyber stronghold for defense, innovation, security - all suited for your business's operations and continuity",
//   },
//   {
//     icon: <Terminal24 />,
//     heading: "Technology Services",
//     descp:
//       "Our specialized combination of technology, frameworks, and hardware services ready to help you streamline your IT",
//   },
//   {
//     icon: <Code24 />,
//     heading: "DevOps",
//     descp:
//       "DevOps platform designed to increase agility, shorten release times, improve reliability and boost competition",
//   },
//   {
//     icon: <Development24 />,
//     heading: "Infrastructure",
//     descp:
//       "Cloud-ready infrastructure solutions will optimize your workload, security, and performance",
//   },
// ];

export const BannerCard = () => {
  const landingData = useSelector(state => state.landingPageReducer.landingData);

return (
  <>
  <div className="bx--col-lg-4 ">
  <div className="bannercard">
    <div className="icon">{<IbmSecurity24 />}</div>
    <div className="heading">
      <h4>{landingData && landingData.box_one_heading}</h4>
    </div>
    <div className="descp">
      <p>{landingData && landingData.box_one_description}</p>
    </div>
    <div className="arrow">
      <ArrowRight16 />
    </div>
  </div>  
</div>


<div className="bx--col-lg-4 ">
  <div className="bannercard">
    <div className="icon">{<Terminal24 />}</div>
    <div className="heading">
      <h4>{landingData && landingData.box_two_heading}</h4>
    </div>
    <div className="descp">
      <p>{landingData && landingData.box_two_description}</p>
    </div>
    <div className="arrow">
      <ArrowRight16 />
    </div>
  </div>  
</div>

<div className="bx--col-lg-4 ">
  <div className="bannercard">
    <div className="icon">{<Code24 />}</div>
    <div className="heading">
      <h4>{landingData && landingData.box_three_heading}</h4>
    </div>
    <div className="descp">
      <p>{landingData && landingData.box_three_description}</p>
    </div>
    <div className="arrow">
      <ArrowRight16 />
    </div>
  </div>  
</div>


<div className="bx--col-lg-4 ">
  <div className="bannercard">
    <div className="icon">{<Development24 />}</div>
    <div className="heading">
      <h4>{landingData && landingData.box_four_heading}</h4>
    </div>
    <div className="descp">
      <p>{landingData && landingData.box_four_description}</p>
    </div>
    <div className="arrow">
      <ArrowRight16 />
    </div>
  </div>  
</div>


</>
)
};

// const BannerCards = (props) => {
//   return (
//     <div className="bx--col-lg-4 ">
//       <div className="bannercard">
//         <div className="icon">{props.icon}</div>
//         <div className="heading">
//           <h4>{props.heading}</h4>
//         </div>
//         <div className="descp">
//           <p>{props.descp}</p>
//         </div>
//         <div className="arrow">
//           <ArrowRight16 />
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Card = ({landingData}) => {
//   console.log(landingData,"landingData2");
//   return (
//     <BannerCards
//       key={index}
//       icon={val.icon}
//       heading={val.heading}
//       descp={val.descp}
//     />
//   );
// };


export default BannerCard;


