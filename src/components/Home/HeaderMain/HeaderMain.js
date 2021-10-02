import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
      <main style={{height:'600px'}}className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
                <h1>Your new Smile 
                    <br />
                    starts here
                </h1>
                <p className="text-secondery">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt vitae cumque hic nisi, sit id temporibus aliquid fugiat facilis, sunt suscipit quae quisquam perspiciatis cupiditate nemo. Dolorum itaque sapiente aut?</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
          </div>
          <div className="col-md-6">
              <img src={chair} alt="" className="img-fluid"/>
          </div>
      </main>
    );
};

export default HeaderMain;