import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';

import Counter from './view/Counter';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Counter />
    </div>
  );
};

render(<App />, document.getElementById('root'));
