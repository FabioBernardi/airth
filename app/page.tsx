"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Zap, Trophy, TreePine, Droplets, Recycle, TrendingUp, Globe, Sparkles } from "lucide-react"
import { EnergyChart } from "./components/energy-chart"
import { CommunityGoals } from "./components/community-goals"
import { SustainabilityActions } from "./components/sustainability-actions"
import { UserStats } from "./components/user-stats"
import { BadgeCollection } from "./components/badge-collection"


export default function AIrthDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-cloud via-earth-sand/20 to-earth-cloud">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-earth-green to-earth-blue rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-earth-charcoal">AIrth</h1>
                <p className="text-sm text-earth-charcoal/70">AI for a regenerative future</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-earth-green/10 text-earth-green border-earth-green/20">
                <Sparkles className="w-3 h-3 mr-1" />
                Level 7 Eco-Pioneer
              </Badge>
              <div className="w-8 h-8 bg-earth-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-earth-charcoal mb-2">Welcome back, Alex! 🌱</h2>
          <p className="text-earth-charcoal/70 font-body">
            You're part of a growing movement — <span className="font-semibold text-earth-green">1,204,912</span>{" "}
            queries tracked globally
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-earth-green/20 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-earth-charcoal/70">Today's Queries</p>
                  <p className="text-2xl font-bold text-earth-charcoal">47</p>
                  <p className="text-xs text-earth-green">+12% from yesterday</p>
                </div>
                <div className="w-12 h-12 bg-earth-green/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-earth-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-earth-blue/20 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-earth-charcoal/70">CO₂ Offset</p>
                  <p className="text-2xl font-bold text-earth-charcoal">2.4kg</p>
                  <p className="text-xs text-earth-blue">This month</p>
                </div>
                <div className="w-12 h-12 bg-earth-blue/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-earth-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-earth-green/20 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-earth-charcoal/70">Trees Planted</p>
                  <p className="text-2xl font-bold text-earth-charcoal">12</p>
                  <p className="text-xs text-earth-green">Lifetime impact</p>
                </div>
                <div className="w-12 h-12 bg-earth-green/10 rounded-full flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-earth-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-earth-blue/20 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-earth-charcoal/70">Community Rank</p>
                  <p className="text-2xl font-bold text-earth-charcoal">#247</p>
                  <p className="text-xs text-earth-blue">Top 5% globally</p>
                </div>
                <div className="w-12 h-12 bg-earth-blue/10 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-earth-blue" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-earth-green data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="energy" className="data-[state=active]:bg-earth-green data-[state=active]:text-white">
              Energy
            </TabsTrigger>
            <TabsTrigger value="actions" className="data-[state=active]:bg-earth-green data-[state=active]:text-white">
              Actions
            </TabsTrigger>
            <TabsTrigger
              value="community"
              className="data-[state=active]:bg-earth-green data-[state=active]:text-white"
            >
              Community
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-earth-green data-[state=active]:text-white"
            >
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <EnergyChart />
              <UserStats />
            </div>
            <CommunityGoals />
          </TabsContent>

          <TabsContent value="energy" className="space-y-6">
            <EnergyChart />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-earth-charcoal">Energy Breakdown</CardTitle>
                  <CardDescription>Your AI usage by model type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">GPT-4</span>
                      <span className="text-sm text-earth-charcoal/70">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Claude</span>
                      <span className="text-sm text-earth-charcoal/70">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Gemini</span>
                      <span className="text-sm text-earth-charcoal/70">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-earth-charcoal">Carbon Footprint</CardTitle>
                  <CardDescription>Monthly CO₂ emissions from AI usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-earth-green">4.2kg</div>
                    <p className="text-sm text-earth-charcoal/70">CO₂ this month</p>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-earth-green" />
                      <span className="text-earth-green">15% reduction from last month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="actions" className="space-y-6">
            <SustainabilityActions />
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <CommunityGoals />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-earth-charcoal">Global Impact</CardTitle>
                  <CardDescription>Collective achievements this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TreePine className="w-5 h-5 text-earth-green" />
                        <span>Trees Planted</span>
                      </div>
                      <span className="font-bold text-earth-green">15,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Droplets className="w-5 h-5 text-earth-blue" />
                        <span>Clean Water (L)</span>
                      </div>
                      <span className="font-bold text-earth-blue">89,432</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Recycle className="w-5 h-5 text-earth-green" />
                        <span>Waste Recycled (kg)</span>
                      </div>
                      <span className="font-bold text-earth-green">2,156</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-earth-charcoal">Leaderboard</CardTitle>
                  <CardDescription>Top eco-pioneers this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Sarah Chen", points: 2847, rank: 1 },
                      { name: "Marcus Johnson", points: 2654, rank: 2 },
                      { name: "Elena Rodriguez", points: 2432, rank: 3 },
                      { name: "You (Alex)", points: 2247, rank: 4 },
                    ].map((user) => (
                      <div key={user.rank} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              user.rank === 1
                                ? "bg-yellow-500 text-white"
                                : user.rank === 2
                                  ? "bg-gray-400 text-white"
                                  : user.rank === 3
                                    ? "bg-amber-600 text-white"
                                    : "bg-earth-green/20 text-earth-green"
                            }`}
                          >
                            {user.rank}
                          </div>
                          <span className={user.name.includes("You") ? "font-bold" : ""}>{user.name}</span>
                        </div>
                        <span className="text-sm font-medium">{user.points.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <BadgeCollection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
