import React, { Component } from 'react';
import BookTimeline from '../timeline/BookTimeline';
import BookDetails from '../details/BookDetails'
import { data } from "../data";

class Main extends Component {

    constructor(props) {
        super(props);
        var bookId = null;
        let uriIdx = data.books.map(book => book.uri).indexOf(props.location.pathname);
        if (uriIdx >= 0) {
            bookId = data.books[uriIdx].id;
        }

        this.state = {
            path: props.location.pathname,
            bookId: bookId,
            data: data.books
        };
    }

    onTimelineSelect = (selectedTimelineId) => {
        if(selectedTimelineId >= 0) {
            this.setState({bookId: selectedTimelineId});
            let book = data.books[selectedTimelineId];
            if (book.uri) {
                this.props.history.push(book.uri);
            }
        }
    };

    render() {
        return(
            <div className="container">
                <div className="bookDetails">
                    <BookDetails bookId={this.state.bookId}/>
                </div>
                <div className="timeline row">
                    <BookTimeline onTimelineSelect={this.onTimelineSelect} data={this.state.data} bookId={this.state.bookId} />
                </div>
            </div>
        );
    }

}

export default Main;

