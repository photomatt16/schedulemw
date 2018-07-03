import React, { Component } from 'react';
import Gradient from './gradients';

class Schedule extends Component {
    renter() {
        return (
            <div className="schedule">
                <h1 className="schedule__title">My Schedule</h1>
                <Gradient/>
            </div>
        )
    }
}

export default Schedule;
