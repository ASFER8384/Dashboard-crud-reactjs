import React from 'react'
import Chart from '../featured/chart/Chart'
import Featured from '../featured/featured/Featured'
import "./Charts.css"
import {Bar,Legend,BarChart, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chartscomp() {


  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]


  return (
    <div className='chartscomp'>
      <h1>Chart</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe, pariatur provident odio mollitia perspiciatis in nulla nobis praesentium deleniti, consequatur voluptatibus et itaque quis! Harum fugit unde tempore iste!</p>
      <div className="featured">
        <Chart/>
        <Featured/>
      </div>
    
    <div className="charts-body">
    <BarChart width={600} height={350} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
    </div>
    </div>
  )
}
