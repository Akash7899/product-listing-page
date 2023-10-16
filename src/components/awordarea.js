import React from "react";
import Icon1 from "../assets/images/Icon1.svg";
import Icon2 from "../assets/images/Icon2.svg";
import Icon3 from "../assets/images/Icon3.svg";
import Icon4 from "../assets/images/Icon4.svg";
import TopRight from "../assets/images/circleHalf.svg";
import BottomLeft from "../assets/images/circleHalf.svg";
import ServiceComponent from "./serviceComponent";

const ServiceArea = () => {
  return (
    <>
      <section className="services pt-4 pb-4">
        <span className="top-right">
            <img src={TopRight} alt="" />
        </span>
        <span className="bottom-left">
            <img src={BottomLeft} alt="" />
        </span>

        <div className="container">
          <div className="row pt-75 pb-50">
            <ServiceComponent
              serviceImg={Icon1}
              ServiceTitle="7 Days Return"
              serviceCUstomClass="serviceMain mb-4"
            ></ServiceComponent>
            <ServiceComponent
              serviceImg={Icon4}
              ServiceTitle="Quality Products"
              serviceCUstomClass="serviceMain mb-4"
            ></ServiceComponent>
            <ServiceComponent
              serviceImg={Icon3}
              ServiceTitle="Safe Payment"
              serviceCUstomClass="serviceMain mb-4"
            ></ServiceComponent>
            <ServiceComponent
              serviceImg={Icon2}
              ServiceTitle="24x7 Helpline"
              serviceCUstomClass="serviceMain mb-4 last"
            ></ServiceComponent>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
