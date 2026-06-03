import { Link } from 'react-router-dom'
import { landingProjects } from '../data/landingProjects'
import './LandingProjectsPage.css'

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

function ProjectField({ label, children }) {
  return (
    <div className="landing-projects__field">
      <span className="landing-projects__field-label">{label}</span>
      <div className="landing-projects__field-value">{children}</div>
    </div>
  )
}

export default function LandingProjectsPage() {
  return (
    <main className="landing-projects">
      <div className="landing-projects__inner">
        <header className="landing-projects__header">
          <Link to="/" className="landing-projects__back">
            ← Voltar ao site
          </Link>

          <span className="landing-projects__label">Portfólio</span>
          <h1 className="landing-projects__title">
            Landing pages{' '}
            <span className="landing-projects__title-accent">entregues.</span>
          </h1>
          <p className="landing-projects__description">
            Projetos desenvolvidos para apresentar marcas, captar leads e converter visitantes em clientes.
          </p>
        </header>

        <ul className="landing-projects__list">
          {landingProjects.map(({ id, project, client, objective, codeSpace, url }) => (
            <li key={id} className="landing-projects__card">
              <ProjectField label="Projeto">
                <h2 className="landing-projects__project-name">{project}</h2>
              </ProjectField>

              <ProjectField label="Cliente">{client}</ProjectField>

              <ProjectField label="Objetivo">{objective}</ProjectField>

              <ProjectField label="Code Space">{codeSpace}</ProjectField>

              <a
                href={url}
                className="landing-projects__visit-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visite a página
                <ExternalIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
