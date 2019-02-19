import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class StarRating extends Component {
    render() {
        if (this.props.rating) {
            return (
                <div className="left-align rating">
                    <StarRatings
                        rating={this.props.rating}
                        starRatedColor="#d46355"
                        starDimension="20px"
                        starSpacing="5px"/>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default StarRating;