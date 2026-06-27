'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import QuizOption from '../components/QuizOption'

const OPTIONS = [
  { emoji: '🌍', text: 'African' },
  { emoji: '🌏', text: 'Asian' },
  { emoji: '🌎', text: 'Caucasian' },
  { emoji: '🌺', text: 'Hispanic / Latino' },
  { emoji: '🌐', text: 'Mixed / Other' },
]

export default function PreferredEthnicBackgroundSketch() {
  const router = useRouter()

  return (
    <QuizChrome step={4}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        What ethnic background do you prefer for your soulmate?
      </h2>
      {OPTIONS.map(opt => (
        <QuizOption key={opt.text} emoji={opt.emoji} text={opt.text} onClick={() => router.push('/date')} />
      ))}
    </QuizChrome>
  )
}
