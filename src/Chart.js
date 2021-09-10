import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: "blue",
//       borderColor: "red",
//       borderCapStyle: "butt",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: "brown",
//       pointBackgroundColor: "yellow",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: "violet",
//       pointHoverBorderColor: "green",
//       pointHoverBorderWidth: 5,
//       pointRadius: 3,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

export default class Chart extends Component {
  render() {
    return (
      <div
        style={{
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          height:700,
          width:800,
          flexDirection: "row",
          justifyContent:"center",
          flexWrap: "wrap"

        }}
      >
        <h4>Bar Chart</h4>
        <Bar ref="chart" data={this.props.data} />
        <h4>Line Chart</h4>
        <Line ref="chart" data={this.props.data} />
      </div>
    );
  }

  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data;
  //   console.log(datasets[0].data);
  // }
}
