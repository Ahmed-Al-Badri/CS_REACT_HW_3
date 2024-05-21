import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
const Vars = CanvasJSReact.CanvasJSChart;

import './styles_population.css';

export default function Population(DATA) {
  return (
    <>
      <div>
        <h1>Population</h1>
        <section>
          <h2>Graph</h2>
          <Vars options={DATA.data} />
        </section>
        <section>
          <h2>Bar Chart</h2>
          <Vars options={DATA.data_2} />
        </section>
      </div>
    </>
  );
}
