import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBoard from './ScoreBoard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoreBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});