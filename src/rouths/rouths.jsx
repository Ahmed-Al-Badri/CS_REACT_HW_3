/*
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//import Switch from 'react-router-dom';
import Main_ from '../main/main_.jsx';
import Fetch_data from '../List/list_.jsx';
import {} from '../List/list_.jsx';
import List_ from '../List/list_display.jsx';

//import LinkContainer from 'react-router-bootstrap';

function Roths_() {
  const [fetch_class, modify_class] = useState(
    Fetch_data('https://cs464p564-frontend-api.vercel.app/api/countries')
  );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main_ />}>
          <Route path="list" data={fetch_class} element={<List_ />} />
        </Route>
      </Routes>
    </div>
  );
}

/*
 <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/mylife" component={MyLife} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/list" component={App} />
      <Route path="/hotel" component={Hotel} />
      <Route path="/search" component={Autocomplete} />
    </Switch>
*/

//export default Roths_;
