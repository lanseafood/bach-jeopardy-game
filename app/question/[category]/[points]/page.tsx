import QuestionClient from './question-client'
import { getAllQuestions } from '@/lib/game-config'

const questions: Record<string, Record<number, { question: string; answer: string | { type: string; content: string } }>> = getAllQuestions()

export default function QuestionPage({ params }: { params: Promise<{ category: string; points: string }> }) {
  return <QuestionClient params={params} questions={questions} />
}

export function generateStaticParams() {
  const staticParams: { category: string; points: string }[] = []

  Object.keys(questions).forEach((category) => {
    Object.keys(questions[category]).forEach((points) => {
      staticParams.push({
        category: encodeURIComponent(category),
        points: points,
      })
    })
  })

  return staticParams
}