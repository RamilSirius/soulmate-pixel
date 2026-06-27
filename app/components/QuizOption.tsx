'use client'

interface QuizOptionProps {
  emoji: string
  text: string
  onClick: () => void
}

export default function QuizOption({ emoji, text, onClick }: QuizOptionProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onClick()}
        style={{
          height: '64px',
          background: '#eaeef7',
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
          width: '330px',
        }}
      >
        <span style={{ fontSize: '32px', lineHeight: '48px' }}>{emoji}</span>
        <span style={{ fontSize: '14px', fontWeight: 400, color: '#000', lineHeight: '20px' }}>{text}</span>
      </div>
    </div>
  )
}
