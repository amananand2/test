import React from "react";
import { ArrowRight16 } from "@carbon/icons-react";
import { Link } from "react-router-dom";
import Line from "./../../../img/Homepage/ContentDriven/line.png";
import Cancer from "./../../../img/Homepage/ContentDriven/cancer.png";
import Science from "./../../../img/Homepage/ContentDriven/science.png";
import Rob from "./../../../img/Homepage/ContentDriven/rob.png";
import Stock from "./../../../img/Homepage/ContentDriven/stock.png";

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

const Card = ({ caption, about, src }) => (
  <div className="card">
    <div className="bx--col bx--no-gutter img">
      <img src={src} alt="" />
    </div>
    <div className="bx--col content">
      <div className="caption">
        <h6>{caption}</h6>
      </div>
      <div className="about">
        <p>{about}</p>
      </div>
      <div className="arrow">
        <Link to="#">
          <ArrowRight16 />
        </Link>
      </div>
    </div>
  </div>
);

const ContentBotm = () => {
  return (
    <div className="bx--grid-full-width bottom">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-lg-4 banner-bot">
            <h6>NEWSROOM</h6>
            <h4>This is a content driven section</h4>
            <p>Latest news, upcoming events and more</p>
          </div>
          <div className="bx--col card-bot">
            <div className="bx--row bx--no-gutter--left ">
              <div className="bx--col-lg-11 ">
                <Card
                  src={Line}
                  caption={CardVal[0].caption}
                  about={CardVal[0].about}
                />
              </div>
              <div className="bx--col-lg-5 bx--no-gutter">
                <Card
                  src={Cancer}
                  caption={CardVal[1].caption}
                  about={CardVal[1].about}
                />
              </div>
            </div>
            <div className="bx--row  ">
              <div className="bx--col">
                <div className="bx--row bx--no-gutter--left ">
                  <div className="bx--col-lg-8">
                    <Card
                      src={Rob}
                      caption={CardVal[1].caption}
                      about={CardVal[1].about}
                    />
                  </div>
                  <div className="bx--col-lg-8">
                    <Card
                      src={Science}
                      caption={CardVal[1].caption}
                      about={CardVal[1].about}
                    />
                  </div>
                </div>
              </div>
              <div className="bx--col-lg-5 bx--no-gutter ">
                <Card
                  src={Stock}
                  caption={CardVal[1].caption}
                  about={CardVal[1].about}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBotm;
