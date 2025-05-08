import React from "react";
import "./wedding.css";
import rd from "../../assets/wed.png";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
const Wedding = () => {
  return (
    <div className="hehe">
      <div className="wedding_img">
        <img src={rd} alt="" className="wed_img" />
      </div>

      <h2 className="wed_title">
        We can’t wait to celebrate with you in Orlando, Florida November 7-9,
        2025!
      </h2>

      <div className="weddo">
        <h2 className="weddo_title">Wedding Day Itinerary</h2>

        <div className="wc">
          <div className="mb">
            <img src={one} alt="" className="fg" />
            <p className="weddo_address">Friday| NOV 7 </p>
            <h2 className="weddo_titme">Welcome Celebration</h2>
          </div>

          <div className="mb">
            <img src={two} alt="" className="fg" />
            <p className="weddo_address">Saturday| NOV 8 </p>
            <h2 className="weddo_titme">The DOPE WEDDING </h2>
          </div>

          <div className="mb">
            <img src={three} alt="" className="fg" />
            <p className="weddo_address">Sunday| NOV 9 </p>
            <h2 className="weddo_titme">Dope Wedding Farewell Brunch </h2>
          </div>
        </div>
      </div>

      <div className="impo">
        <h2 className="impo_title">Important accommondation details</h2>
        <p className="wd_para">
          We share our Wedding Weekend with the wildly popular EDC Festival both
          of us in Downtown Orlando. As a result Downtown Hotel costs are
          elevated. We’ve taken the time to identify and share hotels including
          approximate distance from venue and starting price to help you make an
          informed decision. Considering the venues central location there are
          many areas of town that will be convenient for you. We highly
          recommend booking immediately to avoid price increases.
        </p>

        <div className="line"></div>

        <div className="hotel_grid">
          <div className="hotel_sub">
            <h2 className="hotel_name">Downtown Orlando</h2>
            <h2 className="hotel_sub_name">Grand Bohemian Hotel</h2>
            <h3 className="hotel_sub_feature">AC Marriott Downtown $679</h3>
          </div>
          <div className="hotel_sub">
            <h2 className="hotel_name">Winter Park</h2>
            <h2 className="hotel_sub_name">The Alford Inn $540/night</h2>
            <h3 className="hotel_sub_feature">Springhill Suites(NEW)</h3>
          </div>
          <div className="hotel_sub">
            <h2 className="hotel_name">International Drive/Theme Park Area</h2>
            <h2 className="hotel_sub_name">Rosen Shingle Creek</h2>
            <h3 className="hotel_sub_feature">Hyatt Grand Cypress</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
