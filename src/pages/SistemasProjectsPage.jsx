import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { systemProjects } from '../data/systemProjects'
import './SistemasProjectsPage.css'

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

function ProjectField({ label, children }) {
  return (
    <div className="sistemas-projects__field">
      <span className="sistemas-projects__field-label">{label}</span>
      <div className="sistemas-projects__field-value">{children}</div>
    </div>
  )
}

function ProjectGallery({ images }) {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    if (!activeImage) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImage])

  return (
    <>
      <ProjectField label="Capturas de tela">
        <ul className="sistemas-projects__gallery">
          {images.map((image) => (
            <li key={image.src}>
              <button
                type="button"
                className="sistemas-projects__gallery-button"
                onClick={() => setActiveImage(image)}
                aria-label={`Ampliar imagem: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="sistemas-projects__gallery-image"
                  loading="lazy"
                />
                <span className="sistemas-projects__gallery-hint">Clique para ampliar</span>
              </button>
            </li>
          ))}
        </ul>
      </ProjectField>

      {activeImage ? (
        <div
          className="sistemas-projects__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="sistemas-projects__lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Fechar imagem"
          >
            ×
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="sistemas-projects__lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  )
}

export default function SistemasProjectsPage() {
  return (
    <main className="sistemas-projects">
      <div className="sistemas-projects__inner">
        <header className="sistemas-projects__header">
          <Link to="/" className="sistemas-projects__back">
            ← Voltar ao site
          </Link>

          <span className="sistemas-projects__label">Portfólio</span>
          <h1 className="sistemas-projects__title">
            Sistemas e automação{' '}
            <span className="sistemas-projects__title-accent">de processos.</span>
          </h1>
          <p className="sistemas-projects__description">
            Ferramentas desenvolvidas para otimizar operações, reduzir tarefas manuais e aumentar a
            produtividade.
          </p>
        </header>

        <ul className="sistemas-projects__list">
          {systemProjects.map(
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
              images,
            }) => (
              <li key={id} className="sistemas-projects__card">
                <div className="sistemas-projects__card-summary">
                  <span className="sistemas-projects__card-category">
                    {cardCategory ?? category}
                  </span>
                  <h2 className="sistemas-projects__project-name">{title}</h2>
                  <p className="sistemas-projects__card-description">{cardDescription}</p>
                </div>

                {images?.length ? <ProjectGallery images={images} /> : null}

                <ProjectField label="Categoria">{category}</ProjectField>

                <ProjectField label="Descrição">{description}</ProjectField>

                <ProjectField label="Principais funcionalidades">
                  <ul className="sistemas-projects__feature-list">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </ProjectField>

                {technologies?.length ? (
                  <ProjectField label="Tecnologias">
                    <ul className="sistemas-projects__tech-list">
                      {technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </ProjectField>
                ) : null}

                <ProjectField label="Objetivo do projeto">{objective}</ProjectField>

                {url ? (
                  <a
                    href={url}
                    className="sistemas-projects__visit-link"
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
