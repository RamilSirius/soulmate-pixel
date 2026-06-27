'use client'
import { useRouter } from 'next/navigation'
import IntermediateChrome from '../components/IntermediateChrome'

export default function KeyQualitySoulmateInfo() {
  const router = useRouter()

  return (
    <IntermediateChrome onContinue={() => router.push('/soulmateAppearance')}>
      <h1 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '12px' }}>
        Well noted!
      </h1>
      <p style={{ fontSize: '14px', fontWeight: 400, color: '#828282', lineHeight: '21px', marginBottom: '32px' }}>
        Knowing your future partner&apos;s key qualities helps us to understand your situation better
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://media.appnebula.co/fb-gallery/soulmate-sketch/8226342320315_kindness_soulmate.png"
          alt=""
          style={{ width: '250px', height: 'auto' }}
        />
      </div>
    </IntermediateChrome>
  )
}
