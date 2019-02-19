import React, { Component } from 'react';

class TimelineInputs extends Component {

    handleBlur() {
        this.setState({validating: true});
    }

    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group">
                        <input className="form-control form-control-sm" type="text" size="4"
                               value={this.props.minYear}
                               onBlur={this.handleBlur}
                        /> -
                        <input className="form-control form-control-sm" type="text" size="4"
                               value={this.props.maxYear}
                               onChange={this.handleBlur}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default TimelineInputs