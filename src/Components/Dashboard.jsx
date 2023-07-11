import './Dashboard.css';
import Cards from './Cards';
import { useEffect, useState } from 'react';
import LeftNav from './LeftNav';
import notificationIcon from '../assets/notificationIcon.svg';
import image from '../assets/image.png';
import searchIcon from '../assets/SearchIcon.svg';
import BottomCards from './BottomCards';
import LineCharts from './LineCharts';

export const Dashboard = () => {
  const [lineChartData, setLineChartData] = useState({
    datasets: [],
  });

  const [pieChartData, setPieChartData] = useState({
    datasets: [],
  })

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      const firstTenTodos = result.products.slice(0, 10);

      setLineChartData({
        labels: firstTenTodos.map((data) => (data.id)),
        datasets: [{
          label: "Discount Percentage",
          data: firstTenTodos.map((data) => (data.discountPercentage)),
          borderColor: ["#E9A0A0"],
          tension: 0.4,
        },
        {
          label: "Stock",
          data: firstTenTodos.map((data) => (data.stock)),
          borderColor: ["#9BDD7C"],
          tension: 0.4,
        },
        ],
      })

      setPieChartData({
        labels: [],
        datasets: [{
          label: "Products",
          data: firstTenTodos.map((data) => (data.price, data.discountPercentage, data.rating)),
          backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
        }]
      })
    }
    catch (err) {
      console.error(err);
    }

  }

  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          className: 'custom-legend-label',
          font: {
            size: 11,
          },
          backgroundColor: 'red',
        },
        position: 'top',
        align: 'end',

      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: 'Product Discounts',
        align: 'start',
        padding: {
          left: 0,
        },
        font: {
          size: 16,
          weight: 'bold',
          color: "#000",
          family: "Montserrat",
          style: "normal",
        },
      },
      subtitle: {
        display: true,
        text: 'May - June 2021',
        align: 'start',
        padding: {
          top: 5,
          bottom: 5
        },
        font: {
          size: 12,
          weight: 'normal',
          color: "#858585",
          family: "Montserrat",
          style: "normal",
        }
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 10,
        left: 20,
        right: 20,
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    width: 500,
    height: 120,
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <main id='dashboard'>
      <LeftNav />
      <div id='right_side'>
        <section id='right_section'>
          <header>
            <div id='dashboardText'>
              <h2>Dashboard</h2>
            </div>
            <div id='left_header_part'>
              <div id='search'>
                <div id='searchBar' >Search... <img src={searchIcon} /></div>
              </div>
              <img src={notificationIcon} />
              <img src={image} />
            </div>
          </header>
          <Cards />
          <div className='lineChartDiv'>
            <div id="lineChart" >
              <LineCharts reqData={lineChartData} options={options} />
            </div>
          </div>
          <BottomCards pieChartData={pieChartData} />
        </section>
      </div>
    </main>
  )
}

export default Dashboard;