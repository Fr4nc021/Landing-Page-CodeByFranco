import './Home.css'

export default function Home() {
  return (
    <section className="home" id="home" aria-label="Início">
      <div className="hero">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-icon" aria-hidden="true">✦</span>
            Disponível para novos projetos
          </span>

          <h1 className="hero__title">
            Desenvolvimento{' '}
            <span className="hero__title-accent">Web &amp; Mobile</span>
          </h1>

          <p className="hero__subtitle">
            Sites modernos, landing pages e soluções digitais para destacar sua presença online.
          </p>

          <div className="hero__actions">
            <a href="#pacotes" className="hero__btn hero__btn--primary">
              Ver pacotes →
            </a>
            <a href="#projetos" className="hero__btn hero__btn--secondary">
              Ver projetos
            </a>
          </div>

          <p className="hero__credit">
            Feito por <strong>Helena Franco</strong> — Desenvolvedora Web &amp; Mobile
          </p>
        </div>

        <div className="hero__visual">
          <img
            src="/platafoms.png"
            alt="Mockups de site em notebook e celular"
            className="hero__mockup"
          />
        </div>
      </div>
    </section>
  )
}
