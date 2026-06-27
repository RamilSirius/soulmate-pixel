'use client'
import { useState, useEffect } from 'react'

const PURPLE = '#9974f6'
const TEXTS = [
  'Reveal your ideal partner',
  'Get a drawing of your match',
  'Find out who\'s meant for you',
  'Meet your destiny',
  'See who you belong with',
]

function NebulaLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#333" aria-hidden="true">
      <g>
        <path d="M22.9379 11.9517C22.6239 11.161 22.2367 10.2062 21.8666 9.28126C21.5264 8.43155 21.2 7.60779 20.9558 6.95915C20.1306 4.40937 18.4032 2.18845 15.9915 0.983283C12.6515 -0.737545 8.06125 -0.165449 5.29444 2.43103C3.14197 4.37694 2.00013 7.1959 2.00666 10.1128C2.02624 12.215 1.98381 20.5701 2.00731 22.5912C2.00731 22.6308 2.00796 22.6678 2.00862 22.7028V23.2833C2.03277 23.6816 2.36508 23.9968 2.7718 23.9968H3.44751C5.37279 23.9968 9.88925 24.004 11.2694 23.9968C11.6578 23.9858 11.9817 23.6537 11.9862 23.2743C11.9888 22.9285 11.9862 20.585 11.9869 20.1984C11.9823 19.8456 12.2774 19.5044 12.6456 19.4784C12.9923 19.4577 15.4927 19.483 17.4395 19.4784H17.9618C17.9932 19.4784 18.0252 19.4778 18.0558 19.4752H18.0598C18.9254 19.4246 19.6129 18.7137 19.6181 17.8426V17.3139C19.6181 16.2664 19.6181 14.8141 19.6181 14.1298C19.6181 14.0617 19.6325 13.9813 19.6534 13.9093C19.7369 13.5934 20.0477 13.3891 20.3669 13.3839C20.378 13.3839 20.3885 13.3839 20.3996 13.3839H21.8685C22.4998 13.3839 22.9732 12.8838 22.9993 12.311C23.0045 12.1884 22.9816 12.0665 22.9359 11.9523L22.9379 11.9517ZM15.7571 9.62698L14.9078 10.2724C14.4775 10.5999 14.1955 11.0838 14.1256 11.6183L13.9879 12.6717C13.9637 12.8604 13.7646 12.9739 13.5883 12.9013L12.6012 12.4933C12.1005 12.2864 11.5377 12.2864 11.037 12.4933L10.0499 12.9013C9.87293 12.9739 9.67446 12.8604 9.64965 12.6717L9.5119 11.6183C9.44204 11.0845 9.16066 10.5999 8.72978 10.2724L7.88106 9.62698C7.72895 9.51088 7.72895 9.28386 7.88106 9.1684L8.72978 8.52301C9.16066 8.1961 9.44204 7.71157 9.5119 7.17709L9.64965 6.12371C9.67446 5.93496 9.87293 5.82145 10.0499 5.89474L11.037 6.30273C11.5377 6.50965 12.1005 6.50965 12.6012 6.30273L13.5883 5.89474C13.7646 5.82145 13.9637 5.93561 13.9879 6.12371L14.1256 7.17709C14.1955 7.71092 14.4775 8.1961 14.9078 8.52301L15.7571 9.1684C15.9092 9.28386 15.9092 9.51153 15.7571 9.62698Z" />
      </g>
    </svg>
  )
}

function BurgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#333" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.39961 4.80005C2.18744 4.80005 1.98395 4.88433 1.83392 5.03436C1.68389 5.18439 1.59961 5.38788 1.59961 5.60005C1.59961 5.81222 1.68389 6.0157 1.83392 6.16573C1.98395 6.31576 2.18744 6.40005 2.39961 6.40005H21.5996C21.8118 6.40005 22.0153 6.31576 22.1653 6.16573C22.3153 6.0157 22.3996 5.81222 22.3996 5.60005C22.3996 5.38788 22.3153 5.18439 22.1653 5.03436C22.0153 4.88433 21.8118 4.80005 21.5996 4.80005H2.39961ZM1.59961 12C1.59961 11.7879 1.68389 11.5844 1.83392 11.4344C1.98395 11.2843 2.18744 11.2 2.39961 11.2H21.5996C21.8118 11.2 22.0153 11.2843 22.1653 11.4344C22.3153 11.5844 22.3996 11.7879 22.3996 12C22.3996 12.2122 22.3153 12.4157 22.1653 12.5657C22.0153 12.7158 21.8118 12.8 21.5996 12.8H2.39961C2.18744 12.8 1.98395 12.7158 1.83392 12.5657C1.68389 12.4157 1.59961 12.2122 1.59961 12ZM1.59961 18.4C1.59961 18.1879 1.68389 17.9844 1.83392 17.8344C1.98395 17.6843 2.18744 17.6 2.39961 17.6H21.5996C21.8118 17.6 22.0153 17.6843 22.1653 17.8344C22.3153 17.9844 22.3996 18.1879 22.3996 18.4C22.3996 18.6122 22.3153 18.8157 22.1653 18.9657C22.0153 19.1158 21.8118 19.2 21.5996 19.2H2.39961C2.18744 19.2 1.98395 19.1158 1.83392 18.9657C1.68389 18.8157 1.59961 18.6122 1.59961 18.4Z" />
    </svg>
  )
}

export default function Landing() {
  const [textIdx, setTextIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setTextIdx(i => (i + 1) % TEXTS.length)
        setFade(true)
      }, 300)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ background: '#fefefe', minHeight: '100vh' }}>
      {/* Centered content column - 330px wide */}
      <div style={{ width: '330px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ position: 'relative', paddingTop: '20px', marginBottom: '13px', height: '50px' }}>
          <NebulaLogo />
          <span style={{ position: 'absolute', right: 0, top: '20px' }}>
            <BurgerIcon />
          </span>
        </div>

        {/* Rating badges */}
        <ul style={{ display: 'flex', marginBottom: '32px', padding: 0, listStyle: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px', border: `1px solid ${PURPLE}`, borderRadius: '8px', marginRight: '10px', flex: '0 0 auto' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://media.appnebula.co/palmistry/dart.svg" alt="" width={20} height={20} />
            <div>
              <p style={{ fontSize: '8px', fontWeight: 400, lineHeight: '10px', textTransform: 'uppercase', color: '#000', margin: 0 }}>USERS CALL IT</p>
              <p style={{ fontSize: '10px', fontWeight: 700, lineHeight: '10px', color: '#000', margin: 0 }}>Surprisingly insightful</p>
            </div>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px', border: `1px solid ${PURPLE}`, borderRadius: '8px', flex: '0 0 auto' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://media.appnebula.co/quiz/star.svg" alt="" width={20} height={20} />
            <div>
              <p style={{ fontSize: '8px', fontWeight: 400, lineHeight: '10px', textTransform: 'uppercase', color: '#000', margin: 0 }}>133k users&apos; choice</p>
              <p style={{ fontSize: '10px', fontWeight: 700, lineHeight: '10px', color: '#000', margin: 0 }}>4.1 Satisfaction Score</p>
            </div>
          </li>
        </ul>

        {/* Hero image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://media.appnebula.co/fb-gallery/soulmate-sketch/8243271758248_hero.png"
          alt="palm scanner"
          style={{ display: 'block', width: '330px', marginBottom: '24px' }}
        />

        {/* Rotating headline */}
        <div style={{ height: '32px', overflow: 'hidden', textAlign: 'center', marginBottom: '0px' }}>
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              lineHeight: '30px',
              color: PURPLE,
              textAlign: 'center',
              margin: 0,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              opacity: fade ? 1 : 0,
              transform: fade ? 'translateY(0)' : 'translateY(-4px)',
            }}
          >
            {TEXTS[textIdx]}
          </h2>
        </div>

        {/* Subtitle */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, lineHeight: '28px', color: '#333333', textAlign: 'center', margin: 0 }}>
          with your Soulmate Sketch
        </h2>

        {/* Description */}
        <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#4f4f4f', textAlign: 'center', marginTop: '12px', marginBottom: 0 }}>
          Take this quiz to enroll in and personalize your Nebula subscription
        </p>

        {/* Feature pills */}
        <ul style={{ display: 'flex', marginTop: '20px', padding: 0, listStyle: 'none', marginRight: '-7px' }}>
          {[
            { icon: 'https://media.appnebula.co/palmistry/clock.svg', label: '1-min Quiz' },
            { icon: 'https://media.appnebula.co/palmistry/scan.svg', label: 'Insights' },
            { icon: 'https://media.appnebula.co/palmistry/gift.svg', label: 'Personalized guide' },
          ].map(({ icon, label }) => (
            <li key={label} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px', borderRadius: '8px', background: '#f4f4fb', marginRight: '7px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon} alt="" width={16} height={16} />
              <span style={{ fontSize: '12px', fontWeight: 600, lineHeight: '18px', color: PURPLE }}>{label}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="/social"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '330px',
            height: '50px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            background: 'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543c97 55.84%, #6939a2 74.96%)',
            padding: '5px 10px',
            marginTop: '32px',
            marginBottom: '32px',
            textDecoration: 'none',
          }}
        >
          <span style={{ fontSize: '18px', fontWeight: 400, lineHeight: '21px', color: '#fbfbff' }}>Take the quiz</span>
        </a>

        {/* Legal text */}
        <div style={{ marginBottom: 0 }}>
          <p style={{ fontSize: '12px', fontWeight: 400, lineHeight: '16.8px', color: '#4f4f4f', textAlign: 'center', marginBottom: '10px' }}>
            By selecting option above you agree to the{' '}
            <a href="https://asknebula.com/app/privacy" style={{ color: '#61b3ff', textDecoration: 'underline', fontWeight: 700 }}>Privacy Policy</a>,{' '}
            <a href="https://asknebula.com/app/terms" style={{ color: '#61b3ff', textDecoration: 'underline', fontWeight: 700 }}>Terms of Use</a>{' '}
            and to the use of cookies and tracking technologies, that require your consent (e.g. Meta Pixel)
          </p>
          <p style={{ fontSize: '12px', fontWeight: 400, lineHeight: '18px', color: '#4f4f4f', textAlign: 'center', marginBottom: 0 }}>
            <b>For entertainment purposes only</b>
          </p>
          <p style={{ fontSize: '12px', fontWeight: 400, lineHeight: '18px', color: '#828282', textAlign: 'center', paddingBottom: '8px' }}>
            Spiritual Nebula Limited, 62 Athalassas Avenue, Mezzanine Floor, Strovolos, 2012 Nicosia, Cyprus
          </p>
        </div>

      </div>
    </div>
  )
}
