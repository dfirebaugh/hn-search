import React from 'react';
import store from '../store/index';
import { addSearchTerm } from '../actions/index';
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
    store.dispatch(addSearchTerm(this.state.search))

    fetch(`https://hn.algolia.com/api/v1/search?query=${this.state.search}`)
      .then(response => response.json())
      .then(data => this.setState({ results: data }))
  }
  keyPress = e => {
    if (e.keyCode === 13) {
      this.onSubmit()
    }
  }
  render() {
    return <header className="App-header">
      <div style={{ display: 'flex' }}>
        <input onKeyDown={this.keyPress} onChange={this.handleSearch} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
      {this.state && this.state.search}
      {this.state.results && resultList(this.state.results)}
      {!this.state.results && <img src={logo} className="App-logo" alt="logo" />}
    </header>
  }
}

export default Search;