import React, {Component} from 'react';

import WatchTime from '../../components/WatchTime/WatchTime';
import WatchDate from '../../components/WatchDate/WatchDate';

class Watch extends Component{
    state={
        date: new Date(),
        isDateVisible: true
    };
    componentDidMount() {
        this.startTime();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTime() {        
        this.timer = setInterval(() => {
            this.setState(() => ({ date: new Date()}));
        }, 1000);
    }   
    
    toggleDate=()=>{
        this.setState((prevState) => ({ isDateVisible: !prevState.isDateVisible}));
    } 
    render(){
        return(
            <div>
            <WatchTime toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
            <WatchDate date={this.state.date} isDateVisible={this.state.isDateVisible} />
        </div>
        );
    }
}


export default Watch;