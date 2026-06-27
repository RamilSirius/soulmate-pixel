'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import QuizOption from '../components/QuizOption'

const OPTIONS = [
  { emoji: '😢', text: 'Lack of trust' },
  { emoji: '🗣️', text: 'Poor communication' },
  { emoji: '🌵', text: 'Growing apart' },
  { emoji: '🎯', text: 'Different life goals' },
  { emoji: '💔', text: 'Infidelity' },
  { emoji: '😔', text: 'Selfishness' },
  { emoji: '❓', text: 'Other' },
]

export default function WhyDidntWorkOut() {
  const router = useRouter()

  return (
    <QuizChrome step={9}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        What&apos;s the biggest reason your past relationships didn&apos;t work out?
      </h2>
      {OPTIONS.map(opt => (
        <QuizOption key={opt.text} emoji={opt.emoji} text={opt.text} onClick={() => router.push('/goal')} />
      ))}
    </QuizChrome>
  )
}
