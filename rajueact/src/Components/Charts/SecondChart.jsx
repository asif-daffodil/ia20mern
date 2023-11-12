import ReactApexChart from "react-apexcharts";
const options = {
    series: [{
        name: 'Munna',
        data: [92, 88, 66, 72, 55, 80, 85]
    }, {
        name: 'Miraj',
        data: [80, 90, 46, 60, 60, 70, 75]
    }, {
        name: 'Raju',
        data: [80, 90, 40, 50, 40, 80, 70]
    }, {
        name: 'Krishno',
        data: [80, 90, 60, 70, 56, 45, 97]
    }, {
        name: 'Monzurul',
        data: [90, 95, 75, 80, 85, 46, 55]
    }, {
        name: 'Bappy',
        data: [90, 80, 70, 60, 70, 80, 50]
    }, {
        name: 'Prince',
        data: [70, 80, 60, 70, 75, 55, 60]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Student\'s Result',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        }
    },
}


const SecondChart = () => {
    return (
        <div>
            <ReactApexChart options={options.options} series={options.series} type={options.options.chart.type} className="container mx-auto" />
        </div>
    );
};

export default SecondChart;