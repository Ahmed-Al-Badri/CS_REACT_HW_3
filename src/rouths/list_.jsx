import React, { useState, createElement, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
//import Switch from 'react-router-dom';
import Main_ from '../main/main_.jsx';
import CanvasJSReact from '@canvasjs/react-charts';
let Chart = CanvasJSReact.CanvasJSChart;
//import Fetch_data from '../List/list_.jsx';
//import {} from '../List/list_.jsx';

class Store extends React.Component {
  constructor(array) {
    super(array);
    //this.data_[(this.info, this.info_set)] = useState(0);
    this.loading = 1;
    this.url_link = array;
    this.hold_data = 2;
    this.load_grp = 0;
    this.effect_grp = 0;
    this.effect_grp_2 = 0;
    this.load_grap = createElement(
      'h1',
      {
        onClick: () => {
          this.load_grp += 1;
          this.effect_grp(this.load_grp);
        },
      },
      'BACSSSSSS'
    );
    //<h1>AAAAAA</h1>;
    this.hold_data += 1;

    this.class_in;
  }
  doetc(event) {
    console.log(event);
    console.log('B');
    return 2;
  }

  create_elem(data, array_loc) {
    let dans = data;
    let datas = createElement(
      'section',
      {
        className: 'countries-flex',
        style: { key: array_loc, background: 'blue' },
        onClick: this.doetc,
      },
      createElement('h3', {}, dans.name),
      createElement('img', {
        src: dans.flag_png,
        alt: dans.flag_alt,
      }),
      createElement('div', {}, createElement('p', {}, dans.flag_alt))
    );
    //datas.props.onScroll  = this.doetc;
    datas.props.style.background = 'green';
    //datas.probs. ;
    return datas;
    console.log('BAZ');
  }

  async create_flex(url) {
    this.class_in = createElement(
      'div',
      { className: 'Elementsflex' },
      this.hold_data.map((info, array_dir) => this.create_elem(info, array_dir))
    );

    return 0;
  }

  get_grap() {
    let data__ = [];
    //let grap2 = [];
    //let total = 0;
    //let amount = 0;
    this.hold_data.map((res, loc) => {
      data__.push({ y: res.population, label: res.name });
      //grap2.push({ y: res.gdp_billions, label: res.name });
      //total += res.population;
    });

    this.effect_grp = {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'dark1', // "light1", "dark1", "dark2"
      title: {
        text: 'South America Popluation',
      },
      data: [
        {
          type: 'pie',
          indexLabel: '{label}: {y} people',
          startAngle: 0,
          dataPoints: data__,
        },
      ],
    };

    this.effect_grp_2 = {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'dark1', //"light1", "dark1", "dark2"
      title: {
        text: 'Population bar chart ',
      },
      axisY: {
        includeZero: true,
      },
      data: [
        {
          type: 'column', //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: '#5A5757',
          indexLabelPlacement: 'outside',
          dataPoints: data__,
        },
      ],
    };

    //console.log(this.effect_grp);

    this.load_grp = 1;
  }

  async create_grap() {
    if (this.load_grp === 0) {
      this.get_grap();
    }
    console.log(load_grp);

    return (
      <>
        <Chart options={this.effect_grp} />
      </>
    );

    return 1;
  }

  async Fetch_data(link_) {
    let data;
    await axios
      .get(this.url_link)
      .then((data) => {
        this.hold_data = data['data'];
        link_(this.create_flex(''));
        link_(0);
        this.create_grap();
        this.loading = 0;
        console.log(data);
        //console.log(this.get_grap());
        return 0;
      })
      .catch((error) => console.log(error + 'n'));
  }

  render() {
    const hold = this.dis();
    return (
      <>
        <display_ loading={this.loading} class_in={this.class_in} />
      </>
    );
  }
}

export default Store;
export { Fetch_data };
