import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.module.css'
import reportWebVitals from './reportWebVitals';

import App from "./App";
import {TasksProvider} from "./contexts/TaskContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <TasksProvider>
          <App/>
      </TasksProvider>
  </React.StrictMode>
);

reportWebVitals();
