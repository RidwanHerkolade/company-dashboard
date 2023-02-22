import React, { useState} from "react";
import headCount from "./headCount";
import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Filler,
     Legend,
   } from 'chart.js';
 import { Line } from "react-chartjs-2";
 import { Bubble } from 'react-chartjs-2';
 import { faker } from '@faker-js/faker';
//  import Rebars from "./Rebars";
 import ImgData from "./ImgData";


   ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

   

function DashContent(){
  // REACT CHART FOR LINE CHART
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data = {
    labels,
    datasets: [
      {
        fill: false,
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 12, max: 500 })),
        borderColor: '#97211D',
        backgroundColor: '#ffff',
        borderWidth: 2
      },
    ],
  };
  // REACT RECHART FOR BUBBLE CHART


  const option = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  const datas = {
    datasets: [
      {
        label: 'Red dataset',
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
        })),
        backgroundColor:  '#97211D',
        borderWidth: 0.1

      },
      {
        label: 'Blue dataset',
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
        })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 0.1,

      },
    ],
  };
  

     const [search, setSearch] = useState({
          searchInput: ""
     });
     console.log(search)
     function handleChange(event){
          setSearch(event.target.value);
     };
     return (
          
          <div className="board__div">
          <div className="board__divs">
                <div className="board__header">
                      <div className="greetings">DASHBOARD</div>
                      <div className="search">
                          <div className="label">
                                  <label htmlFor="search">search</label>
                                  <input type="text" name="searchInput" onChange={handleChange} />
                                  <img src="./img/Search.png" alt=""/>
                          </div>
                          <img src="./img/Logout.png" alt=""/>
                         
                      
                      </div>
                  
                 </div>
                 <div className="counter__grid">
                      {headCount.map(head => {
                          return [
                               <div className="counter__grids">
                                     <div className="count">
                                          <div className="count__img">
                                               <img src={head.img} alt=""/>
                                
                                          </div>
                                          <div className="count__num">
                                               <h2>{head.name}</h2>
                                               <h3>{head.number}</h3>
                                
                                          </div>
                           
                                     </div>
                      
                                </div>
                          ]
                               
                          
                      })}
                 
                 </div>
                 <div className="line__chart">
                    <div className="line__charts">
                          <Line data={data} options={options}  className="line"/>;
                    </div>
                    <div className="pie__chart">
                        <Bubble options={option} data={datas} />;

                    </div>
                   
                     
                 </div>
                 <div className="bar__chart">
                 <h2 className="employee">present employee</h2>
                     <div className="img__lists">
                     {ImgData.map((data) => {
                      return [
                         <div className="img__list">
                           
                              <img src={data.images} alt="img__list"/>
                         </div>
                      ]
                    })}

                     </div>
                    
                </div>
          
          </div> 
      
      </div>
     )
}
export default DashContent;