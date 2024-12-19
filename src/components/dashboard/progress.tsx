import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress as ProgressIndicator } from '@/components/ui/progress'

export function Progress() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Learning Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Vocabulary</span>
              <span>75%</span>
            </div>
            <ProgressIndicator value={75} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Grammar</span>
              <span>60%</span>
            </div>
            <ProgressIndicator value={60} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Listening</span>
              <span>85%</span>
            </div>
            <ProgressIndicator value={85} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}