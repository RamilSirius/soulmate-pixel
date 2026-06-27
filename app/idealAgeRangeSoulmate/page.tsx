'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import QuizOption from '../components/QuizOption'

const OPTIONS = [
  { emoji: '🌱', text: '18-25' },
  { emoji: '✨', text: '26-35' },
  { emoji: '🌟', text: '36-45' },
  { emoji: '🌙', text: '46+' },
]

export default function IdealAgeRangeSoulmate() {
  const router = useRouter()

  return (
    <QuizChrome step={3}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        What age do you think your soulmate should be?
      </h2>
      {OPTIONS.map(opt => (
        <QuizOption key={opt.text} emoji={opt.emoji} text={opt.text} onClick={() => router.push('/preferredEthnicBackgroundSketch')} />
      ))}
    </QuizChrome>
  )
}
