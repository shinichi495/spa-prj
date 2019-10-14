import React from 'react';
import ReactDOM from 'react-dom';
import Register_Guest from './Register_Guest';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register_Guest/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
