import React, { Component } from 'react';
import MarketplaceLink from './MarketplaceLink'
import { data } from '../data'

class BookDetails extends Component {

    componentDidMount() {
    }

    render() {
        if (this.props.bookId !== null) {
            let book = data.books[this.props.bookId];
            return (
                <div>
                    <div>
                        <MarketplaceLink link={book.marketplaceLink} />
                    </div>
                    <div>
                        <h3>{data.books[this.props.bookId].content}</h3>
                        <p>
                            {data.books[this.props.bookId].summary}
                        </p>

                    </div>
                </div>
            )
        } else {
            return (
                <div>
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