import React from "react";

import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
      } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

      function Rebars(){
        const options = {
                plugins: {
                  
                  title: {
                    display: false,
                    text: 'Chart.js Bar Chart - Stacked',
                  },
                },
                responsive: true,
                interaction: {
                  mode: 'index',
                  intersect: false,
                },
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true,
                  },
                },
              };
        
             const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
             const data = {
              labels,
              datasets: [
                {
                  label: 'Dataset 1',
                  data: labels.map(() => faker.datatype.number({ min: -500, max: 500 })),
                  backgroundColor: '#97211D;',
                  stack: 'Stack 1',
                },
                {
                  label: 'Dataset 2',
                  data: labels.map(() => faker.datatype.number({ min: -500, max: 500 })),
                  backgroundColor: '#ffff',
                  stack: 'Stack 2',
                },
                {
                  label: 'Dataset 3',
                  data: labels.map(() => faker.datatype.number({ min: -500, max: 500 })),
                  backgroundColor: '#3C3C3C;',
                  stack: 'Stack 1',
                },
              ],
            }
        return (
                <div className="bar__chart">
                         <Bar options={options} data={data} />;
                </div>
        )
      }
      export default Rebars;