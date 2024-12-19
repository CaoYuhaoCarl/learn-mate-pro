import { Headphones, BookOpen, PlayCircle, Brain } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LearningMaterials } from './learning-materials'
import { Practice } from './practice'
import { Progress } from './progress'

export function DashboardLayout() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Tabs defaultValue="materials" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:max-w-[400px]">
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>
        
        <TabsContent value="materials" className="space-y-4">
          <LearningMaterials />
        </TabsContent>
        
        <TabsContent value="practice" className="space-y-4">
          <Practice />
        </TabsContent>
        
        <TabsContent value="progress" className="space-y-4">
          <Progress />
        </TabsContent>
      </Tabs>
    </div>
  )
}