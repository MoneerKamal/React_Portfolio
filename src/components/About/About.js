import React from 'react';


const about = (props) => {
    return (
        <section id="about">
            <div className="row">

                <div className="three columns">

                    <img className="profile-pic" src="images/profilepic.png" alt="" />

                </div>

                <div className="nine columns main-col">

                    <h2>About Me</h2>
                    <p>
                        {
                            props.resumeData.aboutme
                        }
                    </p>

                 
                </div>
            </div>
        </section>
    );
}
export default about;

