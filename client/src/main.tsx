import './index.css'

import App from './containers/App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import store from '../redux/store';

//this is a react context which will provide all child components with information related to routing

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <Provider store={store}>
      <BrowserRouter> 
        <App/>
      </BrowserRouter>
    </Provider>
)
