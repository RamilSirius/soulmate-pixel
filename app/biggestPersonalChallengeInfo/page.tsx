'use client'
import { useRouter } from 'next/navigation'
import IntermediateChrome from '../components/IntermediateChrome'

export default function BiggestPersonalChallengeInfo() {
  const router = useRouter()

  return (
    <IntermediateChrome onContinue={() => router.push('/loveLanguage')}>
      <h1 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '12px' }}>
        Your struggle is real
      </h1>
      <p style={{ fontSize: '14px', fontWeight: 400, color: '#828282', lineHeight: '21px', marginBottom: '32px' }}>
        Let&apos;s help you discover the path to meeting someone truly compatible with you
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://media.appnebula.co/fb-gallery/soulmate-sketch/8226335556539_right_partner.png"
          alt=""
          style={{ width: '250px', height: 'auto' }}
        />
      </div>
    </IntermediateChrome>
  )
}
