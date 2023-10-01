import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer , { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState = { initialState } reducer = { reducer }>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then((registration) => {
//         console.log('Service Worker registered');
//       })
//       .catch((error) => {
//         console.error('Service Worker registration failed:', error);
//       });
//   });
// }


