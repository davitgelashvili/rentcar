import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './routes/main';
import Detail from './routes/detail';
import Header from './components/Header/Header';
import './i18n/i18n';
import { store } from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/:id',
    element: <Detail />
  },
])

const App = () => {
    return (
        <React.StrictMode>
          <Provider store={store}>
            <Header />
            <RouterProvider router={router} />
          </Provider>
        </React.StrictMode>
    )
}

export default App