import React from "react";
import "./Card.css";

function Card({ title, imageUrl, body, title1, imageUrl1, body1}) {
  return (
    <>
      
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-Content">
        <div  className="card-title">
        <h3 className='card-title_h3' >{title}
       </h3>
       <p className='line'></p>
        </div>
        <div className="card-body">
          <p  className='card-title_p'> {body}</p>
        </div>
        <div className="btn">
        <button>
          <a>view more</a>
        </button>
      </div>
      </div>
    </div>
     <div className="card-container">
     <div className="card-Content">
        <div className="card-title">
        
        <h3 className='card-title_h3 '>{title1}
        <p className='line1'></p></h3>
        
        </div>
        
        <div className="card-body">
          <p className='card-title_p' > {body1}</p>
        </div>
        <div className="btn">
        <button>
          <a>view more</a>
        </button>
      </div>
      </div>
      <div className="image-container">
        <img src={imageUrl1} alt="" />
      </div>
     
    </div>
    </>
  );
}

export default Card;
