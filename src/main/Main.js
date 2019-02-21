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
        let maxId  = Math.max(...data.books.map(book => book.id));
        console.log("maxId", maxId);
        if (uriIdx >= 0) {
            book = data.books[uriIdx];
            bookId = book.id;
        }

        this.state = {
            path: props.location.pathname,
            bookId: bookId,
            book: book,
            data: data.books,
            maxId: maxId
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
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

    handleKeyDown(e) {
        if (e.keyCode === 37) {
            if (this.state.bookId != null && this.state.bookId > 0) {
                let newBookId = this.state.bookId - 1;
                let book = data.books[newBookId];
                this.setState({
                    bookId: newBookId,
                    book: book
                });
            }
        }
        if (e.keyCode === 39) {
            if (this.state.bookId != null && this.state.bookId < this.state.maxId) {
                let newBookId = this.state.bookId + 1;
                let book = data.books[newBookId];
                this.setState({
                    bookId: newBookId,
                    book: book
                });
            }
        }
    }

    render() {
        return(
            <div tabIndex="-1" className="container" onKeyDown={ this.handleKeyDown }>
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

