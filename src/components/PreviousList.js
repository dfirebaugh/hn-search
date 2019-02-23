import React, { useState, useEffect } from 'react';
import store from '../store/index';

const queries = searchTerms => searchTerms.map((x, i) => <li key={i}> {x} </li>)

const PreviousList = () => {
  const [searchTerms, setTerms] = useState(null)

  useEffect(() => {
    store.subscribe(() => setTerms(store.getState().searchTerms))
  })
  return <div>
    {searchTerms &&
      <div>
        <h3> Previous Queries: </h3>
        <ol>
          {queries(searchTerms)}
        </ol>
      </div>
    }
  </div>
}

export default PreviousList;