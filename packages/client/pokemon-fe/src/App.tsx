import React from 'react';
import classes from './App.module.sass';
import 'antd/dist/antd.css';
import Home from './components/Home/Home'
import ApiProvider from './utils/api/ApiProvider';

function App() {
  return (
    <ApiProvider>
      <div className={classes.App}>
        <Home />
      </div>
    </ApiProvider>
  );
}

export default App;
