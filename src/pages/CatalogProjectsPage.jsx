import { Link } from 'react-router-dom'
import { catalogProjects } from '../data/catalogProjects'
import './CatalogProjectsPage.css'

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

function ProjectField({ label, children }) {
  return (
    <div className="catalog-projects__field">
      <span className="catalog-projects__field-label">{label}</span>
      <div className="catalog-projects__field-value">{children}</div>
    </div>
  )
}

export default function CatalogProjectsPage() {
  return (
    <main className="catalog-projects">
      <div className="catalog-projects__inner">
        <header className="catalog-projects__header">
          <Link to="/" className="catalog-projects__back">
            ← Voltar ao site
          </Link>

          <span className="catalog-projects__label">Portfólio</span>
          <h1 className="catalog-projects__title">
            Sites e catálogos{' '}
            <span className="catalog-projects__title-accent">online.</span>
          </h1>
          <p className="catalog-projects__description">
            Soluções para apresentar produtos, serviços e fortalecer a presença digital da marca de
            forma profissional.
          </p>
        </header>

        <ul className="catalog-projects__list">
          {catalogProjects.map(
            ({
              id,
              category,
              cardCategory,
              title,
              cardDescription,
              description,
              features,
              technologies,
              objective,
              url,
            }) => (
              <li key={id} className="catalog-projects__card">
                <div className="catalog-projects__card-summary">
                  <span className="catalog-projects__card-category">
                    {cardCategory ?? category}
                  </span>
                  <h2 className="catalog-projects__project-name">{title}</h2>
                  <p className="catalog-projects__card-description">{cardDescription}</p>
                </div>

                <ProjectField label="Categoria">{category}</ProjectField>

                <ProjectField label="Descrição">{description}</ProjectField>

                <ProjectField label="Principais funcionalidades">
                  <ul className="catalog-projects__feature-list">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </ProjectField>

                <ProjectField label="Tecnologias">
                  <ul className="catalog-projects__tech-list">
                    {technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </ProjectField>

                <ProjectField label="Objetivo do projeto">{objective}</ProjectField>

                {url ? (
                  <a
                    href={url}
                    className="catalog-projects__visit-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visite o projeto
                    <ExternalIcon />
                  </a>
                ) : null}
              </li>
            ),
          )}
        </ul>
      </div>
    </main>
  )
}
