import React from 'react';
import PropTypes from 'prop-types';

import classes from './WatchTime.module.css';

const watchTime=(props)=>{
    let attachedClasses=[classes.slider,classes.round];
    return(
        <div className="container">
            <div className="d-flex flex-row">
                <div className="col-md-4 mx-auto">
                    <div className={classes.panel}>                        
                        <label id="date-switch" className={classes.switch}>
                            <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate}/>
                            <span className={attachedClasses.join(' ')}></span>
                        </label>
                        <label className={classes.panel_switch_text} htmlFor="date-switch">
                            <i className="fa fa-calendar"></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
watchTime.defaultProps = {
    dateOn: true,
    toggleDate: () => {},
};

watchTime.propTypes = {
    dateOn: PropTypes.bool,
    toggleDate: PropTypes.func
};
export default watchTime;