import React from "react";
import Slider from "../slider/Slider";
import Card from "../Card";
import Scope from "../slider/Scope";
import Serveyou from "../Serveyou";
import Ourwork from "../ourwork/Ourwork";
export default function Home() {
  return (
    <>
      <Slider />
      <Card
        title="API Integration"
        imageUrl="http://shadesnshadows.com.np/images/api-integration.jpg"
        body="At SnS, we integrate different kinds of API in our clients' website as they require. API help us to make our work easier with less efforts. API help us to simplify the work hence, we recommed our clients to use such features to enhance their work feature and service."
        title1="Travel DOME"
        imageUrl1="http://shadesnshadows.com.np/images/traveldome.jpg"
        body1='Travel DOME is a customizable travel product for travel agenices which will help them to reach customers with their product. Travel dome helps travel agencies to integrate all of their products in a single platform which make their website a place to visit for the customers queries.'
      />
      <Scope 
         title3="API Integration"
        body3="API is commonly referred to as third party services or external platforms. We integrate such kinds of API."
        title4="Payment API Integration"
        body4="Accepting payments online for every sales would boost every business. At SnS, we help your business reach out to such prospects."
        title5="Business Consultation "
        body5="Accepting payments online for every sales would boost every business. At SnS, we help your business reach out to such prospects."
        title6="Proper Online Solution"
        body6="At SnS, we give you all the online service you need. We also help you through the technical transition to eliminate the hassle."
        title7="Branding and Printing"
        body7="Our support and service also goes beyond the web. We provide branding solutions to keep your company image new and fresh."
        title8="Responsive Design"
        body8="Our designs are not just responsive online but they are also responsive offline for different purposes for printing purpose."
      />
      <Serveyou />
      <Ourwork  />
    </>
  );
}
