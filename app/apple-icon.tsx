import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e3a5f 100%)',
          borderRadius: '20%',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 48 48"
          fill="white"
        >
          <path d="M8 30s2-2 8-2 10 4 16 4 8-2 8-2V6s-2 2-8 2S22 4 16 4 8 6 8 6z"/>
          <line x1="8" y1="44" x2="8" y2="30" stroke="white" strokeWidth="3" fill="none"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
