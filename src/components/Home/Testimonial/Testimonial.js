import React from 'react';

const Testimonial = ({testimonial}) => {
    return (
        <div className="row">
            <div className="col-md-4">
                <p>{testimonial.quote}</p>
            </div>
        </div>
    );
};

export default Testimonial;

