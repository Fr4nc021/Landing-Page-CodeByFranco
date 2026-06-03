import './DarkVeil.css'

function DarkVeil() {
  return (
    <div className="dark-veil" aria-hidden="true">
      <div className="dark-veil__orb dark-veil__orb--left" />
      <div className="dark-veil__orb dark-veil__orb--center" />
      <div className="dark-veil__orb dark-veil__orb--right" />
      <div className="dark-veil__noise" />
    </div>
  )
}

export default DarkVeil
