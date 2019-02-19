import React from 'react';
import logo from '../logo.svg';

const resultList = results => results.hits.map((x, i) => {
  return <div className="results" key={i}>
    <h2><a href={x.url}>{x.title}</a></h2>
    <p>author: {x.author} </p>
    <p>points: {x.points}</p>
  </div>
});

class Search extends React.Component {
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
    return <header className="App-header">
      <div style={{ display: 'flex' }}>
        <input onChange={this.handleSearch} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
      {this.state && this.state.search}
      {this.state.results && resultList(this.state.results)}
      {!this.state.results && <img src={logo} className="App-logo" alt="logo" />}
    </header>
  }
}

export default Search;