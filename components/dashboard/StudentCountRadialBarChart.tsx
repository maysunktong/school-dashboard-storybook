"use client";

import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import Card from "../Card";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#fff",
  },
  {
    name: "Girls",
    count: 55,
    fill: "#F2BEE1FF",
  },
  {
    name: "Boys",
    count: 45,
    fill: "#A2D7FDFF",
  },
];

export default function StudentCountRadialBarChart() {
  return (
    <Card title="Students" className="w-full h-full bg-white">
      <div className="relative w-full">
        <RadialBarChart
          className="w-full h-full"
          height={300}
          responsive
          cx="50%"
          cy="50%"
          barSize={32}
          data={data}
          innerRadius="40%"
          outerRadius="100%"
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="count"
          />
        </RadialBarChart>
        <Image
          width={48}
          height={48}
          src="/images/man-woman.webp"
          alt="man woman icon"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div>buttons</div>
    </Card>
  );
}
