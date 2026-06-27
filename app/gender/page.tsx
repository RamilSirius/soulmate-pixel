'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import QuizOption from '../components/QuizOption'

const OPTIONS = [
  { emoji: '👩', text: 'Female' },
  { emoji: '👨', text: 'Male' },
]

export default function Gender() {
  const router = useRouter()

  return (
    <QuizChrome step={1} showBack={false}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        I&apos;m a...
      </h2>
      {OPTIONS.map(opt => (
        <QuizOption key={opt.text} emoji={opt.emoji} text={opt.text} onClick={() => router.push('/personGender')} />
      ))}
    </QuizChrome>
  )
}
