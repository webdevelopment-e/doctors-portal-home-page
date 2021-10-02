import React from "react";
import featured from "../../../images/featured.png";

const FeaturedService = () => {
  return (
    <section className="features-service pb-0 p-md-5 my-5">
      <div className="container mb-5">
      <div className="row mb-5">
        <div className="col-md-5 mb-4 m-md-0">
            <img src={featured} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-7 align-self-center">
            <h1>Exceptional Dental Care</h1>
            <p className="text-secondary my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi exercitationem alias doloribus labore eaque quod, unde sed maxime! Deleniti, voluptas numquam a tenetur quis repellat quia ex rem nulla magnam!</p>
            <button className="btn btn-primary">LEARN MORE</button>
        </div>
      </div>
      </div>  

    </section>
  );
};

export default FeaturedService;
