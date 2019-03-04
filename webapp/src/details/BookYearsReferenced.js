import React, { Component } from 'react';

class BookYearsReferenced extends Component {
    render() {
        if (this.props.start) {
            return (
                <div className="left-align years-referenced">
                    <span>Years Referenced: </span> {this.props.start} - {this.props.end}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default BookYearsReferenced;