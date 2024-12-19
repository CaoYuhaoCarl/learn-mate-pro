import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Practice() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Vocabulary Challenge</CardTitle>
          <CardDescription>Test your word knowledge</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Practice with flashcards and quizzes to expand your vocabulary.
          </p>
          <Button>Start Challenge</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grammar Practice</CardTitle>
          <CardDescription>Improve your language structure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Interactive exercises to master English grammar rules.
          </p>
          <Button>Begin Practice</Button>
        </CardContent>
      </Card>
    </div>
  )
}