"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, TreePine, Zap, Users, Flame, Globe, Leaf, Lock } from "lucide-react"

const badges = [
  {
    id: 1,
    name: "Eco Pioneer",
    description: "Completed your first sustainability action",
    icon: Leaf,
    earned: true,
    rarity: "Common",
    earnedDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Tree Hugger",
    description: "Planted 10 trees through AIrth",
    icon: TreePine,
    earned: true,
    rarity: "Uncommon",
    earnedDate: "2024-02-03",
  },
  {
    id: 3,
    name: "Energy Saver",
    description: "Reduced AI energy usage by 50% in a month",
    icon: Zap,
    earned: true,
    rarity: "Rare",
    earnedDate: "2024-02-20",
  },
  {
    id: 4,
    name: "Community Leader",
    description: "Invited 25 friends to join AIrth",
    icon: Users,
    earned: false,
    rarity: "Epic",
    progress: 68,
    requirement: "Invite 25 friends (17/25)",
  },
  {
    id: 5,
    name: "Streak Master",
    description: "Maintained sustainable AI usage for 30 days",
    icon: Flame,
    earned: false,
    rarity: "Rare",
    progress: 40,
    requirement: "30-day streak (12/30)",
  },
  {
    id: 6,
    name: "Global Guardian",
    description: "Contributed to 5 different community goals",
    icon: Globe,
    earned: false,
    rarity: "Legendary",
    progress: 40,
    requirement: "Contribute to 5 goals (2/5)",
  },
]

const achievements = [
  {
    title: "Total Queries Tracked",
    current: 1247,
    next: 2500,
    reward: "Query Master Badge",
  },
  {
    title: "CO₂ Offset (kg)",
    current: 24.7,
    next: 50,
    reward: "Carbon Neutral Badge",
  },
  {
    title: "Community Contributions",
    current: 8,
    next: 15,
    reward: "Community Champion Badge",
  },
]

export function BadgeCollection() {
  return (
    <div className="space-y-6">
      {/* Badge Collection */}
      <Card className="bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-heading text-earth-charcoal flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>Badge Collection</span>
          </CardTitle>
          <CardDescription>Showcase your sustainability achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div key={badge.id} className="text-center space-y-2">
                  <div
                    className={`relative w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                      badge.earned
                        ? badge.rarity === "Legendary"
                          ? "bg-gradient-to-br from-purple-500 to-pink-500"
                          : badge.rarity === "Epic"
                            ? "bg-gradient-to-br from-purple-400 to-blue-500"
                            : badge.rarity === "Rare"
                              ? "bg-gradient-to-br from-blue-400 to-green-500"
                              : badge.rarity === "Uncommon"
                                ? "bg-gradient-to-br from-green-400 to-earth-green"
                                : "bg-gradient-to-br from-earth-green to-earth-blue"
                        : "bg-gray-200"
                    }`}
                  >
                    {badge.earned ? (
                      <Icon className="w-8 h-8 text-white" />
                    ) : (
                      <Lock className="w-8 h-8 text-gray-400" />
                    )}
                    {!badge.earned && badge.progress && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-earth-blue rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">{badge.progress}%</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${badge.earned ? "text-earth-charcoal" : "text-gray-400"}`}>
                      {badge.name}
                    </p>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        badge.rarity === "Legendary"
                          ? "bg-purple-100 text-purple-700"
                          : badge.rarity === "Epic"
                            ? "bg-blue-100 text-blue-700"
                            : badge.rarity === "Rare"
                              ? "bg-green-100 text-green-700"
                              : badge.rarity === "Uncommon"
                                ? "bg-earth-green/10 text-earth-green"
                                : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {badge.rarity}
                    </Badge>
                  </div>
                  {!badge.earned && badge.progress && <Progress value={badge.progress} className="h-1" />}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Progress Towards Next Achievements */}
      <Card className="bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-heading text-earth-charcoal">Next Achievements</CardTitle>
          <CardDescription>Keep going to unlock these rewards</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((achievement, index) => {
            const progress = (achievement.current / achievement.next) * 100
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-earth-charcoal">{achievement.title}</span>
                  <Badge variant="secondary" className="bg-earth-green/10 text-earth-green">
                    {achievement.reward}
                  </Badge>
                </div>
                <div className="flex justify-between text-sm text-earth-charcoal/70">
                  <span>
                    {achievement.current.toLocaleString()} / {achievement.next.toLocaleString()}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
