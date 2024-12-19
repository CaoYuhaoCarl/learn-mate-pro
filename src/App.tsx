import { useAuth } from '@/hooks/use-auth'
import { AuthCard } from '@/components/auth/auth-card'
import { Button } from './components/ui/button'
import { DashboardLayout } from './components/dashboard/dashboard-layout'
import { LandingPage } from './components/landing/landing-page'
import { useState } from 'react'

export default function App() {
  const { user, signOut } = useAuth()
  const [showAuth, setShowAuth] = useState(false)

  if (!user) {
    return showAuth ? (
      <div className="min-h-screen bg-background/50 flex items-center justify-center p-4">
        <AuthCard onBack={() => setShowAuth(false)} />
      </div>
    ) : (
      <LandingPage onGetStarted={() => setShowAuth(true)} />
    )
  }

  return (
    <div className="min-h-screen bg-background/50">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold tracking-tight">LearnMatePro</span>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
      </header>
      <DashboardLayout />
    </div>
  )
}