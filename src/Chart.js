import React, { Component } from "react";
import { Line, Bar, Scatter, Pie, Bubble, Doughnut } from "react-chartjs-2";


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
        <h4>Scatter</h4>
        <Scatter ref="chart" data={this.props.data} />
        <h4>Pie Chart</h4>
        <Pie ref="chart" data={this.props.data} />
        <h4>Bubble Chart</h4>
        <Bubble ref="chart" data={this.props.data} />
        <h4>Doughnut</h4>
        <Doughnut ref="chart" data={this.props.data} />

      </div>
    );
  }

  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data;
  //   console.log(datasets[0].data);
  // }
}
