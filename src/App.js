import React, { Component } from 'react';
import BookTimeline from './timeline/BookTimeline';
import BookDetails from './details/BookDetails'
import './App.css';
import { data } from './data'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookId: null,
            data: data.books
        };
    }

    onTimelineSelect = (selectedTimelineId) => {
        if(selectedTimelineId >= 0) {
            this.setState({bookId: selectedTimelineId});
        }
    };

    render() {
        return (
            <div className="App">
                <div className="bookDetails">
                    <BookDetails bookId={this.state.bookId}/>
                </div>
                <div className="timeline">
                    <BookTimeline onTimelineSelect={this.onTimelineSelect} data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default App;
