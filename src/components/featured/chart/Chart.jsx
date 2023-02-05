import React from 'react'
import "./Chart.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'jan',
   total:10000
  },
  {
    name: 'march',
    total:20000
  },
  {
    name: 'may',
    total:30000
  },
  {
    name: 'july',
    total:40000
  },
  {
    name: 'sep',
    total:50000
  },
  {
    name: 'nov',
    total:60000
  },
];
export default function Chart() {
  return (
    <div className='chart'>
     <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total"/>
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
