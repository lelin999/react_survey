import React, { Component } from 'react';

import Result from './Components/Result/Result.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      course: 'React',
      submission: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleSubmit = (event) => {
    this.setState({submission: true});
    event.preventDefault();
  }

  handleChange = (event) => {
    const target = event.target;
    const val = target.value;
    const name = target.name;
    this.setState({
      [name]: val
    });
  }

  goBack = () => {
    this.setState({name: '', course: 'React', rating: 0, comment: '', submission: false});
  }

  render() {
    let ratingValue = [];
    for (let i = 0; i <= 10; i++) {
      ratingValue.push(<option value={i} key={i}>{i}</option>);
    }

    if (!this.state.submission) {
      return(
        <div className="Survey">
          <p>Survey Form</p>
          <div className="Form">
            <form onSubmit={this.handleSubmit}>
              <label>Name: </label>
              <input
                name="name" 
                type="text"
                onChange={this.handleChange} 
              />
              <br></br>
              <label>Course: </label>
              <select 
                name="course"
                onChange={this.handleChange}>
                <option value="React">React</option>
                <option value="Backbone">Backbone</option>
                <option value="Angular">Angular</option>
              </select>
              <br></br>
              <label>Rating: </label>
              <select 
                name="rating"
                onChange={this.handleChange}>
                {ratingValue}
              </select>
              <br></br>
              <label>Comment: </label>
              <input 
                name="comment"
                type="textarea"
                style={{height: '100px'}} 
                onChange={this.handleChange}
              />
              <br></br>
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      )
    } else {
      return(
        <Result onBackButton={this.goBack} data={this.state} />
      )
    }
  }
}

export default App;