import React, { Component } from 'react';

class TimelineInputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valid: true
        };
        this.handleMinBlur = this.handleMinBlur.bind(this);
        this.handleMaxBlur = this.handleMaxBlur.bind(this);

    }

    handleMinBlur(e) {
        this.props.minYearHandler(e);
        return null;
    }

    handleMaxBlur(e) {
        this.props.maxYearHandler(e);
        return null;
    }

    validateMin(e) {
        let newValue = e.target.value;
        if (newValue > this.props.maxYear) {
            this.setState({
                valid: false
            });
        } else {
            this.setState({
                valid: true
            });
        }
    }

    validateMax(e) {
        let newValue = e.target.value;
        if (newValue < this.props.minYear) {
            this.setState({
                valid: false
            });
        } else {
            this.setState({
                valid: true
            });
        }
    }

    showError() {
        if (!this.state.valid) {
            return(
                <div>
                    <span className="error">Invalid Year Range</span>
                </div>
            )
        }
        return null;
    }

    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group">
                        <input className="form-control form-control-sm" type="text" size="4" min="1000" max="2030"
                               value={this.props.minYear}
                               onBlur={this.handleMinBlur}
                               onChange={this.validateMin.bind(this)}
                        /> -
                        <input className="form-control form-control-sm" type="text" size="4" min="1000" max="2030"
                               value={this.props.maxYear}
                               onBlur={this.handleMaxBlur}
                               onChange={this.validateMax.bind(this)}
                        />
                    </div>
                </form>
                {this.showError()}
            </div>
        )
    }

}

export default TimelineInputs