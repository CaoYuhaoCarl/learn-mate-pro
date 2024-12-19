import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Headphones, BookOpen, PlayCircle } from 'lucide-react'

export function LearningMaterials() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <Headphones className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Listening Materials</CardTitle>
          <CardDescription>Practice with audio content</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>• Daily Conversations</li>
            <li>• News Reports</li>
            <li>• Podcasts</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <BookOpen className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Reading Materials</CardTitle>
          <CardDescription>Improve comprehension</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>• Articles</li>
            <li>• Stories</li>
            <li>• Academic Texts</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <PlayCircle className="h-8 w-8 text-primary mb-2" />
          <CardTitle>Video Content</CardTitle>
          <CardDescription>Learn through visual aids</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>• Video Lessons</li>
            <li>• Movie Clips</li>
            <li>• Tutorials</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}