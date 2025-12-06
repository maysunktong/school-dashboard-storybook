"use client";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Card from "../Card";

const data = [
  {
    name: "Mon",
    present: 4000,
    absent: 2400,
  },
  {
    name: "Tue",
    present: 3000,
    absent: 1398,
  },
  {
    name: "Wed",
    present: 2000,
    absent: 9800,
  },
  {
    name: "Thurs",
    present: 2780,
    absent: 3908,
  },
  {
    name: "Fri",
    present: 1890,
    absent: 4800,
  },
];

export default function AttendanceBarChart() {
  return (
    <Card title="Class Attendance" className="w-full h-full bg-white">
      <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        barSize={20}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: "#A5A5A5FF" }}
          tickLine={false}
        />
        <YAxis
          width="auto"
          axisLine={false}
          tick={{ fill: "#A5A5A5FF" }}
          tickLine={false}
        />
        <Tooltip contentStyle={{ borderRadius: "5px", borderColor: "gray" }} />
        <Legend
          align="left"
          verticalAlign="top"
          wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          order="descending"
        />
        <Bar
          dataKey="present"
          fill="#77A7FFFF"
          legendType="circle"
          radius={[10, 10, 0, 0]}
          name="present"
        />
        <Bar
          dataKey="absent"
          fill="#FCEF7FFF"
          legendType="circle"
          radius={[10, 10, 0, 0]}
          name="absent"
        />
      </BarChart>
    </Card>
  );
}
