import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
)

const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'calidad del sueño',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 }))
    },
    {
      type: 'bar',
      label: 'Horas dormidas',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 12 })),
      borderColor: 'white',
      borderWidth: 2
    },
    {
      type: 'bar',
      label: 'Número de veces despertado',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 }))
    }
  ]
}
export const options = {
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'white'
      }
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

function GraficaTest () {
  return (
        <Chart type='bar' data={data} options={options} />
  )
}

export default GraficaTest
