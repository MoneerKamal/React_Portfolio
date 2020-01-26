import React from 'react';
import PropTypes from 'prop-types';
import DateTime from '../../lib/DateTime';
import classes from './WatchDate.module.css';

const watchDate=(props)=>{
    return(
        <div className="container-fluid">
        <div className="d-flex flex-row">
            <div className="col-md-4 mx-auto">
                <div className={classes.display}>
                    <div className={classes.display_time}>{DateTime.toTimeString(props.date)}</div>
                    { props.isDateVisible && <div className={classes.display_date}>{DateTime.toDateString(props.date)}</div> }
                </div>
            </div>
        </div>
    </div>
    )
}
watchDate.defaultProps = {
    date: new Date(),
    isDateVisible: true
};

watchDate.propTypes = {
    date: PropTypes.object,
    isDateVisible: PropTypes.bool
};
export default watchDate;