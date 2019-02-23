import React, { useState } from 'react';
import store from '../store/index';
import { addSearchTerm } from '../actions/index';
import logo from '../logo.svg';

const resultList = results => results.hits.map((result, i) => {
  const { url, title, author, points } = result;
  return <div className="results" key={i}>
    <h2><a href={url}>{title}</a></h2>
    <p>author: {author} </p>
    <p>points: {points}</p>
  </div>
});

const Search = () => {
  const [search, setTerm] = useState('');
  const [results, setResults] = useState(null);

  const onSubmit = () => {
    store.dispatch(addSearchTerm(search))

    fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
      .then(response => response.json())
      .then(data => setResults(data))
  }

  const keyPress = e => e.keyCode === 13 && onSubmit()

  const handleSearch = e => setTerm(e.target.value)

  return <div className="App-header">
    <div style={{ display: 'flex' }}>
      <input onKeyDown={keyPress} onChange={handleSearch} />
      <button onClick={onSubmit}>Submit</button>
    </div>
    {search}
    {results && resultList(results)}
    {!results && <img src={logo} className="App-logo" alt="logo" />}
  </div>
}

export default Search;