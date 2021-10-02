import React from "react";
import "./Testimonials.css";
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import Alisha from "../../../images/Alisha.png";
import Testimonial from "../Testimonial/Testimonial";

const testimonialData = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    name: "Wilson Harry",
    from: "California",
    img: wilson,
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    name: "ema johson",
    from: "California",
    img: ema,
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    name: "Alisha Harry",
    from: "California",
    img: Alisha,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
            <h5 className="text-primary text-uppercase">testimonial</h5>
            <h1>What our patients <br /> say</h1>
        </div>
        <div className="card-deck mt-5">
          {
            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
