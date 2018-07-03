import React, { Component } from 'react';

class ProgressTrack extends Component {
    render() {
        return (
            <div className="progress-tracker">
                <label className="progress-tracker__label">Progress Tracker</label>
                <div className="progress-tracker__percentage">
                    0%
                </div>
            </div>
        )
    }
}

export default ProgresTracker;