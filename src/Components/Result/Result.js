import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return(
      <div className="result">
        <p>Name: {this.state.name}</p>
        <p>Course: {this.state.course}</p>
        <p>Rating: {this.state.rating}</p>
        <p>Comment: {this.state.comment}</p>
        <button onClick={this.props.onBackButton}>Back</button>
      </div>
    )
  }
};

export default Result;