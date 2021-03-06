import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, FirestoreProvider, AuthProvider, StorageProvider } from "reactfire";
import { app, db, auth, storage } from "services/firebaseInit";
import { BrowserRouter } from 'react-router-dom';
import "style.css"
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#589e5a",
    },
    secondary: {
      main: "#9E589D"
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseApp={app}>
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={db}>
          <StorageProvider sdk={storage}>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </StorageProvider>
        </FirestoreProvider>
      </AuthProvider>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
