import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import store from './reducers/store';
import Main from './containers/main';

library.add(fas);

const App: FC = () => (
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      className="custom-toast"
    />
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

export default App;
