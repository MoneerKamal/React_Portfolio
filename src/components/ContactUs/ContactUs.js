import React from 'react';


const contactUs = (props) => {
    return (
        <section id="contact">
        <div className="row section-head">
          <div className="twelve columns">
            <p className="">
            Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
       
        <div className="row">

<div className="columns twelve contact-details">

    <h2>Contact Details</h2>
    <p className="address">
        <span>{props.resumeData.name}</span>
        <br></br>
        <span>
            {props.resumeData.address}
        </span>
        <br></br>
        <span>{props.resumeData.website}</span>
        <br></br>
        <span>{props.resumeData.linkedinId}</span>
    </p>
</div>
</div>
      </section>
    );
}
export default contactUs;

