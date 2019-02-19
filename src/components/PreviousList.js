import React from 'react';

const queries = prevList => {
  const searchTerms = prevList || ['test', 'this is a test', 'another']
  return searchTerms.map((x, i) => <li> {x} </li>)
}
const PreviousList = ({ previousQueries }) => {
  return <div>
    <h3> Previous Queries: </h3>
    <ol>
      {queries(previousQueries)}
    </ol>
  </div>
}

export default PreviousList;