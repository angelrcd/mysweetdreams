import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'white'
      }
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  },
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
  }
}

const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

export const data = {
  labels,
  datasets: [
    {
      label: 'Horas dormidas',
      data: labels.map(() => faker.datatype.number({ min: 6, max: 10 })),
      backgroundColor: 'rgba(255, 99, 132)'
    },
    {
      label: 'Número de veces despertado',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2 })),
      backgroundColor: 'rgba(53, 162, 235)'
    }
  ]
}

function Grafica () {
  return <Bar options={options} data={data} />
}

export default Grafica
