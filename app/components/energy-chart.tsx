"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const energyData = [
  { day: "Mon", energy: 2.4, co2: 0.8 },
  { day: "Tue", energy: 3.1, co2: 1.0 },
  { day: "Wed", energy: 2.8, co2: 0.9 },
  { day: "Thu", energy: 4.2, co2: 1.4 },
  { day: "Fri", energy: 3.6, co2: 1.2 },
  { day: "Sat", energy: 1.9, co2: 0.6 },
  { day: "Sun", energy: 2.2, co2: 0.7 },
]

export function EnergyChart() {
  return (
    <Card className="bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-heading text-earth-charcoal">Energy Usage Trends</CardTitle>
        <CardDescription>Daily energy consumption and CO₂ emissions from AI usage</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            energy: {
              label: "Energy (kWh)",
              color: "#388E3C",
            },
            co2: {
              label: "CO₂ (kg)",
              color: "#0288D1",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={energyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#388E3C20" />
              <XAxis dataKey="day" stroke="#263238" />
              <YAxis stroke="#263238" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="energy"
                stroke="var(--color-energy)"
                strokeWidth={3}
                dot={{ fill: "var(--color-energy)", strokeWidth: 2, r: 4 }}
                name="Energy (kWh)"
              />
              <Line
                type="monotone"
                dataKey="co2"
                stroke="var(--color-co2)"
                strokeWidth={3}
                dot={{ fill: "var(--color-co2)", strokeWidth: 2, r: 4 }}
                name="CO₂ (kg)"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
