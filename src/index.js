import React from 'react';
import {render} from 'react-dom';

const App = React.createClass({
  getInitialState() {
    return {
      n: 0,
    };
  },


  handleClick() {
    this.setState({ n: this.state.n + 1 })
  },

  render() {
    return (
      <div>a</div>
    );
  },
});

render(React.createElement(App), document.querySelector('#root'))