import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { search: '' }
  handleSearch = e => {
    this.setState({ search: e.target.value })
  }
  onSubmit = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.search}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.hits)
        this.setState({ results: data })
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ display: 'flex' }}>
            <input onChange={this.handleSearch} />
            <button onClick={this.onSubmit}>Submit</button>
          </div>
          {this.state && this.state.search}
          {this.state.results && this.state.results.hits.map((x, i) => {
            return <div className="results" key={i}>
              <h2>title: <a href={x.url}>{x.title}</a></h2>
              <p>author: {x.author} </p>
            </div>
          })}
          {!this.state.results && <img src={logo} className="App-logo" alt="logo" />}
        </header>
      </div>
    );
  }
}

export default App;
