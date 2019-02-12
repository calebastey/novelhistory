import React, { Component } from 'react';
import Timeline from 'react-visjs-timeline'

const options = {
    min: '1000',
    max: '2030',
    width: '100%',
    height: '200px',
    stack: true,
    showMajorLabels: true,
    showCurrentTime: false,
    zoomMin: 31556952000,
    type: 'box'
};

class BookTimeline extends Component {

    clickHandler(timelineItem) {
        this.props.onTimelineSelect(timelineItem.item);
    }

    render() {
        return(
            <div className="col">
                <div>
                    <Timeline options={options}
                              clickHandler={this.clickHandler.bind(this)}
                              items={this.props.data}
                              selection={this.props.bookId}
                      />
                </div>
            </div>
        )
    }
}

export default BookTimeline;