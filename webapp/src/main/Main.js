import React, { Component } from 'react';
import BookTimeline from '../timeline/BookTimeline';
import BookDetails from '../details/BookDetails'
import Firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../firebase/config';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: this.props.location.pathname,
            currentBook: null,
            books: [],
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.onTimelineSelect = this.onTimelineSelect.bind(this);
        this.fetchData = this.fetchData.bind(this);
        Firebase.initializeApp(config);
    }

    fetchData() {
        let firestore = Firebase.firestore();
        let that = this;
        firestore.collection('novels')
            .get()
            .then((snapshot) => {
                let books = [];
                snapshot.forEach((bookDocument) => {
                    books = books.concat([bookDocument.data()]);
                });
                let uriIdx = books.map(book => book.uri).indexOf(this.state.path);
                let currentBook = null;
                if (uriIdx >= 0) {
                    currentBook = books[uriIdx];
                }
                let maxId = Math.max(...books.map(book => book.id));

                that.setState({
                    books: books,
                    currentBook: currentBook,
                    maxId: maxId
                });
            })
            .catch((error) => {
                console.log("Error fetching: ", error);
            });
    };

    componentDidMount() {
        this.fetchData();

    }

    onTimelineSelect(selectedTimelineId) {
        if (selectedTimelineId != null && selectedTimelineId >= 0) {
            let book = this.state.books[selectedTimelineId];
            this.setState({
                currentBook: book
            });
            if (book && book.uri) {
                this.props.history.push(book.uri);
            }
        }
    };


    handleKeyDown(e) {
        if (e.keyCode === 37) {
            if (this.state.currentBook != null) {
                let newBookId = this.state.currentBook.id - 1;
                if (newBookId < 0) {
                    newBookId = this.state.maxId;
                }
                let book = this.state.books[newBookId];
                this.setState({
                    currentBook: book
                });
            }
        }
        if (e.keyCode === 39) {
            if (this.state.currentBook != null) {
                let newBookId = (this.state.currentBook.id + 1) % this.state.maxId;
                let book = this.state.books[newBookId];
                this.setState({
                    currentBook: book
                });
            }
        }
    }
    render() {
        let bookId = null;
        if (this.state.currentBook != null) {
            bookId = this.state.currentBook.id;
        }
        return(
            <div tabIndex="-1" className="container" onKeyDown={ this.handleKeyDown }>
                <div className="book-details">
                    <BookDetails book={this.state.currentBook || undefined}/>
                </div>
                <div className="timeline row">
                    <BookTimeline onTimelineSelect={ this.onTimelineSelect }
                                  data={ this.state.books }
                                  bookId={ bookId }
                    />
                </div>
            </div>
        );
    }

}

export default Main;

