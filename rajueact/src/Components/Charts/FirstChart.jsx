import ReactApexChart from "react-apexcharts";


const options = {
  series: [{
    data: [{
      x: 'Munna',
      y: 10
    }, {
      x: 'Miraj',
      y: 18
    }, {
      x: 'Raju',
      y: 13
    }, {
      x: 'Krishno',
      y: 13
    }, {
      x: 'Monzurul',
      y: 13
    }, {
      x: 'Bappy',
      y: 13
    }, {
      x: 'Prince',
      y: 13
    }]
  }]
}

const FirstChart = () => {
    return (
      <ReactApexChart options={options} series={options.series} type="bar" className="container mx-auto" />
    );
};

export default FirstChart;