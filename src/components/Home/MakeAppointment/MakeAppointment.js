import React from "react";
import "./MakeAppointment.css";
import doctors from "../../../images/doctors.png";

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container">
        <div className="row">
            <div className="col-md-5 d-none d-md-block">
               <img src={doctors} alt=""/>
            </div>
            <div className="col-md-7 py-5">
                <h5 className="text-primary text-uppercase">make appointment</h5>
                <h2 className="my-4 text-white">Make an appointment 
                    <br />
                    Today
                </h2>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore culpa debitis harum in quam quisquam numquam ut ex rem, officia fugit. Recusandae temporibus officia minus eaque reiciendis velit exercitationem?</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
