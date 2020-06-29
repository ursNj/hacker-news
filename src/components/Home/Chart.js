import React from 'react';
import './Home.css';
const ReactHighcharts = require('react-highcharts');

class Chart extends React.Component {

  getXvalues = (data) => {
    return data.map((item) => item.objectID);
  };

  getYvalues = (data) => {
    return data.map((item) => item.points);
  };

  render() {
    const data = this.props.data;
    const config = {

      title: {
        text: null
      },

      yAxis: {
        title: {
          text: 'Votes'
        }
      },

      xAxis: {
        categories:this.getXvalues(data),
        accessibility: {
          rangeDescription: 'ID'
        }
      },

      plotOptions: {
        series: [{
          label: {
            connectorAllowed: true
          },
          pointStart: 2010
        }]
      },

      series: [{
        name: 'ID',
        data: this.getYvalues(data)
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    };
    return (
      <div className="chart-block">
        <ReactHighcharts config={config}></ReactHighcharts>
      </div>
    )
  }
}

export default Chart;
