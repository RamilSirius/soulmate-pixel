'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import IntermediateChrome from '../components/IntermediateChrome'

const PURPLE = '#9974f6'

export default function Email() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  return (
    <IntermediateChrome onContinue={() => router.push(`/trialPayment?email=${encodeURIComponent(email)}`)} contentWidth={450}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '16px' }}>
        Are you ready to see what your soulmate looks like?
      </h2>
      <p style={{ fontSize: '14px', fontWeight: 400, color: '#828282', lineHeight: '21px', marginBottom: '24px' }}>
        Share your email to get your personalized reading. We may also send you emails with news, promo offers, and tips for services.
      </p>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          width: '100%',
          height: '50px',
          borderRadius: '25px',
          border: `1px solid ${PURPLE}`,
          padding: '0 20px',
          fontSize: '14px',
          color: '#333',
          outline: 'none',
          background: 'white',
        }}
      />
      <p style={{ fontSize: '12px', color: '#828282', textAlign: 'center', marginTop: '16px', lineHeight: '18px' }}>
        By continuing, I agree to the{' '}
        <a href="https://asknebula.com/app/terms" style={{ color: '#61b3ff', textDecoration: 'underline' }}>Terms of Use</a>
        {' '}and{' '}
        <a href="https://asknebula.com/app/privacy" style={{ color: '#61b3ff', textDecoration: 'underline' }}>Privacy Policy</a>
        . See{' '}
        <a href="https://asknebula.com/app/disclaimer" style={{ color: '#61b3ff', textDecoration: 'underline' }}>Full Disclaimer</a>
        {' '}about the service.
      </p>
    </IntermediateChrome>
  )
}
