import Lanyard from '../components/Lanyard'
import './BadgePage.css'

export default function BadgePage() {
  return (
    <main className="badge-page">
      <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} />

      <section className="badge-overlay" aria-label="Informacoes do cracha">
        <div className="photo-placeholder" aria-label="Espaco para foto">
          <span>Sua foto aqui</span>
        </div>
        <div className="badge-content">
          <p className="badge-label">Cracha de identificacao</p>
          <h1>Helena Franco</h1>
          <p className="badge-role">Desenvolvedora Front-end</p>
        </div>
      </section>
    </main>
  )
}
