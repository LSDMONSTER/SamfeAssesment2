import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from 'recharts';



const Chart = () => {
  const data = [
    { name: 'Jan', EUR: 1.12, GBP: 0.86, YEN: 0.45, USD: 1.22 },
    { name: 'Feb', EUR: 1.20, GBP: 0.89, YEN: 0.40, USD: 1.25 },
    { name: 'Mar', EUR: 1.30, GBP: 0.92, YEN: 0.65, USD: 1.28 },
    { name: 'Apr', EUR: 1.40, GBP: 0.94, YEN: 0.70, USD: 1.30 },
    { name: 'May', EUR: 1.22, GBP: 0.96, YEN: 0.80, USD: 1.32 },
    { name: 'Jun', EUR: 1.24, GBP: 0.98, YEN: 0.90, USD: 1.34 },

];

  return (
    <ResponsiveContainer width="100%" height="100%">
    <AreaChart width={700} height={450} data={data} >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="EUR" stroke="#8884d8" />
      <Line type="monotone" dataKey="GBP" stroke="#068FFF" />
      <Line type="monotone" dataKey="YEN" stroke="#FF6666" />
      <Line type="monotone" dataKey="USD" stroke="#82ca9d" />
    </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
