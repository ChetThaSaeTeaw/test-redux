import './App.scss'; // CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './store/store';

// pages
const FormPage = lazy(() => import('./pages/FormPage/FormPage'));
const FectchDataPage = lazy(() => import('./pages/FectchData/FectchData'));
const SearchParamPage = lazy(() => import("./pages/SearchParam/SearchParam"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<FormPage />} />
          <Route path='/fetch/:id' element={<FectchDataPage />} />
          <Route path='/search' element={<SearchParamPage />} />
        </Routes>
      </Provider>
    </Suspense>
  )
}

export default App
