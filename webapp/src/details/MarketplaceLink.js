import React, { Component } from 'react';
import defaultBook from './book-cover.png';

class MarketplaceLink extends Component {

    createMarkup() {
        return {__html: this.props.link};
    }

    render() {
        if (this.props.link) {
            return(
                <div className="amazon-link">
                    <div dangerouslySetInnerHTML={this.createMarkup()} />
                    <span>Find me on Amazon</span>
                </div>
            )
        }
        else {
            return(
                <div className="amazon-link">
                    <img src={defaultBook} alt='default book' width="200px"/>
                </div>
            )
        }
    }
}

export default MarketplaceLink;