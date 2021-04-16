import React, { useEffect } from "react";
// import { ArrowRight16 } from "@carbon/icons-react";
import * as All from "@carbon/icons-react";

import { Link } from "react-router-dom";
import Line from "./../../../img/Homepage/ContentDriven/line.png";
import Cancer from "./../../../img/Homepage/ContentDriven/cancer.png";
import Science from "./../../../img/Homepage/ContentDriven/science.png";
import Rob from "./../../../img/Homepage/ContentDriven/rob.png";
import Stock from "./../../../img/Homepage/ContentDriven/stock.png";
import { connect } from "react-redux";
import { newsRoomPageDataStart } from "../../../actions/index";
import { Column, Grid, Row } from "carbon-components-react";

const CardVal = [
  {
    caption: "CAPTION",
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
  quam eu porta molestie. Fusce et vulputate metus, ac sagittis risus
  Nam maximus ex nec purus accumsan,eu congue lorem pellentesque.`,
  },
  {
    caption: "CAPTION",
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus quam eu porta molestie.`,
  },
];

// const Icon = (props) => {
//   const { iconName } = props;
//   const icon = React.createElement(All[iconName]);
//   return <>{icon}</>;
// };

const Card = ({ lg = 5, caption, about, src, link = "#" }) => (
  

  <Column lg={parseInt(lg)} sm={4}>
    <div className="card">
      <div className="img">
        <img src={src} alt="" />
      </div>
      <div className="content">
        <div className="caption">
          <h6>{caption}</h6>
        </div>
        <div className="about">
          <p>{about}</p>
        </div>
        <div className="arrow">
          <Link to={link}>
            <All.ArrowRight16 />
          </Link>
        </div>
      </div>
    </div>
  </Column>
);

const ContentBotm = ({newsRoomPageDataStart,newsRoomData}) => {
  useEffect(() => {
    newsRoomPageDataStart();
  }, [])

  console.log(newsRoomData.caption_sub,"newsRoomData");
  return (
    <Grid fullWidth className="newsroom">
      <Grid>
        <Row condensed>
          <Column lg={4} className="banner-bot">
            <Column lg={12}>
              <h6>{newsRoomData && newsRoomData.newseoom_top_heading}</h6>
              <h4>{newsRoomData && newsRoomData.newseoom_heading}</h4>
              <p>{newsRoomData && newsRoomData.newseoom_description}</p>
            </Column>
          </Column>
          <Column lg={{ span: 12 }}>
            <Row condensed className="card-bot ">
         
              {newsRoomData && newsRoomData.caption_sub && newsRoomData.caption_sub.map(value =>{

                return(
                  <Card
                  lg={value.coloumn}
                  src={Line}
                  caption={value.caption_sub_heading}
                  about={value.caption_sub_description}
                  link={value.link_address}
                />
                )

              })}
             

              {/* <Card
                src={Cancer}
                caption={CardVal[1].caption}
                about={CardVal[1].about}
              />

              <Card
                src={Rob}
                caption={CardVal[1].caption}
                about={CardVal[1].about}
              />

              <Card
                src={Science}
                caption={CardVal[1].caption}
                about={CardVal[1].about}
              />
              <Card
                src={Stock}
                caption={CardVal[1].caption}
                about={CardVal[1].about}
              /> */}
            </Row>
          </Column>
        </Row>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  newsRoomData: state.landingPageReducer.newsRoomData
});

const mapDispatchToProps = (dispatch) => ({
  newsRoomPageDataStart: () => dispatch(newsRoomPageDataStart())
});


export default connect(mapStateToProps,mapDispatchToProps)(ContentBotm);

