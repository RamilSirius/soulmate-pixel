'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import ContinueButton from '../components/ContinueButton'

const PURPLE = '#9974f6'

const OPTIONS = [
  { emoji: '🏡', text: 'Buying a house' },
  { emoji: '🌍', text: 'Going on adventures' },
  { emoji: '💍', text: 'Starting a family' },
  { emoji: '📸', text: 'Creating fun memories' },
  { emoji: '📈', text: 'Running a business' },
  { emoji: '💪', text: 'Going through challenges together' },
  { emoji: '❓', text: 'Other' },
]

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill={PURPLE} />
      <path d="M6 11.5L9.5 15L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EmptyCircle() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="10" stroke="#e0e0e0" strokeWidth="1" fill="white" />
    </svg>
  )
}

export default function LifeGoalsSoulmateAchievement() {
  const router = useRouter()
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (text: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(text)) next.delete(text)
      else next.add(text)
      return next
    })
  }

  return (
    <QuizChrome step={12}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '8px' }}>
        What kind of future do you envision with your ideal partner?
      </h2>
      <p style={{ fontSize: '14px', color: '#828282', marginBottom: '20px', lineHeight: '20px' }}>Please select all that apply</p>

      {OPTIONS.map(opt => {
        const isSelected = selected.has(opt.text)
        return (
          <div key={opt.text} style={{ marginBottom: '20px' }}>
            <div
              onClick={() => toggle(opt.text)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && toggle(opt.text)}
              style={{
                height: '64px',
                background: isSelected ? PURPLE : '#eaeef7',
                border: `1px solid ${isSelected ? PURPLE : '#e0e0e0'}`,
                borderRadius: '12px',
                padding: '0 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                width: '330px',
              }}
            >
              <span style={{ fontSize: '32px', lineHeight: '48px' }}>{opt.emoji}</span>
              <span style={{ fontSize: '14px', fontWeight: 400, color: isSelected ? 'white' : '#000', lineHeight: '20px', flex: 1 }}>{opt.text}</span>
              {isSelected ? <CheckIcon /> : <EmptyCircle />}
            </div>
          </div>
        )
      })}

      <div style={{ paddingBottom: '24px' }}>
        <ContinueButton onClick={() => router.push('/idealRelationshipDynamic')} />
      </div>
    </QuizChrome>
  )
}
