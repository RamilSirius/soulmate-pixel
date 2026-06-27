'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuizChrome from '../components/QuizChrome'
import ContinueButton from '../components/ContinueButton'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const DAYS = Array.from({length: 31}, (_,i) => String(i+1).padStart(2,'0'))
const YEARS = Array.from({length: 61}, (_,i) => String(2008-i))

const SELECT_STYLE: React.CSSProperties = {
  width: '330px',
  height: '40px',
  borderRadius: '20px',
  border: '1px solid #e0e0e0',
  background: 'white',
  fontSize: '14px',
  fontWeight: 400,
  color: '#333',
  padding: '0 18px',
  appearance: 'none',
  cursor: 'pointer',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 16 16'%3E%3Cpath d='M8 9.5L0.5 2L1.55 0.95L8 7.4L14.45 0.95L15.5 2L8 9.5Z' fill='%23828282'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 16px center',
}

export default function DatePage() {
  const router = useRouter()
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [year, setYear] = useState('')

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#fefefe', overflow: 'hidden' }}>
      {/* Background zodiac image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://media.appnebula.co/backgrounds/desktop/date_of_birth_zodiac_signs.jpg"
        alt=""
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', pointerEvents: 'none' }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <QuizChrome step={5} background="transparent">
          <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '24px' }}>
            What&apos;s your date of birth?
          </h2>

          {/* Select group */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '157px', maxWidth: '330px', marginBottom: '50px' }}>
            <select value={month} onChange={e => setMonth(e.target.value)} name="month" style={SELECT_STYLE}>
              <option value="" hidden>month</option>
              {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <select value={day} onChange={e => setDay(e.target.value)} name="day" style={SELECT_STYLE}>
              <option value="" hidden>day</option>
              {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={year} onChange={e => setYear(e.target.value)} name="year" style={SELECT_STYLE}>
              <option value="" hidden>year</option>
              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <ContinueButton onClick={() => router.push('/keyQualitySoulmate')} />
        </QuizChrome>
      </div>
    </div>
  )
}
