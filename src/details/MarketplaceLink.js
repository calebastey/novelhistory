import React, { Component } from 'react';

class MarketplaceLink extends Component {

    createMarkup() {
        return {__html: this.props.link};
    }

    render() {
        if (this.props.link) {
            return(
                <div dangerouslySetInnerHTML={this.createMarkup()} />
            )
        }
        else {
            return(
                <div>
                    No book link
                </div>
            )
        }
    }
}

export default MarketplaceLink;