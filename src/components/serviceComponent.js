import React from "react";

const ServiceComponent = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className={props.serviceCUstomClass}>
          <div className="countr_text">
            <img src={props.serviceImg} alt="" />
          </div>
          <div className="servicename">
            <h5>{props.ServiceTitle}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
