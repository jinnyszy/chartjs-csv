import React, {Component} from 'react';
import { Line, Bar, Pie, PolarArea, Radar } from 'react-chartjs-2';
import './App.css';
import {readString} from 'react-papaparse';
import siteListCSV from './road.csv';

const year = []; // year label
const arr = []; //index
var pop = [];  //population
var roadDeath = []; //roadDeaths
var roadCrash = []; //road crashes
var reg = []; //registeredVehicles
var serInjury = []; //seriousInjury
var slInjury = [] //slight injury

const search = ',';
const replaceWith = '';

const parse = {
  complete: (results, file)=>{
    console.log('PArsing complete: ', results, file);
    for(let i=0;i<21;i++){
      year[i]=results.data[i].Year;
      pop[i] = results.data[i].Population.split(search).join(replaceWith);
      arr[i]=results['data'][i]['Index per 100,000 Population'];
      roadDeath[i]=parseInt(results['data'][i]['Road Deaths'].replace(/,/g,''));
      roadCrash[i]=parseInt(results['data'][i]['Road Crashes'].replace(/,/g,''));
      reg[i]=parseInt(results['data'][i]['Registered Vehicles'].replace(/,/g,''));
      serInjury[i]=parseInt(results['data'][i]['Serious Injury'].replace(/,/g,''));
      slInjury[i]=parseInt(results['data'][i]['Slight Injury'].replace(/,/g,''));
      console.log(year[i]);
      console.log(arr[i]);
      console.log(pop[i]);
      console.log(roadDeath[i]);
      console.log(roadCrash[i]);
      console.log(reg[i]);
      console.log(serInjury[i]);
      console.log(slInjury[i]);
    }

  },
  header: true,
  download: true,
  error: (error, file)=>{
    console.log('Error: ', error, file);
  },
};
readString(siteListCSV, parse);

function App() {

  const data = {
    labels: year,
    datasets: [
      {
        label: "Index per 100,000 population",
        data: arr, //change to display the wanted data (population, registered vehicle, index etc)
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "brown",
        pointBackgroundColor: "rgba(153, 102, 255, 0.2)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "violet",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 1
      }
    ]
  };

  const data1 = {
    labels: year,
    datasets: [
      {
        label: "Population",
        data: pop, //change to display the wanted data (population, registered vehicle, index etc)
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(74, 255, 196, 0.5)",
        borderColor: "rgba(74, 255, 196, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "brown",
        pointBackgroundColor: "rgba(74, 255, 196, 1)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "violet",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 1
      }
    ]
  };

  const data2 = {
    labels: year,
    datasets: [
      {
        label: "Road Crashes",
        data: roadCrash, //change to display the wanted data (population, registered vehicle, index etc)
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(16, 220, 255, 0.5)",
        borderColor: "rgba(16, 220, 255, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "brown",
        pointBackgroundColor: "rgba(16, 220, 255, 0.5)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "violet",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 1
      }
    ]
  };

  const data3 = {
    labels: year,
    datasets: [
      {
        label: "Road Deaths",
        data: roadDeath, //change to display the wanted data (population, registered vehicle, index etc)
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "brown",
        pointBackgroundColor: "rgba(255, 159, 64, 0.2)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "violet",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 1
      }
    ]
  };

  const data4 = {
    labels: year,
    datasets: [
      {
        label: "Registered Vehicles",
        data: reg, //change to display the wanted data (population, registered vehicle, index etc)
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(235, 51, 149, 0.2)",
        borderColor: "rgba(235, 51, 149, 0.6)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "brown",
        pointBackgroundColor: "rgba(235, 51, 149, 0.5)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "violet",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 1
      }
    ]
  };

  const data5 = {
    labels: year,
    datasets: [
      {
        label: "Serious Injury",
        data: serInjury, //change to display the wanted data (population, registered vehicle, index etc)
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(16, 220, 39, 0.5)",
        borderColor: "rgba(16, 220, 39, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "brown",
        pointBackgroundColor: "rgba(16, 220, 39, 0.5)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "violet",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 1
      },
      {
        label: "Slight Injury",
        data: slInjury, //change to display the wanted data (population, registered vehicle, index etc)
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(174, 255, 74, 0.5)",
        borderColor: "rgba(174, 255, 74, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "brown",
        pointBackgroundColor: "rgba(174, 255, 74, 0.5)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "violet",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 1
      }
    ]
  };

  return (
<>
<div
  style={{
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height:600,
    width:800,
    flexDirection: "row",
    justifyContent:"center",
    flexWrap: "wrap"

  }}
>
    <h4>Line Chart - Index per 100,000 Population</h4>
    <Line data={data} options={{responsive: true, maintainAspectRatio: true,}} />
    <h4>Bar Chart - Population</h4>
    <Bar data={data1} />
    <h4>Pie Chart - Road Deaths</h4>
    <Pie data={data3} />
    <h4>Polar Chart - Registered Vehicles</h4>
    <PolarArea data={data4} />
    <h4>Radar Chart - Slight Injury and Serious Injuries</h4>
    <Radar data={data5} />
    </div>
</>
  );
}
export default App
