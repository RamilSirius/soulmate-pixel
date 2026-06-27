'use client'

const BTN_GRADIENT = 'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543c97 55.84%, #6939a2 74.96%)'

interface ContinueButtonProps {
  onClick: () => void
  width?: number
  label?: string
}

export default function ContinueButton({ onClick, width = 330, label = 'Continue' }: ContinueButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${width}px`,
        height: '50px',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
        background: BTN_GRADIENT,
        color: '#fbfbff',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '21px',
      }}
    >
      {label}
    </button>
  )
}
