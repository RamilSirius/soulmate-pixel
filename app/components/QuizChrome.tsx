'use client'
import { useRouter } from 'next/navigation'

const PURPLE = '#9974f6'

function NebulaLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#333" aria-hidden="true">
      <path d="M22.9379 11.9517C22.6239 11.161 22.2367 10.2062 21.8666 9.28126C21.5264 8.43155 21.2 7.60779 20.9558 6.95915C20.1306 4.40937 18.4032 2.18845 15.9915 0.983283C12.6515 -0.737545 8.06125 -0.165449 5.29444 2.43103C3.14197 4.37694 2.00013 7.1959 2.00666 10.1128C2.02624 12.215 1.98381 20.5701 2.00731 22.5912C2.00731 22.6308 2.00796 22.6678 2.00862 22.7028V23.2833C2.03277 23.6816 2.36508 23.9968 2.7718 23.9968H3.44751C5.37279 23.9968 9.88925 24.004 11.2694 23.9968C11.6578 23.9858 11.9817 23.6537 11.9862 23.2743C11.9888 22.9285 11.9862 20.585 11.9869 20.1984C11.9823 19.8456 12.2774 19.5044 12.6456 19.4784C12.9923 19.4577 15.4927 19.483 17.4395 19.4784H17.9618C17.9932 19.4784 18.0252 19.4778 18.0558 19.4752H18.0598C18.9254 19.4246 19.6129 18.7137 19.6181 17.8426V17.3139C19.6181 16.2664 19.6181 14.8141 19.6181 14.1298C19.6181 14.0617 19.6325 13.9813 19.6534 13.9093C19.7369 13.5934 20.0477 13.3891 20.3669 13.3839C20.378 13.3839 20.3885 13.3839 20.3996 13.3839H21.8685C22.4998 13.3839 22.9732 12.8838 22.9993 12.311C23.0045 12.1884 22.9816 12.0665 22.9359 11.9523L22.9379 11.9517ZM15.7571 9.62698L14.9078 10.2724C14.4775 10.5999 14.1955 11.0838 14.1256 11.6183L13.9879 12.6717C13.9637 12.8604 13.7646 12.9739 13.5883 12.9013L12.6012 12.4933C12.1005 12.2864 11.5377 12.2864 11.037 12.4933L10.0499 12.9013C9.87293 12.9739 9.67446 12.8604 9.64965 12.6717L9.5119 11.6183C9.44204 11.0845 9.16066 10.5999 8.72978 10.2724L7.88106 9.62698C7.72895 9.51088 7.72895 9.28386 7.88106 9.1684L8.72978 8.52301C9.16066 8.1961 9.44204 7.71157 9.5119 7.17709L9.64965 6.12371C9.67446 5.93496 9.87293 5.82145 10.0499 5.89474L11.037 6.30273C11.5377 6.50965 12.1005 6.50965 12.6012 6.30273L13.5883 5.89474C13.7646 5.82145 13.9637 5.93561 13.9879 6.12371L14.1256 7.17709C14.1955 7.71092 14.4775 8.1961 14.9078 8.52301L15.7571 9.1684C15.9092 9.28386 15.9092 9.51153 15.7571 9.62698Z" />
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

function BackArrow() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="#333" style={{ transform: 'rotate(90deg)' }}>
      <path d="M8 9.49995L0.5 1.99995L1.55 0.949951L8 7.39995L14.45 0.949951L15.5 1.99995L8 9.49995Z" />
    </svg>
  )
}

interface QuizChromeProps {
  step: number
  totalSteps?: number
  label?: string
  showBack?: boolean
  background?: string
  children: React.ReactNode
}

export default function QuizChrome({ step, totalSteps = 15, label = 'About you', showBack = true, background = '#fefefe', children }: QuizChromeProps) {
  const router = useRouter()
  const progress = Math.round((step / totalSteps) * 100)
  const fillTranslate = -(100 - progress)

  return (
    <div style={{ background, minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ position: 'relative', paddingTop: '20px', height: '50px', marginBottom: '13px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <NebulaLogo />
        <span style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <BurgerIcon />
        </span>
      </div>

      {/* Progress section */}
      <div style={{ width: '330px', margin: '0 auto' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', margin: '16px 0 8px' }}>
          {showBack && (
            <button
              onClick={() => router.back()}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0 }}
            >
              <BackArrow />
            </button>
          )}
          <h4 style={{ flex: '1 0 0', textAlign: 'center', fontSize: '16px', fontWeight: 400, color: '#828282', lineHeight: '24px', margin: 0 }}>
            {label}
          </h4>
          <div style={{ position: 'absolute', right: 0, padding: '4px 8px', fontSize: '14px', fontWeight: 600, color: PURPLE, lineHeight: '21px' }}>
            {step}/{totalSteps}
          </div>
        </div>
        {/* Progress bar */}
        <div style={{ height: '6px', background: '#e0e0e0', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px' }}>
          <div style={{ height: '100%', background: PURPLE, borderRadius: '12px', transform: `translateX(${fillTranslate}%)` }} />
        </div>
      </div>

      {/* Content */}
      <div style={{ width: '330px', margin: '0 auto' }}>
        {children}
      </div>
    </div>
  )
}
