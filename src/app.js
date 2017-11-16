import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/example';

const App = () => {

    return (
        <div>
            <Example name={'Jonathan'}/>
        </div>
    )
};

ReactDOM.render(
  <App />,
  document.querySelectorAll('#rootEl')[0]
);
