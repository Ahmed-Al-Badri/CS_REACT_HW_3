import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Store from './list_.jsx';
import Main_ from '../main/main_';
import List_ from '../List/list_display.jsx';
import Loads from '../Load/loads.jsx';
import Population from '../Population/population.jsx';
function hold_(url) {
  let data = new Store(url);
  return data;
}

export default function Nav_display(links) {
  const [loading, loading_] = useState(1);
  const [loading_grp, loading_grp_] = useState(0);
  const [data, data_] = useState(hold_(links.li_json));

  useEffect(() => {
    data.Fetch_data(loading_);
    //data.effect_grp = loading_grp_;
    //console.log(data.load_grap);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main_ />} />
        <Route
          path="/list"
          element={loading == 1 ? <Loads /> : <List_ data_as={data.class_in} />}
        />

        <Route
          path="/population"
          element={
            data.load_grp == 1 ? (
              <Population data={data.effect_grp} data_2={data.effect_grp_2} />
            ) : (
              <Loads />
            )
          }
        />
      </Routes>
    </>
  );
}
