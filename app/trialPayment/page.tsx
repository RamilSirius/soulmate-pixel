'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'

const PURPLE = '#9974f6'
const NAVY = '#454895'
const BTN_GRADIENT = 'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543c97 55.84%, #6939a2 74.96%)'

function NebulaLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#333" aria-hidden="true">
      <path d="M22.9379 11.9517C22.6239 11.161 22.2367 10.2062 21.8666 9.28126C21.5264 8.43155 21.2 7.60779 20.9558 6.95915C20.1306 4.40937 18.4032 2.18845 15.9915 0.983283C12.6515 -0.737545 8.06125 -0.165449 5.29444 2.43103C3.14197 4.37694 2.00013 7.1959 2.00666 10.1128C2.02624 12.215 1.98381 20.5701 2.00731 22.5912C2.00731 22.6308 2.00796 22.6678 2.00862 22.7028V23.2833C2.03277 23.6816 2.36508 23.9968 2.7718 23.9968H3.44751C5.37279 23.9968 9.88925 24.004 11.2694 23.9968C11.6578 23.9858 11.9817 23.6537 11.9862 23.2743C11.9888 22.9285 11.9862 20.585 11.9869 20.1984C11.9823 19.8456 12.2774 19.5044 12.6456 19.4784C12.9923 19.4577 15.4927 19.483 17.4395 19.4784H17.9618C17.9932 19.4784 18.0252 19.4778 18.0558 19.4752H18.0598C18.9254 19.4246 19.6129 18.7137 19.6181 17.8426V17.3139C19.6181 16.2664 19.6181 14.8141 19.6181 14.1298C19.6181 14.0617 19.6325 13.9813 19.6534 13.9093C19.7369 13.5934 20.0477 13.3891 20.3669 13.3839C20.378 13.3839 20.3885 13.3839 20.3996 13.3839H21.8685C22.4998 13.3839 22.9732 12.8838 22.9993 12.311C23.0045 12.1884 22.9816 12.0665 22.9359 11.9523L22.9379 11.9517ZM15.7571 9.62698L14.9078 10.2724C14.4775 10.5999 14.1955 11.0838 14.1256 11.6183L13.9879 12.6717C13.9637 12.8604 13.7646 12.9739 13.5883 12.9013L12.6012 12.4933C12.1005 12.2864 11.5377 12.2864 11.037 12.4933L10.0499 12.9013C9.87293 12.9739 9.67446 12.8604 9.64965 12.6717L9.5119 11.6183C9.44204 11.0845 9.16066 10.5999 8.72978 10.2724L7.88106 9.62698C7.72895 9.51088 7.72895 9.28386 7.88106 9.1684L8.72978 8.52301C9.16066 8.1961 9.44204 7.71157 9.5119 7.17709L9.64965 6.12371C9.67446 5.93496 9.87293 5.82145 10.0499 5.89474L11.037 6.30273C11.5377 6.50965 12.1005 6.50965 12.6012 6.30273L13.5883 5.89474C13.7646 5.82145 13.9637 5.93561 13.9879 6.12371L14.1256 7.17709C14.1955 7.71092 14.4775 8.1961 14.9078 8.52301L15.7571 9.1684C15.9092 9.28386 15.9092 9.51153 15.7571 9.62698Z" />
    </svg>
  )
}

const FEATURES = [
  { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8243271758249_Illustration-3.png', label: 'Appearance details:', text: 'see the features that will stand out most in them.' },
  { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8243271758249_Illustration-4.png', label: 'Personality traits:', text: 'understand the issues you might face and how to handle them.' },
  { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8243271758248_Illustration-5-1.png', label: 'Love style:', text: 'learn how they show affection, commit, and act as a partner.' },
]

const REVIEWS = [
  { initial: 'L', name: 'Larry Dougherty', date: '11/05/2025', stars: 5, text: "I think the sketch & reading are really close to someone I know. I'm in shock 🥰 ❤️" },
  { initial: 'A', name: 'Amber', date: '10/22/2025', stars: 5, text: 'so crazy the sketch is someone I work with that blows my mind.' },
  { initial: 'C', name: 'Charlotte Scales', date: '10/16/2025', stars: 4.5, text: "Honestly, I wasn't expecting much when I was about to see this sketch. When the sketch was revealed, I was actually attracted to this person. I already knew that that horoscope sign was one that I always get along with. I think curiosity is the thing that's driving me at this point." },
]

function Stars({ count }: { count: number }) {
  return (
    <span style={{ color: '#f5a623', fontSize: '14px', letterSpacing: '1px' }}>
      {'★'.repeat(Math.floor(count))}{count % 1 ? '½' : ''}
    </span>
  )
}

function TrialPaymentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''

  return (
    <div style={{ background: '#fefefe', minHeight: '100vh', paddingTop: '44px' }}>
      {/* Fixed header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, background: '#fbfbff', zIndex: 100, display: 'flex', justifyContent: 'flex-end', padding: '8px 20px', boxShadow: 'none' }}>
        <button
          style={{ background: PURPLE, color: '#fbfbff', border: 'none', borderRadius: '12px', padding: '5px 10px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
        >
          START MY TRIAL
        </button>
      </header>

      {/* Email bar */}
      <div style={{ background: '#eaeef7', padding: '8px 15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '14px', color: '#333', lineHeight: '20px' }}>{email}</span>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#666', cursor: 'pointer', flexShrink: 0 }}>i</div>
      </div>

      {/* Hero section */}
      <div style={{ width: '450px', margin: '0 auto', padding: '20px 20px 0' }}>
        {/* Wordmark + rating */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <NebulaLogo />
            <span style={{ fontSize: '18px', fontWeight: 700, color: '#333', lineHeight: '24px' }}>nebula</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #e0e0e0', borderRadius: '20px', padding: '2px 8px' }}>
            <span style={{ color: '#f5a623', fontSize: '12px' }}>★</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#333' }}>4.1</span>
          </div>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '34px', color: '#0f0f0f', marginBottom: '16px' }}>
          Reveal the drawing of your soulmate with Nebula
        </h1>

        {/* Two feature items */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', gap: '12px' }}>
          {[
            { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8226770588201_Book.png', title: 'See your soulmate', sub: 'with a drawing of them based on your answers' },
            { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8226770588201_Conversation.png', title: 'Find deeper insights', sub: 'in a private one-to-one chat with our psychics' },
          ].map(item => (
            <li key={item.title} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px', background: '#f4f4fb', borderRadius: '12px', padding: '12px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.img} alt="" width={32} height={32} />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f0f0f', lineHeight: '18px' }}>{item.title}</span>
              <span style={{ fontSize: '12px', color: '#828282', lineHeight: '16px' }}>{item.sub}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing section */}
      <div style={{ width: '450px', margin: '0 auto', padding: '0 20px 24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, lineHeight: '27px', color: '#0f0f0f', textAlign: 'center', marginBottom: '16px' }}>
          Get instant access to Personalized Reading + Nebula Premium
        </h2>

        {/* Plan card */}
        <div style={{ marginBottom: '16px' }}>
          {/* Card header */}
          <div style={{ background: NAVY, borderRadius: '20px 20px 0 0', padding: '12px 20px' }}>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>&nbsp;</p>
          </div>
          {/* Card body */}
          <div style={{ background: '#fbfbff', border: `1px solid ${NAVY}`, borderTop: 'none', borderRadius: '0 0 20px 20px', padding: '9px 20px 16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f', margin: 0, lineHeight: '22px', flex: 1 }}>Personalised Reading and Nebula Premium Plan</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
              <p style={{ fontSize: '14px', color: '#0f0f0f', margin: 0 }}>Reading and 7-day trial:</p>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f0f0f', margin: 0 }}>$13.67</p>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '4px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '8px', gap: '12px' }}>
              <p style={{ fontSize: '14px', color: '#0f0f0f', margin: 0, flex: 1, lineHeight: '20px' }}>Your cost every 30 days <b>after 7-day trial (auto-renews)</b></p>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f0f0f', margin: 0, flexShrink: 0 }}>$49.99</p>
            </div>
          </div>
        </div>

        {/* Legal */}
        <p style={{ fontSize: '12px', color: '#828282', textAlign: 'center', lineHeight: '18px', marginBottom: '16px' }}>
          <b>By clicking &quot;START MY TRIAL&quot;</b>, you agree to enroll in an automatically renewing subscription. You will pay $13.67 today for the first 7 days, <b>then unless you cancel before 2026-07-04, you&apos;ll automatically be charged $49.99 every 30 days</b>. To avoid future charges, you must cancel before your next subscription renewal date. <b>Cancel by visiting your account settings at <a href="https://m.asknebula.com/app/settings/subscriptions" style={{ color: '#61b3ff' }}>Manage Subscription</a>, emailing <a href="mailto:support@asknebula.com" style={{ color: '#61b3ff' }}>support@asknebula.com</a>, or calling <span style={{ color: '#61b3ff' }}>+15047388774</span>.</b>
        </p>

        {/* CTA button */}
        <button style={{ display: 'block', width: '100%', height: '48px', borderRadius: '12px', border: 'none', cursor: 'pointer', background: PURPLE, color: '#fbfbff', fontSize: '16px', fontWeight: 600 }}>
          START MY TRIAL
        </button>
      </div>

      {/* Sketch section */}
      <div style={{ width: '450px', margin: '0 auto', padding: '0 20px 24px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: 700, lineHeight: '34px', color: '#0f0f0f', marginBottom: '16px' }}>
          Here&apos;s what your true soulmate looks like
        </h1>

        {/* Sketch card */}
        <div style={{
          background: 'linear-gradient(rgba(153,116,246,0.15) 0%, rgba(233,226,252,0.15) 25%, rgba(254,254,254,0.15) 50%, rgba(233,226,252,0.15) 75%, rgba(153,116,246,0.15) 100%)',
          borderRadius: '12px', padding: '16px 12px', marginBottom: '0',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://media.appnebula.co/fb-gallery/soulmate-sketch/8243248172737_Image_white_man.png"
            alt="soulmate sketch"
            width={306} height={266}
            style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
          />

          {/* Stats */}
          <ul style={{ listStyle: 'none', padding: '12px 0 0', margin: 0, display: 'flex', gap: '16px' }}>
            {[
              { label: "Soulmate's vibe", value: 'Warm and caring' },
              { label: 'Special trait', value: 'Creative spirit' },
            ].map(item => (
              <li key={item.label} style={{ flex: 1 }}>
                <p style={{ fontSize: '12px', color: '#828282', margin: '0 0 2px', lineHeight: '16px' }}>{item.label}</p>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f0f0f', margin: 0, lineHeight: '20px' }}>{item.value}</p>
              </li>
            ))}
          </ul>

          {/* Preview text */}
          <ul style={{ listStyle: 'none', padding: '12px 0 0', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ background: '#fbfbff', borderRadius: '8px', padding: '10px 12px' }}>
              <p style={{ fontSize: '12px', color: '#828282', margin: '0 0 4px', lineHeight: '16px' }}>Your soulmate preview</p>
              <p style={{ fontSize: '14px', color: '#0f0f0f', margin: 0, lineHeight: '20px' }}>This sketch is based on your photo and answers, giving you a first look at your soulmate.</p>
            </li>
            <li style={{ background: '#fbfbff', borderRadius: '8px', padding: '10px 12px', position: 'relative' }}>
              <p style={{ fontSize: '12px', color: '#828282', margin: '0 0 4px', lineHeight: '16px' }}>
                <span>What this sketch reveals</span>
              </p>
              <p style={{ fontSize: '14px', color: '#0f0f0f', margin: 0, lineHeight: '20px' }}>
                <span style={{ filter: 'blur(4px)', userSelect: 'none' }}>Behind these features lies a story of love, belonging, and the deep connection you&apos;ve been waiting for. The sketch carries hints about the bond that could change your life.</span>
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://media.appnebula.co/fb-gallery/witch-power/8255055809708_Lock.svg"
                alt="locked"
                width={44} height={44}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </li>
          </ul>
        </div>
      </div>

      {/* More than just a face */}
      <div style={{ width: '450px', margin: '0 auto', padding: '0 20px 24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, lineHeight: '30px', color: '#0f0f0f', marginBottom: '8px' }}>More than just a face</h2>
        <p style={{ fontSize: '14px', color: '#828282', lineHeight: '20px', marginBottom: '16px' }}>
          Your soulmate sketch comes with insights into their traits, love style, and how you can grow together.
        </p>

        {/* Feature rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {FEATURES.map(f => (
            <div key={f.label} style={{ background: '#eaeef7', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.img} alt={f.label} width={60} height={72} style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '14px', color: '#0f0f0f', margin: 0, lineHeight: '20px' }}>
                <span style={{ color: PURPLE, fontWeight: 700 }}>{f.label}</span>{' '}{f.text}
              </p>
            </div>
          ))}

          {/* 2-column row */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8243271758249_Illustration-1.png', label: 'Meeting signs:', text: 'discover when, where, and under what circumstances you may cross paths.' },
              { img: 'https://media.appnebula.co/fb-gallery/soulmate-sketch/8243271758248_Illustration-2.png', label: 'Relationship challenges:', text: 'comes from seeing the strengths and limits in your marriage.' },
            ].map(f => (
              <div key={f.label} style={{ flex: 1, background: '#eaeef7', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.img} alt={f.label} width={60} height={72} />
                <p style={{ fontSize: '13px', color: '#0f0f0f', margin: 0, lineHeight: '18px', textAlign: 'center' }}>
                  <span style={{ color: PURPLE, fontWeight: 700 }}>{f.label}</span>{' '}{f.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bond item */}
          <div style={{ background: '#eaeef7', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://media.appnebula.co/fb-gallery/soulmate-sketch/8243271758248_Illustration-5.png" alt="" width={60} height={72} style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '14px', color: '#0f0f0f', margin: 0, lineHeight: '20px' }}>Find out how your bond can deepen and turn into lasting love.</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div style={{ width: '450px', margin: '0 auto', padding: '0 20px 32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, lineHeight: '30px', color: '#0f0f0f', marginBottom: '16px' }}>
          Here are a few stories from Nebula users
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {REVIEWS.map(r => (
            <div key={r.name} style={{ background: '#eaeef7', borderRadius: '16px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: PURPLE, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                  {r.initial}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f0f0f', margin: 0, lineHeight: '20px' }}>{r.name}</p>
                  <p style={{ fontSize: '12px', color: '#828282', margin: 0, lineHeight: '16px' }}>{r.date}</p>
                </div>
                <Stars count={r.stars} />
              </div>
              <p style={{ fontSize: '14px', color: '#0f0f0f', margin: 0, lineHeight: '20px' }}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '16px 20px 24px', fontSize: '12px', color: '#828282', lineHeight: '18px' }}>
        Spiritual Nebula Limited, 62 Athalassas Avenue, Mezzanine Floor, Strovolos, 2012 Nicosia, Cyprus
      </footer>
    </div>
  )
}

export default function TrialPayment() {
  return (
    <Suspense fallback={<div />}>
      <TrialPaymentContent />
    </Suspense>
  )
}
