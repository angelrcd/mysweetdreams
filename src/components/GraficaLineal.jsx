import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        tickColor: '#999999',
        color: '#999999'
      },
      ticks: {
        color: 'white'
      },
      border: {
        color: '#999999'
      }
    },
    y: {
      grid: {
        tickColor: '#999999',
        color: '#999999'
      },
      ticks: {
        color: 'white'
      },
      border: {
        color: '#999999'
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'white'
      }
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Calidad del sueño 2021',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132)'
    },
    {
      label: 'Calidad del sueño 2022',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235)'
    }
  ]
}

function GraficaLineal () {
  return (
        <Line options={options} data={data} />
  )
}

export default GraficaLineal
