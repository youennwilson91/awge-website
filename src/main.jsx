import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import { Provider } from 'react-redux';
import store from './components/Reducer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
