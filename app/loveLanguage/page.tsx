'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'

const OPTIONS = [
  { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8226335024477_love_language.png', alt: 'love language', text: 'Verbal appreciation' },
  { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8226335024477_presents.png', alt: 'presents', text: 'Presents' },
  { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8226335024477_shared_activities.png', alt: 'shared activities', text: 'Shared activities' },
  { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8226335024477_tactility.png', alt: 'tactility', text: 'Tactility' },
  { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8226335024477_gestures.png', alt: 'gestures', text: 'Helpful gestures' },
]

export default function LoveLanguage() {
  const router = useRouter()

  return (
    <QuizChrome step={11}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '20px' }}>
        What is your love language?
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {OPTIONS.slice(0, 4).map(opt => (
          <button
            key={opt.text}
            onClick={() => router.push('/lifeGoalsSoulmateAchievement')}
            style={{
              background: '#eaeef7',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '0',
              cursor: 'pointer',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={opt.img} alt={opt.alt} style={{ width: '100%', aspectRatio: '1/0.75', objectFit: 'cover' }} />
            <span style={{ fontSize: '12px', fontWeight: 400, color: '#828282', padding: '8px 4px', lineHeight: '18px' }}>{opt.text}</span>
          </button>
        ))}
      </div>
      {/* Last option full-width */}
      <button
        onClick={() => router.push('/lifeGoalsSoulmateAchievement')}
        style={{
          marginTop: '12px',
          width: '159px',
          background: '#eaeef7',
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          padding: '0',
          cursor: 'pointer',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={OPTIONS[4].img} alt={OPTIONS[4].alt} style={{ width: '100%', aspectRatio: '1/0.75', objectFit: 'cover' }} />
        <span style={{ fontSize: '12px', fontWeight: 400, color: '#828282', padding: '8px 4px', lineHeight: '18px' }}>{OPTIONS[4].text}</span>
      </button>
    </QuizChrome>
  )
}
