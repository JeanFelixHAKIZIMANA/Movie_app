import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById(process.env.REACT_APP_ROOT || 'root'));