"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Zap } from "lucide-react"

export function UserStats() {
  return (
    <Card className="bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-heading text-earth-charcoal">Your Impact Journey</CardTitle>
        <CardDescription>Track your progress towards sustainability goals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Monthly Goal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-earth-green" />
              <span className="text-sm font-medium">Monthly CO₂ Reduction Goal</span>
            </div>
            <Badge variant="secondary" className="bg-earth-green/10 text-earth-green">
              78% Complete
            </Badge>
          </div>
          <Progress value={78} className="h-3" />
          <p className="text-xs text-earth-charcoal/70">7.8kg reduced of 10kg target</p>
        </div>

        {/* Efficiency Score */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-earth-blue" />
              <span className="text-sm font-medium">AI Efficiency Score</span>
            </div>
            <Badge variant="secondary" className="bg-earth-blue/10 text-earth-blue">
              Excellent
            </Badge>
          </div>
          <Progress value={92} className="h-3" />
          <p className="text-xs text-earth-charcoal/70">92/100 - You're using AI very efficiently!</p>
        </div>

        {/* Streak */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-earth-green" />
              <span className="text-sm font-medium">Sustainable Usage Streak</span>
            </div>
            <Badge variant="secondary" className="bg-earth-green/10 text-earth-green">
              12 Days
            </Badge>
          </div>
          <p className="text-xs text-earth-charcoal/70">Keep it up! Your longest streak was 18 days.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-earth-green/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-earth-green">156</div>
            <div className="text-xs text-earth-charcoal/70">Queries This Week</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-earth-blue">4.2kg</div>
            <div className="text-xs text-earth-charcoal/70">CO₂ Saved</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
