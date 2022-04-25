import React from "react";
import "./Scope.css";
import { FaShoppingCart,FaExpandArrowsAlt,FaRegBuilding,FaDelicious,FaPrint,FaCubes,FaMobileAlt,FaLaptopCode} from "react-icons/fa";
import { IconContext } from "react-icons";
function Scope({title3,body3,title4,body4,title5,body5,title6,body6,title7,body7,title8,body8}) {
  return (
    <div class="container">

      <div class="scopeOfWork darkcolor">
        <span class="scopeHeading">
        Scope Of Work 
        </span><span class="divider-left">
        <p className='line3'></p>
        </span>
      </div>
      <div class="scopeOfWork-container1">
          <div className="apicontainer">  
          <logo className="sfw-logo">
          <IconContext.Provider value={{ className: "api-icon",size: 45,}}>
          <FaExpandArrowsAlt />
          </IconContext.Provider>
          </logo>

        <h1 className="sfw-title">
          {title3}
        </h1>
        <p class="sfw-body">
          {body3}
        </p>
          </div>
          <div className="payment">
        <div class="scopeOfWork-logo">
          <logo className="sfw-logo">
          <IconContext.Provider value={{ className: "payment-icon",size: 45,}}>
          <FaShoppingCart />
          </IconContext.Provider>
          </logo>
        </div> 
        <h1 className="sfw-title">
          {title4}
        </h1>
        <div class="sfw-body">
          {body4}
        </div>
          </div>
          <div className="business">

        <div class="scopeOfWork-logo">
        <logo className="sfw-logo">
          <IconContext.Provider value={{ className: "business-icon",size: 45,}}>
          <FaRegBuilding />
          </IconContext.Provider>
          </logo>
        </div> 
        <h1 className="sfw-title">
          {title5}
        </h1>
        <div class="sfw-body">
          {body5}
          </div>
        </div>
      </div>
      <div class="scopeOfWork-container2">
      <div className="solution">
        <div class="scopeOfWork-logo">
        <logo className="sfw-logo">
          <IconContext.Provider value={{ className: "solution-icon",size: 45,}}>
          <FaDelicious />
          </IconContext.Provider>
          </logo>
        </div> 
        <h1 className="sfw-title">
          {title6}
        </h1>
        <div class="sfw-body">
          {body6}
        </div>
      </div>
      <div className="branding">

        <div class="scopeOfWork-logo">
        <logo className="sfw-logo">
          <IconContext.Provider value={{ className: "branding-icon",size: 45}}>
          <FaPrint /> 
          <FaCubes />
          </IconContext.Provider>
          </logo>
        </div> 
        <h1 className="sfw-title">
          {title7}
        </h1>
        <div class="sfw-body">
          {body7}
        </div>
      </div>
      <div className="responsive">

        <div class="scopeOfWork-logo">
          <logo className="sfw-logo">
          <IconContext.Provider value={{ className: "responsive-icon",size: 45}}>
          <FaMobileAlt /> 
          <FaLaptopCode />
          </IconContext.Provider>
          </logo>
        </div> 
        <h1 className="sfw-title">
          {title8}
        </h1>
        <div class="sfw-body">
          {body8}
        </div>
      </div>
      </div>
      </div>
  );
}

export default Scope;
