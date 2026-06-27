'use client'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'

const SCALE = [
  { src: 'https://media.appnebula.co/fb-gallery/emoji/8249684143138_1.png', label: '' },
  { src: 'https://media.appnebula.co/fb-gallery/emoji/8249684137050_2.png', label: '' },
  { src: 'https://media.appnebula.co/fb-gallery/emoji/8249684137050_3.png', label: '' },
  { src: 'https://media.appnebula.co/fb-gallery/emoji/8249684137050_4.png', label: '' },
  { src: 'https://media.appnebula.co/fb-gallery/emoji/8249684137050_5.png', label: '' },
]

export default function OppositesAttract() {
  const router = useRouter()

  return (
    <QuizChrome step={14}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '8px' }}>
        I believe that opposites attract
      </h2>
      <p style={{ fontSize: '14px', color: '#828282', marginBottom: '40px', lineHeight: '20px' }}>
        How much do you agree with the statement?
      </p>

      <div style={{ background: '#f5f5f5', borderRadius: '16px', padding: '16px', marginBottom: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {SCALE.map((item, i) => (
            <button
              key={i}
              onClick={() => router.push('/sharedExperiences')}
              style={{
                width: '48px',
                height: '48px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                padding: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt="emoji" width={36} height={36} />
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          <span style={{ fontSize: '12px', color: '#828282', lineHeight: '18px' }}>Strongly disagree</span>
          <span style={{ fontSize: '12px', color: '#828282', lineHeight: '18px' }}>Strongly agree</span>
        </div>
      </div>
    </QuizChrome>
  )
}
