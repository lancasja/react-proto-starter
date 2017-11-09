import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyComponent from './components/my-component';

const App = () => (
    <MuiThemeProvider>
        <MyComponent />
    </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.querySelectorAll('#rootEl')[0]
);
