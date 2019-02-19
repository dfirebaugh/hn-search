import React from 'react';
import store from '../store/index';

const queries = prevList => {
  const searchTerms = prevList || ['test', 'this is a test', 'another']
  return searchTerms.map((x, i) => <li key={i}> {x} </li>)
}
class PreviousList extends React.Component {
  render() {
    store.subscribe(() => this.setState({ searchTerms: store.getState().searchTerms }))
    return <div>
      {this.state &&
        <div>
          <h3> Previous Queries: </h3>
          <ol>
            {this.state && queries(this.state.searchTerms)}
          </ol>
        </div>
      }
    </div>
  }
}


export default PreviousList;