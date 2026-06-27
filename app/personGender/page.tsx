'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import QuizOption from '../components/QuizOption'

const OPTIONS = [
  { emoji: '👩', text: 'Female' },
  { emoji: '👨', text: 'Male' },
  { emoji: '🌈', text: 'Non-binary' },
]

export default function PersonGender() {
  const router = useRouter()

  return (
    <QuizChrome step={2}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        What gender is your ideal partner?
      </h2>
      {OPTIONS.map(opt => (
        <QuizOption key={opt.text} emoji={opt.emoji} text={opt.text} onClick={() => router.push('/idealAgeRangeSoulmate')} />
      ))}
    </QuizChrome>
  )
}
