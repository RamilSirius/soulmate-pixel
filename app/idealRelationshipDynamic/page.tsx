'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import QuizOption from '../components/QuizOption'

const OPTIONS = [
  { emoji: '💖', text: 'Affectionate and loving' },
  { emoji: '🌿', text: 'Calm and grounded' },
  { emoji: '🎈', text: 'Playful and lighthearted' },
  { emoji: '🌍', text: 'Fun and adventurous' },
  { emoji: '🪢', text: 'Balanced and supportive' },
  { emoji: '🔥', text: 'Passionate and inspiring' },
  { emoji: '❓', text: 'Other' },
]

export default function IdealRelationshipDynamic() {
  const router = useRouter()

  return (
    <QuizChrome step={13}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        What kind of energy does your ideal partner bring into your life?
      </h2>
      {OPTIONS.map(opt => (
        <QuizOption key={opt.text} emoji={opt.emoji} text={opt.text} onClick={() => router.push('/oppositesAttract')} />
      ))}
    </QuizChrome>
  )
}
