import './Sobre.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    title: 'Código limpo',
    description: 'Arquitetura profissional, performática e escalável.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: '100% responsivo',
    description: 'Experiência impecável em qualquer dispositivo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-4 19.2V22h8v-.8A10 10 0 0 0 12 2z" />
        <circle cx="8.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="15.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Design sob medida',
    description: 'Identidade visual única para a sua marca.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Entrega rápida',
    description: 'Do briefing ao deploy em poucos dias.',
  },
]

const courses = [
  { title: 'Desenvolvimento Web (HTML, CSS, JavaScript)', date: 'Jun/2024', completed: true },
  { title: 'Node.js e criação de APIs', date: 'Jul/2025', completed: true },
  { title: 'Next.js App Router e Testes', date: 'Out/2025', completed: false },
  { title: 'Arquitetura frontend/backend', date: 'Nov/2025', completed: false },
]

const academic = {
  degree: 'Análise e Desenvolvimento de Sistemas',
  institution: 'UCS — RS',
  status: 'Cursando (2023 – 2026 / Conclusão)',
}

export default function Sobre() {
  return (
    <section className="sobre" id="sobre" aria-labelledby="sobre-heading">
      <div className="sobre__inner">
        <header className="sobre__header">
          <span className="sobre__label">Sobre</span>
          <h2 id="sobre-heading" className="sobre__title">
            Tecnologia e design a serviço
            <br />
            <span className="sobre__title-accent">da sua marca.</span>
          </h2>
          <p className="sobre__description">
            Criamos experiências digitais sofisticadas para empresas, clínicas, lojas e
            profissionais que querem se destacar. Cada projeto une estética premium,
            performance e estratégia.
          </p>
        </header>

        <ul className="sobre__features">
          {features.map(({ icon, title, description }) => (
            <li key={title} className="sobre__card">
              <span className="sobre__card-icon">{icon}</span>
              <h3 className="sobre__card-title">{title}</h3>
              <p className="sobre__card-text">{description}</p>
            </li>
          ))}
        </ul>

        <div className="sobre__formation">
          <div className="sobre__formation-block sobre__formation-block--highlight">
            <h3 className="sobre__formation-title">
              <span className="sobre__formation-icon" aria-hidden="true">
                🎓
              </span>
              Formação acadêmica
            </h3>
            <p className="sobre__formation-degree">
              {academic.degree}
            </p>
            <p className="sobre__formation-institution">{academic.institution}</p>
            <span className="sobre__formation-badge">{academic.status}</span>
          </div>

          <div className="sobre__formation-block">
            <h3 className="sobre__formation-title">Cursos &amp; certificações</h3>
            <ul className="sobre__formation-list">
              {courses.map(({ title, date, completed }) => (
                <li key={title}>
                  {completed && (
                    <span className="sobre__formation-check" aria-hidden="true">
                      ✓
                    </span>
                  )}
                  <span className={completed ? undefined : 'sobre__formation-item-text'}>
                    {title}
                    <span className="sobre__formation-date"> ({date})</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
