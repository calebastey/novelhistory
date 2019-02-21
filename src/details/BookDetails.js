import React, { Component } from 'react';
import MarketplaceLink from './MarketplaceLink'
import StarRating from './StarRating'
import BookYearsReferenced from './BookYearsReferenced'

class BookDetails extends Component {

    createMarkup(book) {
        return {__html: book.summary};
    }

    render() {
        let book = this.props.book;
        return (
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <MarketplaceLink link={book.marketplaceLink}/>
                </div>
                <div className="col-md-9 col-sm-12">
                    <h2 className="left-align">{book.title}</h2>
                    <h3 className="left-align">{book.author}</h3>
                    <StarRating rating={book.rating}/>
                    <BookYearsReferenced start={book.start} end={book.end} />
                    <div className="summary">
                        <div dangerouslySetInnerHTML={this.createMarkup(book)} />
                    </div>
                </div>
            </div>
        )
    }
}

BookDetails.defaultProps = {
   book: {
       title: "Welcome to Novel History",
       summary: "Great works of fiction often provide accurate portrayals of historical figures and places.  " +
           "A fantastic way to learn about various parts of history is through the lens of these great works.  " +
           "Here, I've compiled a list of historical fiction, visualized on a timeline so that you can plot a " +
           "course through history as told by some of the great writers. To be included, a book must have the " +
           "following prerequisites. <ol>" +
           "<li>The work must be fiction, preferably a novel.</li>" +
           "<li>The work must contain accurate representations of historical figures and events</li>" +
           "<li>The fictional characters must interact with the historical events and figures</li>" +
           "<li>It shouldn't suck.</li>" +
           "</ol><br/>" +
           "Select a book from the timeline below to begin your journey",
   }
};

export default BookDetails;