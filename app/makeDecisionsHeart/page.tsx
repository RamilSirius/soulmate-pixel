'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import QuizOption from '../components/QuizOption'

const OPTIONS = [
  { emoji: '❤️', text: 'Emotions' },
  { emoji: '🔍', text: 'Logic' },
  { emoji: '🤔', text: 'It depends' },
]

export default function MakeDecisionsHeart() {
  const router = useRouter()

  return (
    <QuizChrome step={8}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        Are you mostly driven by emotions or logic?
      </h2>
      {OPTIONS.map(opt => (
        <QuizOption key={opt.text} emoji={opt.emoji} text={opt.text} onClick={() => router.push('/zodiacInfo')} />
      ))}
    </QuizChrome>
  )
}
