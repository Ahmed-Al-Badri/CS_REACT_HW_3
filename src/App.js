import React, { StrictMode, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav_ from './nav/nav_.jsx';

import Nav_display from './rouths/naved.jsx';
class App extends React.Component {
  render() {
    return (
      <>
        <div className="container bg-dark text-light">
          <div className="row">
            <Nav_ />
          </div>
          <div className="col-12">
            <Nav_display li_json="https://cs464p564-frontend-api.vercel.app/api/countries" />
          </div>
        </div>
      </>
    );
  }
  //<Store li_json="https://cs464p564-frontend-api.vercel.app/api/countries" />
  //<Roths_ li_json="A" />
}
export default App;
