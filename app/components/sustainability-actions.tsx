"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TreePine, Droplets, Recycle, Leaf, CheckCircle, Clock } from "lucide-react"

const actions = [
  {
    id: 1,
    title: "Plant 5 Trees",
    description: "Offset your weekly AI usage by planting trees in Madagascar",
    icon: TreePine,
    cost: "12 EcoPoints",
    impact: "Absorbs 125kg CO₂/year",
    status: "available",
    progress: 0,
    category: "Carbon Offset",
  },
  {
    id: 2,
    title: "Clean Water Access",
    description: "Provide 1 month of clean water to a family in need",
    icon: Droplets,
    cost: "8 EcoPoints",
    impact: "1,200L clean water",
    status: "available",
    progress: 0,
    category: "Water",
  },
  {
    id: 3,
    title: "Ocean Plastic Cleanup",
    description: "Remove 10kg of plastic waste from ocean waters",
    icon: Recycle,
    cost: "15 EcoPoints",
    impact: "10kg plastic removed",
    status: "in_progress",
    progress: 65,
    category: "Ocean",
  },
  {
    id: 4,
    title: "Renewable Energy",
    description: "Fund 1 hour of renewable energy for your AI usage",
    icon: Leaf,
    cost: "5 EcoPoints",
    impact: "1kWh green energy",
    status: "completed",
    progress: 100,
    category: "Energy",
  },
]

export function SustainabilityActions() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-earth-green to-earth-blue text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Your EcoPoints Balance</h3>
              <p className="text-white/90">Use points to make a real-world impact</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">47</div>
              <div className="text-sm text-white/90">EcoPoints Available</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <Card key={action.id} className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-earth-green/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-earth-green" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-earth-charcoal">{action.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {action.category}
                      </Badge>
                    </div>
                  </div>
                  {action.status === "completed" && <CheckCircle className="w-5 h-5 text-earth-green" />}
                  {action.status === "in_progress" && <Clock className="w-5 h-5 text-earth-blue" />}
                </div>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-earth-charcoal/70">Cost: {action.cost}</span>
                  <span className="text-earth-green font-medium">{action.impact}</span>
                </div>

                {action.status === "in_progress" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{action.progress}%</span>
                    </div>
                    <Progress value={action.progress} className="h-2" />
                  </div>
                )}

                <Button
                  className={`w-full ${
                    action.status === "completed"
                      ? "bg-earth-green/20 text-earth-green hover:bg-earth-green/30"
                      : action.status === "in_progress"
                        ? "bg-earth-blue text-white hover:bg-earth-blue/90"
                        : "bg-earth-green text-white hover:bg-earth-green/90"
                  }`}
                  disabled={action.status === "completed"}
                >
                  {action.status === "completed" && "Completed ✓"}
                  {action.status === "in_progress" && "In Progress..."}
                  {action.status === "available" && "Take Action"}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Automated Actions */}
      <Card className="bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-heading text-earth-charcoal">Automated Sustainability</CardTitle>
          <CardDescription>Set up automatic actions based on your AI usage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-earth-green/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <TreePine className="w-5 h-5 text-earth-green" />
              <div>
                <p className="font-medium">Auto-Plant Trees</p>
                <p className="text-sm text-earth-charcoal/70">Plant 1 tree for every 50 AI queries</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white"
            >
              Enable
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-earth-blue/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <Leaf className="w-5 h-5 text-earth-blue" />
              <div>
                <p className="font-medium">Green Energy Offset</p>
                <p className="text-sm text-earth-charcoal/70">Automatically offset energy usage weekly</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-earth-blue text-earth-blue hover:bg-earth-blue hover:text-white"
            >
              Enable
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
