"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, TreePine, Globe, Target } from "lucide-react"

const communityGoals = [
  {
    id: 1,
    title: "Global Forest Initiative",
    description: "Plant 1 million trees worldwide by end of year",
    progress: 67,
    current: 670000,
    target: 1000000,
    participants: 45230,
    timeLeft: "4 months left",
    icon: TreePine,
    color: "earth-green",
  },
  {
    id: 2,
    title: "Ocean Cleanup Challenge",
    description: "Remove 100 tons of plastic from oceans this quarter",
    progress: 43,
    current: 43,
    target: 100,
    participants: 28940,
    timeLeft: "6 weeks left",
    icon: Globe,
    color: "earth-blue",
  },
]

export default function ComponentName() {
  return (
    <Card className="bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-heading text-earth-charcoal flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span>Community Goals</span>
        </CardTitle>
        <CardDescription>Join thousands of eco-pioneers making a global impact</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {communityGoals.map((goal) => {
          const Icon = goal.icon
          return (
            <div key={goal.id} className="space-y-4 p-4 border border-earth-green/20 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-${goal.color}/10 rounded-full flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 text-${goal.color}`} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-earth-charcoal">{goal.title}</h4>
                    <p className="text-sm text-earth-charcoal/70">{goal.description}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-earth-green/10 text-earth-green">
                  {goal.timeLeft}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-earth-charcoal/70">
                    {goal.current.toLocaleString()} / {goal.target.toLocaleString()}
                    {goal.id === 1 ? " trees" : " tons"}
                  </span>
                  <span className="font-medium text-earth-charcoal">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-3" />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-earth-charcoal/70">
                  <Users className="w-4 h-4" />
                  <span>{goal.participants.toLocaleString()} participants</span>
                </div>
                <div className="flex items-center space-x-2 text-earth-green">
                  <Target className="w-4 h-4" />
                  <span>You contributed 2.3%</span>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
