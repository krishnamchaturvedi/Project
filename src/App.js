import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

if ('SharedWorker' in window) {
  // Register the shared worker
  navigator.serviceWorker.register('shared-worker.js')
    .then((registration) => {
      console.log('Shared Worker registered!', registration);

      // After registration, create a new SharedWorker instance
      const sharedWorker = new SharedWorker('shared-worker.js');

      // Function to handle incoming messages from the shared worker
      sharedWorker.port.onmessage = (event) => {
        const result = event.data;
        console.log('Received result from shared worker:', result);
      };

      // Function to send a message to the shared worker
      function sendMessageToWorker(message) {
        sharedWorker.port.postMessage(message);
      }

      // Call the function to send a message to the shared worker
      sendMessageToWorker('Hello, Shared Worker!');
    })
    .catch((error) => {
      console.error('Error registering Shared Worker:', error);
    });
} else {
  console.log('Shared Workers are not supported in this browser.');
}

function App() {
  return (
    <div className="app" id="dkm">
      <Router>
        <Switch>
          <Route path="/search">
          <div className="search-page-container">
              <SearchPage />
              </div>
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
