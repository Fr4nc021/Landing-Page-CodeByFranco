import './Trabalhos.css'

const projects = [
  {
    id: 'Sistemas',
    image: '/logo/trabalhos/sistemas.png',
    category: 'Sistemas',
    title: 'Sistemas e Automação de Processos',
    description: 'Ferramentas desenvolvidas para otimizar operações, reduzir tarefas manuais e aumentar a produtividade.',
    href: '/projetos/sistemas',
    openInNewTab: true,
  },
  {
    id: 'Landing',
    image: '/logo/trabalhos/landing.png',
    category: 'Landing page',
    title: 'Apresentação online',
    description: 'Páginas desenvolvidas para transformar visitantes em clientes, com design estratégico, carregamento rápido e foco em resultados.',
    href: '/projetos/landing',
    openInNewTab: true,
  },
  {
    id: 'ecommerce',
    image: '/logo/trabalhos/e-comerce.jpg',
    category: 'E-commerce',
    title: 'Sites e Catálogos Online',
    description: 'Soluções para apresentar produtos, serviços e fortalecer a presença digital da marca de forma profissional.',
    href: '/projetos/catalogos',
    openInNewTab: true,
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17L17 7M17 7H9M17 7v8" />
    </svg>
  )
}

export default function Trabalhos() {
  return (
    <section className="trabalhos" id="projetos" aria-labelledby="trabalhos-heading">
      <div className="trabalhos__inner">
        <header className="trabalhos__header">
          <div className="trabalhos__header-main">
            <span className="trabalhos__label">Projetos</span>
            <h2 id="trabalhos-heading" className="trabalhos__title">
              Trabalhos{' '}
              <span className="trabalhos__title-accent">selecionados.</span>
            </h2>
          </div>
          <p className="trabalhos__description">
            Uma amostra de projetos entregues com cuidado em cada pixel.
          </p>
        </header>

        <ul className="trabalhos__grid">
          {projects.map(({ id, image, category, title, description, href, openInNewTab }) => (
            <li key={id} className="trabalhos__card">
              <a
                href={href}
                className="trabalhos__card-link"
                {...(openInNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <div className="trabalhos__card-media">
                  <img src={image} alt={`Mockup do projeto ${title}`} className="trabalhos__card-image" />
                </div>

                <div className="trabalhos__card-body">
                  <div className="trabalhos__card-text">
                    <span className="trabalhos__card-category">{category}</span>
                    <h3 className="trabalhos__card-title">{title}</h3>
                    <p className="trabalhos__card-description">{description}</p>
                  </div>

                  <span className="trabalhos__card-action" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
