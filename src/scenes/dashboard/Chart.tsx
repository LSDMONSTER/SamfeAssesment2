import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer  } from 'recharts';

type ChartProps = {
  data: { name: string; EUR: number; GBP: number; YEN: number; USD: number }[];
};

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    
    <LineChart width={700} height={450} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="EUR" stroke="#8884d8" />
      <Line type="monotone" dataKey="GBP" stroke="#068FFF" />
      <Line type="monotone" dataKey="YEN" stroke="#FF6666" />
      <Line type="monotone" dataKey="USD" stroke="#82ca9d" />
    </LineChart>
    
  );
};

export default Chart;
