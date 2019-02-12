import React, { Component } from 'react';
import MarketplaceLink from './MarketplaceLink'
import StarRatings from 'react-star-ratings';
import { data } from '../data'

class BookDetails extends Component {

    componentDidMount() {
    }

    render() {
        if (this.props.bookId !== null) {
            let book = data.books[this.props.bookId];
            return (
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <MarketplaceLink link={book.marketplaceLink} />
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <h2 className="left-align">{book.content}</h2>
                        <h3 className="left-align">{book.author}</h3>
                        <div className="left-align rating">
                            <StarRatings
                                rating={book.rating}
                                starRatedColor="#d46355"
                                starDimension="20px"
                                starSpacing="5px"/>
                        </div>
                        <div className="left-align years-referenced">
                            <span>Years Referenced: </span> {book.start} - {book.end}
                        </div>
                        <p className="summary">
                            {book.summary}
                        </p>

                    </div>
                </div>
            )
        } else {
            return (
                <div className="col">
                    <h2>Details</h2>
                    <div>
                        Select a book.
                    </div>
                </div>
            )
        }
    }
}

export default BookDetails;