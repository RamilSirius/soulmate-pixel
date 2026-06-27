'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import QuizOption from '../components/QuizOption'

const OPTIONS = [
  { emoji: '✨', text: 'Meeting the right partner' },
  { emoji: '💔', text: 'Moving on from past relationships' },
  { emoji: '🔥', text: 'Keeping the relationship exciting' },
  { emoji: '⚖️', text: 'Handling doubts' },
  { emoji: '🤝', text: 'Opening up to people' },
  { emoji: '💭', text: 'Setting healthy boundaries' },
]

export default function Goal() {
  const router = useRouter()

  return (
    <QuizChrome step={10}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        What&apos;s most difficult for you?
      </h2>
      {OPTIONS.map(opt => (
        <QuizOption key={opt.text} emoji={opt.emoji} text={opt.text} onClick={() => router.push('/biggestPersonalChallengeInfo')} />
      ))}
    </QuizChrome>
  )
}
