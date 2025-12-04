"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Card from "../Card";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "April",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "June",
    income: 2390,
    expense: 3800,
  },
  {
    name: "July",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 2780,
    expense: 3908,
  },
  {
    name: "Sep",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Oct",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

export default function FinanceLineChart() {
  return (
    <Card title="Finance" className="bg-white">
      <LineChart
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "70vh",
          aspectRatio: 1.618,
          padding: "40px 20px 20px 10px",
        }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: "#A5A5A5FF" }}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          width="auto"
          axisLine={false}
          tick={{ fill: "#A5A5A5FF" }}
          tickLine={false}
          tickMargin={20}
        />
        <Tooltip contentStyle={{ borderRadius: "5px", borderColor: "gray" }} />
        <Legend align="center" verticalAlign="top" />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#CFAFFFFF"
          strokeWidth={4}
          activeDot={{ r: 8 }}
          legendType="circle"
        />
        <Line
          type="monotone"
          dataKey="expense"
          stroke="#CBCACDFF"
          strokeWidth={3}
          legendType="circle"
        />
      </LineChart>
    </Card>
  );
}
