'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import UserStats from '../components/user-stats'
import EnergyChart from '../components/energy-chart'
import CommunityGoals from '../components/community-goals'
import SustainabilityActions from '../components/sustainability-actions'
import BadgeCollection from '../components/badge-collection'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (data?.user) setUser(data.user)
      else window.location.href = '/login'
    }

    fetchUser()
  }, [])

  if (!user) return <p className="p-6">Loading...</p>

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
      <UserStats />
      <EnergyChart />
      <CommunityGoals />
      <SustainabilityActions />
      <BadgeCollection />
    </div>
  )
}
