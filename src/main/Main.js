import React, { Component } from 'react';
import BookTimeline from '../timeline/BookTimeline';
import BookDetails from '../details/BookDetails'
import { data } from "../data";

class Main extends Component {

    constructor(props) {
        super(props);
        var bookId = null;
        var book = null;
        let uriIdx = data.books.map(book => book.uri).indexOf(props.location.pathname);
        if (uriIdx >= 0) {
            book = data.books[uriIdx];
            bookId = book.id;
        }

        this.state = {
            path: props.location.pathname,
            bookId: bookId,
            book: book,
            data: data.books
        };
    }

    onTimelineSelect = (selectedTimelineId) => {
        if(selectedTimelineId != null && selectedTimelineId >= 0) {
            let book = data.books[selectedTimelineId];
            this.setState({
                bookId: selectedTimelineId,
                book: book
            });
            if (book && book.uri) {
                this.props.history.push(book.uri);
            }
        }
    };

    render() {
        return(
            <div className="container">
                <div className="book-details">
                    <BookDetails book={this.state.book || undefined}/>
                </div>
                <div className="timeline row">
                    <BookTimeline onTimelineSelect={this.onTimelineSelect} data={this.state.data} bookId={this.state.bookId} />
                </div>
            </div>
        );
    }

}

export default Main;

