/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import './index.css';

import App from './containers/App.js';
import ReactDOM from 'react-dom/client';

// this is a react context which will provide
// all child components with information related to routing

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App />
// );
