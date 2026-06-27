'use client'
import { useRouter } from 'next/navigation'
import IntermediateChrome from '../components/IntermediateChrome'

export default function Social() {
  const router = useRouter()

  return (
    <IntermediateChrome onContinue={() => router.push('/gender')} contentWidth={450}>
      <h2 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '35.1px', color: '#000', marginBottom: '24px' }}>
        Join thousands of people who&apos;ve already got their guidance with Nebula
      </h2>

      {/* Review card */}
      <div style={{ background: '#f5f5f5', borderRadius: '16px', padding: '20px', marginBottom: '24px' }}>
        <div style={{ marginBottom: '16px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://media.appnebula.co/compatibility_redesign/quotation.png" alt="" width={40} height={40} style={{ opacity: 0.4 }} />
        </div>
        <p style={{ fontSize: '14px', fontWeight: 400, color: '#333', lineHeight: '21px', marginBottom: '16px' }}>
          I think this app is really awesome!{' '}
          <mark style={{ background: '#e8e0fa', color: '#333', borderRadius: '2px' }}>so far just seeing the sketch gives me goosebumps</mark>
          .
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://media.appnebula.co/fb-gallery/hypno-healing/8260023961671_VerifiedRounded.png" alt="" width={32} height={32} />
            <div>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#333', margin: 0, lineHeight: '20px' }}>Rhonda Crowson</p>
              <p style={{ fontSize: '12px', fontWeight: 400, color: '#828282', margin: 0, lineHeight: '18px' }}>with Nebula since 2025</p>
            </div>
          </div>
          <span style={{ fontSize: '12px', color: '#828282' }}>10/22/2025</span>
        </div>
      </div>

      {/* Rating */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://media.appnebula.co/fb-gallery/soulmate-sketch/8218881547960_4.1.png" alt="4.1 rating 133K+ reviews" height={40} style={{ objectFit: 'contain' }} />
      </div>
    </IntermediateChrome>
  )
}
