import React, { Component } from 'react';
import Timeline from 'react-visjs-timeline'
import TimelineInputs from './TimelineInputs'
import './vis-styles.css'

const options = {
    min: '1000',
    max: '2030',
    width: '100%',
    height: '150px',
    stack: true,
    showMajorLabels: true,
    showMinorLabels: true,
    showTooltips: true,
    showCurrentTime: false,
    zoomMin: 315569520000,
    type: 'range',
};

class BookTimeline extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minYear: Number.parseInt(1600),
            maxYear: Number.parseInt(1820)
        };
        this.minYearHandler = this.minYearHandler.bind(this);
        this.maxYearHandler = this.maxYearHandler.bind(this);
        this.timelineRef = React.createRef();
    }

    componentDidUpdate() {
       // this.timelineRef.current.$el.setWindow(this.state.minYear, this.state.maxYear);
    }

    clickHandler(timelineItem) {
        this.props.onTimelineSelect(timelineItem.item);
    }

    minYearHandler(event) {
        let newYear = Number.parseInt(event.target.value);
        console.log("new year min: ", newYear);
        if (newYear <= this.state.minYear) {
            this.setState({minYear: newYear});
        } else {
            console.log("Error, Min year must be less than max year")
        }
    }

    maxYearHandler(event) {
        let newYear = Number.parseInt(event.target.value);
        console.log("new year max: ", newYear);
        if (newYear >= this.state.minYear) {
            this.setState({maxYear: newYear});
        } else {
            console.log("Error, Max year must be greater than min year")
        }
    }

    render() {
        return(
            <div className="col">
                <div>{/*
                    <TimelineInputs minYear={this.state.minYear}
                                    maxYear={this.state.maxYear}
                                    minYearHandler={this.minYearHandler}
                                    maxYearHandler={this.maxYearHandler}
                    />
                    */}
                    <Timeline options={options}
                              clickHandler={this.clickHandler.bind(this)}
                              items={this.props.data}
                              selection={[this.props.bookId]}
                              ref={this.timelineRef}
                    />
                </div>
            </div>
        )
    }
}

export default BookTimeline;