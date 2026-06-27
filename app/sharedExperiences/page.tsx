'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import QuizOption from '../components/QuizOption'

const OPTIONS = [
  { emoji: '✈️', text: 'Travelling' },
  { emoji: '☕', text: 'Quiet moments together' },
  { emoji: '🏆', text: 'Celebrating milestones' },
  { emoji: '🎨', text: 'Being creative together' },
  { emoji: '👨‍👩‍👧‍👦', text: 'Spending time with family' },
]

export default function SharedExperiences() {
  const router = useRouter()

  return (
    <QuizChrome step={15}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        Which shared experiences do you value most?
      </h2>
      {OPTIONS.map(opt => (
        <QuizOption key={opt.text} emoji={opt.emoji} text={opt.text} onClick={() => router.push('/email')} />
      ))}
    </QuizChrome>
  )
}
