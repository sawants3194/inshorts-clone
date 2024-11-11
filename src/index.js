import React from "react";
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' in React 18
import Routes from './Routes';
import 'semantic-ui-css/semantic.min.css';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Routes />);
