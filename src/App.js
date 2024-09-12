import './App.css';
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import Table from './table';
import { useEffect, useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([])
  const [categorizedData , setCategorizedData] = useState({})
  const [apiData, setData] = useState(null);

 useEffect(() => {
    fetch('http://localhost:10000/')
      .then(response => response.json())
      .then(apiData => 
        {
          setData(apiData);
          //categorizing the data based on status
            const filteredData = apiData.data.reduce((acc, item) => {
              if (!acc[item.status]) {
                acc[item.status] = [];
              }
              acc[item.status].push(item);
              return acc;
            }, {});
            setCategorizedData(filteredData);
            console.log("categorizedData", categorizedData)
        }) 
      .catch(error => console.error('There was an error!', error));
  }, []);


  // updating the pie chart with the length of the category
  const dataSetsData = [];
  Object.keys(categorizedData).forEach(ele => {
    dataSetsData.push(categorizedData[ele].length);
  });

  //options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
    onHover: (event, chartElement, chart) => {
      chartElement.length > 0 ? chart.canvas.style.cursor = 'pointer' : chart.canvas.style.cursor = 'default';
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index; // Index of the clicked element
        setTableData(Object.values(categorizedData)[index]);
      }
    },
  };

  // pie chart data
  const data = {
    labels:Object.keys(categorizedData).map(item=> statusCovertion(item)),
    datasets: [
      {
        data: dataSetsData,
         backgroundColor: [
          'rgb(50, 168, 131)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
          'rgb(200, 205, 80)'
        ],
        hoverOffset: 4
      }
    ]
  }

  function statusCovertion(status) {
    const str = status.replace(/_/g, ' ')
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const columnNames = ['Name', 'Address', 'City', 'Country', 'Status', 'Carrier'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>ABC - Delivery Statistics</h1>
      </header>
      <div className="pie-chart">
        <Pie data={data} options={options}></Pie>
      </div>
      {tableData.length > 0 && <div class="table">
        <Table data={tableData} columnNames={columnNames} />
      </div>}
    </div>
  );
}

export default App;
